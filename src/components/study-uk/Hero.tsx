"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { studyHeroImage } from "@/lib/images";
import { Icon } from "@/lib/icons";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t.studyInUK;

  return (
    <section className="relative pt-32 pb-xl overflow-hidden bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-block bg-secondary/10 text-secondary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
              {hero.badge}
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-primary leading-tight">
              {hero.title}
            </h1>
            <p className="text-body-lg text-muted max-w-lg">{hero.description}</p>
            <div className="flex flex-wrap gap-md pt-sm">
              {hero.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-sm bg-surface px-5 py-3 rounded-xl shadow-sm border border-border"
                >
                  <Icon name={badge.icon} size={22} className="text-secondary" />
                  <span className="text-label-md text-primary">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={studyHeroImage} alt="" fill sizes="50vw" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
