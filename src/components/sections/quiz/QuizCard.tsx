// src/components/sections/quiz/QuizCard.tsx
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight, Sparkles, Target } from 'lucide-react';
import { Quiz } from '@/types/quiz';
import { getEstimatedTimeText, getDifficultyColor, getPopularityStars } from '@/lib/quiz/utils';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import Link from 'next/link';

interface QuizCardProps {
  quiz: Quiz;
  index: number;
  variant?: 'default' | 'compact' | 'featured';
}

export const QuizCard = ({ 
  quiz, 
  index, 
  variant = 'default' 
}: QuizCardProps) => {
  const stars = getPopularityStars(quiz.popularityScore);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        group bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 
        hover:shadow-xl hover:shadow-[#E61B80]/10 hover:border-[#E61B80]/20 
        transition-all duration-300 hover:-translate-y-1
        ${variant === 'featured' ? 'ring-2 ring-[#E61B80]/20' : ''}
      `}
    >
      <QuizImage quiz={quiz} variant={variant} />
      <QuizContent quiz={quiz} variant={variant} stars={stars} />
    </motion.div>
  );
};

interface QuizImageProps {
  quiz: Quiz;
  variant: string;
}

const QuizImage = ({ quiz, variant }: QuizImageProps) => {
  return (
    <div className={`relative overflow-hidden ${variant === 'compact' ? 'h-40' : 'h-48'}`}>
      {/* Gradient background avec icône */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-90"
        style={{ 
          backgroundImage: `linear-gradient(135deg, ${quiz.category.color}20, ${quiz.category.color}60)` 
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl">{quiz.icon}</span>
      </div>
      
      {/* Badges overlay */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        <CategoryBadge category={quiz.category} />
        {quiz.featured && <FeaturedBadge />}
      </div>
      
      {/* Difficulty & Time */}
      <div className="absolute bottom-3 right-3 flex gap-2">
        <DifficultyBadge difficulty={quiz.difficulty} />
        <TimeBadge time={quiz.estimatedTime} />
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
};

interface QuizContentProps {
  quiz: Quiz;
  variant: string;
  stars: number;
}

const QuizContent = ({ quiz, variant, stars }: QuizContentProps) => {
  return (
    <div className={`p-6 ${variant === 'compact' ? 'space-y-3' : 'space-y-4'}`}>
      <QuizTitle title={quiz.title} subtitle={quiz.subtitle} variant={variant} />
      <QuizDescription description={quiz.description} variant={variant} />
      <QuizRating stars={stars} score={quiz.popularityScore} />
      <QuizTags tags={quiz.tags} />
      <QuizFooter quiz={quiz} />
    </div>
  );
};

interface QuizTitleProps {
  title: string;
  subtitle: string;
  variant: string;
}

const QuizTitle = ({ title, subtitle, variant }: QuizTitleProps) => {
  return (
    <div>
      <h3 className={`
        font-bold text-[#404E55] group-hover:text-[#E61B80] transition-colors duration-200 leading-tight
        ${variant === 'compact' ? 'text-lg' : 'text-xl'}
      `}>
        {title}
      </h3>
      <p className="text-sm text-[#E61B80] font-medium mt-1">{subtitle}</p>
    </div>
  );
};

interface QuizDescriptionProps {
  description: string;
  variant: string;
}

const QuizDescription = ({ description, variant }: QuizDescriptionProps) => {
  return (
    <p className={`
      text-[#404E55]/70 leading-relaxed
      ${variant === 'compact' ? 'text-sm line-clamp-2' : 'text-sm line-clamp-3'}
    `}>
      {description}
    </p>
  );
};

const QuizRating = ({ stars, score }: { stars: number; score: number }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-[#404E55]/60">{score}% de satisfaction</span>
    </div>
  );
};

const QuizTags = ({ tags }: { tags: string[] }) => {
  const displayTags = tags.slice(0, 3);
  
  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[#F8F9FA] text-[#404E55]/70 hover:bg-[#E61B80]/10 hover:text-[#E61B80] transition-colors"
        >
          #{tag}
        </span>
      ))}
      {tags.length > 3 && (
        <span className="text-xs text-[#404E55]/50">
          +{tags.length - 3}
        </span>
      )}
    </div>
  );
};

const QuizFooter = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <QuizMetrics quiz={quiz} />
      <StartQuizButton quiz={quiz} />
    </div>
  );
};

const QuizMetrics = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div className="flex items-center space-x-4 text-xs text-[#404E55]/60">
      <div className="flex items-center space-x-1">
        <Clock size={12} />
        <span>{getEstimatedTimeText(quiz.estimatedTime)}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Target size={12} />
        <span>{quiz.questions.length} questions</span>
      </div>
    </div>
  );
};

const StartQuizButton = ({ quiz }: { quiz: Quiz }) => {
  return (
    <Link href={`/quiz/${quiz.slug}`}>
      <div className="flex items-center space-x-1 text-[#E61B80] text-sm font-medium group-hover:space-x-2 transition-all duration-200 cursor-pointer">
        <span>Commencer</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
};

// Composants de badges
const CategoryBadge = ({ category }: { category: Quiz['category'] }) => (
  <span 
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white"
    style={{ backgroundColor: category.color }}
  >
    <span className="mr-1">{category.icon}</span>
    {category.name}
  </span>
);

const FeaturedBadge = () => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
    <Sparkles size={12} className="mr-1" />
    Populaire
  </span>
);

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => (
  <span 
    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
    style={{ backgroundColor: getDifficultyColor(difficulty) }}
  >
    {difficulty}
  </span>
);

const TimeBadge = ({ time }: { time: number }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
    <Clock size={12} className="mr-1" />
    {getEstimatedTimeText(time)}
  </span>
);