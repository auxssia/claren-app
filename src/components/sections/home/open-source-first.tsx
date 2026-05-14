"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { Github } from "lucide-react";

export function OpenSourceFirst() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
              <Github className="h-5 w-5 text-background" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Open Source First
              </h2>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-2xl mb-6">
            The core ML systems behind Claren are open source and free to use.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {["transparent", "accessible", "inspectable", "community-driven"].map(
              (word) => (
                <div
                  key={word}
                  className="px-3 py-2 rounded-lg border border-border/60 text-xs text-muted capitalize"
                >
                  {word}
                </div>
              )
            )}
          </div>
          <p className="text-xs text-muted/60">
            The hosted experience helps support development, infrastructure, and future research.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
