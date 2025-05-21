import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Heart, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Abdelilah Lakrim</h3>
            <p className="text-gray-400 mb-4">
              A passionate Full Stack Developer dedicated to creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
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
                href="https://twitter.com/abdelilahdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-3 text-primary-400"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-gray-400">+212 6 60 69 95 11</span>
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-3 text-primary-400"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-gray-400">contact@abdelilah.dev</span>
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-3 text-primary-400"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-400">Morocco</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-400">
            © {currentYear} Abdelilah Lakrim. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;