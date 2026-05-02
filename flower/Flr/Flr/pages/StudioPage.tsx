import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Send, Truck, Lock, ShieldCheck } from 'lucide-react';
import { BouquetBuilder } from '../components/features/BouquetBuilder';
import { AICardGenerator } from '../components/features/AICardGenerator';
import { DeliveryOptions } from '../components/features/DeliveryOptions';
import { CustomBouquet } from '../types';

interface StudioPageProps {
  onAddCustomBouquet: (bouquet: CustomBouquet, personalMessage?: any) => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onAddCustomBouquet }) => {
  const [activeTab, setActiveTab] = useState<'build' | 'personalize' | 'checkout'>('build');
  const [customBouquet, setCustomBouquet] = useState<CustomBouquet | null>(null);
  const [personalMessage, setPersonalMessage] = useState<any>(null);

  const handleBouquetComplete = (bouquet: CustomBouquet) => {
    setCustomBouquet(bouquet);
    setActiveTab('personalize');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMessageSuggest = (text: string) => {
    setPersonalMessage({
      text,
      isAIGenerated: true,
      style: 'AI Choice'
    });
    setActiveTab('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finalizeOrder = () => {
    if (customBouquet) {
      onAddCustomBouquet(customBouquet, personalMessage);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen gradient-premium bg-texture">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/50 backdrop-blur-xl border border-stone-200 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em] shadow-sm"
          >
            <Sparkles size={14} /> The Artisan Studio
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1] italic">
            Your Vision, <br />
            Our <span className="text-primary italic">Expert Handcraft.</span>
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Curate a bespoke floral experience. From individual hand-picked stems to AI-crafted emotional poetry, we transform your sentiment into a masterpiece.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-center mb-24">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-premium border border-stone-100">
            {[
              { id: 'build', label: '1. Build Bouquet', icon: Palette },
              { id: 'personalize', label: '2. AI Message', icon: Send },
              { id: 'checkout', label: '3. Delivery', icon: Truck },
            ].map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === step.id;
              const isPast = (idx === 0 && (activeTab === 'personalize' || activeTab === 'checkout')) || (idx === 1 && activeTab === 'checkout');
              
              return (
                <React.Fragment key={step.id}>
                  {idx > 0 && <div className="w-8 h-px bg-stone-200" />}
                  <button
                    onClick={() => {
                        if (isPast || isActive) setActiveTab(step.id as any);
                    }}
                    className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-stone-900 text-white shadow-2xl scale-105' 
                        : isPast 
                        ? 'text-emerald-600 bg-emerald-50/50' 
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{step.label}</span>
                    {isPast && <ShieldCheck size={14} className="text-emerald-500" />}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'build' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <BouquetBuilder onComplete={handleBouquetComplete} />
            </motion.div>
          )}

          {activeTab === 'personalize' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100">
                   <h2 className="text-3xl font-serif text-stone-900 mb-6 italic">Gifting with Emotion</h2>
                   <p className="text-stone-600 leading-relaxed mb-8">
                     Let our AI help you find the perfect words. We believe a bouquet is only half the story; the message is what makes it a memory.
                   </p>
                   <div className="space-y-4">
                     <div className="flex items-center gap-3 text-stone-900 font-bold text-sm">
                       <ShieldCheck className="text-emerald-500" size={20} /> Handcrafted & Authentic
                     </div>
                     <div className="flex items-center gap-3 text-stone-900 font-bold text-sm">
                       <ShieldCheck className="text-emerald-500" size={20} /> AI-Generated Original Poetry
                     </div>
                   </div>
                </div>
              </div>
              <AICardGenerator onSuggest={handleMessageSuggest} />
            </motion.div>
          )}

          {activeTab === 'checkout' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <DeliveryOptions />
              </div>
              <div className="space-y-6">
                <div className="bg-stone-900 text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif italic mb-8">Summary of Creation</h3>
                    <div className="space-y-6 mb-12">
                       <div className="flex justify-between items-center text-stone-400 text-xs font-bold uppercase tracking-widest">
                         <span>Custom Bouquet</span>
                         <span>${customBouquet?.totalPrice}</span>
                       </div>
                       <div className="flex justify-between items-center text-stone-400 text-xs font-bold uppercase tracking-widest">
                         <span>AI Card Service</span>
                         <span>FREE</span>
                       </div>
                       <div className="flex justify-between items-center border-t border-white/10 pt-6">
                         <span className="text-xl font-serif">Total Value</span>
                         <span className="text-3xl font-serif">${customBouquet?.totalPrice}</span>
                       </div>
                    </div>

                    <button 
                      onClick={finalizeOrder}
                      className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                    >
                      Complete & Secure Checkout
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                      <Lock size={12} /> Secure Guest Checkout Supported
                    </div>
                  </div>
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
