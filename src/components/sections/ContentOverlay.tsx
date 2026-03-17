import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ContentOverlayProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function ContentOverlay({
  children,
  align = 'center',
  className,
  ...props
}: ContentOverlayProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col justify-center px-6 md:px-24",
        align === 'left' && "items-start text-left",
        align === 'center' && "items-center text-center",
        align === 'right' && "items-end text-right",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
