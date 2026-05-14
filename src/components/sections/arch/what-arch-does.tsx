"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { EvidenceGraph } from "@/components/visuals/evidence-graph";
import { LitigationTimeline } from "@/components/visuals/litigation-timeline";
import { LegalNodeMap } from "@/components/visuals/legal-node-map";
import { ContextualSearchPanel } from "@/components/visuals/contextual-search-panel";
import { DocumentRelationships } from "@/components/visuals/document-relationships";
import { GitBranch, Clock, Map, Search, Link2 } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Evidence Mapping",
    desc: "Connect documents, screenshots, chats, invoices, notices, and exhibits into a visual relationship graph.",
    visual: EvidenceGraph,
  },
  {
    icon: Clock,
    title: "Chronology Building",
    desc: "Automatically organize case events into structured timelines.",
    visual: LitigationTimeline,
  },
  {
    icon: Map,
    title: "Procedural Navigation",
    desc: "Understand what happens next in litigation workflows.",
    visual: LegalNodeMap,
  },
  {
    icon: Search,
    title: "Contextual Search",
    desc: "Search across case files, evidence, and extracted text instantly.",
    visual: ContextualSearchPanel,
  },
  {
    icon: Link2,
    title: "Legal Connections",
    desc: "Discover related provisions, cases, and procedural dependencies.",
    visual: DocumentRelationships,
  },
];

export function WhatArchDoes() {
  return (
    <SectionWrapper>
      <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
        What Arch does
      </p>
      <div className="space-y-16">
        {features.map((feature, i) => {
          const VisualComponent = feature.visual;
          return (
            <AnimatedSection key={feature.title}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <feature.icon className="h-5 w-5 text-foreground mb-3" />
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div
                  className={`border border-border rounded-xl p-4 bg-card ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <VisualComponent />
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
