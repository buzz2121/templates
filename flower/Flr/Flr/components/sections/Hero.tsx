import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Flowers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-[0.4em]"
          >
            <Sparkles size={16} className="text-primary" /> Est. 1994 | Artisanal Blooms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif text-white leading-[1.1] italic"
          >
            Petals & <br />
            <span className="text-primary italic">Prose.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-xl md:text-2xl font-light max-w-2xl leading-relaxed"
          >
            Where botanical artistry meets the art of the written word. We craft bespoke arrangements that speak when words are not enough.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <Link 
              to="/shop" 
              className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group"
            >
              Shop Collection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/studio" 
              className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              The Studio <Sparkles size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hidden md:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto mb-4" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 inline-block">Scroll</span>
      </motion.div>
    </section>
  );
};
