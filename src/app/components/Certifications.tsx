import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Instagram Clone Using HTML & CSS',
    issuer: 'Microsoft',
  },
  {
    title: 'Data Visualization using Python & Seaborn',
    issuer: 'Microsoft',
  },
  {
    title: 'Federated Learning Research Paper',
    issuer: 'ICCMAMT (Published)',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">
                {cert.title}
              </h3>
              <p className="text-blue-600">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
