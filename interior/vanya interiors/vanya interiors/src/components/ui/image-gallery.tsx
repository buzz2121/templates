import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { projects } from '../../data/content';
import { Link } from 'react-router-dom';

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom'];

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Map internal categories to display categories
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    const cat = project.category.toLowerCase();
    const active = activeCategory.toLowerCase();
    if (active === 'living room' && cat === 'living') return true;
    return cat === active;
  });

  return (
    <section className="w-full py-24 bg-luxury-cream transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 pb-2 border-b-2 px-1",
                activeCategory === category 
                  ? "text-luxury-gold border-luxury-gold" 
                  : "text-luxury-charcoal/40 border-transparent hover:text-luxury-charcoal/60"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery - Desktop (Expanding) */}
        <div className="hidden lg:flex items-center gap-4 h-[600px] w-full mt-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative flex-[1] min-w-[80px] h-full transition-[flex] duration-700 ease-[0.22,1,0.36,1] hover:flex-[5] rounded-sm overflow-hidden bg-luxury-charcoal/5"
              >
                <Link to={`/portfolio/${project.id}`} className="group relative block w-full h-full cursor-pointer overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out min-w-[320px]">
                      <p className="text-[11px] uppercase tracking-[0.2em] mb-3 text-luxury-gold font-black drop-shadow-md">
                        {project.category} <span className="opacity-40 px-2">|</span> {project.location}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-serif text-white leading-[1.1] mb-2 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="w-12 h-[2px] bg-luxury-gold mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery - Mobile & Tablet (Horizontal Scroll) */}
        <div className="lg:hidden flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar -mx-6 px-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] aspect-[3/4] rounded-sm overflow-hidden snap-center relative shadow-xl shadow-black/10 group bg-luxury-charcoal/5"
            >
              <Link to={`/portfolio/${project.id}`} className="block w-full h-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] mb-3 text-luxury-gold font-black">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-[9px] uppercase tracking-widest text-white/40 mt-2 font-bold flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-white/20" />
                    {project.location}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
