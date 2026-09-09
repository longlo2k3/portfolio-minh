import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import { Wrench, Sparkles, Bot, Plane, Award } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

const HERO_MODES = [
  {
    id: "lab",
    label: "Lab & Robotics",
    image: "/img/Gart/IMG_6980.JPG",
    objectPosition: "75% 20%",
    caption: "Minh • Head of Mechanics & CAD @ GART",
    badge: "🏆 FTC World Finalist & National Champion",
  },
  {
    id: "cockpit",
    label: "Cockpit Workshop",
    image: "/img/bu\u1ed3ng l\u00e1i/1K1MLIA18_5836GL.jpg",
    objectPosition: "68% 30%",
    caption: "Minh • Building 1:1 Scale HomeA320 Cockpit",
    badge: "✈️ DIY Avionics & CNC Fabrication",
  },
  {
    id: "avatar",
    label: "3D Creator",
    image:
      "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png",
    objectPosition: "center",
    caption: "Minh • 3D Creator & Hardware Maker",
    badge: "🚀 Turning Ideas Into Reality",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const activeMode = HERO_MODES[activeModeIndex];

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Top Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex flex-col z-20"
      >
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <button
            onClick={() => onNavigate("about")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none"
          >
            Services
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none"
          >
            Projects
          </button>
          <button
            onClick={onOpenContact}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none"
          >
            Contact
          </button>
        </nav>

        {/* Credentials Ticker / Status Bar */}
        <div className="w-full flex items-center justify-center pt-3 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs text-[#D7E2EA]/70 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">
              FTC World Finalist in Texas
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden md:inline">Conrad Finalist @ NASA JSC</span>
            <span className="hidden md:inline">&bull;</span>
            <span>Hardware & 3D Creator</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center text-center mt-4 sm:mt-2 md:-mt-6 z-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m Minh
        </motion.h1>
      </div>

      {/* Hero Portrait with Magnet component */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex flex-col items-center relative"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center cursor-pointer relative group"
          >
            {activeMode.id === "avatar" ? (
              <img
                src={activeMode.image}
                alt="Minh - 3D Creator"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
                loading="eager"
              />
            ) : (
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[340px] sm:h-[420px] md:h-[480px] rounded-[36px] sm:rounded-[48px] overflow-hidden border-2 border-[#D7E2EA]/40 bg-gradient-to-b from-white/10 to-black shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                <img
                  src={activeMode.image}
                  alt={activeMode.caption}
                  style={{ objectPosition: activeMode.objectPosition }}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to avatar if local image fails
                    e.currentTarget.src =
                      "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";
                  }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/30 pointer-events-none" />

                {/* Floating caption badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex flex-col gap-1 pointer-events-none">
                  <span className="text-[10px] uppercase font-semibold text-purple-400 tracking-wider">
                    {activeMode.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate">
                    {activeMode.caption}
                  </span>
                </div>
              </div>
            )}
          </Magnet>

          {/* Quick Mode Switcher Pills */}
          <div className="mt-3 flex items-center gap-1.5 p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-20">
            {HERO_MODES.map((mode, idx) => (
              <button
                key={mode.id}
                onClick={() => setActiveModeIndex(idx)}
                type="button"
                className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeModeIndex === idx
                    ? "bg-purple-600 text-white font-semibold shadow"
                    : "text-[#D7E2EA]/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left text: Real narrative from content.txt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
          style={{ fontSize: "clamp(0.75rem, 1.3vw, 1.35rem)" }}
        >
          a 3d creator & hardware engineer turning bold ideas into reality —
          from hanoi markets to ftc worlds & nasa
        </motion.p>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
