"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function AtlasHero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(".anim-child");
      gsap.fromTo(
        items,
        { opacity: 0, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.5 : 0.7,
          stagger: isMobile ? 0.06 : 0.12,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="gradient-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 text-center">
        <p className="anim-child text-xs font-medium text-muted uppercase tracking-widest mb-5">
          Atlas
        </p>
        <h1 className="anim-child text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
          Procedural intelligence
          <br />
          for law.
        </h1>
        <p className="anim-child text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
          Atlas helps lawyers and students understand how legal procedures
          connect across statutes, timelines, and litigation stages.
        </p>
      </div>
    </section>
  );
}
