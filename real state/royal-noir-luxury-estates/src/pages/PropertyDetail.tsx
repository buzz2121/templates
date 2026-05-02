import { useParams, Link } from "react-router-dom";
import { PROPERTIES } from "@/src/data";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, CheckCircle2, Phone, Mail, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { Footer } from "@/src/components/layout/Footer";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(property?.image);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!property) {
    return (
      <div className="pt-40 pb-40 bg-background min-h-screen text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-display text-foreground uppercase tracking-widest mb-10">Dossier Unavailable</h2>
        <Button asChild className="gold-gradient text-white h-16 px-12 rounded-none font-bold uppercase tracking-[0.3em] border-none">
          <Link to="/properties">Return to Collection</Link>
        </Button>
      </div>
    );
  }

  const handleVisitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Inquiry Transmitted", {
          description: "Our private advisory team will contact you within the hour.",
          style: {
            background: "#FFF",
            border: "1px solid #C5A059",
            color: "#1A1A1B"
          }
        });
    }, 1500);
  };

  return (
    <div className="pt-28 bg-background">
      {/* Header Info */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 pt-12">
          <Link to="/properties" className="inline-flex items-center gap-3 text-primary uppercase text-[10px] tracking-[0.4em] font-bold mb-12 hover:text-foreground transition-luxury group">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-luxury" /> Back to Collection
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Badge className="bg-primary text-white font-bold uppercase text-[10px] tracking-[0.3em] py-2 px-6 rounded-none shadow-md border-none">{property.status}</Badge>
                <div className="h-[1px] w-12 bg-border" />
                <span className="text-muted-foreground uppercase tracking-[0.4em] font-bold text-[10px]">{property.type}</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-light text-foreground uppercase leading-[0.9] mb-6 tracking-tight">
                {property.title.split(' ').slice(0, -1).join(' ')} <span className="italic text-primary ml-[-0.05em]">{property.title.split(' ').slice(-1)}</span>
              </h1>
              <div className="flex items-center gap-3 text-muted-foreground font-bold uppercase text-xs tracking-[0.4em]">
                  <MapPin size={18} className="text-primary" /> {property.location}
              </div>
            </div>
            <div className="lg:text-right">
              <div className="text-[10px] uppercase text-muted-foreground font-bold tracking-[0.5em] mb-4">Investment Value</div>
              <div className="text-5xl md:text-7xl font-display font-medium text-foreground tracking-tighter">
                ${property.price.toLocaleString()}
              </div>
            </div>
          </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-4 gap-6 h-[70vh] min-h-[500px]">
              <div className="lg:col-span-3 overflow-hidden relative shadow-2xl group border border-border/50">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      src={activeImage} 
                      className="w-full h-full object-cover transition-luxury duration-[3s] group-hover:scale-105" 
                      alt={property.title} 
                    />
                  </AnimatePresence>
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <span className="text-white font-display text-2xl italic">{property.city}</span>
                  </div>
              </div>
              
              <div className="lg:col-span-1 grid grid-cols-4 lg:grid-cols-1 gap-4 overflow-hidden">
                  {[property.image, ...property.gallery].slice(0, 4).map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveImage(img)}
                        className={`cursor-pointer overflow-hidden relative border transition-luxury aspect-square ${activeImage === img ? "border-primary shadow-xl" : "border-border/30 opacity-60 hover:opacity-100"}`}
                      >
                          <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-luxury duration-700" />
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Details */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="lg:col-span-2 space-y-24">
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-12 border-y border-border/50">
                      <div className="space-y-4">
                          <div className="flex items-center gap-3 text-primary">
                            <Bed size={20} className="stroke-[1.5]" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground">Sanctuary</span>
                          </div>
                          <div className="text-3xl md:text-4xl font-display text-foreground italic">{property.beds} Rooms</div>
                      </div>
                      <div className="space-y-4 md:border-x border-border/50 md:px-12">
                          <div className="flex items-center gap-3 text-primary">
                            <Bath size={20} className="stroke-[1.5]" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground">Wellness</span>
                          </div>
                          <div className="text-3xl md:text-4xl font-display text-foreground italic">{property.baths} Spas</div>
                      </div>
                      <div className="space-y-4">
                          <div className="flex items-center gap-3 text-primary">
                            <Maximize size={20} className="stroke-[1.5]" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground">Footprint</span>
                          </div>
                          <div className="text-3xl md:text-4xl font-display text-foreground italic">{property.area.toLocaleString()} <span className="text-sm not-italic text-muted-foreground">sqft</span></div>
                      </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-10">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-[1px] bg-primary" />
                        <h3 className="text-[10px] uppercase font-bold text-primary tracking-[0.5em]">The Architectural Narrative</h3>
                      </div>
                      <p className="text-foreground font-light text-3xl leading-[1.6] tracking-tight italic max-w-3xl">
                        "{property.description}"
                      </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-12 bg-secondary/20 p-16 border border-border/50 shadow-sm">
                      <h3 className="text-[10px] uppercase font-bold text-primary tracking-[0.5em]">Curated Amenities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
                          {property.features.map(f => (
                              <div key={f} className="flex items-center gap-6 text-foreground/80 font-medium uppercase text-[11px] tracking-[0.2em] group">
                                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-luxury" /> {f}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Inquiry Sidebar */}
              <aside>
                  <div className="bg-white p-12 border border-border pb-16 sticky top-32 shadow-2xl space-y-16">
                      <div className="border-b border-border pb-12">
                          <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-10 text-center">Private Advisor</p>
                          <div className="flex flex-col items-center text-center gap-6">
                              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                                <img src={property.agent.image} className="w-full h-full object-cover grayscale transition-luxury hover:grayscale-0" alt={property.agent.name} />
                              </div>
                              <div>
                                  <h4 className="text-2xl font-display text-foreground italic mb-1">{property.agent.name}</h4>
                                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.4em] mb-6">{property.agent.role}</p>
                                  <div className="flex flex-col gap-2">
                                      <div className="flex items-center justify-center gap-3 text-xs font-medium text-foreground tracking-widest">
                                          <Phone size={14} className="text-primary" /> {property.agent.phone}
                                      </div>
                                      <div className="flex items-center justify-center gap-3 text-xs font-medium text-foreground tracking-widest opacity-60">
                                          <Mail size={14} className="text-primary" /> inquiry@sterling-estates.com
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <form onSubmit={handleVisitRequest} className="space-y-10">
                          <div className="space-y-6">
                            <Input placeholder="Identity/Full Name" className="bg-secondary/30 border-none h-16 px-8 italic font-light rounded-none text-lg" required />
                            <Input type="email" placeholder="Private Email" className="bg-secondary/30 border-none h-16 px-8 italic font-light rounded-none text-lg" required />
                            <textarea 
                                placeholder="Enter specific requirements..." 
                                className="w-full bg-secondary/30 border-none p-8 h-40 italic font-light text-lg focus:outline-none focus:ring-1 focus:ring-primary/20 rounded-none resize-none" 
                            />
                          </div>
                          
                          <div className="space-y-6">
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full gold-gradient text-white h-20 font-bold uppercase text-[10px] tracking-[0.5em] rounded-none shadow-xl border-none"
                            >
                                {isSubmitting ? "TRANSMITTING..." : "Initiate Consultation"}
                            </Button>
                            <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-widest text-muted-foreground font-bold italic">
                                <Shield size={12} className="text-primary" /> Discretion Protocol Applied
                            </div>
                          </div>
                      </form>
                  </div>
              </aside>
          </div>
      </section>

      <Footer />
    </div>
  );
}
