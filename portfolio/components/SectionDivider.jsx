'use client';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="transform origin-left h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 my-20"
    />
  );
}
