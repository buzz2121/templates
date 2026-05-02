import { useState, useEffect } from 'react';
import properties from '@/data/properties.json';
import PropertyCard from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Search, Bookmark, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function SavedProperties() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedProperties, setSavedProperties] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedProperties') || '[]');
    setSavedIds(saved);
    setSavedProperties(properties.filter(p => saved.includes(p.id)));

    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem('savedProperties') || '[]');
      setSavedIds(updated);
      setSavedProperties(properties.filter(p => updated.includes(p.id)));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="bg-[#080806] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
           <div className="space-y-4">
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.4em]">Personal Collection</span>
              <h1 className="text-6xl md:text-8xl font-serif">Curated <span className="italic font-normal text-white/40">Vault</span></h1>
           </div>
           {savedProperties.length > 0 && (
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500/60 uppercase">{savedProperties.length} Estates Secured</p>
           )}
        </div>

        {savedProperties.length === 0 ? (
          <div className="text-center py-40 glass-gold p-12 rounded-3xl">
            <Heart size={64} className="mx-auto mb-8 text-gold-500/20" />
            <h2 className="text-4xl font-serif italic mb-6">Your Private Vault is Empty</h2>
            <p className="text-white/40 max-w-md mx-auto mb-12">Curate your legacy by saving the most exceptional estates from our global portfolio.</p>
            <Button 
              render={<Link to="/listings" />}
              nativeButton={false}
              className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-12 h-14 rounded-xl"
            >
              Enter Catalog
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {savedProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
        {/* Newsletter / CTA for Saved */}
        {savedProperties.length > 0 && (
           <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-16 bg-white/5 border border-white/10 text-center relative overflow-hidden rounded-3xl"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gold-500" />
              <Diamond size={40} className="mx-auto mb-10 text-gold-500/30" />
              <h3 className="text-4xl font-serif mb-6 italic">Secure Your Selection</h3>
              <p className="text-white/40 max-w-xl mx-auto mb-12 uppercase tracking-widest text-[10px] font-bold">Request a private viewing dossier for your curated vault collection.</p>
              <Button className="bg-white text-black h-16 px-16 font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-gold-500 transition-all">Request Dossier</Button>
           </motion.div>
        )}
      </div>
    </div>
  );
}
