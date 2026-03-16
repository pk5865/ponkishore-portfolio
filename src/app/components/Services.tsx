import { motion } from 'motion/react';
import { Code, Server, Smartphone, Database } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development using modern frameworks and technologies, from frontend to backend.',
    icon: Code,
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side applications with Django and Flask, including RESTful APIs and database management.',
    icon: Server,
  },
  {
    title: 'Frontend Development',
    description: 'Responsive and interactive user interfaces built with React.js, HTML, CSS, and modern JavaScript.',
    icon: Smartphone,
  },
  {
    title: 'Python Development',
    description: 'Custom Python solutions for automation, data analysis, machine learning, and web scraping applications.',
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
            Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
