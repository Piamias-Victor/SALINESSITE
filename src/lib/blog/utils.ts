// src/lib/blog/utils.ts

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short'
  });
};

export const getReadingTimeText = (minutes: number): string => {
  if (minutes === 1) return '1 min de lecture';
  return `${minutes} min de lecture`;
};

export const getDifficultyLabel = (difficulty: string): string => {
  const labels = {
    'facile': 'Accessible à tous',
    'moyen': 'Niveau intermédiaire',
    'expert': 'Niveau avancé'
  };
  return labels[difficulty as keyof typeof labels] || difficulty;
};

export const getDifficultyColor = (difficulty: string): string => {
  const colors = {
    'facile': '#22c55e',
    'moyen': '#f59e0b',
    'expert': '#ef4444'
  };
  return colors[difficulty as keyof typeof colors] || '#6b7280';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const extractReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const isRecentArticle = (publishedAt: string, daysThreshold: number = 7): boolean => {
  const articleDate = new Date(publishedAt);
  const now = new Date();
  const diffInDays = (now.getTime() - articleDate.getTime()) / (1000 * 3600 * 24);
  return diffInDays <= daysThreshold;
};

export const getCategoryIcon = (categorySlug: string): string => {
  const icons = {
    'sante-saisonniere': '🌿',
    'conseils-pharmacien': '💊',
    'bien-etre': '✨',
    'actualites': '📰'
  };
  return icons[categorySlug as keyof typeof icons] || '📝';
};