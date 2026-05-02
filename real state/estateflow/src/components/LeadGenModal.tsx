import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Calendar, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface LeadGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  type: 'visit' | 'enquiry';
}

export default function LeadGenModal({ isOpen, onClose, propertyTitle, type }: LeadGenModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-serif">Request Logged</h2>
                  <p className="text-white/40 font-light max-w-xs mx-auto">Our advisors have received your inquiry. We will contact you shortly to confirm arrangements.</p>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-3">
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px]"
                    >
                      {type === 'visit' ? 'Site Inspection' : 'Strategic Inquiry'}
                    </motion.p>
                    <h2 className="text-3xl font-serif leading-tight">
                      {type === 'visit' ? 'Arrange a Viewing' : 'Enquire About Asset'}
                    </h2>
                    {propertyTitle && (
                      <p className="text-white/40 font-light text-sm italic">Property: {propertyTitle}</p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-2">Full Name</label>
                        <Input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="h-14 bg-white/5 border-white/10 rounded-2xl focus-visible:ring-gold-500/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-2">Phone Number</label>
                        <Input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+44 20 ..."
                          className="h-14 bg-white/5 border-white/10 rounded-2xl focus-visible:ring-gold-500/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-2">Email Address</label>
                      <Input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="email@example.com"
                        className="h-14 bg-white/5 border-white/10 rounded-2xl focus-visible:ring-gold-500/30"
                      />
                    </div>

                    {type === 'visit' && (
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-2">Preferred Date</label>
                        <Input 
                          required
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="h-14 bg-white/5 border-white/10 rounded-2xl focus-visible:ring-gold-500/30 text-white/50"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-2">Personal Requirements</label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your specific interest..."
                        className="min-h-[100px] bg-white/5 border-white/10 rounded-2xl focus-visible:ring-gold-500/30 p-4"
                      />
                    </div>

                    <div className="flex items-center gap-4 py-2 opacity-50">
                      <ShieldCheck size={16} className="text-gold-500" />
                      <span className="text-[8px] uppercase tracking-widest font-bold">End-to-End Encryption Enabled</span>
                    </div>

                    <Button 
                      className="w-full h-16 bg-gold-500 hover:bg-gold-600 text-black font-extrabold uppercase tracking-[.25em] text-[10px] rounded-2xl group"
                    >
                      {type === 'visit' ? 'Secure Viewing' : 'Send Secure Message'}
                      <Send size={16} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
