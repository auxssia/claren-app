"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";
import { GraduationCap, Scale, Users, Search } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Law Students",
    desc: "Understand legal procedures visually instead of memorizing disconnected sections.",
  },
  {
    icon: Scale,
    title: "Junior Lawyers",
    desc: "Navigate litigation flows, timelines, and evidence faster.",
  },
  {
    icon: Users,
    title: "Litigation Teams",
    desc: "Organize complex cases into understandable systems.",
  },
  {
    icon: Search,
    title: "Researchers",
    desc: "Explore relationships between statutes, cases, and procedures.",
  },
];

export function WhoThisIsFor() {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Who this is for"
        title="Built for legal professionals at every level"
      />
      <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {audiences.map((a) => (
          <div
            key={a.title}
            className="border border-border rounded-xl p-5 bg-card hover:bg-card/50 transition-colors"
          >
            <a.icon className="h-5 w-5 text-foreground mb-3" />
            <h3 className="text-sm font-medium mb-1.5">{a.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
