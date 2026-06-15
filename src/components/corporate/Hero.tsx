"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { corporateHeroImage } from "@/lib/images";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t.corporate;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image src={corporateHeroImage} alt="" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
      </div>
      <div className="relative z-20 max-w-(--spacing-container) mx-auto px-6 sm:px-8 py-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-block bg-white/10 text-on-primary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
              {hero.badge}
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-on-primary leading-tight">
              {hero.title}
            </h1>
            <p className="text-body-lg text-on-primary opacity-80 max-w-lg">{hero.description}</p>
            <div className="flex flex-wrap gap-md pt-sm">
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl text-label-md flex items-center gap-xs hover:opacity-90 transition-all"
              >
                {hero.primaryCta} <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-on-primary border border-white/20 px-8 py-4 rounded-xl text-label-md hover:bg-white/20 transition-all"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-lg max-w-sm space-y-xs">
              <span className="text-headline-md text-on-primary">{hero.glassCard.label}</span>
              <p className="text-body-md text-on-primary opacity-80">{hero.glassCard.sublabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
