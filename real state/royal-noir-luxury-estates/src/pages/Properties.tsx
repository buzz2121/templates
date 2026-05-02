import { useState, useMemo } from "react";
import { PROPERTIES } from "@/src/data";
import { PropertyCard } from "@/src/components/shared/PropertyCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = selectedCity === "all" || p.city === selectedCity;
      return matchesSearch && matchesCity;
    });
  }, [searchQuery, selectedCity]);

  const cities = ["all", ...new Set(PROPERTIES.map(p => p.city))];

  return (
    <div className="pt-28 pb-40 bg-background min-h-screen">
      {/* Header */}
      <section className="bg-white py-32 px-6 md:px-12 border-b border-border/50 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[18rem] font-display font-medium leading-none tracking-tighter italic">COLLECTION</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-6 mb-10"
            >
                <div className="w-16 h-[1px] bg-primary/30" />
                <span className="text-primary uppercase tracking-[0.4em] font-medium text-[10px]">Registry Portfolio</span>
                <div className="w-16 h-[1px] bg-primary/30" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-display font-light text-foreground uppercase mb-10 leading-none tracking-[0.02em]">
              Curated <span className="italic text-primary">Inventory</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-xl italic tracking-wide leading-relaxed">
                A globally recognized collective of professionals serving the world’s most significant residential histories.
            </p>
        </div>
      </section>

      {/* Filters Container */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <div className="bg-white p-8 border border-border/50 flex flex-col lg:flex-row items-center gap-10 shadow-sm relative z-20">
              <div className="flex-1 w-full relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                  <Input 
                    placeholder="Search by Estate Name or Location..." 
                    className="w-full bg-secondary/50 border-none h-16 pl-16 rounded-none focus:ring-1 focus:ring-primary/20 italic font-light text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </div>

              <div className="flex items-center gap-8 w-full lg:w-auto relative">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-muted-foreground whitespace-nowrap">
                    <MapPin size={14} className="text-primary" /> Region
                </div>
                
                <div className="relative w-full lg:w-auto">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full lg:w-[240px] bg-secondary/50 border-none h-16 px-6 rounded-none font-display italic text-lg text-left flex justify-between items-center transition-luxury hover:bg-secondary"
                  >
                    <span className="capitalize">{selectedCity === "all" ? "All Territories" : selectedCity}</span>
                    <ChevronDown className={`transition-transform duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} size={20} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-full bg-white border border-border shadow-2xl z-50 mt-1"
                      >
                        {cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => {
                              setSelectedCity(city);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full text-left p-4 hover:bg-secondary text-[10px] uppercase tracking-widest font-bold transition-luxury border-b border-border/30 last:border-none"
                          >
                            {city === "all" ? "All Territories" : city}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4 text-muted-foreground hover:text-primary transition-luxury cursor-pointer">
                  <SlidersHorizontal size={20} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Advanced Protocol</span>
              </div>
          </div>

          <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground italic">
              <span>Displaying {filteredProperties.length} Significant Assets</span>
              <div className="flex gap-4">
                  <span className="text-primary">Grid View</span>
                  <span className="opacity-40 select-none">List View</span>
              </div>
          </div>
      </section>

      {/* Results Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
              {filteredProperties.length > 0 ? (
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                  >
                      {filteredProperties.map((p, idx) => (
                          <PropertyCard key={p.id} property={p} index={idx} />
                      ))}
                  </motion.div>
              ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-60 text-center space-y-8 bg-white border border-dashed border-border/50"
                  >
                      <Search size={64} className="mx-auto text-primary/20" />
                      <div className="space-y-4">
                        <p className="text-foreground font-display text-4xl italic">No matching artifacts found.</p>
                        <p className="text-muted-foreground font-light text-xl italic font-display tracking-widest uppercase">Registry Search Error</p>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </section>
    </div>
  );
}
