// src/components/sections/blog/CategoryFilter.tsx
import { motion } from 'framer-motion';
import { BlogCategory } from '@/types/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  articleCounts?: Record<string, number>;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  articleCounts = {}
}: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-[#F8F9FA] border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FilterHeader />
        <FilterButtons 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          articleCounts={articleCounts}
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
        Explorez nos articles par catégorie
      </h2>
      <p className="text-sm text-[#404E55]/70">
        Trouvez rapidement les conseils qui vous intéressent
      </p>
    </motion.div>
  );
};

interface FilterButtonsProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
  articleCounts: Record<string, number>;
}

const FilterButtons = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  articleCounts 
}: FilterButtonsProps) => {
  const totalArticles = Object.values(articleCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {/* Bouton "Tous" */}
      <FilterButton
        label="Tous les articles"
        icon="📚"
        color="#404E55"
        isSelected={selectedCategory === null}
        onClick={() => onCategoryChange(null)}
        count={totalArticles}
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
          count={articleCounts[category.slug] || 0}
          index={index + 1}
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
}

const FilterButton = ({ 
  label, 
  icon, 
  color, 
  isSelected, 
  onClick, 
  count,
  index 
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
        relative inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm
        transition-all duration-200 border-2 min-w-0
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
    >
      <span className="text-lg flex-shrink-0">{icon}</span>
      <span className="whitespace-nowrap">{label}</span>
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
      inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold flex-shrink-0
      ${isSelected 
        ? 'bg-white/20 text-white' 
        : 'bg-[#F8F9FA] text-[#404E55]/70'
      }
    `}>
      {count}
    </span>
  );
};