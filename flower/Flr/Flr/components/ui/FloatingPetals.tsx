import React from 'react';
import { motion } from 'motion/react';

export const FloatingPetals: React.FC = () => {
  const petals = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 + '%',
            y: -20,
            rotate: 0 
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: ['0%', '110%'],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            rotate: [0, 360 * Math.random()]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }}
          className="absolute w-4 h-4 bg-primary/10 rounded-full blur-[2px]"
          style={{
            borderRadius: '50% 0 50% 50%',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};
