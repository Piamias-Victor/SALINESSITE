// src/stores/quiz-store.ts
import { create } from 'zustand';
import { Quiz, UserAnswers, QuizResult } from '@/types/quiz';

interface QuizState {
  // État du quiz
  currentQuiz: Quiz | null;
  currentQuestionIndex: number;
  userAnswers: UserAnswers;
  isCompleted: boolean;
  results: QuizResult | null;
  
  // Actions
  initializeQuiz: (quiz: Quiz) => void;
  setAnswer: (questionId: string, answer: string | string[]) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
  
  // Utils
  getProgress: () => number;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  getCurrentQuestion: () => any;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  // État initial
  currentQuiz: null,
  currentQuestionIndex: 0,
  userAnswers: {},
  isCompleted: false,
  results: null,

  // Initialiser le quiz
  initializeQuiz: (quiz) => set({
    currentQuiz: quiz,
    currentQuestionIndex: 0,
    userAnswers: {},
    isCompleted: false,
    results: null
  }),

  // Enregistrer une réponse
  setAnswer: (questionId, answer) => {
    const state = get();
    set({
      userAnswers: {
        ...state.userAnswers,
        [questionId]: answer
      }
    });
  },

  // Question suivante
  nextQuestion: () => {
    const state = get();
    if (state.currentQuiz && state.currentQuestionIndex < state.currentQuiz.questions.length - 1) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
      // Dernière question -> compléter le quiz
      get().completeQuiz();
    }
  },

  // Question précédente
  previousQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex > 0) {
      set({ currentQuestionIndex: state.currentQuestionIndex - 1 });
    }
  },

  // Aller à une question spécifique
  goToQuestion: (index) => {
    const state = get();
    if (state.currentQuiz && index >= 0 && index < state.currentQuiz.questions.length) {
      set({ currentQuestionIndex: index });
    }
  },

  // Compléter le quiz et générer les résultats
  completeQuiz: () => {
    const state = get();
    if (!state.currentQuiz) return;

    // Calculer les scores selon les réponses
    const scores = calculateQuizScore(state.userAnswers, state.currentQuiz.questions);
    
    // Générer les résultats selon le type de quiz
    const results = generateQuizResults(state.currentQuiz, state.userAnswers, scores);
    
    set({
      isCompleted: true,
      results
    });
  },

  // Réinitialiser le quiz
  resetQuiz: () => set({
    currentQuiz: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    isCompleted: false,
    results: null
  }),

  // Calculer le progrès en pourcentage
  getProgress: () => {
    const state = get();
    if (!state.currentQuiz) return 0;
    return Math.round(((state.currentQuestionIndex + 1) / state.currentQuiz.questions.length) * 100);
  },

  // Peut aller à la question suivante
  canGoNext: () => {
    const state = get();
    const currentQuestion = get().getCurrentQuestion();
    if (!currentQuestion) return false;
    
    const hasAnswer = state.userAnswers[currentQuestion.id];
    return currentQuestion.required ? !!hasAnswer : true;
  },

  // Peut aller à la question précédente
  canGoPrevious: () => {
    const state = get();
    return state.currentQuestionIndex > 0;
  },

  // Obtenir la question actuelle
  getCurrentQuestion: () => {
    const state = get();
    if (!state.currentQuiz) return null;
    return state.currentQuiz.questions[state.currentQuestionIndex] || null;
  }
}));

// Fonction pour calculer les scores
function calculateQuizScore(answers: UserAnswers, questions: any[]): Record<string, number> {
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
}

// Fonction pour générer les résultats selon le quiz
function generateQuizResults(quiz: Quiz, answers: UserAnswers, scores: Record<string, number>): QuizResult {
  // Logique basique - à adapter selon chaque quiz
  const topScore = Object.entries(scores).sort(([,a], [,b]) => b - a)[0];
  const profileType = topScore ? topScore[0] : 'equilibre';
  
  // Résultats selon le type de quiz
  if (quiz.id === 'routine-cheveux-parfaite') {
    return generateHairQuizResults(profileType, scores);
  } else if (quiz.id === 'diagnostic-peau-personnalise') {
    return generateSkinQuizResults(profileType, scores);
  } else {
    return generateGenericResults(profileType, scores);
  }
}

function generateHairQuizResults(profileType: string, scores: Record<string, number>): QuizResult {
  const profiles: Record<string, any> = {
    'gras': {
      title: 'Cheveux à tendance grasse',
      description: 'Vos cheveux ont besoin d\'un équilibre délicat entre purification et hydratation.',
      characteristics: ['Racines qui regraissent rapidement', 'Besoin de lavages fréquents', 'Manque de volume'],
      recommendations: [
        {
          id: '1',
          name: 'Shampooing purifiant',
          brand: 'Ducray',
          category: 'Shampooing',
          price: '12,90€',
          priority: 'essentiel' as const,
          description: 'Nettoie en douceur sans agresser le cuir chevelu',
          reasons: ['Régule la production de sébum', 'Apporte de la fraîcheur']
        }
      ]
    },
    'sec': {
      title: 'Cheveux secs et déshydratés',
      description: 'Vos cheveux ont soif ! Ils ont besoin de nutrition et d\'hydratation intense.',
      characteristics: ['Cheveux ternes et rêches', 'Pointes fourchues', 'Difficiles à démêler'],
      recommendations: [
        {
          id: '2',
          name: 'Masque nutritif intense',
          brand: 'Klorane',
          category: 'Soin',
          price: '16,50€',
          priority: 'essentiel' as const,
          description: 'Répare et nourrit les cheveux abîmés',
          reasons: ['Hydratation profonde', 'Réparation des longueurs']
        }
      ]
    }
  };

  const profile = profiles[profileType] || profiles['gras'];
  
  return {
    profileType,
    title: profile.title,
    description: profile.description,
    characteristics: profile.characteristics,
    recommendations: profile.recommendations,
    routineSteps: [
      {
        step: 1,
        timing: 'matin',
        action: 'Brossage délicat',
        products: ['Brosse en fibres naturelles']
      },
      {
        step: 2,
        timing: 'soir',
        action: 'Shampooing adapté',
        products: ['Shampooing spécialisé']
      }
    ],
    tips: [
      'Évitez l\'eau trop chaude qui stimule les glandes sébacées',
      'Espacez les lavages si possible',
      'Utilisez un shampooing sec entre les lavages'
    ],
    score: scores
  };
}

function generateSkinQuizResults(profileType: string, scores: Record<string, number>): QuizResult {
  return {
    profileType,
    title: 'Peau à tendance mixte',
    description: 'Votre peau présente des zones différentes qui nécessitent une approche personnalisée.',
    characteristics: ['Zone T grasse', 'Joues normales à sèches', 'Pores dilatés sur le nez'],
    recommendations: [],
    routineSteps: [],
    tips: ['Utilisez des produits adaptés à chaque zone', 'Hydratez même les zones grasses'],
    score: scores
  };
}

function generateGenericResults(profileType: string, scores: Record<string, number>): QuizResult {
  return {
    profileType,
    title: 'Profil personnalisé',
    description: 'Découvrez vos recommandations sur-mesure.',
    characteristics: [],
    recommendations: [],
    routineSteps: [],
    tips: [],
    score: scores
  };
}