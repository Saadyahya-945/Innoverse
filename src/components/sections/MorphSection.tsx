'use client';
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface MorphSectionProps {
  progress: MotionValue<number>;
}

export default function MorphSection({ progress }: MorphSectionProps) {
  // Projects visibility
  const projectsOpacity = useTransform(progress, [0.32, 0.40, 0.50, 0.58], [0, 1, 1, 0]);
  const projectsY = useTransform(progress, [0.32, 0.40, 0.50, 0.58], [50, 0, 0, -50]);

  // Members visibility (20% to 70% of sequence 4)
  const membersOpacity = useTransform(progress, [0.73, 0.76, 0.86, 0.90], [0, 1, 1, 0]);

  // Events visibility (comes at 80% of sequence 4)
  const eventsOpacity = useTransform(progress, [0.93, 0.95, 0.98, 1.0], [0, 1, 1, 0]);
  const eventsY = useTransform(progress, [0.93, 0.95, 0.98, 1.0], [50, 0, 0, -50]);

  // Footer (adjusted to overlap at the very end nicely)
  const footerOpacity = useTransform(progress, [0.96, 1.0], [0, 1]);

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
        className="fixed inset-0 flex flex-col items-end justify-center p-12 md:p-24 pointer-events-none text-right z-10"
      >
        <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference mb-4">
          Our Team
        </h3>
        <p className="text-xl text-cyan-400/70 tracking-wide font-light mb-16 mix-blend-difference">
          Where intelligence meets execution.
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
        style={{ opacity: eventsOpacity, y: eventsY }}
        className="fixed inset-0 flex flex-col items-end justify-center p-12 md:p-24 pointer-events-none z-10"
      >
        <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference mb-4">
          Our Events
        </h3>
        <p className="text-xl text-cyan-400/70 tracking-wide font-light max-w-md mix-blend-difference">
          Milestone to a Innovative future.
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
        style={{ opacity: footerOpacity }}
        className="fixed inset-x-0 bottom-0 p-8 md:p-12 flex flex-col items-center justify-end pointer-events-none z-10"
      >
        <h2 className="text-4xl font-light uppercase tracking-[0.2em] mix-blend-difference mb-8">
          Join the Orbit.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 pointer-events-auto mix-blend-difference">
          <div className="flex gap-4 md:gap-6">
            <a href="https://www.instagram.com/innoverse_amu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold border border-cyan-400/20 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md hover:border-cyan-400/50 hover:bg-cyan-400/20 hover:scale-105">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/innoverse-amu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold border border-cyan-400/20 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md hover:border-cyan-400/50 hover:bg-cyan-400/20 hover:scale-105">
              LinkedIn
            </a>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="border border-cyan-400/20 bg-black/40 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 text-left hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group hover:bg-black/60 hover:scale-[1.02]">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors border border-cyan-400/10 group-hover:border-cyan-400/30">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[10px] md:text-xs text-cyan-400/50 uppercase tracking-widest mb-0.5">ZHCET</div>
                <div className="text-xs md:text-sm font-bold text-white/90 group-hover:text-white transition-colors">Aligarh Muslim University, Aligarh, Uttar Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
