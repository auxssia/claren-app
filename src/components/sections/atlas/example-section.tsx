import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { ProceduralFlow } from "@/components/visuals/procedural-flow";

export function ExampleSection() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-1">
            Example
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
            A cheque bounce matter becomes
          </h3>
          <div className="space-y-2 mb-8">
            {[
              ["notice period", "limitation timeline"],
              ["complaint maintainability", "jurisdiction requirements"],
              ["procedural stages"],
            ].map((row, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {row.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-md border border-border text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted italic">
            all connected visually in one place.
          </p>
          <div className="mt-8 pt-6 border-t border-border/50">
            <ProceduralFlow />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
