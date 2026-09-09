import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import RoboticsSection from './components/RoboticsSection';
import ProjectsSection from './components/ProjectsSection';
import VolunteerSection from './components/VolunteerSection';
import AchievementsSection from './components/AchievementsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import JourneyModal from './components/JourneyModal';
import ContactModal from './components/ContactModal';
import { projectsData, ProjectItem } from './data/projectsData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause Lenis when modal is open to let modal scroll naturally
  useEffect(() => {
    if (selectedProject || isJourneyOpen || isContactOpen) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [selectedProject, isJourneyOpen, isContactOpen]);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -20, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-kanit overflow-x-clip select-none relative">
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenJourney={() => setIsJourneyOpen(true)}
      />

      {/* 4. ROBOTICS EVOLUTION SECTION (Mock GART, FTC Thanh Hoa, National 16-0, Worlds Texas, Expo/Camp) */}
      <RoboticsSection />

      {/* 5. PROJECTS SECTION (Ideon AUV, EnviroTrack, Stembridge 3 Pillars, HomeA320) */}
      <ProjectsSection
        projects={projectsData}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 6. COMMUNITY & VOLUNTEERING SECTION (Cosmosics Water Rocketry & Red River VEX) */}
      <VolunteerSection />

      {/* 7. ACHIEVEMENTS & DISTINCTIONS WALL (Honor Wall + Lightbox Modal) */}
      <AchievementsSection />

      {/* 8. SERVICES SECTION */}
      <ServicesSection />

      {/* FOOTER */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenJourney={() => setIsJourneyOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <JourneyModal
        isOpen={isJourneyOpen}
        onClose={() => setIsJourneyOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
