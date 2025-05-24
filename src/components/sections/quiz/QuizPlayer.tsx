// src/components/sections/quiz/QuizPlayer.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Quiz } from '@/types/quiz';
import { useQuizStore } from '@/stores/quiz-store';
import { QuizProgress } from './QuizProgress';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import Link from 'next/link';

interface QuizPlayerProps {
  quiz: Quiz;
}

export const QuizPlayer = ({ quiz }: QuizPlayerProps) => {
  const {
    initializeQuiz,
    getCurrentQuestion,
    isCompleted,
    nextQuestion,
    previousQuestion,
    canGoNext,
    canGoPrevious,
    resetQuiz
  } = useQuizStore();

  useEffect(() => {
    initializeQuiz(quiz);
    return () => resetQuiz();
  }, [quiz, initializeQuiz, resetQuiz]);

  const currentQuestion = getCurrentQuestion();

  if (isCompleted) {
    return <QuizResults />;
  }

  if (!currentQuestion) {
    return <QuizLoadingState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[#fff5fa]">
      <QuizProgress />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <QuizHeader quiz={quiz} />
        
        <AnimatePresence mode="wait">
          <QuizQuestion key={currentQuestion.id} question={currentQuestion} />
        </AnimatePresence>
        
        <QuizNavigation 
          onNext={nextQuestion}
          onPrevious={previousQuestion}
          canGoNext={canGoNext()}
          canGoPrevious={canGoPrevious()}
        />
      </div>
    </div>
  );
};

const QuizLoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E61B80] mx-auto mb-4"></div>
        <p className="text-[#404E55]/70">Chargement du quiz...</p>
      </div>
    </div>
  );
};

const QuizHeader = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <Link 
        href="/quiz"
        className="inline-flex items-center space-x-2 text-[#404E55]/70 hover:text-[#E61B80] transition-colors mb-6 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Retour aux quiz</span>
      </Link>
      
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-4">
          <span className="text-2xl">{quiz.icon}</span>
          <span 
            className="text-sm font-medium px-2 py-1 rounded-full text-white"
            style={{ backgroundColor: quiz.category.color }}
          >
            {quiz.category.name}
          </span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-2">
          {quiz.title}
        </h1>
        <p className="text-[#404E55]/70">
          {quiz.subtitle}
        </p>
      </div>
    </div>
  );
};

interface QuizNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const QuizNavigation = ({ 
  onNext, 
  onPrevious, 
  canGoNext, 
  canGoPrevious 
}: QuizNavigationProps) => {
  const { currentQuestionIndex, currentQuiz } = useQuizStore();
  const isLastQuestion = currentQuiz && currentQuestionIndex === currentQuiz.questions.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="max-w-2xl mx-auto mt-12"
    >
      <div className="flex items-center justify-between">
        <div>
          {canGoPrevious && (
            <PharmacyButton
              variant="outline"
              onClick={onPrevious}
              iconLeft={<ArrowLeft size={16} />}
            >
              Précédent
            </PharmacyButton>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <QuestionIndicators />
          
          <PharmacyButton
            onClick={onNext}
            disabled={!canGoNext}
            iconRight={<ArrowRight size={16} />}
            className={`${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLastQuestion ? 'Voir mes résultats' : 'Suivant'}
          </PharmacyButton>
        </div>
      </div>
      
      {!canGoNext && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-[#E61B80] mt-4"
        >
          Veuillez répondre à cette question pour continuer
        </motion.p>
      )}
    </motion.div>
  );
};

const QuestionIndicators = () => {
  const { currentQuiz, currentQuestionIndex, goToQuestion, userAnswers } = useQuizStore();
  
  if (!currentQuiz) return null;

  return (
    <div className="flex items-center space-x-2">
      {currentQuiz.questions.map((question, index) => {
        const isCompleted = !!userAnswers[question.id];
        const isCurrent = index === currentQuestionIndex;
        const isAccessible = index <= currentQuestionIndex;

        return (
          <button
            key={question.id}
            onClick={() => isAccessible && goToQuestion(index)}
            disabled={!isAccessible}
            className={`
              w-3 h-3 rounded-full transition-all duration-200
              ${isCurrent
                ? 'bg-[#E61B80] scale-125'
                : isCompleted
                ? 'bg-[#E61B80]/60'
                : isAccessible
                ? 'bg-gray-300 hover:bg-[#E61B80]/40'
                : 'bg-gray-200'
              }
              ${isAccessible ? 'cursor-pointer' : 'cursor-not-allowed'}
            `}
            title={`Question ${index + 1}${isCompleted ? ' (répondue)' : ''}`}
          />
        );
      })}
    </div>
  );
};