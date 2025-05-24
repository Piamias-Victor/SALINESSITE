// src/components/sections/blog/ArticleCard.tsx
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { formatDateShort, getReadingTimeText, isRecentArticle } from '@/lib/blog/utils';
import Link from 'next/link';

interface ArticleCardProps {
  article: BlogArticle;
  index: number;
  variant?: 'default' | 'compact';
}

export const ArticleCard = ({ 
  article, 
  index, 
  variant = 'default' 
}: ArticleCardProps) => {
  const isRecent = isRecentArticle(article.publishedAt);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        group bg-white rounded-xl overflow-hidden shadow-lg shadow-[#E61B80]/5 border border-gray-100 
        hover:shadow-xl hover:shadow-[#E61B80]/10 hover:border-[#E61B80]/20 
        transition-all duration-300 hover:-translate-y-1
        ${variant === 'compact' ? 'h-auto' : ''}
      `}
    >
      <Link href={`/blog/${article.slug}`} className="block">
        <ArticleImage article={article} isRecent={isRecent} />
        <ArticleContent article={article} variant={variant} />
      </Link>
    </motion.article>
  );
};

interface ArticleImageProps {
  article: BlogArticle;
  isRecent: boolean;
}

const ArticleImage = ({ article, isRecent }: ArticleImageProps) => {
  return (
    <div className="relative h-48 overflow-hidden">
      {/* Placeholder image avec gradient et icône */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-80"
        style={{ 
          backgroundImage: `linear-gradient(135deg, ${article.category.color}20, ${article.category.color}40)` 
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl">{article.category.icon}</span>
      </div>
      
      {/* Badges overlay */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        <CategoryBadge category={article.category} />
        {isRecent && <RecentBadge />}
        {article.featured && <FeaturedBadge />}
      </div>
      
      {/* Reading time overlay */}
      <div className="absolute bottom-3 right-3">
        <ReadingTimeBadge readingTime={article.readingTime} />
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
};

interface ArticleContentProps {
  article: BlogArticle;
  variant: 'default' | 'compact';
}

const ArticleContent = ({ article, variant }: ArticleContentProps) => {
  return (
    <div className={`p-6 ${variant === 'compact' ? 'space-y-3' : 'space-y-4'}`}>
      <ArticleTitle title={article.title} variant={variant} />
      <ArticleExcerpt excerpt={article.excerpt} variant={variant} />
      <ArticleTags tags={article.tags} />
      <ArticleFooter article={article} />
    </div>
  );
};

interface ArticleTitleProps {
  title: string;
  variant: 'default' | 'compact';
}

const ArticleTitle = ({ title, variant }: ArticleTitleProps) => {
  return (
    <h3 className={`
      font-bold text-[#404E55] group-hover:text-[#E61B80] transition-colors duration-200 leading-tight
      ${variant === 'compact' ? 'text-lg' : 'text-xl'}
    `}>
      {title}
    </h3>
  );
};

interface ArticleExcerptProps {
  excerpt: string;
  variant: 'default' | 'compact';
}

const ArticleExcerpt = ({ excerpt, variant }: ArticleExcerptProps) => {
  return (
    <p className={`
      text-[#404E55]/70 leading-relaxed
      ${variant === 'compact' ? 'text-sm line-clamp-2' : 'text-sm line-clamp-3'}
    `}>
      {excerpt}
    </p>
  );
};

const ArticleTags = ({ tags }: { tags: string[] }) => {
  const displayTags = tags.slice(0, 3); // Afficher max 3 tags
  
  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[#F8F9FA] text-[#404E55]/70 hover:bg-[#E61B80]/10 hover:text-[#E61B80] transition-colors cursor-pointer"
        >
          #{tag}
        </span>
      ))}
      {tags.length > 3 && (
        <span className="text-xs text-[#404E55]/50">
          +{tags.length - 3}
        </span>
      )}
    </div>
  );
};

const ArticleFooter = ({ article }: { article: BlogArticle }) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <AuthorInfo author={article.author} publishedAt={article.publishedAt} />
      <ReadMoreButton />
    </div>
  );
};

interface AuthorInfoProps {
  author: BlogArticle['author'];
  publishedAt: string;
}

const AuthorInfo = ({ author, publishedAt }: AuthorInfoProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-[#E61B80]/10 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-medium text-[#E61B80]">
          {author.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </span>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#404E55] truncate">{author.name}</p>
        <div className="flex items-center space-x-1 text-xs text-[#404E55]/60">
          <Calendar size={12} />
          <span>{formatDateShort(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

const ReadMoreButton = () => {
  return (
    <div className="flex items-center space-x-1 text-[#E61B80] text-sm font-medium group-hover:space-x-2 transition-all duration-200">
      <span>Lire</span>
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
    </div>
  );
};

// Composants de badges
const CategoryBadge = ({ category }: { category: BlogArticle['category'] }) => (
  <span 
    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
    style={{ backgroundColor: category.color }}
  >
    {category.name}
  </span>
);

const RecentBadge = () => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
    <Sparkles size={12} className="mr-1" />
    Nouveau
  </span>
);

const FeaturedBadge = () => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
    ⭐ Vedette
  </span>
);

const ReadingTimeBadge = ({ readingTime }: { readingTime: number }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
    <Clock size={12} className="mr-1" />
    {getReadingTimeText(readingTime)}
  </span>
);