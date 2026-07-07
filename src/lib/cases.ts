import { promises as fs } from "fs";
import path from "path";

/**
 * Server-side ingestion layer for the local Supreme Court judgment corpus.
 *
 * - Structured metadata lives in /cases/processed (one JSON per judgment)
 * - Full judgment text lives in /cases/raw (one .txt per judgment, same basename)
 *
 * This module must only be imported from Server Components, route handlers,
 * or generateStaticParams — it reads the filesystem directly.
 */

const PROCESSED_DIR = path.join(process.cwd(), "cases", "processed");
const RAW_DIR = path.join(process.cwd(), "cases", "raw");

export interface CaseRecord {
  case_id: string;
  case_name: string;
  court: string;
  year: number;
  judges: string[];
  bench: string[];
  petitioner: string;
  respondent: string;
  citations: string[];
  statutes: string[];
  legal_domain: string;
  legal_subdomain: string;
  court_level: string;
  decision_date: string;
  outcome: string;
  facts: string[];
  issues: string[];
  petitioner_arguments: string[];
  respondent_arguments: string[];
  court_reasoning: string[];
  holding: string[];
  cases_cited: string[];
}

export interface CaseDetail extends CaseRecord {
  slug: string;
  /** Opening extract of the raw judgment text (word-boundary trimmed). */
  rawExcerpt: string;
}

export interface RelatedCase {
  slug: string;
  case_name: string;
  year: number;
  legal_domain: string;
  citation: string;
}

const RAW_EXCERPT_LENGTH = 1600;

/** Guard against path traversal — slugs are bare basenames like "C1". */
function safeSlug(slug: string): string {
  const clean = slug.replace(/\.json$/i, "").trim();
  if (!/^[A-Za-z0-9_-]+$/.test(clean)) {
    throw new Error(`Invalid case slug: ${slug}`);
  }
  return clean;
}

/** Normalize a citation or case-name string for fuzzy cross-referencing. */
function normalizeCitation(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b(vs?|versus)\b\.?/g, "v")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * All processed case slugs, for generateStaticParams().
 */
export async function getAllCaseSlugs(): Promise<string[]> {
  const entries = await fs.readdir(PROCESSED_DIR);
  return entries
    .filter((f) => f.toLowerCase().endsWith(".json"))
    .map((f) => f.replace(/\.json$/i, ""))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

/**
 * Full structured payload for one judgment, plus a raw-text extract.
 */
export async function getCaseBySlug(slug: string): Promise<CaseDetail | null> {
  const clean = safeSlug(slug);

  let record: CaseRecord;
  try {
    const json = await fs.readFile(
      path.join(PROCESSED_DIR, `${clean}.json`),
      "utf-8"
    );
    record = JSON.parse(json) as CaseRecord;
  } catch {
    return null;
  }

  let rawExcerpt = "";
  try {
    const raw = await fs.readFile(path.join(RAW_DIR, `${clean}.txt`), "utf-8");
    rawExcerpt =
      raw.length <= RAW_EXCERPT_LENGTH
        ? raw.trim()
        : raw.slice(0, RAW_EXCERPT_LENGTH).replace(/\s+\S*$/, "").trim();
  } catch {
    // Raw text is optional — some judgments may only have processed metadata.
  }

  return { ...record, slug: clean, rawExcerpt };
}

/**
 * Full raw judgment text for one case, when the excerpt is not enough.
 */
export async function getCaseFullText(slug: string): Promise<string | null> {
  try {
    return await fs.readFile(
      path.join(RAW_DIR, `${safeSlug(slug)}.txt`),
      "utf-8"
    );
  } catch {
    return null;
  }
}

interface CitationIndexEntry {
  slug: string;
  case_name: string;
  year: number;
  legal_domain: string;
  /** Normalized keys this case answers to: its name + reporter citations. */
  keys: string[];
}

let citationIndexPromise: Promise<CitationIndexEntry[]> | null = null;

/**
 * One-time in-memory index of every processed case, keyed by its
 * normalized case name and reporter citations. Built lazily and cached
 * for the lifetime of the build process.
 */
function getCitationIndex(): Promise<CitationIndexEntry[]> {
  if (!citationIndexPromise) {
    citationIndexPromise = (async () => {
      const slugs = await getAllCaseSlugs();
      const entries = await Promise.all(
        slugs.map(async (slug): Promise<CitationIndexEntry | null> => {
          try {
            const json = await fs.readFile(
              path.join(PROCESSED_DIR, `${slug}.json`),
              "utf-8"
            );
            const record = JSON.parse(json) as CaseRecord;
            const keys = [
              normalizeCitation(record.case_name ?? ""),
              ...(record.citations ?? []).map(normalizeCitation),
            ].filter((k) => k.length > 3);
            return {
              slug,
              case_name: record.case_name,
              year: record.year,
              legal_domain: record.legal_domain,
              keys,
            };
          } catch {
            return null;
          }
        })
      );
      return entries.filter((e): e is CitationIndexEntry => e !== null);
    })();
  }
  return citationIndexPromise;
}

/**
 * Cross-references cited case strings against the processed corpus to
 * build semantic internal-linking arrays. A cited string matches a case
 * when it contains that case's normalized name or reporter citation.
 * Pass the source case's slug as `excludeSlug` so a judgment never
 * links to itself through its own reporter citation.
 */
export async function getRelatedCases(
  citations: string[],
  limit = 12,
  excludeSlug?: string
): Promise<RelatedCase[]> {
  if (citations.length === 0) return [];

  const index = await getCitationIndex();
  const normalized = citations
    .map((c) => ({ original: c, key: normalizeCitation(c) }))
    .filter((c) => c.key.length > 3);

  const related = new Map<string, RelatedCase>();
  for (const entry of index) {
    if (entry.slug === excludeSlug) continue;
    for (const cited of normalized) {
      const hit = entry.keys.some(
        (key) => cited.key.includes(key) || key.includes(cited.key)
      );
      if (hit && !related.has(entry.slug)) {
        related.set(entry.slug, {
          slug: entry.slug,
          case_name: entry.case_name,
          year: entry.year,
          legal_domain: entry.legal_domain,
          citation: cited.original,
        });
        break;
      }
    }
    if (related.size >= limit) break;
  }
  return [...related.values()];
}
