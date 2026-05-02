
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { CategorySection } from '../components/sections/CategorySection';
import { EmotionalStorytelling } from '../components/sections/EmotionalStorytelling';
import { Testimonials } from '../components/sections/Testimonials';
import { InstagramGallery } from '../components/sections/InstagramGallery';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onQuickBuy?: (product: Product) => void;
}

export const HomePage: React.FC<HomeProps> = ({ onAddToCart, onQuickBuy }) => {
  return (
    <>
      <Hero />
      
      {/* Studio CTA Section */}
      <section className="py-12 px-4 md:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <Link to="/studio">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative rounded-[3rem] overflow-hidden bg-stone-900 p-12 md:p-20 text-white"
            >
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Sparkles size={24} />
                  <span className="text-xs font-bold uppercase tracking-[0.4em]">The Artisan Studio</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Build Your Own Bouquet</h2>
                <p className="text-xl text-stone-400 mb-10 leading-relaxed font-medium">
                  Select every stem, pick your style, and let our AI craft a personalized message for your gift.
                </p>
                <div className="inline-flex items-center gap-4 bg-white text-stone-900 px-8 py-5 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all group">
                  Start Creating <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80" 
                  alt="Floral Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            </motion.div>
          </Link>
        </div>
      </section>

      <FeaturedProducts onAddToCart={onAddToCart} onQuickBuy={onQuickBuy} />
      <CategorySection />
      <EmotionalStorytelling />
      <Testimonials />
      <InstagramGallery />
    </>
  );
};
