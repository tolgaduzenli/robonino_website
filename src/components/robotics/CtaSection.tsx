"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();
  const { cta } = t.robotics;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-md">
          <h2 className="text-headline-lg">{cta.title}</h2>
          <p className="text-body-lg text-muted">{cta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-md pt-sm">
            <Link
              href="/contact"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-xl text-label-md hover:scale-105 transition-transform active:scale-95"
            >
              {cta.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="bg-surface text-primary border border-border px-8 py-4 rounded-xl text-label-md hover:bg-surface-alt transition-all"
            >
              {cta.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
