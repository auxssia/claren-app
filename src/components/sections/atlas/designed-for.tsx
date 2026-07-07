import { SectionWrapper, SectionHeader } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";

const groups = [
  {
    title: "Law Students",
    desc: "Understand legal systems visually instead of memorizing isolated sections.",
  },
  {
    title: "Junior Associates",
    desc: "Navigate procedural workflows faster.",
  },
  {
    title: "Litigation Teams",
    desc: "Use procedural maps as operational references.",
  },
  {
    title: "Researchers",
    desc: "Explore legal relationships structurally.",
  },
];

export function DesignedFor() {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Designed for"
        title="Built for legal professionals at every level"
      />
      <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="border border-border rounded-xl p-5 bg-card"
          >
            <h3 className="text-sm font-medium mb-1.5">{g.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
