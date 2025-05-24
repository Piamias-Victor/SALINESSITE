// src/components/sections/quiz/QuizCategoryFilter.tsx
import { motion } from 'framer-motion';
import { QuizCategory } from '@/types/quiz';

interface QuizCategoryFilterProps {
  categories: QuizCategory[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  quizCounts?: Record<string, number>;
}

export const QuizCategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  quizCounts = {}
}: QuizCategoryFilterProps) => {
  return (
    <section className="py-8 bg-[#F8F9FA] border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FilterHeader />
        <FilterButtons 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          quizCounts={quizCounts}
        />
      </div>
    </section>
  );
};

const FilterHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6"
    >
      <h2 className="text-lg font-semibold text-[#404E55] mb-2">
        Explorez nos quiz par catégorie
      </h2>
      <p className="text-sm text-[#404E55]/70">
        Trouvez rapidement les conseils beauté qui vous correspondent
      </p>
    </motion.div>
  );
};

interface FilterButtonsProps {
  categories: QuizCategory[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  quizCounts: Record<string, number>;
}

const FilterButtons = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  quizCounts 
}: FilterButtonsProps) => {
  const totalQuizzes = Object.values(quizCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {/* Bouton "Tous" */}
      <FilterButton
        label="Tous les quiz"
        icon="🎯"
        color="#404E55"
        isSelected={selectedCategory === null}
        onClick={() => onCategoryChange(null)}
        count={totalQuizzes}
        index={0}
      />
      
      {/* Boutons des catégories */}
      {categories.map((category, index) => (
        <FilterButton
          key={category.id}
          label={category.name}
          icon={category.icon}
          color={category.color}
          isSelected={selectedCategory === category.slug}
          onClick={() => onCategoryChange(category.slug)}
          count={quizCounts[category.slug] || 0}
          index={index + 1}
          description={category.description}
        />
      ))}
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  icon: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
  count: number;
  index: number;
  description?: string;
}

const FilterButton = ({ 
  label, 
  icon, 
  color, 
  isSelected, 
  onClick, 
  count,
  index,
  description
}: FilterButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative inline-flex flex-col items-center space-y-2 px-6 py-4 rounded-xl font-medium text-sm
        transition-all duration-200 border-2 min-w-0 group
        ${isSelected
          ? 'text-white shadow-lg shadow-black/10 transform scale-105'
          : 'text-[#404E55] bg-white border-gray-200 hover:border-opacity-40 hover:shadow-md'
        }
      `}
      style={{
        backgroundColor: isSelected ? color : undefined,
        borderColor: isSelected ? color : undefined,
        '--hover-border-color': `${color}40`
      } as React.CSSProperties}
      title={description}
    >
      <span className="text-2xl">{icon}</span>
      <span className="whitespace-nowrap font-semibold">{label}</span>
      {description && !isSelected && (
        <span className="text-xs text-[#404E55]/60 text-center leading-tight">
          {description}
        </span>
      )}
      {count > 0 && (
        <CountBadge count={count} isSelected={isSelected} />
      )}
      
      {/* Effet de hover pour les boutons non sélectionnés */}
      {!isSelected && (
        <div 
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition-opacity duration-200"
          style={{ backgroundColor: color }}
        />
      )}
    </motion.button>
  );
};

interface CountBadgeProps {
  count: number;
  isSelected: boolean;
}

const CountBadge = ({ count, isSelected }: CountBadgeProps) => {
  return (
    <span className={`
      inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
      ${isSelected 
        ? 'bg-white/20 text-white' 
        : 'bg-[#F8F9FA] text-[#404E55]/70'
      }
    `}>
      {count}
    </span>
  );
};