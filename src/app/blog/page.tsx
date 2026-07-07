import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Build Log",
  description:
    "Engineering notes on building Claren: legal drafting ontologies, deterministic litigation timelines, and the architecture behind the platform.",
  openGraph: {
    title: "Build Log — Claren",
    description:
      "Engineering notes on legal drafting ontologies and deterministic litigation intelligence.",
  },
};

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <SectionWrapper>
      <SectionHeader
        label="Build Log"
        title="Notes from building Claren"
        description="Architecture decisions, ontology research, and honest progress reports — written as the platform is built."
      />
      {posts.length === 0 ? (
        <p className="text-sm text-muted">No entries yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-w-3xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-border rounded-xl p-6 bg-card/50 hover:bg-card transition-colors"
            >
              <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
                {formatDate(post.date)}
              </p>
              <h2 className="text-lg font-semibold tracking-tight mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {post.summary}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                Read entry
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
