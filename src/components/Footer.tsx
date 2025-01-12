import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
  ];

  const productLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Integrations', path: '/integrations' },
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

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
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Market Flick Logo" 
              className="h-10 w-10"
            />
            <h2 className="text-2xl font-bold text-white">Market Flick</h2>
          </div>
          <p className="text-gray-400 text-sm">
            AI-powered market research platform transforming business insights.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.path}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
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

        {/* Product Links */}
        <div>
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

        {/* Resources Links */}
        <div>
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

      {/* Copyright and Legal */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Market Flick. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          {legalLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="text-gray-400 hover:text-white text-sm"
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
