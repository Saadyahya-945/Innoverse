'use client';
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface PhilosophySectionProps {
  progress: MotionValue<number>;
}

export default function PhilosophySection({ progress }: PhilosophySectionProps) {
  // Appears first in the morph sequence (5% to 30%)
  const opacity = useTransform(progress, [0.05, 0.15, 0.25, 0.30], [0, 1, 1, 0]);
  const yOffset = useTransform(progress, [0.05, 0.15, 0.25, 0.30], [100, 0, 0, -100]);
  const display = useTransform(opacity, (v) => v > 0.01 ? 'flex' : 'none');

  return (
    <motion.div
      style={{ opacity, y: yOffset, display }}
      className="fixed inset-0 flex flex-col items-start justify-center pointer-events-none p-12 md:p-24 text-left z-10"
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
