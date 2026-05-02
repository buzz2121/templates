
import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/#"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-colors"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute -top-12 right-0 bg-white text-neutral-800 text-[10px] font-bold px-3 py-2 rounded-2xl shadow-xl border border-neutral-100 whitespace-nowrap hidden md:block">
        Chat with a Florist
      </span>
    </motion.a>
  );
};
