import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1550983092-24732c4d9243?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1548079596-39bcce88a61a?auto=format&fit=crop&w=600&q=80',
];

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em]">Social Feed</p>
            <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-tight">#PetalsAndProse</h2>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all group">
            <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
            Follow Our Journey
          </button>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 -mx-4 px-4 md:mx-0 md:px-0">
            {IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[80vw] md:w-[380px] aspect-square rounded-[3rem] overflow-hidden relative group snap-center"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <Instagram className="text-white" size={40} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
