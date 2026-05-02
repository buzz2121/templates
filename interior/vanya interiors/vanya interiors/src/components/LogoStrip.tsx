import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function LogoStrip() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const logos = [
    'AD INDIA', 'VOGUE LIVING', 'ELLE DECOR', 'INDIA TODAY HOME', 'DESIGN PATRONS', 'LUXURY INSIDER'
  ];

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-luxury-cream overflow-hidden border-y border-luxury-charcoal/5 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="px-8 py-3 bg-luxury-gold/10 backdrop-blur-xl border border-luxury-gold/30 rounded-full">
           <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-black">As Featured In</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Layer 1 - Giant & Subtle */}
        <motion.div 
          style={{ x: x1 }}
          className="flex whitespace-nowrap gap-20 items-center opacity-[0.03]"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-[15vw] font-serif font-black italic tracking-tighter text-luxury-charcoal">
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Layer 2 - Primary Editorial */}
        <motion.div 
          style={{ x: x2 }}
          className="flex whitespace-nowrap gap-32 items-center"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="transition-all duration-700 cursor-pointer"
            >
              <span className="text-4xl md:text-7xl font-serif font-bold text-luxury-charcoal/20 tracking-widest hover:text-luxury-gold">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Layer 3 - Reverse Giant */}
        <motion.div 
          style={{ x: x1 }}
          className="flex whitespace-nowrap gap-20 items-center opacity-[0.03] mt-[-5vw]"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-[15vw] font-serif font-black tracking-tighter text-luxury-charcoal">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-luxury-cream to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-luxury-cream to-transparent z-10" />
    </section>
  );
}
