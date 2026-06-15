"use client";

import Image from "next/image";
import { CheckCircle, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { aboutFranchiseImage } from "@/lib/images";

export function Franchise() {
  const { t } = useLanguage();
  const { franchise } = t.about;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="inline-block bg-tertiary/10 text-tertiary font-bold text-label-sm uppercase tracking-widest px-4 py-2 rounded-full">
              {franchise.badge}
            </span>
            <h2 className="text-headline-lg">{franchise.title}</h2>
            <p className="text-body-lg text-muted">{franchise.description}</p>
            <div className="space-y-sm">
              {franchise.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-xs text-primary">
                  <CheckCircle size={20} className="text-secondary" /> {bullet}
                </div>
              ))}
            </div>
            <button className="mt-sm bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md hover:shadow-lg transition-all">
              {franchise.button}
            </button>
          </div>
          <div className="relative">
            <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image src={aboutFranchiseImage} alt="" fill sizes="50vw" className="object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-surface rounded-2xl p-md shadow-xl flex items-center gap-md">
              <div className="bg-secondary/10 text-secondary p-sm rounded-2xl">
                <Award size={28} />
              </div>
              <div>
                <h4 className="text-headline-md text-primary">{franchise.certifiedLabel}</h4>
                <p className="text-body-md text-muted">{franchise.certifiedSublabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
