import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const rooms = [
  {
    id: 1,
    title: 'Presidential Suite',
    description: 'The epitome of luxury with panoramic city views and exclusive amenities.',
    size: '120 sqm',
    image: '/images/room_presidential.png',
  },
  {
    id: 2,
    title: 'Royal Club Room',
    description: 'Elegant decor meets modern comfort, complete with club lounge access.',
    size: '65 sqm',
    image: '/images/room_club.png',
  },
  {
    id: 3,
    title: 'Deluxe Heritage',
    description: 'A cozy retreat designed with a perfect blend of heritage and contemporary style.',
    size: '45 sqm',
    image: '/images/room_heritage.png',
  },
  {
    id: 4,
    title: 'Signature Villa',
    description: 'Private villa with plunge pool, offering ultimate privacy and indulgence.',
    size: '180 sqm',
    image: '/images/room_villa.png',
  }
];

export default function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  return (
    <section id="rooms" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Accommodations</span>
          </div>
          <h2 className="font-serif-cormorant text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Rest in <span className="italic text-royal-white/70">Grandeur</span>
          </h2>
          <p className="text-royal-white/50 text-sm md:text-base font-light leading-relaxed">
            Explore our curated selection of suites and rooms, each designed to provide an unparalleled living experience.
          </p>
        </div>
      </div>

 
      {/* Infinite Scroll Area */}
      <div className="relative overflow-hidden w-full py-12">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
          onMouseEnter={(e) => {
            // Pause logic if using a standard animation, but motion.div animate is trickier to pause mid-transition without useAnimation
          }}
        >
          {/* Duplicate rooms for infinity loop */}
          {[...rooms, ...rooms].map((room, index) => (
            <div 
              key={`${room.id}-${index}`}
              className="flex-none w-[85vw] sm:w-[400px] lg:w-[480px] group cursor-pointer"
              onClick={() => navigate('/rooms')}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-royal-dark mb-6">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-royal-gold block mb-2">{room.size}</span>
                  <h3 className="font-serif-cormorant text-2xl lg:text-3xl font-light mb-2">{room.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-sm font-light text-royal-white/70 mb-4 whitespace-normal">{room.description}</p>
                    <span className="text-xs uppercase tracking-widest text-royal-gold flex items-center gap-2">
                      View Details <MoveRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
