import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roboticsTimelineData, RoboticsStage } from "../data/roboticsData";
import FadeIn from "./FadeIn";
import {
  Bot,
  Trophy,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Maximize2,
  Cpu,
  Layers,
  Wrench,
  Radio,
  ExternalLink,
  Flame,
  X,
  Target,
} from "lucide-react";

export const RoboticsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeMediaLens, setActiveMediaLens] = useState<"event" | "robot">(
    "event",
  );
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const stage = roboticsTimelineData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : roboticsTimelineData.length - 1,
    );
    setActiveMediaLens("event");
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < roboticsTimelineData.length - 1 ? prev + 1 : 0,
    );
    setActiveMediaLens("event");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeImageSrc =
    activeMediaLens === "robot" && stage.robotImage
      ? stage.robotImage
      : stage.eventImage;

  const activeImageCaption =
    activeMediaLens === "robot" && stage.robotImageCaption
      ? stage.robotImageCaption
      : stage.eventImageCaption;

  return (
    <section
      id="robotics"
      className="relative bg-[#060608] text-[#D7E2EA] px-4 sm:px-6 md:px-10 py-20 sm:py-28 overflow-hidden border-t border-white/10 select-none"
    >
      {/* 3D Atmospheric Laser Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,220,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Giant Watermark Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] select-none whitespace-nowrap z-0">
        <span
          className="font-black uppercase tracking-tighter text-white block"
          style={{ fontSize: "clamp(5rem, 20vw, 300px)" }}
        >
          {stage.stageNumber} FTC GART
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Futuristic Section Header */}
        <FadeIn delay={0} y={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase w-fit">
                <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>FIRST Tech Challenge & GART Hardware</span>
              </div>
              <h2
                className="font-black uppercase text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 72px)" }}
              >
                Robotics Evolution
              </h2>
            </div>

            {/* Futuristic Controller & Navigation Deck */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/70">
                  Mission Stage
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider">
                  0{currentIndex + 1}{" "}
                  <span className="text-white/30 text-sm font-normal">
                    / 05
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-lg">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl hover:bg-purple-600/40 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Previous stage"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  aria-label="Next stage"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Cyberpunk Interactive Stepper Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
          {roboticsTimelineData.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setActiveMediaLens("event");
                }}
                className={`relative group p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-2 text-left cursor-pointer overflow-hidden ${
                  isSelected
                    ? "bg-gradient-to-b from-purple-900/40 to-black/80 border-purple-500/80 shadow-[0_0_30px_rgba(168,85,247,0.3)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.05]"
                }`}
              >
                {/* Active Neon Accent Bar */}
                {isSelected && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
                  />
                )}

                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-purple-500 text-white shadow"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    PHASE {item.stageNumber}
                  </span>
                  <span className="text-[10px] font-mono text-white/50">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h4
                    className={`text-xs sm:text-sm font-bold uppercase truncate ${
                      isSelected
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {item.id === "mock-gart"
                      ? "VuaMock Scrap"
                      : item.id === "ftc-thanh-hoa"
                        ? "Thanh Hóa"
                        : item.id === "ftc-national"
                          ? "National 16-0"
                          : item.id === "ftc-worlds"
                            ? "Worlds Texas"
                            : "GART Outreach"}
                  </h4>
                  <span className="text-[10px] text-purple-300/80 truncate block">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Heroic Dynamic Mission Stage Console */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#14141A]/90 via-[#0D0D12]/95 to-[#060608] border border-white/15 p-6 sm:p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl overflow-hidden">
          {/* Subtle Cyber Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10"
            >
              {/* Left Column: Narrative Deck (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      STAGE {stage.stageNumber} • {stage.period}
                    </span>
                    <span className="text-xs text-amber-300 font-mono flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> {stage.role}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-wide leading-tight">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-300 font-medium italic mt-2">
                    "{stage.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/90 leading-relaxed">
                  {stage.description}
                </p>

                {/* Key Engineering Milestones Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-white/70 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />{" "}
                      Engineering Highlights
                    </span>
                    <span className="text-[10px] font-mono text-purple-300">
                      {stage.specs.length} Verified Parameters
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {stage.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Awards Bar */}
                {stage.awards && stage.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {stage.awards.map((award, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs font-semibold shadow"
                      >
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: 3D Layered Visual Showcase (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                {/* Main Viewport Container */}
                <div className="relative rounded-3xl overflow-hidden bg-black border border-white/20 aspect-[16/11] sm:aspect-[16/10] group shadow-2xl">
                  {/* Active Main Image */}
                  <img
                    src={activeImageSrc}
                    alt={activeImageCaption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/img/FTC quoc te/1.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top HUD: Dual-Lens Mode Switcher + Zoom */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                    <div className="inline-flex p-1 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                      <button
                        onClick={() => setActiveMediaLens("event")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeMediaLens === "event"
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Arena Match
                      </button>
                      {stage.robotImage && (
                        <button
                          onClick={() => setActiveMediaLens("robot")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                            activeMediaLens === "robot"
                              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          Robot Mechanism
                        </button>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        setPreviewImage({
                          src: activeImageSrc,
                          caption: activeImageCaption,
                        })
                      }
                      className="p-2.5 rounded-2xl bg-black/75 hover:bg-purple-600 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-105"
                      title="Inspect High-Res Lightbox"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom HUD: Live Caption & Telemetry specs */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex flex-col gap-2">
                    <div className="p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs text-white">
                      <span className="truncate font-medium text-xs text-white pr-2">
                        {activeImageCaption}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/40 flex-shrink-0">
                        {activeMediaLens === "robot"
                          ? "MECHANISM / CAD"
                          : "FIELD ARENA"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Specs Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  {stage.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 text-center"
                    >
                      <span className="text-[10px] font-mono text-white/50 uppercase truncate">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-white truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-3xl overflow-hidden border border-white/20 max-h-[80vh] w-full bg-black flex items-center justify-center">
                <img
                  src={previewImage.src}
                  alt={previewImage.caption}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between w-full text-white text-xs sm:text-sm px-2">
                <p className="font-medium text-white/90">
                  {previewImage.caption}
                </p>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RoboticsSection;
