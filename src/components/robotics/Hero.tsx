"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { roboticsHeroImage } from "@/lib/images";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t.robotics;

  return (
    <section className="relative pt-32 pb-xl overflow-hidden bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-block bg-tertiary/10 text-tertiary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
              {hero.badge}
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-primary leading-tight">
              {hero.title}
            </h1>
            <p className="text-body-lg text-muted max-w-lg">{hero.description}</p>
            <div className="flex flex-wrap gap-md pt-sm">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md flex items-center gap-xs hover:shadow-lg transition-all"
              >
                {hero.primaryCta} <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-surface text-primary border border-border px-8 py-4 rounded-xl text-label-md hover:bg-surface-alt transition-all"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={roboticsHeroImage} alt="" fill sizes="50vw" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
