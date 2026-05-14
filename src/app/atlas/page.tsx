import { AtlasHero } from "@/components/sections/atlas/atlas-hero";
import { WhatAtlasDoes } from "@/components/sections/atlas/what-atlas-does";
import { ExampleSection } from "@/components/sections/atlas/example-section";
import { WhyAtlasMatters } from "@/components/sections/atlas/why-atlas-matters";
import { DesignedFor } from "@/components/sections/atlas/designed-for";
import { AtlasOpenSource } from "@/components/sections/atlas/atlas-open-source";

export default function AtlasPage() {
  return (
    <>
      <AtlasHero />
      <WhatAtlasDoes />
      <ExampleSection />
      <WhyAtlasMatters />
      <DesignedFor />
      <AtlasOpenSource />
    </>
  );
}
