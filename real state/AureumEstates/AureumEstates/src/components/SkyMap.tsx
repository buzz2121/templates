import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function SkyMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = 300;
    let height = canvas.height = 300;
    
    // Star particles
    const stars: { x: number; y: number; size: number; opacity: number; pulse: number }[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        pulse: Math.random() * 0.02 + 0.01
      });
    }

    // Constellations (lines between stars)
    const connections: [number, number][] = [];
    for (let i = 0; i < 8; i++) {
        connections.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw stars
      stars.forEach(star => {
        star.opacity += star.pulse;
        if (star.opacity > 1 || star.opacity < 0.2) star.pulse *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191, 149, 63, ${star.opacity})`; // Gold color
        ctx.fill();

        // Optional glow
        if (star.opacity > 0.8) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = "#BF953F";
        } else {
            ctx.shadowBlur = 0;
        }
      });

      // Draw constellation lines
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(191, 149, 63, 0.15)";
      connections.forEach(([i, j]) => {
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
      });
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative group/skymap cursor-crosshair">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,149,63,0.1),transparent_70%)] group-hover/skymap:opacity-100 transition-opacity duration-700 opacity-50" />
      <canvas 
        ref={canvasRef} 
        width={300} 
        height={300} 
        className="w-full h-full block"
      />
      
      {/* HUD Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-full h-full border border-gold/20 rounded-full scale-90 opacity-20 animate-[ping_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-gold/10 rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-gold/10 -rotate-45" />
      </div>

      {/* Target Crosshair */}
      <motion.div 
        animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [0.95, 1.05, 0.95]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-4 h-4 border-t border-l border-gold/40" />
        <div className="w-4 h-4 absolute top-0 right-0 border-t border-r border-gold/40" />
        <div className="w-4 h-4 absolute bottom-0 left-0 border-b border-l border-gold/40" />
        <div className="w-4 h-4 absolute bottom-0 right-0 border-b border-r border-gold/40" />
      </motion.div>
    </div>
  );
}
