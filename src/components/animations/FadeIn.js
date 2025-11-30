"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, className = "", delay = 0, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

