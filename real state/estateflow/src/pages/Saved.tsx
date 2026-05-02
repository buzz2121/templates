import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/properties/PropertyCard';
import propertiesData from '@/data/properties.json';

export default function Saved() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = JSON.parse(localStorage.getItem('savedProperties') || '[]');
      setSavedIds(saved);
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const savedProperties = propertiesData.filter(p => savedIds.includes(p.id));

  return (
    <div className="pt-32 pb-24 text-white min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Private Selection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif italic"
          >
            The <span className="gold-text">Vault</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-gold-500/30"
          />
        </div>

        {savedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {savedProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-32 text-center space-y-8 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-xl">
            <Heart size={64} className="mx-auto text-white/10" />
            <div className="space-y-4">
              <h2 className="text-3xl font-serif italic text-white/60">Your vault is empty</h2>
              <p className="text-white/30 font-light max-w-xs mx-auto">Save exceptional estates to your private selection for detailed review and comparative analysis.</p>
            </div>
            <Link to="/listings" className="inline-block">
              <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-10 h-14 rounded-2xl group">
                Browse Collection <Search size={16} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
