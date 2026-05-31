import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, Mail } from 'lucide-react';

const jobRoles = [
  'Full Stack Developer',
  'Python Developer',
  'AI / GenAI Developer',
  'React Developer',
  'Django / Flask Developer',
  'Backend Developer',
  'Software Developer',
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % jobRoles.length);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-5xl text-gray-900 md:text-7xl"
        >
          Hi, I'm <span className="text-blue-600">Pon Kishore K</span>
        </motion.h1>

        <div className="mb-12 flex h-20 items-center justify-center md:h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-gray-600 md:text-4xl"
            >
              {jobRoles[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
        >
          I build scalable web applications and AI-powered solutions using Python, Django, Flask,
          React, LangChain, and modern deployment platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="flex min-w-[180px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl"
          >
            <Eye size={20} />
            View Projects
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex min-w-[180px] items-center justify-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-blue-600 shadow-lg transition-colors hover:bg-blue-50 hover:shadow-xl"
          >
            <Mail size={20} />
            Contact Me
          </button>

          <a
            href="/resume/Pon_Kishore_2026.pdf"
            download
            className="flex min-w-[180px] items-center justify-center gap-2 rounded-lg bg-gray-900 px-8 py-3 text-white shadow-lg transition-colors hover:bg-gray-800 hover:shadow-xl"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}