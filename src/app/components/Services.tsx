import { motion } from 'motion/react';
import { Bot, Code, Database, Server, Sparkles, Workflow } from 'lucide-react';

const roles = [
  {
    title: 'Python Full Stack Developer',
    description: 'Builds full stack apps with Django, Flask, React, REST APIs, SQL, and modern deployment workflows.',
    icon: Code,
  },
  {
    title: 'Backend Developer',
    description: 'Creates secure APIs, database schemas, authentication flows, and production-ready server logic.',
    icon: Server,
  },
  {
    title: 'GenAI Developer',
    description: 'Works with LangChain, RAG, Gemini API, and multi-source ingestion for intelligent applications.',
    icon: Sparkles,
  },
  {
    title: 'AI / ML Developer',
    description: 'Applies NLP, machine learning, feature engineering, and model-driven workflows to real problems.',
    icon: Bot,
  },
  {
    title: 'React Developer',
    description: 'Builds responsive, modern interfaces with reusable components and clean UX patterns.',
    icon: Workflow,
  },
  {
    title: 'Data & SQL Developer',
    description: 'Designs efficient relational data models and query flows using PostgreSQL, MySQL, and SQLAlchemy.',
    icon: Database,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            Roles I Can Take
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <role.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                {role.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
