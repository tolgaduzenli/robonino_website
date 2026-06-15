"use client";

import { Hero } from "@/components/corporate/Hero";
import { ProExperience } from "@/components/corporate/ProExperience";
import { WhyRobotics } from "@/components/corporate/WhyRobotics";
import { WorkshopFormats } from "@/components/corporate/WorkshopFormats";
import { Flexible } from "@/components/corporate/Flexible";
import { CtaSection } from "@/components/corporate/CtaSection";

export default function CorporateEventsPage() {
  return (
    <>
      <Hero />
      <ProExperience />
      <WhyRobotics />
      <WorkshopFormats />
      <Flexible />
      <CtaSection />
    </>
  );
}
