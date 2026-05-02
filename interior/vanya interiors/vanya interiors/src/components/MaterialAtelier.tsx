import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function MaterialAtelier() {

  const materials = [
    {
      name: 'Calacatta Borghini',
      type: 'Rare Marble',
      image: '/images/calacatta.png',
      desc: 'Sourced from the heart of Carrara, each slab is a unique masterpiece of nature.'
    },
    {
      name: 'Brushed Champagne',
      type: 'Artisan Brass',
      image: '/images/brass.png',
      desc: 'Hand-finished metalwork that captures and softens light with timeless grace.'
    },
    {
      name: 'Midnight Mohair',
      type: 'Textile',
      image: '/images/mohair.png',
      desc: 'Deep, rich velvets that add a layer of sensory luxury to every room.'
    },
    {
      name: 'Century Oak',
      type: 'Solid Wood',
      image: '/images/oak.png',
      desc: 'Sustainably harvested timber, aged and finished to reveal its deep history.'
    }
  ];

  return (
    <section className="py-32 bg-luxury-charcoal overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-black mb-6 block">The Atelier</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Honoring the <span className="italic text-luxury-gold">Raw & Refined</span></h2>
          </div>
          <p className="md:max-w-xs text-white/40 text-sm italic leading-relaxed">
            Our library contains thousands of rare materials, curated for their integrity and soul.
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 lg:px-12 pb-12 cursor-grab active:cursor-grabbing">
        {materials.map((material, i) => (
          <motion.div
            key={material.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[450px] group"
          >
            <div className="aspect-[3/4] overflow-hidden mb-8 relative">
              <img 
                src={material.image}
                alt={material.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-black/30 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white font-bold">
                  {material.type}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-white">{material.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">{material.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
