import { motion } from 'motion/react';
import { useState } from 'react';
import Contact from '../components/Contact';
import { Globe, Plus, Minus } from 'lucide-react';
import PageHero from '../components/PageHero';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our turnkey projects typically span 4-8 months, depending on the architectural complexity and material sourcing. We prioritize precision over speed to ensure every detail meets our studio standards."
  },
  {
    question: "Do you offer international design services?",
    answer: "Yes, we handle international commissions in Dubai, London, and Singapore through our network of logistics partners and on-site coordinators."
  },
  {
    question: "How do you handle budget management for luxury projects?",
    answer: "We provide comprehensive financial transparency with detailed procurement logs. Our turnkey service includes budget auditing and value engineering without compromising the design intent."
  },
  {
    question: "Can I bring my own architect or contractor?",
    answer: "While we specialize in full turnkey delivery, we are open to collaborating with third-party architectural firms for heritage restoration or large-scale estate developments."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-luxury-cream">
      <PageHero 
        title="Let's speak in"
        subtitle="The Concierge"
        italicWord="Design"
        image="/images/img_1.jpg"
      />

      {/* Main Contact Section */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-40 bg-luxury-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-40"
              >
                <span className="text-xs uppercase tracking-[0.6em] text-luxury-gold font-black mb-8 block">Concierge FAQ</span>
                <h2 className="text-5xl md:text-6xl font-serif text-luxury-charcoal mb-10 leading-tight">Common <br /><span className="italic">Inquiries</span></h2>
                <p className="text-luxury-charcoal/50 text-lg leading-relaxed mb-12">
                  Addressing the nuances of bespoke architectural partnerships. Our studio values transparency at every stage.
                </p>
                <div className="group cursor-pointer inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-luxury-gold">
                  <span className="border-b-2 border-luxury-gold/20 pb-1 group-hover:border-luxury-gold transition-all">Download Studio Profile</span>
                  <Globe size={14} />
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-2/3">
               <div className="space-y-4">
                 {faqs.map((faq, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     viewport={{ once: true }}
                     className={`border border-luxury-charcoal/5 transition-all duration-500 overflow-hidden ${openFaq === idx ? 'bg-luxury-cream/50' : 'bg-transparent'}`}
                   >
                     <button 
                       onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                       className="w-full p-10 flex items-center justify-between text-left group"
                     >
                        <h4 className="text-xl md:text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors">{faq.question}</h4>
                        <div className="w-10 h-10 rounded-full border border-luxury-charcoal/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all">
                          {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <motion.div 
                       initial={false}
                       animate={{ 
                         height: openFaq === idx ? 'auto' : 0,
                         opacity: openFaq === idx ? 1 : 0
                       }}
                       className="overflow-hidden"
                     >
                        <div className="p-10 pt-0 text-lg text-luxury-charcoal/60 leading-relaxed max-w-2xl">
                           {faq.answer}
                        </div>
                     </motion.div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Destinations Section */}
      <section className="py-40 bg-luxury-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-luxury-charcoal/5">
             <div className="bg-luxury-cream p-16 space-y-12">
                <div className="space-y-6">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-black">NCR Region</span>
                   <h3 className="text-5xl font-serif italic">New Delhi Studio</h3>
                   <p className="text-lg text-luxury-charcoal/50 leading-relaxed max-w-sm">
                     A heritage-focused workspace overlooking the lush greenery of South Delhi.
                   </p>
                </div>
                <div className="aspect-video overflow-hidden">
                   <img 
                    src="/images/img_38.jpg" 
                    alt="Delhi Studio" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                </div>
             </div>
             
             <div className="bg-luxury-cream p-16 space-y-12 border-l border-luxury-charcoal/5">
                <div className="space-y-6">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-black">Coastal Presence</span>
                   <h3 className="text-5xl font-serif italic">Mumbai Atelier</h3>
                   <p className="text-lg text-luxury-charcoal/50 leading-relaxed max-w-sm">
                     Our modern design hub situated in the heart of Mumbai's creative district.
                   </p>
                </div>
                <div className="aspect-video overflow-hidden">
                   <img 
                    src="/images/img_39.jpg" 
                    alt="Mumbai Studio" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
