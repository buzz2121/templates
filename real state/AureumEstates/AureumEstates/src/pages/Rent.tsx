import { motion } from "motion/react";
import FeaturedProperties from "../components/FeaturedProperties";
import { Calendar, Key } from "lucide-react";

export default function Rent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-10"
           >
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold text-center lg:text-left">Luxury Rentals</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter text-center lg:text-left">
                Lease the <br className="hidden sm:block"/>
                <span className="gold-text italic font-serif">Impossible</span>
              </h1>
              <p className="text-base md:text-xl text-charcoal/60 font-light leading-relaxed text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
                Short-term stays or long-term residences. We offer access to exclusive mansions and penthouses for those who prefer the flexibility of leasing without compromising on standard.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 pt-4">
                 <div className="space-y-3">
                    <span className="gold-text text-4xl font-light">450+</span>
                    <p className="text-[9px] uppercase tracking-widest text-charcoal/80 font-bold">Exclusive Listings</p>
                 </div>
                 <div className="space-y-3">
                    <span className="gold-text text-4xl font-light">24/7</span>
                    <p className="text-[9px] uppercase tracking-widest text-charcoal/80 font-bold">Concierge Support</p>
                 </div>
              </div>
           </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/40 backdrop-blur-xl border border-charcoal/5 p-10 rounded-[2.5rem] space-y-6 hover:border-gold/30 transition-all cursor-pointer group"
              >
                 <div className="w-16 h-16 glass flex items-center justify-center rounded-full text-gold group-hover:scale-110 transition-transform">
                   <Calendar size={32} strokeWidth={1} />
                 </div>
                 <h3 className="text-2xl font-serif italic text-charcoal">Short Term Stays</h3>
                 <p className="text-sm text-charcoal/80 leading-relaxed font-light">Bespoke vacation experiences in globally iconic destinations.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/40 backdrop-blur-xl border border-charcoal/5 p-10 rounded-[2.5rem] space-y-6 hover:border-gold/30 transition-all cursor-pointer group sm:translate-y-12"
              >
                 <div className="w-16 h-16 glass flex items-center justify-center rounded-full text-gold group-hover:scale-110 transition-transform">
                   <Key size={32} strokeWidth={1} />
                 </div>
                 <h3 className="text-2xl font-serif italic text-charcoal">Annual Leasing</h3>
                 <p className="text-sm text-charcoal/80 leading-relaxed font-light">Strategic residential leasing with full-service management.</p>
              </motion.div>
           </div>
        </div>
      </div>

      <FeaturedProperties showTitle={false} />
    </motion.div>
  );
}
