import { lazy, Suspense, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/ui/Loader";
import Navbar from "./components/navbar/Navbar";
import ChatBot from "./components/chat/Chat-bot";
import Experience from "./components/experience/Experience";
import ParticlesBackground from "./components/ui/ParticleBackground";
import AnimatedCursor from "./components/ui/Cursor";
import MagneticCursor from "./components/ui/Cursor";

const HomePage = lazy(() => import("./components/home/HomePage"));
const AboutPage = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Certificate = lazy(() => import("./components/certificats/Certificate"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Testimonials = lazy(() => import("./components/testimonials/Testimonals"));
import { Toaster } from 'react-hot-toast';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-background text-foreground">
      <MagneticCursor />
      {/* <ParticlesBackground /> */}
      <Toaster
        position="top-center"
        toastOptions={{
          // Global Default Styles
          style: {
            background: '#009e66',
            color: '#ffffff',
            fontWeight: '500',
          },
          success: {
            style: {
              background: '#009e66',
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#009e66',
            },
          },
          error: {
            style: {
              background: '#009e66',
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#009e66',
            },
          },
        }}
      />
      {/* Loader with animation */}
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {/* Render site after loader completes */}
      {!loading && (
        <>
          <ChatBot />
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <main className="scroll-smooth">
              <section id="home">
                <HomePage />
              </section>
              <section id="about">
                <AboutPage />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="certificate">
                <Certificate />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
