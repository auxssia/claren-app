"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { ArrowRight } from "lucide-react";

const current = [
  "litigation intelligence",
  "procedural mapping",
  "evidence analysis",
];

const planned = [
  "assisted drafting",
  "plaint structuring",
  "notice generation",
  "chronology extraction",
  "contradiction detection",
  "procedural reasoning systems",
];

export function FutureDirection() {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Future Direction"
        title="Building toward an explainable operating system for litigation"
      />
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Starting with
            </p>
            <ul className="space-y-2">
              {current.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-muted/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Building toward
            </p>
            <ul className="space-y-2">
              {planned.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-muted/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted mt-8 pt-6 border-t border-border/50 italic max-w-xl">
          The long-term goal is to build an explainable operating system for
          litigation.
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}
