import React, { useState } from 'react';
import { skillsData } from '../../data/portfolioData';
import { soundManager } from '../../utils/audio';
import {
  Code2,
  Terminal,
  Zap,
  BrainCircuit,
  Database,
  Search,
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredCategories = skillsData.map((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Comprehensive skill tree covering backend engineering, machine learning pipelines, computer vision, web technologies, and database architecture.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playClickSound();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => soundManager.playHoverSound()}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. OpenCV)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="text-xl font-bold font-space text-white">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  ({group.skills.length} competencies)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => soundManager.playHoverSound()}
                    className="glass-card rounded-2xl p-5 border border-slate-800/80 glass-card-hover group relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top row */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-space">
                          {skill.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Percentage label */}
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>Proficiency</span>
                        <span className="text-cyan-300 font-semibold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${group.color} transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 glass-card rounded-3xl border border-slate-800">
              <p className="text-slate-400 font-mono text-sm">
                No skills matched "{searchQuery}". Try clearing your search query.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
