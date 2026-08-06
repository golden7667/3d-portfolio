import React from 'react';
import { personalData, skillsData, experienceData, projectsData, competenciesData } from '../../data/portfolioData';
import { soundManager } from '../../utils/audio';
import { Github, Linkedin } from '../common/Icons';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';


export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    soundManager.playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white print:static">
      
      {/* Top Floating Control Bar (Hidden on print) */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 print:hidden">
        <button
          onClick={handlePrint}
          onMouseEnter={() => soundManager.playHoverSound()}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Printer className="w-4 h-4" />
          <span>PRINT / SAVE AS PDF</span>
        </button>
        
        <button
          onClick={() => {
            soundManager.playClickSound();
            onClose();
          }}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Resume Container */}
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 p-8 sm:p-12 print:max-h-none print:overflow-visible print:bg-white print:text-black print:p-0 print:border-none print:shadow-none font-outfit shadow-2xl">
        
        {/* Header */}
        <div className="border-b border-slate-800 print:border-slate-300 pb-6 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-space text-white print:text-black tracking-tight">
            {personalData.name}
          </h1>
          <p className="text-sm font-mono text-cyan-400 print:text-cyan-800 font-semibold mt-1">
            {personalData.role}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300 print:text-slate-700 font-mono">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
              {personalData.phone}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
              {personalData.email}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
              {personalData.location}
            </span>
            <span>•</span>
            <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 print:text-blue-800 underline">
              linkedin.com/in/golden-kr-singh
            </a>
            <span>•</span>
            <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="text-cyan-300 print:text-blue-800 underline">
              github.com/golden7667
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-slate-900 font-bold mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Education
          </h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-white print:text-black">
                {personalData.education.institution}
              </h3>
              <p className="text-xs text-slate-300 print:text-slate-700">
                {personalData.education.degree} | <strong className="text-cyan-300 print:text-black">CGPA: {personalData.education.cgpa}</strong>
              </p>
            </div>
            <div className="text-right text-xs font-mono text-slate-400 print:text-slate-600">
              <div>{personalData.education.location}</div>
              <div>{personalData.education.year}</div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-slate-900 font-bold mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-2 text-xs text-slate-300 print:text-slate-800">
            {skillsData.map((cat) => (
              <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-4">
                <span className="font-bold text-slate-200 print:text-black">{cat.category}:</span>
                <span className="sm:col-span-3 text-slate-300 print:text-slate-800">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-slate-900 font-bold mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Experience
          </h2>
          <div className="space-y-4">
            {experienceData.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {exp.title} <span className="text-cyan-400 print:text-slate-700 font-normal">| {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.mode}</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-slate-300 print:text-slate-800">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-slate-900 font-bold mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Projects
          </h2>
          <div className="space-y-4">
            {projectsData.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {proj.title}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-300 print:text-slate-600">
                    {proj.tags.join(', ')}
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-slate-300 print:text-slate-800">
                  {proj.details.map((dt, dIdx) => (
                    <li key={dIdx}>{dt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-slate-900 font-bold mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
            <div>
              <strong className="text-white print:text-black">Technical Skills:</strong> {competenciesData.technical.join(', ')}
            </div>
            <div>
              <strong className="text-white print:text-black">Professional Skills:</strong> {competenciesData.professional.join(', ')}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
