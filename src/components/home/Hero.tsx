"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { heroImage } from "@/lib/images";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t.home;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-alt">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-alt via-surface-alt/40 to-transparent z-10" />
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-20 max-w-(--spacing-container) mx-auto px-6 sm:px-8 py-xl">
        <div className="max-w-2xl space-y-md">
          <h1 className="text-display-lg sm:text-display-xl text-primary leading-tight">
            {hero.title}
          </h1>
          <p className="text-body-lg text-muted max-w-lg">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-md pt-sm">
            <Link
              href="/study-in-uk"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md flex items-center gap-xs hover:shadow-lg transition-all"
            >
              {hero.ctaStudyUK} <ArrowRight size={18} />
            </Link>
            <Link
              href="/robotics-coding"
              className="bg-surface text-primary border border-border px-8 py-4 rounded-xl text-label-md hover:bg-surface-alt transition-all"
            >
              {hero.ctaRobotics}
            </Link>
            <Link
              href="/corporate-events"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-xl text-label-md hover:opacity-90 transition-all"
            >
              {hero.ctaCorporate}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
