"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { destinationImages } from "@/lib/images";

export function Destinations() {
  const { t } = useLanguage();
  const { destinations } = t.home;

  return (
    <section className="py-xl bg-surface overflow-hidden">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg">
          <h2 className="text-headline-lg">{destinations.title}</h2>
          <p className="text-muted mt-base">{destinations.subtitle}</p>
        </div>
        <div className="flex gap-gutter overflow-x-auto pb-lg snap-x hide-scrollbar">
          {destinations.cities.map((city, index) => (
            <div key={city.name} className="min-w-[260px] sm:min-w-[300px] flex-1 snap-center group">
              <div className="relative overflow-hidden rounded-[24px] aspect-3/4 mb-md">
                <Image
                  src={destinationImages[index]}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-headline-md">{city.name}</h4>
              <p className="text-label-md text-muted">{city.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
