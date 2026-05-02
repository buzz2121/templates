import { motion } from "motion/react";
import FeaturedProperties from "../components/FeaturedProperties";
import { Search, Filter } from "lucide-react";

export default function Buy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 mb-20 text-center lg:text-left"
        >
          <div className="space-y-6 max-w-2xl">
             <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold">Sales Portfolio</span>
             <h1 className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter">
               Curated <span className="gold-text italic">Sales</span>
             </h1>
             <p className="text-charcoal/60 font-light text-base md:text-xl leading-relaxed mx-auto lg:mx-0">
               Explore the world's most prestigious properties available for immediate acquisition. Every listing is a masterpiece of design.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="bg-white/40 backdrop-blur-xl flex items-center px-6 py-4 rounded-2xl w-full sm:min-w-[350px] shadow-2xl border border-charcoal/5">
                 <Search size={18} className="text-charcoal/80 mr-4" />
                 <input 
                    type="text" 
                    placeholder="Search by area or style..." 
                    className="bg-transparent border-none outline-none text-sm font-light w-full text-charcoal placeholder:text-charcoal/40"
                 />
              </div>
             <button className="bg-white/40 backdrop-blur-xl p-4 rounded-2xl hover:text-gold transition-all border border-charcoal/5 w-full sm:w-auto flex items-center justify-center">
                <Filter size={18} />
             </button>
          </div>
        </motion.div>
      </div>

      <FeaturedProperties showTitle={false} />
      
      <div className="max-w-7xl mx-auto px-10 mt-12 text-center">
         <button className="premium-pill px-12 py-6 text-xs tracking-[0.3em]">
            View More Premium Listings
         </button>
      </div>
    </motion.div>
  );
}
