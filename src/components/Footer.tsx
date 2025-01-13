import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component provides site-wide navigation, social links, and copyright information.
 * 
 * Key Features:
 * - Responsive grid layout
 * - Company logo and description
 * - Quick links to key pages
 * - Social media icons
 * - Copyright and legal links
 * - Mobile-friendly design
 */
const Footer: React.FC = () => {
  // Current year for dynamic copyright notice
  const currentYear = new Date().getFullYear();

  // Company navigation links
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
  ];

  // Product-related navigation links
  const productLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Integrations', path: '/integrations' },
  ];

  // Resource links
  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
  ];

  // Legal links
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  // Social media links with icons and URLs
  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: 'fa-twitter', 
      path: 'https://twitter.com/marketflickai' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'fa-linkedin', 
      path: 'https://linkedin.com/company/marketflickai' 
    },
    { 
      name: 'GitHub', 
      icon: 'fa-github', 
      path: 'https://github.com/marketflickai' 
    },
  ];

  return (
    // Full-width footer with dark background
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Logo and Description Column */}
        <div className="space-y-4 text-center md:text-left">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img 
              src="/logo.svg" 
              alt="Market Flick Logo" 
              className="h-10 w-10"
            />
            <h2 className="text-2xl font-bold text-white">Market Flick</h2>
          </div>

          {/* Company Description */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            AI-powered market research platform transforming business insights.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.path}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:col-span-3">
          {/* Company Links Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Company</h3>
            {companyLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="block text-gray-400 hover:text-white py-2 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Product Links Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Product</h3>
            {productLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="block text-gray-400 hover:text-white py-2 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links Column */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Resources</h3>
            {resourceLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="block text-gray-400 hover:text-white py-2 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Market Flick. All rights reserved.
        </p>
        <div className="mt-4 space-x-4 flex flex-wrap justify-center">
          {legalLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="text-gray-400 hover:text-white text-sm mb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
