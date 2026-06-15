"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { corporateWorkshopImage } from "@/lib/images";
import { Icon } from "@/lib/icons";

export function WorkshopFormats() {
  const { t } = useLanguage();
  const { workshopFormats } = t.corporate;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="text-headline-lg">{workshopFormats.title}</h2>
            <p className="text-body-lg text-muted mt-sm">{workshopFormats.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter mt-lg">
              {workshopFormats.items.map((item) => (
                <div key={item.title} className="flex gap-md">
                  <div className="bg-surface-alt p-sm rounded-2xl shadow-sm text-tertiary shrink-0 h-fit">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <div>
                    <h4 className="text-headline-md">{item.title}</h4>
                    <p className="text-muted mt-xs text-body-md">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={corporateWorkshopImage} alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
