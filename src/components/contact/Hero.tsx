"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t.contact;

  return (
    <section className="pt-32 pb-lg bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8 text-center">
        <span className="inline-block bg-secondary/10 text-secondary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
          {hero.badge}
        </span>
        <h1 className="text-display-lg sm:text-display-xl text-primary leading-tight mt-base">
          {hero.title}
        </h1>
        <p className="text-body-lg text-muted max-w-2xl mx-auto mt-sm">{hero.description}</p>
      </div>
    </section>
  );
}
