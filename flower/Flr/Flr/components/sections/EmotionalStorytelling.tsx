import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const EmotionalStorytelling: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary text-[10px] font-bold uppercase tracking-[0.5em]"
              >
                Our Philosophy
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1] italic"
              >
                A Bouquet is <br />
                just a <span className="text-primary italic">Vessel for a Memory.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative p-10 bg-stone-50 rounded-[3rem] border border-stone-100"
            >
              <Quote className="absolute top-8 right-8 text-stone-200" size={64} />
              <p className="text-2xl font-serif text-stone-800 leading-relaxed italic pr-12">
                "We don't just sell flowers. We curate the atmosphere for your most intimate moments. Whether it's the thrill of a new love or the quiet respect of a final goodbye, we ensure the botanical narrative is perfect."
              </p>
              <div className="mt-8 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-stone-900 uppercase">Elena V. Rossi</p>
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Master Florist & Founder</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80" 
                alt="Florist at work" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 bg-stone-900 text-white p-10 rounded-[2.5rem] shadow-2xl max-w-[280px]">
               <p className="text-4xl font-serif italic mb-2">100%</p>
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Sustainable & Hand-picked from Local Artisans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
