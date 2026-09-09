import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BookOpen, Wrench, Compass, Music, Award, ExternalLink, Clock, FileText, Info } from 'lucide-react';
import { journeyMilestones, MilestoneItem } from '../data/journeyData';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'robotics' | 'research' | 'education' | 'personal'>('all');
  const [paperModalItem, setPaperModalItem] = useState<MilestoneItem | null>(null);

  if (!isOpen) return null;

  const filteredMilestones = activeCategory === 'all'
    ? journeyMilestones
    : journeyMilestones.filter((m) => m.category === activeCategory);

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
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA]"
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
          <div className="flex flex-col gap-3 border-b border-white/10 pb-6 pr-12">
            <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-purple-400 flex items-center gap-2">
              <Compass className="w-4 h-4" /> Story & Milestones
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
              The Journey That Grew Me
            </h3>
            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70 max-w-2xl">
              From turning first mechanical cuts of wood in Hanoi’s tool markets to global stages at Johnson Space Center and the FTC World Championship in Texas.
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { id: 'all', label: 'All Milestones' },
                { id: 'robotics', label: 'Robotics & CAD' },
                { id: 'research', label: 'Research & Labs' },
                { id: 'education', label: 'Education & Outreach' },
                { id: 'personal', label: 'Aviation & Music' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-purple-600 text-white font-medium shadow-lg shadow-purple-600/30'
                      : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="flex flex-col gap-8 my-6">
            {filteredMilestones.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Visual preview if available */}
                {item.image && (
                  <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-2">
                    <div className="h-40 rounded-2xl overflow-hidden bg-black/50 border border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    {item.imageCaption && (
                      <span className="text-[11px] text-white/50 italic leading-snug">
                        {item.imageCaption}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex flex-col gap-3 flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs uppercase font-mono font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.year}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-mono">
                      {item.subtitle}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold uppercase text-white">
                    {item.title}
                  </h4>

                  {/* Full Story Paragraph */}
                  <p className="text-sm font-light text-[#D7E2EA]/90 leading-relaxed">
                    {item.fullStory || item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-1 flex flex-col gap-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#D7E2EA]/85">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link / PDF Journal Reader */}
                  {item.id === 'gtsd-research' && (
                    <div className="pt-2">
                      <button
                        onClick={() => setPaperModalItem(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-purple-300" />
                        <span>Read GTSD Paper Abstract & Control Framework</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Research Paper Abstract Fallback Modal */}
      <AnimatePresence>
        {paperModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPaperModalItem(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-3xl bg-[#141416] border border-purple-500/30 p-6 sm:p-8 flex flex-col gap-5 text-white max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-purple-400">
                    Peer-Reviewed Conference Proceedings
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mt-1">
                    NDO-MPC Control Method for Battery-Supercapacitor Hybrid Power Distribution
                  </h3>
                </div>
                <button
                  onClick={() => setPaperModalItem(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs sm:text-sm font-light text-[#D7E2EA]/90 leading-relaxed space-y-3">
                <p>
                  <strong>Abstract:</strong> This research investigates a Nonlinear Disturbance Observer-based Model Predictive Control (NDO-MPC) framework tailored for hybrid energy storage systems in electric and autonomous vehicular platforms. By coordinating high energy-density lithium-ion battery packs with high-rate power-dense supercapacitors, the controller actively estimates dynamic load transients and mitigates high-frequency current ripples.
                </p>
                <p>
                  <strong>Advisory:</strong> Conducted under the mentorship of Associate Professor Vo Thanh Ha.
                </p>
                <p>
                  <strong>Status:</strong> Accepted, published, and orally presented at the GTSD International Conference.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3 text-xs text-purple-200">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  The full-length PDF document will be downloadable once published in the official university index. You can contact Minh directly for pre-print drafts.
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default JourneyModal;
