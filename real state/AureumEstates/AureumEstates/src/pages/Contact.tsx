import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-16"
           >
              <div className="space-y-6">
                 <span className="text-gold uppercase tracking-[0.4em] text-[10px] block font-bold">Concierge Desk</span>
                 <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tighter">
                   At Your <br/>
                   <span className="gold-text italic font-serif">Service</span>
                 </h1>
                 <p className="text-lg md:text-xl text-charcoal/60 font-light leading-relaxed">
                   Connect with our high-end real estate specialists for a bespoke consultation on your next investment vision.
                 </p>
              </div>

              <div className="space-y-10">
                 <motion.div whileHover={{ x: 10 }} transition={{ type: "spring" }} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 glass flex items-center justify-center rounded-full text-gold group-hover:bg-gold/10 transition-all">
                       <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                       <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-charcoal/80 mb-1">Direct Line</p>
                       <p className="text-xl font-light text-charcoal">+1 (234) LUXE-789</p>
                    </div>
                 </motion.div>
                 <motion.div whileHover={{ x: 10 }} transition={{ type: "spring" }} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 glass flex items-center justify-center rounded-full text-gold group-hover:bg-gold/10 transition-all">
                       <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                       <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-charcoal/80 mb-1">Global Inquiry</p>
                       <p className="text-xl font-light italic font-serif text-charcoal">concierge@aureumestates.com</p>
                    </div>
                 </motion.div>
                 <motion.div whileHover={{ x: 10 }} transition={{ type: "spring" }} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 glass flex items-center justify-center rounded-full text-gold group-hover:bg-gold/10 transition-all">
                       <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                       <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-charcoal/80 mb-1">Global HQ</p>
                       <p className="text-xl font-light text-charcoal">Diamond Tower, DIFC, Global Plaza</p>
                    </div>
                 </motion.div>
              </div>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full group-hover:bg-gold/10 transition-colors duration-1000" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-10 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Full Name</label>
                          <input required type="text" className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/60" placeholder="Aiden Sterling" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Email Address</label>
                          <input required type="email" className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/60" placeholder="aiden@elite.com" />
                       </div>
                    </div>

                    <div className="space-y-4 relative">
                       <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Inquiry Nature</label>
                       <div className="relative">
                          <select required className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light appearance-none text-charcoal/70 cursor-pointer">
                             <option className="bg-white text-charcoal">Portfolio Acquisition</option>
                             <option className="bg-white text-charcoal">Lease Collection</option>
                             <option className="bg-white text-charcoal">Investment Advisory</option>
                             <option className="bg-white text-charcoal">Partnership Inquiries</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-8 top-1/2 -translate-y-1/2 text-charcoal/80 pointer-events-none" />
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[9px] uppercase font-bold tracking-widest text-charcoal/80 ml-4">Message</label>
                       <textarea required rows={4} className="w-full bg-charcoal/5 border border-charcoal/10 rounded-2xl px-8 py-5 outline-none focus:border-gold/30 transition-all font-light text-charcoal placeholder:text-charcoal/60 resize-none" placeholder="Elaborate on your requirement..." />
                    </div>

                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-charcoal py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gold-dark transition-all flex items-center justify-center gap-4 shadow-2xl"
                    >
                       <Send size={16} />
                       Initiate Consultation
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6 relative z-10"
                  >
                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-8">
                       <CheckCircle2 size={40} strokeWidth={1} />
                    </div>
                    <h2 className="text-4xl font-serif italic italic gold-text">Request Dispatched</h2>
                    <p className="text-charcoal/80 font-light max-w-sm mx-auto leading-relaxed">
                      Our elite concierge team has received your inquiry. Expect a response within 24 hours of operation.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
