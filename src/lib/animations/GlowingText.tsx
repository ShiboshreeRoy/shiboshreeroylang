import React from 'react';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingText: React.FC<GlowingTextProps> = ({ 
  children, 
  className = '',
  glowColor = '#4ade80'
}) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          `0 0 5px ${glowColor}`,
          `0 0 20px ${glowColor}`,
          `0 0 5px ${glowColor}`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
};