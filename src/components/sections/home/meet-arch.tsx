"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { LitigationTimeline } from "@/components/visuals/litigation-timeline";
import { LegalNodeMap } from "@/components/visuals/legal-node-map";
import { ArrowRight } from "lucide-react";

export function MeetArch() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Meet Arch
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Arch
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Arch is Claren&apos;s litigation intelligence engine. It helps connect
              evidence, timelines, legal provisions, case relationships, and
              procedural flows.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Arch is designed to assist legal thinking, not replace lawyers. It
              focuses on structure, clarity, and explainability instead of blind
              AI-generated answers.
            </p>
            <Link
              href="/arch"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Learn more about Arch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-8">
            <div className="border border-border rounded-xl p-4 bg-card">
              <LitigationTimeline />
            </div>
            <div className="border border-border rounded-xl p-4 bg-card">
              <LegalNodeMap />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
