import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: '10th & 12th',
    institution: 'Velammal Matric HR Sec School, Ponneri',
    details: '10th: 74% | 12th: 80%',
    period: 'Aug 2018 – May 2021',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'SRM University, Chennai',
    details: '',
    period: 'Aug 2021 – May 2025',
    icon: GraduationCap,
  },
  {
    type: 'course',
    title: 'Web Technology Course',
    institution: 'Udemy',
    details: '',
    period: '2024',
    icon: Award,
  },
  {
    type: 'internship',
    title: 'Python Internship',
    institution: 'CodSoft',
    details: '',
    period: 'Jul 2025',
    icon: Briefcase,
  },
  {
    type: 'course',
    title: 'Python Full Stack Developer Course',
    institution: 'QSpiders, Chennai (Offline)',
    details: '',
    period: 'May 2025 – Present',
    icon: Award,
  },
  {
    type: 'course',
    title: '2026 Bootcamp',
    institution: 'Generative AI, LLM Apps, AI Agents, Cursor AI - Udemy',
    details: '',
    period: '2026 – Present',
    icon: Award,
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line at 90% */}
          <div className="absolute left-[72px] md:left-[90%] top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12"
            >
              <div className="flex items-start">
                {/* ICON — now perfectly centered on the line */}
                <div className="absolute left-[72px] md:left-[90%] md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <item.icon className="text-white" size={28} />
                </div>

                {/* Content (left side of line) */}
                <div className="ml-24 md:mr-[22%] bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[65%]">
                  <div className="text-blue-600 text-sm mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <div className="text-gray-700 mb-1">
                    {item.institution}
                  </div>
                  {item.details && (
                    <div className="text-gray-600 text-sm">
                      {item.details}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
