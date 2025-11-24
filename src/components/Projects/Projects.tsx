import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// import { ExternalLink, Github } from 'lucide-react';
import { PinContainer } from '../3dPin';
import Magnet from '../Magnet';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Task+Manager',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Portfolio',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts using a third-party API.',
      technologies: ['JavaScript', 'API Integration', 'CSS'],
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Weather',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-[#47c5fb] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="mx-2">
              <PinContainer
                title={project.title}
                href={project.liveUrl}
                containerClassName="z-10"
                borderColor="#47c5fb"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[24rem] h-[24rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(135deg,
                        ${index % 4 === 0 ? '#8B5CF6' : index % 4 === 1 ? '#EC4899' : index % 4 === 2 ? '#3B82F6' : '#10B981'} 0%,
                        ${index % 4 === 0 ? '#A855F7' : index % 4 === 1 ? '#F43F5E' : index % 4 === 2 ? '#60A5FA' : '#34D399'} 100%)`
                    }}
                  />
                </div>
              </PinContainer>
            </div>
          ))}
          <div className="mx-2 flex items-center justify-center">
            <Magnet>
              <div
                className="flex items-center justify-center w-48 h-12 bg-black border-1 border-[#47c5fb] rounded-[40px] shadow-[0_8px_16px_rgb(0_0_0/0.4)] cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
                onClick={() => window.location.hash = '#projects'}
              >
                <span className="ml-2 text-white">See All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
