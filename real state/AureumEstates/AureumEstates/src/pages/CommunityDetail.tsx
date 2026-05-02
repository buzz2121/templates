import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { COMMUNITIES, PROPERTIES } from "../constants";
import { ArrowLeft, Check, TrendingUp, Calendar, Home } from "lucide-react";
import PropertyCard from "../components/PropertyCard";

export default function CommunityDetail() {
  const { id } = useParams();
  const community = COMMUNITIES.find(c => c.id === id);

  if (!community) {
    return (
      <div className="pt-40 text-center text-white">
        <h1 className="text-4xl font-serif">Community Not Found</h1>
        <Link to="/projects" className="text-gold hover:underline mt-4 block">Return to Projects</Link>
      </div>
    );
  }

    // Find properties that might belong to this community (mock filtered by location for demo feel)
  const communityProperties = PROPERTIES.filter(p => 
    p.location.toLowerCase().includes(community.location.toLowerCase().split(' ')[0]) || 
    p.location.toLowerCase().includes(community.name.toLowerCase().split(' ')[0])
  ).slice(0, 3);

  // Fallback if no matching properties
  const displayProperties = communityProperties.length > 0 ? communityProperties : PROPERTIES.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={community.image} 
          alt={community.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-10 pb-20 w-full relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/projects" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-8 group w-fit">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Back to Developments</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold bg-gold/10 px-4 py-1.5 rounded-full inline-block mb-4">
                {community.location}
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-9xl leading-[0.8] tracking-tighter italic font-serif gold-text pb-4">
                {community.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            <div className="space-y-10 text-center md:text-left">
               <h2 className="text-4xl md:text-5xl font-serif italic text-charcoal leading-tight">Mastering the <br/> <span className="gold-text">Investment Horizon</span></h2>
               <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left text-left">
                 {community.description}
               </p>
            </div>

            {/* Gallery Grid */}
            {community.gallery && community.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[300px] md:h-[500px]">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden glass relative group"
                >
                  <img src={community.gallery[0]} alt="interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
                <div className="grid grid-rows-2 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl overflow-hidden glass relative group"
                  >
                    <img src={community.gallery[1]} alt="amenity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl overflow-hidden glass relative group"
                  >
                    <img src={community.gallery[2]} alt="view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </motion.div>
                </div>
              </div>
            )}

            <div className="space-y-12">
               <h2 className="text-4xl font-serif italic text-charcoal">Signature Amenities</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {community.amenities.map((amenity, idx) => (
                    <motion.div 
                      key={idx} 
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      viewport={{ once: true }}
                      className="glass p-8 rounded-3xl flex items-center gap-6 border border-white/10 hover:border-gold/20 transition-all"
                    >
                       <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shadow-2xl">
                          <Check size={24} strokeWidth={1} />
                       </div>
                       <span className="text-lg text-charcoal/80 font-light tracking-wide">{amenity}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Stats & Quick Info */}
          <div className="lg:col-span-5 space-y-10">
             <div className="glass p-12 rounded-[3.5rem] space-y-12 border border-charcoal/10 sticky top-40 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-colors" />
                
                <h3 className="text-3xl font-serif italic gold-text">Asset Intelligence</h3>
                
                <div className="space-y-10">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-gold border border-gold/20 shadow-inner">
                         <Calendar size={28} strokeWidth={1} />
                      </div>
                      <div>
                         <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/80 mb-1">Handover Window</p>
                         <p className="text-xl font-light text-charcoal">Expected Q{Math.floor(Math.random() * 4) + 1} {community.stats.completions}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-gold border border-gold/20 shadow-inner">
                         <Home size={28} strokeWidth={1} />
                      </div>
                      <div>
                         <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/80 mb-1">Inventory Scope</p>
                         <p className="text-xl font-light text-charcoal">{community.stats.properties} Master Residences</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl text-gold border border-gold/20 shadow-inner">
                         <TrendingUp size={28} strokeWidth={1} />
                      </div>
                      <div>
                         <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/80 mb-1">Valuation Anchor</p>
                         <p className="text-xl font-light italic font-serif text-charcoal">Starting {community.stats.priceFrom}</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-charcoal py-6 rounded-3xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold-dark transition-all shadow-2xl flex items-center justify-center gap-4"
                  >
                     Register Interest
                  </motion.button>
                  <button className="w-full text-charcoal/80 text-[9px] uppercase tracking-widest font-bold hover:text-gold transition-colors py-2">
                     Enquire for Institutional Bulk-Purchase
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Properties in this Community */}
      <section className="py-40 bg-charcoal/[0.02] border-y border-charcoal/10">
         <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="space-y-4">
                  <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold">Featured Listings</span>
                  <h2 className="text-4xl md:text-6xl font-serif italic">Available <span className="gold-text">Assets</span></h2>
               </div>
               <Link to="/buy">
                  <button className="premium-pill">View All Sales</button>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {displayProperties.map((property, idx) => (
                 <PropertyCard key={property.id} property={property} index={idx} />
               ))}
            </div>
         </div>
      </section>
    </motion.div>
  );
}
