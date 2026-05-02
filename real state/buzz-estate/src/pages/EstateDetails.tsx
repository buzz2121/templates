import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Maximize, 
  BedDouble, 
  Bath, 
  ShieldCheck, 
  Share2,
  Heart,
  Car,
  MapPin,
  Download,
  Phone,
  MessageCircle,
  ChevronRight,
  Info
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { ESTATES } from '../data';
import PropertyCard from '../components/PropertyCard';

export default function EstateDetails() {
  const { id } = useParams();
  const estate = ESTATES.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!estate) return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
       <h1 className="text-4xl font-serif">Project Not Found</h1>
       <Link to="/estates">
         <Button className="bg-brand-gold text-white rounded-none h-14 px-10 uppercase tracking-widest font-bold text-xs">Back to Portfolio</Button>
       </Link>
    </div>
  );

  return (
    <div className="bg-white pt-20">
      {/* Immersive Gallery */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 flex">
           <div className="flex-grow h-full overflow-hidden">
             <img src={estate.images[0]} className="w-full h-full object-cover" alt="Hero" />
           </div>
           <div className="hidden lg:grid grid-rows-2 gap-1 w-[30%] border-l-4 border-white">
              <div className="overflow-hidden">
                <img src={estate.images[1]} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="relative overflow-hidden group">
                <img src={estate.images[0]} className="w-full h-full object-cover brightness-50" alt="Detail 2" />
                <button className="absolute inset-0 flex items-center justify-center text-white text-[10px] uppercase font-black tracking-[0.3em] group-hover:scale-110 transition-transform">
                   View Gallery (12)
                </button>
              </div>
           </div>
        </div>
        <div className="absolute top-10 left-10 z-20">
           <Link to="/estates" className="bg-white/10 backdrop-blur-md text-white p-4 flex items-center gap-3 hover:bg-brand-gold transition-colors group">
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
             <span className="text-[10px] uppercase font-bold tracking-widest">Back to Projects</span>
           </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">
             <div className="space-y-6">
                <div className="flex justify-between items-start">
                   <div className="space-y-3">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic">{estate.location}</span>
                      <h1 className="text-5xl lg:text-7xl font-serif tracking-tighter leading-none">{estate.name}</h1>
                   </div>
                   <div className="flex gap-4">
                      <Button variant="outline" className="rounded-full border-brand-line w-12 h-12 p-0 hover:text-brand-gold"><Heart size={18} /></Button>
                      <Button variant="outline" className="rounded-full border-brand-line w-12 h-12 p-0 hover:text-brand-gold"><Share2 size={18} /></Button>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-brand-line">
                   <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold">Project Type</p>
                      <p className="text-lg font-serif">{estate.type}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold">Investment</p>
                      <p className="text-lg font-serif text-brand-gold">{estate.price}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold">Total Area</p>
                      <p className="text-lg font-serif">{estate.area}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold">Suites</p>
                      <p className="text-lg font-serif">{estate.bedrooms} BHK</p>
                   </div>
                </div>
             </div>

             {/* Overview */}
             <div className="space-y-8">
                <h3 className="text-3xl font-serif uppercase tracking-tight">Overview</h3>
                <p className="text-brand-gray text-lg leading-relaxed max-w-3xl">
                   {estate.description} Experience luxury redefined with Buzz Estate's signature design language. Every detail in {estate.name} has been curated to offer a high-couture aesthetic, blending urban sophistication with timeless elegance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="bg-brand-surface p-8 border border-brand-line flex items-center justify-between group cursor-pointer hover:border-brand-gold transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="text-brand-gold"><Download size={24} /></div>
                         <h4 className="text-sm font-bold uppercase tracking-widest">Download Brochure</h4>
                      </div>
                      <ChevronRight className="text-brand-gray group-hover:translate-x-1 transition-transform" />
                   </div>
                   <div className="bg-brand-surface p-8 border border-brand-line flex items-center justify-between group cursor-pointer hover:border-brand-gold transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="text-brand-gold"><MapPin size={24} /></div>
                         <h4 className="text-sm font-bold uppercase tracking-widest">Project Location</h4>
                      </div>
                      <ChevronRight className="text-brand-gray group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </div>

             {/* Amenities */}
             <div className="space-y-10">
                <h3 className="text-3xl font-serif uppercase tracking-tight">World-Class Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12">
                   {estate.features.map((feature, i) => (
                      <div key={i} className="flex flex-col gap-4">
                         <div className="w-12 h-12 bg-brand-surface border border-brand-line flex items-center justify-center text-brand-gold">
                            <ShieldCheck size={24} />
                         </div>
                         <span className="text-[10px] uppercase font-black tracking-widest text-brand-dark">{feature}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Payment Plan Placeholder */}
             <div className="bg-brand-dark text-white p-12 rounded-sm space-y-8">
                <h3 className="text-3xl font-serif">Attractive Payment Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                   <div className="space-y-2">
                      <h4 className="text-4xl font-serif text-brand-gold italic">10%</h4>
                      <p className="text-[9px] uppercase tracking-widest font-black text-white/50">Deposit</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-4xl font-serif text-brand-gold italic">70%</h4>
                      <p className="text-[9px] uppercase tracking-widest font-black text-white/50">During Construction</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-4xl font-serif text-brand-gold italic">20%</h4>
                      <p className="text-[9px] uppercase tracking-widest font-black text-white/50">On Completion</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column - Sticky Form */}
          <div className="relative">
             <div className="sticky top-32 space-y-6">
                <div className="bg-white border border-brand-line p-10 shadow-luxury space-y-8">
                   <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-serif tracking-tight">ENQUIRE NOW</h3>
                      <p className="text-xs text-brand-gray font-medium tracking-wide">Register your interest and our property consultant will reach out shortly.</p>
                   </div>
                   
                   <form className="space-y-4">
                      <Input placeholder="FULL NAME" className="h-14 rounded-none bg-brand-surface border-brand-line text-[10px] placeholder:text-brand-gray font-bold tracking-widest px-6" />
                      <Input placeholder="EMAIL ADDRESS" className="h-14 rounded-none bg-brand-surface border-brand-line text-[10px] placeholder:text-brand-gray font-bold tracking-widest px-6" />
                      <div className="flex gap-2">
                         <div className="w-20">
                            <Input placeholder="+971" className="h-14 rounded-none bg-brand-surface border-brand-line text-[10px] placeholder:text-brand-gray font-bold tracking-widest px-4 text-center" />
                         </div>
                         <div className="flex-grow">
                            <Input placeholder="PHONE NUMBER" className="h-14 rounded-none bg-brand-surface border-brand-line text-[10px] placeholder:text-brand-gray font-bold tracking-widest px-6" />
                         </div>
                      </div>
                      <Button className="w-full bg-brand-gold text-white rounded-none h-16 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-brand-dark transition-all duration-700 shadow-gold">
                         REGISTER INTEREST
                      </Button>
                   </form>

                   <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="rounded-none h-14 border-green-600/20 text-green-600 hover:bg-green-600 hover:text-white transition-all text-[10px] font-bold tracking-widest">
                         <MessageCircle size={16} className="mr-2" /> WHATSAPP
                      </Button>
                      <Button variant="outline" className="rounded-none h-14 border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-white transition-all text-[10px] font-bold tracking-widest">
                         <Phone size={16} className="mr-2" /> CALL US
                      </Button>
                   </div>
                </div>

                <div className="bg-brand-surface border border-brand-line p-6 flex items-center gap-4">
                   <div className="w-10 h-10 border border-brand-gold flex items-center justify-center text-brand-gold">
                      <Info size={18} />
                   </div>
                   <p className="text-[10px] text-brand-gray leading-relaxed font-bold tracking-wide uppercase">
                      Investment Protection <br/> Guaranteed by RERA
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Suggested Projects */}
      <section className="py-32 bg-brand-surface mt-32 border-t border-brand-line">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Suggested for you</span>
                <h2 className="text-4xl lg:text-6xl font-serif tracking-tighter uppercase leading-none">Similar <br/> <span className="italic text-brand-gold">Projects</span></h2>
              </div>
              <Link to="/estates" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-brand-gold pb-2">VIEW ALL PROJECTS</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ESTATES.slice(0, 4).map((e) => (
                e.id !== estate.id && <PropertyCard key={e.id} estate={e} />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
