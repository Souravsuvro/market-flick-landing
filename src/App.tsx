import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen">
        <motion.div
          className="relative"
          animate={{
            width: isChatOpen ? 'calc(100% - 380px)' : '100%',
            marginRight: isChatOpen ? '380px' : '0'
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <Header isChatOpen={isChatOpen} />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <VideoSection />
                  <Features />
                  <Pricing />
                  <FAQSection />
                </>
              } />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/password-reset" element={<PasswordReset />} />
            </Routes>
          </main>
          <Footer isChatOpen={isChatOpen} />
        </motion.div>
        
        <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      </div>
    </Router>
  );
};

export default App;
