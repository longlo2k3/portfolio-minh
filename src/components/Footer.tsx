import React from "react";
import { ArrowUp, Heart, Terminal, Compass, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
  onOpenJourney: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenJourney,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 text-[#D7E2EA] select-none relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <span className="font-black text-2xl uppercase tracking-wider text-white">
            MINH
          </span>
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 max-w-sm">
            3D Creator &bull; Robotics Designer &bull; Hardware Engineer
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-[#D7E2EA]/40">
            <span>
              &copy; {new Date().getFullYear()} Minh. All rights reserved.
            </span>
          </div>
        </div>

        {/* Center navigation */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm uppercase font-medium tracking-wider">
          <button
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            About
          </button>
          <button
            onClick={() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            Services
          </button>
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            Projects
          </button>
          <button
            onClick={onOpenJourney}
            className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer bg-transparent border-none flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Story & Awards</span>
          </button>
          <button
            onClick={onOpenContact}
            className="text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            Contact
          </button>
        </div>

        {/* Right back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            type="button"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#D7E2EA] hover:border-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
