"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Icon } from "@/lib/icons";

export function MissionVision() {
  const { t } = useLanguage();
  const { missionVision } = t.about;

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="bg-primary rounded-[32px] p-lg sm:p-xl">
            <div className="bg-white/10 text-on-primary p-sm rounded-2xl w-fit mb-md">
              <Icon name={missionVision.vision.icon} size={28} />
            </div>
            <h3 className="text-headline-md text-on-primary">{missionVision.vision.title}</h3>
            <p className="text-body-md text-on-primary opacity-80 mt-sm">
              {missionVision.vision.description}
            </p>
            <button className="mt-md flex items-center gap-xs text-secondary font-semibold text-label-md hover:gap-sm transition-all">
              {missionVision.vision.cta} <ArrowRight size={18} />
            </button>
          </div>
          <div className="bg-surface-alt rounded-[32px] p-lg sm:p-xl">
            <div className="bg-tertiary/10 text-tertiary p-sm rounded-2xl w-fit mb-md">
              <Icon name={missionVision.stem.icon} size={28} />
            </div>
            <h3 className="text-headline-md text-primary">{missionVision.stem.title}</h3>
            <p className="text-body-md text-muted mt-sm">{missionVision.stem.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter mt-gutter">
          {missionVision.stats.map((stat) => (
            <div key={stat.label} className="text-center bg-surface-alt rounded-[24px] p-lg">
              <span className="text-display-lg text-secondary block">{stat.value}</span>
              <span className="text-label-md text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
