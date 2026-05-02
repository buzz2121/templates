import React from 'react';
import { motion } from 'motion/react';
import { PenLine, Sparkles, Send } from 'lucide-react';

export const CustomMessage: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative z-10 bg-stone-50 rounded-[3rem] p-12 border border-stone-100 shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <PenLine size={32} />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Crafted Sentiment</p>
                      <p className="text-sm font-serif italic text-stone-900">Petals & Prose</p>
                   </div>
                </div>
                <div className="space-y-4 font-serif text-2xl text-stone-800 italic leading-relaxed mb-12">
                   <p>"May these flowers bloom as brightly as the memories we've shared, and may their fragrance linger like a beautiful song in your heart."</p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-stone-200">
                   <div className="w-10 h-10 rounded-full bg-stone-200" />
                   <div>
                      <p className="text-xs font-bold text-stone-900 uppercase">Hand-written Calligraphy</p>
                      <p className="text-[10px] text-stone-400">Premium Ivory Cardstock</p>
                   </div>
                </div>
             </div>
             {/* Decorative */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl -z-0 opacity-50" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={14} /> The Final Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 italic leading-tight">
              Words as <br />
              Beautiful as <span className="text-primary">Blooms.</span>
            </h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              Every arrangement tells a story. Complete yours with our artisanal card service. Whether you write it yourself or use our AI scribe for inspiration, we'll hand-write your message on premium cardstock for that extra touch of elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="px-10 py-5 bg-stone-900 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3">
                 Explore Gift Cards <Send size={18} />
               </button>
               <button className="px-10 py-5 bg-white text-stone-900 border border-stone-200 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-3">
                 View Script Styles
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
