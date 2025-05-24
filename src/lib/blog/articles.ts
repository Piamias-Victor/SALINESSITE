// src/lib/blog/articles.ts
import { BlogArticle, BlogCategory, BlogAuthor } from '@/types/blog';

// Catégories du blog
export const blogCategories: BlogCategory[] = [
  {
    id: 'sante-saisonniere',
    name: 'Santé saisonnière',
    slug: 'sante-saisonniere',
    description: 'Conseils adaptés aux saisons',
    color: '#E61B80',
    icon: '🌿'
  },
  {
    id: 'conseils-pharmacien',
    name: 'Conseils pharmacien',
    slug: 'conseils-pharmacien',
    description: 'Expertise pharmaceutique',
    color: '#404E55',
    icon: '💊'
  },
  {
    id: 'bien-etre',
    name: 'Bien-être',
    slug: 'bien-etre',
    description: 'Santé au quotidien',
    color: '#ff4aa8',
    icon: '✨'
  },
  {
    id: 'actualites',
    name: 'Actualités',
    slug: 'actualites',
    description: 'Nouveautés et infos',
    color: '#22c55e',
    icon: '📰'
  }
];

// Auteurs
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'marie-laurent',
    name: 'Dr. Marie Laurent',
    role: 'Pharmacienne titulaire',
    avatar: '/images/team/marie.jpg'
  },
  {
    id: 'alexandre-dupont',
    name: 'Alexandre Dupont',
    role: 'Pharmacien adjoint',
    avatar: '/images/team/alexandre.jpg'
  },
  {
    id: 'equipe-salines',
    name: 'Équipe Salines',
    role: 'Grande Pharmacie des Salines',
    avatar: '/images/logo-round.jpg'
  }
];

// Articles exemple (en dur pour commencer)
export const blogArticles: BlogArticle[] = [
  {
    slug: 'grippe-prevention-2025',
    title: 'Prévenir la grippe : guide complet 2025',
    excerpt: 'Découvrez les gestes essentiels pour vous protéger efficacement contre la grippe cette saison.',
    content: '', // Sera chargé depuis le fichier .md
    coverImage: '/images/blog/grippe-prevention.jpg',
    category: blogCategories[0], // Santé saisonnière
    author: blogAuthors[0], // Dr. Marie Laurent
    publishedAt: '2025-01-15',
    readingTime: 5,
    difficulty: 'facile',
    tags: ['grippe', 'prévention', 'vaccination', 'hiver'],
    featured: true,
    seoTitle: 'Comment prévenir la grippe en 2025 - Conseils pharmacien',
    seoDescription: 'Guide complet pour prévenir la grippe : vaccination, gestes barrières, conseils de votre pharmacien à Ajaccio.'
  },
  {
    slug: 'medicaments-generiques-guide',
    title: 'Médicaments génériques : tout comprendre',
    excerpt: 'Les génériques expliqués simplement : efficacité, sécurité et économies pour votre santé.',
    content: '',
    coverImage: '/images/blog/generiques.jpg',
    category: blogCategories[1], // Conseils pharmacien
    author: blogAuthors[1], // Alexandre Dupont
    publishedAt: '2025-01-12',
    readingTime: 7,
    difficulty: 'moyen',
    tags: ['génériques', 'médicaments', 'économies', 'sécurité'],
    featured: false
  },
  {
    slug: 'sommeil-qualite-conseils',
    title: '7 conseils pour un sommeil réparateur',
    excerpt: 'Améliorez votre qualité de sommeil avec ces conseils pratiques et naturels de nos experts.',
    content: '',
    coverImage: '/images/blog/sommeil.jpg',
    category: blogCategories[2], // Bien-être
    author: blogAuthors[2], // Équipe Salines
    publishedAt: '2025-01-10',
    readingTime: 6,
    difficulty: 'facile',
    tags: ['sommeil', 'bien-être', 'santé', 'conseils'],
    featured: true
  },
  {
    slug: 'allergie-printemps-corse',
    title: 'Allergies printanières en Corse : se préparer',
    excerpt: 'Spécificités des allergies en Corse et solutions pour mieux vivre le printemps.',
    content: '',
    coverImage: '/images/blog/allergies-corse.jpg',
    category: blogCategories[0], // Santé saisonnière
    author: blogAuthors[0], // Dr. Marie Laurent
    publishedAt: '2025-01-08',
    readingTime: 4,
    difficulty: 'facile',
    tags: ['allergies', 'printemps', 'corse', 'pollen'],
    featured: false
  }
];

// Fonctions utilitaires
export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

export const getArticlesByCategory = (categorySlug: string): BlogArticle[] => {
  return blogArticles.filter(article => article.category.slug === categorySlug);
};

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): BlogArticle[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  return blogArticles
    .filter(article => 
      article.slug !== currentSlug && 
      (article.category.id === currentArticle.category.id || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const searchArticles = (query: string): BlogArticle[] => {
  const searchTerm = query.toLowerCase();
  return blogArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};