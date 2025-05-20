// src/app/presentation/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { ExpertiseSection } from "@/components/sections/presentation/ExpertiseSection";
import { HistorySection } from "@/components/sections/presentation/HistorySection";
import { MeetTeamCTA } from "@/components/sections/presentation/MeetTeamCTA";
import { PresentationHero } from "@/components/sections/presentation/PresentationHero";
import { TeamSection } from "@/components/sections/presentation/TeamSection";
import { ValuesSection } from "@/components/sections/presentation/ValuesSection";
import { MobileCallButton } from "@/components/ui/mobile-call-button";

export default function PresentationPage() {
  return (
    <SiteContainer>
      <PresentationHero />
      <HistorySection />
      <ValuesSection />
      <TeamSection />
      <ExpertiseSection />
      <MeetTeamCTA />
      <MobileCallButton />
    </SiteContainer>
  );
}