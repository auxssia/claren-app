import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";
import { Eye, BookOpen, Compass, Shield } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "See relationships",
    desc: "Understand how statutes, procedures, and stages connect.",
  },
  {
    icon: BookOpen,
    title: "Learn visually",
    desc: "Procedural systems become clear through visual mapping.",
  },
  {
    icon: Compass,
    title: "Navigate confidently",
    desc: "Know what comes next in any litigation workflow.",
  },
  {
    icon: Shield,
    title: "Operational reference",
    desc: "Use procedural maps as daily working tools.",
  },
];

export function WhyAtlasMatters() {
  return (
    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
        Why Atlas matters
      </h2>
      <p className="text-sm text-muted mb-8 max-w-xl">
        Law is difficult to understand because everything is disconnected.
        Atlas helps users make sense of the whole system.
      </p>
      <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="border border-border rounded-xl p-5 bg-card"
          >
            <r.icon className="h-5 w-5 text-foreground mb-3" />
            <h3 className="text-sm font-medium mb-1.5">{r.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
