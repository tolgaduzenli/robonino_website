"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

export function Values() {
  const { t } = useLanguage();
  const { values } = t.about;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg">
          <h2 className="text-headline-lg">{values.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {values.items.map((item) => (
            <div key={item.title} className="bg-surface-alt rounded-[32px] p-lg shadow-sm text-center">
              <div className="bg-secondary/10 text-secondary p-sm rounded-2xl w-fit mx-auto mb-md">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-headline-md text-primary">{item.title}</h3>
              <p className="text-body-md text-muted mt-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
