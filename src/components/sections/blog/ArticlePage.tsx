// src/components/sections/blog/ArticlePage.tsx
import { BlogArticle } from '@/types/blog';
import { ArticleHeader } from './ArticleHeader';
import { ArticleContent } from './ArticleContent';
import { ArticleNavigation } from './ArticleNavigation';
import { RelatedArticles } from './RelatedArticles';
import { ReadingProgress } from './ReadingProgress';

interface ArticlePageProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
  content: string;
}

export const ArticlePage = ({ 
  article, 
  relatedArticles, 
  content 
}: ArticlePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      
      <ArticleHeader article={article} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contenu principal */}
          <main className="lg:col-span-8">
            <ArticleContent content={content} />
            
            {/* Call-to-action pharmacie */}
            <PharmacyCTA />
          </main>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <ArticleNavigation article={article} />
          </aside>
        </div>
      </div>
      
      {/* Articles liés */}
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
};

const PharmacyCTA = () => {
  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-[#E61B80]/5 to-[#ff4aa8]/5 rounded-2xl border border-[#E61B80]/10">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-[#E61B80]/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">💊</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#404E55] mb-2">
            Besoin de conseils personnalisés ?
          </h3>
          <p className="text-[#404E55]/70 mb-4">
            Nos pharmaciens experts sont disponibles pour répondre à vos questions 
            et vous accompagner dans votre parcours de santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:0495222831"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#E61B80] text-white rounded-lg font-medium hover:bg-[#d01974] transition-colors"
            >
              Nous appeler
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-[#E61B80] text-[#E61B80] rounded-lg font-medium hover:bg-[#E61B80]/5 transition-colors"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};