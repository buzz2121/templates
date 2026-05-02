import { motion } from "framer-motion";
import { BedSingle, Bath, Square, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Property } from "@/src/data";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group bg-white border border-border/50 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-luxury"
    >
      <Link to={`/properties/${property.id}`} className="block relative">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-luxury duration-[3s] group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
          
          {/* Top Badges */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
              <Badge className="bg-white/95 backdrop-blur-md text-foreground font-bold uppercase text-[9px] tracking-[0.2em] rounded-none py-1.5 px-3 border border-border/50 shadow-sm">
                {property.status}
              </Badge>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/40 to-transparent">
             <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                <MapPin size={12} strokeWidth={3} /> {property.city}
             </div>
             <h3 className="text-3xl font-display text-foreground leading-tight group-hover:text-primary transition-luxury italic">
                {property.title}
             </h3>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-8 space-y-8 bg-white">
          <div className="grid grid-cols-3 gap-8 py-6 border-y border-border/50">
            <div className="space-y-1">
              <span className="text-muted-foreground text-[9px] uppercase tracking-widest font-bold">Beds</span>
              <div className="flex items-center gap-2 text-foreground">
                <BedSingle size={14} className="text-primary" />
                <span className="text-sm font-medium">{property.beds}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground text-[9px] uppercase tracking-widest font-bold">Baths</span>
              <div className="flex items-center gap-2 text-foreground">
                <Bath size={14} className="text-primary" />
                <span className="text-sm font-medium">{property.baths}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground text-[9px] uppercase tracking-widest font-bold">Area</span>
              <div className="flex items-center gap-2 text-foreground">
                <Square size={14} className="text-primary" />
                <span className="text-sm font-medium">{property.area.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest block mb-1 font-bold">Market Value</span>
              <span className="text-3xl font-display font-medium text-foreground">${property.price.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 text-primary group-hover:translate-x-2 transition-luxury">
                 <span className="text-[10px] uppercase font-bold tracking-widest">Dossier</span>
                 <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
