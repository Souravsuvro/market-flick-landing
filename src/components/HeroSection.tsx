import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [businessIdea, setBusinessIdea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [animatedText, setAnimatedText] = useState('');
  const placeholderTexts = useMemo(() => [
    'AI-powered coffee shop in San Francisco',
    'Sustainable fashion brand in London',
    'Tech startup targeting remote workers',
    'Eco-friendly food delivery service',
    'Online learning platform for professionals'
  ], []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 2000;
    let isMounted = true;

    const type = () => {
      if (!isMounted) return;

      const fullText = placeholderTexts[currentIndex];
      const currentText = isDeleting 
        ? fullText.slice(0, animatedText.length - 1) 
        : fullText.slice(0, animatedText.length + 1);

      setAnimatedText(currentText);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => { isDeleting = true; }, pauseTime);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % placeholderTexts.length;
      }

      setTimeout(type, isDeleting ? 50 : typingSpeed);
    };

    type();

    return () => {
      isMounted = false;
    };
  }, [animatedText.length, placeholderTexts]);

  const handleAnalyzeMarket = () => {
    // Implement market analysis logic
    console.log('Analyzing market for:', { businessIdea, selectedLocation });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex-grow mx-auto w-full max-w-7xl px-4 pt-32 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white"
    >
      <motion.article 
        variants={itemVariants}
        className="text-left mb-8 order-1 lg:order-2"
      >
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative">
            <textarea 
              className="w-full h-40 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-custom focus:border-custom resize-none shadow-sm transition-all duration-300 mb-4"
              placeholder={`Enter your business idea (e.g., ${animatedText})`}
              value={businessIdea}
              onChange={(e) => setBusinessIdea(e.target.value)}
            ></textarea>
          </div>

          <div className="relative">
            <div className="relative">
              <i className="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-red-500"></i>
              <select 
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 !rounded-xl appearance-none focus:ring-2 focus:ring-custom focus:border-custom shadow-sm transition-all duration-300"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="eu">European Union</option>
                <option value="apac">Asia Pacific</option>
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"></i>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-xl bg-custom py-4 text-black font-semibold hover:bg-custom/90 flex items-center justify-center gap-3 transform transition-all duration-300 shadow-lg mt-6"
            onClick={handleAnalyzeMarket}
          >
            <i className="fas fa-chart-line text-green-500"></i>
            Analyze Market
          </motion.button>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
            <div className="flex items-start gap-4">
              <i className="fas fa-lightbulb text-yellow-500 mt-1"></i>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">How it works</h3>
                <ol className="text-gray-600 space-y-2">
                  <li>1. Enter your business idea or concept in detail</li>
                  <li>2. Select your target market location</li>
                  <li>3. Click analyze to get comprehensive market insights</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.article 
        variants={itemVariants}
        className="text-left mb-8 order-2 lg:order-1"
      >
        <motion.mark 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-custom/10 rounded-full mb-6"
        >
          <span className="text-custom font-semibold">New</span>
          <span className="text-gray-600 text-sm">Analyze 10x to Grow 100x with us</span>
        </motion.mark>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Transform Your Market Research with AI Intelligence
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Get instant, data-driven market insights powered by advanced AI technology. 
          Make smarter business decisions faster.
        </p>
        
        <nav className="flex flex-col gap-4 mb-8">
          <div className="flex gap-4 mb-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-custom hover:bg-custom/90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
            >
              <span>Start for free</span>
              <i className="fas fa-arrow-right text-white transition-transform duration-300 group-hover:translate-x-1"></i>
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-5"></span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-transparent border-2 border-custom text-custom hover:bg-custom hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group"
            >
              <i className="fas fa-play-circle text-custom group-hover:text-white transition-colors duration-300"></i>
              <span>Live Demo</span>
              <span className="absolute inset-0 bg-custom transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 opacity-10"></span>
            </motion.button>
          </div>
        </nav>

        <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-custom">10x</div>
            <div className="text-sm text-gray-600">Market Speed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-custom">95%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-custom">24/7</div>
            <div className="text-sm text-gray-600">AI Support</div>
          </div>
        </div>
      </motion.article>
    </motion.section>
  );
};

export default HeroSection;
