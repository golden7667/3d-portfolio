import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../modals/ProjectModal';
import { soundManager } from '../../utils/audio';
import { Github } from '../common/Icons';
import {
  Code2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Cpu,
  Eye,
  BarChart3
} from 'lucide-react';


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real-world full-stack machine learning applications, computer vision systems, and database engineering.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHoverSound()}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400">Featured</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white font-space mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-4">
                  {project.subtitle}
                </p>

                {/* Project Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Tags & Trigger Modal */}
              <div className="pt-6 border-t border-slate-800/80 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => {
                      soundManager.playClickSound();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => soundManager.playHoverSound()}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black font-semibold text-xs font-mono transition-all flex items-center gap-2 group/btn shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Explore Interactive Demo & Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
