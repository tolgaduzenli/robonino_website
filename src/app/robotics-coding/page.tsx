"use client";

import { Hero } from "@/components/robotics/Hero";
import { Programs } from "@/components/robotics/Programs";
import { Spiral } from "@/components/robotics/Spiral";
import { Franchise } from "@/components/robotics/Franchise";
import { CtaSection } from "@/components/robotics/CtaSection";

export default function RoboticsCodingPage() {
  return (
    <>
      <Hero />
      <Programs />
      <Spiral />
      <Franchise />
      <CtaSection />
    </>
  );
}
