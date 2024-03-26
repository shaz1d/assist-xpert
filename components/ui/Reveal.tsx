"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  x?: number;
  y?: number;
}

const Reveal = ({
  children,
  delay,
  className,
  x = 0,
  y = 50,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: x,
          y: y,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        delay: delay ?? 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
