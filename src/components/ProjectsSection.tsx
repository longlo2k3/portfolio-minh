import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { ProjectItem } from "../data/projectsData";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  onSelectProject,
}) => {
  // Stacking scale: cards underneath scale down gracefully as new cards arrive
  const isLastCard = index === totalCards - 1;
  const startProgress = totalCards > 1 ? index / (totalCards - 1) : 0;
  const targetScale = 1 - (totalCards - 1 - index) * 0.035;

  // Scale down only when subsequent cards stack on top
  const cardScale = useTransform(
    progress,
    [startProgress, 1],
    [1, targetScale],
    { clamp: true }
  );

  // Subtle dark overlay to give realistic depth as cards sink into the background
  const overlayOpacity = useTransform(
    progress,
    [startProgress, 1],
    [0, (totalCards - 1 - index) * 0.16],
    { clamp: true }
  );

  // Fallback image handlers
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const fallbacks = [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ];
    e.currentTarget.src = fallbacks[index % fallbacks.length];
  };

  return (
    <div
      className={`flex items-start justify-center sticky ${
        isLastCard
          ? "min-h-[50vh] pb-8 sm:pb-12"
          : "h-[65vh] sm:h-[72vh] md:h-[78vh]"
      }`}
      style={{
        top: `calc(clamp(65px, 9vh, 85px) + ${index * 20}px)`,
      }}
    >
      <motion.div
        style={{
          scale: cardScale,
          transformOrigin: "top center",
        }}
        className="w-full max-w-6xl rounded-3xl sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-4 sm:p-6 md:p-7 flex flex-col justify-between gap-3.5 sm:gap-5 md:gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden will-change-transform"
      >
        {/* Depth Overlay for cards underneath */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/60 pointer-events-none z-20 transition-opacity"
        />

        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-[#D7E2EA]/20 pb-3 sm:pb-4 relative z-10">
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tighter"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.8rem)" }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-medium uppercase text-white tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton
              label="Live Project"
              onClick={() => onSelectProject(project)}
            />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-5 items-stretch relative z-10">
          {/* Left column (40% width on md) - 2 images (side-by-side on mobile, stacked on desktop) */}
          <div className="md:col-span-4 grid grid-cols-2 md:flex md:flex-col gap-2.5 sm:gap-3 md:gap-4 justify-between">
            <div
              className="w-full overflow-hidden rounded-2xl sm:rounded-[26px] md:rounded-[30px] bg-[#14161a] border border-white/5 cursor-pointer group h-[100px] sm:h-[125px] md:h-[135px] lg:h-[145px]"
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} preview 1`}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className="w-full overflow-hidden rounded-2xl sm:rounded-[26px] md:rounded-[30px] bg-[#14161a] border border-white/5 cursor-pointer group h-[100px] sm:h-[150px] md:h-[170px] lg:h-[185px]"
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} preview 2`}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right column (60% width on md) - 1 tall hero image */}
          <div
            className="md:col-span-6 w-full h-[190px] sm:h-[260px] md:h-full min-h-[190px] md:min-h-[310px] lg:min-h-[335px] overflow-hidden rounded-2xl sm:rounded-[26px] md:rounded-[30px] bg-[#14161a] border border-white/5 cursor-pointer group relative"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.title} main showcase`}
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle overlay badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-black/65 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-xs sm:text-sm text-[#D7E2EA] font-light line-clamp-2">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progression using spring physics to eliminate discrete wheel notch steps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.15,
    restDelta: 0.001,
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 pt-20 pb-28 sm:pb-36 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" */}
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking project cards container with tracked progress */}
        <div ref={containerRef} className="relative flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={smoothProgress}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
