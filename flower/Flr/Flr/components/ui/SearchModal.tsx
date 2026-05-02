
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import { Product } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [query, setQuery] = useState('');
  
  const results = query 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-pink-950/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-pink-50 flex items-center gap-4">
              <Search className="w-5 h-5 text-pink-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search for flowers, occasions, bouquets..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-pink-950 placeholder:text-pink-200"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-pink-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-pink-400" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((product) => (
                    <div 
                      key={product.id}
                      className="flex items-center gap-4 p-3 hover:bg-pink-50 rounded-2xl transition-colors cursor-pointer group"
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-pink-950">{product.name}</h4>
                        <p className="text-xs text-pink-400 uppercase tracking-widest">{product.category}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-pink-600">${product.price}</span>
                        <ArrowRight className="w-4 h-4 text-pink-300 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <div className="py-12 text-center text-pink-300">
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="py-12 text-center text-pink-200">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em]">Start typing to explore</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
