import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, Mail } from 'lucide-react';

const jobRoles = [
  'Python Developer',
  'AI Full Stack Developer',
  'React Developer',
  'Django / Flask Developer',
  'Web Developer',
  'Back-End Developer',
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl mb-8 text-gray-900"
        >
          Hi, I'm <span className="text-blue-600">Pon Kishore.K</span>
        </motion.h1>

        <div className="h-20 md:h-24 mb-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl text-gray-600"
            >
              {jobRoles[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[180px] justify-center"
          >
            <Eye size={20} />
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[180px] justify-center"
          >
            <Mail size={20} />
            Contact Me
          </button>
          <a
            href="#"
            download
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[180px] justify-center"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
