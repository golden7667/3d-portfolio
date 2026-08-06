import React, { useState } from 'react';
import BackgroundCanvas from './components/canvas/BackgroundCanvas';
import Navbar from './components/navbar/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ResumeModal from './components/modals/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-outfit overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 3D Background Scene */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}

    </div>
  );
}
