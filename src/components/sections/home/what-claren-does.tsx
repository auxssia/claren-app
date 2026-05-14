"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { EvidenceGraph } from "@/components/visuals/evidence-graph";
import { X, Check } from "lucide-react";

const notFeatures = [
  "another dashboard",
  "another chatbot",
  "another folder system",
];

const yesFeatures = [
  "map evidence",
  "understand chronology",
  "connect legal provisions",
  "visualize procedures",
  "explore cases as systems",
];

export function WhatClarenDoes() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Most legal software feels like paperwork. Claren is different."
        className="max-w-3xl"
      />
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                Instead of giving you
              </p>
              <ul className="space-y-2">
                {notFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                    <X className="h-3.5 w-3.5 text-muted/40" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                Claren helps you
              </p>
              <ul className="space-y-2">
                {yesFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="h-3.5 w-3.5 text-foreground" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted pt-4 border-t border-border/50 italic">
              The goal is simple: make law easier to understand and easier to navigate.
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-card">
            <EvidenceGraph />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
