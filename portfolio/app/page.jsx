'use client';
import { motion } from 'framer-motion';
import SectionDivider from '../components/SectionDivider';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

export default function Home() {
  const projects = [
    {
      name: "Quiz App",
      desc: "Full-stack quiz system with secure login, course selection and scoring.",
      stack: "React • Django REST • SQLite",
      github: "https://github.com/Deepthiterese/QuizApp_Django_React"
    },
    {
      name: "Talent Sprout",
      desc: "Django-based skill assessment platform with test submission & scoring.",
      stack: "Django • SQLite • JavaScript",
      github: "https://github.com/Deepthiterese/Talent_Sprout"
    },
    {
      name: "JobSphere",
      desc: "Job portal for job seekers, employers and admins.",
      stack: "Django • PostgreSQL • Bootstrap",
      github: "https://github.com/Deepthiterese/JobSphere",
      live: "https://jobsphere-e3l0.onrender.com/"
    }
  ];

  const experience = [

      {
      role: "Full Stack Developer Trainee (Remote)",
      company: "Upcode Software Labs",
      time: "10/2025 – Present",
      points: [
       "Training in modern full-stack development with Python, Django, Flask, FastAPI, Streamlit, React, Next.js, TypeScript, and databases.",
"Gaining hands-on experience building end-to-end applications and integrating GenAI/LLM capabilities.",
"Developing strong problem-solving, software engineering, and deployment skills through project-based learning."
      ]
    },
    {
      role: "Full Stack Developer (Remote)",
      company: "Boostr Netwave Solutions",
      time: "11/2024 – Present",
      points: [
        "Contributed to Talent Sprout — Django-based assessment platform.",
        "Implemented Take Test feature with scoring & submission logic.",
        "Optimized Django views and DB queries."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Cheshire TechCorp",
      time: "06/2024 – 11/2024",
      points: [
        "Developed and maintained features in a Flask app.",
        "Created reusable backend functions and integrated frontend logic."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "GalTech Technologies",
      time: "10/2023 – 03/2024",
      points: [
        "Built Quiz App using Django REST API & React.",
        "Implemented authentication and dynamic quiz rendering."
      ]
    }
  ];

  return (
    <main className="min-h-screen dark:bg-black bg-white text-neutral-900 dark:text-neutral-100">
      <div className="container px-6 py-32">
        
        <section id="home" className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Deepthi Sebastian
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-2xl text-blue-600 font-semibold"
          >
            Full Stack Developer (Python | Django | React | Flask)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-neutral-700 dark:text-neutral-300"
          >
            Results-driven full stack developer with hands-on experience in Python, Django, React, and RESTful APIs.
            Recently returned from a career break with refreshed skills and a strong record of practical full-stack projects.
          </motion.p>

          <div className="flex gap-4 mt-8">
            <a href="mailto:deepthiterese@gmail.com" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:brightness-95 transition">Contact</a>
            <a href="https://github.com/Deepthiterese" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/deeein123" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm">LinkedIn</a>
          </div>
        </section>

        <SectionDivider />

        
        <section id="projects" className="mt-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold"
          >
            Projects
          </motion.h3>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
          </div>
        </section>

        <SectionDivider />

       
        <section id="experience" className="mt-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold"
          >
            Experience
          </motion.h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experience.map((job, i) => <ExperienceCard key={i} job={job} index={i} />)}
          </div>
        </section>

        <SectionDivider />

        
        <section id="contact" className="mt-8 pb-16">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">Contact</motion.h3>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Email: <a href="mailto:deepthiterese@gmail.com" className="text-blue-600">deepthiterese@gmail.com</a></p>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300">Phone:+91 7012309383</p>

        </section>
      </div>

      <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 py-6">
        <div className="container px-6 text-sm text-center text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Deepthi Sebastian — Built with Next.js & Tailwind
        </div>
      </footer>
    </main>
  );
}
