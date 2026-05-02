import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

const cases = [
  {
    category: 'Full Mouth Rehab',
    title: 'Restoring a Life of Smiles',
    desc: 'Patient experienced total tooth loss. Using All-on-4 dental implants, we restored function and aesthetics in just 3 days.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop',
    author: 'Dr. Amitabh Singh'
  },
  {
    category: 'Cosmetic Dentistry',
    title: 'Hollywood Smile Makeover',
    desc: 'Digital Smile Design and ultra-thin porcelain veneers used to transform alignment and brightness.',
    image: 'https://images.unsplash.com/photo-1629909613654-28a3a7c4d4e9?q=80&w=2070&auto=format&fit=crop',
    author: 'Dr. Someshwar Singh'
  }
];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-slate-100/50">
      <div className="container mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4 mx-auto text-primary-700">Success Stories</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Real Results, Real <span className="text-primary-600">Lives</span></h2>
          <p className="text-slate-600 font-medium">Explore how our clinical expertise has changed lives through restorative and cosmetic transformations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-white flex flex-col xl:flex-row group"
            >
              <div className="xl:w-2/5 h-80 xl:h-auto overflow-hidden">
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="xl:w-3/5 p-10 flex flex-col justify-center">
                <div className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-4">{cs.category}</div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{cs.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">{cs.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-400 font-bold">BY {cs.author}</div>
                  <button className="text-primary-600 font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Case <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
