import { useState, useEffect } from 'react';
import Loader from '../src/components/ui/Loader'; // 👈 Create this file

import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/About';
import Projects from './components/projects/Projects';
import Certificate from './components/certificats/certificate';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonals';
import DarkMode from './components/theme/DarkMode';
import ClipPathLinks from './components/ui/Clippath';
import ChatBot from './components/chat/Chat-bot';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader for 4 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // 👈 Lottie loader while loading

  return (
    <div className="w-full min-h-screen text-white">
      <ChatBot />
      <Navbar />
      <DarkMode />
      <HomePage />
      <AboutPage />
      <Skills />
      <Certificate />
      <Projects />
      <Testimonials />
      <ClipPathLinks />
    </div>
  );
}

export default App;
