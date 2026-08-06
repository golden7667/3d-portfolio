import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Sparkles, Send } from 'lucide-react';
import { soundManager } from '../../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = soundManager.toggleMute();
    setAudioEnabled(active);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    soundManager.playClickSound();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050811]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => soundManager.playHoverSound()}
          onClick={() => soundManager.playClickSound()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all">
            <div className="w-full h-full bg-[#070b19] rounded-[11px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-space font-bold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              GOLDEN<span className="text-cyan-400">.KUMAR</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
              AI & Web Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundManager.playHoverSound()}
              onClick={() => handleLinkClick(link.href)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundManager.playHoverSound()}
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 text-xs font-mono ${
              audioEnabled
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title={audioEnabled ? 'Mute UI Sound FX' : 'Enable Synth Audio FX'}
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden lg:inline">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden lg:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            onMouseEnter={() => soundManager.playHoverSound()}
            onClick={() => soundManager.playClickSound()}
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl group-hover:opacity-100 transition-opacity" />
            <div className="relative px-4 py-2 bg-[#070c1e] rounded-[11px] transition-all duration-300 group-hover:bg-transparent flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Hire Me</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            className={`p-2 rounded-lg border ${
              audioEnabled
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              soundManager.playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#080d1e]/95 backdrop-blur-2xl border-b border-slate-800 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-4 py-3 rounded-lg text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="mt-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-center text-white font-bold rounded-xl shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
