import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const ASSETS = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="h-[105vh] relative overflow-hidden flex items-center justify-center text-center px-6">
        <motion.div 
          style={{ y: useTransform(useScroll().scrollY, [0, 1000], [0, 400]) }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={ASSETS.hero} 
            alt="Luxury Event" 
            className="w-full h-full object-cover brightness-[0.6] scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-gold text-[12px] md:text-sm font-bold tracking-[0.5em] uppercase mb-8">
              Excellence in Event Design & Production
            </p>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-12 drop-shadow-2xl">
              Celebrating <br />
              <span className="italic font-light">The Extraordinary</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/services" className="group relative overflow-hidden px-12 py-6 bg-gold text-white text-[11px] font-bold tracking-[0.3em] uppercase">
                <span className="relative z-10">Our Experience</span>
                <div className="absolute inset-0 bg-gold-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <button className="group flex items-center gap-4 text-white text-[11px] font-bold tracking-[0.3em] uppercase transition-all">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>View Video</span>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/60"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">Explore</span>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-40 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-3xl md:text-5xl font-serif leading-tight text-charcoal italic px-4 md:px-20"
          >
            "A <span className="text-gold font-normal px-2">Buzz Management</span> event is more than an event – It’s an interactive experience celebrating who you are."
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="mt-16 h-[2px] bg-gold mx-auto" 
          />
          <div className="mt-16">
            <Link to="/about" className="inline-flex items-center gap-6 group text-charcoal text-[10px] font-bold tracking-[0.4em] uppercase">
              <span className="border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">Discover Our Vision</span>
              <ArrowRight size={18} className="text-gold transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
               <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" alt="Weddings" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
             </div>
             <div className="space-y-8">
               <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">Signature Events</p>
               <h2 className="text-4xl md:text-6xl font-serif">Unforgettable <br />Weddings</h2>
               <p className="text-lg text-charcoal/80 leading-relaxed font-light">
                 We create immersive environments that tell your love story. From the first sketch to the final dance, every moment is curated for perfection.
               </p>
               <Link to="/services" className="inline-block bg-charcoal text-white px-10 py-5 text-[11px] font-bold tracking-widest uppercase hover:bg-gold transition-colors">
                 Explore Services
               </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Social Showcase */}
      <section className="py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Instagram size={32} className="mx-auto text-gold mb-8 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-serif mb-20 italic">On The Grid</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
              "https://images.unsplash.com/photo-1519741497674-611481863552",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
              className="aspect-square relative overflow-hidden group cursor-pointer rounded-2xl"
              >
                <img src={`${img}?auto=format&fit=crop&q=80&w=800`} alt="IG Post" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                <div className="absolute inset-0 bg-gold/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8">
                   <Instagram size={32} className="mb-4" />
                   <p className="text-[10px] font-bold tracking-widest uppercase">View Post</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
