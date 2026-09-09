import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags?: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: '3D CAD & Mechanical Prototyping',
    description: 'Precision mechanical assemblies, parametric CAD modeling (SolidWorks, Fusion 360), kinematic simulations, and rapid fabrication using high-speed 3D printing, CNC machining, and laser cutting.',
    tags: ['SolidWorks', '3D Printing', 'CNC Milling', 'Mechanism Design'],
  },
  {
    number: '02',
    name: 'Robotics & Autonomous Hardware',
    description: 'End-to-end design of competitive and field-deployed robots: high-velocity intake mechanisms, linear slides, multi-axis arms, and marine AUV waterproofing and buoyancy balancing.',
    tags: ['FIRST Tech Challenge', 'Autonomous Drones', 'Hydrodynamics', 'PID Control'],
  },
  {
    number: '03',
    name: '3D Reconstruction & Gaussian Splatting',
    description: 'State-of-the-art 3D digital preservation and spatial reconstruction using Gaussian Splatting algorithms, researched and developed during the Samsung Science & Technology fellowship.',
    tags: ['Gaussian Splatting', '3D Scanning', 'Digital Twins', 'Artifact Preservation'],
  },
  {
    number: '04',
    name: 'IoT Hardware & Dynamic Simulation',
    description: 'Custom electronic sensor nodes and telemetry stations (EnviroTrack air quality networks), dynamic power grid modeling (ETAP, PSS/E), and mathematical NDO-MPC control formulation.',
    tags: ['Environmental IoT', 'ETAP & PSS/E', 'Control Theory', 'MATLAB/Simulink'],
  },
  {
    number: '05',
    name: 'STEM Education & Makerspace Design',
    description: 'Turnkey STEM makerspace lab installation, experimental curriculum development (rocketry, robotics, physics), and specialized hands-on workshops for schools and underserved communities.',
    tags: ['Stembridge', 'Makerspace Labs', 'VEX Robotics', 'Curriculum Design'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: "Services" in #0C0C0C */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-700 mb-2 block">
              Core Engineering & Creation Capabilities
            </span>
            <h2
              className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Services
            </h2>
          </div>
        </FadeIn>

        {/* 5 service items list */}
        <div className="flex flex-col">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className={`py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${
                index === 0 ? 'border-t' : ''
              } flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 group transition-colors duration-300 hover:bg-black/[0.02] px-4 -mx-4 rounded-2xl`}
            >
              {/* Number on the left */}
              <div className="flex-shrink-0 md:w-44">
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter block"
                  style={{ fontSize: 'clamp(3rem, 9vw, 120px)' }}
                >
                  {item.number}
                </span>
              </div>

              {/* Name + description stacked vertically on the right */}
              <div className="flex flex-col gap-3 flex-grow md:max-w-2xl">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-wide group-hover:text-purple-700 transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-75 max-w-2xl text-sm sm:text-base md:text-lg"
                >
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs uppercase font-medium px-3 py-1 rounded-full bg-black/[0.05] text-[#0C0C0C]/70 border border-black/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
