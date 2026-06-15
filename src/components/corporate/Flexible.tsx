"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

export function Flexible() {
  const { t } = useLanguage();
  const { flexible } = t.corporate;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-lg">
          <h2 className="text-headline-lg">{flexible.title}</h2>
          <p className="text-body-lg text-muted mt-sm">{flexible.description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-md">
          {flexible.chips.map((chip) => (
            <div
              key={chip.label}
              className="flex items-center gap-sm bg-surface px-6 py-4 rounded-full shadow-sm border border-border"
            >
              <Icon name={chip.icon} size={22} className="text-secondary" />
              <span className="text-label-md text-primary">{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
