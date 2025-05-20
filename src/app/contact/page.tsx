// src/app/contact/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { FAQSection } from "@/components/sections/contact/FAQSection";
import { MapAndHoursSection } from "@/components/sections/contact/MapAndHoursSection";
import { QuickContactCards } from "@/components/sections/contact/QuickContactCards";
import { MobileCallButton } from "@/components/ui/mobile-call-button";

export default function ContactPage() {
  return (
    <SiteContainer>
      <ContactHero />
      <QuickContactCards />
      <MapAndHoursSection />
      <ContactFormSection />
      <FAQSection />
      <MobileCallButton />
    </SiteContainer>
  );
}