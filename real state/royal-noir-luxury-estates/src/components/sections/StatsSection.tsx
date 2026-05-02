import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        if (start === end) return;

        const duration = 2000;
        const increment = end / (duration / 50);

        let timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return <span ref={ref}>{Number.isInteger(count) ? count : count.toFixed(1)}{suffix}</span>;
}

const STATS = [
    { label: "Elite Estates Managed", value: 125, suffix: "+" },
    { label: "Billion in Assets Sold", value: 8.4, suffix: "B" },
    { label: "Cities of Influence", value: 36, suffix: "" },
    { label: "Heritage of Excellence", value: 42, suffix: "Y" }
];

export function StatsSection() {
    return (
        <section className="py-40 bg-[#141416] border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                    {STATS.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center group"
                        >
                            <div className="text-5xl md:text-8xl font-display font-medium text-white mb-6 group-hover:text-gold transition-luxury">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-gold transition-luxury">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
        </section>
    );
}
