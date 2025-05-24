// src/components/sections/quiz/QuizGrid.tsx
import { motion } from 'framer-motion';
import { Quiz } from '@/types/quiz';
import { QuizCard } from './QuizCard';

interface QuizGridProps {
  quizzes: Quiz[];
  loading?: boolean;
  emptyMessage?: string;
}

export const QuizGrid = ({ 
  quizzes, 
  loading = false, 
  emptyMessage = "Aucun quiz trouvé" 
}: QuizGridProps) => {
  if (loading) {
    return <LoadingGrid />;
  }

  if (quizzes.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {quizzes.map((quiz, index) => (
            <QuizCard 
              key={quiz.id}
              quiz={quiz}
              index={index}
              variant={quiz.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LoadingGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingCard key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LoadingCard = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100"
    >
      <div className="h-48 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-200 rounded w-16 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-12 animate-pulse" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="flex space-x-4">
            <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
          </div>
          <div className="h-8 bg-gray-200 rounded w-20 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#F8F9FA] flex items-center justify-center">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-[#404E55] mb-2">
            {message}
          </h3>
          <p className="text-[#404E55]/70">
            Essayez de modifier vos filtres ou explorez nos autres catégories.
          </p>
        </motion.div>
      </div>
    </section>
  );
};