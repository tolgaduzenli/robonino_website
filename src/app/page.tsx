"use client";

import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyRobonino } from "@/components/home/WhyRobonino";
import { Destinations } from "@/components/home/Destinations";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Faq } from "@/components/Faq";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Services />
      <WhyRobonino />
      <Destinations />
      <Testimonials />
      <Faq label={t.home.faq.label} title={t.home.faq.title} items={t.home.faq.items} />
      <CtaBanner />
    </>
  );
}
