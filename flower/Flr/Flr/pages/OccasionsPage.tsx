import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const OCCASIONS = [
  { id: 'anniversary', name: 'Anniversary', image: 'https://images.unsplash.com/photo-1591902000282-359f4931f743?w=1000&q=80', count: 42 },
  { id: 'birthday', name: 'Birthday', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000&q=80', count: 35 },
  { id: 'wedding', name: 'Wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80', count: 28 },
  { id: 'sympathy', name: 'Sympathy', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1000&q=80', count: 15 },
  { id: 'get-well', name: 'Get Well', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1000&q=80', count: 22 },
  { id: 'just-because', name: 'Just Because', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1000&q=80', count: 18 },
];

export const OccasionsPage: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-2xl">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Curated Collections</p>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-tight mb-8 italic">Shop by Occasion</h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            From grand celebrations to quiet moments of reflection, find the perfect floral expression for every chapter of life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OCCASIONS.map((occasion, idx) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 bg-stone-100">
                <img 
                  src={occasion.image} 
                  alt={occasion.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors" />
                <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-900 hover:bg-primary hover:text-white transition-all">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-2">{occasion.count} Collections</p>
                  <h3 className="text-3xl font-serif italic text-white">{occasion.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
