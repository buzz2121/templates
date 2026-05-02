import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      
      {/* Immersive Quote Section */}
      <section className="py-48 bg-luxury-charcoal flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/img_40.jpg')] bg-cover bg-fixed bg-center opacity-20 grayscale" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 py-20 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="max-w-5xl mx-auto"
           >
              <h2 className="text-4xl md:text-7xl font-serif text-luxury-cream leading-[1.1] mb-12">
                "Architecture is the <span className="italic text-luxury-gold">learned game</span>, correct and magnificent, of forms assembled in the light."
              </h2>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-[1px] bg-luxury-gold mb-6" />
                 <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-black">Le Corbusier — The Spirit of Vanya</span>
              </div>
           </motion.div>
        </div>
      </section>

      <BeforeAfter />
      <Testimonials />
      <Blog />
    </>
  );
}
