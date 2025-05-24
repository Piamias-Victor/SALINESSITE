// src/components/sections/blog/ArticleContent.tsx
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleContentProps {
  content: string;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="article-prose max-w-none"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Titres personnalisés
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-[#404E55] mt-12 mb-6 pb-4 border-b-4 border-[#E61B80] first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-[#E61B80] mt-10 mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-gradient-to-b before:from-[#E61B80] before:to-[#ff4aa8] before:rounded">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-[#404E55] mt-8 mb-3">
              {children}
            </h3>
          ),
          
          // Paragraphes avec espacement
          p: ({ children }) => (
            <p className="text-lg leading-relaxed text-[#404E55]/90 mb-6">
              {children}
            </p>
          ),
          
          // Listes stylées
          ul: ({ children }) => (
            <ul className="my-6 space-y-3">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="relative pl-8 text-lg leading-relaxed text-[#404E55]/90 before:content-['●'] before:absolute before:left-0 before:text-[#E61B80] before:font-bold before:text-xl">
              {children}
            </li>
          ),
          
          // Listes ordonnées
          ol: ({ children }) => (
            <ol className="my-6 space-y-3 counter-reset-[list-counter]">
              {children}
            </ol>
          ),
          
          // Texte gras et italique
          strong: ({ children }) => (
            <strong className="font-semibold text-[#404E55] bg-[#E61B80]/10 px-1 py-0.5 rounded">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[#404E55]/80">
              {children}
            </em>
          ),
          
          // Code inline
          code: ({ children }) => (
            <code className="bg-[#F8F9FA] text-[#E61B80] px-2 py-1 rounded border border-[#E61B80]/20 font-mono text-sm">
              {children}
            </code>
          ),
          
          // Citations
          blockquote: ({ children }) => (
            <blockquote className="my-8 pl-6 py-4 border-l-4 border-[#E61B80] bg-gradient-to-r from-[#E61B80]/5 to-transparent rounded-r-lg italic text-[#404E55]/80 relative before:text-6xl before:text-[#E61B80]/30 before:absolute before:-top-2 before:left-2 before:font-serif">
              <div className="relative z-10">
                {children}
              </div>
            </blockquote>
          ),
          
          // Liens
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-[#E61B80] border-b border-[#E61B80]/40 hover:border-[#E61B80] hover:bg-[#E61B80]/10 px-1 py-0.5 rounded transition-all duration-200"
              >
                {children}
              </a>
            );
          },
          
          // Séparateurs
          hr: () => (
            <hr className="my-12 border-none h-0.5 bg-gradient-to-r from-transparent via-[#E61B80]/40 to-transparent" />
          ),
          
          // Tables (bonus)
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="bg-[#E61B80] text-white px-4 py-3 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 border-b border-gray-100 last:border-b-0">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.article>
  );
};