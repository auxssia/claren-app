"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { WaitlistForm } from "@/components/common/waitlist-form";

export function ArchHero() {
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
          Arch
        </p>
        <h1 className="anim-child text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
          Litigation intelligence
          <br />
          built for clarity.
        </h1>
        <p className="anim-child text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          Arch helps lawyers understand cases through evidence relationships,
          procedural flows, timelines, legal connections, and contextual
          search — instead of chatting with random AI outputs.
        </p>
        <div className="anim-child flex justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
