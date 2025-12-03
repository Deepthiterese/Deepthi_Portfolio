'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed w-full z-50 left-0 top-0 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-transparent dark:border-neutral-800"
    >
      <div className="container px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold dark:text-white">Deepthi's Portfolio</div>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition">Projects</a>
          <a href="#experience" className="text-sm font-medium hover:text-blue-600 transition">Experience</a>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
