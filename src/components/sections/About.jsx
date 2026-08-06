import React from 'react';
import { personalData, competenciesData } from '../../data/portfolioData';
import { soundManager } from '../../utils/audio';
import { GraduationCap, Award, Cpu, Code2, Database, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Engineering <span className="text-gradient">Intelligent Solutions</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Computer Science undergraduate with hands-on expertise in Machine Learning model optimization, Computer Vision algorithms, and Full-Stack web development.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 glass-card-hover">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  // About Me
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  Golden Kumar
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-space mb-4">
                Bridging Machine Learning & Modern Web Architectures
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I am a Computer Science engineering student at <strong className="text-cyan-300">Vivekananda Global University, Jaipur</strong> graduating in 2026. My technical journey spans building end-to-end Machine Learning platforms—such as predictive analytics platforms for metallurgy and real-time facial recognition attendance systems using OpenCV.
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Through my internships at <strong className="text-purple-300">Rentlee</strong> and <strong className="text-purple-300">Codec Technologies</strong>, I've engineered RESTful APIs, optimized data pipelines, trained Random Forest models, and integrated complex database backends with MySQL and Flask/FastAPI.
              </p>
            </div>

            {/* Core Competencies highlights */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Strengths & Specializations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {competenciesData.technical.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="glass-card rounded-3xl p-6 border border-cyan-500/20 glass-card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Academic Background
                  </span>
                  <h4 className="text-lg font-bold text-white font-space">
                    Vivekananda Global University
                  </h4>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Degree</span>
                  <span className="font-semibold text-white">B.Tech Computer Science</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">CGPA</span>
                  <span className="font-mono font-bold text-cyan-300 text-base">{personalData.education.cgpa} / 10.0</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Passing Year</span>
                  <span className="font-mono text-purple-300 font-semibold">{personalData.education.year}</span>
                </div>
              </div>
            </div>

            {/* Metric Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-cyan-500/40 transition-colors">
                <div className="text-3xl font-extrabold font-space text-cyan-400 mb-1">
                  7.05
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  B.Tech CGPA
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-purple-500/40 transition-colors">
                <div className="text-3xl font-extrabold font-space text-purple-400 mb-1">
                  10+
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  ML & AI Models
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
