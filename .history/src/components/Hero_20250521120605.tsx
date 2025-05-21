import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Facebook, Github as GitHub, Instagram, Linkedin, Twitter } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate how far the mouse has moved from the center as a percentage
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2);
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      // Apply parallax effect to elements
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const factor = index * 5 + 15;
        gsap.to(htmlEl, {
          x: moveX * factor,
          y: moveY * factor,
          duration: 1,
          ease: 'power1.out'
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="parallax absolute top-20 left-20 w-32 h-32 rounded-full bg-primary-200 opacity-30"></div>
        <div className="parallax absolute bottom-40 right-40 w-60 h-60 rounded-full bg-secondary-200 opacity-20"></div>
        <div className="parallax absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent-200 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-dark-900 leading-tight">
              <span className="block">Hi, I'm</span> 
              <span className="text-primary-600">Abdelilah Lakrim</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-dark-700 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Mobile Developer',
                  2000,
                  'Freelancer',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>
            <p className="text-lg text-dark-600 mb-8 max-w-xl mx-auto lg:mx-0">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's bring your ideas to life!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-10 flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com/Abdelilah-Lakrim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdelilah-lakrim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/abdelilahlakrim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/abdelilah.lakrim.9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/LakrimAbdelilah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-3xl opacity-20"></div>
              <img 
                src="images/portrait.jpg"
                alt="Abdelilah Lakrim" 
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                <div className="text-xs font-medium text-center">
                  <span className="block text-primary-600 font-bold text-2xl">3+</span>
                  <span className="text-dark-600">Years of<br/>Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-dark-600 text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-500 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;