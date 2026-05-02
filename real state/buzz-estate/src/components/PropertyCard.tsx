import React from 'react';
import { motion } from 'motion/react';
import { Maximize, BedDouble, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Estate } from '../types';

interface PropertyCardProps {
  estate: Estate;
}

export default function PropertyCard({ estate }: PropertyCardProps) {
  return (
    <Link to={`/estates/${estate.id}`}>
      <motion.div
        className="group bg-white border border-black/5 hover:shadow-luxury transition-all duration-700 h-full flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={estate.images[0]}
            alt={estate.name}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
             <div className="bg-brand-gold text-white text-[8px] font-black uppercase tracking-widest px-3 py-1">
                New Launch
             </div>
          </div>
          <div className="absolute bottom-4 right-4 group-hover:scale-110 transition-transform duration-500">
             <div className="w-10 h-10 bg-white shadow-lg flex items-center justify-center text-brand-gold">
               <ArrowUpRight size={18} />
             </div>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold flex items-center gap-2">
              <MapPin size={10} /> {estate.city} • {estate.type}
            </span>
            <h3 className="text-2xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors duration-500 line-clamp-1">{estate.name}</h3>
          </div>
          
          <div className="border-y border-brand-line py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[10px] text-brand-gray uppercase tracking-widest font-bold">
               <div className="flex items-center gap-1.5">
                 <Maximize size={12} className="text-brand-gold" />
                 <span>{estate.area.split(' ')[0]} SQ.FT</span>
               </div>
               <div className="flex items-center gap-1.5">
                 <BedDouble size={12} className="text-brand-gold" />
                 <span>{estate.bedrooms} BEDS</span>
               </div>
            </div>
          </div>

          <div className="pt-2">
             <p className="text-brand-gold font-bold text-lg tracking-tight font-serif italic">{estate.price}</p>
             <p className="text-[10px] uppercase tracking-widest text-brand-gray mt-1">Payment Plan Available</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
