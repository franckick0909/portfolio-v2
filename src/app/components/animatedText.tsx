"use client";
import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {textArray.map((line, index) => (
            <span className="block" key={index}>
        {line.split(" ").map((word, index) => (
            <span className="inline-block overflow-hidden" key={index}>
        {word.split("").map((char, index) => (
          <motion.span className="inline-block" variants={letterVariants} key={index}>
            {char}
          </motion.span>
        ))}
        <span className="inline-block">&nbsp;</span>
        </span>
        ))}
        </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
