// src/components/sections/blog/SearchBar.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { BlogArticle } from '@/types/blog';
import { searchArticles } from '@/lib/blog/articles';
import Link from 'next/link';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showSuggestions?: boolean;
}

export const SearchBar = ({ 
  onSearch, 
  placeholder = "Rechercher un article, un conseil...",
  showSuggestions = true 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<BlogArticle[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Recherche en temps réel
  useEffect(() => {
    if (query.trim() && showSuggestions) {
      const results = searchArticles(query).slice(0, 5);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [query, showSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    onSearch?.('');
    inputRef.current?.focus();
  };

  const popularSearches = [
    'grippe', 'sommeil', 'génériques', 'vaccination', 'allergie'
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#404E55]/40" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent transition-all duration-200"
          />
          
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#404E55]/40 hover:text-[#E61B80] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>

      {/* Dropdown suggestions */}
      <AnimatePresence>
        {isOpen && showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 z-50 overflow-hidden"
          >
            {suggestions.length > 0 ? (
              <SearchResults suggestions={suggestions} onSelect={() => setIsOpen(false)} />
            ) : query.trim() ? (
              <NoResults query={query} />
            ) : (
              <PopularSearches searches={popularSearches} onSelect={(search) => {
                setQuery(search);
                onSearch?.(search);
                setIsOpen(false);
              }} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop pour fermer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const SearchResults = ({ 
  suggestions, 
  onSelect 
}: { 
  suggestions: BlogArticle[]; 
  onSelect: () => void; 
}) => {
  return (
    <div className="py-2">
      <div className="px-4 py-2 text-xs font-medium text-[#404E55]/60 border-b border-gray-100">
        Résultats
      </div>
      {suggestions.map((article, index) => (
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`}
          onClick={onSelect}
          className="block px-4 py-3 hover:bg-[#F8F9FA] transition-colors"
        >
          <div className="flex items-start space-x-3">
            <div 
              className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: article.category.color }}
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-[#404E55] truncate">
                {article.title}
              </h4>
              <p className="text-xs text-[#404E55]/70 mt-1 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-3 mt-2 text-xs text-[#404E55]/50">
                <span>{article.category.name}</span>
                <span>•</span>
                <span>{article.readingTime} min</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const NoResults = ({ query }: { query: string }) => {
  return (
    <div className="py-8 px-4 text-center">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F8F9FA] flex items-center justify-center">
        <Search size={20} className="text-[#404E55]/40" />
      </div>
      <h4 className="text-sm font-medium text-[#404E55] mb-1">
        Aucun résultat pour "{query}"
      </h4>
      <p className="text-xs text-[#404E55]/70">
        Essayez des mots-clés différents ou plus généraux
      </p>
    </div>
  );
};

const PopularSearches = ({ 
  searches, 
  onSelect 
}: { 
  searches: string[]; 
  onSelect: (search: string) => void; 
}) => {
  return (
    <div className="py-2">
      <div className="px-4 py-2 text-xs font-medium text-[#404E55]/60 border-b border-gray-100 flex items-center space-x-2">
        <TrendingUp size={14} />
        <span>Recherches populaires</span>
      </div>
      {searches.map((search, index) => (
        <button
          key={index}
          onClick={() => onSelect(search)}
          className="w-full px-4 py-2 text-left hover:bg-[#F8F9FA] transition-colors flex items-center space-x-3"
        >
          <Clock size={14} className="text-[#404E55]/40" />
          <span className="text-sm text-[#404E55]">{search}</span>
        </button>
      ))}
    </div>
  );
};