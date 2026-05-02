import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Julianne M.',
    role: 'Bride',
    content: 'The custom bouquet for my wedding was more than just flowers; it was a work of art. The AI card scribe even helped me find the words for my vows.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Art Director',
    content: 'Petals & Prose brings a level of sophistication I havenâ€™t seen elsewhere. Their minimalist arrangements are perfect for our studio space.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sarah Drumm',
    role: 'Gift Giver',
    content: 'Every time I send a Petals & Prose arrangement, the recipient is blown away. The packaging alone is a luxury experience.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="text-primary text-[10px] font-bold uppercase tracking-[0.5em]">Kind Words</div>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 italic">Voices of <span className="text-primary">Elegance.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-8 right-8 text-stone-50" size={48} />
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-primary" fill="currentColor" />)}
              </div>
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4">
                 <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                 <div>
                    <p className="text-xs font-bold text-stone-900 uppercase">{t.name}</p>
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
