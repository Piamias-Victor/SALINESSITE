// src/app/quiz/[slug]/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { QuizPlayer } from "@/components/sections/quiz/QuizPlayer";
import { getQuizBySlug } from "@/lib/quiz/quizzes";
import { MobileCallButton } from "@/components/ui/mobile-call-button";
import { notFound } from "next/navigation";

interface QuizPageProps {
  params: {
    slug: string;
  };
}

export default function QuizDetailPage({ params }: QuizPageProps) {
  const quiz = getQuizBySlug(params.slug);
  
  if (!quiz) {
    notFound();
  }

  return (
    <SiteContainer>
      <QuizPlayer quiz={quiz} />
      <MobileCallButton />
    </SiteContainer>
  );
}