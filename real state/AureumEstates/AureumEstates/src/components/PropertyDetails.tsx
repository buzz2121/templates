import { motion, AnimatePresence } from "framer-motion";
import { 
  X, MapPin, BedDouble, Bath, Maximize, CheckCircle2, 
  Calendar, Phone, Mail, Share2, Heart, Award, ShieldCheck, Sparkles
} from "lucide-react";
import { Property } from "../constants";

interface PropertyDetailsProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetails({ property, isOpen, onClose }: PropertyDetailsProps) {
  if (!property) return null;

  const features = [
    "High-speed Private Elevator",
    "Smart Home Automation",
    "Gourmet Chef's Kitchen",
    "Floor-to-Ceiling Panoramic Windows",
    "Private Infinity Pool Access",
    "24/7 Concierge Service",
    "State-of-the-art Home Theater",
    "Climate Controlled Wine Cellar"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md text-white md:text-charcoal hover:bg-gold hover:text-white rounded-full transition-all duration-300 border border-white/20 md:border-charcoal/5"
            >
              <X size={20} />
            </button>

            {/* Left: Image Gallery (Visual Focus) */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden group">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex gap-2 mb-3">
                  <span className="px-4 py-1 bg-gold text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {property.tag}
                  </span>
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/20">
                    {property.type}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold italic mb-2 leading-tight">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 opacity-80">
                  <MapPin size={14} />
                  <span className="text-xs uppercase tracking-widest font-medium">{property.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Info Section */}
            <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="flex items-center justify-between mb-8">
                <div className="text-3xl font-serif font-bold gold-text">
                  {property.price}
                </div>
                <div className="flex gap-3">
                  <button className="p-3 bg-stone-50 text-charcoal/40 hover:text-gold rounded-full transition-colors border border-stone-100">
                    <Share2 size={18} />
                  </button>
                  <button className="p-3 bg-stone-50 text-charcoal/40 hover:text-gold rounded-full transition-colors border border-stone-100">
                    <Heart size={18} />
                  </button>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-stone-50 p-5 rounded-3xl border border-stone-100 flex flex-col items-center gap-2">
                  <BedDouble size={20} className="text-gold" />
                  <span className="text-lg font-bold text-charcoal">{property.beds}</span>
                  <span className="text-[9px] uppercase tracking-wider text-charcoal/40 font-bold">Beds</span>
                </div>
                <div className="bg-stone-50 p-5 rounded-3xl border border-stone-100 flex flex-col items-center gap-2">
                  <Bath size={20} className="text-gold" />
                  <span className="text-lg font-bold text-charcoal">{property.baths}</span>
                  <span className="text-[9px] uppercase tracking-wider text-charcoal/40 font-bold">Baths</span>
                </div>
                <div className="bg-stone-50 p-5 rounded-3xl border border-stone-100 flex flex-col items-center gap-2">
                  <Maximize size={20} className="text-gold" />
                  <span className="text-lg font-bold text-charcoal">{property.sqft}</span>
                  <span className="text-[9px] uppercase tracking-wider text-charcoal/40 font-bold">Sq Ft</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-gold" /> The Residence
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm md:text-base">
                  Experience unparalleled luxury in this masterfully designed {property.type}. Located in the heart of {property.location.split(',')[0]}, this property combines contemporary architecture with timeless elegance. Every detail has been curated to provide a sophisticated living experience for those who demand nothing but the finest.
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal mb-6">Signature Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-stone-600">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="text-gold" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gold/[0.03] border border-gold/10">
                  <Award className="text-gold" size={24} />
                  <div>
                    <div className="text-[10px] font-bold text-gold uppercase tracking-widest">Certified</div>
                    <div className="text-xs text-stone-500">Premium Listing</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-charcoal/[0.03] border border-charcoal/10">
                  <ShieldCheck className="text-charcoal/40" size={24} />
                  <div>
                    <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Secure</div>
                    <div className="text-xs text-stone-500">Vetted Property</div>
                  </div>
                </div>
              </div>

              {/* Contact / CTA */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal mb-6">Inquire About This Estate</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-4 bg-charcoal text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-500 group">
                    <Calendar size={16} /> Schedule a Private View
                  </button>
                  <button className="flex items-center justify-center gap-3 py-4 bg-gold text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gold-dark transition-colors duration-500">
                    <Phone size={16} /> Call Specialist
                  </button>
                </div>
                <button className="w-full flex items-center justify-center gap-3 py-4 bg-stone-50 text-charcoal/60 border border-stone-200 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all">
                  <Mail size={16} /> Message Advisor
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
