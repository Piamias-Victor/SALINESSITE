// src/types/quiz.ts

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'scale' | 'image';
  options: QuizOption[];
  required: boolean;
  description?: string;
}

export interface QuizOption {
  id: string;
  label: string;
  value: string;
  image?: string;
  points?: Record<string, number>; // Pour le scoring
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: QuizCategory;
  coverImage: string;
  icon: string;
  estimatedTime: number; // en minutes
  difficulty: 'facile' | 'moyen' | 'avancé';
  questions: QuizQuestion[];
  popularityScore: number;
  featured: boolean;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface QuizResult {
  profileType: string;
  title: string;
  description: string;
  characteristics: string[];
  recommendations: ProductRecommendation[];
  routineSteps: RoutineStep[];
  tips: string[];
  score: Record<string, number>;
}

export interface ProductRecommendation {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  priority: 'essentiel' | 'recommandé' | 'bonus';
  description: string;
  image?: string;
  reasons: string[];
}

export interface RoutineStep {
  step: number;
  timing: 'matin' | 'soir' | 'hebdomadaire';
  action: string;
  products: string[];
  duration?: string;
}

export interface QuizFilters {
  category?: string;
  difficulty?: string;
  time?: string;
}

export interface UserAnswers {
  [questionId: string]: string | string[];
}