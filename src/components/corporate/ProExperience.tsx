"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { corporateGalleryImages } from "@/lib/images";
import { Icon } from "@/lib/icons";

export function ProExperience() {
  const { t } = useLanguage();
  const { proExperience } = t.corporate;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="grid grid-cols-2 gap-sm">
            {corporateGalleryImages.map((src, index) => (
              <div
                key={src}
                className={`relative rounded-[24px] overflow-hidden ${
                  index % 2 === 0 ? "h-[180px] sm:h-[220px]" : "h-[140px] sm:h-[180px] mt-lg"
                }`}
              >
                <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="space-y-md">
            <h2 className="text-headline-lg">{proExperience.title}</h2>
            <p className="text-body-lg text-muted">{proExperience.description}</p>
            <div className="space-y-gutter pt-sm">
              {proExperience.features.map((feature) => (
                <div key={feature.title} className="flex gap-md">
                  <div className="bg-surface-alt p-sm rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                    <Icon name={feature.icon} size={28} />
                  </div>
                  <div>
                    <h4 className="text-headline-md">{feature.title}</h4>
                    <p className="text-muted mt-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
