import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, BedDouble, Bath, Square, ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function PropertyCard({ property }: { property: any }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedProperties') || '[]');
    setIsSaved(saved.includes(property.id));
    
    const compared = JSON.parse(localStorage.getItem('compareProperties') || '[]');
    setIsCompared(compared.includes(property.id));
  }, [property.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const saved = JSON.parse(localStorage.getItem('savedProperties') || '[]');
    let newSaved;
    
    if (isSaved) {
      newSaved = saved.filter((id: string) => id !== property.id);
    } else {
      newSaved = [...saved, property.id];
    }
    
    localStorage.setItem('savedProperties', JSON.stringify(newSaved));
    setIsSaved(!isSaved);
    window.dispatchEvent(new Event('storage'));
  };

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const compared = JSON.parse(localStorage.getItem('compareProperties') || '[]');
    let newCompared;
    
    if (isCompared) {
      newCompared = compared.filter((id: string) => id !== property.id);
    } else {
      if (compared.length >= 3) {
        alert('You can only compare up to 3 properties at a time.');
        return;
      }
      newCompared = [...compared, property.id];
    }
    
    localStorage.setItem('compareProperties', JSON.stringify(newCompared));
    setIsCompared(!isCompared);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <motion.div
      whileHover={{ 
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full relative group"
    >
      <Link to={`/listings/${property.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${property.title}`} />
      
      <Card className="overflow-hidden border-none bg-black/40 backdrop-blur-3xl rounded-[2.5rem] h-full relative border border-white/5 shadow-2xl transition-colors group-hover:border-gold-500/20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[2.5rem] bg-zinc-900">
          <img 
            src={property.images?.[0] || property.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
          
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
            <Badge className="bg-gold-500 text-black font-extrabold text-[8px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg border-none">
              Exclusive
            </Badge>
            <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 font-bold text-[8px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              {property.type}
            </Badge>
          </div>

          <div className="absolute top-6 right-6 flex flex-col gap-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSave}
              className={cn(
                "w-12 h-12 rounded-full backdrop-blur-2xl transition-all duration-300 border border-white/10 shadow-2xl cursor-pointer flex items-center justify-center",
                isSaved 
                  ? "bg-gold-500 text-black border-gold-500" 
                  : "bg-black/50 text-white hover:text-gold-500 hover:border-gold-500/50"
              )}
            >
              <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCompare}
              title="Compare Asset"
              className={cn(
                "w-12 h-12 rounded-full backdrop-blur-2xl transition-all duration-300 border border-white/10 shadow-2xl cursor-pointer flex items-center justify-center",
                isCompared 
                  ? "bg-gold-500 text-black border-gold-500" 
                  : "bg-black/50 text-white hover:text-gold-500 hover:border-gold-500/50"
              )}
            >
              <Layers size={18} />
            </Button>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gold-500 font-serif text-3xl font-bold tracking-tight">
                  £{property.price.toLocaleString()}
                </p>
                <h3 className="text-white font-serif text-xl leading-tight mt-1 group-hover:text-gold-100 transition-colors">
                  {property.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-8 space-y-8 relative z-0">
          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] bg-white/[0.02] w-fit px-4 py-2 rounded-full border border-white/5">
            <MapPin size={12} className="text-gold-500" />
            {property.location}
          </div>

          <div className="grid grid-cols-3 gap-1 border-y border-white/5 py-8">
            <div className="text-center group-hover:translate-y-[-2px] transition-transform duration-300">
              <p className="text-gold-500/80 text-[9px] uppercase tracking-widest font-bold mb-2 flex items-center justify-center gap-1.5 font-mono">
                <BedDouble size={14} className="text-gold-500/60" /> Beds
              </p>
              <p className="text-base font-serif italic text-white/90">{property.beds || property.bhk}</p>
            </div>
            <div className="text-center border-x border-white/5 group-hover:translate-y-[-2px] transition-transform duration-300 delay-75">
              <p className="text-gold-500/80 text-[9px] uppercase tracking-widest font-bold mb-2 flex items-center justify-center gap-1.5 font-mono">
                <Bath size={14} className="text-gold-500/60" /> Baths
              </p>
              <p className="text-base font-serif italic text-white/90">{property.baths}</p>
            </div>
            <div className="text-center group-hover:translate-y-[-2px] transition-transform duration-300 delay-150">
              <p className="text-gold-500/80 text-[9px] uppercase tracking-widest font-bold mb-2 flex items-center justify-center gap-1.5 font-mono">
                <Square size={14} className="text-gold-500/60" /> Area
              </p>
              <p className="text-base font-serif italic text-white/90">{property.sqft || property.area} <span className="text-[10px] non-italic font-sans opacity-60">FT²</span></p>
            </div>
          </div>

          <div className="w-full h-16 rounded-2xl border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-black font-extrabold uppercase tracking-[0.3em] text-[10px] group/btn transition-all duration-700 flex items-center justify-center pointer-events-none relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Inspect Asset <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}
