"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ label, title, items }: { label: string; title: string; items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="text-center mb-lg">
          <span className="text-secondary font-bold text-label-sm uppercase tracking-widest">
            {label}
          </span>
          <h2 className="text-headline-lg mt-base">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-md">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-md text-left"
                  aria-expanded={isOpen}
                >
                  <h4 className="text-headline-md text-primary">{item.question}</h4>
                  <ChevronDown
                    size={24}
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-body-md text-muted mt-sm">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
