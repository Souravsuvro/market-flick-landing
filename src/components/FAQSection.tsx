import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQSection component displays frequently asked questions with expandable answers.
 * 
 * Key Features:
 * - Accordion-style FAQ list
 * - Animated expand/collapse with Framer Motion
 * - Responsive design using Tailwind CSS
 * - Support button for additional assistance
 */
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  // State to track which FAQ item is currently expanded
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // FAQ data with questions and answers
  const faqData: FAQItem[] = [
    {
      question: "How does Market Flick's AI analyze market research?",
      answer: "Our advanced AI algorithms process vast amounts of data from multiple sources, including market trends, consumer behavior, competitive landscape, and economic indicators to provide comprehensive, actionable insights."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We use bank-grade encryption and follow strict data protection protocols. Your business information is confidential and will never be shared without explicit consent."
    },
    {
      question: "Can I customize the market research report?",
      answer: "Yes! Our platform allows you to focus on specific industries, regions, and business parameters. You can generate tailored reports that match your unique business needs."
    },
    {
      question: "How quickly can I get market insights?",
      answer: "Our AI-powered platform generates comprehensive market research reports in minutes, compared to traditional methods that could take weeks or months."
    },
    {
      question: "Do I need technical expertise to use Market Flick?",
      answer: "Not at all. Our user-friendly interface is designed for entrepreneurs and business professionals of all technical backgrounds. Simply input your business idea, and our AI does the rest."
    }
  ];

  // Animation variants for FAQ list entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Variants for individual FAQ items
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

  /**
   * Toggle FAQ item expansion
   * @param index - Index of the FAQ item to toggle
   */
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // FAQ section with responsive layout
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.mark 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-custom/10 rounded-full mb-4"
          >
            <span className="text-custom font-semibold">FAQ</span>
            <span className="text-gray-600 text-sm">Frequently Asked Questions</span>
          </motion.mark>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Got Questions? We've Got Answers
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to the most common questions about our AI-powered market research platform.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* FAQ Question Header */}
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.i 
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className={`fas fa-chevron-down text-custom transition-transform duration-300`}
                />
              </button>

              {/* FAQ Answer with Animated Expansion */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: { duration: 0.3 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { duration: 0.2 }
                    }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Didn't find the answer you were looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <i className="fas fa-envelope text-green-500"></i>
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
