import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function LegalPage() {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  return (
    <div className="bg-luxury-cream min-h-screen">
      <PageHero 
        title={isPrivacy ? 'Privacy' : 'Terms of'}
        subtitle="Studio Information"
        italicWord={isPrivacy ? 'Philosophy' : 'Engagement'}
        image="/images/img_41.jpg"
      />

      <div className="container mx-auto px-6 max-w-4xl py-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-12"
        >
          <div className="prose prose-luxury prose-lg max-w-none text-luxury-charcoal/70 leading-loose space-y-10 bg-luxury-white p-12 md:p-20 shadow-2xl rounded-sm border border-luxury-charcoal/5">
             {isPrivacy ? (
               <>
                 <section className="space-y-6">
                    <h2 className="text-3xl font-serif text-luxury-charcoal">Privacy and Confidence</h2>
                    <p className="text-lg font-light">
                       At Vanya Luxury Interiors, discretion is as much a part of our architecture as marble and wood. We respect the absolute privacy of our clients and the integrity of their data.
                    </p>
                 </section>

                 <div className="w-16 h-px bg-luxury-gold/30 my-12" />

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">1. Data Collection</h3>
                    <p>
                       We only collect information provided voluntarily via our private consultation inquiry form. This includes your name, contact details, and project vision. We do not use cookies for tracking or sell your information to third-party entities.
                    </p>
                 </section>

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">2. Utilization</h3>
                    <p>
                       Your information is strictly used to facilitate the design consultation process. We may store your digital address to send studio updates and journal entries, which you can opt-out of at any time.
                    </p>
                 </section>

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">3. Archival Security</h3>
                    <p>
                       Client project data, including blueprints and personal preferences, is stored in encrypted, non-public archives. Access is restricted to the founding principal and relevant project leads.
                    </p>
                 </section>
               </>
             ) : (
               <>
                 <section className="space-y-6">
                    <h2 className="text-3xl font-serif text-luxury-charcoal">Terms of Engagement</h2>
                    <p className="text-lg font-light">
                       Engaging Vanya Luxury Interiors is a commitment to a collaborative journey. These terms outline the framework of our shared architectural pursuit.
                    </p>
                 </section>

                 <div className="w-16 h-px bg-luxury-gold/30 my-12" />

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">1. Consultation and Retainer</h3>
                    <p>
                       The initial consultation is a discovery phase. Formal design work commences only after a mutual agreement is signed and a project retainer is secured.
                    </p>
                 </section>

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">2. Intellectual Property</h3>
                    <p>
                       All design concepts, sketches, and 3D visualizations remain the intellectual property of Vanya Luxury Interiors until project completion and final settlement.
                    </p>
                 </section>

                 <section className="space-y-6">
                    <h3 className="text-xl uppercase tracking-widest font-black text-luxury-gold">3. Ethical Sourcing</h3>
                    <p>
                       Our studio operates on a principle of material integrity. We prioritize vendors who practice sustainable extraction and fair wages for artisans.
                    </p>
                 </section>
               </>
             )}

             <div className="pt-16 border-t border-luxury-charcoal/5 group text-center space-y-8">
                <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-charcoal/30 font-black">
                   Last Updated: April 2026
                </p>
                <div>
                   <button 
                    onClick={() => window.print()} 
                    className="px-10 py-4 border border-luxury-gold text-[10px] uppercase tracking-[0.3em] font-black text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500"
                   >
                      Print Document
                   </button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
