"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { schoolCardImages } from "@/lib/images";
import { Icon } from "@/lib/icons";

export function Schools() {
  const { t } = useLanguage();
  const { schools } = t.studyInUK;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-md mb-lg">
          <div>
            <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
              {schools.label}
            </span>
            <h2 className="text-headline-lg mt-base">{schools.title}</h2>
            <p className="text-body-lg text-muted mt-sm max-w-2xl">{schools.description}</p>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="text-label-sm text-muted uppercase tracking-widest">
              {schools.filterLabel}
            </span>
            <select className="border border-border rounded-xl px-4 py-3 text-label-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary">
              {schools.filters.map((filter) => (
                <option key={filter}>{filter}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {schools.items.map((item, index) => (
            <div
              key={item.name}
              className="bg-surface-alt rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[220px]">
                <Image
                  src={schoolCardImages[index]}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-surface p-sm rounded-2xl shadow-sm text-secondary">
                  <Icon name={item.icon} size={28} />
                </div>
              </div>
              <div className="p-lg">
                <h3 className="text-headline-md text-primary">{item.name}</h3>
                <div className="flex items-center gap-xs text-muted text-label-md mt-xs mb-sm">
                  <MapPin size={16} /> {item.location}
                </div>
                <p className="text-body-md text-muted">{item.description}</p>
                <button className="mt-md flex items-center gap-xs text-secondary font-semibold text-label-md hover:gap-sm transition-all">
                  {item.cta} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-gutter bg-primary rounded-[32px] p-lg sm:p-xl text-center">
          <h3 className="text-headline-md text-on-primary">{schools.ctaCard.title}</h3>
          <p className="text-body-md text-on-primary opacity-80 mt-sm max-w-xl mx-auto">
            {schools.ctaCard.description}
          </p>
          <button className="mt-md bg-secondary text-on-secondary px-8 py-4 rounded-xl text-label-md hover:opacity-90 transition-all">
            {schools.ctaCard.button}
          </button>
        </div>
      </div>
    </section>
  );
}
