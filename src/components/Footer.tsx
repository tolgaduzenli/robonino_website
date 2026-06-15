"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { href: "/about", label: t.footer.company[0] },
    { href: "/contact", label: t.footer.company[1] },
  ];

  return (
    <footer className="bg-surface-alt py-xl mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 sm:px-8 max-w-(--spacing-container) mx-auto">
        <div className="space-y-sm">
          <span className="text-headline-md font-extrabold text-primary">Robonino</span>
          <p className="text-muted text-label-md">{t.footer.description}</p>
        </div>
        <div className="space-y-sm">
          <h5 className="font-bold text-primary">{t.footer.programsTitle}</h5>
          <ul className="space-y-xs">
            {t.footer.programs.map((program) => (
              <li key={program}>
                <Link
                  href="/robotics-coding"
                  className="text-muted text-label-sm hover:text-secondary underline transition-all"
                >
                  {program}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-sm">
          <h5 className="font-bold text-primary">{t.footer.companyTitle}</h5>
          <ul className="space-y-xs">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted text-label-sm hover:text-secondary underline transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-sm">
          <h5 className="font-bold text-primary">{t.footer.getHelpTitle}</h5>
          <a
            href="mailto:info@robonino.com"
            className="block text-muted text-label-sm hover:text-secondary underline transition-all"
          >
            info@robonino.com
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-xs bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-label-sm font-bold hover:bg-secondary hover:text-white transition-all"
          >
            <MessageCircle size={16} /> {t.footer.whatsapp}
          </a>
        </div>
      </div>
      <div className="max-w-(--spacing-container) mx-auto px-6 sm:px-8 mt-xl pt-lg border-t border-border text-center">
        <p className="text-label-sm text-muted opacity-70">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
