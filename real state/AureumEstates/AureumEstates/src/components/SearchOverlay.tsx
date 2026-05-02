import { motion, AnimatePresence } from "motion/react";
import { Search, X, TrendingUp, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const recentSearches = [
    "Palm Jumeirah Villas",
    "Downtown Penthouse",
    "Business Bay Apartments",
    "Damac Lagoons"
  ];

  const suggestedAreas = [
    { name: "Dubai Marina", count: 42 },
    { name: "Jumeirah Village Circle", count: 18 },
    { name: "Dubai Hills Estate", count: 25 },
    { name: "Meydan", count: 12 }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-3xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 md:px-10 py-8 border-b border-charcoal/5">
            <div className="flex items-center gap-4 text-gold">
               <div className="w-9 h-9 border border-gold/40 flex items-center justify-center rounded-sm">
                  <span className="font-bold text-xl uppercase tracking-tighter">A</span>
               </div>
               <span className="text-sm font-light tracking-[0.25em] uppercase text-charcoal">
                  SEARCH <span className="font-bold">AUREUM</span>
               </span>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-charcoal/5 rounded-full transition-colors text-charcoal"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="max-w-4xl mx-auto w-full px-6 pt-20 pb-10">
            <div className="relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform" size={32} strokeWidth={1} />
              <input
                autoFocus
                type="text"
                placeholder="Search by area, building, or style..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-charcoal/10 focus:border-gold outline-none px-12 py-6 text-2xl md:text-4xl font-serif italic text-charcoal placeholder:text-charcoal/20 transition-all"
              />
              {query && (
                <button 
                  onClick={() => setQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-gold text-charcoal/40"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Suggestions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
              {/* Recent Searches */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-gold">
                  <Clock size={16} />
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Recent Searches</span>
                </div>
                <div className="space-y-4">
                  {recentSearches.map((item) => (
                    <button 
                      key={item}
                      className="flex items-center gap-4 text-charcoal/60 hover:text-gold transition-colors w-full group"
                    >
                      <span className="text-lg font-light">{item}</span>
                      <div className="h-[1px] flex-grow bg-charcoal/5 group-hover:bg-gold/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Destinations */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-gold">
                  <TrendingUp size={16} />
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Top Destinations</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {suggestedAreas.map((area) => (
                    <Link 
                      to="/buy" 
                      key={area.name}
                      onClick={onClose}
                      className="flex items-center justify-between p-5 bg-charcoal/[0.02] border border-charcoal/5 rounded-2xl hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                          <MapPin size={18} strokeWidth={1.5} />
                        </div>
                        <span className="text-charcoal font-medium">{area.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gold/60">{area.count} Listings</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Promo */}
          <div className="mt-auto py-10 px-6 border-t border-charcoal/5 bg-charcoal/[0.02]">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-charcoal/60 text-sm font-light">Can't find what you're looking for? Let our experts assist you.</p>
              <Link 
                to="/contact" 
                onClick={onClose}
                className="px-8 py-4 bg-charcoal text-white rounded-xl text-[10px] uppercase font-bold tracking-widest hover:bg-gold transition-colors"
              >
                Request Concierge Search
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
