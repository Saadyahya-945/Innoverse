'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-cyan-400 pointer-events-none"
    >
      <div className="text-4xl font-light mb-4 tracking-widest">
        INNOVERSE
      </div>
      <div className="w-64 h-[2px] bg-cyan-400/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </div>
      <div className="mt-4 text-sm font-light text-cyan-400/50 tracking-widest">
        {progress}%
      </div>
    </motion.div>
  );
}
