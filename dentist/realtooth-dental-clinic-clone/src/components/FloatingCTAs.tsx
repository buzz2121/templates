import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919113883333" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-emerald-600 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919113883333" 
        className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary-700 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-white text-primary-600 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Clinic
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-100 transition-all border border-slate-100 group relative"
          >
            <ChevronUp size={28} />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
