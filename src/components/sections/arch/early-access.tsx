"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedSection } from "@/components/common/animated-section";
import { WaitlistForm } from "@/components/common/waitlist-form";
import { GraduationCap, Scale, Users, Building2 } from "lucide-react";

const roles = [
  { icon: GraduationCap, label: "law students" },
  { icon: Scale, label: "litigators" },
  { icon: Users, label: "researchers" },
  { icon: Building2, label: "small firms" },
];

export function EarlyAccess() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="border border-border rounded-2xl p-8 sm:p-12 bg-card text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Early Access
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            Arch is currently in active development. We&apos;re opening early testing for:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {roles.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted"
              >
                <r.icon className="h-3 w-3" />
                {r.label}
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-4">
            <WaitlistForm />
          </div>
          <p className="text-xs text-muted/60">
            Join the waitlist to test upcoming releases and help shape the product.
          </p>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
