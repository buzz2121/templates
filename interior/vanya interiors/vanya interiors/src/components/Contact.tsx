import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mb-6 block">
              Establish a Partnership
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-luxury-charcoal leading-tight max-w-4xl">
              Let's craft your <span className="italic text-luxury-gold">architectural legacy</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 lg:gap-32">
          {/* Contact Info Column */}
          <div className="xl:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-12">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-black mb-4 flex items-center gap-2">
                    <MapPin size={12} /> New Delhi Studio
                  </p>
                  <p className="text-lg text-luxury-charcoal leading-relaxed group-hover:text-luxury-gold transition-colors duration-500">
                    12B, Okhla Design District,<br />
                    New Delhi, India — 110020
                  </p>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-black mb-4 flex items-center gap-2">
                    <MapPin size={12} /> Mumbai Presence
                  </p>
                  <p className="text-lg text-luxury-charcoal leading-relaxed group-hover:text-luxury-gold transition-colors duration-500">
                    The Design Collective, Lower Parel,<br />
                    Mumbai, India — 400013
                  </p>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-black mb-4 flex items-center gap-2">
                    <Phone size={12} /> Private Line
                  </p>
                  <p className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-500">
                    +91 11 4567 8900
                  </p>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-black mb-4 flex items-center gap-2">
                    <Mail size={12} /> General Inquiries
                  </p>
                  <p className="text-xl text-luxury-charcoal border-b border-luxury-charcoal/10 pb-1 inline-block group-hover:border-luxury-gold transition-all duration-500">
                    hello@vanya-interiors.in
                  </p>
                </div>
              </div>

              <div className="pt-12 hidden xl:block">
                 <div className="flex items-center gap-6 mb-8 text-luxury-gold/50">
                   <div className="h-px flex-1 bg-current" />
                   <span className="text-[10px] uppercase tracking-[0.6em] font-bold">Follow the journey</span>
                   <div className="h-px flex-1 bg-current" />
                 </div>
                 <div className="flex justify-between text-xs uppercase tracking-widest font-black text-luxury-charcoal/60 hover:text-luxury-gold transition-colors cursor-pointer">
                   <span>Instagram</span>
                   <span>LinkedIn</span>
                   <span>Pinterest</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <div className="xl:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-white p-10 md:p-20 shadow-[0_60px_130px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden group/form"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/5 -translate-y-1/2 translate-x-1/2 rotate-45 pointer-events-none group-hover/form:bg-luxury-gold/10 transition-colors duration-700" />
              
              <div className="absolute top-10 right-10 flex items-center gap-3 opacity-30 select-none hidden md:flex">
                 <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-black">Turnkey Excellence</span>
                 <div className="w-12 h-px bg-luxury-gold" />
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-24 h-24 rounded-full border border-luxury-gold/20 flex items-center justify-center mb-10">
                    <CheckCircle size={40} className="text-luxury-gold stroke-1" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-8">Inquiry Dispatched</h3>
                  <p className="text-lg text-luxury-charcoal/60 max-w-md mx-auto leading-relaxed">
                    Our principal designer will personally review your architectural vision and initiate a private introduction within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-16 text-xs uppercase tracking-[0.4em] font-black text-luxury-gold border-b-2 border-luxury-gold/20 hover:border-luxury-gold pb-2 transition-all"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-16 relative">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-4 group/input">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal/30 group-focus-within/input:text-luxury-gold transition-colors">Your Full Name</label>
                       <input 
                         required 
                         type="text" 
                         placeholder="e.g. Advait Malhotra"
                         className="w-full bg-transparent border-b border-luxury-charcoal/10 py-5 focus:border-luxury-gold outline-none transition-all text-xl font-light placeholder:text-luxury-charcoal/20" 
                       />
                     </div>
                     <div className="space-y-4 group/input">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal/30 group-focus-within/input:text-luxury-gold transition-colors">Digital Address</label>
                       <input 
                         required 
                         type="email" 
                         placeholder="e.g. malhotra@legacy.com"
                         className="w-full bg-transparent border-b border-luxury-charcoal/10 py-5 focus:border-luxury-gold outline-none transition-all text-xl font-light placeholder:text-luxury-charcoal/20" 
                       />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-4 group/input">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal/30 group-focus-within/input:text-luxury-gold transition-colors">Nature of Venture</label>
                       <div className="relative">
                         <select required className="w-full bg-transparent border-b border-luxury-charcoal/10 py-5 focus:border-luxury-gold outline-none transition-all appearance-none text-xl font-light">
                           <option value="" className="bg-luxury-cream">Select Service...</option>
                           <option className="bg-luxury-cream text-luxury-charcoal">Bespoke Residential</option>
                           <option className="bg-luxury-cream text-luxury-charcoal">Luxury Hospitality</option>
                           <option className="bg-luxury-cream text-luxury-charcoal">Boutique Office</option>
                           <option className="bg-luxury-cream text-luxury-charcoal">Art Curation</option>
                           <option className="bg-luxury-cream text-luxury-charcoal">Heritage Restoration</option>
                         </select>
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                           <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 mb-1" />
                         </div>
                       </div>
                     </div>
                     <div className="space-y-4 group/input">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal/30 group-focus-within/input:text-luxury-gold transition-colors">Anticipated Timeframe</label>
                       <div className="relative">
                         <select required className="w-full bg-transparent border-b border-luxury-charcoal/10 py-5 focus:border-luxury-gold outline-none transition-all appearance-none text-xl font-light">
                           <option value="" className="bg-luxury-cream">Select Window...</option>
                           <option className="bg-luxury-cream">Immediate (1-3 Months)</option>
                           <option className="bg-luxury-cream">Planning (3-6 Months)</option>
                           <option className="bg-luxury-cream">Future (6+ Months)</option>
                         </select>
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                            <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 mb-1" />
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-4 group/input relative">
                     <label className="text-[10px] uppercase tracking-[0.3em] font-black text-luxury-charcoal/30 group-focus-within/input:text-luxury-gold transition-colors">The Architectural Context</label>
                     <textarea 
                       rows={5} 
                       className="w-full bg-transparent border-b border-luxury-charcoal/10 py-5 focus:border-luxury-gold outline-none transition-all resize-none text-xl font-light placeholder:text-luxury-charcoal/20" 
                       placeholder="Share a few words about the space and your vision..."
                     ></textarea>
                     {/* Floating word count or instruction could go here */}
                   </div>

                   <div className="pt-10">
                     <button type="submit" className="group relative w-full h-20 bg-luxury-charcoal text-luxury-cream text-sm uppercase tracking-[0.5em] font-black overflow-hidden shadow-2xl">
                       <span className="relative z-10 flex items-center justify-center gap-4 transition-transform group-hover:-translate-y-1 duration-500">
                         Dispatch Private Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                       </span>
                       <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                     </button>
                     <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
                        <p className="text-[10px] text-luxury-charcoal/40 uppercase tracking-[0.2em] flex items-center gap-2">
                           <CheckCircle size={10} className="text-luxury-gold" /> Confidentiality Guaranteed
                        </p>
                        <div className="h-px flex-1 bg-luxury-charcoal/5 hidden md:block" />
                        <p className="text-[10px] text-luxury-charcoal/40 uppercase tracking-[0.2em]">
                           Vanya Luxury Studio © 2026
                        </p>
                     </div>
                   </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Brand Values or Additional Info */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-luxury-charcoal/5 pt-20">
           {[
             { title: 'Global Sourcing', desc: 'Direct relationships with Italian quarries and Belgian weavers.' },
             { title: 'Turnkey Delivery', desc: 'From architectural shells to final styling, we manage everything.' },
             { title: 'Heritage Conscious', desc: 'Preserving Indian craftsmanship within modern contexts.' }
           ].map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="space-y-4"
             >
               <h4 className="font-serif text-2xl text-luxury-charcoal">{item.title}</h4>
               <p className="text-luxury-charcoal/60 leading-relaxed uppercase tracking-widest text-[11px] font-bold">
                 {item.desc}
               </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
