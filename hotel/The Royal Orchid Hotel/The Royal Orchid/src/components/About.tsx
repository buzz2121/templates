import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Text */}
        <div className="flex-1 lg:pl-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-royal-gold"></div>
              <span className="text-[10px] uppercase tracking-widest text-royal-gold">Our Heritage</span>
            </div>
            
            <h2 className="font-serif-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
              A Symphony of <br />
              <span className="italic text-royal-white/70">Luxury & Comfort</span>
            </h2>
            
            <div className="space-y-6 text-royal-white/60 font-light text-sm md:text-base leading-relaxed">
              <p>
                Nestled in the heart of the city, The Royal Orchid offers an oasis of 
                tranquility and unparalleled luxury. Since our inception, we have redefined 
                the art of hospitality, combining classic architectural grandeur with 
                modern, world-class amenities.
              </p>
              <p>
                Every corner of our hotel tells a story of refined elegance, from the 
                meticulously designed suites to our award-winning culinary experiences. 
                Whether you are here for leisure or business, we promise a stay that is 
                nothing short of majestic.
              </p>
            </div>

            <div className="mt-12">
              <Link to="/hotels" className="inline-flex items-center gap-2 group">
                <span className="text-xs uppercase tracking-widest text-royal-white group-hover:text-royal-gold transition-colors pb-1 border-b border-royal-white/20 group-hover:border-royal-gold">
                  Discover More
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: Images */}
        <div className="flex-1 relative pb-6 md:pb-10 md:pr-10 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto lg:ml-auto right-0 relative">
               <img 
                 src="/images/about_suite.png" 
                 alt="Luxury Suite" 
                 className="w-full h-full object-cover rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px] border border-royal-white/10 shadow-2xl"
               />
               
               {/* Decorative Element */}
               <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-1/2 md:w-3/4 aspect-square border border-royal-gold -z-10 rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px]"></div>
            </div>
            
            {/* Floating Image */}
            <div className="absolute -left-4 md:-left-20 bottom-8 md:bottom-10 w-32 md:w-56 aspect-[4/3] z-20 border-[3px] md:border-4 border-royal-dark hidden sm:block shadow-2xl">
              <img 
                 src="/images/about_interior.png" 
                 alt="Hotel Interior" 
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
