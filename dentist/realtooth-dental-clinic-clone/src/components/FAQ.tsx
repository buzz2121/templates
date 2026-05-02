import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is laser dentistry really painless?",
    answer: "Yes! In 90% of cases, laser dentistry reduces or eliminates the need for anesthesia and the 'drill'. The laser uses a precise beam of light and a water spray to treat tissue without heat or vibration, which are the main causes of pain in traditional dentistry."
  },
  {
    question: "How long does a typical dental implant procedure take?",
    answer: "With our advanced computer-guided technology, the implant placement itself can take as little as 15-30 minutes. The total treatment timeline, including healing and your final crown, usually spans 3 to 6 months depending on your individual bone health."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Absolutely. We prioritize dental emergencies such as severe toothaches, broken teeth, or knocked-out teeth. Please call our central helpline at +91 91138 83333 immediately for priority bookings."
  },
  {
    question: "What makes digital scanning better than old impressions?",
    answer: "Traditional 'goop' impressions are often messy, uncomfortable, and can cause gagging. Our iTero digital scanners take thousands of tiny pictures to create a near-perfect 3D model of your teeth in seconds, leading to much better-fitting crowns and clear aligners."
  },
  {
    question: "Is Realtooth suitable for children's dentistry?",
    answer: "Yes, we have specialized Pediatric Dentists (Pedodontists) who are experts in managing children's oral health in a fun and fear-free environment. Our clinic is designed to be child-friendly to ensure a positive first experience."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="badge-pill mb-4 text-primary-700">Common Questions</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Wait, You've Got <span className="text-primary-600">Questions?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We believe in complete transparency. If you have more questions, our patient coordinators are always ready to assist you.
            </p>
            <div className="bg-primary-50 p-8 rounded-[2.5rem] border border-primary-100">
              <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <HelpCircle size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Still need help?</h4>
              <p className="text-slate-600 text-sm mb-6 font-medium">Get in touch with our experts for a personalized consultation.</p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-[2rem] border transition-all duration-300 ${
                  openIndex === index ? 'bg-slate-50 border-primary-200' : 'bg-white border-slate-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                >
                  <span className={`font-bold text-lg leading-tight transition-colors ${
                    openIndex === index ? 'text-primary-600' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 text-slate-500 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
