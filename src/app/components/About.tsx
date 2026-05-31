import { motion } from 'motion/react';

const skills = [
  'Python',
  'Django',
  'Flask',
  'React.js',
  'REST API',
  'PostgreSQL',
  'MySQL',
  'LangChain',
  'RAG',
  'Gemini API',
  'SQLAlchemy',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Git / GitHub',
  'Vercel',
  'Railway',
  'Netlify',
  'Machine Learning',
  'NLP',
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
            B.Tech CSE graduate from SRM Institute with a CGPA of 8.16, focused on Python full stack
            and GenAI development. I have built 8+ production-ready applications with 4 live projects
            deployed on Railway, Vercel, and Netlify. I enjoy turning ideas into practical, scalable
            products with clean code, API design, and thoughtful UX.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {[
              'Immediate joiner for Python, Backend, and GenAI roles',
              '4 live deployed projects with real users and deployment experience',
              'Strong foundation in Django, Flask, React, LangChain, and RAG',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-5 py-4 text-center text-gray-700 shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>

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
