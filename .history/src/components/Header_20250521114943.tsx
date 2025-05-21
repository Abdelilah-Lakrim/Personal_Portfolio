import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold font-heading text-primary-600 hover:text-primary-500 transition-colors"
        >
          Abdelilah Lakrim
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-dark-700 hover:text-primary-500 font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-dark-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-dark-700" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-dark-700" />
            ) : (
              <Menu className="w-6 h-6 text-dark-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <a href="#home" className="text-2xl font-bold text-primary-600">
              Abdelilah Lakrim
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6 text-dark-700" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-700 hover:text-primary-500 text-xl font-medium transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;