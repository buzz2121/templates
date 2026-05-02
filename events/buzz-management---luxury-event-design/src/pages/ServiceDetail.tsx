import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Play, Star, Calendar, Users, MapPin } from 'lucide-react';

const SERVICE_DATA: Record<string, any> = {
  weddings: {
    title: "Weddings",
    italic: "Beyond the Vow",
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
    description: "At Buzz Management, we don't just plan weddings; we orchestrate emotional legacies. Every wedding we design is a unique reflection of the couple's personality, history, and shared future.",
    approach: "Our approach is hollistic. We manage everything from the high-concept visual design to the minute technical details of acoustics and lighting. We believe that a luxury wedding is a symphony of moments—none too small to be perfect.",
    features: [
      "Bespoke Visual Concept & World-Building",
      "Global Venue Sourcing & Negotiation",
      "High-End Floral Architecture & Installation",
      "Custom Stationery & Identity Design",
      "Catering Curation & Menu Storytelling",
      "On-Site Concierge for the Bridal Party",
      "Vendor Management & Technical Direction"
    ],
    process: [
      { step: "The Discovery", detail: "A deep dive into your love story and aesthetic preferences." },
      { step: "The Design Blueprint", detail: "3D renderings and mood boards that bring the vision to life." },
      { step: "The Curation", detail: "Hand-picking the world's finest artisans to execute the design." },
      { step: "The Celebration", detail: "Flawless execution with zero stress for the couple." }
    ]
  },
  corporate: {
    title: "Corporate",
    italic: "Brand Authority",
    hero: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000",
    description: "Corporate events are a platform for your brand's voice. We produce strategic experiences that elevate corporate identity, foster professional relationships, and deliver clear ROI.",
    approach: "We blend the precision of corporate strategy with the creativity of luxury event design. Whether it's a product launch for 2,000 or a board retreat for 10, the Buzz Management touch ensures your message is heard and felt.",
    features: [
      "Brand Activation & Immersive Product Launches",
      "Global Conference Production & Management",
      "Executive Retreats & Mastermind Design",
      "State-of-the-Art AV & Technical Production",
      "Corporate Hospitality & VIP Management",
      "Event Analytics & ROI Tracking",
      "Interactive Digital Integration"
    ],
    process: [
      { step: "Brand Audit", detail: "Understanding your corporate identity and event goals." },
      { step: "Strategic Design", detail: "Creating a narrative arc that supports your business objectives." },
      { step: "Logistics", detail: "Managing complex global requirements and vendor networks." },
      { step: "Impact", detail: "Executing an event that drives conversation and results." }
    ]
  },
  entertainment: {
    title: "Entertainment",
    italic: "Epic Productions",
    hero: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2000",
    description: "Theatrical, immersive, and unforgettable. Our entertainment productions push the boundaries of what's possible in the live event space.",
    approach: "We approach entertainment as a multi-sensory journey. From award shows to high-profile galas, we integrate technology, celebrity talent, and breathtaking set design to create moments of pure wonder.",
    features: [
      "Award Show Production & Broadcast Integration",
      "Charity Galas & High-Impact Fundraising",
      "Immersive Set Design & Scenic Construction",
      "Celebrity Talent Relations & Technical Riders",
      "Multi-Sensory Special Effects (SFX)",
      "High-Definition Live Stream Coordination",
      "Backstage & Artist Management"
    ],
    process: [
      { step: "Scripting", detail: "Developing the show's narrative and timing." },
      { step: "Technical Pre-Viz", detail: "Advanced mapping of lighting, sound, and stage motion." },
      { step: "Rehearsals", detail: "Meticulous run-throughs to ensure split-second precision." },
      { step: "The Premiere", detail: "Delivering a world-class show to a global audience." }
    ]
  },
  lifestyle: {
    title: "Lifestyle",
    italic: "Living Artistry",
    hero: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000",
    description: "Buzz Management extends its design expertise into the world of daily luxury. We transform environments and identities through fashion and interior consultation.",
    approach: "Lifestyle design is about personal branding and environmental harmony. We apply our 'event' eye to your permanent world, ensuring every room and every outfit communicates your status and story.",
    features: [
      "Personal Styling & Wardrobe Architecture",
      "Luxury Interior Design & Space Planning",
      "Home Entertaining Consultation",
      "Private Concierge & Travel Curation",
      "Art Acquisition & Gallery Advisory",
      "Custom Furniture & Lighting Design",
      "Personal Brand Development"
    ],
    process: [
      { step: "Profile", detail: "Analyzing your personal style and environmental needs." },
      { step: "Visioning", detail: "Developing a mood and lifestyle blueprint." },
      { step: "Acquisition", detail: "Sourcing unique pieces and fashion from global networks." },
      { step: "Transformation", detail: "Finalizing the styling and space implementation." }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = slug ? SERVICE_DATA[slug] : null;

  if (!data) return <Navigate to="/services" />;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="h-[70vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={data.hero} alt={data.title} className="w-full h-full object-cover brightness-[0.5]" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gold text-[12px] font-bold tracking-[0.5em] uppercase mb-4">Service Deep-Dive</p>
            <h1 className="text-6xl md:text-9xl font-serif text-white">{data.title} <br /><span className="italic font-light opacity-80">{data.italic}</span></h1>
            <div className="mt-12 h-[1px] w-24 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">The Philosophy</p>
            <h2 className="text-5xl font-serif leading-tight text-charcoal">{data.description}</h2>
            <div className="space-y-6 text-xl text-charcoal/90 font-light leading-relaxed">
              <p>{data.approach}</p>
            </div>
            <div className="pt-8">
              <Link to="/contact" className="inline-block bg-charcoal text-white px-12 py-6 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gold transition-all shadow-xl">
                Begin Your Reservation
              </Link>
            </div>
          </div>

          <div className="bg-cream p-12 md:p-20 shadow-2xl border border-gold/10 relative rounded-2xl">
            <h3 className="text-2xl font-serif mb-12">Service Inclusions</h3>
            <ul className="space-y-6">
              {data.features.map((feature: string, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-charcoal/80 tracking-wide text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-16 pt-10 border-t border-charcoal/10 flex items-center justify-between">
               <div>
                  <p className="text-[10px] font-bold tracking-widest text-gold uppercase mb-2">Ready to Talk?</p>
                  <p className="font-serif italic text-2xl">hello@buzzmanagement.com</p>
               </div>
               <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center text-gold">
                  <Star fill="currentColor" size={24} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Map */}
      <section className="py-40 bg-charcoal text-white relative">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <span className="text-[20rem] font-serif italic leading-none">PROCESS</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24">
             <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase mb-4">How we work</p>
             <h2 className="text-5xl md:text-7xl font-serif">The Path to <span className="italic">Perfection</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {data.process.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="text-gold font-serif text-5xl opacity-40">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="text-2xl font-serif">{step.step}</h4>
                <p className="text-white/70 leading-relaxed font-light">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related / Gallery Preview */}
      <section className="py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="space-y-8 lg:col-span-1">
             <h2 className="text-5xl font-serif leading-tight">Seen in <br /><span className="italic">Reality</span></h2>
             <p className="text-charcoal/60 leading-relaxed font-light">
               Browse our curated portfolio of actual projects managed by our team. Each image tells a story of success and artistic risk.
             </p>
             <Link to="/gallery" className="inline-flex items-center gap-6 group text-charcoal text-[10px] font-bold tracking-[0.4em] uppercase">
                <span className="border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">View Portfolio</span>
                <ArrowRight size={18} className="text-gold transform group-hover:translate-x-2 transition-transform" />
             </Link>
           </div>
           <div className="aspect-[4/5] overflow-hidden group rounded-2xl shadow-xl">
             <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" referrerPolicy="no-referrer" loading="lazy" />
           </div>
           <div className="aspect-[4/5] overflow-hidden group hidden lg:block rounded-2xl shadow-xl">
             <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" referrerPolicy="no-referrer" loading="lazy" />
           </div>
        </div>
      </section>
    </div>
  );
}
