import { motion, AnimatePresence } from "motion/react";
import { MapPin, Home, DollarSign, Search, ChevronDown, X, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../constants";

// Dropdown option data
const LOCATIONS = [
  { value: "all", label: "All Locations" },
  { value: "dubai-marina", label: "Dubai Marina, UAE" },
  { value: "palm-jumeirah", label: "Palm Jumeirah, Dubai" },
  { value: "emirates-hills", label: "Emirates Hills" },
  { value: "marina-bay", label: "Marina Bay" },
  { value: "malibu-coast", label: "Malibu Coast, CA" },
  { value: "central-park", label: "Central Park West, NY" },
];

const PRICE_RANGES = [
  { value: "all", label: "Any Price" },
  { value: "0-5", label: "Under $5M" },
  { value: "5-10", label: "$5M — $10M" },
  { value: "10-20", label: "$10M — $20M" },
  { value: "20-35", label: "$20M — $35M" },
  { value: "35+", label: "$35M+" },
];

const PROPERTY_TYPES = [
  { value: "all", label: "All Types" },
  { value: "Villa", label: "Villa" },
  { value: "Penthouse", label: "Penthouse" },
  { value: "Apartment", label: "Apartment" },
];

// Custom dropdown component
function SearchDropdown({ 
  icon: Icon, 
  label, 
  options, 
  value, 
  onChange,
  id 
}: { 
  icon: any; 
  label: string; 
  options: { value: string; label: string }[]; 
  value: string; 
  onChange: (val: string) => void;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOption = options.find(o => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex-1 min-w-0" id={id}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-5 md:px-6 py-5 md:py-6 text-left hover:bg-charcoal/[0.02] transition-colors duration-300 rounded-xl group"
      >
        <div className="w-10 h-10 rounded-xl bg-gold/[0.1] border border-gold/[0.15] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/[0.15] transition-colors">
          <Icon size={16} className="text-gold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[8px] md:text-[9px] uppercase text-charcoal/40 font-bold tracking-[0.25em] mb-0.5">
            {label}
          </span>
          <div className="text-[12px] md:text-[13px] font-medium tracking-wide text-charcoal truncate">
            {selectedOption?.label}
          </div>
        </div>
        <ChevronDown 
          size={14} 
          className={`text-white/30 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} 
        />
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
            style={{ background: "rgba(10, 22, 40,0.98)", backdropFilter: "blur(30px)" }}
          >
            <div className="p-2 max-h-[260px] overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => { onChange(option.value); setIsOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[12px] font-medium tracking-wide transition-all duration-200 ${
                    value === option.value 
                      ? "bg-gold/[0.1] text-gold-dark" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const handleSearch = () => {
    // Navigate to buy page with search params
    const params = new URLSearchParams();
    if (location !== "all") params.set("location", location);
    if (priceRange !== "all") params.set("price", priceRange);
    if (propertyType !== "all") params.set("type", propertyType);
    navigate(`/buy?${params.toString()}`);
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
      
      {/* ═══ BACKGROUND LAYER ═══ */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-cream">
        {/* Primary luxury property video background */}
        <iframe
          src="https://www.youtube.com/embed/y9j-BL5ocW8?autoplay=1&mute=1&loop=1&playlist=y9j-BL5ocW8&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] opacity-80 pointer-events-none"
          style={{ border: 0 }}
          allow="autoplay; fullscreen"
        />
        
        {/* Cinematic overlays for ultra-high contrast and readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
      </div>

      {/* ═══ DECORATIVE ELEMENTS ═══ */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/10 z-20 hidden lg:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-gold/10 z-20 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-gold/10 z-20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/10 z-20 hidden lg:block" />
      
      {/* Floating gold particles */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{ left: `${15 + i * 18}%`, top: `${20 + i * 12}%` }}
            animate={{ 
              y: [0, -30, 0], 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 0.8,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col items-center text-center pt-32 md:pt-36">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-[11px] font-bold flex items-center gap-2">
            <Sparkles size={12} className="text-gold/60" />
            Ultra-Luxury Real Estate
            <Sparkles size={12} className="text-gold/60" />
          </span>
          <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-[-0.03em] mb-7 font-serif text-white drop-shadow-2xl"
        >
          Find Your <br className="sm:hidden" />
          <span className="gold-shimmer italic">Dream</span> Home
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-white max-w-2xl font-medium leading-[1.9] tracking-wide mb-6 drop-shadow-lg"
        >
          Discover extraordinary residences across the world's most prestigious addresses. Curated for the most discerning global citizens.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-8 md:gap-14 mb-14 md:mb-16"
        >
          {[
            { value: "120+", label: "Exclusive Estates" },
            { value: "$1.2B", label: "Portfolio Value" },
            { value: "15", label: "Global Markets" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold gold-text">{stat.value}</div>
              <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-charcoal/60 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ═══ POWERFUL SEARCH BAR ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-5xl mb-12 relative z-40"
        >
          <div className="rounded-3xl border border-white/10 shadow-[0_10px_80px_-20px_rgba(0,0,0,0.1)] relative"
               style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(30px)" }}>
            
            {/* Search Fields Row */}
            <div className="flex flex-col md:flex-row items-stretch relative z-30">
              
              {/* Location */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-white/10">
                <SearchDropdown
                  id="search-location"
                  icon={MapPin}
                  label="Location"
                  options={LOCATIONS}
                  value={location}
                  onChange={setLocation}
                />
              </div>

              {/* Price Range */}
              <div className="flex-1 border-b md:border-b-0 md:border-r border-white/10">
                <SearchDropdown
                  id="search-price"
                  icon={DollarSign}
                  label="Price Range"
                  options={PRICE_RANGES}
                  value={priceRange}
                  onChange={setPriceRange}
                />
              </div>

              {/* Property Type */}
              <div className="flex-1">
                <SearchDropdown
                  id="search-type"
                  icon={Home}
                  label="Property Type"
                  options={PROPERTY_TYPES}
                  value={propertyType}
                  onChange={setPropertyType}
                />
              </div>
            </div>
            
            {/* Search Button Row */}
            <div className="px-4 md:px-5 pb-4 md:pb-5 pt-1 relative z-10">
              <motion.button
                id="hero-search-btn"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSearch}
                className="w-full py-5 md:py-[22px] rounded-2xl font-bold uppercase text-[11px] md:text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-500 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-white hover:shadow-[0_0_40px_rgba(201,168,76,0.35)] relative overflow-hidden group"
              >
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-deep-blue/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Search size={16} strokeWidth={2.5} />
                <span className="relative z-10">Find Your Dream Home</span>
              </motion.button>
            </div>
          </div>

          {/* Popular Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-3 mt-6 flex-wrap"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-medium">Popular:</span>
            {["Palm Jumeirah Villas", "Dubai Marina Penthouse", "Malibu Beachfront"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setLocation(term.includes("Palm") ? "palm-jumeirah" : term.includes("Marina") ? "dubai-marina" : "malibu-coast");
                }}
                className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] uppercase tracking-[0.15em] text-white/40 hover:text-gold hover:border-gold/20 transition-all duration-300 font-medium"
              >
                {term}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ═══ BOTTOM SCROLL INDICATOR ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-medium">Scroll</span>
      </motion.div>

      {/* ═══ SLOW ZOOM KEYFRAMES ═══ */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
