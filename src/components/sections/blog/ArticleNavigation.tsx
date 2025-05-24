// src/components/sections/blog/ArticleNavigation.tsx
import { motion } from 'framer-motion';
import { Hash, Calendar, Phone, MessageSquare } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { PharmacyButton } from '@/components/ui/pharmacy-button';

interface ArticleNavigationProps {
  article: BlogArticle;
}

export const ArticleNavigation = ({ article }: ArticleNavigationProps) => {
  return (
    <div className="space-y-6">
      <TableOfContents />
      <ArticleInfo article={article} />
      <QuickActions />
      <RelatedTopics article={article} />
    </div>
  );
};

const TableOfContents = () => {
  // TODO: Extraire automatiquement les titres du contenu
  const headings = [
    'Pourquoi se faire vacciner ?',
    'Les gestes barrières essentiels',
    'Renforcer son système immunitaire',
    'Que faire en cas de symptômes ?',
    'Notre accompagnement'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-xl p-6 shadow-lg shadow-[#E61B80]/5 border border-gray-100"
    >
      <h3 className="flex items-center space-x-2 text-lg font-semibold text-[#404E55] mb-4">
        <Hash size={18} className="text-[#E61B80]" />
        <span>Sommaire</span>
      </h3>
      
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-[#404E55]/70 hover:text-[#E61B80] transition-colors py-1 border-l-2 border-transparent hover:border-[#E61B80] pl-3"
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

const ArticleInfo = ({ article }: { article: BlogArticle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-[#F8F9FA] rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">
        À propos de cet article
      </h3>
      
      <div className="space-y-3 text-sm">
        <InfoItem 
          label="Dernière mise à jour"
          value={new Date(article.updatedAt || article.publishedAt).toLocaleDateString('fr-FR')}
          icon={<Calendar size={14} />}
        />
        
        <InfoItem 
          label="Catégorie"
          value={article.category.name}
          icon={<span className="text-sm">{article.category.icon}</span>}
        />
        
        <InfoItem 
          label="Mots-clés"
          value={article.tags.slice(0, 3).join(', ')}
          icon={<Hash size={14} />}
        />
      </div>
    </motion.div>
  );
};

const InfoItem = ({ 
  label, 
  value, 
  icon 
}: { 
  label: string; 
  value: string; 
  icon: React.ReactNode; 
}) => (
  <div className="flex items-start space-x-2">
    <div className="text-[#E61B80] mt-0.5">{icon}</div>
    <div>
      <p className="text-[#404E55]/60">{label}</p>
      <p className="text-[#404E55] font-medium">{value}</p>
    </div>
  </div>
);

const QuickActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-gradient-to-br from-[#E61B80]/5 to-[#ff4aa8]/5 rounded-xl p-6 border border-[#E61B80]/10"
    >
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">
        Une question ?
      </h3>
      
      <p className="text-sm text-[#404E55]/70 mb-4">
        Nos pharmaciens sont là pour vous conseiller personnellement.
      </p>
      
      <div className="space-y-3">
        <PharmacyButton 
          variant="primary" 
          size="sm" 
          className="w-full"
          iconLeft={<Phone size={16} />}
        >
          Nous appeler
        </PharmacyButton>
        
        <PharmacyButton 
          variant="outline" 
          size="sm" 
          className="w-full"
          iconLeft={<MessageSquare size={16} />}
        >
          Envoyer un message
        </PharmacyButton>
      </div>
    </motion.div>
  );
};

const RelatedTopics = ({ article }: { article: BlogArticle }) => {
  const relatedTopics = [
    'Vaccination antigrippale',
    'Gestes barrières',
    'Renforcement immunitaire',
    'Conseils hiver'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="bg-white rounded-xl p-6 border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-[#404E55] mb-4">
        Sujets liés
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {relatedTopics.map((topic, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#F8F9FA] text-[#404E55]/70 hover:bg-[#E61B80]/10 hover:text-[#E61B80] transition-colors cursor-pointer"
          >
            #{topic}
          </span>
        ))}
      </div>
    </motion.div>
  );
};