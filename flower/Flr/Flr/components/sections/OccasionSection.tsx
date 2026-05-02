import React from 'react';
import { motion } from 'motion/react';
import { Gift, Heart, PartyPopper, Home, Sparkles } from 'lucide-react';

const OCCASIONS = [
  { id: 'birthday', name: 'Birthdays', icon: Gift, color: 'bg-pink-100', text: 'text-pink-600', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80' },
  { id: 'anniversary', name: 'Anniversary', icon: Heart, color: 'bg-rose-100', text: 'text-rose-600', image: 'https://images.unsplash.com/photo-1591902000282-359f4931f743?w=800&q=80' },
  { id: 'wedding', name: 'Wedding', icon: PartyPopper, color: 'bg-stone-100', text: 'text-stone-600', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
  { id: 'just-because', name: 'Just Because', icon: Sparkles, color: 'bg-blue-100', text: 'text-blue-600', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80' },
  { id: 'new-home', name: 'New Home', icon: Home, color: 'bg-amber-100', text: 'text-amber-600', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80' },
];

export const OccasionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {OCCASIONS.map((occasion, idx) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6">
                <img 
                  src={occasion.image} 
                  alt={occasion.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors" />
                <div className={`absolute top-6 right-6 w-12 h-12 ${occasion.color} ${occasion.text} rounded-full flex items-center justify-center backdrop-blur-md`}>
                  <occasion.icon size={20} />
                </div>
              </div>
              <h3 className="text-xl font-serif italic text-stone-900 text-center group-hover:text-primary transition-colors">
                {occasion.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
