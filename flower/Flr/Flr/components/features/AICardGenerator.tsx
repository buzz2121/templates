import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Check, Feather, Quote } from 'lucide-react';

interface AICardGeneratorProps {
  onSuggest: (text: string) => void;
}

const POETRY_TEMPLATES = [
  "Like these blooms, may your day be filled with unexpected beauty and the gentle fragrance of joy. Every petal holds a wish for your happiness.",
  "Nature speaks the language of the heart when words fail. May these flowers remind you of the vibrant life and love that surrounds you always.",
  "Handpicked with care, arranged with love. Just as each flower is unique, so is the special place you hold in our lives. Bloom on.",
  "A symphony of colors for a soul that shines just as bright. May this bouquet bring the serenity of a spring morning to your home.",
  "Through seasons of change, may you find strength in your roots and beauty in your blooming. These flowers are a celebration of you."
];

export const AICardGenerator: React.FC<AICardGeneratorProps> = ({ onSuggest }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const randomPoem = POETRY_TEMPLATES[Math.floor(Math.random() * POETRY_TEMPLATES.length)];
      setGeneratedText(randomPoem);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-[3rem] p-10 shadow-premium border border-stone-100 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <Feather size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-serif italic text-stone-900">AI Scribe</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Emotional Intelligence Engine</p>
        </div>
      </div>

      <div className="space-y-6 flex-grow">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What's the occasion? (e.g. 'My sister's graduation', 'Apology for being late')"
            className="w-full bg-stone-50 border-none rounded-3xl p-6 text-stone-900 placeholder:text-stone-300 focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] resize-none"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="absolute bottom-4 right-4 bg-stone-900 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
          >
            {isGenerating ? <RefreshCw size={16} className="animate-spin" /> : <Sparkles size={16} />}
            <span className="text-xs font-bold uppercase tracking-widest">Compose</span>
          </button>
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center border-2 border-dashed border-stone-100 rounded-3xl p-8 bg-stone-50/30 overflow-hidden">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center gap-1">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  ))}
                </div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Generating Sentiment...</p>
              </motion.div>
            ) : generatedText ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 text-center"
              >
                <div className="text-primary/20 absolute top-4 left-4">
                  <Quote size={40} />
                </div>
                <p className="text-lg font-serif italic text-stone-700 leading-relaxed px-4">
                  "{generatedText}"
                </p>
                <button
                  onClick={() => onSuggest(generatedText)}
                  className="bg-emerald-50 text-emerald-700 px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-emerald-100 transition-all font-bold text-xs uppercase tracking-widest"
                >
                  <Check size={16} /> Use this message
                </button>
              </motion.div>
            ) : (
              <div className="text-center space-y-2 opacity-30">
                <Feather size={32} className="mx-auto mb-4" />
                <p className="text-sm italic">Tell our AI scribe the occasion to begin...</p>
              </div>
            )}
          </AnimatePresence>
          
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </div>
      </div>

      <div className="mt-8 p-4 bg-stone-900 rounded-2xl flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Sparkles size={14} />
        </div>
        <p className="text-[10px] text-stone-400 leading-tight">
          Our AI uses emotional linguistic patterns to craft messages that resonate. <br />
          <span className="text-white font-bold italic">Private, secure, and unique.</span>
        </p>
      </div>
    </div>
  );
};
