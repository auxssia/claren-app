"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { FileText, Image, MessageSquare, FileWarning, Scan, FolderOpen } from "lucide-react";

const sources = [
  { icon: FileText, label: "PDFs" },
  { icon: Image, label: "screenshots" },
  { icon: MessageSquare, label: "WhatsApp chats" },
  { icon: FileWarning, label: "notices" },
  { icon: Scan, label: "scanned docs" },
  { icon: FolderOpen, label: "annexures" },
];

export function WhyArchExists() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Why Arch exists
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Legal work is full of fragmented information. Important facts are
              spread across:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {sources.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs text-muted"
                >
                  <s.icon className="h-3 w-3" />
                  {s.label}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted leading-relaxed italic">
              Arch helps bring those pieces together into one understandable
              system.
            </p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card space-y-4">
            <div className="text-xs font-mono text-muted uppercase tracking-wider">
              Fragmented &rarr; Structured
            </div>
            <div className="space-y-2">
              {[
                "Evidence graph with relationships",
                "Unified timeline extraction",
                "Cross-document search",
                "Automated chronology",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-foreground"
                  style={{
                    opacity: 1,
                    animation: `fade-in 0.4s ease-out ${i * 100}ms both`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
