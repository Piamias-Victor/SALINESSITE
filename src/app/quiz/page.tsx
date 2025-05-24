// src/app/quiz/page.tsx
"use client";

import { useState, useMemo } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { QuizHero } from "@/components/sections/quiz/QuizHero";
import { QuizCategoryFilter } from "@/components/sections/quiz/QuizCategoryFilter";
import { QuizGrid } from "@/components/sections/quiz/QuizGrid";
import { getFeaturedQuizzes, quizzes, quizCategories, getQuizzesByCategory } from "@/lib/quiz/quizzes";
import { MobileCallButton } from "@/components/ui/mobile-call-button";
import { motion } from "framer-motion";

export default function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredQuizzes = getFeaturedQuizzes();

  // Filtrer les quiz selon la catégorie
  const filteredQuizzes = useMemo(() => {
    if (selectedCategory) {
      return getQuizzesByCategory(selectedCategory);
    }
    return quizzes;
  }, [selectedCategory]);

  // Compter les quiz par catégorie
  const quizCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    quizCategories.forEach(category => {
      counts[category.slug] = getQuizzesByCategory(category.slug).length;
    });
    return counts;
  }, []);

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <SiteContainer>
      <QuizHero />
      
      {/* Section quiz populaires si aucun filtre */}
      {!selectedCategory && (
        <FeaturedQuizSection featuredQuizzes={featuredQuizzes} />
      )}
      
      <QuizCategoryFilter
        categories={quizCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        quizCounts={quizCounts}
      />
      
      <QuizGrid
        quizzes={filteredQuizzes}
        emptyMessage={
          selectedCategory
            ? "Aucun quiz dans cette catégorie"
            : "Aucun quiz disponible"
        }
      />
      
      {/* Section newsletter */}
      <QuizNewsletterCTA />
      
      <MobileCallButton />
    </SiteContainer>
  );
}

const FeaturedQuizSection = ({ featuredQuizzes }: { featuredQuizzes: any[] }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#E61B80]/5 to-[#ff4aa8]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4">
            Quiz <span className="text-[#E61B80]">populaires</span>
          </h2>
          <p className="text-[#404E55]/70">
            Les quiz les plus appréciés par nos clientes
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredQuizzes.slice(0, 3).map((quiz, index) => (
            <div key={quiz.id} className="transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/10 border border-[#E61B80]/10">
                <div className="text-center">
                  <div className="text-4xl mb-4">{quiz.icon}</div>
                  <h3 className="text-lg font-bold text-[#404E55] mb-2">{quiz.title}</h3>
                  <p className="text-sm text-[#404E55]/70 mb-4">{quiz.subtitle}</p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-[#404E55]/60 mb-4">
                    <span>⏱️ {quiz.estimatedTime} min</span>
                    <span>⭐ {quiz.popularityScore}%</span>
                  </div>
                  <a 
                    href={`/quiz/${quiz.slug}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#E61B80] text-white rounded-lg font-medium hover:bg-[#d01974] transition-colors"
                  >
                    Commencer le quiz
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuizNewsletterCTA = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4">
              Nouveaux quiz <span className="text-[#E61B80]">chaque mois</span>
            </h2>
            <p className="text-[#404E55]/70 mb-6">
              Restez informée de nos derniers quiz beauté et recevez des conseils 
              exclusifs de nos experts en dermocosmétique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#E61B80] text-white rounded-lg font-medium hover:bg-[#d01974] transition-colors">
                S'abonner
              </button>
            </div>
            
            <p className="text-xs text-[#404E55]/60 mt-3">
              Conseils exclusifs + alertes nouveaux quiz
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};