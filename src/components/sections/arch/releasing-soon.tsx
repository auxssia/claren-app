"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";

const features = [
  "evidence graphing",
  "chronology extraction",
  "legal flow visualization",
  "contextual document search",
];

export function ReleasingSoon() {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Releasing Soon"
        title="First public testing release is coming"
        description="Initial features include evidence graphing, chronology extraction, legal flow visualization, and contextual document search. More features will be added progressively."
      />
      <AnimatedStagger className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {features.map((f) => (
          <div
            key={f}
            className="px-4 py-3 rounded-lg border border-border text-sm text-foreground text-center"
          >
            {f}
          </div>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
