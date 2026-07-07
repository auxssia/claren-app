import { SectionWrapper } from "@/components/common/section-wrapper";
import { AnimatedStagger } from "@/components/common/animated-section";
import { Check, Server, Building2, Sparkles } from "lucide-react";

const tiers = [
  {
    icon: Sparkles,
    title: "Hosted Chat Interface",
    subtitle: "Free Tier",
    desc: "For users who want a simple hosted experience without managing infrastructure.",
    features: [
      "2 chat uses per day",
      "Basic document interaction",
      "Limited testing access",
      "Public model releases",
    ],
    action: "No payment required.",
    highlighted: true,
  },
  {
    icon: Server,
    title: "Hosted Pro Access",
    subtitle: "Coming Later",
    desc: "For power users and teams who need more.",
    features: [
      "Higher usage limits",
      "Saved workspaces",
      "Larger uploads",
      "Team collaboration",
      "Persistent case memory",
      "Advanced litigation tools",
    ],
    action: "Details coming soon.",
    highlighted: false,
  },
  {
    icon: Building2,
    title: "Custom Law Firm Deployments",
    subtitle: "Contact Us",
    desc: "Need a private setup for your firm? We plan to offer private deployments, custom interfaces, workflow integrations, internal hosting, and dedicated support.",
    action: "This helps support the continued development of the platform.",
    features: [
      "Private deployments",
      "Custom interfaces",
      "Workflow integrations",
      "Internal hosting",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export function PricingTiers() {
  return (
    <SectionWrapper>
      <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className={`rounded-xl border p-6 ${
              tier.highlighted
                ? "border-foreground bg-card"
                : "border-border bg-card/50"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <tier.icon className="h-4 w-4 text-foreground" />
                  <h3 className="text-sm font-semibold">{tier.title}</h3>
                </div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider">
                  {tier.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {tier.desc}
            </p>
            {tier.features && (
              <ul className="space-y-1.5 mb-4">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-muted"
                  >
                    <Check className="h-3 w-3 text-foreground/50" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-xs text-muted/60 italic">{tier.action}</p>
          </div>
        ))}
      </AnimatedStagger>
    </SectionWrapper>
  );
}
