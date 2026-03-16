import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const projects = [
  {
    title: 'Enhancing Pre-Owned Car Price Prediction Through Federated Learning',
    description:
      'Used federated learning to predict car prices while keeping data private.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Machine Learning', 'Predictive Modeling'],
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c',
  },
  {
    title: 'Music Player Web Application ',
    description:
      'Built a full-stack music player using React.js and Django REST Framework.',
    tech: ['Python','React', 'Django REST Framework.'],
    image: 'https://images.unsplash.com/photo-1703115015343-81b498a8c080',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built using React.js.',
    tech: ['React.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1695634621145-9133286e0247',
  },
  {
    title: 'AI Chatbot',
    description:
      'Implemented a web-based chat interface to process user input and generate automated responses..',
    tech: ['Python', 'Django', 'Natural Language Processing'],
    image: 'https://images.unsplash.com/photo-1661187259792-d0e16bf86d31',
  },
  {
    title: 'Blog News Website',
    description:
      'A Django-based blog platform.',
    tech: ['Python', 'Django'],
    image: 'https://images.unsplash.com/photo-1638342863994-ae4eee256688',
  },
  {
    title: 'Expenses Tracker',
    description:
      'An app that tracks income and expenses and shows charts and graphs to analyze spending by category.',
    tech: ['Python', 'Flask','SQLite'],
    image: 'https://images.unsplash.com/photo-1680251590844-53784815ded4',
  },
  {
    title: 'To-Do List Application',
    description:
      'A task management app.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1759661937582-0ccd5dacf20f',
  },
  {
    title: 'Password Generator',
    description:
      'A secure password generator.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1768839722988-91767bb82b10',
  },
  {
    title: 'Stone Paper Scissor Game',
    description:
      'An interactive game.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1614032686099-e648d6dea9b3',
  },
  {
    title: 'Calculator',
    description:
      'A basic calculator.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1653361860636-36f2fb89eab9',
  },
];

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;

    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 1.5;
    const maxScroll = container.scrollWidth / 2;

    const scroll = () => {
      if (!isAutoScrolling) return;

      scrollPosition += scrollSpeed;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-gray-900">
          Projects
        </h2>

        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          className="flex gap-6 overflow-x-auto pb-6 cursor-grab"
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                    <Github size={16} /> GitHub
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
