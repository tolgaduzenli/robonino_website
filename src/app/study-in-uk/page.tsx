"use client";

import { Hero } from "@/components/study-uk/Hero";
import { Schools } from "@/components/study-uk/Schools";
import { Partnership } from "@/components/study-uk/Partnership";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function StudyInUKPage() {
  return (
    <>
      <Hero />
      <Schools />
      <Partnership />
      <CtaBanner />
    </>
  );
}
