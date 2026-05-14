import type { Metadata } from "next";
import { ArchHero } from "@/components/sections/arch/arch-hero";
import { WhatArchDoes } from "@/components/sections/arch/what-arch-does";
import { WhyArchExists } from "@/components/sections/arch/why-arch-exists";
import { BuiltDifferently } from "@/components/sections/arch/built-differently";
import { ArchOpenSource } from "@/components/sections/arch/arch-open-source";
import { EarlyAccess } from "@/components/sections/arch/early-access";
import { ReleasingSoon } from "@/components/sections/arch/releasing-soon";

export const metadata: Metadata = {
  title: "Arch — Litigation intelligence built for clarity",
  description:
    "Arch helps lawyers understand cases through evidence relationships, procedural flows, timelines, legal connections, and contextual search.",
  openGraph: {
    title: "Arch — Claren",
    description:
      "Litigation intelligence built for clarity. Evidence mapping, chronology building, procedural navigation.",
  },
};

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
