import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Cpu, CheckCircle2, Layers, Clock, Info } from 'lucide-react';
import { ProjectItem, ProjectLink } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [awaitingLinkInfo, setAwaitingLinkInfo] = useState<string | null>(null);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          data-lenis-prevent
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D7E2EA] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6 pr-12">
            <div className="flex items-center gap-3">
              <span className="font-black text-2xl sm:text-3xl text-purple-400">
                {project.number}
              </span>
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-purple-300 font-medium">
              Role: {project.role}
            </p>
          </div>

          {/* Image Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="rounded-2xl overflow-hidden h-44 sm:h-48 bg-black/40 border border-white/10">
              <img
                src={project.col1Image1}
                alt="Showcase 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44 sm:h-48 bg-black/40 border border-white/10">
              <img
                src={project.col1Image2}
                alt="Showcase 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44 sm:h-48 bg-black/40 border border-white/10">
              <img
                src={project.col2Image}
                alt="Showcase 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full Story & Overview */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" /> Engineering Story & Details
              </h4>
              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-relaxed">
                {project.fullStory}
              </p>
            </div>

            {/* 3 Pillars Showcase if present (e.g. Stembridge) */}
            {project.pillars && project.pillars.length > 0 && (
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-4">
                <h4 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" /> Core Outreach Pillars
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.pillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="rounded-2xl bg-black/50 border border-white/10 p-4 flex flex-col justify-between gap-3">
                      <div className="rounded-xl overflow-hidden h-28 bg-black/80">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h5 className="text-xs font-bold uppercase text-purple-300">
                          {pillar.title}
                        </h5>
                        <p className="text-[11px] font-light text-[#D7E2EA]/75 leading-snug">
                          {pillar.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-200 border border-purple-500/30 text-center">
                        {pillar.stats}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Awards & Distinctions */}
            {project.awards && project.awards.length > 0 && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-sm sm:text-base font-medium uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" /> Key Distinctions & Awards
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {project.specs && project.specs.length > 0 && (
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-white/70 mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex flex-col gap-1"
                    >
                      <span className="text-xs font-light text-[#D7E2EA]/50 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links with Zero-Dead-Link Policy */}
            <div className="pt-2 flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                Project Documentation & External Links
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.externalLinks && project.externalLinks.length > 0 ? (
                  project.externalLinks.map((linkItem, lIdx) => {
                    if (linkItem.status === 'live' && !linkItem.url.startsWith('TBD')) {
                      return (
                        <a
                          key={lIdx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
                        >
                          <span>{linkItem.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      );
                    }
                    return (
                      <button
                        key={lIdx}
                        type="button"
                        onClick={() =>
                          setAwaitingLinkInfo(
                            `Link for "${linkItem.label}" is being finalized with the project team. The technical specifications and telemetry overview are detailed above.`
                          )
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{linkItem.label}</span>
                      </button>
                    );
                  })
                ) : project.link && project.link !== '#' && !project.link.startsWith('TBD') ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-all"
                  >
                    <span>{project.externalLinkText || 'Visit Live Project'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setAwaitingLinkInfo(
                        'Detailed public repository and live interactive telemetry for this project are currently being updated.'
                      )
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white/80 text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-white/10"
                  >
                    <Info className="w-3.5 h-3.5 text-purple-400" />
                    <span>Deep Dive Technical Preview</span>
                  </button>
                )}
              </div>

              {/* Notice for Awaiting Link */}
              <AnimatePresence>
                {awaitingLinkInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start justify-between gap-2"
                  >
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{awaitingLinkInfo}</span>
                    </div>
                    <button
                      onClick={() => setAwaitingLinkInfo(null)}
                      className="text-amber-200/70 hover:text-white font-bold"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
