// src/types/blog.ts

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // en minutes
  difficulty: 'facile' | 'moyen' | 'expert';
  tags: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface BlogFilters {
  category?: string;
  search?: string;
  tag?: string;
  difficulty?: string;
}

export interface BlogPageProps {
  articles: BlogArticle[];
  categories: BlogCategory[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}