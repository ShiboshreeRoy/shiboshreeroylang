import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
}

export const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, offset]);

  return (
    <motion.div style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
};