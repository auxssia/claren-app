import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-24 text-center">
      <div className="gradient-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="opacity-0 animate-fade-up text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6 max-w-3xl mx-auto text-balance">
          Visual Intelligence for <br className="hidden sm:inline" />Litigation Workflows.
        </h1>
        <p
          className="opacity-0 animate-fade-up text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10"
          style={{ animationDelay: "120ms" }}
        >
          Claren maps unstructured case documents, procedural stages, and
          statutory relationships into deterministic timelines. Built to stop
          2 AM manual chronology extraction.
        </p>
        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/atlas"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-foreground text-background px-7 py-3 text-sm font-medium transition-all hover:opacity-90"
          >
            Launch Engine
          </Link>
          <Link
            href="/philosophy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-card/60 transition-colors"
          >
            Read the Manifesto <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </div>
        <p
          className="opacity-0 animate-fade-up text-[11px] font-mono tracking-[0.2em] text-muted/60 uppercase"
          style={{ animationDelay: "360ms" }}
        >
          DETERMINISTIC · EXPLAINABLE · BUILT IN PUBLIC
        </p>
      </div>
    </section>
  );
}
