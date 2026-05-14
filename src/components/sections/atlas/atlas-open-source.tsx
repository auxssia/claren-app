"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";

const values = ["transparent", "inspectable", "collaborative", "accessible"];

export function AtlasOpenSource() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Open Source
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-xl mb-6">
            Atlas is fully open source and community-driven. We want legal
            knowledge systems to be transparent, inspectable, collaborative,
            and accessible.
          </p>
          <div className="flex flex-wrap gap-2">
            {values.map((v) => (
              <span
                key={v}
                className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted capitalize"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
