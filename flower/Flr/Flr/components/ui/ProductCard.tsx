import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Plus, Sparkles, Zap, Info } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickBuy?: (product: Product) => void;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickBuy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      viewport={{ once: true }}
      className="group bg-white p-5 rounded-[3rem] border border-stone-100 transition-all duration-500 hover:shadow-premium hover:-translate-y-3 relative overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-stone-50 mb-8 group/image">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
          <button 
            onClick={() => onQuickBuy?.(product)}
            className="px-6 py-3 bg-white text-stone-900 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 hover:bg-primary hover:text-white"
          >
            <Info size={14} /> Quick View
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none" />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-col gap-2 z-20">
          {product.isFeatured && (
            <div className="px-3.5 py-2 bg-primary/95 text-white rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_8px_16px_-4px_rgba(var(--primary-rgb),0.3)] flex items-center gap-2 border border-white/20">
              <Sparkles size={10} fill="currentColor" />
              Signature Choice
            </div>
          )}
          {product.tags?.map((tag) => (
            <div 
              key={tag}
              className={`px-3.5 py-2 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-xl flex items-center gap-2 ${
                tag.includes('Left') || tag.includes('Only') 
                  ? 'bg-red-600/90 text-white' 
                  : tag === 'Best Seller'
                  ? 'bg-stone-900/90 text-white border border-white/10'
                  : 'bg-white/90 text-stone-900 border border-stone-100/50'
              }`}
            >
              <Sparkles size={10} className={tag === 'Best Seller' ? 'text-primary' : ''} />
              {tag}
            </div>
          ))}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-5 right-5 p-3 bg-white/80 backdrop-blur-xl rounded-full text-stone-400 hover:text-red-500 transition-all hover:scale-110 shadow-sm border border-white/20 z-20">
          <Heart size={16} />
        </button>

        {/* Hover Actions */}
        <div className="absolute inset-x-5 bottom-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-white/95 backdrop-blur-xl text-stone-900 py-4 rounded-2xl text-[10px] uppercase tracking-widest font-bold shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} /> Add to Bag
          </button>
        </div>
      </div>

      <div className="px-2">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-serif text-stone-900 group-hover:text-primary transition-colors italic">
              {product.name}
            </h3>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">{product.category}</p>
          </div>
          <span className="text-2xl font-serif text-stone-900 italic">
            ${product.price}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 text-[10px] text-primary/70 font-medium italic mb-2 tracking-wide">
          <Sparkles size={10} className="animate-pulse" />
          {product.category === 'Roses' ? 'Petals of devotion, delivered.' : 
           product.category === 'Orchids' ? 'Exotic beauty for the extraordinary.' :
           'Hand-picked for your special moment'}
        </div>

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-stone-100/50">
          <button 
            onClick={() => onQuickBuy?.(product)}
            className="flex-1 py-4 px-6 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:from-primary hover:to-[#ff9aa2] transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-stone-900/20 active:scale-95"
          >
            <Zap size={14} className="text-primary group-hover:text-white" fill="currentColor" /> Quick Buy
          </button>
          <button 
            onClick={() => onAddToCart(product)}
            className="p-4 bg-stone-50 text-stone-400 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all border border-stone-100 group/btn"
          >
            <Plus size={20} className="group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>

        {product.stock && product.stock <= 5 && (
          <div className="mt-4 flex items-center gap-2 text-[9px] text-red-500 font-bold uppercase tracking-[0.1em]">
            <div className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
            Vanish alert: only {product.stock} arrangements remaining
          </div>
        )}
      </div>
    </motion.div>
  );
};
