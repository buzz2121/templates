import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { X, Info, ChevronRight, Maximize2, Move } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Property, Hotspot } from "../constants";

interface VirtualTourProps {
  property: Property;
  onClose: () => void;
}

export default function VirtualTour({ property, onClose }: VirtualTourProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for panning
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoothed motion for cinematic feel
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to image transform
  const translateX = useTransform(smoothX, [0, 100], ["0%", "-50%"]);
  const translateY = useTransform(smoothY, [0, 100], ["0%", "-10%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xPerc = (e.clientX / innerWidth) * 100;
      const yPerc = (e.clientY / innerHeight) * 100;
      x.set(xPerc);
      y.set(yPerc);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6"
          >
            <div className="w-16 h-16 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
            <div className="text-center space-y-2">
              <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Initializing</p>
              <h2 className="text-2xl font-serif italic text-white/90">360° Virtual Environment</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panoramic Arena */}
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-none"
      >
        <motion.div 
          style={{ 
            x: translateX, 
            y: translateY,
            width: "200%", // Double width for panning
            height: "120%" // Extra height for vertical tilt
          }}
          className="relative transition-opacity duration-1000"
        >
          <img 
            src={property.tourImage || property.image} 
            alt="Panoramic View"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full object-cover select-none pointer-events-none brightness-100"
          />

          {/* Hotspots */}
          {!isLoading && property.hotspots?.map((hotspot) => (
            <motion.div
              key={hotspot.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              style={{ 
                left: `${hotspot.x}%`, 
                top: `${hotspot.y}%` 
              }}
              className="absolute z-10"
            >
              <div 
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveHotspot(hotspot)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="w-8 h-8 glass-gold rounded-full flex items-center justify-center animate-pulse border border-gold/40">
                   <div className="w-2 h-2 bg-deep-blue rounded-full" />
                </div>
                
                {/* Hotspot Label */}
                <AnimatePresence>
                  {activeHotspot?.id === hotspot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass p-6 rounded-2xl border border-gold/20 shadow-2xl backdrop-blur-xl"
                    >
                      <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Info size={12} /> {hotspot.label}
                      </h4>
                      <p className="text-white/90 text-xs font-light leading-relaxed">
                        {hotspot.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                         <span className="text-[9px] uppercase tracking-tighter text-white/90">Explore detail</span>
                         <ChevronRight size={14} className="text-gold" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interface Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-10 flex justify-between items-start pointer-events-auto">
          <div className="space-y-2">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">Exclusive Tour</span>
            <h2 className="text-3xl font-serif italic text-white/90">{property.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/90 hover:text-white transition-colors border border-white/10 group"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* HUD Elements */}
        <div className="absolute bottom-10 left-10 space-y-4 pointer-events-auto">
           <div className="glass px-6 py-4 rounded-3xl flex items-center gap-4 border border-white/5 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Move size={20} strokeWidth={1.5} className="animate-bounce" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold tracking-widest text-white">Orientation</p>
                <p className="text-xs text-white">Move cursor to navigate</p>
              </div>
           </div>
        </div>

        <div className="absolute bottom-10 right-10 flex gap-4 pointer-events-auto">
           <button className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/80 hover:text-gold transition-colors">
              <Maximize2 size={24} strokeWidth={1} />
           </button>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </motion.div>
  );
}
