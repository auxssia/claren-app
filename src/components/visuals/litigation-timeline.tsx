"use client";

import { useRef, useState, useEffect } from "react";

const events = [
  { date: "12 Mar", label: "Notice Issued", desc: "Legal notice under S.138" },
  { date: "25 Mar", label: "Reply Filed", desc: "Response to notice" },
  { date: "05 Apr", label: "Complaint", desc: "Filed in magistrate court" },
  { date: "18 Apr", label: "Evidence", desc: "Document submission" },
  { date: "02 May", label: "Hearing", desc: "First appearance" },
];

export function LitigationTimeline() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
      {events.map((event, i) => (
        <div
          key={event.date}
          className="relative pb-8 last:pb-0"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(12px)",
            transition: `all 0.5s ease-out ${i * 120}ms`,
          }}
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground/30" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted font-mono mb-0.5">{event.date}</div>
              <div className="text-sm font-medium mb-0.5">{event.label}</div>
              <div className="text-xs text-muted">{event.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
