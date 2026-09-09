import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ProjectItem } from '../data/projectsData';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Fallback image handlers
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback to high quality motion/figma asset if local image fails
    const fallbacks = [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ];
    e.currentTarget.src = fallbacks[index % fallbacks.length];
  };

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale: cardScale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] will-change-transform"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-white tracking-wide">
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
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 items-stretch">
          {/* Left column (40% width on md) - 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 justify-between">
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#14161a] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} preview 1`}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#14161a] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} preview 2`}
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column (60% width on md) - 1 tall hero image */}
          <div
            className="md:col-span-6 w-full h-[310px] sm:h-[390px] md:h-full min-h-[300px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#14161a] border border-white/5 cursor-pointer group relative"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.title} main showcase`}
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Subtle overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-3xl bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 pt-20 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-stacking project cards */}
        <div className="relative flex flex-col gap-12 sm:gap-20 pb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
