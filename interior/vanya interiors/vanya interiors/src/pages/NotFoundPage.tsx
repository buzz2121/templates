import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function NotFoundPage() {
  return (
    <div className="bg-luxury-cream min-h-screen">
      <PageHero 
        title="Space"
        subtitle="Error 404"
        italicWord="Misplaced"
        image="/images/img_42.jpg"
      />

      <div className="flex items-center justify-center py-32 px-6">
        <div className="max-w-2xl w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 className="text-[15vw] md:text-[12rem] font-serif leading-none text-luxury-charcoal/5 select-none font-black italic">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
               <h2 className="text-4xl md:text-6xl font-serif text-luxury-charcoal">Architectural Gap</h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-luxury-charcoal/60 text-lg leading-relaxed max-w-md mx-auto font-light"
          >
            The coordinates you've entered lead to a void. This wing of the studio has either been reimagined or doesn't exist in our current blueprints.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link
              to="/"
              className="inline-flex h-16 items-center gap-6 px-12 bg-luxury-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-luxury-gold transition-all duration-500 shadow-3xl"
            >
              Return to Atrium <Home size={16} />
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex h-16 items-center gap-6 px-12 border border-luxury-charcoal/20 text-luxury-charcoal text-[10px] uppercase tracking-[0.3em] font-black hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500"
            >
              Previous View <ArrowLeft size={16} />
            </button>
          </motion.div>

          <div className="pt-32">
            <div className="w-12 h-px bg-luxury-gold/30 mx-auto" />
            <p className="text-[9px] uppercase tracking-[0.6em] text-luxury-gold pt-12 font-black">
              Vanya Luxury Interiors — Est. 2012
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
