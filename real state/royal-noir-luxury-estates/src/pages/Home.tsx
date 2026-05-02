import { motion } from "framer-motion";
import { Hero } from "@/src/components/sections/Hero";
import { PROPERTIES } from "@/src/data";
import { PropertyCard } from "@/src/components/shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Map, Clock } from "lucide-react";
import { Footer } from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      
      {/* Introduction */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 space-y-10"
            >
                <div className="flex items-center gap-4">
                    <span className="w-10 h-[1px] bg-primary" />
                    <span className="text-primary uppercase tracking-[0.3em] font-medium text-[10px]">Sterling Heritage</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display leading-[1.1] text-foreground font-light">
                    The Standard <br />
                    <span className="italic">of Distinction</span> <br />
                    Since 1924.
                </h2>
                <div className="space-y-8 text-muted-foreground text-xl font-light leading-relaxed italic border-l border-primary pl-10 max-w-lg">
                    <p>
                        "Architecture is the most visible form of art. We provide the most exquisite frame for your legacy."
                    </p>
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="flex-1 relative"
            >
                <img 
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200" 
                    alt="Luxury Interior" 
                    className="w-full h-[600px] object-cover grayscale transition-luxury duration-[3s] hover:grayscale-0 shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 p-12 bg-foreground text-background hidden md:block">
                    <div className="text-4xl font-display font-medium leading-none mb-2 italic">Established</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">London • New York</div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-40 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-6">
                <span className="text-primary uppercase tracking-[0.4em] font-medium text-[10px] block">Global Inventory</span>
                <h2 className="text-5xl md:text-7xl font-display text-foreground font-light leading-none">Signature <span className="italic">Portfolio</span></h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed italic border-l border-border pl-8">
                A selection of the world's most guarded residential architecture, curated for the modern custodian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROPERTIES.slice(0, 3).map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button asChild size="lg" className="gold-gradient text-white rounded-none px-16 h-20 font-bold uppercase tracking-[0.4em] text-[11px] hover:scale-105 transition-luxury border-none">
                <Link to="/properties">Explore Full Inventory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-20">
              {[
                { 
                    icon: ShieldCheck, 
                    title: "Absolute Discretion", 
                    desc: "Maintaining the most rigorous standards of privacy for both acquisition and divestment."
                },
                { 
                    icon: Map, 
                    title: "Market Intelligence", 
                    desc: "Providing off-market insight and analytical data that typical institutions cannot access."
                },
                { 
                    icon: Clock, 
                    title: "Multi-Generational", 
                    desc: "Serving as trusted advisors for families and institutions across three consecutive generations."
                }
              ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="space-y-8"
                  >
                      <item.icon className="text-primary w-12 h-12 stroke-[1.5]" />
                      <h3 className="text-3xl font-display italic text-foreground tracking-tight">{item.title}</h3>
                      <p className="text-muted-foreground text-lg font-light leading-relaxed italic">{item.desc}</p>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-40 px-6 md:px-12 bg-foreground text-background overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.08] select-none pointer-events-none">
             <span className="text-[30rem] font-display font-medium leading-none tracking-tighter absolute -right-20 -bottom-20">ESTATES</span>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
              <div className="max-w-2xl text-center md:text-left">
                  <span className="text-primary uppercase tracking-[0.5em] font-medium text-[10px] block mb-8">Protocol Journal</span>
                  <h3 className="text-5xl md:text-7xl font-display text-background leading-[0.9] mb-10">THE <span className="italic font-light text-primary">INTELLIGENCE</span> REPORT</h3>
                  <p className="text-background/50 text-xl font-light italic leading-relaxed">Secure exclusive access to off-market briefings and architectural analysis.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
                  <input 
                    type="email" 
                    placeholder="Private Email Address" 
                    className="flex-1 bg-background/10 border-none h-20 px-8 text-background focus:outline-none placeholder:text-background/20 italic font-light" 
                  />
                  <Button className="h-20 px-12 gold-gradient text-white font-bold uppercase text-[10px] tracking-[0.4em] rounded-none border-none">
                      Establish Access
                  </Button>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}
