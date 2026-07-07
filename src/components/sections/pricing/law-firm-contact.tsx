import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { MessageSquare, Server, Workflow, Puzzle, LayoutDashboard } from "lucide-react";

const offerings = [
  { icon: Server, label: "Private deployments" },
  { icon: Workflow, label: "Workflow integrations" },
  { icon: Puzzle, label: "Internal tooling" },
  { icon: LayoutDashboard, label: "Custom interfaces" },
];

export function LawFirmContact() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
                For Law Firms
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Enterprise-grade litigation intelligence
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                We work directly with law firms to set up private deployments,
                customize workflows, and build internal tools around the Claren
                intelligence engine.
              </p>
              <a
                href="https://wa.me/917032659891"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
              >
                <MessageSquare className="h-4 w-4" />
                Contact on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {offerings.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border text-xs text-muted"
                >
                  <item.icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
