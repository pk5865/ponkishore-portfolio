import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl text-gray-900 md:text-5xl">
            Get In Touch
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-blue-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl text-gray-900">Let's Connect</h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              I'm always open to new projects, internships, and collaboration opportunities.
              If you have a question or want to work together, feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/pk5865"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 transition-transform duration-300 group-hover:scale-110">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <div className="text-gray-900">pk5865</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pon-kishore-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 transition-transform duration-300 group-hover:scale-110">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="text-gray-900">Pon Kishore K</div>
                </div>
              </a>

              <a
                href="mailto:kponkishore@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-gray-900">kponkishore@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}