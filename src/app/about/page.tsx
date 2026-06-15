"use client";

import { Hero } from "@/components/about/Hero";
import { MissionVision } from "@/components/about/MissionVision";
import { Story } from "@/components/about/Story";
import { Values } from "@/components/about/Values";
import { Franchise } from "@/components/about/Franchise";
import { CtaSection } from "@/components/about/CtaSection";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Story />
      <Values />
      <Franchise />
      <CtaSection />
    </>
  );
}
