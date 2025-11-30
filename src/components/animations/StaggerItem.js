"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function StaggerItem({ children, className = "" }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

