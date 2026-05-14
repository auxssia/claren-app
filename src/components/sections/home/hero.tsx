"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function HomeHero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(".anim-child");
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="gradient-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 text-center">
        <h1 className="anim-child text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-6">
          Visual intelligence
          <br />
          for litigation.
        </h1>
        <p className="anim-child text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          Claren helps lawyers and law students understand cases, evidence,
          timelines, and legal procedures visually — instead of digging through
          endless PDFs and documents.
        </p>
        <div className="anim-child flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/arch"
            className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
          >
            Explore Arch
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
          >
            View pricing
          </Link>
        </div>
        <p className="anim-child text-xs text-muted/50 mt-8 tracking-wider uppercase">
          Open source &middot; Explainable &middot; Built in public
        </p>
      </div>
    </section>
  );
}
