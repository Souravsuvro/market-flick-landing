import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
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
      className="bg-gray-50 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <motion.div 
          variants={itemVariants}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <div className="aspect-video bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/3TXTRg4gN6A?autoplay=0&controls=1" 
              title="Market Flick AI Market Research Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </motion.div>


        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.mark 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-custom/10 rounded-full"
          >
            <span className="text-custom font-semibold">Watch</span>
            <span className="text-gray-600 text-sm">How It Works</span>
          </motion.mark>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            See Our AI Market Research in Action
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Discover how our AI-powered platform transforms complex market data into actionable insights. 
            Watch a quick demo to understand how we can help you make smarter business decisions.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-custom hover:bg-custom/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <i className="fas fa-play-circle text-green-500"></i>
            <span>Full Demo</span>
          </motion.button>
        </motion.div>


      </div>
    </motion.section>
  );
};

export default VideoSection;
