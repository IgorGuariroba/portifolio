"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  props?: CSSProperties;
}

export default function AnimationWrapper({ children, className, ...props }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
