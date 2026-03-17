'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CanvasPlayer from '../canvas/CanvasPlayer';

interface HeroSectionProps {
  images: HTMLImageElement[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress exclusively within this 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out the entire visual towards the very end of the section
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full z-10" style={{ height: '300vh' }}>
      <motion.div style={{ opacity }} className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">

        {/* Isolated Canvas Player for Sequence 1 */}
        <CanvasPlayer images={images} progress={scrollYProgress} />

      </motion.div>
    </section>
  );
}
