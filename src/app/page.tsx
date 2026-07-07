import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/hero";
import { WhatClarenDoes } from "@/components/sections/home/what-claren-does";
import { WhoThisIsFor } from "@/components/sections/home/who-this-is-for";
import { FutureDirection } from "@/components/sections/home/future-direction";

export const metadata: Metadata = {
  title: "Visual intelligence for litigation workflows",
  description:
    "Claren maps unstructured case documents, procedural stages, and statutory relationships into deterministic timelines for lawyers and law students.",
  openGraph: {
    title: "Claren — Visual intelligence for litigation workflows",
    description:
      "Deterministic timelines from unstructured case documents, procedural stages, and statutory relationships.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatClarenDoes />
      <WhoThisIsFor />
      <FutureDirection />
    </>
  );
}
