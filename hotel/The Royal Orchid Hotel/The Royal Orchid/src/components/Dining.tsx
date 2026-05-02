import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Dining() {
  return (
    <section id="dining" className="py-24 relative bg-royal-dark">
      {/* Background Subtle Pattern/Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Images */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[16/10] w-full max-w-2xl"
            >
              <img 
                src="/images/dining_fine.png" 
                alt="Fine Dining" 
                className="w-full h-full object-cover filter brightness-75"
              />
              
              <div className="absolute -bottom-10 -right-4 sm:-right-10 w-2/3 aspect-[4/3] border-[6px] border-royal-dark z-20">
                <img 
                  src="/images/dining_dish.png" 
                  alt="Culinary Creation" 
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-5 lg:pl-10 mt-16 lg:mt-0">
             <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-royal-gold">Gastronomy</span>
              <div className="h-[1px] w-12 bg-royal-gold"></div>
            </div>
            
            <h2 className="font-serif-cormorant text-4xl md:text-5xl lg:text-5xl font-light leading-[1.1] mb-8">
              A Culinary <br />
              <span className="italic text-royal-white/70">Masterpiece</span>
            </h2>

            <p className="text-royal-white/60 font-light text-sm md:text-base leading-relaxed mb-8">
              Indulge your senses in our world-class restaurants. From authentic local delicacies curated by master chefs to exotic international cuisines prepared with the finest ingredients, every meal is an event to be savored.
            </p>

            <div className="space-y-6">
              <div className="border-l border-royal-gold/30 pl-6 hover:border-royal-gold transition-colors duration-300">
                <h3 className="font-serif-cormorant text-xl tracking-wide text-royal-gold mb-1">The Orchid Room</h3>
                <p className="text-xs text-royal-white/50 uppercase tracking-wider mb-2">Fine Dining & Wine</p>
                <p className="text-sm font-light text-royal-white/70">Experience classic European cuisine in an opulent setting.</p>
              </div>
              
              <div className="border-l border-royal-gold/30 pl-6 hover:border-royal-gold transition-colors duration-300">
                <h3 className="font-serif-cormorant text-xl tracking-wide text-royal-gold mb-1">Saffron Sky</h3>
                <p className="text-xs text-royal-white/50 uppercase tracking-wider mb-2">Rooftop Lounge</p>
                <p className="text-sm font-light text-royal-white/70">Craft cocktails and Pan-Asian tapas with a panoramic city view.</p>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/dining" className="inline-block border border-royal-white/30 text-royal-white hover:bg-royal-white hover:text-royal-dark px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300">
                Explore Menus
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
