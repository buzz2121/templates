import { useState } from "react";
import { PROPERTIES, Property } from "@/src/data";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, Info, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Compare() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedProperties = selectedIds.map(id => PROPERTIES.find(p => p.id === id)!);

  return (
    <div className="pt-28 pb-40 bg-background min-h-screen">
      <section className="bg-white py-32 px-6 md:px-12 border-b border-border/50 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[12rem] font-display font-medium leading-none tracking-tighter italic">MATRIX</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-6 mb-8"
            >
                <div className="w-16 h-[1px] bg-primary/30" />
                <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">Technical Validation</span>
                <div className="w-16 h-[1px] bg-primary/30" />
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-foreground uppercase mb-10 leading-none">
              INVESTMENT <span className="italic text-primary ml-[-0.05em]">ANALYSIS</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-xl tracking-wide leading-relaxed italic">
                Deciphering value through side-by-side metric verification and architectural comparison.
            </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
          {/* Property Picker */}
          <div className="mb-24">
              <div className="flex justify-between items-center mb-12 border-b border-border/50 pb-8">
                  <div className="flex items-center gap-4">
                    <Activity size={20} className="text-primary" />
                    <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground italic">Asset Selection ({selectedIds.length}/3)</h3>
                  </div>
                  {selectedIds.length > 0 && (
                    <Button 
                        onClick={() => setSelectedIds([])} 
                        variant="link" 
                        className="text-primary uppercase text-[10px] tracking-[0.4em] font-bold hover:text-foreground transition-luxury p-0"
                    >
                        Clear Matrix
                    </Button>
                  )}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {PROPERTIES.map(p => (
                      <motion.div
                        key={p.id}
                        whileHover={{ y: -8 }}
                        onClick={() => toggleSelection(p.id)}
                        className={`cursor-pointer overflow-hidden relative border transition-luxury aspect-[3/4] group shadow-2xl ${selectedIds.includes(p.id) ? "border-primary" : "border-border/50 opacity-50 hover:opacity-100"}`}
                      >
                          <img src={p.image} className="w-full h-full object-cover grayscale transition-luxury group-hover:scale-110" alt={p.title} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                             <div className="space-y-1">
                               <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 line-clamp-1">{p.title}</p>
                               <p className="text-primary font-display text-sm italic">${(p.price/1000000).toFixed(1)}M</p>
                             </div>
                          </div>
                          {selectedIds.includes(p.id) && (
                            <div className="absolute top-0 right-0 bg-primary text-white p-3 shadow-xl">
                              <Check size={16} strokeWidth={3} />
                            </div>
                          )}
                      </motion.div>
                  ))}
              </div>
          </div>

          <AnimatePresence mode="wait">
              {selectedIds.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="py-48 bg-white flex flex-col items-center text-center justify-center border border-dashed border-border/50 relative overflow-hidden"
                  >
                      <Shield size={64} className="text-primary/40 mb-10" />
                      <p className="text-muted-foreground/60 uppercase tracking-[0.6em] font-bold text-[10px]">Initiate Discovery Protocol Above</p>
                  </motion.div>
              ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    className="overflow-x-auto no-scrollbar scroll-smooth"
                  >
                      <table className="w-full border-collapse border-spacing-0">
                          <thead>
                              <tr className="border-b border-border/50">
                                  <th className="p-10 text-left text-[10px] uppercase tracking-[0.5em] text-primary font-bold bg-secondary/30 w-1/4 backdrop-blur-md">Metric</th>
                                  {selectedProperties.map(p => (
                                      <th key={p.id} className="p-10 text-center bg-white min-w-[320px] relative group border-l border-border/50">
                                          <button 
                                              onClick={() => toggleSelection(p.id)} 
                                              className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center bg-white border border-border text-muted-foreground hover:text-red-500 hover:border-red-500/50 transition-luxury z-10"
                                          >
                                              <X size={20} />
                                          </button>
                                          <div className="aspect-[16/10] overflow-hidden mb-8 border border-border/50">
                                            <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-luxury duration-700" />
                                          </div>
                                          <h4 className="text-xl font-display uppercase italic text-foreground mb-4 tracking-wider">{p.title}</h4>
                                          <div className="text-primary font-display text-2xl tracking-tighter shadow-none">${p.price.toLocaleString()}</div>
                                      </th>
                                  ))}
                              </tr>
                          </thead>
                          <tbody className="text-center">
                              {[
                                  { label: "Asset Category", key: "type" },
                                  { label: "Strategic Precinct", key: "city" },
                                  { label: "Acquisition Value", key: "price", formatter: (v: any) => `$${v.toLocaleString()}` },
                                  { label: "Internal Volume", key: "area", formatter: (v: any) => `${v.toLocaleString()} sqft` },
                                  { label: "Sanctuaries (Beds)", key: "beds" },
                                  { label: "Spas (Baths)", key: "baths" },
                                  { label: "Design Status", key: "furnished", formatter: (v: any) => v ? "Architecturally Furnished" : "Pristine Shell" },
                              ].map(row => (
                                  <tr key={row.label} className="border-b border-border/50 group hover:bg-secondary/20 transition-luxury">
                                      <td className="p-10 text-left text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground italic">{row.label}</td>
                                      {selectedProperties.map(p => (
                                          <td key={p.id} className="p-10 text-foreground font-medium text-lg tracking-wide border-l border-border/50">
                                              {row.formatter ? row.formatter(p[row.key as keyof Property]) : p[row.key as keyof Property]}
                                          </td>
                                      ))}
                                  </tr>
                              ))}
                              <tr>
                                  <td className="p-10"></td>
                                  {selectedProperties.map(p => (
                                      <td key={p.id} className="p-10 border-l border-border/50">
                                          <Button asChild className="w-full h-16 gold-gradient text-white font-bold uppercase text-[10px] tracking-[0.4em] rounded-none hover:scale-105 transition-luxury shadow-xl border-none">
                                              <Link to={`/properties/${p.id}`} className="flex items-center justify-center gap-4">
                                                  Access Dossier <ArrowRight size={16}/>
                                              </Link>
                                          </Button>
                                      </td>
                                  ))}
                              </tr>
                          </tbody>
                      </table>
                  </motion.div>
              )}
          </AnimatePresence>
      </section>
    </div>
  );
}
