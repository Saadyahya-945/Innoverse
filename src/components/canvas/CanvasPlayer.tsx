'use client';

import React, { useRef, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface CanvasPlayerProps {
  images: HTMLImageElement[];
  progress: MotionValue<number>;
}

export default function CanvasPlayer({ images, progress }: CanvasPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    const render = (latestProgress: number) => {
      if (images.length === 0) return;

      const targetIndex = Math.min(images.length - 1, Math.floor(latestProgress * images.length));
      let img = images[targetIndex];

      // Fallback to closest previous loaded image if current frame isn't loaded yet
      if (!img || !img.complete) {
        for (let i = targetIndex; i >= 0; i--) {
          if (images[i] && images[i].complete) {
            img = images[i];
            break;
          }
        }
      }

      if (img && img.complete) {
        // Aspect ratio cover/contain logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        const isMobile = window.innerWidth < 768;

        let drawWidth, drawHeight, offsetX, offsetY;

        // On mobile portrait, avoid aggressive side cropping by acting like 'contain' or fitting to width
        if (isMobile && imgRatio > canvasRatio) {
          drawWidth = canvas.width;
          drawHeight = img.height * (canvas.width / img.width);
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          // Default 'cover' logic for desktop or when the image is unusually tall
          if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          } else {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          }
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => render(progress.get()));
    };

    handleResize(); // Initial setup and render

    const unsubscribe = progress.on('change', (latest) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => render(latest));
    });

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [images, progress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
