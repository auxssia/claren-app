"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function PricingHero() {
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
    <section ref={container} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="gradient-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <h1 className="anim-child text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-4">
          Pricing
        </h1>
        <p className="anim-child text-base text-muted">
          Simple and transparent.
        </p>
      </div>
    </section>
  );
}
