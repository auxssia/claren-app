import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingTiers } from "@/components/sections/pricing/pricing-tiers";
import { WhyWeDoThis } from "@/components/sections/pricing/why-we-do-this";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <WhyWeDoThis />
    </>
  );
}
