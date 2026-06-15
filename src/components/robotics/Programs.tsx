"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

type Category = "all" | "preschool" | "primary" | "teens";

export function Programs() {
  const { t } = useLanguage();
  const { programs } = t.robotics;
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: programs.filters.all },
    { key: "preschool", label: programs.filters.preschool },
    { key: "primary", label: programs.filters.primary },
    { key: "teens", label: programs.filters.teens },
  ];

  const items =
    activeFilter === "all"
      ? programs.items
      : programs.items.filter((item) => item.category === activeFilter);

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="mb-lg">
          <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
            {programs.label}
          </span>
          <h2 className="text-headline-lg mt-base">{programs.title}</h2>
        </div>
        <div className="flex flex-wrap gap-sm mb-lg">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-label-md transition-all ${
                activeFilter === filter.key
                  ? "bg-primary text-on-primary"
                  : "bg-surface-alt text-primary hover:bg-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-surface-alt rounded-[32px] p-lg shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="bg-surface p-sm rounded-2xl shadow-sm text-tertiary w-fit mb-md">
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className="text-headline-md text-primary">{item.title}</h3>
              <span className="text-label-sm text-muted uppercase tracking-widest">{item.age}</span>
              <p className="text-body-md text-muted mt-sm">{item.description}</p>
              <button className="mt-md flex items-center gap-xs text-secondary font-semibold text-label-md hover:gap-sm transition-all">
                {item.cta} <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
