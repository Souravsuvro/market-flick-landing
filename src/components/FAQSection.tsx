import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is Market Flick and how does it work?",
      answer: "Market Flick is an AI-powered market research platform that helps entrepreneurs and businesses analyze market opportunities. It uses advanced algorithms to process market data, competitor information, and consumer trends to provide actionable insights for your business idea."
    },
    {
      question: "How accurate are the market insights?",
      answer: "Our market insights are based on real-time data from reliable sources and are continuously updated. The AI analyzes multiple data points to ensure accuracy, though we recommend using the insights as part of a comprehensive decision-making process."
    },
    {
      question: "Can I analyze multiple markets simultaneously?",
      answer: "Yes, Market Flick allows you to analyze and compare multiple markets simultaneously. This feature helps you identify the most promising opportunities across different regions or market segments."
    },
    {
      question: "What types of businesses can benefit from Market Flick?",
      answer: "Market Flick is designed for businesses of all sizes, from startups to established companies. Whether you're launching a new product, expanding to new markets, or optimizing your current business strategy, our platform can provide valuable insights."
    },
    {
      question: "How often is the market data updated?",
      answer: "Our market data is updated in real-time, ensuring you always have access to the latest market trends, consumer behavior patterns, and competitive intelligence."
    }
  ];

  return (
    <section className="faq-section py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-indigo-500 font-semibold text-sm sm:text-base mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block">
            Frequently Asked Questions
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500/20 rounded-full"></div>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Market Flick's AI-powered market research platform
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-200 ${
                openIndex === index 
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10' 
                  : 'border-gray-100 hover:border-indigo-200 hover:shadow-md'
              }`}
              initial={false}
            >
              <button
                className={`w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 ${
                  openIndex === index ? 'bg-indigo-50/50' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    openIndex === index 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-indigo-100 text-indigo-500'
                  }`}>
                    <i className="fas fa-question text-sm"></i>
                  </span>
                  <span className={`text-base sm:text-lg font-medium ${
                    openIndex === index ? 'text-indigo-700' : 'text-gray-900'
                  }`}>
                    {item.question}
                  </span>
                </div>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                  openIndex === index 
                    ? 'bg-indigo-500 text-white rotate-180' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  <i className="fas fa-chevron-down text-sm"></i>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-2 text-base text-gray-600 sm:pl-[4.5rem]">
                      <div className="prose prose-indigo max-w-none">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Link */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium group"
          >
            Contact Support
            <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;