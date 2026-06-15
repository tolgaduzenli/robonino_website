"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { testimonialAvatars } from "@/lib/images";

export function Testimonials() {
  const { t } = useLanguage();
  const { testimonials } = t.home;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg">
          <h2 className="text-headline-lg">{testimonials.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.items.map((item, index) => (
            <div
              key={item.name}
              className="bg-surface p-lg rounded-[24px] shadow-sm border border-border flex flex-col justify-between"
            >
              <div className="space-y-sm">
                <div className="flex text-secondary gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-body-md italic">&ldquo;{item.quote}&rdquo;</p>
              </div>
              <div className="mt-lg flex items-center gap-md">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src={testimonialAvatars[index]} alt="" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-label-md">{item.name}</p>
                  <p className="text-label-sm text-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
