import { motion } from 'motion/react';

const skills = [
  'Python',
  'Django/Flask',
  'AI/ML',
  'React.js',
  'HTML',
  'CSS',
  'JavaScript',
  'MY SQL',
  'Git/GitHub',
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer specializing in Python and modern web technologies. 
            With expertise in Django, Flask, and React.js, I build scalable, efficient, and user-friendly 
            applications. Currently enhancing my skills through a Python Full Stack Developer course at 
            QSpiders and exploring cutting-edge AI technologies. I'm driven by solving complex problems 
            and creating impactful digital solutions.
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900"> Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="flex flex-wrap gap-3 justify-center">
            
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
