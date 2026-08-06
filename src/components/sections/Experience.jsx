import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { soundManager } from '../../utils/audio';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Terminal, Cpu, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Hands-on internships delivering backend automation, RESTful services, and production Machine Learning model integration.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800 -translate-x-1/2 opacity-50 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#070c1e] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20 hidden sm:flex">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div
                      onMouseEnter={() => soundManager.playHoverSound()}
                      className="glass-card rounded-3xl p-6 border border-slate-800/80 glass-card-hover relative overflow-hidden"
                    >
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <Building2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{item.mode}</span>
                        </div>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl font-bold text-white font-space mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 mb-4">
                        {item.company}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
