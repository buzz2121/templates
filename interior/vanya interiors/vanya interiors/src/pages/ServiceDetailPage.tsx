import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services, projects } from '../data/content';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';
import PageHero from '../components/PageHero';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  
  // Get related projects that utilize this specific service
  const relatedProjects = projects.filter(p => p.serviceIds.includes(id || '')).slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-cream">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
          <Link to="/services" className="text-luxury-gold hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen">
      <PageHero 
        title={service.title}
        subtitle="Our Expertise"
        italicWord="Experience"
        image={service.image}
      />

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <Link to="/services" className="inline-flex items-center gap-2 text-luxury-charcoal/60 hover:text-luxury-gold transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-6 block">
              The Signature Approach
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-luxury-charcoal mb-10 leading-tight">
              Crafting <span className="italic">Excellence</span>
            </h2>
            <p className="text-xl text-luxury-charcoal/70 leading-relaxed mb-12 font-light">
              {service.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-luxury-gold shrink-0 mt-1" />
                  <span className="text-sm font-bold uppercase tracking-wider text-luxury-charcoal/80">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block px-14 py-5 bg-luxury-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-luxury-gold transition-all duration-500 shadow-2xl"
            >
              Consult with Vanya
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-[3/4] overflow-hidden shadow-3xl bg-luxury-charcoal/5"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Transformation Slider */}
        <div className="mb-40">
          <div className="text-center mb-16">
             <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">The Metamorphosis</span>
             <h2 className="text-4xl font-serif">Before & <span className="italic">After</span></h2>
          </div>
          <BeforeAfter />
        </div>

        {/* Process Section */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">The Workflow</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">Our Precision <br /><span className="italic">Process</span></h2>
            </div>
            <p className="md:max-w-xs text-luxury-charcoal/60 text-sm italic">A rigorous 4-stage methodology to ensure flawless delivery of your vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-luxury-charcoal/5 hover:border-luxury-gold/30 transition-all duration-500 group bg-luxury-white shadow-sm hover:shadow-xl"
              >
                <span className="text-4xl font-serif text-luxury-gold/20 group-hover:text-luxury-gold transition-colors duration-500 block mb-8">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-serif mb-6 uppercase tracking-wider">{step.title}</h3>
                <p className="text-sm text-luxury-charcoal/60 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-40 bg-luxury-charcoal text-white p-12 md:p-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-[100px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-black block">
                The Studio Standard
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                Why Vanya <br /><span className="italic text-luxury-gold">Luxury interiors?</span>
              </h2>
              <p className="text-white/50 leading-relaxed text-lg font-light">
                We combine architectural rigor with a curator's eye. Our turnkey delivery model removes the friction of construction, leaving you only with the joy of design.
              </p>
              <ul className="grid grid-cols-1 gap-6">
                {[
                  'Bespoke Articulation of Personal Style',
                  'Rigorous Project Governance & Timelines',
                  'Exclusive Access to Global Artisan Networks',
                  'Multi-Generational Material Longevity'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <div className="w-10 h-px bg-luxury-gold/50 group-hover:w-16 transition-all duration-500" />
                    <span className="text-xs uppercase tracking-widest font-bold text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-[2s]"
            >
              <img 
                src="/images/img_7.jpg" 
                alt="Luxury detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="pt-32 border-t border-luxury-charcoal/5">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">Case Studies</span>
              <h2 className="text-4xl font-serif text-luxury-charcoal">Related <span className="italic">Portfolio</span></h2>
            </div>
            <Link to="/portfolio" className="text-xs uppercase tracking-widest font-black text-luxury-gold hover:text-luxury-charcoal transition-colors flex items-center gap-3 group">
              Explore Works <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-luxury-charcoal"
              >
                <Link to={`/portfolio/${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 group-hover:opacity-30 opacity-70 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <span className="text-luxury-gold text-[10px] uppercase tracking-[0.5em] font-black mb-4">
                      {project.location}
                    </span>
                    <h3 className="text-white text-3xl font-serif mb-6">{project.title}</h3>
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
