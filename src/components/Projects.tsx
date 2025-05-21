import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github as GitHub, X } from 'lucide-react';
import { Tilt } from 'react-tilt';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  details: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with payment integration.',
      image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, order management, and admin dashboard. The application is fully responsive and provides a seamless shopping experience across all devices.',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with real-time updates.',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Vue', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A modern task management application built with Vue.js and Firebase. Users can create, organize, and track tasks using a drag-and-drop interface. Features include real-time updates, customizable boards and lists, task filtering, and team collaboration. The UI is built with Tailwind CSS for a clean and responsive design.',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A clean and modern portfolio website with animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'GSAP', 'Tailwind CSS'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A personal portfolio website designed with a focus on smooth animations and interactive elements. Built with React and enhanced with GSAP for complex animations. Features a responsive layout, project showcases, skill visualizations, and contact form. The design prioritizes user experience with intuitive navigation and feedback.',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather forecasting application with multiple data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['JavaScript', 'API', 'Chart.js'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A weather dashboard that provides current conditions and forecasts with visual representations. Built with vanilla JavaScript and integrates with multiple weather APIs for accurate data. Features include location search, 7-day forecasts, hourly predictions, temperature charts using Chart.js, and customizable units. The application saves user preferences and recently viewed locations.',
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'A full-featured social media platform with real-time chat.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A social media application that allows users to connect, share content, and communicate in real-time. Built with React, Node.js, MongoDB, and Socket.io for real-time features. Includes user profiles, post creation with rich media support, commenting, likes, friend connections, real-time notifications, and private messaging. The app implements JWT authentication and comprehensive privacy controls.',
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A recipe discovery app with filtering and favorites functionality.',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Vue', 'Vuex', 'Firebase'],
      githubLink: 'https://github.com/user/project',
      demoLink: 'https://example.com',
      details: 'A recipe application that helps users discover and save recipes based on ingredients, cuisine, and dietary preferences. Built with Vue.js and Firebase for the backend. Features include advanced filtering options, nutritional information, step-by-step instructions, user reviews, personal recipe collections, and offline access to saved recipes. The app uses Vuex for state management and implements responsive design for all devices.',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-lg text-dark-700 mb-8 max-w-2xl">
          Here are some of my recent projects that showcase my skills and passion for creating
          beautiful, functional applications.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {uniqueTags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="animate-hidden"
              custom={index}
            >
              <Tilt options={{ max: 15, scale: 1.05, speed: 1000 }}>
                <div 
                  className="project-card cursor-pointer h-64"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="project-card-content">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-primary-500/20 text-white text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-primary-500/20 text-white text-xs px-2 py-1 rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5 text-dark-700" />
              </button>

              <div className="h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-dark-700 mb-6">{selectedProject.details}</p>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center"
                  >
                    <GitHub className="w-4 h-4 mr-2" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;