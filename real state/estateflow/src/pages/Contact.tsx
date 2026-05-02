import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare, Linkedin, Instagram, Twitter, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px]"
              >
                Global Relations
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif italic"
              >
                Connect with <br /> <span className="gold-text">Privileged</span> Estates
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-24 h-px bg-gold-500/30"
              />
              <motion.p
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="text-white/60 max-w-lg font-light leading-relaxed text-lg"
              >
                Whether seeking to acquire a landmark property or listing a private estate, our advisors are here to provide discreet, expert guidance.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:border-gold-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40">Inquiries</h4>
                <p className="text-xl font-serif">+44 20 7946 0000</p>
                <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold flex items-center gap-2">
                  <Clock size={12} /> Mon - Sat: 9am - 8pm
                </p>
              </div>

              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:border-gold-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40">General Correspondence</h4>
                <p className="text-xl font-serif">private@estateflow.com</p>
                <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold flex items-center gap-2">
                  <MessageSquare size={12} /> Avg Response: 2 hours
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-serif italic text-white/80">Connect on Social</h4>
              <div className="flex gap-4">
                {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-500 transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="glass-gold p-1 rounded-[2.5rem]"
             >
               <div className="bg-black/80 backdrop-blur-3xl p-10 md:p-16 rounded-[2.2rem] border border-white/10">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 space-y-6"
                    >
                      <div className="w-20 h-20 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Send size={32} />
                      </div>
                      <h2 className="text-3xl font-serif">Message Transmitted</h2>
                      <p className="text-white/40 font-light max-w-xs mx-auto">One of our senior advisors will be in contact shortly to discuss your requirements.</p>
                      <Button 
                        variant="link" 
                        className="text-gold-500 uppercase tracking-widest text-[10px] font-bold"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-serif">Direct Inquiry</h2>
                        <p className="text-white/40 font-light text-sm">Please provide your details for a discreet consultation.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Full Name</label>
                          <Input 
                            required
                            placeholder="Lord Byron" 
                            className="h-14 bg-white/5 border-white/10 rounded-xl focus-visible:ring-gold-500/30" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Email Address</label>
                          <Input 
                            required
                            type="email"
                            placeholder="byron@private.com" 
                            className="h-14 bg-white/5 border-white/10 rounded-xl focus-visible:ring-gold-500/30" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Inquiry Type</label>
                        <Input 
                          placeholder="Acquisition, Listing, or Advisory" 
                          className="h-14 bg-white/5 border-white/10 rounded-xl focus-visible:ring-gold-500/30" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Your Requirements</label>
                        <Textarea 
                          required
                          placeholder="Briefly describe the nature of your request..." 
                          className="min-h-[150px] bg-white/5 border-white/10 rounded-2xl p-6 focus-visible:ring-gold-500/30"
                        />
                      </div>

                      <Button className="w-full h-16 bg-gold-500 hover:bg-gold-600 text-black font-extrabold uppercase tracking-[.25em] text-[11px] rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 group">
                        Send Secure Message <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                  )}
               </div>
             </motion.div>

             <div className="mt-12 flex items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">London HQ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Dubai Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">NYC Studio</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
