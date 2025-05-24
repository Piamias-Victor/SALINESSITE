// src/components/sections/quiz/ProductRecommendation.tsx
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { ProductRecommendation as ProductType } from '@/types/quiz';
import { PharmacyButton } from '@/components/ui/pharmacy-button';

interface ProductRecommendationProps {
  product: ProductType;
  index: number;
}

export const ProductRecommendation = ({ product, index }: ProductRecommendationProps) => {
  const getPriorityConfig = (priority: string) => {
    const configs = {
      'essentiel': {
        color: '#E61B80',
        label: '⭐ Essentiel',
        description: 'Indispensable pour votre routine'
      },
      'recommandé': {
        color: '#f59e0b',
        label: '👍 Recommandé',
        description: 'Très bénéfique pour vous'
      },
      'bonus': {
        color: '#22c55e',
        label: '💚 Bonus',
        description: 'Pour aller plus loin'
      }
    };
    return configs[priority as keyof typeof configs] || configs.recommandé;
  };

  const priorityConfig = getPriorityConfig(product.priority);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative p-6 rounded-xl border-2 transition-all duration-200 group
        ${product.priority === 'essentiel' 
          ? 'border-[#E61B80]/20 bg-[#E61B80]/5' 
          : 'border-gray-200 bg-white hover:border-[#E61B80]/20'
        }
      `}
    >
      <ProductHeader product={product} priorityConfig={priorityConfig} />
      <ProductDetails product={product} />
      <ProductReasons product={product} />
      <ProductActions product={product} />
    </motion.div>
  );
};

const ProductHeader = ({ product, priorityConfig }: { product: ProductType; priorityConfig: any }) => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <ProductImage />
          <div>
            <h3 className="font-bold text-[#404E55] text-lg group-hover:text-[#E61B80] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#404E55]/70 text-sm">{product.brand}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <span 
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: priorityConfig.color }}
          >
            {priorityConfig.label}
          </span>
          <span className="text-xs text-[#404E55]/60">{priorityConfig.description}</span>
        </div>
      </div>
      
      <div className="text-right">
        <div className="text-xl font-bold text-[#E61B80] mb-1">{product.price}</div>
        <div className="text-xs text-[#404E55]/60">{product.category}</div>
      </div>
    </div>
  );
};

const ProductImage = () => {
  return (
    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#E61B80]/10 to-[#ff4aa8]/10 flex items-center justify-center flex-shrink-0">
      <span className="text-2xl">💄</span>
    </div>
  );
};

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <div className="mb-4">
      <p className="text-[#404E55]/80 text-sm leading-relaxed">
        {product.description}
      </p>
    </div>
  );
};

const ProductReasons = ({ product }: { product: ProductType }) => {
  if (!product.reasons || product.reasons.length === 0) return null;

  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-[#404E55] mb-2">Pourquoi ce produit pour vous :</h4>
      <div className="space-y-1">
        {product.reasons.map((reason, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E61B80]" />
            <span className="text-xs text-[#404E55]/70">{reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductActions = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
      <PharmacyButton 
        size="sm" 
        className="flex-1"
        iconLeft={<ShoppingBag size={14} />}
      >
        Réserver
      </PharmacyButton>
      
      <button 
        className="p-2 rounded-lg border border-gray-200 hover:border-[#E61B80]/40 hover:bg-[#E61B80]/5 transition-colors"
        title="Ajouter aux favoris"
      >
        <Heart size={16} className="text-[#404E55]/70 hover:text-[#E61B80]" />
      </button>
      
      <ProductRating />
    </div>
  );
};

const ProductRating = () => {
  const rating = 4.5; // Note fixe pour l'exemple
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} size={12} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <Star size={12} className="text-yellow-400 fill-current opacity-50" />
        )}
      </div>
      <span className="text-xs text-[#404E55]/60">({rating})</span>
    </div>
  );
};