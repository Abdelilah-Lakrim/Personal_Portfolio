import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: 'Jan 2022 - Present',
      description: [
        'Lead a team of 5 developers in building and maintaining responsive web applications',
        'Implemented modern UI/UX designs using React, TypeScript, and Tailwind CSS',
        'Reduced page load time by 40% through code optimization and lazy loading techniques',
        'Integrated third-party APIs and services to extend application functionality',
      ],
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Innovations',
      location: 'Berlin, Germany',
      duration: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained web applications using React, Node.js, and MongoDB',
        'Collaborated with design team to implement responsive UI components',
        'Designed and implemented RESTful APIs for various client projects',
        'Implemented authentication and authorization using JWT tokens',
      ],
    },
    {
      id: 3,
      position: 'Frontend Developer',
      company: 'Creative Agency',
      location: 'Casablanca, Morocco',
      duration: 'Jun 2018 - Feb 2020',
      description: [
        'Built responsive websites for clients in various industries',
        'Converted design mockups into functional web interfaces using HTML, CSS, and JavaScript',
        'Worked with WordPress to create custom themes and plugins',
        'Collaborated with UI/UX designers to implement user-friendly interfaces',
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      location: 'Morocco',
      duration: '2016 - 2018',
      description: [
        'Specialized in Web Technologies and Software Engineering',
        'Graduated with Honors - GPA 3.8/4.0',
        'Thesis: "Optimizing Frontend Performance in Modern Web Applications"',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'Technical Institute',
      location: 'Morocco',
      duration: '2013 - 2016',
      description: [
        'Focused on Programming Languages and Web Development',
        'Graduated with Distinction - GPA 3.7/4.0',
        'Participated in several hackathons and coding competitions',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-dark-800 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-primary-500" />
            Work Experience
          </h3>
          
          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-xl font-semibold text-primary-600">{exp.position}</h4>
                  <div className="flex flex-wrap items-center text-dark-600 mt-1 mb-3">
                    <span className="font-medium mr-3">{exp.company}</span>
                    <span className="flex items-center mr-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-dark-700 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-dark-800 mb-8 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 mr-2 text-primary-500"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
            </svg>
            Education
          </h3>
          
          <div className="timeline-container">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id} 
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-xl font-semibold text-primary-600">{edu.degree}</h4>
                  <div className="flex flex-wrap items-center text-dark-600 mt-1 mb-3">
                    <span className="font-medium mr-3">{edu.institution}</span>
                    <span className="flex items-center mr-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-dark-700 space-y-1">
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;