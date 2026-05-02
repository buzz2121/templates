import { motion } from 'motion/react';
import { Layout, Sofa, PenTool, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';

const iconMap: Record<string, any> = {
  Layout: <Layout className="w-8 h-8" />,
  Sofa: <Sofa className="w-8 h-8" />,
  Maximize: <Maximize className="w-8 h-8" />,
  PenTool: <PenTool className="w-8 h-8" />,
};

export default function Services() {
  return (
    <section id="services" className="py-40 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block"
            >
              Our Design Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-luxury-charcoal leading-[1.1]"
            >
              Mastering the Art of <br className="hidden md:block" />
              <span className="text-luxury-gold italic">Luxe Living</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-md pb-4"
          >
            <p className="text-lg text-luxury-charcoal/60 leading-relaxed">
              We specialize in creating bespoke environments that harmonize heritage with modernity, ensuring every space tells a unique story of refinement.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 bg-luxury-white/50 backdrop-blur-sm p-8 lg:p-12 border border-luxury-charcoal/5 hover:border-luxury-gold/20 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl group-hover:bg-luxury-gold/10 transition-colors" />

              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-luxury-white shadow-xl flex items-center justify-center text-luxury-gold mb-6 md:mb-0 group-hover:scale-110 transition-transform duration-500">
                  {iconMap[service.icon]}
                </div>
              </div>

              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl font-serif mb-4 text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="text-[9px] uppercase tracking-widest px-3 py-1 bg-luxury-gold/10 text-luxury-gold font-bold rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-black text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                  >
                    Explore Service Details
                    <span className="w-8 h-px bg-luxury-charcoal/20 group-hover:w-12 group-hover:bg-luxury-gold transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-luxury-charcoal text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
          <h3 className="text-3xl md:text-4xl font-serif text-white">Ready to redefine your space?</h3>
          <p className="text-white/60 max-w-xl mx-auto">
            Our design studio offers a collaborative experience that transforms your vision into a tangible reality of elegance.
          </p>
          <Link 
            to="/contact"
            className="inline-flex h-14 items-center px-10 bg-luxury-gold text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-luxury-white hover:text-luxury-charcoal transition-all duration-500 shadow-xl"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
