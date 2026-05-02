import { motion } from "motion/react";
import { PROPERTIES } from "../constants";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

interface FeaturedPropertiesProps {
  showTitle?: boolean;
  showFilters?: boolean;
  limit?: number;
}

export default function FeaturedProperties({ 
  showTitle = true, 
  showFilters = true, 
  limit 
}: FeaturedPropertiesProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const filters = ["All", "Villa", "Penthouse", "Apartment"];
  
  let filteredProperties = activeFilter === "All" 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === activeFilter);

  if (limit) {
    filteredProperties = filteredProperties.slice(0, limit);
  }

  return (
    <section id="buy" className="section-luxury bg-cream relative overflow-hidden">
      {/* Background blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sapphire/[0.06] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {(showTitle || showFilters) && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 section-heading text-center lg:text-left">
            {showTitle && (
              <div className="space-y-7">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold hidden sm:block" />
                  <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">
                    Exclusive Portfolio
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-charcoal">
                  Featured <span className="gold-text italic">Estates</span>
                </h2>
                <p className="text-charcoal/80 font-light max-w-xl text-base md:text-lg leading-[1.9] mx-auto lg:mx-0 tracking-wide">
                  Discover our handpicked selection of premium residences, where architectural innovation meets unparalleled luxury.
                </p>
              </div>
            )}
            
            {showFilters && (
              <div className="flex items-center justify-center lg:justify-start gap-1 glass-blue p-2 rounded-full overflow-x-auto no-scrollbar max-w-full mx-auto lg:mx-0">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full whitespace-nowrap ${
                      activeFilter === f 
                        ? "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-charcoal shadow-[0_0_20px_rgba(201,168,76,0.2)] scale-105" 
                        : "hover:text-gold opacity-50 hover:opacity-100 text-charcoal"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredProperties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
