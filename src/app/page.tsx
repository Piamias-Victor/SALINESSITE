// src/app/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { TeamPreviewSection } from "@/components/sections/home/TeamPreviewSection";
import { ContactCTASection } from "@/components/sections/shared/ContactCTASection";
import { MobileCallButton } from "@/components/ui/mobile-call-button";


export default function Home() {
  return (
    <SiteContainer>
      <HeroSection />
      <LocationSection />
      <ServicesSection />
      <ContactCTASection />
      <TeamPreviewSection />
      <MobileCallButton />
    </SiteContainer>
  );
}