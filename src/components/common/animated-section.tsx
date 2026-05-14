"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: isMobile ? 12 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.5 : 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function AnimatedStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const items = el.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: isMobile ? 8 : 16 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.4 : 0.6,
          stagger: isMobile ? Math.min(stagger, 0.04) : stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}
