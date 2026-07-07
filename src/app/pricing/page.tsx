import type { Metadata } from "next";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingTiers } from "@/components/sections/pricing/pricing-tiers";
import { WhyWeDoThis } from "@/components/sections/pricing/why-we-do-this";
import { LawFirmContact } from "@/components/sections/pricing/law-firm-contact";

export const metadata: Metadata = {
  title: "Pricing — Simple and transparent",
  description:
    "Claren offers a free hosted tier, pro access for power users and teams, and custom private deployments for law firms.",
  openGraph: {
    title: "Pricing — Claren",
    description:
      "Litigation intelligence with a free hosted tier, pro plans, and custom law firm deployments.",
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
