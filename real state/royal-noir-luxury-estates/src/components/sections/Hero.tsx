import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <span className="w-10 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] font-medium text-[10px]">Private Advisor Network</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display leading-[1.05] text-foreground font-light tracking-tight">
            Curating <br />
            <span className="italic">Exceptional</span> <br />
            Living.
          </h1>
          
          <p className="text-muted-foreground text-xl font-light leading-relaxed max-w-md border-l border-border pl-6">
            Establishing the standard for architectural distinction across the globe's most prestigious markets.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <Button asChild size="lg" className="gold-gradient text-white rounded-none px-12 h-16 font-medium transition-luxury hover:shadow-xl hover:-translate-y-1 border-none outline-none">
              <Link to="/properties" className="flex items-center gap-3">
                The Portfolio <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-none px-12 h-16 font-medium hover:bg-secondary transition-luxury">
              <Link to="/contact">Private Inquiry</Link>
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-2 gap-12 max-w-sm">
            <div>
              <div className="text-3xl font-display text-foreground font-medium mb-1">$4.2B+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Assets Managed</div>
            </div>
            <div>
              <div className="text-3xl font-display text-foreground font-medium mb-1">30Y+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Global Heritage</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden group shadow-2xl rounded-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
            alt="Luxury Estate"
            className="w-full h-full object-cover transition-luxury duration-[4s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
          
          <div className="absolute bottom-10 left-10 right-10 p-8 glass border border-white/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Signature Listing</div>
              <div className="text-2xl font-display italic text-foreground leading-none">The Savoy Penthouse</div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span className="text-[10px] uppercase tracking-widest font-bold">New York, NY</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary/30 -z-10" />
    </section>
  );
}
