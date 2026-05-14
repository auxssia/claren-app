"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { Github, Eye, Server, GitFork } from "lucide-react";

export function ArchOpenSource() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Open Source
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              The Arch ML engine is open source. You can inspect the models,
              self-host it, contribute to development, and use the core system
              for free.
            </p>
            <p className="text-xs text-muted/60 italic">
              We believe legal intelligence systems should be transparent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Eye, label: "Inspect models" },
              { icon: Server, label: "Self-host" },
              { icon: GitFork, label: "Contribute" },
              { icon: Github, label: "Free to use" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border text-xs text-muted"
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
