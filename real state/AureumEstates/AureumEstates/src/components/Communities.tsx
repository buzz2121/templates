import { motion } from "motion/react";
import { COMMUNITIES } from "../constants";
import { Building2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Communities() {
  return (
    <section id="projects" className="section-luxury bg-pearl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-deep-blue/[0.08] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="section-heading">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold hidden sm:block" />
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Aspirational Living</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-charcoal">
            Luxury <span className="gold-text italic">Communities</span>
          </h2>
          <p className="max-w-2xl text-charcoal/80 font-light text-base md:text-lg leading-[1.9] tracking-wide">
            Discover integrated ecosystems designed for those who demand excellence in every facet of their habitat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 md:auto-rows-[560px]">
          {COMMUNITIES.map((community, idx) => (
            <motion.div
              key={community.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.8 }}
              className="relative group overflow-hidden cursor-pointer rounded-3xl border border-white/10 hover:border-gold/30 transition-all duration-700 glow-blue hover:glow-gold luxury-image-hover"
            >
              <Link to={`/projects/${community.id}`}>
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full luxury-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 p-10 md:p-12 space-y-4 z-10 w-full">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">{community.location}</p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white group-hover:text-gold transition-colors duration-500 leading-tight">
                      {community.name}
                    </h3>
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0 ml-4">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] bg-gold transition-opacity duration-700 pointer-events-none" />
                
                <div className="absolute top-8 right-8 w-12 h-12 glass-blue rounded-full flex items-center justify-center text-gold/60 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Building2 size={20} strokeWidth={1} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
