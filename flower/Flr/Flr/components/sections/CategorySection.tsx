import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'romantic', name: 'Romantic', count: 24, image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80' },
  { id: 'ceremonial', name: 'Ceremonial', count: 18, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' },
  { id: 'corporate', name: 'Corporate', count: 12, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
  { id: 'subscriptions', name: 'Weekly Subscriptions', count: 5, image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&w=800&q=80' },
];

export const CategorySection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link to={`/shop?category=${cat.id}`} key={cat.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-stone-200"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-stone-950/80 to-transparent">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">{cat.count} Collections</span>
                  <h3 className="text-2xl font-serif text-white italic">{cat.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
