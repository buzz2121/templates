import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Maximize, Download } from 'lucide-react';

const venues = [
  {
    id: 1,
    name: 'The Grand Ballroom',
    capacity: '1,000 Guests',
    area: '15,000 sq ft',
    image: '/images/about_interior.png',
    layout: 'Ballroom Style'
  },
  {
    id: 2,
    name: 'Imperial Boardroom I',
    capacity: '24 Guests',
    area: '1,200 sq ft',
    image: '/images/about_suite.png',
    layout: 'U-Shape / Boardroom'
  },
  {
    id: 3,
    name: 'Orchid Garden Terrace',
    capacity: '350 Guests',
    area: '8,500 sq ft',
    image: '/images/room_villa.png',
    layout: 'Outdoor Reception'
  },
  {
    id: 4,
    name: 'The Saffron Lounge',
    capacity: '80 Guests',
    area: '2,400 sq ft',
    image: '/images/dining_fine.png',
    layout: 'Cocktail Style'
  }
];

export default function FloorPlans() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Space Layouts</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Venue <span className="italic text-royal-gold">Floor Plans</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light">
            Explore our versatile event spaces, each designed to adapt perfectly to your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {venues.map((venue, index) => (
            <motion.div 
              key={venue.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden mb-6 bg-royal-white/5 border border-royal-white/10">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-transparent to-transparent"></div>
                
                {/* Decorative Grid Overlay for 'Architectural' feel */}
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                  backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}></div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div>
                     <h3 className="font-serif-cormorant text-2xl lg:text-3xl text-royal-white mb-1">{venue.name}</h3>
                     <p className="text-[10px] uppercase tracking-widest text-royal-gold">{venue.layout}</p>
                   </div>
                   <button className="bg-royal-dark/80 backdrop-blur-md p-3 border border-royal-gold/30 text-royal-gold hover:bg-royal-gold hover:text-royal-dark transition-colors">
                     <Download size={18} />
                   </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l border-royal-white/20 pl-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-royal-white/40 mb-1">Capacity</p>
                  <p className="text-sm font-light text-royal-white/80">{venue.capacity}</p>
                </div>
                <div className="border-l border-royal-white/20 pl-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-royal-white/40 mb-1">Total Area</p>
                  <p className="text-sm font-light text-royal-white/80">{venue.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-royal-white/50 font-light text-sm mb-8 italic">Need a custom seating arrangement? Our team can reconfigure any space to your specifications.</p>
            <button className="bg-transparent border border-royal-white/30 text-royal-white hover:border-royal-gold hover:text-royal-gold px-10 py-3 text-[10px] uppercase tracking-widest transition-all duration-300">
                Download All Floor Plans (PDF)
            </button>
        </div>
      </div>
    </PageTransition>
  );
}
