"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TextSplit = ({ text, className }: { text: string, className: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const letters = text.split(' ');

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05 }
    }),
  };

  return (
    <div ref={ref} className={`flex ${className} flex-wrap gap-2`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};
