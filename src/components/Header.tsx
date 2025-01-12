import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group">
              <img 
                className="h-10 w-auto transition-transform duration-300 group-hover:rotate-6" 
                src="/market_flick_logo.jpg" 
                alt="Market Flick AI"
              />
              <span className="ml-3 text-2xl font-sans serif font-bold text-gray-900 tracking-tight transition-colors duration-300 group-hover:text-custom">
                MARKET FLICK AI
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-gray-600 hover:text-custom font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </motion.div>

          {/* Desktop Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <button className="text-gray-600 hover:text-custom font-medium transition-colors duration-300 group relative">
              Sign In
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-transparent border-2 border-black text-black font-semibold px-8 py-2.5 rounded-full transition-all duration-300 group"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">Live Demo</span>
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-5"></span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-gray-600 hover:text-custom transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className="block text-gray-700 hover:bg-gray-50 hover:text-custom font-medium px-4 py-3 rounded-lg transition-all duration-300 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <span className="block w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button className="w-full text-gray-700 hover:bg-gray-50 hover:text-custom font-medium px-4 py-3 rounded-lg transition-all duration-300 group relative">
                    Sign In
                    <span className="block w-0 h-0.5 bg-custom absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden w-full bg-transparent border-2 border-black text-black font-semibold px-8 py-2.5 rounded-lg transition-all duration-300 group"
                  >
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">Live Demo</span>
                    <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-5"></span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
