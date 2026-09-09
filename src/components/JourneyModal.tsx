import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BookOpen, Wrench, Compass, Music, Award } from 'lucide-react';
import { journeyMilestones, MilestoneItem } from '../data/journeyData';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'robotics' | 'research' | 'education' | 'personal'>('all');

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
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
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
          <div className="flex flex-col gap-6 my-6">
            {filteredMilestones.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-black/40 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Visual preview if available */}
                {item.image && (
                  <div className="w-full md:w-48 h-36 flex-shrink-0 rounded-2xl overflow-hidden bg-black/50 border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2.5 flex-grow">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.year}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">
                      {item.subtitle}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold uppercase text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm font-light text-[#D7E2EA]/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2 flex flex-col gap-1.5">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#D7E2EA]/70">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JourneyModal;
