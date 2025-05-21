import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const controls = useAnimation();
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  // Skill groups
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Vue.js', percentage: 80 },
    { name: 'TypeScript', percentage: 75 },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'SQL', percentage: 70 },
    { name: 'Python', percentage: 85 },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git, GitHub, GitLab', percentage: 90 },
    { name: 'Figma', percentage: 85 },
    { name: 'Docker', percentage: 70 },
    { name: 'AWS', percentage: 65 },
    { name: 'CI/CD', percentage: 75 },
  ];

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="text-lg text-dark-700 mb-12 max-w-2xl">
          Over the years, I've acquired and refined a diverse set of skills across multiple domains. Here's a breakdown of my technical expertise:
        </p>

        <motion.div
          ref={skillsRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Frontend Skills */}
          <div className="bg-white rounded-xl shadow-smooth p-6">
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-dark-700">{skill.name}</span>
                  <span className="text-primary-600">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-xl shadow-smooth p-6">
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Backend</h3>
            {backendSkills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-dark-700">{skill.name}</span>
                  <span className="text-primary-600">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white rounded-xl shadow-smooth p-6">
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Tools & Technologies</h3>
            {toolsSkills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-dark-700">{skill.name}</span>
                  <span className="text-primary-600">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional skills in tags */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-dark-800 mb-4">Other Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'GraphQL', 'Redux', 'SASS', 'Tailwind CSS', 'REST API', 'Jest', 'Webpack', 'WordPress', 'Flutter', 'React Native', 'Agile', 'UI/UX Design', 'SEO', 'Responsive Design'].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-dark-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;