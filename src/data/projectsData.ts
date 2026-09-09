export interface ProjectLink {
  label: string;
  url: string;
  status: 'live' | 'awaiting';
  type?: 'website' | 'cad' | 'profile' | 'document' | 'social';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  tagline: string;
  description: string;
  fullStory: string;
  awards?: string[];
  specs?: { label: string; value: string }[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link?: string;
  externalLinkText?: string;
  externalLinks?: ProjectLink[];
  pillars?: {
    title: string;
    description: string;
    image: string;
    stats: string;
  }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "conrad-ideon",
    number: "01",
    title: "Ideon AUV Microplastic Explorer",
    category: "Marine Robotics & CAD",
    role: "Lead Electrical & CAD Engineer",
    tagline:
      "Autonomous underwater vehicle selected as Conrad Challenge Global Finalist at NASA Johnson Space Center.",
    description:
      "Autonomous underwater drone capable of diving and high-resolution mapping of microplastic pollution across lakes and coastal depths.",
    fullStory:
      "EnviroTrack made me realize that I wanted to keep working on environmental problems, but I also wanted to challenge myself with something far more complex. That led me to the Conrad Challenge, where our team explored a critical new problem: the lack of accessible, large-scale data on microplastic pollution. Traditional marine research relies on manual sample collection taken one by one and costly laboratory tests, making it difficult to cover expansive surface areas or diverse water depths. We engineered an autonomous underwater vehicle (AUV) capable of autonomous descent, multi-depth sampling, and spatial microplastic mapping. As Lead Electrical & CAD Designer, this presented radically different challenges from land robots: I had to solve buoyancy distribution, center of gravity (COG) stability, multi-chamber waterproofing, high-pressure dynamic diving, acoustic signal telemetry, and precision sensing all simultaneously. After 4 rigorous iterations, our working prototype was selected among only 25 finalist teams from 1,000+ international entries to pitch at the Conrad Global Innovation Challenge at NASA Johnson Space Center.",
    awards: [
      "Top 25 Global Finalist out of 1,000+ international teams",
      "Pitched at NASA Johnson Space Center (Houston, Texas)",
      "4 Rigorous Prototyping Iterations & Autonomous Hydrodynamic Architecture",
    ],
    specs: [
      { label: "Platform", value: "Autonomous Underwater Vehicle (AUV)" },
      { label: "CAD & Simulation", value: "SolidWorks, Hydrodynamics FEA" },
      { label: "Electronics", value: "Multi-chamber Waterproofing, Acoustic Telemetry" },
      { label: "Autonomy", value: "Depth-Holding PID & Spatial Density Mapping" },
    ],
    col1Image1: "/img/Conrad/IMG_6991.JPG",
    col1Image2: "/img/Conrad/IMG_6996.JPG",
    col2Image: "/img/Conrad/File_000.png",
    link: "https://ideon.skyhi.vn/about",
    externalLinkText: "Visit Ideon Website",
    externalLinks: [
      {
        label: "Ideon Project Site",
        url: "https://ideon.skyhi.vn/about",
        status: "live",
        type: "website",
      },
      {
        label: "3D CAD Model & Kinematics",
        url: "TBD_OWNER_CAD_URL",
        status: "awaiting",
        type: "cad",
      },
      {
        label: "Conrad Global Finalist Directory",
        url: "TBD_OWNER_CONRAD_URL",
        status: "awaiting",
        type: "profile",
      },
    ],
  },
  {
    id: "envirotrack",
    number: "02",
    title: "EnviroTrack IoT Air Quality Network",
    category: "Environmental IoT & CAD",
    role: "Project Lead & Hardware Designer",
    tagline:
      "Compact air quality monitoring network with 25+ live deployed hardware units across Hanoi and Nam Dinh.",
    description:
      "Real-time air pollution sensing stations with custom weather-resistant enclosures, LoRa/WiFi telemetry, and public mobile citizen app.",
    fullStory:
      "Determined to apply competitive robotics engineering to solve Hanoi’s most pressing environmental crisis—air pollution—I led a team of 3 to create EnviroTrack. We built a comprehensive system that measures air quality, displays real-time data publicly, and features a mobile application delivering predictive health alerts and localized forecasts. At WICO (World Invention Creativity Olympic), international judges and industry experts challenged us to think beyond a single lab system and engineer a solution deployable at mass scale. We redesigned the enclosure into a modular, compact, cost-efficient, and weather-resistant unit. We fabricated and deployed 25+ refined devices across open-air markets and train stations in Hanoi as well as rural communes in Nam Dinh, empowering citizens with transparent, real-time awareness of the air they breathe.",
    awards: [
      "WICO (World Invention Creativity Olympic) Gold Award",
      "Global Youth Science (GYS) Invention Recognition",
      "25+ Deployed Stations in Hanoi Markets, Train Stations & Nam Dinh",
    ],
    specs: [
      { label: "Telemetry Sensors", value: "PM2.5, PM10, CO2, Humidity & Temp" },
      { label: "Enclosure", value: "Weather-sealed 3D Printed UV-Resistant Shell" },
      { label: "Mobile App", value: "Real-time Citizen Dashboard & Pollution Alerts" },
      { label: "Deployment Scale", value: "25+ Field Units across Hanoi & Nam Dinh" },
    ],
    col1Image1: "/img/Wico/GYS/IMG_6940.JPG",
    col1Image2: "/img/Wico/GYS/IMG_6950.JPG",
    col2Image: "/img/Wico/Wico/IMG_6964.JPG",
    link: "TBD_OWNER_ENVIROTRACK_DEMO",
    externalLinkText: "Live Network Telemetry",
    externalLinks: [
      {
        label: "Interactive Telemetry Dashboard",
        url: "TBD_OWNER_ENVIROTRACK_DEMO",
        status: "awaiting",
        type: "website",
      },
      {
        label: "Official WICO Research Poster",
        url: "TBD_OWNER_ENVIROTRACK_POSTER",
        status: "awaiting",
        type: "document",
      },
    ],
  },
  {
    id: "stembridge",
    number: "03",
    title: "Stembridge & Inclusive Education",
    category: "Social Impact & Makerspace",
    role: "Founder & Lead Instructor",
    tagline:
      "Donated STEM makerspaces, experiential science fairs, and specialized curricula for 300+ students in mountainous and deaf schools.",
    description:
      "Empowering children with the joy of building through physical makerspaces, water rocket workshops, and accessible STEM education.",
    fullStory:
      "I realized how fortunate I was to have access to mentors, tools, and environments that allowed me to explore STEM beyond school classrooms. I could invent simply because I was curious, build prototypes, make mistakes, and try again. But the more I explored, the more I saw that countless students never have the chance to discover STEM in the first place. That conviction inspired me to found Stembridge. Our mission is structured across three core pillars: (1) Experiential STEM Fairs, (2) Permanent Makerspace Lab & Experiment Donations, and (3) Hands-on Specialized Workshops. At Quan Son Boarding School, remote mountainous terrain makes extracurricular opportunities exceptionally rare. We built and donated a complete STEM makerspace lab with experiment equipment and organized a STEM fair for 300 students. At Xa Dan School for Deaf Students, we adapted our activities to support children with diverse disabilities, including deafness, Down syndrome, and developmental delays, guiding them in creating mechanical and physical projects with their own hands.",
    awards: [
      "Built & Donated Permanent STEM Makerspace Lab at Quan Son School",
      "Organized Hands-on Experiential STEM Fairs for 300+ Mountain Students",
      "Tailored Visual & Sensory Robotics Workshops for Xa Dan School for Deaf Students",
      "Trained 34 Volunteer Mentors Across Multi-School Outreach",
    ],
    specs: [
      { label: "Outreach Reach", value: "300+ Mountain Students & Special Needs Learners" },
      { label: "Facilities Built", value: "Permanent Donated School Makerspace Lab" },
      { label: "Pillars", value: "STEM Fairs, Lab Donations, Adapted Classes" },
      { label: "Community Impact", value: "Featured on Education & Social News" },
    ],
    col1Image1: "/img/Stembridge/20260203_154406_1.jpg",
    col1Image2: "/img/Stembridge/Trường Xã Đàn/IMG_7172.JPG",
    col2Image: "/img/Stembridge/Trường Xã Đàn/IMG_7174.JPG",
    link: "TBD_OWNER_STEMBRIDGE_FB",
    externalLinkText: "Community Impact Story",
    externalLinks: [
      {
        label: "Stembridge Official Fanpage",
        url: "TBD_OWNER_STEMBRIDGE_FB",
        status: "awaiting",
        type: "social",
      },
      {
        label: "Education News Press Article",
        url: "TBD_OWNER_STEMBRIDGE_PRESS",
        status: "awaiting",
        type: "profile",
      },
    ],
    pillars: [
      {
        title: "Pillar 1: Experiential STEM Fairs",
        description: "Interactive science fairs bringing hands-on physics demonstrations, water rocket launches, and mechanical puzzles directly to school grounds.",
        image: "/img/Stembridge/20260203_154406_1.jpg",
        stats: "300+ Students Participated",
      },
      {
        title: "Pillar 2: Makerspace Lab & Kit Donation",
        description: "Building and donating a fully-equipped permanent STEM lab with tools, microcontrollers, and curriculum kits at Quan Son Boarding School.",
        image: "/img/Stembridge/File_000(1).png",
        stats: "Permanent School Lab Donated",
      },
      {
        title: "Pillar 3: Adapted Workshops for Deaf Children",
        description: "Customized visual, non-verbal, and tactile mechanics curricula designed for students with hearing impairments and Down syndrome at Xa Dan School.",
        image: "/img/Stembridge/Trường Xã Đàn/IMG_7172.JPG",
        stats: "Sensory & Visual Hands-on Classes",
      },
    ],
  },
  {
    id: "home-a320",
    number: "04",
    title: "HomeA320 DIY Flight Simulator",
    category: "Avionics & Fabrication",
    role: "Founder & Hardware Architect",
    tagline:
      "Life-size Airbus A320 cockpit simulator built with wood plates, 3D printing, avionics, and commercial rental service.",
    description:
      "Accurate 1:1 replica of an Airbus A320 cockpit with functional FCU, thrust levers, overhead panels, and synchronized flight dynamics.",
    fullStory:
      "I have always been deeply drawn to planes and aviation history. My grandfather took me to the VPAF Museum when I was small, where I would watch and climb into decommissioned fighter jets. I collect 1:400 scale model aircraft and read extensively about Vietnamese aviation history. That passion evolved into building a budget, functional 1:1 home cockpit of an Airbus A320 using laser-cut wood plates, dozens of custom 3D-printed avionics knobs and switch brackets, Arduino multiplexers, and complex wiring harnesses. The simulator interfaces with MSFS and X-Plane 12 flight dynamics. To self-fund ongoing competitive robotics and hardware projects, I founded HomeA320, offering hourly simulator rentals to aspiring pilots and flight enthusiasts. In my free time, I also go planespotting around Hanoi with friends.",
    awards: [
      "1:1 Scale Fully Functional Airbus A320 Cockpit",
      "Self-funded Commercial Flight Simulator Hourly Rental Enterprise",
      "Custom Avionics Hardware, Multi-Display & Flight Dynamics Interfacing",
    ],
    specs: [
      { label: "Structure", value: "Laser-cut Wood Frame & CNC Switch Panels" },
      { label: "Avionics", value: "FCU, EFIS, Dual Side-Sticks, Throttle Quadrant" },
      { label: "Electronics", value: "Arduino Mega Multiplexers & Stepper Gauges" },
      { label: "Software", value: "MobiFlight, MSFS / X-Plane 12 Flight Models" },
    ],
    col1Image1: "/img/buồng lái/1K1MLI9RV_5836GL.jpg",
    col1Image2: "/img/buồng lái/1K1MLI9SN_5836GL.jpg",
    col2Image: "/img/buồng lái/1K1MLI9TI_5836GL.jpg",
    link: "TBD_OWNER_HOMEA320_FB",
    externalLinkText: "HomeA320 Community",
    externalLinks: [
      {
        label: "HomeA320 Facebook Community",
        url: "TBD_OWNER_HOMEA320_FB",
        status: "awaiting",
        type: "social",
      },
    ],
  },
];
