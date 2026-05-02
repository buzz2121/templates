import React, { useState } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Send, Calendar, Users, MapPin, MessageSquare } from 'lucide-react';

export default function RequestProposal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageTransition>
        <div className="pt-40 pb-24 px-4 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-royal-white/5 border border-royal-gold/20 p-12 backdrop-blur-sm"
          >
            <div className="w-20 h-20 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-royal-gold/30">
              <Send className="text-royal-gold" size={32} />
            </div>
            <h2 className="font-serif-cormorant text-4xl mb-4">Proposal Requested</h2>
            <p className="text-royal-white/70 font-light mb-8">
              Thank you for choosing The Royal Orchid. Our dedicated events concierge will review your requirements and reach out within 24 hours with a bespoke proposal.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-royal-gold text-royal-dark px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-royal-white transition-colors"
            >
              Back to Events
            </button>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Event Inquiry</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Request a <span className="italic text-royal-gold">Proposal</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light">
            Tell us about your vision, and we will curate a majestic experience tailored to your exact desires.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-royal-white/5 p-8 md:p-12 border border-royal-white/10 backdrop-blur-md">
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light"
                placeholder="Alexander Orchid"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light"
                placeholder="alex@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2">Event Type</label>
              <select className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light appearance-none">
                <option className="bg-royal-dark">Wedding Celebration</option>
                <option className="bg-royal-dark">Corporate Summit</option>
                <option className="bg-royal-dark">Social Gala</option>
                <option className="bg-royal-dark">Private Dinner</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2 flex items-center gap-2">
                  <Calendar size={12} /> Preferred Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2 flex items-center gap-2">
                  <Users size={12} /> Guests
                </label>
                <input 
                  type="number" 
                  className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light"
                  placeholder="50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-royal-gold mb-2 flex items-center gap-2">
                <MessageSquare size={12} /> Additional Requirements
              </label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-royal-white/20 py-3 text-royal-white focus:outline-none focus:border-royal-gold transition-colors font-light resize-none"
                placeholder="Describe your vision..."
              />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center mt-8">
            <button 
              type="submit"
              className="bg-royal-gold text-royal-dark px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-royal-white transition-all duration-300 shadow-xl"
            >
              Submit Proposal Request
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
}
