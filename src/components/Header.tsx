import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isChatOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isChatOpen = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Features', 
      icon: 'fa-bolt', 
      onClick: () => navigate('/features')
    },
    { 
      name: 'Pricing', 
      icon: 'fa-tags', 
      onClick: () => navigate('/pricing')
    },
    { 
      name: 'Resources', 
      icon: 'fa-book', 
      href: '/resources' 
    }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      animate={{
        width: isChatOpen ? 'calc(100% - 380px)' : '100%'
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/market_flick_round_logo.jpg" 
                alt="Market Flick Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">MarketFlick</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className={`hidden md:flex items-center space-x-8 ${isChatOpen ? 'md:hidden' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href || '#'}
                className="text-base font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <i className={`fas ${item.icon} mr-2 text-indigo-500 group-hover:text-indigo-600`}></i>
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link
                to="/signin"
                className="text-gray-700 hover:text-indigo-500 px-3 py-2 text-sm lg:text-base font-medium rounded-md hover:bg-indigo-50 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-500 text-white px-4 py-2 text-sm lg:text-base font-medium rounded-md hover:bg-indigo-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${isChatOpen ? 'hidden' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href || '#'}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`fas ${item.icon} mr-2 text-indigo-500 group-hover:text-indigo-600`}></i>
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <Link
                    to="/signin"
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
