import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  link?: string;
  linkLabel?: string;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  link,
  linkLabel = 'View All',
  className
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col lg:flex-row lg:items-end justify-between gap-8', className)}>
      <div className="space-y-4">
        <motion.span 
          className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-black block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            className="text-5xl lg:text-8xl font-serif uppercase tracking-tighter leading-[0.9]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
      
      {link && (
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.4 }}
           viewport={{ once: true }}
           className="pb-4"
        >
          <Link to={link} className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-black text-brand-muted hover:text-brand-gold transition-colors group relative">
            {linkLabel} 
            <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500 ease-out" />
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold group-hover:w-full transition-all duration-500" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
