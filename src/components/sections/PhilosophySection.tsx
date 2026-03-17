'use client';
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface PhilosophySectionProps {
  progress: MotionValue<number>;
}

export default function PhilosophySection({ progress }: PhilosophySectionProps) {
  // Appears slightly later in the morph sequence (10% to 40%)
  const opacity = useTransform(progress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const yOffset = useTransform(progress, [0.1, 0.2, 0.3, 0.4], [100, 0, 0, -100]);

  return (
    <motion.div 
      style={{ opacity, y: yOffset }}
      className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center z-10"
    >
      <div className="max-w-4xl space-y-12 p-8 md:p-16 rounded-3xl mix-blend-difference">
        <p className="text-2xl md:text-5xl text-cyan-400 font-light leading-relaxed">
          A collective of visionaries building the next generation of digital artifacts.
        </p>
        <p className="text-lg md:text-2xl text-cyan-400/60 font-light leading-relaxed">
          Bridging the gap between raw imagination and technical execution.
        </p>
      </div>
    </motion.div>
  );
}
