import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * PasswordReset page allows users to reset their account password.
 * 
 * Key Features:
 * - Email input for password reset
 * - Form validation
 * - Error handling
 * - Animated transitions
 * - Responsive design
 */
const PasswordReset: React.FC = () => {
  // State management for form inputs and validation
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [resetError, setResetError] = useState('');
  const navigate = useNavigate();

  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Validate email input
   * @param {string} inputEmail - Email to validate
   * @returns {boolean} - Whether email is valid
   */
  const validateEmail = (inputEmail: string) => {
    return emailRegex.test(inputEmail);
  };

  /**
   * Handle email input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
    setResetError('');
  };

  /**
   * Submit password reset request
   * @param {React.FormEvent} e - Form submission event
   */
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous errors
    setResetError('');

    // Validate email before submission
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setResetError('Please enter a valid email address.');
      return;
    }

    try {
      // Simulated password reset request
      // In a real app, this would be an API call
      console.log('Password reset requested for:', email);
      
      // Show success message and redirect
      navigate('/reset-confirmation', { 
        state: { email: email } 
      });
    } catch (error) {
      // Handle reset errors
      setResetError('Unable to reset password. Please try again.');
      console.error('Password reset error:', error);
    }
  };

  // Animation variants for page entrance
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    out: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };

  return (
    // Full-page container with centered content
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12"
    >
      {/* Password Reset Card */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Page Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* Reset Form */}
        <form 
          onSubmit={handleResetPassword} 
          className="mt-8 space-y-6"
        >
          {/* Email Input */}
          <div>
            <label 
              htmlFor="email" 
              className="sr-only"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              placeholder="Email address"
              className={`
                appearance-none rounded-md relative block w-full px-3 py-2 
                border ${isEmailValid ? 'border-gray-300' : 'border-red-500'}
                placeholder-gray-500 text-gray-900 
                focus:outline-none focus:ring-custom focus:border-custom
              `}
            />
            {/* Email Validation Error Message */}
            {!isEmailValid && email && (
              <p className="mt-2 text-sm text-red-600">
                Please enter a valid email address
              </p>
            )}
          </div>

          {/* Reset Error Message */}
          {resetError && (
            <div className="text-center text-sm text-red-600">
              {resetError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isEmailValid || !email}
            className={`
              group relative w-full flex justify-center py-2 px-4 
              border border-transparent text-sm font-medium rounded-md 
              text-white bg-custom
              ${(!isEmailValid || !email) 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-custom-dark focus:outline-none focus:ring-2 focus:ring-custom'}
            `}
          >
            Send Reset Link
          </button>
        </form>

        {/* Navigation Links */}
        <div className="text-center mt-6">
          <Link 
            to="/signin" 
            className="font-medium text-custom hover:text-custom-dark"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordReset;
