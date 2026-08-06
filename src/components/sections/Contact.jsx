import React, { useState } from 'react';
import { personalData } from '../../data/portfolioData';
import { soundManager } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from '../common/Icons';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  ArrowUp,
  MessageSquare
} from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    soundManager.playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playClickSound();
    soundManager.playSuccessSound();

    // Trigger confetti explosion
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 4500);
  };

  const scrollToTop = () => {
    soundManager.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project in mind, machine learning opportunity, or engineering inquiry? Drop a message below or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalData.email, 'email')}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Phone Contact</div>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm font-bold text-white hover:text-purple-300 transition-colors font-mono"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-300 transition-colors"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 glass-card-hover flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Primary Location</div>
                <div className="text-sm font-bold text-white font-space">
                  {personalData.location}
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800/80 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                Profiles & Repositories
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHoverSound()}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/golden7667</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHoverSound()}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/golden-kr-singh</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration / Internship Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project requirements or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => soundManager.playHoverSound()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm font-mono shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND DIRECT MESSAGE</span>
              </button>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-mono text-center animate-fadeIn">
                  ⚡ Thank you! Your message has been dispatched to Golden Kumar's inbox.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Golden Kumar. Designed with React, Three.js & Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHoverSound()}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-all flex items-center gap-1.5"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
