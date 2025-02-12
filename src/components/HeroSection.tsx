import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface FileUpload {
  file: File;
  preview: string;
  type: string;
}

const HeroSection: React.FC = () => {
  const [businessConcept, setBusinessConcept] = useState('');
  const [targetMarketLocation, setTargetMarketLocation] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: FileUpload[] = Array.from(files).map(file => ({
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
      type: file.type
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const newFiles = [...prev];
      if (prev[index].preview) {
        URL.revokeObjectURL(prev[index].preview);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return 'fa-image';
    if (type.includes('pdf')) return 'fa-file-pdf';
    if (type.includes('document')) return 'fa-file-word';
    return 'fa-file';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with files and website URL
    console.log({
      businessConcept,
      targetMarketLocation,
      websiteUrl,
      files: uploadedFiles.map(f => f.file)
    });
  };

  const handleMarketAnalysis = () => {
    if (!businessConcept.trim()) {
      alert('Please enter your business concept');
      return;
    }
    if (!targetMarketLocation) {
      alert('Please select a target market location');
      return;
    }
    console.log('Analyzing market for:', { businessConcept, targetMarketLocation });
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative pt-16 md:pt-20 lg:pt-0 flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 items-center">
              {/* Content Section - Always First */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="w-full lg:col-span-6 mb-12 lg:mb-0"
              >
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  <h1 className="mb-4 sm:mb-6">
                    <span className="block text-sm sm:text-base font-semibold uppercase tracking-wide text-gray-500 lg:text-sm xl:text-base mb-2 sm:mb-3">
                      <i className="fas fa-chart-network text-indigo-500 mr-2"></i>
                      Market Analysis Platform
                    </span>
                    <span className="mt-2 block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold">
                      <span className="block text-gray-900 mb-1 sm:mb-2">Analyze Your</span>
                      <span className="block text-indigo-600">Market Potential &</span>
                      <span className="block text-gray-900 mb-1 sm:mb-2">Get AI-Driven Recommendations</span>
                    </span>
                  </h1>
                  <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start">
                    <i className="fas fa-analytics text-2xl sm:text-3xl text-indigo-500 mr-3 transform -rotate-12"></i>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                      Unlock data-driven insights for your business growth and market success
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium text-white bg-indigo-600 rounded-lg sm:rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <i className="fas fa-chart-line text-base sm:text-lg md:text-xl"></i>
                      Get Started
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded-lg sm:rounded-xl hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <i className="fas fa-play text-base sm:text-lg md:text-xl"></i>
                      Watch Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Form Section */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="w-full lg:col-span-6"
              >
                <div className="max-w-lg mx-auto">
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8">
                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <label htmlFor="businessConcept" className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Business Concept
                        </label>
                        <textarea
                          id="businessConcept"
                          rows={3}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none shadow-sm transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                          placeholder="Describe your business idea or concept..."
                          value={businessConcept}
                          onChange={(e) => setBusinessConcept(e.target.value)}
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="targetMarketLocation" className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Target Market Location
                        </label>
                        <select
                          id="targetMarketLocation"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200 text-gray-900 text-sm sm:text-base"
                          value={targetMarketLocation}
                          onChange={(e) => setTargetMarketLocation(e.target.value)}
                        >
                          <option value="">Select a location</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ca">Canada</option>
                          <option value="au">Australia</option>
                          <option value="eu">European Union</option>
                          <option value="apac">Asia Pacific</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="websiteUrl" className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Website URL (optional)
                        </label>
                        <input
                          type="url"
                          id="websiteUrl"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          placeholder="https://example.com"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Upload Files (optional)
                        </label>
                        <div className="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-200">
                          <div className="space-y-2 text-center">
                            <svg
                              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm sm:text-base text-gray-600 justify-center">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload files</span>
                                <input
                                  id="file-upload"
                                  ref={fileInputRef}
                                  type="file"
                                  className="sr-only"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  onChange={handleFileUpload}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Images, PDF, or Documents up to 10MB
                            </p>
                          </div>
                        </div>

                        {/* Uploaded Files Preview */}
                        {uploadedFiles.length > 0 && (
                          <div className="mt-3 sm:mt-4 space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg"
                              >
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                  <i className={`fas ${getFileIcon(file.type)} text-indigo-500 text-lg sm:text-xl`}></i>
                                  <span className="text-sm sm:text-base text-gray-700 truncate max-w-[150px] sm:max-w-xs">
                                    {file.file.name}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleMarketAnalysis}
                        className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg gap-2 text-sm sm:text-base mt-2"
                      >
                        <i className="fas fa-chart-line"></i>
                        Analyze Market
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
