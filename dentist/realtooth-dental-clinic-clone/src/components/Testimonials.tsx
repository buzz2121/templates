import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adesh Yadav',
    role: 'Patient',
    content: 'Best dental clinic in Lucknow. The staff is very professional and the treatment was absolutely painless. Dr. Amit explained everything clearly before starting the procedure.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=adesh'
  },
  {
    name: 'Alok Yadav',
    role: 'Patient',
    content: 'I had my dental implants done here. The technology they use is far ahead of others. Single-visit dentistry is a game changer for busy people like me.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=alok'
  },
  {
    name: 'Priya Singh',
    role: 'Patient',
    content: 'Very clean and hygienic environment. They follow strict protocols which made me feel safe. Highly recommended for any cosmetic dental work.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?u=priya'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-pill mb-4 mx-auto text-primary-700">Patient Stories</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">What our <span className="text-primary-600">Clients Say</span></h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-xl text-slate-800">4.9/5</span>
            <span className="text-slate-400 text-sm font-medium tracking-tight">Based on 10,000+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white relative"
            >
              <Quote className="absolute top-8 right-10 text-primary-500/10" size={60} />
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary-50" />
                <div>
                  <h5 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h5>
                  <p className="text-[10px] text-primary-600 font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
