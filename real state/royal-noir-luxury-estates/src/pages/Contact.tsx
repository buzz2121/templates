import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, Globe, Shield } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Identity Verified. Inquiry Transmitted Securedly.", {
          description: "An advisor will reach out within 2 hours.",
          style: {
            background: "#141416",
            border: "1px solid #D4AF37",
            color: "#FFF"
          }
        });
    }, 1500);
  };

  return (
    <div className="pt-28 pb-40 bg-background min-h-screen">
       <section className="bg-white py-32 px-6 md:px-12 border-b border-border/50 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] select-none pointer-events-none text-primary">
          <span className="text-[12rem] font-display font-medium leading-none tracking-tighter italic">CONCIERGE</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-16 h-[1px] bg-primary/30" />
              <span className="text-primary uppercase tracking-[0.5em] font-bold text-[10px]">Strategic Point of Entry</span>
              <div className="w-16 h-[1px] bg-primary/30" />
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-foreground uppercase mb-10 leading-none tracking-tight">
              THE <span className="italic text-primary ml-[-0.05em]">CONNECT</span> DESK
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-xl tracking-wide leading-relaxed italic">
              "Curating relationships with the same precision we apply to architectural selection."
            </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              {/* Contact Info */}
              <div className="space-y-20">
                  <div>
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-12 italic">Global Footprint</h3>
                      <div className="space-y-16">
                           <div className="flex flex-col sm:flex-row gap-10 group">
                               <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-luxury shadow-xl">
                                   <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                               </div>
                               <div>
                                   <h4 className="text-foreground font-display font-medium uppercase text-lg tracking-widest mb-3 italic">Manhattan Bureau</h4>
                                   <p className="text-muted-foreground font-light text-base leading-relaxed max-w-xs tracking-wide italic">450 Park Avenue, 22nd Floor,<br />New York, NY 10022</p>
                               </div>
                           </div>
                            <div className="flex flex-col sm:flex-row gap-10 group">
                               <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-luxury shadow-xl">
                                   <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                               </div>
                               <div>
                                   <h4 className="text-foreground font-display font-medium uppercase text-lg tracking-widest mb-3 italic">Confidential Line</h4>
                                   <p className="text-muted-foreground font-light text-base leading-relaxed tracking-wide underline decoration-primary/20 decoration-2 underline-offset-8">+1 (212) 555-0120</p>
                                   <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary/80 italic">
                                       <Shield size={12} /> Encrypted SIP Protocol
                                   </div>
                               </div>
                           </div>
                           <div className="flex flex-col sm:flex-row gap-10 group">
                               <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-luxury shadow-xl">
                                   <Globe className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                               </div>
                               <div>
                                  <h4 className="text-foreground font-display font-medium uppercase text-lg tracking-widest mb-3 italic">Regional Dossiers</h4>
                                  <p className="text-muted-foreground font-light text-base leading-relaxed tracking-wide italic leading-8">Geneva • Mayfair • Palm Jumeirah • Singapore</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="p-10 bg-secondary/20 border border-border/50 shadow-sm italic">
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6">Institutional Partnerships</h3>
                      <p className="text-muted-foreground font-light text-sm leading-relaxed tracking-wide">
                        For family offices, trustees, and development groups seeking strategic advisory, please contact our institutional desk: 
                        <span className="text-foreground block mt-2 font-bold tracking-widest not-italic">corporate@sterling-estates.com</span>
                      </p>
                  </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-12 md:p-20 relative border border-border/50 shadow-2xl">
                  <div className="absolute top-0 right-0 w-2 h-full gold-gradient" />
                  
                  <h3 className="text-4xl font-display font-light text-foreground uppercase mb-6 leading-tight">PRIVATE <span className="italic text-primary ml-[-0.05em]">INQUIRY</span></h3>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.4em] font-bold mb-16 italic pb-8 border-b border-border/50">CONFIDENTIAL TRANSMISSION PROTOCOL</p>

                  <form onSubmit={handleSubmit} className="space-y-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">Identity</label>
                            <Input placeholder="Full Name" className="bg-transparent border-0 border-b border-border/50 rounded-none h-14 text-foreground p-0 focus-visible:ring-0 focus:border-primary transition-luxury italic text-lg shadow-none" required />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">Email Protocol</label>
                            <Input type="email" placeholder="private@client.com" className="bg-transparent border-0 border-b border-border/50 rounded-none h-14 text-foreground p-0 focus-visible:ring-0 focus:border-primary transition-luxury italic text-lg shadow-none" required />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">Inquiry Classification</label>
                        <select className="w-full bg-transparent border-0 border-b border-border/50 h-16 text-foreground text-base outline-none appearance-none focus:border-primary transition-luxury italic cursor-pointer">
                            <option className="bg-white">Bespoke Asset Acquisition</option>
                            <option className="bg-white">Strategic Portfolio Disposition</option>
                            <option className="bg-white">Off-Market Intelligence Access</option>
                            <option className="bg-white">General Advisory & Concierge</option>
                        </select>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">Inquiry Dossier</label>
                        <textarea 
                            placeholder="Provide initial requirements for confidential briefing..." 
                            className="w-full bg-transparent border-0 border-b border-border/50 p-0 py-4 text-foreground text-lg focus:outline-none focus:border-primary transition-luxury min-h-[160px] resize-none overflow-hidden italic leading-relaxed" 
                            required 
                        />
                     </div>

                     <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full h-20 gold-gradient text-white font-bold uppercase text-[11px] tracking-[0.5em] rounded-none hover:scale-105 transition-luxury mt-16 flex items-center justify-center gap-4 shadow-xl border-none"
                     >
                         {isSubmitting ? "TRANSMITTING..." : <>TRANSMIT SECURE INQUIRY <Send size={18} /></>}
                     </Button>
                  </form>
              </div>
          </div>
      </section>

      {/* Cinematic Map Placeholder */}
       <section className="mt-40 px-6 md:px-12 max-w-7xl mx-auto h-[500px] bg-secondary/10 flex items-center justify-center border border-border/50 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 opacity-20 grayscale scale-110 group-hover:scale-100 transition-luxury active:scale-105 duration-[20s] ease-linear">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          
          <div className="relative z-10 text-center">
              <span className="text-primary uppercase tracking-[0.6em] font-bold text-[10px] mb-6 block">The Global Archive</span>
              <h4 className="text-3xl font-display text-foreground mb-10 uppercase tracking-widest italic font-light">Interactive Asset Topography</h4>
              <Button variant="outline" className="border-primary/30 text-primary rounded-none uppercase text-[10px] tracking-[0.4em] font-bold h-16 px-12 hover:bg-primary hover:text-white hover:border-primary transition-luxury bg-white/40 shadow-none">
                Enter Encrypted Viewer
              </Button>
          </div>
      </section>
    </div>
  );
}
