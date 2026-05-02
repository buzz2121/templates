import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { number: '01', title: 'Private Consultation', description: 'A high-level dialogue to align on your lifestyle aspirations, investment scope, and architectural vision, including Vastu considerations.' },
    { number: '02', title: 'Concept & Curation', description: 'We present a curated narrative blending Indian heritage with modern aesthetics, ensuring the direction is perfectly tailored.' },
    { number: '03', title: 'Technical Precision', description: 'Detailed 3D visualizations and technical drawings are finalized, providing a clear roadmap for seamless execution.' },
    { number: '04', title: 'Heritage Sourcing', description: 'Leveraging our exclusive network of Indian artisans and global partners, we source bespoke furniture and rare materials.' },
    { number: '05', title: 'Turnkey Execution', description: 'We manage every contractor, delivery, and installation. You simply walk into a fully realized, move-in-ready home.' },
  ];

  return (
    <section className="py-32 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-4 block"
            >
              The Turnkey Journey
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-luxury-charcoal mb-8 leading-[1.1]">
              Seamless Turnkey Experience
            </h2>
            <p className="text-lg text-luxury-charcoal/60 leading-relaxed max-w-md">
              We handle everything from initial concept to the final finishing touch. You enjoy the creative process while we manage the complexities of execution.
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-7">
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                >
                  <div className="flex-shrink-0 pt-2">
                    <span className="text-6xl md:text-8xl font-serif font-bold text-luxury-gold/20 leading-none transition-colors duration-500 group-hover:text-luxury-gold/40">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4 text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-luxury-charcoal/60 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
