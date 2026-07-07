import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/common/section-wrapper";
import {
  AUTHOR,
  SITE_URL,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

/** BlogPosting + TechArticle @graph for RAG/AI-search crawlers. */
function buildSchema(post: {
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated?: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const author = {
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
  };
  const shared = {
    isPartOf: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.summary,
    inLanguage: "en-US",
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author,
    publisher: {
      "@type": "Organization",
      name: "Claren",
      url: SITE_URL,
    },
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "TechArticle", "@id": `${url}#article`, ...shared },
      { "@type": "BlogPosting", "@id": `${url}#post`, ...shared },
    ],
  };
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  return (
    <SectionWrapper className="max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(post)) }}
      />
      <article>
        <p className="text-xs font-mono text-muted uppercase tracking-wider mb-4">
          {formatDate(post.date)}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        {/* Direct-answer summary block: self-contained definition placed
            before the body so RAG crawlers can lift and cite it directly. */}
        <div className="border-2 border-foreground rounded-xl p-6 bg-card mb-12">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
            Summary
          </p>
          <p className="text-base text-foreground leading-relaxed">
            {post.summary}
          </p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </SectionWrapper>
  );
}
