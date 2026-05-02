import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bed, Bath, Square, MapPin, ArrowLeft, Heart, Share2, 
  CheckCircle2, Calendar, Phone, Mail, ChevronRight, 
  Map as MapIcon, Info, Users, Play, Download, Landmark, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import propertiesData from '@/data/properties.json';
import LeadGenModal from '@/components/LeadGenModal';

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'visit' | 'enquiry'>('enquiry');

  useEffect(() => {
    const foundProperty = propertiesData.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="pt-32 pb-24 text-center h-screen bg-black flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif text-white mb-6">Property not found</h2>
        <Link to="/listings">
          <Button className="bg-gold-500 hover:bg-gold-600 text-black px-8">Back to portfolio</Button>
        </Link>
      </div>
    );
  }

  const openModal = (type: 'visit' | 'enquiry') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="pt-32 pb-24 text-white bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <Link to="/listings" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Back to Portfolio</span>
          </Link>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => setIsSaved(!isSaved)}
              className={`border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 h-12 transition-all ${isSaved ? 'text-gold-500 border-gold-500/50' : 'text-white/60'}`}
            >
              <Heart size={18} className={`mr-2 ${isSaved ? 'fill-current' : ''}`} />
              <span className="text-[10px] uppercase font-bold tracking-widest">{isSaved ? 'Saved' : 'Save'}</span>
            </Button>
            <Button variant="outline" className="text-white/60 border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 h-12">
              <Share2 size={18} className="mr-2" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Share</span>
            </Button>
          </div>
        </div>

        {/* Hero Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 relative aspect-[21/9] lg:aspect-[16/8] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={property.images?.[activeImage] || property.image} 
                alt={property.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div className="space-y-4">
                <Badge className="bg-gold-500 text-black font-extrabold uppercase tracking-[0.2em] text-[9px] px-4 py-1.5 rounded-full">
                  {property.type}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-serif leading-none italic">{property.title}</h1>
                <p className="flex items-center gap-3 text-white/70 italic font-serif">
                  <MapPin size={18} className="text-gold-500" />
                  {property.location}
                </p>
              </div>
              
              <div className="flex gap-2">
                {property.virtualTour && (
                  <Button 
                    className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-gold-500/50 text-white rounded-full group px-6 h-12"
                    onClick={() => window.open(property.virtualTour, '_blank')}
                  >
                    <Play size={16} className="mr-2 fill-gold-500 text-gold-500" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Virtual Tour</span>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 h-full">
            {property.images.map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveImage(idx)}
                className={`relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${
                  activeImage === idx ? 'border-gold-500 scale-100 shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {/* Essential Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-white/[0.03] border border-white/5 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="space-y-2 relative">
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/50">Premium Investment</p>
                <p className="text-3xl font-serif font-bold gold-text">£{(property.price / 1000000).toFixed(2)}M</p>
              </div>
              <div className="space-y-2 relative">
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/50">Total Beds</p>
                <div className="flex items-center gap-3">
                  <Bed size={22} className="text-gold-500/70" />
                  <span className="text-2xl font-serif italic text-white/90">{property.beds || property.bhk}</span>
                </div>
              </div>
              <div className="space-y-2 relative">
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/50">Full Baths</p>
                <div className="flex items-center gap-3">
                  <Bath size={22} className="text-gold-500/70" />
                  <span className="text-2xl font-serif italic text-white/90">{property.baths}</span>
                </div>
              </div>
              <div className="space-y-2 relative">
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/50">Total Space</p>
                <div className="flex items-center gap-3">
                  <Square size={22} className="text-gold-500/70" />
                  <span className="text-2xl font-serif italic text-white/90">{property.sqft.toLocaleString()}</span>
                  <span className="text-[10px] font-sans text-white/40 font-bold tracking-widest mt-1">FT²</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-2">
                <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.4em]">Asset Overview</span>
                <h2 className="text-4xl font-serif italic">Architecture & Narratives</h2>
              </div>
              <p className="text-white/60 leading-relaxed font-light text-xl italic font-serif">
                "{property.description}"
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-12">
              <h2 className="text-2xl font-serif italic border-l-2 border-gold-500 pl-6">Signature Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {(property.amenities || property.features).map((amenity: string, idx: number) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-gold-500/40 group-hover:bg-gold-500/5 transition-all duration-500">
                      <CheckCircle2 size={18} className="text-gold-500/40 group-hover:text-gold-500 transition-colors" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floor Plan Section */}
            {property.floorPlan && (
              <div className="space-y-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif italic">The Blueprints</h2>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Architectural Floor Plans</p>
                  </div>
                  <Button variant="outline" className="text-white/60 border-white/10 hover:bg-white/5 rounded-full px-6 gap-2">
                    <Download size={16} /> <span className="text-[10px] font-bold uppercase">Download Brochure</span>
                  </Button>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 overflow-hidden group">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={property.floorPlan} 
                    alt="Floor Plan" 
                    className="w-full h-auto rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-1000 cursor-zoom-in"
                  />
                </div>
              </div>
            )}

            {/* Nearby Section */}
            {property.nearby && (
              <div className="space-y-10">
                 <h2 className="text-2xl font-serif italic border-l-2 border-gold-500 pl-6">Distinguished Neighbourhood</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.nearby.map((point: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-gold-500" />
                            <span className="font-serif italic text-white/80">{point.name}</span>
                         </div>
                         <span className="text-[10px] font-bold tracking-widest text-white/30">{point.dist}</span>
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div className="sticky top-32 space-y-8">
              {/* Agent Advisor Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-gold p-[1px] rounded-[3rem]"
              >
                <div className="bg-[#0a0a09] backdrop-blur-3xl p-10 rounded-[2.9rem] space-y-10">
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-2 border-gold-500/30 p-1 mx-auto">
                        <img 
                          src={property.agent.image} 
                          alt={property.agent.name} 
                          className="w-full h-full object-cover rounded-[2rem] transition-all duration-700" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gold-500 text-black p-2 rounded-xl shadow-xl">
                        <ShieldCheck size={16} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-[0.4em] text-gold-500/60 mb-2">Lead Strategist</p>
                      <h3 className="text-3xl font-serif leading-none italic">{property.agent.name}</h3>
                      <p className="text-white/40 text-[10px] tracking-[0.2em] font-bold uppercase mt-4">Verified Estate Advisor</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={() => openModal('enquiry')}
                      className="w-full h-16 bg-white text-black hover:bg-white/90 rounded-2xl font-extrabold text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02]"
                    >
                      Private Inquiry
                    </Button>
                    <Button 
                      onClick={() => openModal('visit')}
                      className="w-full h-16 bg-gold-500 hover:bg-gold-600 text-black rounded-2xl font-extrabold text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02]"
                    >
                      Book Site Visit
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/5">
                    <a href={`tel:${property.agent.phone}`} className="flex flex-col items-center gap-3 p-4 bg-white/[0.03] rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                      <Phone size={18} className="text-gold-500/60" />
                      <span className="text-[8px] uppercase font-bold tracking-widest text-white/40">Call Asset</span>
                    </a>
                    <a href={`mailto:${property.agent.email}`} className="flex flex-col items-center gap-3 p-4 bg-white/[0.03] rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                      <Mail size={18} className="text-gold-500/60" />
                      <span className="text-[8px] uppercase font-bold tracking-widest text-white/40">Mail Advisor</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Summary */}
              <div className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.02] space-y-10 backdrop-blur-xl">
                 <div className="space-y-2">
                    <h4 className="text-sm font-serif italic text-white/80">Investment Breakdown</h4>
                    <div className="w-12 h-px bg-gold-500/40" />
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                       <span className="text-white/40 flex items-center gap-3"><Landmark size={14} className="text-gold-500/40" /> Asset Type</span>
                       <span className="text-white">{property.type}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                       <span className="text-white/40 flex items-center gap-3"><Users size={14} className="text-gold-500/40" /> Interest Volume</span>
                       <span className="text-gold-500">Premium High</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                       <span className="text-white/40 flex items-center gap-3"><MapIcon size={14} className="text-gold-500/40" /> Market Tier</span>
                       <span className="text-white">Tier 1 Elite</span>
                    </div>
                 </div>

                 <Link to="/calculator">
                    <Button variant="ghost" className="w-full h-14 border border-gold-500/20 text-gold-500 hover:bg-gold-500 hover:text-black transition-all rounded-xl text-[9px] font-extrabold uppercase tracking-widest">
                       Mortgage Projection
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadGenModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        propertyTitle={property.title}
        type={modalType}
      />
    </div>
  );
}
