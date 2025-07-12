import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "../src/components/ui/Loader";
import Navbar from "./components/navbar/Navbar";
import ChatBot from "./components/chat/Chat-bot";
import Experience from "./components/experience/Experience";

const HomePage = lazy(() => import("./components/home/HomePage"));
const AboutPage = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Certificate = lazy(() => import("./components/certificats/Certificate"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Testimonials = lazy(() => import("./components/testimonials/Testimonals"));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-background text-foreground">
      <ChatBot />
      <Navbar />
      <Suspense fallback={<Loader />}>
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
    </div>
  );
}

export default App;