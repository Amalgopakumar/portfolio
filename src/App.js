import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
