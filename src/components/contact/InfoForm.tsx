"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactMapImage } from "@/lib/images";
import { Icon } from "@/lib/icons";

export function InfoForm() {
  const { t } = useLanguage();
  const { info, form } = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-xl bg-surface-alt">
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div className="space-y-gutter">
            {info.items.map((item) => (
              <div key={item.title} className="bg-surface rounded-[24px] p-lg shadow-sm flex gap-md">
                <div className="bg-secondary/10 text-secondary p-sm rounded-2xl shrink-0 h-fit">
                  <Icon name={item.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-headline-md text-primary">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-body-md text-muted">
                      {line}
                    </p>
                  ))}
                  {item.note && <p className="text-label-sm text-muted mt-xs">{item.note}</p>}
                  {item.whatsapp && (
                    <Link
                      href="https://wa.me/902125550000"
                      className="inline-block mt-sm text-secondary font-semibold text-label-md"
                    >
                      {item.whatsapp}
                    </Link>
                  )}
                </div>
              </div>
            ))}
            <div className="relative h-[220px] rounded-[24px] overflow-hidden shadow-sm">
              <Image src={contactMapImage} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <span className="bg-surface text-primary px-6 py-3 rounded-full text-label-md shadow-lg">
                  {info.mapLabel}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-[32px] p-lg sm:p-xl shadow-sm">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-xl">
                <p className="text-headline-md text-primary">
                  {form.submit} ✓
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-md">
                <div>
                  <label className="text-label-md text-primary block mb-xs">{form.name.label}</label>
                  <input
                    type="text"
                    required
                    placeholder={form.name.placeholder}
                    className="w-full border border-border rounded-xl px-4 py-3 text-body-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="text-label-md text-primary block mb-xs">{form.email.label}</label>
                  <input
                    type="email"
                    required
                    placeholder={form.email.placeholder}
                    className="w-full border border-border rounded-xl px-4 py-3 text-body-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="text-label-md text-primary block mb-xs">{form.phone.label}</label>
                  <input
                    type="tel"
                    placeholder={form.phone.placeholder}
                    className="w-full border border-border rounded-xl px-4 py-3 text-body-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="text-label-md text-primary block mb-xs">{form.interest.label}</label>
                  <select className="w-full border border-border rounded-xl px-4 py-3 text-body-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary">
                    {form.interest.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-label-md text-primary block mb-xs">{form.message.label}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={form.message.placeholder}
                    className="w-full border border-border rounded-xl px-4 py-3 text-body-md text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md hover:shadow-lg transition-all"
                >
                  {form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
