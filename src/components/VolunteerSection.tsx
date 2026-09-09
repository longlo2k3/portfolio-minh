import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { volunteerData, VolunteerItem } from "../data/volunteerData";
import FadeIn from "./FadeIn";
import {
  HeartHandshake,
  Rocket,
  Bot,
  Play,
  MapPin,
  Sparkles,
  Maximize2,
  CheckCircle2,
  X,
  ArrowUpRight,
} from "lucide-react";

export const VolunteerSection: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "video" | "image";
    src: string;
    caption: string;
  } | null>(null);

  return (
    <section
      id="volunteer"
      className="relative z-20 bg-white text-neutral-900 px-4 sm:px-6 md:px-10 py-20 sm:py-28 overflow-hidden rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] border-t border-neutral-200 shadow-[0_-20px_60px_rgba(0,0,0,0.06)] select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Sleek Minimalist Header */}
        <FadeIn delay={0} y={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 flex items-center gap-1.5 mb-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />{" "}
                Community Outreach
              </span>
              <h2
                className="font-black uppercase text-neutral-900 tracking-tight leading-none"
                style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
              >
                Volunteer Action
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-normal text-neutral-600 max-w-md">
              Democratizing STEM through hands-on mountain physics workshops and
              robotics tournament operations.
            </p>
          </div>
        </FadeIn>

        {/* 2 Visual-First Cinematic Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Cosmosics Rocketry */}
          <FadeIn delay={0.1} y={25}>
            <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-white to-[#F6FAF8] border border-neutral-200/90 hover:border-emerald-500/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col justify-between h-full">
              {/* Top Hero Media Viewport */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src="/img/Stembridge/20260203_154406_1.jpg"
                  alt="Cosmosics Rocketry"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-mono font-semibold">
                    <Rocket className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Cosmosics Project
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md font-medium">
                    Lang Son
                  </span>
                </div>

                {/* Floating Video Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() =>
                      setSelectedMedia({
                        type: "video",
                        src: "/img/Stembridge/1JGQQGLDQ_4E16M3.MP4",
                        caption: "Cosmosics Water Rocket Launch at Lang Son",
                      })
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Watch Rocket Launch</span>
                  </button>
                </div>
              </div>

              {/* Card Body - Punchy & Minimalist */}
              <div className="p-6 sm:p-7 flex flex-col justify-between gap-5 flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 mb-1.5">
                    <span>Lead Workshop Facilitator</span>
                    <span>•</span>
                    <span>2023 - Present</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-neutral-900 tracking-wide">
                    Mountain Water Rocketry & Holography
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    Designed pressurized water rockets and 3D optical holography
                    demonstrations for remote boarding students in Lang Son.
                  </p>
                </div>

                {/* Visual Chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "🚀 2-Stage Water Rockets",
                    "✨ Laser Holography",
                    "⛰️ Mountain Boarding Outreach",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200/80 text-neutral-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Impact Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200/70">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 font-semibold">
                      Direct Engagement
                    </span>
                    <span className="text-lg font-black text-emerald-600">
                      200+ Students
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Lang Son
                    Schools
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Red River VEX */}
          <FadeIn delay={0.2} y={25}>
            <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-white to-[#F4F9F9] border border-neutral-200/90 hover:border-teal-500/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] flex flex-col justify-between h-full">
              {/* Top Hero Media Viewport */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src="/img/FTC Thanh Hoa/IMG_6820.JPG"
                  alt="Red River VEX V5"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-mono font-semibold">
                    <Bot className="w-3.5 h-3.5 text-teal-400" /> VEX Robotics
                    Competition
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md font-medium">
                    National Arena
                  </span>
                </div>

                {/* Photo Zoom trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() =>
                      setSelectedMedia({
                        type: "image",
                        src: "/img/FTC Thanh Hoa/IMG_6820.JPG",
                        caption:
                          "Red River Delta VEX V5 Tournament Field Operations",
                      })
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(20,184,166,0.5)] transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Inspect Arena Photo</span>
                  </button>
                </div>
              </div>

              {/* Card Body - Punchy & Minimalist */}
              <div className="p-6 sm:p-7 flex flex-col justify-between gap-5 flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-teal-700 mb-1.5">
                    <span>Field Resetter & Tech Volunteer</span>
                    <span>•</span>
                    <span>2024</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-neutral-900 tracking-wide">
                    Red River Delta VEX V5 Championship
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    Maintained match pace, calibrated field sensor perimeters,
                    and assisted rookie teams with rapid motor diagnostics.
                  </p>
                </div>

                {/* Visual Chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "⚙️ Field Tile Calibration",
                    "⚡ Rapid Diagnostics Support",
                    "🏆 40+ Matches Supported",
                  ].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200/80 text-neutral-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Impact Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200/70">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 font-semibold">
                      Alliance Support
                    </span>
                    <span className="text-lg font-black text-teal-600">
                      30+ Teams
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1 font-medium">
                    <Bot className="w-3.5 h-3.5 text-teal-600" /> V5 Competition
                    Arena
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Lightbox Modal (Video / Image) */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-3xl overflow-hidden border border-white/20 max-h-[80vh] w-full bg-black flex items-center justify-center shadow-2xl">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.caption}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>
              <div className="flex items-center justify-between w-full text-white text-xs sm:text-sm px-2">
                <p className="font-medium text-white/90">
                  {selectedMedia.caption}
                </p>
                <button
                  onClick={() => setSelectedMedia(null)}
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

export default VolunteerSection;
