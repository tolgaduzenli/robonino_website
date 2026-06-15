"use client";

import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

export function WhyRobotics() {
  const { t } = useLanguage();
  const { whyRobotics } = t.corporate;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg max-w-2xl mx-auto">
          <h2 className="text-headline-lg">{whyRobotics.title}</h2>
          <p className="text-body-lg text-muted mt-sm">{whyRobotics.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {whyRobotics.items.map((item) => (
            <div key={item.title} className="bg-surface rounded-[32px] p-lg shadow-sm">
              <div className="bg-secondary/10 text-secondary p-sm rounded-2xl w-fit mb-md">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-headline-md text-primary">{item.title}</h3>
              <p className="text-body-md text-muted mt-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-gutter bg-primary rounded-[32px] p-lg sm:p-xl">
          <h3 className="text-headline-md text-on-primary">{whyRobotics.feature.title}</h3>
          <p className="text-body-md text-on-primary opacity-80 mt-sm max-w-2xl">
            {whyRobotics.feature.description}
          </p>
          <div className="flex flex-wrap gap-md mt-md">
            {whyRobotics.feature.checklist.map((item) => (
              <div key={item} className="flex items-center gap-xs text-on-primary">
                <CheckCircle size={20} className="text-secondary" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
