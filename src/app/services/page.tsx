// src/app/services/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesBooklet } from "@/components/sections/services/ServicesBooklet";
import { ServicesContact } from "@/components/sections/services/ServicesContact";
import { ServicesFilter } from "@/components/sections/services/ServicesFilter";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { MobileCallButton } from "@/components/ui/mobile-call-button";



export default function ServicesPage() {
  return (
    <SiteContainer>
      <ServicesHero />
      <ServicesFilter />
      <ServicesList />
      <ServicesBooklet />
      <ServicesContact />
      <MobileCallButton />
    </SiteContainer>
  );
}