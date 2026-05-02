
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, Sparkles } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[3rem] z-[210] overflow-hidden shadow-2xl"
          >
            <div className="relative h-48 bg-pink-500 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588615419951-64d50907a977?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60" 
                alt="Exit intent"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent" />
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-yellow-300" />
                  <span className="text-white font-bold uppercase tracking-widest text-xs">Wait, don't go!</span>
                </div>
                <h3 className="text-3xl font-serif text-white font-bold">15% Off Your First Bloom</h3>
              </div>
            </div>
            
            <div className="p-10 text-center">
              <p className="text-neutral-500 mb-8 leading-relaxed">
                Join our bloom circle today and receive an exclusive discount on your 
                first luxury arrangement. Beauty shouldn't wait.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                />
                <button className="bg-neutral-900 text-white px-8 rounded-2xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-all group">
                  Claim <Sparkles className="w-4 h-4 group-hover:rotate-12" />
                </button>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="mt-6 text-neutral-400 text-xs uppercase tracking-widest font-medium hover:text-neutral-600"
              >
                No thanks, I prefer generic flowers
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
