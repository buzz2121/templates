import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Building2, Wallet, Star, ArrowRight, ShieldCheck, Clock, Quote, Instagram, Twitter, Facebook, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import PropertyCard from '@/components/properties/PropertyCard';
import properties from '@/data/properties.json';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Alexander Vance",
    role: "PropTech Founder",
    text: "EstateFlow redefine the very essence of luxury property acquisition. Their attention to detail and curated portfolio is unmatched in the global market.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Lady Isabella Thorne",
    role: "Philanthropist",
    text: "Finding a sanctuary that resonates with one's soul is a rare gift. EstateFlow transformed my search into a seamless journey of discovery.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

const agents = [
  {
    name: "Sarah Jenkins",
    role: "Strategic Acquisitions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    contact: "+1 (555) 123-4567"
  },
  {
    name: "Marcus Chen",
    role: "Luxury Portfolio Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    contact: "+1 (555) 987-6543"
  },
  {
    name: "James Wilson",
    role: "European Markets",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    contact: "+44 7700 900123"
  }
];

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState({
    location: '',
    type: 'all',
    budget: [0, 5000000]
  });
  const [isSearched, setIsSearched] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  const filteredProperties = useMemo(() => {
    return properties.filter((p: any) => {
      const locationToMatch = isSearched ? searchQuery.location : searchLocation;
      const matchesLocation = p.location.toLowerCase().includes(locationToMatch.toLowerCase());
      const matchesType = searchQuery.type === 'all' || p.type.toLowerCase() === searchQuery.type.toLowerCase();
      const matchesBudget = p.price >= searchQuery.budget[0] && p.price <= searchQuery.budget[1];
      return matchesLocation && matchesType && matchesBudget;
    });
  }, [searchLocation, searchQuery, isSearched]);

  const handleDiscover = () => {
    setSearchQuery(prev => ({ ...prev, location: searchLocation }));
    setIsSearched(true);
    const collectionElement = document.getElementById('properties-collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProperties = isSearched ? filteredProperties : properties.slice(0, 3);

  return (
    <div className="text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-110"
            alt="Luxury Estate Background"
          />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            className="w-full h-full object-cover brightness-[0.4] scale-110 relative z-10"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-with-a-pool-drone-shot-32865-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
        
        <motion.div style={{ opacity: opacityHero }} className="relative z-10 max-w-7xl mx-auto text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-24 h-px bg-gold-500 mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-tighter leading-[0.9] text-white">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
                >
                  Find Your
                </motion.span>
              </span>
              <span className="block overflow-hidden py-2 italic font-normal gold-text">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block p-2"
                >
                  Dream Property
                </motion.span>
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white/60 text-sm md:text-lg font-light uppercase tracking-[0.4em] mb-12 max-w-2xl mx-auto"
            >
              Curating the world's most exceptional living experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="max-w-xl mx-auto"
            >
              <div className="glass-gold backdrop-blur-3xl border border-gold-500/20 p-2 rounded-2xl flex items-center shadow-2xl relative group">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
                <div className="flex-1 flex items-center gap-4 px-6">
                  <Search className="text-gold-500/50" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by city or country..."
                    className="w-full bg-transparent border-none outline-none text-white italic font-serif text-lg py-4 placeholder:text-white/20"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleDiscover();
                    }}
                  />
                </div>
                <Button 
                  onClick={handleDiscover}
                  className="bg-gold-500 hover:bg-gold-600 text-black px-8 h-12 rounded-xl text-[9px] uppercase font-extrabold tracking-widest transition-all hover:scale-105"
                >
                  Discover
                </Button>
              </div>
              <div className="mt-4 flex justify-center gap-6">
                 {['London', 'Dubai', 'Paris', 'New York'].map(city => (
                   <button 
                     key={city}
                     onClick={() => {
                        setSearchLocation(city);
                        setSearchQuery(prev => ({ ...prev, location: city }));
                        setIsSearched(true);
                     }}
                     className="text-[8px] uppercase tracking-[0.2em] text-white/30 hover:text-gold-500 transition-colors font-bold"
                   >
                     {city}
                   </button>
                 ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Architectural Masterpieces Section (Redesigned) */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-gold-500" />
                  <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.6em]">The Private Reserve</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-serif leading-[0.8] italic">
                  Architectural <br />
                  <span className="gold-text">Masterpieces</span>
                </h2>
              </div>
              
              <p className="text-white/50 font-light text-xl leading-relaxed max-w-lg">
                We provide a direct conduit to the world's most significant off-market estates. Our curated selection represents the pinnacle of residential design and historic preservation.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-white italic">4.2B<span className="text-gold-500 ml-1">+</span></h4>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Closed Asset Value</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif text-white italic">12<span className="text-gold-500 ml-1">+</span></h4>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Global Jurisdictions</p>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/contact">
                  <Button className="group relative bg-white hover:bg-gold-500 text-black font-extrabold uppercase tracking-widest text-[10px] px-12 h-16 rounded-none transition-all duration-500">
                    <span className="relative z-10 flex items-center gap-4">
                      Request Private Access <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10 relative p-1.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover rounded-[3.8rem] brightness-[0.7] group-hover:scale-105 transition-transform duration-2000" 
                  alt="Primary Masterpiece" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 p-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] space-y-4">
                  <Badge className="bg-gold-500 text-black font-black text-[8px] uppercase tracking-widest px-4 py-1.5 rounded-full">Coming Q3 2024</Badge>
                  <h3 className="text-3xl font-serif italic text-white leading-tight">The Obsidian <br /> Crown, Malibu</h3>
                </div>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="properties-collection" className="py-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.3em]">Exquisite Selections</span>
              <h2 className="text-5xl md:text-7xl font-serif">Featured Estates</h2>
            </div>
            <Link to="/listings" className="text-white hover:text-gold-500 transition-colors uppercase text-[10px] font-bold tracking-[0.4em] flex items-center gap-3">
              Explore All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {featuredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {featuredProperties.length === 0 && (
            <div className="text-center py-24 space-y-6">
              <h3 className="text-3xl font-serif italic text-white/40">No estates found in this criteria.</h3>
              <Button 
                variant="outline" 
                className="border-gold-500/30 text-gold-500 hover:bg-gold-500/10 rounded-none h-14 px-8"
                onClick={() => {
                  setSearchQuery({ location: '', type: 'all', budget: [0, 5000000] });
                  setIsSearched(false);
                }}
              >
                Clear Preferences
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-[#0a0a09] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <Quote size={48} className="mx-auto mb-12 text-gold-500/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-gold-100">
                  "{testimonials[testimonialIdx].text}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={testimonials[testimonialIdx].image} 
                    className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all border-2 border-gold-500/30 p-1"
                    alt={testimonials[testimonialIdx].name}
                  />
                  <div>
                    <h4 className="font-bold text-gold-500 uppercase tracking-widest text-xs">{testimonials[testimonialIdx].name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{testimonials[testimonialIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-12 mt-16">
               <button 
                onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="text-gold-500/40 hover:text-gold-500 transition-colors"
               >
                 <ArrowLeft size={32} strokeWidth={1} />
               </button>
               <button 
                onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                className="text-gold-500/40 hover:text-gold-500 transition-colors"
               >
                 <ArrowRight size={32} strokeWidth={1} />
               </button>
            </div>
        </div>
      </section>

      {/* Luxury Agents Section */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.4em]">Our Concierge Elite</span>
            <h2 className="text-5xl md:text-7xl font-serif">Trusted Advisors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent, idx) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden aspect-[4/5] bg-[#0a0a08]"
              >
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-1">{agent.name}</h3>
                  <p className="text-gold-500 text-[10px] uppercase font-bold tracking-widest mb-6">{agent.role}</p>
                  <Link 
                    to="/contact"
                    className="w-full bg-white text-black font-bold uppercase text-[10px] tracking-widest h-12 rounded-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg"
                  >
                    Private Liaison
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
