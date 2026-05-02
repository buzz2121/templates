import { motion } from 'motion/react';
import Services from '../components/Services';
import Process from '../components/Process';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  return (
    <div className="bg-luxury-cream">
      <PageHero 
        title="Services"
        subtitle="Our Capabilities"
        italicWord="& Expertise"
        image="/images/img_44.jpg"
      />

      <Services />

      {/* Artisan Network Section */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block">The Maker's Mark</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-8">
                A Curated Network of <span className="italic text-luxury-gold outline-text">Master Artisans</span>
              </h2>
              <p className="text-lg text-luxury-charcoal/70 leading-relaxed mb-8">
                Luxury is found in the details that can't be mass-produced. We collaborate with a handpicked group of master stone-carvers, traditional weavers, and contemporary metalworkers across India to bring soul and authenticity to every project.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Bespoke Craft', desc: 'One-of-a-kind pieces tailored to your space.' },
                  { label: 'Sourcing', desc: 'Direct access to rare materials and textiles.' }
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <h4 className="font-serif text-lg text-luxury-charcoal uppercase tracking-wider">{item.label}</h4>
                    <p className="text-sm text-luxury-charcoal/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-luxury-beige group overflow-hidden"
            >
              <img 
                src="/images/img_45.jpg"
                alt="Artisan at work"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-gold/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      <Process />

      {/* FAQ / Inquiries Section */}
      <section className="py-32 bg-luxury-cream">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block">Common Inquiries</span>
              <h2 className="text-4xl font-serif text-luxury-charcoal mb-4">Designing Your <span className="italic">Vision</span></h2>
              <p className="text-luxury-charcoal/60 leading-relaxed">
                Frequently asked questions about our process and commitment to excellence.
              </p>
            </div>
            <div className="lg:w-2/3 space-y-8">
              {[
                { 
                  q: "Do you handle turnkey projects outside of major metros?", 
                  a: "Yes, we have successfully managed luxury residential and hospitality projects in remote locations like Shimla and Alibaug. Our logistics team specializes in high-end material transport and remote site management." 
                },
                { 
                  q: "How do you integrate Vastu Shastra with modern aesthetics?", 
                  a: "Vastu is about energy and harmony. We integrate these principles at the fundamental planning stage so they feel like a natural part of the modern architectural flow, never forced or compromised." 
                },
                { 
                  q: "What is your typical timeline for a residential project?", 
                  a: "For large-scale premium residences, timelines typically range from 12 to 18 months. This allows for meticulous craftsmanship, custom sourcing, and precision implementation." 
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pb-8 border-b border-luxury-charcoal/10"
                >
                  <h4 className="text-xl font-serif text-luxury-charcoal mb-4">{faq.q}</h4>
                  <p className="text-luxury-charcoal/60 leading-relaxed text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
