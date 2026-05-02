import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  italicWord?: string;
}

export default function PageHero({ title, subtitle, image, italicWord }: PageHeroProps) {
  const { scrollY } = useScroll();
  
  // Smoother Parallax & Scale
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-luxury-charcoal flex items-center justify-center">
      {/* Cinematic Background Layer - Simplified motion */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          {/* Layered Gradient Overlays - Ensure they are above the image but transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-luxury-charcoal z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          
          <motion.img 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={image || '/images/img_1.jpg'}
            alt={title}
            className="w-full h-full object-cover z-0"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-5">
        <div className="container mx-auto h-full grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-x border-white/20 h-full" />
          ))}
        </div>
      </div>

      {/* Main Content - Force it to be on top */}
      <div className="container mx-auto px-6 relative z-30 text-center text-white pt-24 md:pt-0">
        <motion.div
          style={{ y: textY, opacity }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="w-10 h-px bg-luxury-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-luxury-gold font-black">
              {subtitle}
            </span>
            <div className="w-10 h-px bg-luxury-gold" />
          </motion.div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {title}
            </motion.span>
            {italicWord && (
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-luxury-gold italic block mt-4"
              >
                {italicWord}
              </motion.span>
            )}
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 text-white/30"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-black">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-luxury-gold"
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Grain Overlay - Ensuring it doesn't block the image completely */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-20 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
    </section>
  );
}
