// src/components/sections/blog/RelatedArticles.tsx
import { motion } from 'framer-motion';
import { BlogArticle } from '@/types/blog';
import { ArticleCard } from './ArticleCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader />
          <ArticlesGrid articles={articles} />
          <ViewMoreButton />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4">
        Articles <span className="text-[#E61B80]">recommandés</span>
      </h2>
      <p className="text-[#404E55]/70 max-w-2xl mx-auto">
        Découvrez d'autres conseils de nos experts pour prendre soin de votre santé
      </p>
    </motion.div>
  );
};

const ArticlesGrid = ({ articles }: { articles: BlogArticle[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {articles.map((article, index) => (
        <ArticleCard 
          key={article.slug}
          article={article}
          index={index}
          variant="compact"
        />
      ))}
    </div>
  );
};

const ViewMoreButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mt-12"
    >
      <Link 
        href="/blog"
        className="inline-flex items-center space-x-2 text-[#E61B80] font-medium hover:space-x-3 transition-all duration-200 group"
      >
        <span>Voir tous nos articles</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};