import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { CustomBouquet, BouquetComponent } from '../../types';

interface BouquetBuilderProps {
  onComplete: (bouquet: CustomBouquet) => void;
}

const FLOWERS: BouquetComponent[] = [
  { id: 'f1', name: 'Premium Red Rose', price: 12, color: '#be123c', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80' },
  { id: 'f2', name: 'White Lily', price: 15, color: '#f8fafc', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80' },
  { id: 'f3', name: 'Blue Hydrangea', price: 18, color: '#3b82f6', image: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?w=400&q=80' },
  { id: 'f4', name: 'Eucalyptus Branch', price: 8, color: '#4d7c0f', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&q=80' },
  { id: 'f5', name: 'Golden Sunflower', price: 10, color: '#f59e0b', image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400&q=80' },
  { id: 'f6', name: 'Purple Lavender', price: 9, color: '#a855f7', image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&q=80' },
];

const ARRANGEMENTS = [
  { id: 'classic', name: 'The Classic', price: 15, description: 'Traditional round arrangement with premium wrapping.' },
  { id: 'modern', name: 'The Modernist', price: 25, description: 'Architectural, asymmetric design in a signature vase.' },
  { id: 'minimalist', name: 'The Minimalist', price: 10, description: 'Clean lines, focusing on a single species focal point.' },
];

export const BouquetBuilder: React.FC<BouquetBuilderProps> = ({ onComplete }) => {
  const [selectedFlowers, setSelectedFlowers] = useState<{ [key: string]: number }>({});
  const [arrangement, setArrangement] = useState(ARRANGEMENTS[0]);

  const updateQuantity = (id: string, delta: number) => {
    setSelectedFlowers(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalPrice = Object.entries(selectedFlowers).reduce((sum, [id, qty]) => {
    const flower = FLOWERS.find(f => f.id === id);
    return sum + (flower?.price || 0) * qty;
  }, arrangement.price);

  const hasFlowers = Object.values(selectedFlowers).some(q => q > 0);

  const handleNext = () => {
    const bouquet: CustomBouquet = {
      id: Math.random().toString(36).substr(2, 9),
      flowers: Object.entries(selectedFlowers)
        .filter(([_, qty]) => qty > 0)
        .map(([id, qty]) => ({
          ...FLOWERS.find(f => f.id === id)!,
          quantity: qty
        })),
      arrangement: arrangement as any,
      totalPrice,
      status: 'draft'
    };
    onComplete(bouquet);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-12">
        <section>
          <h3 className="text-2xl font-serif italic mb-8">1. Select Your Stems</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FLOWERS.map((flower) => (
              <motion.div
                key={flower.id}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-[2.5rem] border transition-all ${
                  selectedFlowers[flower.id] ? 'bg-primary/5 border-primary shadow-xl shadow-primary/5' : 'bg-white border-stone-100 hover:border-stone-200'
                }`}
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-stone-50">
                  <img src={flower.image} alt={flower.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400">${flower.price} / stem</p>
                  <p className="font-serif italic text-lg leading-none">{flower.name}</p>
                </div>
                <div className="flex items-center justify-between bg-stone-50 p-2 rounded-2xl">
                  <button 
                    onClick={() => updateQuantity(flower.id, -1)}
                    className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold text-lg">{selectedFlowers[flower.id] || 0}</span>
                  <button 
                    onClick={() => updateQuantity(flower.id, 1)}
                    className="w-10 h-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-serif italic mb-8">2. Choose Your Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARRANGEMENTS.map((style) => (
              <button
                key={style.id}
                onClick={() => setArrangement(style)}
                className={`p-8 rounded-[2.5rem] border text-left transition-all relative overflow-hidden ${
                  arrangement.id === style.id ? 'bg-stone-900 border-stone-900 shadow-2xl' : 'bg-white border-stone-100 hover:border-stone-200'
                }`}
              >
                <div className="relative z-10 space-y-4">
                  <p className={`text-xs font-bold uppercase tracking-widest ${arrangement.id === style.id ? 'text-primary' : 'text-stone-400'}`}>
                    ${style.price}
                  </p>
                  <h4 className={`text-xl font-serif italic ${arrangement.id === style.id ? 'text-white' : 'text-stone-900'}`}>
                    {style.name}
                  </h4>
                  <p className={`text-xs leading-relaxed ${arrangement.id === style.id ? 'text-stone-400' : 'text-stone-500'}`}>
                    {style.description}
                  </p>
                </div>
                {arrangement.id === style.id && (
                  <motion.div 
                    layoutId="activeArrangement"
                    className="absolute inset-0 bg-stone-900"
                  />
                )}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-4">
        <div className="sticky top-32 p-10 bg-stone-50 rounded-[3rem] border border-stone-100 space-y-8">
          <div className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={16} /> Your Composition
          </div>
          
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {Object.entries(selectedFlowers).map(([id, qty]) => {
                if (qty === 0) return null;
                const flower = FLOWERS.find(f => f.id === id)!;
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-stone-500">{qty}x {flower.name}</span>
                    <span className="font-bold">${flower.price * qty}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            <div className="flex justify-between items-center text-sm pt-4 border-t border-stone-200">
              <span className="text-stone-500">Style: {arrangement.name}</span>
              <span className="font-bold">${arrangement.price}</span>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200">
            <div className="flex justify-between items-end mb-8">
              <p className="text-sm font-medium text-stone-400 uppercase tracking-widest">Estimated Total</p>
              <p className="text-4xl font-serif italic text-stone-900">${totalPrice}</p>
            </div>

            <button 
              onClick={handleNext}
              disabled={!hasFlowers}
              className={`w-full py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${
                hasFlowers 
                ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              Continue to Message <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
