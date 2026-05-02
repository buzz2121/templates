import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Info } from "lucide-react";

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(20);

  const emi = useMemo(() => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return isNaN(emiValue) ? 0 : Math.round(emiValue);
  }, [loanAmount, interestRate, tenure]);

  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section className="py-40 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-8"
                >
                    <div className="w-16 h-[1px] gold-gradient" />
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[10px]">Financial Intelligence</span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-medium text-white uppercase leading-[0.9] mb-12">INVESTMENT <br /><span className="italic font-light text-gold ml-[-0.05em]">PROJECTION</span></h2>
                <p className="text-white/30 font-light text-xl leading-relaxed mb-16 tracking-wide italic max-w-md">
                    "For those who understand that timing and capital structure are the true foundations of luxury."
                </p>

                <div className="space-y-4 bg-[#141416] p-10 border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center text-white/50 text-[10px] border-b border-white/5 pb-6">
                        <span className="flex items-center gap-3 uppercase tracking-widest"><Info size={14} className="text-gold"/> Principal Value</span>
                        <span className="font-bold text-white text-lg">${loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-white/50 text-[10px] border-b border-white/5 py-6">
                        <span className="flex items-center gap-3 uppercase tracking-widest"><Info size={14} className="text-gold"/> Accrued Interest</span>
                        <span className="font-bold text-white text-lg">${totalInterest.toLocaleString()}</span>
                    </div>
                     <div className="flex justify-between items-center text-white/50 text-[10px] pt-6">
                        <span className="flex items-center gap-3 uppercase tracking-widest"><Info size={14} className="text-gold"/> Total Acquisition</span>
                        <span className="font-bold text-white text-lg">${totalPayment.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#141416] p-12 md:p-20 space-y-16 border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full" />
                
                <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-end">
                        <Label className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Acquisition Value ($)</Label>
                        <span className="text-3xl font-display font-medium text-white">${loanAmount.toLocaleString()}</span>
                    </div>
                    <Slider 
                        className="opacity-70 group-hover:opacity-100 transition-luxury" 
                        value={[loanAmount]} 
                        max={100000000} 
                        step={500000} 
                        onValueChange={v => setLoanAmount(v[0])} 
                    />
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-end">
                        <Label className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Preferred Interest (%)</Label>
                        <span className="text-3xl font-display font-medium text-white">{interestRate}%</span>
                    </div>
                    <Slider value={[interestRate]} max={15} step={0.1} onValueChange={v => setInterestRate(v[0])} />
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-end">
                        <Label className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Acquisition Tenure (Years)</Label>
                        <span className="text-3xl font-display font-medium text-white">{tenure} Years</span>
                    </div>
                    <Slider value={[tenure]} max={30} step={1} onValueChange={v => setTenure(v[0])} />
                </div>

                <div className="pt-16 border-t border-white/10 mt-16 text-center relative z-10">
                    <div className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-6">Monthly Stewardship</div>
                    <motion.div 
                        key={emi}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter"
                    >
                        ${emi.toLocaleString()}
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
