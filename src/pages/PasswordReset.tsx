import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Implement password reset logic here
    console.log('Password Reset Request', { email });
    
    // Show success state
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-['Inter'] flex flex-col justify-center items-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-6">
            <motion.i 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="fas fa-lock text-4xl text-custom mb-4 block text-center"
            ></motion.i>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600">
              {isSubmitted 
                ? "Check your email for a password reset link" 
                : "Enter your email to reset your password"}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 rounded-lg border-gray-300 focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50" 
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2.5 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Reset Link
              </motion.button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <i className="fas fa-check-circle text-4xl text-green-500 mb-4 block"></i>
              <p className="text-gray-600 mb-4">
                A password reset link has been sent to {email}
              </p>
              <Link 
                to="/signin"
                className="text-custom hover:text-custom-600 font-medium"
              >
                Return to Login
              </Link>
            </motion.div>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Remembered your password?{' '}
              <Link 
                to="/signin" 
                className="text-custom hover:text-custom-600 font-medium"
              >
                Login here
              </Link>
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <i className="fas fa-shield-alt mr-2 text-custom"></i>
              Your information is secure
            </div>
            <p className="mt-4 text-sm text-gray-500">
              If you signed up with Google, use your Google account to sign in.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PasswordReset;
