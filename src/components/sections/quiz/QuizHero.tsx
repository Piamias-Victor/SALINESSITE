// src/components/sections/quiz/QuizHero.tsx
import { motion } from 'framer-motion';
import { Sparkles, Clock, Target, Award } from 'lucide-react';

export const QuizHero = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-br from-white via-white to-[#fff5fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <HeroHeader />
          <HeroStats />
          <FeaturedBadges />
        </div>
      </div>
    </section>
  );
};

const HeroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[#E61B80]/10 text-[#E61B80] mb-6">
        <Sparkles size={16} className="mr-2" />
        Conseils beauté personnalisés
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#404E55] mb-6 leading-tight">
        Découvrez votre routine <span className="text-[#E61B80]">beauté idéale</span>
      </h1>
      
      <p className="text-xl text-[#404E55]/80 max-w-3xl mx-auto leading-relaxed">
        Nos quiz experts vous guident vers les produits et soins parfaitement adaptés 
        à vos besoins uniques. Conseils pharmaceutiques professionnels inclus.
      </p>
    </motion.div>
  );
};

const HeroStats = () => {
  const stats = [
    {
      icon: <Target size={24} />,
      number: '95%',
      label: 'De satisfaction',
      description: 'Recommandations approuvées'
    },
    {
      icon: <Clock size={24} />,
      number: '3-5 min',
      label: 'Par quiz',
      description: 'Résultats instantanés'
    },
    {
      icon: <Award size={24} />,
      number: '50+',
      label: 'Marques référencées',
      description: 'Sélection experte'
    },
    {
      icon: <Sparkles size={24} />,
      number: '1000+',
      label: 'Clientes satisfaites',
      description: 'Routines personnalisées'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E61B80]/10 text-[#E61B80] mb-3">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-[#404E55] mb-1">{stat.number}</div>
          <div className="text-sm font-medium text-[#404E55] mb-1">{stat.label}</div>
          <div className="text-xs text-[#404E55]/60">{stat.description}</div>
        </div>
      ))}
    </motion.div>
  );
};

const FeaturedBadges = () => {
  const badges = [
    { icon: '💇‍♀️', text: 'Diagnostic capillaire' },
    { icon: '✨', text: 'Analyse de peau' },
    { icon: '💊', text: 'Compléments sur-mesure' },
    { icon: '☀️', text: 'Protection solaire' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {badges.map((badge, index) => (
        <div
          key={index}
          className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 hover:border-[#E61B80]/20 hover:shadow-md transition-all duration-200"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className="text-sm font-medium text-[#404E55]">{badge.text}</span>
        </div>
      ))}
    </motion.div>
  );
};