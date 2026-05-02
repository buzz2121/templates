import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Target, 
  Heart, 
  Shield, 
  Award, 
  HandHeart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const coreValues = [
  { title: 'Innovation', icon: Lightbulb, desc: 'Advanced dental tech and methods.' },
  { title: 'Leadership', icon: Target, desc: 'Pioneering new standards in care.' },
  { title: 'Trust', icon: Shield, desc: 'Transparent patient-doctor relationship.' },
  { title: 'Safety', icon: Award, desc: 'Highest sterilization and hygiene protocols.' },
  { title: 'Excellence', icon: Award, desc: 'Unmatchable quality in every procedure.' },
  { title: 'Generosity', icon: HandHeart, desc: 'Caring for our community with empathy.' }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-100/50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl border border-white">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="About Realtooth" 
                className="w-full rounded-[2.5rem]"
              />
            </div>
            
            {/* Floating Achievement */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl z-20 max-w-[240px]">
              <div className="text-primary-400 font-bold text-4xl mb-2">20+</div>
              <p className="text-white font-bold text-lg leading-tight mb-2">Years of Clinical Excellence</p>
              <div className="w-12 h-1 bg-primary-600 rounded-full" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="badge-pill">About Our Clinic</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Pioneering <span className="text-primary-600">Advanced Laser</span> Dental Care
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Realtooth, we believe in combining medical precision with extreme patient comfort. Our clinics feature the latest diagnostic tools and state-of-the-art sterilization technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Digital Scanning', 'Painless Laser', '3D X-Ray', 'Single-Visit Crowns'].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-primary-600" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary-100 active:scale-95 flex items-center gap-3">
                Experience the Difference
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
