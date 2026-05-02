import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, TrendingUp, BarChart3, PieChart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const HIGHLIGHTS = [
  { label: "Revenue", value: "AED 5.2B", change: "+12%" },
  { label: "Net Profit", value: "AED 1.8B", change: "+45%" },
  { label: "Assets", value: "AED 28B", change: "Stable" },
  { label: "Liquidity", value: "AED 4.5B", change: "Strong" },
];

const REPORTS = [
  { title: "Annual Report 2024", type: "PDF", size: "4.2 MB" },
  { title: "Sustainability Report 2024", type: "PDF", size: "2.8 MB" },
  { title: "Q3 2025 Financial Results", type: "PDF", size: "1.1 MB" },
  { title: "Corporate Governance Report", type: "PDF", size: "1.5 MB" },
];

export default function Investors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Institutional Architecture"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl space-y-8">
              <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Institutional Relations</span>
              <h1 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter leading-none text-white">Investor <br/> <span className="italic text-brand-gold text-white">Centricity</span></h1>
              <p className="text-xl font-light text-white/60 max-w-2xl leading-relaxed">
                Empowering our shareholders through transparency, sustainable growth, and exceptional financial stewardship across our global portfolio.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                 <Button className="bg-brand-gold text-white rounded-none px-12 h-16 uppercase font-bold tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                    Stock Price: DFM: BUZZ
                 </Button>
                 <Button variant="outline" className="border-white/20 text-white rounded-none px-12 h-16 uppercase font-bold tracking-widest text-[10px] hover:bg-brand-gold transition-all">
                    Annual Reports <Download className="ml-2" size={14} />
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-white border-b border-brand-line">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-brand-surface p-10 border border-brand-line text-center group hover:border-brand-gold transition-colors duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-[10px] uppercase text-brand-gray font-black tracking-widest mb-4 group-hover:text-brand-gold transition-colors">{item.label}</p>
                  <h3 className="text-3xl lg:text-4xl font-serif mb-2">{item.value}</h3>
                  <p className="text-[9px] uppercase font-bold text-green-600 flex items-center justify-center gap-1">
                    <TrendingUp size={10} /> {item.change}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10 reveal-section">
              <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Strategy</span>
              <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter">Diversified <br/> Prosperity</h2>
              <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                 <p>
                   Our investment strategy is built on three pillars: Geographic Diversification, Brand Synergy, and Operational Excellence. By focusing on emerging high-growth markets and prestige luxury brand partnerships, we ensure a resilient and flourishing asset portfolio.
                 </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                 <div className="flex gap-4">
                    <BarChart3 className="text-brand-gold shrink-0" size={32} />
                    <div>
                       <h4 className="text-lg font-serif">Market Leadership</h4>
                       <p className="text-sm text-brand-gray mt-1 leading-relaxed">Dominating the luxury residential sector across the GCC and expanding globally.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <PieChart className="text-brand-gold shrink-0" size={32} />
                    <div>
                       <h4 className="text-lg font-serif">Asset Stability</h4>
                       <p className="text-sm text-brand-gray mt-1 leading-relaxed">A robust portfolio of ready assets providing recurring rental income and capital gains.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="relative reveal-section">
              <div className="aspect-[4/5] bg-brand-surface relative overflow-hidden shadow-luxury">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Assets" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-72 h-80 bg-brand-gold p-12 text-white flex flex-col justify-between hidden lg:flex">
                 <ShieldCheck size={48} />
                 <div className="space-y-4">
                    <h4 className="text-2xl font-serif italic">AAA Rated</h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest leading-relaxed">Reflecting our strong solvency and commitment to meeting financial obligations.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Reports & Downloads */}
      <section className="py-32 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="mb-20 reveal-section">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Document Library</span>
            <h2 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter mt-4">Downloads</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {REPORTS.map((report, i) => (
                <motion.div 
                  key={i}
                  className="bg-white p-8 flex items-center justify-between border border-brand-line hover:border-brand-gold transition-all duration-500 reveal-section group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-brand-surface flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                        <FileText size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-serif tracking-tight">{report.title}</h4>
                        <p className="text-[9px] uppercase tracking-widest text-brand-gray font-black mt-1">
                          {report.type} • {report.size}
                        </p>
                     </div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-brand-line flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all group-hover:bg-brand-gold group-hover:text-white">
                     <Download size={16} />
                  </button>
                </motion.div>
             ))}
          </div>
          
          <div className="mt-20 border-t border-brand-line pt-20 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
             <div className="space-y-4">
                <h3 className="text-4xl font-serif">Investor Queries?</h3>
                <p className="text-brand-gray text-lg max-w-xl">Contact our dedicated Investor Relations team for any inquiries regarding Buzz Estate financial operations.</p>
             </div>
             <Button className="bg-brand-dark text-white rounded-none px-16 h-18 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-brand-gold transition-all shadow-md">
                Contact IR Team <ArrowUpRight size={16} className="ml-2" />
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
