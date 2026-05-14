import { HomeHero } from "@/components/sections/home/hero";
import { WhatClarenDoes } from "@/components/sections/home/what-claren-does";
import { MeetArch } from "@/components/sections/home/meet-arch";
import { OpenSourceFirst } from "@/components/sections/home/open-source-first";
import { WhoThisIsFor } from "@/components/sections/home/who-this-is-for";
import { FutureDirection } from "@/components/sections/home/future-direction";

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
