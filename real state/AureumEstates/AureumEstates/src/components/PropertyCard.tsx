import { motion } from "motion/react";
import { BedDouble, Bath, Maximize, ArrowUpRight, Rotate3d, MapPin } from "lucide-react";
import { Property } from "../constants";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";

interface PropertyCardProps {
  property: Property;
  index: number;
  key?: string | number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const startTour = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('open-virtual-tour', { detail: property }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.7 }}
      className="group cursor-pointer property-card overflow-hidden rounded-3xl border border-charcoal/5 hover:border-gold/30 transition-all duration-700 bg-white/60 backdrop-blur-sm glow-blue hover:glow-gold"
    >
      {/* Large Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden luxury-image-hover">
        {/* Tags & Status */}
        <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <span className="glass px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal rounded-full">
              {property.tag === 'Luxury' ? '✦ Exclusive' : property.tag === 'New' ? '◆ New Launch' : '● Ready'}
            </span>
            <span className={`px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full border ${
              property.status === 'For Sale' ? 'bg-gold/10 border-gold/30 text-gold-dark' : 'bg-charcoal/10 border-charcoal/30 text-charcoal'
            }`}>
              {property.status}
            </span>
          </div>
          {property.tourImage && (
            <button 
              onClick={startTour}
              className="glass-gold px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-gold-dark flex items-center gap-1.5 hover:bg-gold hover:text-white transition-all duration-300 shadow-xl rounded-full w-fit"
            >
              <Rotate3d size={10} /> 360° Tour
            </button>
          )}
        </div>
        
        {/* High Quality Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full luxury-image transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
        
        {/* Hover Action Overlay Details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-deep-blue/10 backdrop-blur-[1px]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-gold/40 bg-white/80 backdrop-blur-xl flex items-center justify-center text-gold shadow-2xl">
              <ArrowUpRight size={28} strokeWidth={1.5} />
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsDetailsOpen(true); }}
              className="px-8 py-3 bg-charcoal text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-gold transition-colors duration-300"
            >
              View Details
            </button>
          </motion.div>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-5 right-5 z-20 group-hover:translate-y-[-10px] transition-transform duration-500">
          <div className="glass-gold px-5 py-2.5 rounded-xl">
            <span className="gold-text text-lg font-bold tracking-tight">{property.price}</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-7 md:p-8 space-y-5">
        <div className="space-y-2.5">
          <h3 className="text-xl md:text-2xl font-serif font-bold group-hover:text-gold-dark transition-colors duration-500 tracking-tight leading-tight text-charcoal">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-charcoal/70">
            <MapPin size={12} className="text-gold/60" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold">{property.location}</p>
          </div>
        </div>
        
        {/* Specs */}
        <div className="flex items-center gap-6 text-charcoal/70 text-[10px] font-semibold uppercase tracking-[0.15em] pt-4 border-t border-charcoal/5">
          <div className="flex items-center gap-2">
            <BedDouble size={14} className="text-gold" />
            <span>{property.beds} BHK</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={14} className="text-gold" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={14} className="text-gold" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
      
      <PropertyDetails 
        property={property} 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
      />
    </motion.div>
  );
}

