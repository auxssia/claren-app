import { ArchHero } from "@/components/sections/arch/arch-hero";
import { WhatArchDoes } from "@/components/sections/arch/what-arch-does";
import { WhyArchExists } from "@/components/sections/arch/why-arch-exists";
import { BuiltDifferently } from "@/components/sections/arch/built-differently";
import { ArchOpenSource } from "@/components/sections/arch/arch-open-source";
import { EarlyAccess } from "@/components/sections/arch/early-access";
import { ReleasingSoon } from "@/components/sections/arch/releasing-soon";

export default function ArchPage() {
  return (
    <>
      <ArchHero />
      <WhatArchDoes />
      <WhyArchExists />
      <BuiltDifferently />
      <ArchOpenSource />
      <EarlyAccess />
      <ReleasingSoon />
    </>
  );
}
