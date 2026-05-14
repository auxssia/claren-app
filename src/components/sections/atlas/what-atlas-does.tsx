"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { ProceduralTree } from "@/components/visuals/procedural-tree";
import { ArrowRight } from "lucide-react";

export function WhatAtlasDoes() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="What Atlas does"
        description="Atlas turns complex legal procedures into interactive flows, visual pathways, and connected legal systems."
      />
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="border border-border rounded-xl p-4 bg-card">
            <ProceduralTree />
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted leading-relaxed">
              Instead of reading law section by section, Atlas helps users
              understand:
            </p>
            <ul className="space-y-2">
              {[
                "what triggers what",
                "procedural dependencies",
                "timelines",
                "conditions",
                "next possible steps",
              ].map((item) => (
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
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
