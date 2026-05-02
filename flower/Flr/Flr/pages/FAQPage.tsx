
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long will my flowers last?",
    answer: "Most of our bouquets stay fresh for 7-10 days with proper care. We include flower food with every delivery and recommend trimming stems at an angle every few days and refreshing the water."
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes, for orders placed before 1:00 PM local time, we offer same-day delivery in select areas. You'll see available delivery dates clearly marked during checkout."
  },
  {
    question: "What happens if the recipient isn't home?",
    answer: "Our couriers are instructed to leave the arrangement in a safe, shaded spot if possible. We will send a delivery confirmation email with a photo of where it was placed."
  },
  {
    question: "Can I customize the items in a bouquet?",
    answer: "Absolutely! Our florists love custom requests. Please reach out to us via WhatsApp or visit our shop during business hours to discuss specific floral combinations."
  },
  {
    question: "Is your packaging eco-friendly?",
    answer: "Yes, sustainability is core to Bloom & Petal. We use plastic-free, recyclable paper wrapping and our flower food packets are compostable."
  }
];

export const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-pink-950">FAQs</h1>
          <p className="text-pink-900/40 font-medium uppercase tracking-[0.3em] text-[10px]">
            Your floral questions answered
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-pink-100 last:border-0 pb-4">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-5 h-5 transition-colors ${activeIndex === i ? 'text-pink-600' : 'text-pink-200 group-hover:text-pink-400'}`} />
                  <h3 className={`text-xl font-bold transition-colors ${activeIndex === i ? 'text-pink-950' : 'text-pink-900/70 group-hover:text-pink-950'}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`p-2 rounded-full transition-all ${activeIndex === i ? 'bg-pink-600 text-white rotate-180' : 'bg-pink-50 text-pink-300'}`}>
                  {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-9 text-pink-900/60 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-pink-100/20 text-center">
        <h2 className="text-3xl font-serif font-bold text-pink-950 mb-4 italic">Still have questions?</h2>
        <p className="text-pink-900/60 mb-10">We're here to help you make your floral dreams come true.</p>
        <button className="px-10 py-4 bg-pink-600 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-pink-100 hover:bg-pink-700 transition-all">
          Contact Support
        </button>
      </section>
    </div>
  );
};
