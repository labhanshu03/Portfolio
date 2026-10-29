import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import OpenSource from './components/sections/OpenSource';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

const App = () => (
  <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  </LazyMotion>
);

export default App;
