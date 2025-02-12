import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FooterProps {
  isChatOpen?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isChatOpen = false }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
    social: [
      { 
        name: 'Twitter', 
        href: '#', 
        icon: 'fa-twitter',
        color: 'hover:text-[#1DA1F2]',
        hoverBg: 'group-hover:bg-[#1DA1F2]/10'
      },
      { 
        name: 'LinkedIn', 
        href: '#', 
        icon: 'fa-linkedin',
        color: 'hover:text-[#0A66C2]',
        hoverBg: 'group-hover:bg-[#0A66C2]/10'
      },
      { 
        name: 'GitHub', 
        href: '#', 
        icon: 'fa-github',
        color: 'hover:text-[#24292F]',
        hoverBg: 'group-hover:bg-[#24292F]/10'
      },
    ],
  };

  return (
    <footer className="relative bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 mb-12 ${isChatOpen ? 'md:grid-cols-9' : ''}`}>
          {/* Brand Section with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`col-span-1 ${isChatOpen ? 'md:col-span-3' : 'md:col-span-4'} lg:pr-8`}
          >
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <img 
                    src="/market_flick_round_logo.jpg"
                    alt="Market Flick"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900">Market Flick</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                AI-powered market research platform transforming business insights with cutting-edge analytics and real-time data.
              </p>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`col-span-1 ${isChatOpen ? 'md:col-span-2' : 'md:col-span-2'} lg:pl-4`}
          >
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-500 hover:text-indigo-500 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="relative">
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`col-span-1 ${isChatOpen ? 'md:col-span-2' : 'md:col-span-2'} lg:pl-4`}
          >
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-gray-500 hover:text-indigo-500 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="relative">
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-200 group-hover:w-full"></span>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`col-span-1 ${isChatOpen ? 'md:col-span-2' : 'md:col-span-2'} lg:pl-4`}
          >
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">
              Connect With Us
            </h3>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-500 hover:text-gray-900 transition-all duration-200 flex items-center space-x-3 group"
                  >
                    <span className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 transition-all duration-200 ${link.hoverBg}`}>
                      <i className={`fab ${link.icon} text-lg transition-all duration-200 ${link.color}`}></i>
                    </span>
                    <span className="relative">
                      <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${link.color}`}></span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`border-t border-gray-200 pt-12 ${isChatOpen ? 'md:hidden' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-1 md:col-span-5 lg:col-span-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay updated</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Get the latest market research insights and industry updates delivered to your inbox.
              </p>
            </div>
            <div className="col-span-1 md:col-span-7 lg:col-span-8">
              <form className="sm:flex items-center">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex-1 text-center sm:text-left">
              <span className="text-base text-gray-500">
                &copy; {currentYear} Market Flick. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
