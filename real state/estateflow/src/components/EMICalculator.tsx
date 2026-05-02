import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator as CalcIcon, ShieldCheck, TrendingUp, ArrowRight, PieChart as PieIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function EMICalculator({ price, isOpen, onClose }: { price: number, isOpen: boolean, onClose: () => void }) {
  const [loanAmount, setLoanAmount] = useState(price * 0.8);
  const [interestRate, setInterestRate] = useState(4.5);
  const [tenure, setTenure] = useState(25);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    // Basic validation to ensure we have numbers
    const p = Math.max(0, loanAmount || 0);
    const rate = Math.max(0, interestRate || 0);
    const yrs = Math.max(1, tenure || 1);

    const r = rate / (12 * 100);
    const n = yrs * 12;
    
    if (r === 0) {
      const calculatedEmi = p / n;
      setEmi(calculatedEmi || 0);
      setTotalInterest(0);
    } else {
      const calculatedEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPay = calculatedEmi * n;
      const totalInt = totalPay - p;

      setEmi(isNaN(calculatedEmi) ? 0 : calculatedEmi);
      setTotalInterest(isNaN(totalInt) ? 0 : totalInt);
    }
  }, [loanAmount, interestRate, tenure]);

  const chartData = useMemo(() => {
    const principal = Math.max(0, loanAmount || 0);
    const interest = Math.max(0, totalInterest || 0);
    if (principal === 0 && interest === 0) return [];
    
    return [
      { name: 'Principal', value: principal, color: '#D4AF37' },
      { name: 'Interest', value: interest, color: '#262626' }
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#080807] border border-white/10 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] ring-1 ring-gold-500/10"
          >
            <div className="flex flex-col lg:flex-row h-full">
              
              {/* Left Side: Controls */}
              <div className="lg:w-1/2 p-10 md:p-14 space-y-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-white italic font-bold flex items-center gap-3">
                      <CalcIcon className="text-gold-500" size={24} /> Financial Advisor
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-gold-500/50 font-black">Private Wealth Management</p>
                  </div>
                  <button onClick={onClose} className="lg:hidden text-white/20 hover:text-white">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-10 pt-4">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Principal Amount</label>
                      <div className="flex items-center font-serif gold-text gap-2">
                        <span>£</span>
                        <input 
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="bg-transparent border-b border-gold-500/30 text-xl w-32 text-right focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>
                    <Slider 
                      max={price} 
                      min={price * 0.1}
                      step={Math.round(price / 100)} 
                      value={[loanAmount]} 
                      onValueChange={(val) => setLoanAmount(val[0])}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Interest Rate (%)</label>
                      <div className="flex items-center font-serif gold-text gap-1">
                        <input 
                          type="number"
                          step="0.01"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="bg-transparent border-b border-gold-500/30 text-xl w-16 text-right focus:outline-none focus:border-gold-500"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <Slider 
                      max={1500} 
                      min={10} 
                      step={5} 
                      value={[interestRate * 100]} 
                      onValueChange={(val) => setInterestRate(val[0] / 100)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Term (Years)</label>
                      <div className="flex items-center font-serif gold-text gap-2">
                        <input 
                          type="number"
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="bg-transparent border-b border-gold-500/30 text-xl w-12 text-right focus:outline-none focus:border-gold-500"
                        />
                        <span>Yrs</span>
                      </div>
                    </div>
                    <Slider 
                      max={40} 
                      min={1} 
                      step={1} 
                      value={[tenure]} 
                      onValueChange={(val) => setTenure(val[0])}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex gap-6 pt-4">
                  <div className="flex items-center gap-3 opacity-40">
                    <ShieldCheck size={18} className="text-gold-500" />
                    <span className="text-[8px] uppercase font-black tracking-widest">Encrypted Calc</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-40">
                    <TrendingUp size={18} className="text-gold-500" />
                    <span className="text-[8px] uppercase font-black tracking-widest">Market Adjusted</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Results */}
              <div className="lg:w-1/2 p-10 md:p-14 space-y-10 flex flex-col justify-between bg-black relative">
                <button onClick={onClose} className="hidden lg:block absolute top-10 right-10 text-white/20 hover:text-white transition-colors">
                  <X size={24} />
                </button>

                <div className="text-center space-y-3 pt-6">
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30">Monthly Commitment</p>
                  <h2 className="text-5xl md:text-6xl font-serif italic gold-text tracking-tighter">
                    {formatCurrency(emi)}
                  </h2>
                </div>

                <div className="w-full h-48 relative">
                   <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                       <Pie
                         data={chartData}
                         cx="50%"
                         cy="50%"
                         innerRadius={65}
                         outerRadius={85}
                         paddingAngle={10}
                         dataKey="value"
                         stroke="none"
                       >
                         {chartData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                         ))}
                       </Pie>
                     </PieChart>
                   </ResponsiveContainer>
                   <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
                     <PieIcon className="text-gold-500/20" size={28} />
                   </div>
                </div>

                <div className="space-y-4 px-6">
                   <div className="flex justify-between items-center text-white/40">
                     <span className="text-[9px] uppercase font-bold tracking-widest italic font-serif">Cumulative Interest</span>
                     <span className="text-lg font-serif italic text-white/80">{formatCurrency(totalInterest)}</span>
                   </div>
                   <div className="w-full h-px bg-white/5" />
                   <div className="flex justify-between items-center text-white/40">
                     <span className="text-[9px] uppercase font-bold tracking-widest italic font-serif">Gross Capital Cost</span>
                     <span className="text-lg font-serif italic text-white/80">{formatCurrency(loanAmount + totalInterest)}</span>
                   </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full h-16 bg-gold-500 text-black hover:bg-gold-600 font-extrabold uppercase tracking-[0.2em] text-[10px] rounded-2xl transition-all shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex items-center justify-center gap-4">
                    Request Financing Approval <ArrowRight size={18} />
                  </Button>
                  <p className="text-[8px] text-center text-white/20 uppercase font-black tracking-[0.3em]">Institutional Verification Required</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
