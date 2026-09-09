export interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: "robotics" | "research" | "education" | "personal";
  description: string;
  highlights: string[];
  image?: string;
}

export const journeyMilestones: MilestoneItem[] = [
  {
    id: "samsung-sst",
    year: "2024 - 2025",
    title: "Samsung Science & Technology (SST) Fellowship",
    subtitle: "Samsung Vietnam R&D Center",
    category: "research",
    description:
      "Selected as one of 10 outstanding high school students nationwide for the prestigious Samsung SST membership. Mentored in Samsung Innovation Campus coursework, advanced algorithms, and semiconductor fabrication.",
    highlights: [
      "Advanced Level in Samsung S/W Global Certificate Test (Java & DSA)",
      "Explored semiconductor material fabrication processes at Samsung Innovation Campus",
      "Capstone Project: Developed an innovative 3D reconstruction tool for cultural artifact preservation using Gaussian Splatting",
    ],
    image: "/img/ảnh thực tập/Tri Nam/1JSJ401LT_5836GL.JPG",
  },
  {
    id: "ins-internship",
    year: "Summer 2024",
    title: "Power Grid Dynamics Engineering Intern",
    subtitle: "INS Engineering Solutions",
    category: "research",
    description:
      "Three-month intensive engineering internship analyzing power grid stability and dynamic grid phenomena for national grid operators.",
    highlights: [
      "Processed customer RFIs and developed dynamic mathematical models of power transmission systems",
      "Simulated grid anomalies under lightning strikes, sudden power outages, and phase disconnections using ETAP and PSS/E",
      "Created automated calculation macros to streamline engineering parameter extraction",
    ],
    image: "/img/ảnh thực tập/Tri Nam/1JSJ40211_5836GL.JPG",
  },
  {
    id: "gtsd-research",
    year: "2024",
    title: "NDO-MPC Control Theory Research for Power Distribution",
    subtitle: "Assoc. Prof. Vo Thanh Ha Lab & GTSD Conference",
    category: "research",
    description:
      "Conducted academic research on Nonlinear Disturbance Observer-based Model Predictive Control (NDO-MPC) methods for hybrid battery-supercapacitor vehicular power distribution systems.",
    highlights: [
      "Engineered rigorous mathematical modeling and state-space control formulations",
      "Evaluated performance benchmarks using MATLAB and Simulink dynamic simulations",
      "Paper accepted and orally presented at the prestigious GTSD International Conference",
    ],
    image: "/img/Hoithao_HCM/IMG_5638.JPG",
  },
  {
    id: "ftc-worlds-story",
    year: "2024",
    title: "FTC World Championship Finalist & National Champions",
    subtitle: "FIRST Tech Challenge & GART",
    category: "robotics",
    description:
      "Head of Mechanics & CAD leading 40 engineers to an undefeated 16-match national championship streak and second place worldwide in Texas.",
    highlights: [
      "Finalist Alliance & Edison Division Champions at Texas World Championship",
      "Earned the National Design Award and Official Recognition from Vietnam Deputy Prime Minister",
      "Mentored internal rookie teams to win subsequent Mock GART championships",
    ],
    image: "/img/FTC quoc te/1.jpg",
  },
  {
    id: "stembridge-impact",
    year: "2023 - Present",
    title: "Stembridge & Makerspace Outreach",
    subtitle: "Founder & Community Educator",
    category: "education",
    description:
      "Founded an educational initiative bringing experiential science and hands-on makerspaces to underserved schools.",
    highlights: [
      "Donated complete STEM laboratory and experiment kits to Quan Son Boarding School (Lang Son)",
      "Organized tailored STEM fairs for 300+ students and specialized workshops at Xa Dan School for Deaf Students",
      "Trained 34 STEM mentors and organized annual GART Summer Camps",
    ],
    image: "/img/Stembridge/20260203_154406_1.jpg",
  },
  {
    id: "music-aviation",
    year: "Passions",
    title: "Planespotting, Aviation & Vintage Rock Guitar",
    subtitle: "Creative Roots & Maker Mindset",
    category: "personal",
    description:
      "When not building robots, Minh crafts flight simulators and plays vintage American rock on an electric guitar near Hanoi’s Van Mieu Temple.",
    highlights: [
      "Founded HomeA320: Commercial DIY A320 cockpit simulator rental business",
      "Avid collector of 1:400 scale aircraft and aviation history scholar",
      "Plays 60s-90s counterculture rock (Boston, Bon Jovi); inspired by Tom Scholz, the MIT electrical engineer behind Boston",
    ],
    image: "/img/buồng lái/1K1MLI9TI_5836GL.jpg",
  },
];
