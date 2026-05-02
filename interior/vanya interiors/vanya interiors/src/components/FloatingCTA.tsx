import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 p-4 md:px-6 md:py-4 bg-luxury-charcoal text-luxury-cream rounded-full shadow-2xl hover:bg-luxury-gold hover:text-white transition-colors duration-300 group"
            >
              <span className="hidden md:block text-[10px] uppercase tracking-widest font-bold">Book Consultation</span>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <MessageSquare size={14} className="md:w-4 md:h-4" />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
