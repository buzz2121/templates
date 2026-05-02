import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import { useRef } from 'react';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3); // Show 3 projects for a better rhythm

  return (
    <section className="py-48 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end mb-32">
          <div className="md:col-span-7">
            <span className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-black">Curated Work</span>
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-luxury-charcoal leading-[1.1] tracking-tighter">
              Selected <span className="italic">Portfolios</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col md:items-end space-y-8">
            <p className="text-sm md:text-base text-luxury-charcoal/60 leading-relaxed md:text-right max-w-sm">
              A selection of our most distinguished projects, showcasing our commitment to spatial perfection and bespoke craftsmanship.
            </p>
            <Link to="/portfolio" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal hover:text-luxury-gold transition-colors">
              <span className="md:order-2">View All Creations</span>
              <div className="w-12 h-[1px] bg-luxury-charcoal group-hover:bg-luxury-gold group-hover:w-20 transition-all duration-500 md:order-1" />
            </Link>
          </div>
        </div>

        <div className="space-y-48 md:space-y-64">
          {featured.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center`}
    >
      <div className={`lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <motion.div
          style={{ scale }}
          className="relative aspect-[16/10] overflow-hidden group shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700" />
          
          {/* Project Number Accent */}
          <div className="absolute top-10 left-10 overflow-hidden">
            <span className="text-8xl md:text-[10rem] font-serif italic text-white/10 select-none block translate-y-8">
              0{index + 1}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ y }}
        className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-1' : ''} space-y-8`}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-luxury-gold" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black">{project.category || 'Luxury Interior'}</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">
          {project.title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? 'italic font-light' : ''}>{word} </span>
          ))}
        </h3>
        
        <p className="text-luxury-charcoal/60 leading-relaxed font-light text-lg">
          {project.description}
        </p>
        
        <div className="pt-8">
          <Link 
            to={`/portfolio/${project.id}`}
            className="group inline-flex items-center gap-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
              Explore Space
            </span>
            <div className="w-12 h-[1px] bg-luxury-charcoal group-hover:bg-luxury-gold group-hover:w-20 transition-all duration-500" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
