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
      position: 'Full Stack Web Developer',
      company: 'LeBahutdesEntrepreneurs.',
      location: 'Paris, France . Remote ',
      duration: 'apr 2025 - Present',
      description: [
        'Building and maintaining responsive web applications',
        'Implemented modern UI/UX designs using React, TypeScript, and Tailwind CSS',
        'Reduced page load time by 40% through code optimization and lazy loading techniques',
        'Integrated third-party APIs and services to extend application functionality',
      ],
    },
    {
      id: 2,
      position: 'Martial Arts Instructor',
      company: 'KSCT Academy',
      location: 'Casablanca, Morocco',
      duration: 'Jun 2020 - Present',
      description: [
        'Teaching martial arts techniques and self-defense to students of all ages',
        'Organizing and leading training sessions, workshops, and seminars',
        'Developing training programs tailored to individual student needs',
        'Promoting physical fitness and mental discipline through martial arts training',
      ],
    },
    {
      id: 3,
      position: 'Design and Development',
      company: 'Great Designs',
      location: 'Casablanca, Morocco',
      duration: 'Mar 2021 - Jun 2021',
      description: [
        'Collaborated with designers to create user-friendly interfaces',
        'Developed and maintained web applications using React and Node.js',
        'Participated in code reviews and contributed to team knowledge sharing',
        'Ensured cross-browser compatibility and mobile responsiveness',
      ],
    },
    
  ];

  const education = [
    {
      id: 1,
      degree: 'Software Engineering and Information Systems',
      institution: 'Ibn Tofail University',
      location: 'Kenitra, Morocco',
      duration: 'current',
      description: [
        'Specializing in Software Development and Data Science',
        'Involved in various projects related to AI and Machine Learning',
        'Expected graduation date: June 2027',
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