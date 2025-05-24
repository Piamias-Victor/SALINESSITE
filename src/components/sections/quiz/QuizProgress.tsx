// src/components/sections/quiz/QuizProgress.tsx
import { motion } from 'framer-motion';
import { useQuizStore } from '@/stores/quiz-store';

export const QuizProgress = () => {
  const { currentQuiz, currentQuestionIndex, getProgress } = useQuizStore();
  
  if (!currentQuiz) return null;
  
  const progress = getProgress();
  const currentStep = currentQuestionIndex + 1;
  const totalSteps = currentQuiz.questions.length;

  return (
    <div className="bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ProgressHeader 
            currentStep={currentStep} 
            totalSteps={totalSteps}
            title={currentQuiz.title}
          />
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps: number;
  title: string;
}

const ProgressHeader = ({ currentStep, totalSteps, title }: ProgressHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-lg font-semibold text-[#404E55] truncate">{title}</h1>
        <p className="text-sm text-[#404E55]/70">Quiz beauté personnalisé</p>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-[#E61B80]">
          Question {currentStep} / {totalSteps}
        </div>
        <div className="text-xs text-[#404E55]/60">
          Encore {totalSteps - currentStep} questions
        </div>
      </div>
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="relative">
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#E61B80] to-[#ff4aa8] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Pourcentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-0 -top-6 text-xs font-medium text-[#E61B80]"
      >
        {progress}%
      </motion.div>
    </div>
  );
};