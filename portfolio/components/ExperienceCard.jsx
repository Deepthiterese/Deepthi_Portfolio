'use client';
import { motion } from 'framer-motion';

export default function ExperienceCard({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="p-6 rounded-xl border bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 shadow-sm"
    >
      <h4 className="text-lg font-semibold dark:text-white">{job.role}</h4>
      <div className="text-sm text-blue-600">{job.company}</div>
      <div className="text-xs text-gray-500 mt-1">{job.time}</div>

      <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-300 space-y-1">
        {job.points.map((p, i) => (<li key={i}>{p}</li>))}
      </ul>
    </motion.div>
  );
}
