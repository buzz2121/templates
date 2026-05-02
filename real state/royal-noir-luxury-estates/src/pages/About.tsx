import { motion } from "framer-motion";
import { Trophy, Target, ShieldCheck, Globe, Star, Diamond } from "lucide-react";

export default function About() {
  return (
    <div className="pt-28 pb-40 bg-background">
       <section className="min-h-[90vh] py-32 px-6 md:px-12 border-b border-border/50 mb-32 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale active:scale-105 transition-luxury duration-[15s] ease-linear">
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background" />
        
        <div className="max-w-5xl relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-6 mb-8"
            >
                <div className="w-12 h-[1px] bg-primary/30" />
                <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">The Sterling Heritage</span>
                <div className="w-12 h-[1px] bg-primary/30" />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-display font-light text-foreground uppercase leading-[0.85] mb-12 tracking-tight"
            >
                ESTABLISHED <br /> <span className="italic font-light text-primary ml-[-0.05em]">1924</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide italic"
            >
                "For a century, Sterling has served as the silent architecture behind the world’s most significant residential histories."
            </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-56">
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                  <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-10 italic">The Philosophy</h2>
                  <h3 className="text-5xl md:text-7xl font-display font-light text-foreground uppercase mb-12 leading-[0.9]">ARCHITECTURAL <br /><span className="italic font-light text-primary ml-[-0.05em]">ARBITRATION</span></h3>
                  <p className="text-muted-foreground font-light text-xl mb-12 leading-relaxed tracking-wide italic">
                    We transcend standard brokerage to become strategic advisors. Our approach is purely artifact-driven; we only represent estates that demonstrate a profound mastery of form and function.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-12 border-t border-border/50">
                      <div className="space-y-4">
                          <h4 className="text-primary font-bold uppercase text-[10px] tracking-[0.3em]">The Mandate</h4>
                          <p className="text-muted-foreground text-sm font-light leading-relaxed italic">To preserve the privacy and prosperity of the global elite through impeccable asset selection.</p>
                      </div>
                      <div className="space-y-4 sm:border-l border-border/50 sm:pl-12">
                          <h4 className="text-primary font-bold uppercase text-[10px] tracking-[0.3em]">The Vision</h4>
                          <p className="text-muted-foreground text-sm font-light leading-relaxed italic">Redefining real estate as a multi-generational legacy preservation across 48 key capitals.</p>
                      </div>
                  </div>
              </motion.div>
              <div className="relative aspect-[4/5] bg-white p-4 group shadow-2xl">
                   <div className="w-full h-full overflow-hidden border border-border/50">
                     <img src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-luxury duration-[2s]" />
                   </div>
                   <div className="relative md:absolute mt-8 md:mt-0 md:-bottom-12 md:-left-12 w-full md:w-80 bg-foreground p-12 shadow-2xl">
                       <span className="text-6xl font-display font-medium text-background mb-2 block tracking-tighter italic">100</span>
                       <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Years of Absolute Discretion</span>
                   </div>
              </div>
          </div>

          {/* Pillars */}
          <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-border/20 rotate-[-15deg] pointer-events-none" />
              
              <div className="text-center mb-32 max-w-2xl mx-auto relative z-10">
                  <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px] mb-8 block font-mono tracking-[0.8em]">PROTOCOL</span>
                  <h2 className="text-5xl md:text-7xl font-display font-light text-foreground mb-8 uppercase leading-none">THE <span className="italic font-light text-primary ml-[-0.05em]">IMPERATIVES</span></h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                  {[
                      { icon: Globe, title: "Global Intel", desc: "Proprietary market intelligence across 48 private capital markets." },
                      { icon: Target, title: "Precision", desc: "Rigorous quantitative analysis of multi-generational asset cycles." },
                      { icon: ShieldCheck, title: "Anonymity", desc: "Deep encryption protocols protecting ultra-high-net-worth identities." },
                      { icon: Diamond, title: "Curation", desc: "A rejection of the mundane. Only architectural artifacts are admitted." }
                  ].map((p, idx) => (
                      <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="p-12 bg-white border border-border/50 group hover:border-primary/30 transition-luxury shadow-xl relative overflow-hidden"
                      >
                          <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-luxury text-primary">
                            <p.icon size={120} />
                          </div>
                          <p.icon size={32} className="text-primary mb-10 group-hover:scale-110 transition-luxury" />
                          <h4 className="text-foreground font-display text-lg uppercase tracking-widest mb-6 italic">{p.title}</h4>
                          <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed group-hover:text-foreground transition-luxury italic">{p.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Founder Quote */}
      <section className="py-56 bg-secondary/20 mt-56 border-y border-border/50 relative overflow-hidden">
           <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
               <Star size={48} className="text-primary/20 mx-auto mb-16" />
               <h3 className="text-4xl md:text-6xl font-display font-light text-foreground italic leading-[1.3] mb-16 tracking-wide">
                   "Sterling was not built to be the most prolific agency, but to be the most significant. Every home we represent is a testament to the human desire for permanence and absolute beauty."
               </h3>
               <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-10" />
               <div className="space-y-2">
                 <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">Alastair Blackwood</span>
                 <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-[0.3em]">Chief Curator & Founding Partner</p>
               </div>
           </div>
      </section>
    </div>
  );
}
