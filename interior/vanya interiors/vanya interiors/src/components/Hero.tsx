import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Cinematic Parallax & Scale */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-luxury-charcoal z-10" />
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/images/img_25.jpg"
          alt="High-end Indian Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-20 text-center text-white pt-20">
        <motion.div
          style={{ opacity, scale: textScale }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="w-8 h-px bg-luxury-gold/50" />
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-luxury-gold">
              Luxury Turnkey Interiors — Delhi & Mumbai
            </span>
            <div className="w-8 h-px bg-luxury-gold/50" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.85] tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Heritage meets
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="italic text-luxury-gold block md:mt-2"
            >
              Modernity.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-sm md:text-lg font-sans font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide px-4"
          >
            Experience a seamless, stress-free transformation that honors Indian craftsmanship while embracing contemporary luxury. We handle every detail of your turnkey project.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#C5A059' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-luxury-charcoal text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 shadow-2xl"
              >
                Book a Private Consultation
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-bold">Discover</span>
        <ChevronDown size={18} strokeWidth={1} />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-5">
        <div className="container mx-auto h-full grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-x border-white/20 h-full" />
          ))}
        </div>
      </div>

      {/* Cinematic Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-10 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
    </section>
  );
}
