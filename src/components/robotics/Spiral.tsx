"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

export function Spiral() {
  const { t } = useLanguage();
  const { spiral } = t.robotics;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg max-w-3xl mx-auto">
          <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
            {spiral.label}
          </span>
          <h2 className="text-headline-lg mt-base">{spiral.title}</h2>
          <p className="text-body-lg text-muted mt-sm">{spiral.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {spiral.points.map((point) => (
            <div key={point.title} className="bg-surface rounded-[32px] p-lg shadow-sm text-center">
              <div className="bg-tertiary/10 text-tertiary p-sm rounded-2xl w-fit mx-auto mb-md">
                <Icon name={point.icon} size={32} />
              </div>
              <h3 className="text-headline-md text-primary">{point.title}</h3>
              <p className="text-body-md text-muted mt-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
