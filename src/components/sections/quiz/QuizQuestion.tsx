// src/components/sections/quiz/QuizQuestion.tsx
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';
import { QuizQuestion as QuizQuestionType, QuizOption } from '@/types/quiz';
import { useQuizStore } from '@/stores/quiz-store';

interface QuizQuestionProps {
  question: QuizQuestionType;
}

export const QuizQuestion = ({ question }: QuizQuestionProps) => {
  const { userAnswers, setAnswer } = useQuizStore();
  const currentAnswer = userAnswers[question.id];

  const handleAnswerChange = (value: string) => {
    if (question.type === 'multiple') {
      const currentAnswers = (currentAnswer as string[]) || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];
      setAnswer(question.id, newAnswers);
    } else {
      setAnswer(question.id, value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <QuestionHeader question={question} />
      <QuestionOptions 
        question={question}
        currentAnswer={currentAnswer}
        onAnswerChange={handleAnswerChange}
      />
    </motion.div>
  );
};

const QuestionHeader = ({ question }: { question: QuizQuestionType }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4 leading-tight">
        {question.question}
      </h2>
      {question.description && (
        <p className="text-[#404E55]/70 text-lg">
          {question.description}
        </p>
      )}
      {question.required && (
        <p className="text-sm text-[#E61B80] mt-2">
          * Cette question est obligatoire
        </p>
      )}
    </div>
  );
};

interface QuestionOptionsProps {
  question: QuizQuestionType;
  currentAnswer: string | string[] | undefined;
  onAnswerChange: (value: string) => void;
}

const QuestionOptions = ({ question, currentAnswer, onAnswerChange }: QuestionOptionsProps) => {
  if (question.type === 'image') {
    return (
      <ImageOptions 
        options={question.options}
        currentAnswer={currentAnswer}
        onAnswerChange={onAnswerChange}
        isMultiple={question.type === 'multiple'}
      />
    );
  }

  if (question.type === 'scale') {
    return (
      <ScaleOptions 
        options={question.options}
        currentAnswer={currentAnswer}
        onAnswerChange={onAnswerChange}
      />
    );
  }

  return (
    <div className="grid gap-3">
      {question.options.map((option, index) => (
        <OptionButton
          key={option.id}
          option={option}
          isSelected={
            question.type === 'multiple'
              ? (currentAnswer as string[] || []).includes(option.value)
              : currentAnswer === option.value
          }
          onClick={() => onAnswerChange(option.value)}
          index={index}
          isMultiple={question.type === 'multiple'}
        />
      ))}
    </div>
  );
};

interface OptionButtonProps {
  option: QuizOption;
  isSelected: boolean;
  onClick: () => void;
  index: number;
  isMultiple: boolean;
}

const OptionButton = ({ option, isSelected, onClick, index, isMultiple }: OptionButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl text-left transition-all duration-200 border-2 group
        ${isSelected
          ? 'border-[#E61B80] bg-[#E61B80]/5 shadow-lg shadow-[#E61B80]/10'
          : 'border-gray-200 bg-white hover:border-[#E61B80]/40 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-center space-x-4">
        <div className={`
          flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200
          ${isSelected 
            ? 'border-[#E61B80] bg-[#E61B80]' 
            : 'border-gray-300 group-hover:border-[#E61B80]'
          }
        `}>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#E61B80]" />
            </motion.div>
          )}
        </div>
        
        <div className="flex-1">
          <span className={`
            font-medium transition-colors
            ${isSelected ? 'text-[#E61B80]' : 'text-[#404E55] group-hover:text-[#E61B80]'}
          `}>
            {option.label}
          </span>
        </div>
        
        {isMultiple && isSelected && (
          <CheckCircle size={20} className="text-[#E61B80]" />
        )}
      </div>
    </motion.button>
  );
};

interface ImageOptionsProps {
  options: QuizOption[];
  currentAnswer: string | string[] | undefined;
  onAnswerChange: (value: string) => void;
  isMultiple: boolean;
}

const ImageOptions = ({ options, currentAnswer, onAnswerChange, isMultiple }: ImageOptionsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((option, index) => {
        const isSelected = isMultiple
          ? (currentAnswer as string[] || []).includes(option.value)
          : currentAnswer === option.value;

        return (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onAnswerChange(option.value)}
            className={`
              relative p-4 rounded-xl border-2 transition-all duration-200 group
              ${isSelected
                ? 'border-[#E61B80] shadow-lg shadow-[#E61B80]/10'
                : 'border-gray-200 hover:border-[#E61B80]/40'
              }
            `}
          >
            {/* Image placeholder */}
            <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-2xl">💄</span>
            </div>
            
            <span className={`
              text-sm font-medium transition-colors
              ${isSelected ? 'text-[#E61B80]' : 'text-[#404E55]'}
            `}>
              {option.label}
            </span>
            
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#E61B80] flex items-center justify-center">
                <CheckCircle size={16} className="text-white" />
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

interface ScaleOptionsProps {
  options: QuizOption[];
  currentAnswer: string | string[] | undefined;
  onAnswerChange: (value: string) => void;
}

const ScaleOptions = ({ options, currentAnswer, onAnswerChange }: ScaleOptionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-[#404E55]/70 mb-2">
        <span>{options[0]?.label}</span>
        <span>{options[options.length - 1]?.label}</span>
      </div>
      
      <div className="flex justify-between">
        {options.map((option, index) => {
          const isSelected = currentAnswer === option.value;
          
          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() => onAnswerChange(option.value)}
              className={`
                w-12 h-12 rounded-full border-2 font-bold transition-all duration-200
                ${isSelected
                  ? 'border-[#E61B80] bg-[#E61B80] text-white'
                  : 'border-gray-300 text-[#404E55] hover:border-[#E61B80]'
                }
              `}
            >
              {index + 1}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};