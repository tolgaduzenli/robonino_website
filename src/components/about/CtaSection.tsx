"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();
  const { cta } = t.about;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="relative bg-primary rounded-[40px] p-lg sm:p-xl text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto space-y-md">
            <h2 className="text-headline-lg text-on-primary">{cta.title}</h2>
            <p className="text-body-lg text-on-primary opacity-80">{cta.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-md pt-sm">
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl text-label-md hover:scale-105 transition-transform active:scale-95"
              >
                {cta.primaryCta}
              </Link>
              <Link
                href="/robotics-coding"
                className="bg-white text-primary px-8 py-4 rounded-xl text-label-md hover:bg-surface-alt transition-all"
              >
                {cta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
