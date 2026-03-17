'use client';
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface MorphSectionProps {
  progress: MotionValue<number>;
}

export default function MorphSection({ progress }: MorphSectionProps) {
  // Projects visibility (30% - 60%)
  const projectsOpacity = useTransform(progress, [0.30, 0.40, 0.50, 0.60], [0, 1, 1, 0]);
  const projectsY = useTransform(progress, [0.30, 0.40, 0.50, 0.60], [50, 0, 0, -50]);

  // Members visibility (60% - 80%)
  const membersOpacity = useTransform(progress, [0.60, 0.65, 0.75, 0.80], [0, 1, 1, 0]);
  
  // Footer (80% - 100%)
  const footerOpacity = useTransform(progress, [0.80, 0.90], [0, 1]);

  return (
    <>
      <motion.div 
        style={{ opacity: projectsOpacity, y: projectsY }}
        className="fixed inset-0 flex flex-col items-start justify-center p-12 md:p-24 pointer-events-none z-10"
      >
        <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference mb-4">
          Digital Artifacts
        </h3>
        <p className="text-xl text-cyan-400/70 tracking-wide font-light max-w-md mix-blend-difference">
          A showcase of our technical output.
        </p>
        
        <div className="mt-12 flex flex-col gap-6 md:flex-row mix-blend-difference">
           <div className="border border-cyan-400/20 bg-black/40 backdrop-blur-sm p-6 rounded-xl w-64">
             <div className="text-xs text-cyan-400/50 mb-2 font-mono">2026</div>
             <div className="text-lg font-bold mb-1">AuraOS</div>
             <div className="text-sm text-cyan-400/70">Next.js / WebGL</div>
           </div>
           <div className="border border-cyan-400/20 bg-black/40 backdrop-blur-sm p-6 rounded-xl w-64 md:mt-12">
             <div className="text-xs text-cyan-400/50 mb-2 font-mono">2025</div>
             <div className="text-lg font-bold mb-1">Nexus Protocol</div>
             <div className="text-sm text-cyan-400/70">Rust / WASM</div>
           </div>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: membersOpacity }}
        className="fixed inset-0 flex flex-col items-center justify-center p-12 pointer-events-none text-center z-10"
      >
        <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference mb-4">
          The Collective
        </h3>
        <p className="text-xl text-cyan-400/70 tracking-wide font-light mb-16 mix-blend-difference">
          Intelligence meets execution.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mix-blend-difference w-full max-w-5xl px-6">
           {['Vision', 'Engineering', 'Design', 'Systems'].map((role) => (
             <div key={role} className="flex flex-col items-center justify-center p-8 border border-cyan-400/20 bg-black/40 backdrop-blur-md rounded-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:border-cyan-400/50 cursor-pointer">
               <div className="text-lg md:text-xl text-cyan-400 font-bold mb-2 uppercase tracking-widest text-center">{role}</div>
               <div className="text-xs text-cyan-400/60 uppercase tracking-wider">Lead</div>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: footerOpacity }}
        className="fixed inset-x-0 bottom-0 p-12 flex justify-center pointer-events-none z-10"
      >
        <h2 className="text-4xl font-light uppercase tracking-[0.2em] mix-blend-difference">
          Join the Orbit.
        </h2>
      </motion.div>
    </>
  );
}
