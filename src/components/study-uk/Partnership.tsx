"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { partnershipImage } from "@/lib/images";

export function Partnership() {
  const { t } = useLanguage();
  const { partnership } = t.studyInUK;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image src={partnershipImage} alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-md">
            <h2 className="text-headline-lg">{partnership.title}</h2>
            <p className="text-body-lg text-muted">{partnership.description}</p>
            <div className="bg-surface rounded-[32px] p-lg shadow-sm inline-flex flex-col gap-xs">
              <span className="text-display-lg text-secondary">{partnership.statValue}</span>
              <span className="text-headline-md text-primary">{partnership.statLabel}</span>
              <span className="text-body-md text-muted max-w-xs">{partnership.statDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
