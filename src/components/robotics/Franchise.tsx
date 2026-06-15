"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Franchise() {
  const { t } = useLanguage();
  const { franchise } = t.robotics;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="bg-primary rounded-[40px] p-lg sm:p-xl text-center">
          <span className="inline-block bg-white/10 text-on-primary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
            {franchise.badge}
          </span>
          <h2 className="text-headline-lg text-on-primary mt-base">{franchise.title}</h2>
          <p className="text-body-lg text-on-primary opacity-80 mt-sm max-w-2xl mx-auto">
            {franchise.description}
          </p>
          <div className="flex flex-wrap justify-center gap-md mt-lg">
            {franchise.logos.map((logo) => (
              <div
                key={logo}
                className="bg-white/10 text-on-primary px-8 py-4 rounded-xl text-headline-md"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
