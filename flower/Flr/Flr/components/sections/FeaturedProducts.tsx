import React from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../ui/ProductCard';
import { Product } from '../../types';
import { Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onQuickBuy?: (product: Product) => void;
}

const MOCK_FEATURED: Product[] = [
  {
    id: 'p1',
    name: 'The Midnight Muse',
    price: 125,
    category: 'Romantic',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    description: 'Deep velvet roses and obsidian-toned accents for the ultimate romantic gesture.',
    rating: 5,
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Eternal Spring',
    price: 95,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    description: 'A vibrant burst of tulips and lilies to bring life to any room.',
    rating: 4.8,
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Minimalist Zen',
    price: 75,
    category: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop',
    description: 'Clean lines and architectural foliage for the modern home.',
    rating: 4.9,
    isFeatured: true
  }
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart, onQuickBuy }) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
              <Sparkles size={14} /> Curated Selection
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 italic">Seasonal <br /> <span className="text-primary italic">Signatures.</span></h2>
          </div>
          <p className="text-stone-500 max-w-sm text-lg font-light">
            Our master florists' pick of the week. Hand-selected for their freshness and unique aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MOCK_FEATURED.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard 
                product={product} 
                onAddToCart={() => onAddToCart(product)} 
                onQuickBuy={onQuickBuy ? () => onQuickBuy(product) : undefined}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
