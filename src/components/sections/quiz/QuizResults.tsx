// src/components/sections/quiz/QuizResults.tsx
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, Download, Share2, RotateCcw } from 'lucide-react';
import { useQuizStore } from '@/stores/quiz-store';
import { ProductRecommendation } from './ProductRecommendation';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import Link from 'next/link';

export const QuizResults = () => {
  const { results, currentQuiz, resetQuiz } = useQuizStore();

  if (!results || !currentQuiz) {
    return <ResultsLoadingState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[#fff5fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResultsHeader quiz={currentQuiz} results={results} />
        <ResultsContent results={results} />
        <ResultsActions onRetakeQuiz={resetQuiz} />
      </div>
    </div>
  );
};

const ResultsLoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E61B80] mx-auto mb-4"></div>
        <p className="text-[#404E55]/70">Génération de vos résultats...</p>
      </div>
    </div>
  );
};

const ResultsHeader = ({ quiz, results }: { quiz: any; results: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
        <CheckCircle size={20} className="text-green-600" />
        <span className="text-green-800 font-medium">Quiz terminé !</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-[#404E55] mb-4">
        Vos résultats personnalisés
      </h1>
      
      <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200">
        <span className="text-3xl">{quiz.icon}</span>
        <div className="text-left">
          <div className="font-semibold text-[#404E55]">{quiz.title}</div>
          <div className="text-sm text-[#404E55]/70">{results.title}</div>
        </div>
      </div>
    </motion.div>
  );
};

const ResultsContent = ({ results }: { results: any }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <ProfileSummary results={results} />
      {results.recommendations.length > 0 && (
        <ProductRecommendations recommendations={results.recommendations} />
      )}
      {results.routineSteps.length > 0 && (
        <RoutineGuide steps={results.routineSteps} />
      )}
      {results.tips.length > 0 && (
        <ExpertTips tips={results.tips} />
      )}
      <PharmacyCTA />
    </div>
  );
};

const ProfileSummary = ({ results }: { results: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-xl shadow-[#E61B80]/10 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#404E55] mb-4 flex items-center space-x-2">
        <Star className="text-[#E61B80]" size={24} />
        <span>Votre profil beauté</span>
      </h2>
      
      <p className="text-lg text-[#404E55]/80 mb-6 leading-relaxed">
        {results.description}
      </p>
      
      {results.characteristics.length > 0 && (
        <div>
          <h3 className="font-semibold text-[#404E55] mb-3">Vos caractéristiques :</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {results.characteristics.map((characteristic: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-sm text-[#404E55]/80">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ProductRecommendations = ({ recommendations }: { recommendations: any[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-2xl p-8 shadow-xl shadow-[#E61B80]/10 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#404E55] mb-6">
        Nos recommandations pour vous
      </h2>
      
      <div className="grid gap-6">
        {recommendations.map((product, index) => (
          <ProductRecommendation key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const RoutineGuide = ({ steps }: { steps: any[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-xl shadow-[#E61B80]/10 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#404E55] mb-6">
        Votre routine personnalisée
      </h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-[#F8F9FA] rounded-lg">
            <div className="w-8 h-8 rounded-full bg-[#E61B80] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {step.step}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#404E55]">{step.action}</h3>
                <span className="text-xs bg-[#E61B80]/10 text-[#E61B80] px-2 py-1 rounded-full">
                  {step.timing}
                </span>
              </div>
              {step.products.length > 0 && (
                <p className="text-sm text-[#404E55]/70">
                  {step.products.join(', ')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ExpertTips = ({ tips }: { tips: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-r from-[#E61B80]/5 to-[#ff4aa8]/5 rounded-2xl p-8 border border-[#E61B80]/10"
    >
      <h2 className="text-2xl font-bold text-[#404E55] mb-6">
        💡 Conseils d'expert
      </h2>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#E61B80] mt-2 flex-shrink-0" />
            <p className="text-sm text-[#404E55]/80 leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PharmacyCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] rounded-2xl p-8 text-white text-center"
    >
      <h2 className="text-2xl font-bold mb-4">
        Envie d'aller plus loin ?
      </h2>
      <p className="mb-6 opacity-90">
        Nos experts en dermocosmétique vous accueillent pour un conseil personnalisé 
        et vous aident à trouver les produits parfaits pour votre routine.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <PharmacyButton 
          className="bg-white text-[#E61B80] hover:bg-white/90"
          iconLeft={<CheckCircle size={18} />}
        >
          Prendre rendez-vous
        </PharmacyButton>
        <PharmacyButton 
          className="bg-white/20 text-white hover:bg-white/30 border border-white/40"
          iconLeft={<ArrowRight size={18} />}
        >
          Nous rendre visite
        </PharmacyButton>
      </div>
    </motion.div>
  );
};

const ResultsActions = ({ onRetakeQuiz }: { onRetakeQuiz: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="max-w-2xl mx-auto mt-12"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <PharmacyButton
          variant="outline"
          onClick={onRetakeQuiz}
          iconLeft={<RotateCcw size={16} />}
        >
          Refaire le quiz
        </PharmacyButton>
        
        <PharmacyButton
          variant="outline"
          iconLeft={<Download size={16} />}
        >
          Télécharger PDF
        </PharmacyButton>
        
        <PharmacyButton
          variant="outline"
          iconLeft={<Share2 size={16} />}
        >
          Partager
        </PharmacyButton>
        
        <Link href="/quiz">
          <PharmacyButton variant="ghost">
            Découvrir d'autres quiz
          </PharmacyButton>
        </Link>
      </div>
    </motion.div>
  );
};