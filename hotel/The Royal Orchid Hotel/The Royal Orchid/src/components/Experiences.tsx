import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    title: 'The Royal Spa',
    category: 'Wellness',
    image: '/images/about_suite.png',
    size: 'lg:col-span-8 lg:row-span-2'
  },
  {
    title: 'Infinity Pool',
    category: 'Leisure',
    image: '/images/room_villa.png',
    size: 'lg:col-span-4 lg:row-span-1'
  },
  {
    title: 'Grand Ballroom',
    category: 'Weddings & Events',
    image: '/images/about_interior.png',
    size: 'md:col-span-2 lg:col-span-4 lg:row-span-1'
  }
];

export default function Experiences() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Curated Moments</span>
            <div className="h-[1px] w-8 bg-royal-gold"></div>
          </div>
          <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light mb-6">
            Beyond <span className="italic text-royal-white/70">Expectations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${exp.size}`}
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] font-sans tracking-[0.2em] text-royal-gold uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {exp.category}
                </span>
                <h3 className="font-serif-cormorant text-3xl font-light text-royal-white">
                  {exp.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
