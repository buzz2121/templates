import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ananya Malhotra',
    role: 'Art Collector',
    text: 'Vanya Luxury Interiors didn’t just design my home; they curated a sanctuary that reflects my soul. Their attention to Indian heritage is unparalleled.',
    image: '/images/img_30.jpg'
  },
  {
    id: 2,
    name: 'Vikram Singhania',
    role: 'CEO, Singhania Group',
    text: 'The transformation of our corporate headquarters was nothing short of miraculous. They managed to balance modern professionalism with traditional warmth.',
    image: '/images/img_31.jpg'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Fashion Designer',
    text: 'As someone who lives for aesthetics, I had high expectations. Vanya exceeded them all. Every corner of my villa is now a masterpiece of Indian luxury.',
    image: '/images/img_32.jpg'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-luxury-beige relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <Quote className="w-12 h-12 text-luxury-gold opacity-20" />
          </div>

          <div className="relative min-h-[400px] md:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-center w-full px-4"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-luxury-charcoal mb-8 md:mb-12 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-luxury-charcoal">{testimonials[current].name}</h4>
                    <p className="text-xs uppercase tracking-widest text-luxury-gold">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-luxury-charcoal/10 flex items-center justify-center hover:bg-luxury-charcoal hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-luxury-charcoal/10 flex items-center justify-center hover:bg-luxury-charcoal hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif font-bold text-luxury-charcoal/[0.02] pointer-events-none select-none">
        VOICES
      </div>
    </section>
  );
}
