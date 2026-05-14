"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";

const pillars = [
  "reduce chaos",
  "improve clarity",
  "speed up understanding",
  "support legal reasoning",
];

export function BuiltDifferently() {
  return (
    <SectionWrapper>
      <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
        <AnimatedStagger className="space-y-6">
          <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
            Arch is not designed to replace lawyers.
          </p>
          <p className="text-sm text-muted">It is designed to:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {pillars.map((p) => (
              <div
                key={p}
                className="px-4 py-3 rounded-lg border border-border/60 text-sm text-foreground"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted/60 pt-4 border-t border-border/50 italic">
            We care more about explainability than flashy AI demos.
          </p>
        </AnimatedStagger>
      </div>
    </SectionWrapper>
  );
}
