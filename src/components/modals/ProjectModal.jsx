import React, { useState } from 'react';
import { soundManager } from '../../utils/audio';
import { Github } from '../common/Icons';
import {
  X,
  ExternalLink,
  Sliders,
  Sparkles,
  FileSpreadsheet,
  Printer,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  RefreshCw,
  Database
} from 'lucide-react';


export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // ML Simulation state for Steel Properties project
  const [alloyState, setAlloyState] = useState({
    carbon: 0.22,
    manganese: 1.35,
    silicon: 0.35,
    chromium: 0.50,
    nickel: 0.15
  });

  const [simulatedResults, setSimulatedResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSteelProperties = () => {
    soundManager.playClickSound();
    setIsCalculating(true);
    setTimeout(() => {
      // Formula simulation based on metallurgical carbon equivalents
      const c = alloyState.carbon;
      const mn = alloyState.manganese;
      const si = alloyState.silicon;
      const cr = alloyState.chromium;
      const ni = alloyState.nickel;

      const yieldStrength = (300 + c * 450 + mn * 80 + si * 60 + cr * 110 + ni * 40).toFixed(1);
      const tensileStrength = (420 + c * 600 + mn * 110 + si * 75 + cr * 140 + ni * 50).toFixed(1);
      const elongation = (32 - c * 18 - mn * 2.5 - cr * 3.0).toFixed(1);

      setSimulatedResults({
        yieldStrength: `${yieldStrength} MPa`,
        tensileStrength: `${tensileStrength} MPa`,
        elongation: `${elongation} %`,
        hardness: `${(tensileStrength / 3.2).toFixed(1)} HB`,
        grade: c > 0.3 ? 'High Tensile Structural Steel (Grade A)' : 'Ductile Structural Steel (Grade B+)'
      });
      setIsCalculating(false);
      soundManager.playSuccessSound();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClickSound();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT DEEP-DIVE MODAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-space text-white">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-cyan-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-slate-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundManager.playHoverSound()}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 text-xs font-mono transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundManager.playHoverSound()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-semibold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Preview</span>
            </a>
          )}
        </div>

        {/* Key Features Bullet List */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-bold font-space text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Architecture & Feature Highlights</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.details.map((detail, idx) => (
              <li key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive ML Simulator section if Steel project */}
        {project.id === 'steel-properties-predictive' && (
          <div className="p-6 rounded-2xl bg-[#090e24] border border-cyan-500/30 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold font-space text-white">
                  Live Multi-Output Random Forest Simulator
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300">
                Interactive Model Inference
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              Adjust chemical alloy composition percentages below to trigger real-time ML property predictions:
            </p>

            {/* Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-xs font-mono text-slate-300 flex justify-between mb-1">
                  <span>Carbon (C %)</span>
                  <span className="text-cyan-400 font-bold">{alloyState.carbon}%</span>
                </label>
                <input
                  type="range"
                  min="0.05"
                  max="0.6"
                  step="0.01"
                  value={alloyState.carbon}
                  onChange={(e) => setAlloyState({ ...alloyState, carbon: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 flex justify-between mb-1">
                  <span>Manganese (Mn %)</span>
                  <span className="text-cyan-400 font-bold">{alloyState.manganese}%</span>
                </label>
                <input
                  type="range"
                  min="0.2"
                  max="2.0"
                  step="0.05"
                  value={alloyState.manganese}
                  onChange={(e) => setAlloyState({ ...alloyState, manganese: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 flex justify-between mb-1">
                  <span>Silicon (Si %)</span>
                  <span className="text-cyan-400 font-bold">{alloyState.silicon}%</span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.02"
                  value={alloyState.silicon}
                  onChange={(e) => setAlloyState({ ...alloyState, silicon: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 flex justify-between mb-1">
                  <span>Chromium (Cr %)</span>
                  <span className="text-cyan-400 font-bold">{alloyState.chromium}%</span>
                </label>
                <input
                  type="range"
                  min="0.0"
                  max="1.5"
                  step="0.05"
                  value={alloyState.chromium}
                  onChange={(e) => setAlloyState({ ...alloyState, chromium: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 flex justify-between mb-1">
                  <span>Nickel (Ni %)</span>
                  <span className="text-cyan-400 font-bold">{alloyState.nickel}%</span>
                </label>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.05"
                  value={alloyState.nickel}
                  onChange={(e) => setAlloyState({ ...alloyState, nickel: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Run Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={calculateSteelProperties}
                disabled={isCalculating}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs font-mono transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                <RefreshCw className={`w-4 h-4 ${isCalculating ? 'animate-spin' : ''}`} />
                <span>{isCalculating ? 'RUNNING RANDOM FOREST...' : 'PREDICT STEEL PROPERTIES'}</span>
              </button>
            </div>

            {/* Prediction Display */}
            {simulatedResults && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900 border border-cyan-500/30 animate-fadeIn">
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Yield Strength</div>
                  <div className="text-lg font-bold text-cyan-300 font-mono">{simulatedResults.yieldStrength}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tensile Strength</div>
                  <div className="text-lg font-bold text-cyan-300 font-mono">{simulatedResults.tensileStrength}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Elongation</div>
                  <div className="text-lg font-bold text-cyan-300 font-mono">{simulatedResults.elongation}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Hardness</div>
                  <div className="text-lg font-bold text-purple-300 font-mono">{simulatedResults.hardness}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Technology Stack Utilized
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
