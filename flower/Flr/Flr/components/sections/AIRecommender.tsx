import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, ArrowRight, Star } from 'lucide-react';

export const AIRecommender: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [recommendation, setRecommendation] = useState<null | { name: string; why: string }>(null);

  const handleRecommend = () => {
    if (!prompt.trim()) return;
    setIsThinking(true);
    setTimeout(() => {
      setRecommendation({
        name: 'The Midnight Velvet Arrangement',
        why: 'Based on your request for something sophisticated yet romantic, the deep purple calla lilies paired with silver-toned eucalyptus will perfectly capture that mood.'
      });
      setIsThinking(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                <Brain size={14} /> AI Personal Florist
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white italic leading-tight">
                Not sure what to pick? <br />
                <span className="text-primary">Let AI guide you.</span>
              </h2>
              <p className="text-stone-400 text-lg font-light leading-relaxed">
                Describe the person, the vibe, or the memory you want to create, and our neural engine will suggest the perfect bouquet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. Someone who loves poetry and coffee..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button 
                  onClick={handleRecommend}
                  disabled={isThinking || !prompt.trim()}
                  className="absolute right-3 top-3 bottom-3 bg-primary text-white px-6 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isThinking ? <Sparkles size={20} className="animate-spin" /> : <ArrowRight size={20} />}
                </button>
              </div>

              <AnimatePresence>
                {recommendation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-4"
                  >
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Star size={16} fill="currentColor" />
                      <span className="text-xs font-bold uppercase tracking-widest">Our Suggestion</span>
                    </div>
                    <h4 className="text-xl font-serif text-white mb-2">{recommendation.name}</h4>
                    <p className="text-sm text-stone-400 italic leading-relaxed">"{recommendation.why}"</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
