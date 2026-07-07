import type { Metadata } from "next";
import { AtlasHero } from "@/components/sections/atlas/atlas-hero";
import { WhatAtlasDoes } from "@/components/sections/atlas/what-atlas-does";
import { ExampleSection } from "@/components/sections/atlas/example-section";
import { WhyAtlasMatters } from "@/components/sections/atlas/why-atlas-matters";
import { DesignedFor } from "@/components/sections/atlas/designed-for";

export const metadata: Metadata = {
  title: "Atlas — Procedural intelligence for law",
  description:
    "Atlas helps lawyers and students understand how legal procedures connect across statutes, timelines, and litigation stages.",
  openGraph: {
    title: "Atlas — Claren",
    description:
      "Procedural intelligence for law. Understand legal procedures visually.",
  },
};

export default function AtlasPage() {
  return (
    <>
      <AtlasHero />
      <WhatAtlasDoes />
      <ExampleSection />
      <WhyAtlasMatters />
      <DesignedFor />
    </>
  );
}
