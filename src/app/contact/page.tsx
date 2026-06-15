"use client";

import { Hero } from "@/components/contact/Hero";
import { InfoForm } from "@/components/contact/InfoForm";
import { Specialized } from "@/components/contact/Specialized";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <InfoForm />
      <Specialized />
    </>
  );
}
