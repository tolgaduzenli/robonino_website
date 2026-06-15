"use client";

import Image from "next/image";
import { Headset, ShieldCheck, Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { whyImage } from "@/lib/images";

const icons = [Headset, ShieldCheck, Languages];

export function WhyRobonino() {
  const { t } = useLanguage();
  const { why } = t.home;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div>
            <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
              {why.label}
            </span>
            <h2 className="text-headline-lg mt-base">{why.title}</h2>
            <p className="text-body-lg text-muted mt-md">{why.description}</p>
            <div className="mt-lg space-y-gutter">
              {why.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div key={feature.title} className="flex gap-md">
                    <div className="bg-surface p-sm rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-headline-md">{feature.title}</h4>
                      <p className="text-muted mt-xs">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary/10 absolute -inset-8 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-[40px] shadow-2xl overflow-hidden h-[500px] w-full">
              <Image src={whyImage} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
