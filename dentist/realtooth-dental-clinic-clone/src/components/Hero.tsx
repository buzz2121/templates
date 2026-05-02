import { motion } from 'motion/react';
import { Calendar, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-pill mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                Best Dental Clinic in Lucknow
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                A Brighter <span className="text-primary-600">Smile</span> Starts Here.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg mb-10">
                Experience world-class dental care with advanced technology and a team of specialists dedicated to your oral health and painless treatments.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95">
                  Consult Our Doctors
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">5,000+</span>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Happy Patients</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Glass Card) */}
          <div className="lg:w-1/2 relative h-[500px] w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-br from-primary-100 to-slate-200 rounded-[40px] overflow-hidden flex items-center justify-center p-8 shadow-inner"
            >
              <div className="w-full h-full bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl flex flex-col p-8 space-y-6">
                <div className="h-14 w-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">ISO Certified Quality</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">State-of-the-art sterilization and painless laser procedures for superior patient comfort and long-lasting results.</p>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white">
                    <div className="text-primary-600 font-bold text-xl leading-none mb-1">99.8%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Success Rate</div>
                  </div>
                  <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white">
                    <div className="text-primary-600 font-bold text-xl leading-none mb-1">20+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
