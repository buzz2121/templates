import { motion } from "framer-motion";
import { AGENTS } from "@/src/data";
import { Mail, Phone, Instagram, Linkedin, Twitter, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Agents() {
  return (
    <div className="pt-28 pb-40 bg-background min-h-screen">
      <section className="bg-white py-32 px-6 md:px-12 border-b border-border/50 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[12rem] font-display font-medium leading-none tracking-tighter italic">ADVISORY</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-6 mb-8"
            >
                <div className="w-16 h-[1px] bg-primary/30" />
                <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">The Inner Circle</span>
                <div className="w-16 h-[1px] bg-primary/30" />
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-foreground uppercase mb-10 leading-none">
              PRIVATE <span className="italic text-primary ml-[-0.05em]">ADVISORS</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-xl tracking-wide leading-relaxed italic">
                A globally recognized collective of professionals serving the world’s most significant residential histories.
            </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {AGENTS.map((agent, idx) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                      <div className="relative aspect-[4/5] mb-10 overflow-hidden bg-white border border-border/50 group-hover:border-primary/30 transition-luxury shadow-2xl">
                          <img 
                            src={agent.image} 
                            alt={agent.name} 
                            className="w-full h-full object-cover grayscale transition-luxury group-hover:grayscale-0 group-hover:scale-105 duration-1000" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                          {/* Credentials Overlay */}
                          <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 border border-border/50 opacity-0 group-hover:opacity-100 transition-luxury">
                            <ShieldCheck size={14} className="text-primary" />
                            <span className="text-[9px] uppercase tracking-widest text-primary font-bold italic">Identity Verified</span>
                          </div>

                          {/* Social Hover Overlay */}
                          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-luxury">
                              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                  <a key={i} href="#" className="w-12 h-12 border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-luxury">
                                      <Icon size={18} />
                                  </a>
                              ))}
                          </div>
                      </div>

                      <div className="text-center px-4">
                          <h3 className="text-3xl font-display font-light text-foreground mb-2 uppercase tracking-wide italic">{agent.name}</h3>
                          <div className="text-primary uppercase text-[10px] tracking-[0.4em] font-bold mb-6">{agent.role}</div>
                          
                          <div className="flex items-center justify-center gap-10 mb-10 border-y border-border/50 py-4">
                            <div>
                                <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 font-bold mb-1">Dossier</div>
                                <div className="text-xs text-foreground uppercase font-bold tracking-widest">{agent.experience} Legacy</div>
                            </div>
                             <div className="w-[1px] h-8 bg-border/50" />
                            <div>
                                <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 font-bold mb-1">Status</div>
                                <div className="text-xs text-primary uppercase font-bold tracking-widest">Active</div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-4 max-w-[280px] mx-auto">
                                <Button className="h-16 gold-gradient text-white font-bold uppercase text-[10px] tracking-[0.5em] rounded-none shadow-xl border-none">
                                    Send Private Message
                                </Button>
                                <Button variant="outline" className="border-border text-muted-foreground hover:border-primary hover:text-primary h-14 rounded-none uppercase text-[10px] tracking-[0.4em] font-bold bg-transparent">
                                    <Phone size={14} className="mr-3" /> Connect Direct
                                </Button>
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>

          {/* Institutional Advisory CTA */}
          <div className="mt-48 bg-white p-16 md:p-24 border border-border/50 relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 skew-x-[-25deg] translate-x-1/2 pointer-events-none" />
               
               <div className="flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
                   <div className="max-w-2xl text-center lg:text-left">
                       <span className="text-primary uppercase tracking-[0.6em] font-bold text-[10px] mb-8 block">Institutional Desk</span>
                       <h2 className="text-4xl md:text-6xl font-display font-light text-foreground mb-8 uppercase leading-[0.9]">JOIN THE <span className="italic font-light text-primary ml-[-0.05em]">LEGACY</span> ADVISORY</h2>
                       <p className="text-muted-foreground font-light text-xl leading-relaxed italic tracking-wide">
                        Are you a top-tier professional ready to redefine real estate standards for the world's most discerning families?
                       </p>
                   </div>
                   <Button className="h-20 px-16 border border-primary/30 text-primary hover:bg-primary hover:text-white bg-transparent rounded-none uppercase text-[11px] tracking-[0.4em] font-bold transition-luxury">
                       Inquire for Partnership <ArrowRight size={18} className="ml-4" />
                   </Button>
               </div>
          </div>
      </section>
    </div>
  );
}
