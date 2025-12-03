'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 140 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold dark:text-white">{project.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.desc}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{project.stack}</p>

      <div className="mt-4 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          GitHub →
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline">
            Live Demo →
          </a>
        )}
      </div>
    </motion.article>
  );
}
