import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * File-system Markdown blog engine. Posts live in /content/blog as .md
 * files with gray-matter frontmatter:
 *
 *   title:   post headline
 *   summary: 50–80 word self-contained answer block (rendered above the body
 *            and used as the schema.org description)
 *   date:    ISO publish date
 *   updated: optional ISO modified date
 *
 * Server-side only — reads the filesystem directly.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const SITE_URL = "https://claren.app";
export const AUTHOR = {
  name: "Manas",
  jobTitle: "Founder & Law Student",
};

export interface PostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated?: string;
}

export interface Post extends PostMeta {
  /** Rendered HTML body with id-anchored question-format H2 headings. */
  html: string;
  /** Table of contents built from H2 headings. */
  headings: { id: string; text: string }[];
}

function safeSlug(slug: string): string {
  const clean = slug.replace(/\.md$/i, "").trim();
  if (!/^[a-z0-9-]+$/i.test(clean)) {
    throw new Error(`Invalid blog slug: ${slug}`);
  }
  return clean;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function getAllPostSlugs(): Promise<string[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(BLOG_DIR);
  } catch {
    return [];
  }
  return entries
    .filter((f) => f.toLowerCase().endsWith(".md"))
    .map((f) => f.replace(/\.md$/i, ""));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const file = await fs.readFile(path.join(BLOG_DIR, `${slug}.md`), "utf-8");
      const { data } = matter(file);
      return {
        slug,
        title: String(data.title ?? slug),
        summary: String(data.summary ?? ""),
        date: String(data.date ?? ""),
        updated: data.updated ? String(data.updated) : undefined,
      };
    })
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const clean = safeSlug(slug);
  let file: string;
  try {
    file = await fs.readFile(path.join(BLOG_DIR, `${clean}.md`), "utf-8");
  } catch {
    return null;
  }
  const { data, content } = matter(file);
  const { html, headings } = renderMarkdown(content);
  return {
    slug: clean,
    title: String(data.title ?? clean),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    updated: data.updated ? String(data.updated) : undefined,
    html,
    headings,
  };
}

/* ------------------------------------------------------------------ */
/* Minimal deterministic Markdown → HTML renderer.                     */
/* Supports the subset used by Build Log posts: h2/h3 headings (with   */
/* anchor ids for search-engine deep links), paragraphs, lists, code   */
/* fences, blockquotes, bold/italic/inline code, and links.            */
/* ------------------------------------------------------------------ */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(text: string): string {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" class="underline underline-offset-4 hover:text-foreground transition-colors">$1</a>'
    );
}

export function renderMarkdown(markdown: string): {
  html: string;
  headings: { id: string; text: string }[];
} {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings: { id: string; text: string }[] = [];
  const out: string[] = [];

  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let codeBlock: string[] | null = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(
        `<p class="text-base text-muted leading-relaxed mb-6">${renderInline(paragraph.join(" "))}</p>`
      );
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      const tag = list.ordered ? "ol" : "ul";
      const style = list.ordered ? "list-decimal" : "list-disc";
      out.push(
        `<${tag} class="${style} pl-5 space-y-2 text-base text-muted leading-relaxed mb-6">` +
          list.items.map((i) => `<li>${renderInline(i)}</li>`).join("") +
          `</${tag}>`
      );
      list = null;
    }
  };

  for (const line of lines) {
    if (codeBlock !== null) {
      if (line.trim().startsWith("```")) {
        out.push(
          `<pre class="border border-border rounded-lg bg-card p-4 text-xs font-mono overflow-x-auto mb-6"><code>${escapeHtml(codeBlock.join("\n"))}</code></pre>`
        );
        codeBlock = null;
      } else {
        codeBlock.push(line);
      }
      continue;
    }

    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushList();
      codeBlock = [];
      continue;
    }
    if (trimmed === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const h2 = trimmed.match(/^##\s+(.+)$/);
    const h3 = trimmed.match(/^###\s+(.+)$/);
    if (h3) {
      flushParagraph();
      flushList();
      out.push(
        `<h3 id="${slugifyHeading(h3[1])}" class="text-lg font-semibold tracking-tight text-foreground mt-10 mb-4 scroll-mt-24">${renderInline(h3[1])}</h3>`
      );
      continue;
    }
    if (h2) {
      flushParagraph();
      flushList();
      const id = slugifyHeading(h2[1]);
      headings.push({ id, text: h2[1] });
      out.push(
        `<h2 id="${id}" class="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-12 mb-4 scroll-mt-24">${renderInline(h2[1])}</h2>`
      );
      continue;
    }

    const quote = trimmed.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      out.push(
        `<blockquote class="border-l-2 border-foreground/30 pl-4 text-base text-muted italic leading-relaxed mb-6">${renderInline(quote[1])}</blockquote>`
      );
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const isOrdered = Boolean(ordered);
      if (!list || list.ordered !== isOrdered) {
        flushList();
        list = { ordered: isOrdered, items: [] };
      }
      list.items.push((unordered ?? ordered)![1]);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  if (codeBlock !== null) {
    out.push(
      `<pre class="border border-border rounded-lg bg-card p-4 text-xs font-mono overflow-x-auto mb-6"><code>${escapeHtml(codeBlock.join("\n"))}</code></pre>`
    );
  }

  return { html: out.join("\n"), headings };
}
