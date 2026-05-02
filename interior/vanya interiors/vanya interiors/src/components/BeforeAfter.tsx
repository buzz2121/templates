import { useState, useRef, type MouseEvent as ReactMouseEvent, type TouchEvent as ReactTouchEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Transformation {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  category: string;
}

const transformations: Transformation[] = [
  {
    id: 'living',
    category: 'Lounge Area',
    title: 'The Industrial Rebirth',
    description: 'Transforming a sterile, dated living space into a warm, textures-rich industrial sanctuary with custom lighting and hand-finished concrete.',
    before: '/images/img_4.jpg',
    after: '/images/img_21.jpg'
  },
  {
    id: 'kitchen',
    category: 'Culinary Studio',
    title: 'Minimalist Efficiency',
    description: 'Converting a cluttered, traditional kitchen into a state-of-the-art minimalist workspace focused on ergonomics and integrated technology.',
    before: '/images/img_22.jpg',
    after: '/images/img_18.jpg'
  },
  {
    id: 'bedroom',
    category: 'Private Sanctuary',
    title: 'Royal Elevation',
    description: 'Elevating a standard bedroom with bespoke silken wall panels and a palette of silver and emerald for a truly regal experience.',
    before: '/images/img_23.jpg',
    after: '/images/img_24.jpg'
  }
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = transformations[currentIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  // Reset slider on change
  useEffect(() => {
    setSliderPosition(50);
  }, [currentIndex]);

  return (
    <section className="py-32 bg-luxury-beige overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Content */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-4 block"
              >
                The Impact of Design
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-serif text-luxury-charcoal leading-tight"
              >
                Before & <br />
                <span className="text-luxury-gold italic">After</span>
              </motion.h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                {transformations.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-full transition-all ${
                      currentIndex === i 
                        ? 'bg-luxury-gold border-luxury-gold text-white' 
                        : 'border-luxury-charcoal/20 text-luxury-charcoal/60 hover:border-luxury-gold'
                    }`}
                  >
                    {t.id}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-gold">
                    {active.category}
                  </span>
                  <h3 className="text-2xl font-serif text-luxury-charcoal uppercase">
                    {active.title}
                  </h3>
                  <p className="text-luxury-charcoal/70 leading-relaxed">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-xs font-mono text-luxury-charcoal/40">
              <span className="w-8 h-px bg-luxury-charcoal/20" />
              DRAG SLIDER TO REVEAL
            </div>
          </div>

          {/* Right: Slider */}
          <div className="w-full lg:w-2/3">
            <div 
              ref={containerRef}
              className="relative aspect-video w-full overflow-hidden rounded-sm cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image */}
              <img
                src={active.after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={active.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-px bg-luxury-white/50 z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-luxury-white/10 backdrop-blur-xl border border-luxury-white/30 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="flex space-x-1.5">
                    <div className="w-0.5 h-4 bg-luxury-white rounded-full opacity-50" />
                    <div className="w-0.5 h-6 bg-luxury-gold rounded-full" />
                    <div className="w-0.5 h-4 bg-luxury-white rounded-full opacity-50" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-6 left-6 z-10 bg-luxury-white/10 backdrop-blur-md border border-luxury-white/20 px-4 py-2 text-white text-[10px] uppercase tracking-widest font-bold">
                Before
              </div>
              <div className="absolute bottom-6 right-6 z-10 bg-luxury-gold border border-luxury-gold px-4 py-2 text-white text-[10px] uppercase tracking-widest font-bold">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
