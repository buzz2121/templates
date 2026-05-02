import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects, services } from '../data/content';
import { ArrowLeft, MapPin, Calendar, Maximize2, Palette, ArrowRight, Quote } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';
import PageHero from '../components/PageHero';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  // Get other projects to show at the bottom
  const otherProjects = projects.filter(p => p.id !== id).slice(0, 3);
  
  // Get some services to show as "involved"
  const involvedServices = services.slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-luxury-gold hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen">
      <PageHero 
        title={project.title}
        subtitle={project.category}
        italicWord={project.location}
        image={project.image}
      />

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-luxury-charcoal/60 hover:text-luxury-gold transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Portfolio</span>
        </Link>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-luxury-charcoal/5 mb-32">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Maximize2 size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Area</span>
            </div>
            <p className="text-lg font-serif">{project.details.area}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Calendar size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Duration</span>
            </div>
            <p className="text-lg font-serif">{project.details.duration}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Palette size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Style</span>
            </div>
            <p className="text-lg font-serif">{project.details.style}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-luxury-gold">
              <span className="text-[10px] uppercase tracking-widest font-bold">Status</span>
            </div>
            <p className="text-lg font-serif">Completed</p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32">
          <div className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-6 block">The Brief</span>
              <h2 className="text-3xl font-serif mb-8 text-luxury-charcoal">The Challenge</h2>
              <p className="text-xl text-luxury-charcoal/70 leading-relaxed font-light">
                {project.challenge}
              </p>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-6 block">The Realization</span>
              <h2 className="text-3xl font-serif mb-8 text-luxury-charcoal">The Solution</h2>
              <p className="text-xl text-luxury-charcoal/70 leading-relaxed font-light">
                {project.solution}
              </p>
            </motion.section>
          </div>
          
          <div className="bg-luxury-white p-12 border border-luxury-charcoal/5 shadow-xl h-fit sticky top-32">
            <h3 className="text-2xl font-serif mb-8">Executive Summary</h3>
            <p className="text-sm text-luxury-charcoal/60 leading-relaxed mb-10 italic">
              {project.description}
            </p>
            <Link
              to="/contact"
              className="block text-center py-5 bg-luxury-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-luxury-gold transition-all duration-500 shadow-xl"
            >
              Inquire About Similar Work
            </Link>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-16 mb-40">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Architectural <span className="italic">Documentation</span></h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-sm group bg-luxury-charcoal/5 break-inside-avoid"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="pt-32 border-t border-luxury-charcoal/5">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">Discover More</span>
              <h2 className="text-4xl font-serif text-luxury-charcoal">Continuing the <span className="italic">Dialogue</span></h2>
            </div>
            <Link to="/portfolio" className="text-xs uppercase tracking-widest font-black text-luxury-gold hover:text-luxury-charcoal transition-colors flex items-center gap-3 group">
              Back to Portfolio <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-luxury-charcoal"
              >
                <Link to={`/portfolio/${p.id}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 group-hover:opacity-30 opacity-70 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-black mb-4">
                      {p.location}
                    </span>
                    <h3 className="text-white text-3xl font-serif mb-6">{p.title}</h3>
                    <div className="w-12 h-px bg-luxury-gold transition-all duration-700 group-hover:w-full" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
