import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]"></div>
        {/* Gradient for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-royal-dark to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-royal-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-bold drop-shadow-md">Welcome To</p>
        </motion.div>
        
        <motion.h1 
          className="font-serif-cormorant text-5xl md:text-7xl lg:text-8xl text-royal-white font-medium tracking-tight mb-6 leading-none filter drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A Legacy of <br/><span className="italic text-royal-gold font-semibold">Royal</span> Elegance
        </motion.h1>
 
        <motion.p
          className="text-royal-white max-w-2xl text-sm md:text-base font-medium mb-12 drop-shadow-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Discover a world where timeless luxury meets modern sophistication. The Royal Orchid promises an unforgettable stay filled with majestic experiences and impeccable service.
        </motion.p>
        
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-royal-white/50 mb-2">Scroll</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-royal-gold" strokeWidth={1} size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
}
