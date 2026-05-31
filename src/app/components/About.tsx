import { motion } from 'motion/react';

const skills = [
  'Python',
  'JavaScript',
  'React.js',
  'Django',
  'Flask',
  'HTML',
  'CSS',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Git',
  'GitHub',
  'REST API',
  'JWT',
  'LangChain',
  'RAG',
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
            I’m a passionate Full Stack Developer specializing in Python, Django, Flask, and React.js. I build scalable, user-friendly applications with REST APIs, databases, and clean UI/UX. I’ve worked on live projects in AI, GenAI, and full stack development, including systems using LangChain, RAG, Gemini API, and MySQL/PostgreSQL. I’m also trained in Python Full Stack Development and Generative AI & LLM Application Development, and I enjoy solving real-world problems with practical, impactful digital solutions.
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
