import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/hero";
import { WhatClarenDoes } from "@/components/sections/home/what-claren-does";
import { MeetArch } from "@/components/sections/home/meet-arch";
import { OpenSourceFirst } from "@/components/sections/home/open-source-first";
import { WhoThisIsFor } from "@/components/sections/home/who-this-is-for";
import { FutureDirection } from "@/components/sections/home/future-direction";

export const metadata: Metadata = {
  title: "Visual intelligence for litigation",
  description:
    "Claren helps lawyers and law students understand cases, evidence, timelines, and legal procedures visually — instead of digging through endless PDFs and documents.",
  openGraph: {
    title: "Claren — Visual intelligence for litigation",
    description:
      "Understand cases, evidence, timelines, and legal procedures visually.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatClarenDoes />
      <MeetArch />
      <OpenSourceFirst />
      <WhoThisIsFor />
      <FutureDirection />
    </>
  );
}
