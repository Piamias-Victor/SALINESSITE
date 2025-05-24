// src/components/sections/blog/BlogHero.tsx
import { motion } from 'framer-motion';
import { Search, BookOpen, Heart } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { formatDate, getReadingTimeText } from '@/lib/blog/utils';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import Link from 'next/link';

interface BlogHeroProps {
  featuredArticle?: BlogArticle;
  onSearch?: (query: string) => void;
}

export const BlogHero = ({ featuredArticle, onSearch }: BlogHeroProps) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-br from-white via-white to-[#fff5fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <HeroHeader />
          <SearchSection onSearch={onSearch} />
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        </div>
      </div>
    </section>
  );
};

const HeroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#E61B80]/10 text-[#E61B80] mb-4">
        <Heart size={16} className="mr-2" />
        Conseils santé & bien-être
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#404E55] mb-4">
        Blog <span className="text-[#E61B80]">Santé</span>
      </h1>
      
      <p className="text-lg text-[#404E55]/80 max-w-2xl mx-auto">
        Découvrez nos conseils d'experts, actualités pharmaceutiques et guides pratiques 
        pour prendre soin de votre santé au quotidien.
      </p>
    </motion.div>
  );
};

interface SearchSectionProps {
  onSearch?: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch?.(query);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-xl mx-auto mb-12"
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#404E55]/40" />
          <input
            type="text"
            name="search"
            placeholder="Rechercher un article, un conseil..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-all duration-200"
          />
        </div>
      </form>
    </motion.div>
  );
};

interface FeaturedArticleProps {
  article: BlogArticle;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#E61B80]/10 border border-gray-100"
    >
      <div className="grid md:grid-cols-2">
        <FeaturedImage article={article} />
        <FeaturedContent article={article} />
      </div>
    </motion.div>
  );
};

const FeaturedImage = ({ article }: { article: BlogArticle }) => {
  return (
    <div className="relative h-64 md:h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E61B80]/20 to-[#ff4aa8]/20 flex items-center justify-center">
        <BookOpen size={48} className="text-white" />
      </div>
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E61B80] text-white">
          Article vedette
        </span>
      </div>
    </div>
  );
};

const FeaturedContent = ({ article }: { article: BlogArticle }) => {
  return (
    <div className="p-6 md:p-8 flex flex-col justify-center">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <span 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: article.category.color }}
          />
          <span className="text-sm font-medium text-[#404E55]/80">
            {article.category.name}
          </span>
          <span className="text-sm text-[#404E55]/60">
            {getReadingTimeText(article.readingTime)}
          </span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold text-[#404E55] leading-tight">
          {article.title}
        </h2>
        
        <p className="text-[#404E55]/70 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#E61B80]/10 flex items-center justify-center">
              <span className="text-sm font-medium text-[#E61B80]">
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#404E55]">{article.author.name}</p>
              <p className="text-xs text-[#404E55]/60">{formatDate(article.publishedAt)}</p>
            </div>
          </div>
          
          <Link href={`/blog/${article.slug}`}>
            <PharmacyButton variant="outline">
              Lire l'article
            </PharmacyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};