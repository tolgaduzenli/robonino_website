"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { serviceImages } from "@/lib/images";

export function Services() {
  const { t } = useLanguage();
  const { services } = t.home;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="mb-lg">
          <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
            {services.label}
          </span>
          <h2 className="text-headline-lg mt-base">{services.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.items.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[32px] aspect-4/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={serviceImages[index]}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 p-lg text-on-primary">
                <h3 className="text-headline-md mb-sm">{item.title}</h3>
                <ul className="space-y-xs mb-md opacity-90">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-xs">
                      <CheckCircle size={18} /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-primary px-6 py-2.5 rounded-full text-label-md hover:bg-secondary hover:text-white transition-all">
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
