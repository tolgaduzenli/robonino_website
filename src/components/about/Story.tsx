"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { aboutStoryImage } from "@/lib/images";

export function Story() {
  const { t } = useLanguage();
  const { story } = t.about;

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="relative h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={aboutStoryImage} alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="space-y-md">
            <h2 className="text-headline-lg">{story.title}</h2>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-muted">
                {paragraph}
              </p>
            ))}
            <blockquote className="border-l-4 border-secondary pl-md text-headline-md text-primary italic">
              {story.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
