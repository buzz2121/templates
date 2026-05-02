import { motion } from 'motion/react';

const IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200"
];

export default function Gallery() {
  return (
    <div className="pt-32">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
           <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">Visual Journey</p>
           <h1 className="text-6xl md:text-8xl font-serif">A Portfolio of <br /><span className="italic">Wonder</span></h1>
           <div className="h-[1px] w-20 bg-gold mx-auto" />
           <p className="max-w-2xl mx-auto text-xl text-charcoal/60 font-light leading-relaxed">
             Step into our world of immersive event design. Each project is a testament to our commitment to excellence and artistic innovation.
           </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden shadow-xl rounded-2xl"
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-8">
                <p className="text-[10px] tracking-widest font-bold uppercase mb-2">Luxury Event</p>
                <div className="h-[1px] w-12 bg-gold mb-4" />
                <button className="text-[10px] tracking-widest font-bold uppercase hover:text-gold transition-colors underline underline-offset-8">View Detail</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Headline */}
      <section className="py-40 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-8xl md:text-[12rem] font-serif text-gold/20 select-none leading-none whitespace-nowrap"
            >
              INFINITE BEAUTY
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-8xl md:text-[12rem] font-serif text-gold/20 select-none leading-none whitespace-nowrap -mt-10 md:-mt-20"
            >
              TIMELESS DESIGN
            </motion.h2>
         </div>
      </section>
    </div>
  );
}
