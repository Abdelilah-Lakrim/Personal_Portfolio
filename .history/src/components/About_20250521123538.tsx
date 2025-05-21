import React from 'react';
import { motion } from 'framer-motion';
import { Code, PaintBucket, Smartphone, Globe } from 'lucide-react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.1,
};

const About: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <Code className="w-10 h-10 text-primary-500" />,
      description:
        'Custom websites with clean code and modern frameworks. Specializing in React, Vue, and Node.js.',
    },
    {
      title: 'UI/UX Design',
      icon: <PaintBucket className="w-10 h-10 text-primary-500" />,
      description:
        'Creative designs that focus on user experience. Wireframing, prototyping, and implementing beautiful interfaces.',
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-10 h-10 text-primary-500" />,
      description:
        'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
    },
    {
      title: 'E-Commerce Solutions',
      icon: <Globe className="w-10 h-10 text-primary-500" />,
      description:
        'Complete online shopping experiences from product catalogs to secure payment integrations.',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="animate-hidden"
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About content */}
            <div>
              <p className="text-lg text-dark-700 mb-6">
                Hi there! I'm <span className="font-semibold text-primary-600">Abdelilah Lakrim</span>, a passionate Full Stack Developer based in Morocco with over 3 years of experience in creating beautiful, functional, and user-centered digital experiences.
              </p>
              <p className="text-lg text-dark-700 mb-6">
                With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser. My approach combines clean code, intuitive design, and performance optimization to deliver exceptional digital experiences.
              </p>
              <p className="text-lg text-dark-700 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying nature. I'm always open to new challenges and opportunities to grow.
              </p>
              
              {/* Personal details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                <div>
                  <h3 className="text-dark-800 font-semibold bold">Name:</h3>
                  <p>Abdelilah Lakrim</p>
                </div>
                <div>
                  <h3 className="text-dark-800 font-semibold">Email:</h3>
                  <p>contact@abdelilah.dev</p>
                </div>
                <div>
                  <h3 className="text-dark-800 font-semibold">Location:</h3>
                  <p>Morocco</p>
                </div>
                <div>
                  <h3 className="text-dark-800 font-semibold">Availability:</h3>
                  <p>Available for freelance</p>
                </div>
              </div>
              
              <a href="/abdelilah-lakrim-resume.pdf" className="btn-primary">
                Download Resume
              </a>
            </div>
            
            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Tilt key={index} options={tiltOptions}>
                  <div className="tilt-card h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-dark-600">{service.description}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;