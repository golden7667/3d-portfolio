import React, { useState, useEffect } from 'react';
import { personalData } from '../../data/portfolioData';
import TechGlobe3D from '../canvas/TechGlobe3D';
import { soundManager } from '../../utils/audio';
import { Github, Linkedin } from '../common/Icons';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  GraduationCap,
  ChevronDown,
  Code2,
  Cpu
} from 'lucide-react';


const titles = [
  "AI & Machine Learning Intern",
  "Full-Stack Web Engineer",
  "Computer Vision Specialist",
  "Python Backend Developer"
];

export default function Hero({ onOpenResumeModal }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      speed = 2200; // Pause at full word
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      speed = 300;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          return currentFullText.substring(0, prev.length + 1);
        } else {
          return currentFullText.substring(0, prev.length - 1);
        }
      });

      if (!isDeleting && displayedText === currentFullText) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Available for Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-space">
                Hi, I'm <br />
                <span className="text-gradient">
                  {personalData.name}
                </span>
              </h1>
              
              {/* Dynamic Typewriter Role */}
              <div className="h-10 sm:h-12 mt-3 flex items-center">
                <span className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold flex items-center">
                  <span className="text-purple-400 mr-2">&gt;</span>
                  {displayedText}
                  <span className="w-2.5 h-6 bg-cyan-400 ml-1 inline-block animate-pulse" />
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-outfit">
              {personalData.tagline}
            </p>

            {/* Quick Education Highlight */}
            <div className="p-4 rounded-2xl glass-card border border-slate-800/80 flex items-center gap-4 max-w-xl">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Education & Credentials
                </span>
                <h4 className="text-sm font-semibold text-white">
                  {personalData.education.degree}
                </h4>
                <p className="text-xs text-slate-400">
                  {personalData.education.institution} • CGPA: <strong className="text-cyan-300">{personalData.education.cgpa}</strong> ({personalData.education.year})
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                onMouseEnter={() => soundManager.playHoverSound()}
                onClick={() => soundManager.playClickSound()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={() => {
                  soundManager.playClickSound();
                  if (onOpenResumeModal) onOpenResumeModal();
                }}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="px-6 py-3.5 rounded-xl glass-card border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-semibold text-sm hover:bg-cyan-500/10 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                onMouseEnter={() => soundManager.playHoverSound()}
                onClick={() => soundManager.playClickSound()}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="Email Golden"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalData.phone}`}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative glass-panel rounded-3xl p-4 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              <TechGlobe3D />
              
              {/* Quick Info Grid under globe */}
              <div className="grid grid-cols-2 gap-3 mt-2 pt-3 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">Focus</div>
                    <div className="text-xs font-bold text-white">AI & ML Pipelines</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">Stack</div>
                    <div className="text-xs font-bold text-white">Python + React</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={() => soundManager.playClickSound()}
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL DOWN</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400 group-hover:scale-125 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
