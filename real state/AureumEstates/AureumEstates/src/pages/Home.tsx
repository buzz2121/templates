import { motion } from "motion/react";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import Communities from "../components/Communities";
import Services from "../components/Services";
import PropertyMap from "../components/PropertyMap";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Partner Logo Bar - Infinite Scroll */}
      <div className="py-12 sm:py-16 bg-pearl border-y border-charcoal/5 overflow-hidden backdrop-blur-sm relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        
        <div className="infinite-scroll-track">
          {/* Duplicate the logo set for seamless loop */}
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-20 items-center">
              {['Emaar', 'Damac', 'Meraas', 'Sobha', 'Ellington'].map((name) => (
                <span key={name} className="text-sm sm:text-2xl font-serif font-light tracking-[0.4em] uppercase text-charcoal/40 hover:text-gold transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <FeaturedProperties />
      
      {/* Luxury Divider */}
      <div className="py-4 flex items-center justify-center">
        <div className="luxury-divider" />
      </div>

      <PropertyMap />
      <WhyChooseUs />
      <Communities />
      <Services />

      {/* Grand Call to Action Section */}
      <section className="py-40 md:py-52 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Mansion Background" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-[#050B14]/80 to-deep-blue/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Exclusive Opportunity</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-[-0.03em] font-serif font-bold text-white">
              Find Your <span className="gold-shimmer italic">Dream</span>
              <br />Home Today
            </h2>
            <p className="text-base md:text-lg text-white/90 font-light max-w-xl leading-[1.9] tracking-wide">
              Our luxury concierge team is ready to assist you in securing your perfect estate. Connect with us for an exclusive consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="px-14 py-5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-500 rounded-xl">
                Contact Specialist
              </button>
              <button className="px-14 py-5 glass border border-gold/25 gold-text font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold/10 transition-all duration-500 rounded-xl">
                Download Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
