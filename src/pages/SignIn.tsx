import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * UserSignInPage component for user sign-in.
 * 
 * Key Features:
 * - Email and password authentication
 * - Social login options
 * - Form validation
 * - Error handling
 * - Responsive design
 */
const UserSignInPage: React.FC = () => {
  // State management for form inputs and validation
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);
  const navigate = useNavigate();

  /**
   * Handle email input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  /**
   * Handle password input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  /**
   * Submit sign-in request
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement sign-in logic here
    console.log('Sign In', { userEmail, userPassword, rememberUser });
  };

  /**
   * Handle social login (Google)
   */
  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic
    console.log('Google Sign-In');
  };

  return (
    // Full-page container with centered content
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-['Inter'] flex flex-col justify-center items-center px-4">
      {/* Sign In Card */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Empowering Smarter Business Decisions
          </h2>
        </div>

        {/* Sign In Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Google Sign In Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 px-4 text-gray-700 font-medium mb-6 hover:bg-gray-50 transition-colors"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" 
              alt="Google" 
              className="w-6 h-6"
            />
            Sign in with Google
          </motion.button>

          {/* Social Login Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-500 bg-white">or continue with</span>
            </div>
          </div>

          {/* Email Input */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="userEmail" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input 
                  type="email" 
                  id="userEmail" 
                  value={userEmail}
                  onChange={handleUserEmailChange}
                  required
                  className="block w-full pl-10 rounded-lg border-gray-300 focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50" 
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label 
                htmlFor="userPassword" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  type={showUserPassword ? "text" : "password"} 
                  id="userPassword" 
                  value={userPassword}
                  onChange={handleUserPasswordChange}
                  required
                  className="block w-full pl-10 pr-10 rounded-lg border-gray-300 focus:border-custom focus:ring focus:ring-custom focus:ring-opacity-50" 
                  placeholder="Enter your password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowUserPassword(!showUserPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i className={`fas ${showUserPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="rememberUser" 
                  checked={rememberUser}
                  onChange={() => setRememberUser(!rememberUser)}
                  className="h-4 w-4 text-custom border-gray-300 rounded focus:ring-custom"
                />
                <label 
                  htmlFor="rememberUser" 
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <button 
                type="button"
                onClick={() => navigate('/password-reset')}
                className="text-sm font-medium text-custom hover:text-custom/80"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-custom text-white font-medium py-2.5 rounded-lg hover:bg-custom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom transition-colors"
            >
              Sign in
            </motion.button>
          </form>
        </motion.div>

        {/* Sign Up Navigation */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => navigate('/signup')}
            className="font-medium text-custom hover:text-custom/80"
          >
            Sign up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default UserSignInPage;
