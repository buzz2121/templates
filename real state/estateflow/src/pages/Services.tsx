import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BarChart3, ShieldCheck, History, Globe2, 
  Search, ArrowRight, TrendingUp, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceData: Record<string, any> = {
  '/audit': {
    title: 'Portfolio Audit',
    subtitle: 'Strategic Valuation & Asset Review',
    icon: <BarChart3 className="text-gold-500" size={48} />,
    description: "Our proprietary audit process provides a comprehensive analysis of your real estate holdings, optimizing your portfolio for maximum capital appreciation and legacy preservation.",
    features: [
      "Market Valuation Adjustments",
      "Risk Mitigation Analysis",
      "Yield Optimization Strategies",
      "Tax Efficiency Planning"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  '/market': {
    title: 'Market Index',
    subtitle: 'Global Luxury Real Estate Intelligence',
    icon: <TrendingUp className="text-gold-500" size={48} />,
    description: "Access real-time data and predictive analytics for the world's most exclusive markets. Stay ahead of global trends with our bespoke intelligence reports.",
    features: [
      "Emerging Market Opportunity Alerts",
      "Macroeconomic Impact Forecasts",
      "Square Footage Appreciation Tracking",
      "Inter-city Yield Comparisons"
    ],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop"
  },
  '/legacy': {
    title: 'Legacy Trust',
    subtitle: 'Generational Wealth Structuring',
    icon: <History className="text-gold-500" size={48} />,
    description: "Real estate is more than shelter; it's a foundation for generations. We structure your acquisitions through sophisticated trust frameworks and legal entities.",
    features: [
      "Dynastic Property Structuring",
      "Estate Tax Shielding",
      "Confidential Ownership Models",
      "International Succession Planning"
    ],
    image: "https://images.unsplash.com/photo-1577962917302-cd874ec1bf19?q=80&w=1200&auto=format&fit=crop"
  },
  '/liaison': {
    title: 'Global Liaison',
    subtitle: 'Personal Concierge & Acquisition Support',
    icon: <Globe2 className="text-gold-500" size={48} />,
    description: "Your dedicated liaison provides a single point of contact for your global property needs, from private viewings to seamless closing across borders.",
    features: [
      "Multi-jurisdictional Coordination",
      "Private Aircraft & Security Arrangement",
      "Local Regulatory Navigation",
      "Bespoke Lifestyle Integration"
    ],
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1200&auto=format&fit=crop"
  }
};

export default function Services() {
  const location = useLocation();
  const data = serviceData[location.pathname] || serviceData['/audit'];

  return (
    <div className="text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.5em] flex items-center gap-3">
                {data.icon} {data.subtitle}
              </span>
              <h1 className="text-6xl md:text-8xl font-serif leading-none italic">{data.title}</h1>
            </div>
            
            <p className="text-xl text-white/60 font-serif italic leading-relaxed max-w-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl group hover:border-gold-500/30 transition-all">
                  <ShieldCheck size={20} className="text-gold-500/40 group-hover:text-gold-500 transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-10 flex gap-6">
              <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-12 h-14 rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                Request Consultation <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-[120px] rounded-full opacity-30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 glass shadow-2xl">
              <img 
                src={data.image} 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100" 
                alt={data.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-gold backdrop-blur-3xl border border-gold-500/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black">
                     <Info size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest">Confidential Service</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Invitation Only Access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
