import { motion } from "motion/react";
import Communities from "../components/Communities";
import { Building2, Globe, Users } from "lucide-react";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold">Global Developments</span>
           <h1 className="text-5xl sm:text-7xl md:text-9xl leading-[0.8] tracking-tighter">
             Master <br className="hidden sm:block"/>
             <span className="gold-text italic font-serif">Communities</span>
           </h1>
           <p className="text-base md:text-xl text-charcoal/90 leading-relaxed font-light mx-auto max-w-2xl text-center">
             We partner with world-renowned architects and developers to bring you transformative urban ecosystems and serene private retreats. Every brick is a legacy.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 sm:mt-24 border border-charcoal/10 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden glass shadow-2xl">
           {[
             { icon: Building2, title: "12 Peaks", label: "Developments" },
             { icon: Globe, title: "08 Cities", label: "Presence" },
             { icon: Users, title: "1.5M+", label: "Residents" }
           ].map((stat, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2 }}
               className="p-8 md:p-16 text-center space-y-4 sm:space-y-6 hover:bg-white/5 transition-all border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 last:border-r-0"
             >
                <div className="w-16 h-16 sm:w-20 sm:h-20 glass flex items-center justify-center rounded-full mx-auto text-gold mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                   <stat.icon size={28} className="opacity-80" strokeWidth={1} />
                </div>
                <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-charcoal">{stat.title}</h3>
                <p className="text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] text-charcoal/80">{stat.label}</p>
             </motion.div>
           ))}
        </div>
      </div>

      <Communities />
    </motion.div>
  );
}
