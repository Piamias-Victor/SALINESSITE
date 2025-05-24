// src/app/blog/page.tsx
"use client";

import { useState, useMemo } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { CategoryFilter } from "@/components/sections/blog/CategoryFilter";
import { ArticleGrid } from "@/components/sections/blog/ArticleGrid";
import { getFeaturedArticles, blogArticles, blogCategories, searchArticles, getArticlesByCategory } from "@/lib/blog/articles";
import { MobileCallButton } from "@/components/ui/mobile-call-button";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredArticles = getFeaturedArticles();
  const featuredArticle = featuredArticles[0];

  // Filtrer les articles selon la catégorie et la recherche
  const filteredArticles = useMemo(() => {
    let articles = blogArticles;

    // Filtrer par catégorie
    if (selectedCategory) {
      articles = getArticlesByCategory(selectedCategory);
    }

    // Filtrer par recherche
    if (searchQuery.trim()) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return articles;
  }, [selectedCategory, searchQuery]);

  // Compter les articles par catégorie
  const articleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogCategories.forEach(category => {
      counts[category.slug] = getArticlesByCategory(category.slug).length;
    });
    return counts;
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Reset la catégorie si on fait une recherche
    if (query.trim()) {
      setSelectedCategory(null);
    }
  };

  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    // Reset la recherche si on sélectionne une catégorie
    if (categorySlug) {
      setSearchQuery("");
    }
  };

  return (
    <SiteContainer>
      <BlogHero 
        featuredArticle={featuredArticle}
        onSearch={handleSearch}
      />
      
      <CategoryFilter
        categories={blogCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        articleCounts={articleCounts}
      />
      
      <ArticleGrid
        articles={filteredArticles}
        emptyMessage={
          searchQuery 
            ? `Aucun article trouvé pour "${searchQuery}"` 
            : selectedCategory
            ? "Aucun article dans cette catégorie"
            : "Aucun article disponible"
        }
      />
      
      {/* Section newsletter */}
      <NewsletterCTA />
      
      <MobileCallButton />
    </SiteContainer>
  );
}

const NewsletterCTA = () => {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#404E55] mb-4">
            Restez informé de nos <span className="text-[#E61B80]">derniers conseils</span>
          </h2>
          <p className="text-[#404E55]/70 mb-6">
            Recevez chaque semaine nos meilleurs articles santé et nos conseils d'experts 
            directement dans votre boîte mail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E61B80]/50 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#E61B80] text-white rounded-lg font-medium hover:bg-[#d01974] transition-colors">
              S'abonner
            </button>
          </div>
          
          <p className="text-xs text-[#404E55]/60 mt-3">
            Pas de spam, désinscription possible à tout moment
          </p>
        </div>
      </div>
    </section>
  );
};