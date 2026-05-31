import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

const featuredProjects: Project[] = [
  {
    title: 'Study Interviewer AI',
    description:
      'AI platform that generates interview questions from PDFs, YouTube videos, and webpages using LangChain, RAG, and Gemini API.',
    tech: ['Flask', 'React', 'LangChain', 'PostgreSQL', 'Gemini API', 'Railway'],
    image: '/projects/studyinterviewer-ai.png',
    liveUrl: 'https://studyinterviewer-frontend-production.up.railway.app',
    githubUrl: 'https://github.com/pk5865/studyinterviewer-ai',
  },
  {
    title: 'AI Work Analyze',
    description:
      'LangChain AI productivity planner that detects behavioral patterns across daily logs with Django REST API and Vercel deployment.',
    tech: ['Django', 'React', 'LangChain', 'RAG', 'MySQL', 'Vercel'],
    image: '/projects/ai-work-analyze.png',
    liveUrl: 'https://ai-work-analyze-clean.vercel.app',
    githubUrl: 'https://github.com/pk5865/AI-WORK-ANALYZE',
  },
  {
    title: 'Resume Analyzer AI',
    description:
      'Semantic resume analyzer using LangChain RAG and FAISS that generates ATS scores and skill gap reports.',
    tech: ['Flask', 'React', 'LangChain', 'FAISS', 'ChromaDB', 'Vercel'],
    image: '/projects/resume-analyzer.png',
    liveUrl: 'https://resume-optimizer-ai-pk5865s-projects.vercel.app',
    githubUrl: 'https://github.com/pk5865/resume-optimizer-ai',
  },
  {
    title: 'Web Music Player',
    description:
      'Full stack music streaming platform with JWT authentication, real-time playback, and playlist management.',
    tech: ['Django', 'React', 'MySQL', 'JWT', 'Netlify'],
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://pk-music-player.netlify.app',
    githubUrl: 'https://github.com/pk5865/music-player',
  },
];

const moreProjects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React and Vite to showcase projects, skills, and resume links.',
    tech: ['React', 'TypeScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://ponkishore-portfolio.netlify.app',
    githubUrl: 'https://github.com/pk5865/ponkishore-portfolio',
  },
  {
    title: 'AI Chatbot',
    description:
      'NLP-based chatbot for handling user queries with a simple and responsive interface.',
    tech: ['Python', 'Django', 'NLP'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/AI-Chatbot',
  },
  {
    title: 'Personal Blogging Platform',
    description:
      'Django-based blogging app with content management and authentication features.',
    tech: ['Python', 'Django', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/Personal-Blogging-Platform',
  },
  {
    title: 'Expense Tracker',
    description:
      'Expense tracking app for adding, filtering, and visualizing spending with charts.',
    tech: ['Python', 'Flask', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/expense-tracker',
  },
  {
    title: 'Stone Paper Scissor Game',
    description:
      'An interactive Rock Paper Scissor game with basic score tracking and replay flow.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/Stone-Paper-Scissor',
  },
  {
    title: 'Password Generator',
    description:
      'A secure password generator that creates strong random passwords for different lengths.',
    tech: ['Python'],
    image: '/projects/password-generator.png',
    githubUrl: 'https://github.com/pk5865/Pasword-generator',
  },
  {
    title: 'To-Do List Application',
    description:
      'A simple task management app for adding, updating, completing, and deleting tasks.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/TO-DO-LIST-',
  },

  {
    title: 'Instagram Clone',
    description:
      'A front-end clone project inspired by Instagram to practice layout and styling.',
    tech: ['HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/pk5865/INSTAGRAM-CLONE',
  },

];

function ProjectCard({ project }: { project: Project }) {
  const hasLiveDemo = Boolean(project.liveUrl);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
    >
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
          {hasLiveDemo && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Live
            </span>
          )}
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                <Github size={16} />
                Source Code
              </a>
            </>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const allProjects = [...featuredProjects, ...moreProjects];

  return (
    <section id="projects" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-4xl text-gray-900 md:text-5xl">
            Projects
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-blue-600" />
        </motion.div>

        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-900">
          Live projects are shown first, followed by your other work. On desktop this displays as 3 cards per row.
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}