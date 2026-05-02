import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, Search, MapPin, Building, Home as HomeIcon, Star, TrendingUp, ShieldCheck, Globe2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ESTATES, DESTINATIONS } from '../data';
import PropertyCard from '../components/PropertyCard';

gsap.registerPlugin(ScrollTrigger);

const WHY_INVEST = [
  { icon: TrendingUp, title: "High ROI", desc: "Consistently outperform global markets with double-digit returns." },
  { icon: ShieldCheck, title: "Tax Free", desc: "0% Personal Income Tax. 0% Capital Gains Tax." },
  { icon: Star, title: "Golden Visa", desc: "Benefit from 10-year residency for investors and their families." },
  { icon: Globe2, title: "Global Hub", desc: "Strategic bridge between East and West for business and trade." },
];

const COLLABORATIONS = [
  { name: 'roberto cavalli', logo: 'Roberto Cavalli' },
  { name: 'mandarin oriental', logo: 'Mandarin Oriental' },
  { name: 'de grisogono', logo: 'de GRISOGONO' },
  { name: 'chelsea fc', logo: 'Chelsea FC' },
  { name: 'paramount', logo: 'Paramount' },
  { name: 'trump', logo: 'Trump' },
  { name: 'radisson', logo: 'Radisson' },
  { name: 'rotana', logo: 'Rotana' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out"
      });

      // Scroll Animations for sections
      gsap.utils.toArray('.reveal-section').forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out"
        });
      });

      // Parallax images
      gsap.utils.toArray('.parallax-image').forEach((img: any) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          y: -100,
          scale: 1.1,
          ease: "none"
        });
      });

      // Image reveal animation
      gsap.utils.toArray('.img-reveal').forEach((container: any) => {
        const img = container.querySelector('img');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        tl.from(container, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.5,
          ease: "power4.inOut"
        });
        
        if (img) {
          tl.from(img, {
            scale: 1.4,
            duration: 1.5,
            ease: "power4.inOut"
          }, 0);
        }
      });

      // Masonry items float - more pronounced
      gsap.to(".masonry-item", {
        scrollTrigger: {
          trigger: ".masonry-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        },
        y: (i) => i % 2 === 0 ? -60 : 60,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white text-brand-dark overflow-x-hidden">
      {/* BUZZ ESTATE Style Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-110 parallax-image"
            alt="Dubai Skyline"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="hero-content relative z-20 max-w-5xl space-y-8 mt-12">
          <h1 className="text-white text-5xl lg:text-9xl font-serif leading-[1.1] uppercase tracking-tighter">
            Live The <br /> <span className="text-brand-gold italic">Luxury</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-2xl font-light tracking-wide max-w-3xl mx-auto">
            Experience architectural marvels and high-couture living in the world's most prestigious locations.
          </p>

          {/* Quick Search Bar */}
          <div className="bg-white p-2 lg:p-3 mt-12 grid grid-cols-1 md:grid-cols-4 gap-2 items-center max-w-5xl mx-auto shadow-2xl">
             <div className="relative border-r border-brand-line px-6 py-4">
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[8px] uppercase tracking-widest font-black text-brand-gold">Location</span>
                 <select className="w-full bg-transparent text-brand-dark border-none focus:ring-0 appearance-none text-xs font-bold tracking-widest cursor-pointer p-0">
                   <option>All Locations</option>
                   <option>Dubai Marina</option>
                   <option>Palm Jumeirah</option>
                   <option>Business Bay</option>
                 </select>
               </div>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray/30" size={14} />
             </div>
             <div className="relative border-r border-brand-line px-6 py-4">
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[8px] uppercase tracking-widest font-black text-brand-gold">Type</span>
                 <select className="w-full bg-transparent text-brand-dark border-none focus:ring-0 appearance-none text-xs font-bold tracking-widest cursor-pointer p-0">
                   <option>All Projects</option>
                   <option>Apartments</option>
                   <option>Villas</option>
                   <option>Townhouses</option>
                 </select>
               </div>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray/30" size={14} />
             </div>
             <div className="relative px-6 py-4">
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[8px] uppercase tracking-widest font-black text-brand-gold">Beds</span>
                 <select className="w-full bg-transparent text-brand-dark border-none focus:ring-0 appearance-none text-xs font-bold tracking-widest cursor-pointer p-0">
                   <option>Any</option>
                   <option>1-3 BHK</option>
                   <option>4+ BHK</option>
                 </select>
               </div>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray/30" size={14} />
             </div>
             <Button className="bg-brand-dark text-white rounded-none h-16 w-full uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-brand-gold transition-all duration-500">
               <Search className="mr-3 h-4 w-4" /> SEARCH PROPERTIES
             </Button>
          </div>
        </div>
      </section>

      {/* Collaborations Banner - Exact Copy Style */}
      <section className="py-16 border-b border-brand-line overflow-hidden bg-white">
        <div className="flex whitespace-nowrap overflow-hidden group items-center">
          <div className="flex animate-marquee gap-24 items-center px-12">
            {COLLABORATIONS.map((brand, i) => (
              <div key={i} className="flex flex-col items-center group/brand">
                 <span className="text-[14px] lg:text-[18px] font-sans font-black text-brand-dark/30 uppercase tracking-[0.3em] group-hover/brand:text-brand-dark transition-colors duration-500 whitespace-nowrap">
                   {brand.logo}
                 </span>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {COLLABORATIONS.map((brand, i) => (
              <div key={`dup-${i}`} className="flex flex-col items-center group/brand">
                 <span className="text-[14px] lg:text-[18px] font-sans font-black text-brand-dark/30 uppercase tracking-[0.3em] group-hover/brand:text-brand-dark transition-colors duration-500 whitespace-nowrap">
                   {brand.logo}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnership Masonry Grid - Exact Copy Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
             {/* Roberto Cavalli Column */}
             <div className="reveal-section group relative h-[700px] overflow-hidden img-reveal">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 parallax-image" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-white/80 backdrop-blur-sm p-4 w-40 text-center">
                      <span className="text-xl font-serif text-brand-dark lowercase leading-none">roberto cavalli</span>
                   </div>
                </div>
             </div>

             {/* de Grisogono Column - Central Focus */}
             <div className="reveal-section group relative h-[850px] overflow-hidden lg:-mt-12 img-reveal">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 parallax-image" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="text-center text-white">
                      <span className="text-sm font-serif lowercase italic block mb-2 opacity-60">de GRISOGONO</span>
                      <div className="h-[1px] w-20 bg-brand-gold mx-auto" />
                   </div>
                </div>
             </div>

             {/* Chelsea Column */}
             <div className="reveal-section group relative h-[750px] overflow-hidden lg:mt-24 img-reveal">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 parallax-image" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-black text-white text-center leading-tight">CHELSEA <br/> FOOTBALL CLUB</span>
                   </div>
                </div>
             </div>

             {/* Mandarin Oriental Column */}
             <div className="reveal-section group relative h-[700px] overflow-hidden img-reveal">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 parallax-image" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="text-center text-white">
                      <span className="text-lg font-serif uppercase tracking-[0.2em]">Mandarin Oriental</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Communities - BUZZ ESTATE Style */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-section">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-black italic">Elite Portfolios</span>
              <h2 className="text-5xl lg:text-8xl font-serif tracking-tighter uppercase leading-none">Our Iconic <br/> <span className="italic text-brand-gold">Communities</span></h2>
            </div>
            <p className="text-brand-gray text-[10px] uppercase tracking-widest font-bold max-w-xs leading-relaxed border-l border-brand-gold pl-6">
               Shaping the future of master community living with integrated developments across Dubai's most strategic locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Buzz Hills', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80', tag: 'Luxury Villas' },
              { name: 'Buzz Lagoons', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80', tag: 'Mediterrenian Living' },
              { name: 'Safa Two', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', tag: 'Branded Residences' }
            ].map((community, i) => (
              <motion.div 
                key={i}
                className="group relative h-[500px] lg:h-[650px] overflow-hidden cursor-pointer reveal-section"
                whileHover="hover"
              >
                <motion.img 
                  src={community.img} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  alt={community.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-2 opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                    {community.tag}
                  </p>
                  <h3 className="text-white text-3xl font-serif uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-500">
                    {community.name}
                  </h3>
                </div>
                <div className="absolute top-10 right-10 border border-white/20 w-12 h-12 flex items-center justify-center text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-section space-y-8">
             <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">The Signature Experience</span>
             <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">Defining <br /> <span className="italic text-brand-gold">Global Luxury</span></h2>
             <p className="text-brand-gray text-lg leading-relaxed max-w-xl">
               Since 2002, Buzz Estate has been at the forefront of the Middle East's luxury real estate market, delivering award-winning residential, commercial and leisure properties. We create lifestyles that exceed expectations.
             </p>
             <div className="grid grid-cols-2 gap-10 border-t border-brand-line pt-10">
                <div>
                   <h3 className="text-4xl font-serif text-brand-gold italic">100+</h3>
                   <p className="text-[10px] uppercase tracking-widest font-black text-brand-gray mt-2">Projects Delivered</p>
                </div>
                <div>
                   <h3 className="text-4xl font-serif text-brand-gold italic">12+</h3>
                   <p className="text-[10px] uppercase tracking-widest font-black text-brand-gray mt-2">Global Cities</p>
                </div>
             </div>
          </div>
          <div className="relative reveal-section">
             <div className="aspect-[4/5] bg-brand-surface relative overflow-hidden shadow-luxury rounded-sm img-reveal">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" className="w-full h-full object-cover parallax-image" alt="Buzz Tower" />
             </div>
             <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-48 h-64 lg:w-64 lg:h-80 bg-brand-dark z-10 p-10 text-white flex flex-col justify-end space-y-4">
                <div className="w-12 h-12 border-2 border-brand-gold flex items-center justify-center rotate-45">
                   <Star className="text-brand-gold -rotate-45" size={24} />
                </div>
                <div>
                  <h4 className="text-3xl font-serif leading-none">Voted #1</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 mt-2">Luxury Developer 2024</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* New Launches */}
      <section className="py-24 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 reveal-section">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">New Milestones</span>
              <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">LATEST LAUNCHES</h2>
            </div>
            <Link to="/estates" className="text-xs uppercase tracking-[0.3em] font-bold flex items-center hover:text-brand-gold transition-colors group pb-2 border-b border-brand-gold/20">
              VIEW ALL PROJECTS <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ESTATES.map((estate) => (
              <PropertyCard key={estate.id} estate={estate} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 reveal-section">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Investment Insight</span>
            <h2 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter mt-4">WHY INVEST IN <br/> <span className="italic text-brand-gold">DUBAI?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {WHY_INVEST.map((item, i) => (
               <motion.div 
                 key={i}
                 className="p-10 border border-brand-line hover:border-brand-gold transition-colors duration-500 reveal-section group"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
               >
                 <div className="w-16 h-16 bg-brand-surface flex items-center justify-center mb-8 border border-brand-line group-hover:bg-brand-gold/10 transition-colors">
                    <item.icon className="text-brand-gold" size={32} />
                 </div>
                 <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight">{item.title}</h3>
                 <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Destinations */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 reveal-section">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Global Portfolio</span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter mt-4">International Landmarks</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest, i) => (
               <motion.div 
                 key={dest.id}
                 className="group relative h-[650px] overflow-hidden cursor-pointer"
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.2 }}
               >
                 <img src={dest.image} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-70" alt={dest.city} />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
                 <div className="absolute bottom-12 left-12 z-20 text-white">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="h-[1px] w-12 bg-brand-gold" />
                       <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold">{dest.country}</span>
                    </div>
                    <h3 className="text-5xl font-serif tracking-tighter">{dest.city}</h3>
                    <p className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 text-sm max-w-xs leading-relaxed text-white/60">
                      {dest.description} Our residences in {dest.city} represent the ultimate in high-couture living.
                    </p>
                    <Button variant="link" className="p-0 text-brand-gold uppercase tracking-widest text-[10px] font-bold mt-6">
                       Discover Projects <ArrowRight size={14} className="ml-2" />
                    </Button>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Centre / Journal Summary */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 reveal-section">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Media Centre</span>
                <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">Latest Highlights</h2>
              </div>
              <Link to="/journal" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-brand-gold pb-2">VIEW ALL NEWS</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="reveal-section group cursor-pointer">
                 <div className="aspect-[16/9] overflow-hidden mb-8">
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="News" />
                 </div>
                 <span className="text-[10px] uppercase text-brand-gold font-bold tracking-widest">Press Release • Jan 2026</span>
                 <h3 className="text-3xl font-serif mt-4 leading-tight group-hover:text-brand-gold transition-colors">Buzz Estate Unveils Landmark Development in Dubai Marina</h3>
                 <p className="text-brand-gray mt-4 text-sm leading-relaxed max-w-xl">
                   Discover the new architectural masterpiece that is set to redefine luxury living standards globally with its unique design and bespoke amenities.
                 </p>
              </div>
              <div className="reveal-section group cursor-pointer">
                 <div className="aspect-[16/9] overflow-hidden mb-8">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="News" />
                 </div>
                 <span className="text-[10px] uppercase text-brand-gold font-bold tracking-widest">Investment • Dec 2025</span>
                 <h3 className="text-3xl font-serif mt-4 leading-tight group-hover:text-brand-gold transition-colors">Institutional Demand for Luxury Branded Residences Surges</h3>
                 <p className="text-brand-gray mt-4 text-sm leading-relaxed max-w-xl">
                   Reporting record-breaking numbers for the final quarter, as international investors flock to secure luxury assets in the EMEA region.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Institutional Segment */}
      <section className="bg-brand-surface py-20 border-y border-brand-line">
         <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
               <div className="w-16 h-16 border border-brand-gold flex items-center justify-center">
                  <Star className="text-brand-gold" size={24} />
               </div>
               <div>
                  <h4 className="text-2xl font-serif uppercase tracking-tight">Institutional Investor Relations</h4>
                  <p className="text-brand-gray text-xs uppercase tracking-widest mt-1">Financial Transparency & Stewardship</p>
               </div>
            </div>
            <div className="flex gap-4">
               <Button className="bg-brand-dark text-white rounded-none px-10 h-14 uppercase tracking-widest text-[10px] font-bold">View Financials</Button>
               <Button variant="outline" className="border-brand-dark text-brand-dark rounded-none px-10 h-14 uppercase tracking-widest text-[10px] font-bold">Governance</Button>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 space-y-12">
           <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Ready to Elevate?</span>
           <h2 className="text-4xl lg:text-7xl font-serif italic max-w-5xl mx-auto leading-[1.2] tracking-tight">
             Experience the pinnacle of architecture and high-couture living.
           </h2>
           <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
             <Button className="bg-brand-gold text-white rounded-none px-16 h-18 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-brand-dark transition-all duration-700 shadow-gold">
               ENQUIRE NOW
             </Button>
             <Button variant="outline" className="border-brand-dark text-brand-dark rounded-none px-16 h-18 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-brand-gold hover:text-white transition-all duration-700">
               BOOK A VIRTUAL TOUR
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
