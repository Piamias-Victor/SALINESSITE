// src/lib/quiz/quizzes.ts
import { Quiz, QuizCategory } from '@/types/quiz';

// Catégories des quiz
export const quizCategories: QuizCategory[] = [
  {
    id: 'cheveux',
    name: 'Cheveux',
    slug: 'cheveux',
    description: 'Trouvez votre routine capillaire idéale',
    color: '#E61B80',
    icon: '💇‍♀️'
  },
  {
    id: 'peau',
    name: 'Peau',
    slug: 'peau',
    description: 'Diagnostic et soins personnalisés',
    color: '#ff4aa8',
    icon: '✨'
  },
  {
    id: 'complements',
    name: 'Compléments',
    slug: 'complements',
    description: 'Nutrition beauté sur-mesure',
    color: '#404E55',
    icon: '💊'
  },
  {
    id: 'bien-etre',
    name: 'Bien-être',
    slug: 'bien-etre',
    description: 'Équilibre corps et esprit',
    color: '#22c55e',
    icon: '🧘‍♀️'
  }
];

// Quiz disponibles
export const quizzes: Quiz[] = [
  {
    id: 'routine-cheveux-parfaite',
    slug: 'routine-cheveux-parfaite',
    title: 'Trouvez votre routine cheveux parfaite',
    subtitle: 'Diagnostic capillaire personnalisé',
    description: 'Découvrez les produits et gestes adaptés à votre type de cheveux pour une chevelure sublime au quotidien.',
    category: quizCategories[0], // Cheveux
    coverImage: '/images/quiz/cheveux-cover.jpg',
    icon: '💇‍♀️',
    estimatedTime: 3,
    difficulty: 'facile',
    popularityScore: 95,
    featured: true,
    tags: ['cheveux', 'routine', 'soins', 'diagnostic'],
    questions: [
      {
        id: 'type-cheveux',
        question: 'Quel est votre type de cheveux ?',
        type: 'single',
        required: true,
        options: [
          { id: 'gras', label: 'Gras', value: 'gras', points: { gras: 3 } },
          { id: 'secs', label: 'Secs', value: 'secs', points: { sec: 3 } },
          { id: 'mixtes', label: 'Mixtes', value: 'mixtes', points: { mixte: 3 } },
          { id: 'normaux', label: 'Normaux', value: 'normaux', points: { normal: 3 } }
        ]
      },
      {
        id: 'texture-cheveux',
        question: 'Quelle est la texture de vos cheveux ?',
        type: 'single',
        required: true,
        options: [
          { id: 'raides', label: 'Raides', value: 'raides', points: { lisse: 2 } },
          { id: 'ondules', label: 'Ondulés', value: 'ondules', points: { ondule: 2 } },
          { id: 'boucles', label: 'Bouclés', value: 'boucles', points: { boucle: 2 } },
          { id: 'crepus', label: 'Crépus', value: 'crepus', points: { crepu: 2 } }
        ]
      },
      {
        id: 'problematiques',
        question: 'Quelles sont vos principales préoccupations ?',
        type: 'multiple',
        required: true,
        description: 'Vous pouvez sélectionner plusieurs réponses',
        options: [
          { id: 'chute', label: 'Chute de cheveux', value: 'chute', points: { chute: 2 } },
          { id: 'pellicules', label: 'Pellicules', value: 'pellicules', points: { pellicules: 2 } },
          { id: 'manque-volume', label: 'Manque de volume', value: 'volume', points: { volume: 2 } },
          { id: 'fourches', label: 'Pointes fourchues', value: 'fourches', points: { reparation: 2 } },
          { id: 'terne', label: 'Cheveux ternes', value: 'terne', points: { brillance: 2 } },
          { id: 'cassant', label: 'Cheveux cassants', value: 'cassant', points: { fortifiant: 2 } }
        ]
      }
    ]
  },

  {
    id: 'diagnostic-peau-personnalise',
    slug: 'diagnostic-peau-personnalise',
    title: 'Diagnostic peau personnalisé',
    subtitle: 'Votre routine skincare sur-mesure',
    description: 'Identifiez votre type de peau et ses besoins spécifiques pour une routine de soins efficace et adaptée.',
    category: quizCategories[1], // Peau
    coverImage: '/images/quiz/peau-cover.jpg',
    icon: '✨',
    estimatedTime: 4,
    difficulty: 'moyen',
    popularityScore: 88,
    featured: true,
    tags: ['peau', 'skincare', 'routine', 'soins'],
    questions: [
      {
        id: 'type-peau',
        question: 'Comment décririez-vous votre type de peau ?',
        type: 'single',
        required: true,
        options: [
          { id: 'grasse', label: 'Grasse (brillances, pores dilatés)', value: 'grasse', points: { grasse: 3 } },
          { id: 'seche', label: 'Sèche (tiraillements, desquamation)', value: 'seche', points: { seche: 3 } },
          { id: 'mixte', label: 'Mixte (zone T grasse, joues sèches)', value: 'mixte', points: { mixte: 3 } },
          { id: 'normale', label: 'Normale (équilibrée)', value: 'normale', points: { normale: 3 } },
          { id: 'sensible', label: 'Sensible (réactive, rougeurs)', value: 'sensible', points: { sensible: 3 } }
        ]
      },
      {
        id: 'age-peau',
        question: 'Dans quelle tranche d\'âge vous situez-vous ?',
        type: 'single',
        required: true,
        options: [
          { id: 'moins-25', label: 'Moins de 25 ans', value: 'jeune', points: { jeune: 2 } },
          { id: '25-35', label: '25-35 ans', value: 'adulte', points: { prevention: 2 } },
          { id: '35-45', label: '35-45 ans', value: 'maturite', points: { antiage: 2 } },
          { id: 'plus-45', label: 'Plus de 45 ans', value: 'mature', points: { antiage: 3 } }
        ]
      },
      {
        id: 'preoccupations-peau',
        question: 'Quelles sont vos principales préoccupations ?',
        type: 'multiple',
        required: true,
        options: [
          { id: 'acne', label: 'Acné/imperfections', value: 'acne', points: { acne: 2 } },
          { id: 'rides', label: 'Rides/ridules', value: 'rides', points: { antiage: 2 } },
          { id: 'taches', label: 'Taches pigmentaires', value: 'taches', points: { eclat: 2 } },
          { id: 'rougeurs', label: 'Rougeurs/couperose', value: 'rougeurs', points: { apaisant: 2 } },
          { id: 'hydratation', label: 'Manque d\'hydratation', value: 'hydratation', points: { hydratant: 2 } },
          { id: 'eclat', label: 'Manque d\'éclat', value: 'eclat', points: { eclat: 2 } }
        ]
      }
    ]
  },

  {
    id: 'complements-beaute-intelligents',
    slug: 'complements-beaute-intelligents',
    title: 'Compléments beauté intelligents',
    subtitle: 'Nutrition beauté personnalisée',
    description: 'Découvrez les compléments alimentaires adaptés à vos besoins pour une beauté qui vient de l\'intérieur.',
    category: quizCategories[2], // Compléments
    coverImage: '/images/quiz/complements-cover.jpg',
    icon: '💊',
    estimatedTime: 5,
    difficulty: 'moyen',
    popularityScore: 76,
    featured: false,
    tags: ['compléments', 'nutrition', 'beauté', 'bien-être'],
    questions: [
      {
        id: 'objectifs-beaute',
        question: 'Quels sont vos principaux objectifs beauté ?',
        type: 'multiple',
        required: true,
        options: [
          { id: 'anti-age', label: 'Anti-âge', value: 'antiage', points: { antiage: 2 } },
          { id: 'eclat-peau', label: 'Éclat de la peau', value: 'eclat', points: { eclat: 2 } },
          { id: 'cheveux-forts', label: 'Cheveux plus forts', value: 'cheveux', points: { cheveux: 2 } },
          { id: 'ongles-solides', label: 'Ongles plus solides', value: 'ongles', points: { ongles: 2 } },
          { id: 'energie', label: 'Plus d\'énergie', value: 'energie', points: { energie: 2 } },
          { id: 'stress', label: 'Gestion du stress', value: 'stress', points: { stress: 2 } }
        ]
      }
    ]
  },

  {
    id: 'routine-anti-age-expert',
    slug: 'routine-anti-age-expert',
    title: 'Routine anti-âge expert',
    subtitle: 'Protocole anti-vieillissement avancé',
    description: 'Programme de soins anti-âge personnalisé selon votre profil et vos objectifs de rajeunissement.',
    category: quizCategories[1], // Peau
    coverImage: '/images/quiz/antiage-cover.jpg',
    icon: '🌟',
    estimatedTime: 6,
    difficulty: 'avancé',
    popularityScore: 82,
    featured: true,
    tags: ['anti-âge', 'expert', 'routine', 'soins'],
    questions: []
  },

  {
    id: 'soins-homme-moderne',
    slug: 'soins-homme-moderne',
    title: 'Soins de l\'homme moderne',
    subtitle: 'Grooming masculin personnalisé',
    description: 'Routine de soins adaptée aux besoins spécifiques de la peau masculine et au mode de vie actuel.',
    category: quizCategories[1], // Peau
    coverImage: '/images/quiz/homme-cover.jpg',
    icon: '👨‍💼',
    estimatedTime: 3,
    difficulty: 'facile',
    popularityScore: 68,
    featured: false,
    tags: ['homme', 'rasage', 'routine', 'soins'],
    questions: []
  },

  {
    id: 'preparation-solaire-corse',
    slug: 'preparation-solaire-corse',
    title: 'Préparation solaire Corse',
    subtitle: 'Protection optimale sous le soleil méditerranéen',
    description: 'Programme complet pour préparer, protéger et réparer votre peau sous le soleil intense de la Corse.',
    category: quizCategories[1], // Peau
    coverImage: '/images/quiz/solaire-cover.jpg',
    icon: '☀️',
    estimatedTime: 4,
    difficulty: 'moyen',
    popularityScore: 91,
    featured: true,
    tags: ['solaire', 'protection', 'corse', 'été'],
    questions: []
  }
];

// Fonctions utilitaires
export const getFeaturedQuizzes = (): Quiz[] => {
  return quizzes.filter(quiz => quiz.featured);
};

export const getQuizzesByCategory = (categorySlug: string): Quiz[] => {
  return quizzes.filter(quiz => quiz.category.slug === categorySlug);
};

export const getQuizBySlug = (slug: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.slug === slug);
};

export const getPopularQuizzes = (limit: number = 3): Quiz[] => {
  return quizzes
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

export const searchQuizzes = (query: string): Quiz[] => {
  const searchTerm = query.toLowerCase();
  return quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm) ||
    quiz.description.toLowerCase().includes(searchTerm) ||
    quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};