import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Landmark, ShieldCheck, TrendingUp, PieChart as PieIcon, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as ChartTooltip } from 'recharts';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [interestRate, setInterestRate] = useState(3.8);
  const [tenure, setTenure] = useState(25);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // Basic validation to ensure we have numbers
    const p = Math.max(0, loanAmount || 0);
    const rate = Math.max(0, interestRate || 0);
    const yrs = Math.max(1, tenure || 1);

    const r = rate / 12 / 100;
    const n = yrs * 12;
    
    if (r === 0) {
      const calculatedEmi = p / n;
      setEmi(calculatedEmi || 0);
      setTotalPayment(p || 0);
      setTotalInterest(0);
    } else {
      const calculatedEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPay = calculatedEmi * n;
      const totalInt = totalPay - p;

      // Final safety check to prevent NaN propagation
      setEmi(isNaN(calculatedEmi) ? 0 : calculatedEmi);
      setTotalPayment(isNaN(totalPay) ? 0 : totalPay);
      setTotalInterest(isNaN(totalInt) ? 0 : totalInt);
    }
  }, [loanAmount, interestRate, tenure]);

  const chartData = useMemo(() => {
    // Ensure both values are valid numbers and at least one is > 0 to avoid empty chart issues
    const principal = Math.max(0, loanAmount || 0);
    const interest = Math.max(0, totalInterest || 0);
    
    if (principal === 0 && interest === 0) return [];
    
    return [
      { name: 'Principal (Capital)', value: principal, color: '#D4AF37' },
      { name: 'Interest (Cost)', value: interest, color: '#1a1a1a' }
    ];
  }, [loanAmount, totalInterest]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-gold-500" />
            <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.6em]">Capital Advisory</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif leading-[0.9] italic"
          >
            Mortgage <br />
            <span className="gold-text">Intelligence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl font-light text-xl leading-relaxed italic font-serif"
          >
            Project your wealth allocation with institutional-grade precision. Our bespoke calculator aligns your global property acquisitions with strategic fiscal planning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl space-y-12 ring-1 ring-white/5 shadow-2xl">
              
              {/* Loan Amount Control */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-white/30">Principal Capital</label>
                    <p className="text-sm text-white/60 font-serif italic">Total loan amount requested</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end font-serif gold-text gap-2">
                      <span className="text-4xl">£</span>
                      <input 
                        type="number" 
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="bg-transparent border-b border-gold-500/30 text-4xl w-48 text-right focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative pt-4">
                  <Slider 
                    value={[loanAmount]} 
                    onValueChange={(val) => setLoanAmount(val[0])}
                    max={50000000} 
                    min={100000} 
                    step={100000}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between mt-4 text-[9px] text-white/20 uppercase font-black tracking-widest">
                    <span>£100K</span>
                    <span>£50M</span>
                  </div>
                </div>
              </div>

              {/* Interest Rate Control */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-white/30">Annual Percentage Rate</label>
                    <p className="text-sm text-white/60 font-serif italic">Fixed or variable interest index</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end font-serif gold-text gap-1">
                      <input 
                        type="number" 
                        step="0.01"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="bg-transparent border-b border-gold-500/30 text-4xl w-24 text-right focus:outline-none focus:border-gold-500 transition-colors"
                      />
                      <span className="text-lg opacity-50">%</span>
                    </div>
                  </div>
                </div>
                <div className="relative pt-4">
                  <Slider 
                    value={[interestRate * 100]} 
                    onValueChange={(val) => setInterestRate(val[0] / 100)}
                    max={2000} 
                    min={10} 
                    step={5}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between mt-4 text-[9px] text-white/20 uppercase font-black tracking-widest">
                    <span>0.1%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>

              {/* Tenure Control */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-white/30">Contract Period</label>
                    <p className="text-sm text-white/60 font-serif italic">Duration of capital amortization</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end font-serif gold-text gap-2">
                       <input 
                        type="number" 
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="bg-transparent border-b border-gold-500/30 text-4xl w-20 text-right focus:outline-none focus:border-gold-500 transition-colors"
                      />
                      <span className="text-lg opacity-50">Years</span>
                    </div>
                  </div>
                </div>
                <div className="relative pt-4">
                  <Slider 
                    value={[tenure]} 
                    onValueChange={(val) => setTenure(val[0])}
                    max={40} 
                    min={1} 
                    step={1}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between mt-4 text-[9px] text-white/20 uppercase font-black tracking-widest">
                    <span>1 Year</span>
                    <span>40 Years</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                   <ShieldCheck className="text-gold-500" size={24} />
                 </div>
                 <div>
                   <h4 className="text-sm font-serif italic text-white">Verified Precision</h4>
                   <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-1">Institutional Standards</p>
                 </div>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                   <TrendingUp className="text-gold-500" size={24} />
                 </div>
                 <div>
                   <h4 className="text-sm font-serif italic text-white">Market Real-Time</h4>
                   <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-1">Live Interbank Index</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Results Analytics Panel */}
          <div className="lg:col-span-5 sticky top-32 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-1.5 bg-gradient-to-br from-gold-500/30 via-white/5 to-transparent rounded-[3.5rem] shadow-2xl"
            >
              <div className="bg-[#0a0a0a] rounded-[3.3rem] p-12 space-y-10 ring-1 ring-white/5">
                <div className="text-center space-y-4">
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30">Monthly Capital Outflow</p>
                  <h2 className="text-6xl md:text-7xl font-serif italic gold-text tracking-tighter">
                    {formatCurrency(emi)}
                  </h2>
                </div>

                {/* Distribution Breakdown */}
                <div className="flex flex-col items-center py-6">
                   <div className="w-full h-48 relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-black/90 border border-white/10 p-3 rounded-lg backdrop-blur-xl">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">{payload[0].name}</p>
                                    <p className="text-gold-500 font-serif italic">{formatCurrency(payload[0].value as number)}</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
                        <PieIcon className="text-gold-500/20" size={32} />
                      </div>
                   </div>
                   
                   <div className="flex gap-12 mt-4">
                      {chartData.map(item => (
                        <div key={item.name} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-[9px] uppercase font-black tracking-widest text-white/40">{item.name}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-10">
                  <div className="flex justify-between items-center group">
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-white/60 transition-colors">Cumulative Interest</span>
                    <span className="text-2xl font-serif text-white/80">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/30 group-hover:text-white/60 transition-colors">Gross Capital Cost</span>
                    <span className="text-2xl font-serif text-white/80">{formatCurrency(totalPayment)}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                   <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-black uppercase tracking-widest text-[10px] h-16 rounded-2xl shadow-[0_20px_40px_rgba(212,175,55,0.2)] transition-all duration-500 hover:scale-[1.02] active:scale-95">
                      Secure Private Financing <ArrowRight size={18} className="ml-3" />
                   </Button>
                   <div className="flex justify-center gap-8">
                      <button className="flex items-center gap-2 text-white/20 hover:text-gold-500 transition-colors cursor-pointer outline-none">
                        <Download size={14} />
                        <span className="text-[8px] uppercase font-bold tracking-widest">Prospectus</span>
                      </button>
                      <button className="flex items-center gap-2 text-white/20 hover:text-gold-500 transition-colors cursor-pointer outline-none">
                        <Share2 size={14} />
                        <span className="text-[8px] uppercase font-bold tracking-widest">Share Allocation</span>
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Support Widget */}
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <Landmark className="text-gold-500/40" size={20} />
                <h4 className="text-sm font-serif italic text-white/80">Structured Finance Desk</h4>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-light italic font-serif">
                For complex acquisitions involving multiple jurisdictions or special purpose vehicles, our structured finance desk is available for bespoke consultation.
              </p>
              <Button variant="outline" className="w-full border-white/10 hover:border-gold-500/50 hover:bg-gold-500/5 text-white/60 hover:text-gold-500 uppercase tracking-[0.2em] text-[10px] font-black h-12 rounded-2xl transition-all">
                Speak with a Strategist
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
