// src/components/sections/blog/ArticleHeader.tsx
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { formatDate, getReadingTimeText } from '@/lib/blog/utils';
import { PharmacyButton } from '@/components/ui/pharmacy-button';
import Link from 'next/link';

interface ArticleHeaderProps {
  article: BlogArticle;
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <header className="relative pt-24 pb-12 bg-gradient-to-br from-white via-white to-[#fff5fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BackNavigation />
          <ArticleMeta article={article} />
          <ArticleTitle title={article.title} />
          <ArticleActions />
          <AuthorSection article={article} />
        </div>
      </div>
    </header>
  );
};

const BackNavigation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Link 
        href="/blog"
        className="inline-flex items-center space-x-2 text-[#404E55]/70 hover:text-[#E61B80] transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Retour au blog</span>
      </Link>
    </motion.div>
  );
};

const ArticleMeta = ({ article }: { article: BlogArticle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap items-center gap-4 mb-6"
    >
      <CategoryBadge category={article.category} />
      <MetaItem icon={<Calendar size={16} />} text={formatDate(article.publishedAt)} />
      <MetaItem icon={<Clock size={16} />} text={getReadingTimeText(article.readingTime)} />
      <DifficultyBadge difficulty={article.difficulty} />
    </motion.div>
  );
};

const CategoryBadge = ({ category }: { category: BlogArticle['category'] }) => (
  <span 
    className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium text-white"
    style={{ backgroundColor: category.color }}
  >
    <span>{category.icon}</span>
    <span>{category.name}</span>
  </span>
);

const MetaItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-2 text-[#404E55]/70">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const getDifficultyConfig = (level: string) => {
    const configs = {
      'facile': { color: '#22c55e', label: 'Accessible' },
      'moyen': { color: '#f59e0b', label: 'Intermédiaire' },
      'expert': { color: '#ef4444', label: 'Avancé' }
    };
    return configs[level as keyof typeof configs] || { color: '#6b7280', label: level };
  };

  const config = getDifficultyConfig(difficulty);

  return (
    <span 
      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-white"
      style={{ backgroundColor: config.color }}
    >
      {config.label}
    </span>
  );
};

const ArticleTitle = ({ title }: { title: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#404E55] leading-tight mb-8"
    >
      {title}
    </motion.h1>
  );
};

const ArticleActions = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    } else {
      // Fallback: copier l'URL
      navigator.clipboard.writeText(window.location.href);
      // TODO: Afficher une notification
    }
  };

  const handleBookmark = () => {
    // TODO: Implémenter la sauvegarde
    console.log('Article sauvegardé');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center space-x-3 mb-8"
    >
      <PharmacyButton
        variant="outline"
        size="sm"
        onClick={handleShare}
        iconLeft={<Share2 size={16} />}
      >
        Partager
      </PharmacyButton>
      
      <PharmacyButton
        variant="ghost"
        size="sm"
        onClick={handleBookmark}
        iconLeft={<Bookmark size={16} />}
      >
        Sauvegarder
      </PharmacyButton>
    </motion.div>
  );
};

const AuthorSection = ({ article }: { article: BlogArticle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100"
    >
      <div className="w-16 h-16 rounded-full bg-[#E61B80]/10 flex items-center justify-center flex-shrink-0">
        <span className="text-lg font-bold text-[#E61B80]">
          {article.author.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </span>
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-[#404E55] mb-1">{article.author.name}</h3>
        <p className="text-sm text-[#404E55]/70 mb-2">{article.author.role}</p>
        {article.author.bio && (
          <p className="text-sm text-[#404E55]/60">{article.author.bio}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-1 text-[#404E55]/60">
        <User size={16} />
        <span className="text-sm">Auteur</span>
      </div>
    </motion.div>
  );
};