"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const steps = [
  { label: "Notice Served", status: "complete" },
  { label: "Reply Period", status: "complete" },
  { label: "Complaint Filed", status: "active" },
  { label: "Evidence Stage", status: "pending" },
  { label: "Arguments", status: "pending" },
  { label: "Judgment", status: "pending" },
];

export function ProceduralFlow() {
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
    <div ref={ref} className="w-full overflow-x-auto">
      <div className="flex items-start gap-0 min-w-max pb-2">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex items-center"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(10px)",
              transition: `all 0.4s ease-out ${i * 100}ms`,
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-medium transition-colors ${
                  step.status === "complete"
                    ? "bg-foreground text-background border-foreground"
                    : step.status === "active"
                      ? "border-foreground text-foreground"
                      : "border-border text-muted/50"
                }`}
              >
                {step.status === "complete" ? "✓" : i + 1}
              </div>
              <span
                className={`text-[10px] whitespace-nowrap font-medium ${
                  step.status === "active" ? "text-foreground" : "text-muted/60"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mx-3 mt-[-2px]">
                <div className="w-12 h-px bg-border" />
                <ArrowDown className="h-2.5 w-2.5 text-muted/40 -ml-1 rotate-[-90deg]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
