"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const links = [
  { href: "/study-in-uk", key: "studyInUK" as const },
  { href: "/robotics-coding", key: "roboticsCoding" as const },
  { href: "/corporate-events", key: "corporateEvents" as const },
];

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex justify-between items-center w-full px-6 sm:px-8 py-4 max-w-(--spacing-container) mx-auto">
        <Link href="/" className="text-headline-md font-extrabold text-primary tracking-tighter">
          Robonino
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted font-medium text-label-md hover:text-secondary transition-colors duration-200"
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <button
            onClick={() => setLocale(locale === "en" ? "tr" : "en")}
            className="hidden sm:block text-label-md text-muted hover:text-secondary transition-all"
            aria-label="Toggle language"
          >
            {locale === "en" ? "TR/EN" : "EN/TR"}
          </button>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-label-md hover:opacity-90 active:scale-95 transition-all"
          >
            {t.nav.applyNow}
          </Link>
        </div>
      </nav>
    </header>
  );
}
