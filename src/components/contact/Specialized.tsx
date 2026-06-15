"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Specialized() {
  const { t } = useLanguage();
  const { specialized } = t.contact;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="bg-surface-alt rounded-[32px] p-lg sm:p-xl text-center max-w-2xl mx-auto">
          <h2 className="text-headline-lg">{specialized.title}</h2>
          <p className="text-body-lg text-muted mt-sm">{specialized.description}</p>
          <button className="mt-md bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md hover:shadow-lg transition-all">
            {specialized.button}
          </button>
        </div>
      </div>
    </section>
  );
}
