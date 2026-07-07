import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";

const oldWay = ["expensive", "closed", "difficult to trust"];
const newWay = ["transparent", "explainable", "accessible", "community-driven"];

export function WhyWeDoThis() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            Why we&apos;re doing this
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                Legal software is often
              </p>
              <ul className="space-y-2">
                {oldWay.map((item) => (
                  <li key={item} className="text-sm text-muted capitalize">
                    &mdash; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                We want to build systems that are
              </p>
              <ul className="space-y-2">
                {newWay.map((item) => (
                  <li key={item} className="text-sm text-foreground capitalize">
                    &mdash; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted/60 italic pt-4 border-t border-border/50">
            while still building sustainable infrastructure around them.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
