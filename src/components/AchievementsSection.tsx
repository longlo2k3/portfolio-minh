import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievementsData, AchievementItem } from "../data/achievementsData";
import FadeIn from "./FadeIn";
import {
  Trophy,
  Award,
  ShieldCheck,
  Sparkles,
  X,
  CheckCircle2,
  Play,
  Pause,
  Camera,
  ExternalLink,
} from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<AchievementItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isManualPaused, setIsManualPaused] = useState<boolean>(false);

  const categories = [
    "All",
    "International",
    "National",
    "Corporate",
    "Academic",
  ];

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: achievementsData.length };
    achievementsData.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? achievementsData
      : achievementsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure seamless infinite loop on any screen width:
  // We guarantee baseSet has at least 7 items, then duplicate it exactly once ([Set A, Set B]).
  // This ensures translateX(-50%) maps with 100% mathematical precision and zero gap/jump.
  const { trackItems, animationDuration } = useMemo(() => {
    if (filteredItems.length === 0) {
      return { trackItems: [], animationDuration: "30s" };
    }
    const repeatCount = Math.max(1, Math.ceil(7 / filteredItems.length));
    const baseSet: AchievementItem[] = [];
    for (let i = 0; i < repeatCount; i++) {
      baseSet.push(...filteredItems);
    }
    const track = [...baseSet, ...baseSet];
    // Constant velocity: ~4.2s per card
    const duration = `${Math.max(24, baseSet.length * 4.2)}s`;
    return { trackItems: track, animationDuration: duration };
  }, [filteredItems]);

  const isPaused = isHovered || isManualPaused || activeItem !== null;

  // Category badge styles
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "International":
        return "bg-amber-400/15 text-amber-300 border-amber-400/30";
      case "National":
        return "bg-rose-500/15 text-rose-300 border-rose-500/30";
      case "Corporate":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
      case "Academic":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  return (
    <section
      id="achievements"
      className="relative z-20 bg-[#050505] text-[#D7E2EA] px-0 py-20 sm:py-28 overflow-hidden border-t border-white/10 select-none"
    >
      {/* Atmospheric background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-10 relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Distinctions & Honors</span>
            </div>

            <h2
              className="font-black uppercase tracking-tight text-white leading-none"
              style={{ fontSize: "clamp(2.4rem, 7vw, 90px)" }}
            >
              Achievements Wall
            </h2>

            <p className="max-w-2xl text-sm sm:text-base font-light text-[#D7E2EA]/75 mt-4">
              Continuous showcase of verified international robotics titles,
              government honors, corporate research fellowships, and
              peer-reviewed conference publications.
            </p>

            {/* Category Filter Tabs with Item Counts */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    type="button"
                    className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/25 scale-105"
                        : "bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                        isSelected
                          ? "bg-black/20 text-black"
                          : "bg-white/10 text-[#D7E2EA]/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Infinite Continuous Carousel Slideshow */}
      <div
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div
          key={selectedCategory}
          className="achievements-marquee-track flex gap-5 sm:gap-6 px-6"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: animationDuration,
          }}
        >
          {trackItems.map((item, idx) => (
            <div
              key={`${item.id}-${selectedCategory}-${idx}`}
              onClick={() => setActiveItem(item)}
              className="group relative w-[310px] sm:w-[370px] md:w-[410px] flex-shrink-0 rounded-3xl bg-[#0e0e12]/95 border border-white/10 hover:border-amber-400/60 p-4 sm:p-5 flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)] cursor-pointer select-none"
            >
              {/* Visual Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 bg-[#141418] border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/img/FTC quoc te/1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white/90">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-amber-400 text-black flex items-center gap-1 shadow-md shadow-amber-400/20">
                    <Award className="w-3 h-3" /> {item.badge}
                  </span>
                </div>

                {/* Bottom Image Caption & Category Tag */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span
                    className={`text-[9px] uppercase font-mono font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm ${getCategoryBadge(
                      item.category,
                    )}`}
                  >
                    {item.category}
                  </span>
                  <div className="text-[11px] text-white/80 truncate font-light flex items-center gap-1">
                    <Camera className="w-3 h-3 text-amber-400/70 flex-shrink-0" />
                    <span className="truncate">{item.imageCaption}</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="flex flex-col gap-2 flex-grow">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 font-semibold truncate">
                  {item.issuer}
                </span>
                <h3 className="text-base sm:text-lg font-bold uppercase text-white leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/75 line-clamp-3 leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>

              {/* Status Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  Verified Honor
                </span>
                <span className="text-amber-300 group-hover:text-amber-200 flex items-center gap-1 text-xs font-semibold">
                  Inspect Proof{" "}
                  <Sparkles className="w-3 h-3 text-amber-400 group-hover:rotate-12 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Inspection Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="max-w-3xl w-full rounded-3xl bg-[#0F0F12] border border-amber-400/30 p-6 sm:p-8 flex flex-col gap-6 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto text-[#D7E2EA]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-xs uppercase font-mono px-2.5 py-0.5 rounded-full border ${getCategoryBadge(
                        activeItem.category,
                      )}`}
                    >
                      {activeItem.category} • {activeItem.year}
                    </span>
                    <span className="text-xs text-amber-300/80 font-mono font-medium">
                      {activeItem.issuer}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  type="button"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white cursor-pointer transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-res Image / Scan Display */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/90 flex items-center justify-center max-h-[46vh] p-1">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[44vh] w-auto max-w-full object-contain rounded-xl"
                  decoding="async"
                />
              </div>
              <p className="text-xs text-center text-white/60 -mt-3 italic flex items-center justify-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400/70" />
                {activeItem.imageCaption}
              </p>

              {/* Description & Verification Proof Note */}
              <div className="flex flex-col gap-4">
                <p className="text-sm font-light text-[#D7E2EA]/90 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col text-xs">
                    <span className="font-semibold text-white">
                      Verification Status & Proof Note
                    </span>
                    <span className="text-white/70 mt-0.5">
                      {activeItem.proofNote}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
