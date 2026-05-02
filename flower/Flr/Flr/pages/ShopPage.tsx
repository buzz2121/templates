import React from 'react';
import { motion } from 'motion/react';
import { CategorySection } from '../components/sections/CategorySection';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export const ShopPage: React.FC<ShopProps> = ({ onAddToCart }) => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-pink-950 mb-4">The Bloom Shop</h1>
        <p className="text-pink-900/60 max-w-2xl">Browse our entire collection of artisanal bouquets, rare orchids, and luxury floral gifts.</p>
      </div>
      
      <CategorySection />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group glass-card p-4 rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-pink-200/20"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="px-2">
                  <h3 className="text-lg font-bold text-pink-950 mb-1 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-pink-400 uppercase tracking-widest mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pink-600">${product.price}.00</span>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
