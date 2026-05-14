import type { Metadata } from "next";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingTiers } from "@/components/sections/pricing/pricing-tiers";
import { WhyWeDoThis } from "@/components/sections/pricing/why-we-do-this";
import { LawFirmContact } from "@/components/sections/pricing/law-firm-contact";

export const metadata: Metadata = {
  title: "Pricing — Simple and transparent",
  description:
    "Claren is open source and free to use. Hosted plans for power users and teams. Custom deployments for law firms.",
  openGraph: {
    title: "Pricing — Claren",
    description:
      "Open source litigation intelligence. Free core, hosted plans, and enterprise deployments.",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <WhyWeDoThis />
      <LawFirmContact />
    </>
  );
}
