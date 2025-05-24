// src/lib/quiz/utils.ts

export const getEstimatedTimeText = (minutes: number): string => {
  if (minutes === 1) return '1 min';
  return `${minutes} min`;
};

export const getDifficultyLabel = (difficulty: string): string => {
  const labels = {
    'facile': 'Facile',
    'moyen': 'Intermédiaire', 
    'avancé': 'Expert'
  };
  return labels[difficulty as keyof typeof labels] || difficulty;
};

export const getDifficultyColor = (difficulty: string): string => {
  const colors = {
    'facile': '#22c55e',
    'moyen': '#f59e0b',
    'avancé': '#E61B80'
  };
  return colors[difficulty as keyof typeof colors] || '#6b7280';
};

export const getPopularityStars = (score: number): number => {
  return Math.round((score / 100) * 5);
};

export const formatQuizUrl = (slug: string): string => {
  return `/quiz/${slug}`;
};

export const getQuizProgress = (currentQuestion: number, totalQuestions: number): number => {
  return Math.round((currentQuestion / totalQuestions) * 100);
};

export const calculateQuizScore = (answers: Record<string, any>, questions: any[]): Record<string, number> => {
  const scores: Record<string, number> = {};
  
  questions.forEach(question => {
    const userAnswer = answers[question.id];
    if (!userAnswer) return;
    
    const selectedOptions = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    
    question.options.forEach((option: any) => {
      if (selectedOptions.includes(option.value) && option.points) {
        Object.entries(option.points).forEach(([key, value]) => {
          scores[key] = (scores[key] || 0) + (value as number);
        });
      }
    });
  });
  
  return scores;
};

export const getRecommendationLevel = (score: number): 'essentiel' | 'recommandé' | 'bonus' => {
  if (score >= 8) return 'essentiel';
  if (score >= 5) return 'recommandé';
  return 'bonus';
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};