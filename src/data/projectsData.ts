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
      "Conrad Challenge pushed our team to tackle the critical lack of accessible, large-scale microplastic pollution data. Traditional marine research relies on manual surface sampling and costly laboratory tests. We engineered an autonomous underwater vehicle (AUV) capable of autonomous descent, multi-depth sampling, and spatial mapping. I led the electrical systems and complete CAD architecture, solving complex physical constraints: buoyancy distribution, center of gravity (COG) stability, multi-chamber waterproofing, deep diving propulsion, sensor integration, and acoustic data telemetry. After 4 rigorous iterations, our working prototype was selected among 25 finalists from 1,000+ international teams to pitch at NASA Johnson Space Center.",
    awards: [
      "Top 25 Global Finalist out of 1,000+ teams worldwide",
      "Presented at NASA Johnson Space Center (Houston, Texas)",
      "Innovative Marine Autonomous Sensing Architecture",
    ],
    specs: [
      { label: "Platform", value: "Autonomous Underwater Vehicle (AUV)" },
      { label: "CAD & Simulation", value: "SolidWorks, ANSYS Hydrodynamics" },
      { label: "Electronics", value: "Custom PCB, Waterproof Sensor Array" },
      { label: "Autonomy", value: "Depth-holding PID, Spatial Mapping" },
    ],
    col1Image1: "/img/Conrad/IMG_6991.JPG",
    col1Image2: "/img/Conrad/IMG_6996.JPG",
    col2Image: "/img/Conrad/File_000.png",
    link: "https://ideon.skyhi.vn",
    externalLinkText: "Visit Ideon Project",
  },
  {
    id: "ftc-gart",
    number: "02",
    title: "FIRST Tech Challenge & GART Robot",
    category: "Robotics & Rapid Prototyping",
    role: "Head of Mechanics & CAD",
    tagline:
      "Vietnam National Champion (16-match undefeated) & Finalist Alliance at Texas FTC World Championship.",
    description:
      "High-speed competitive robot engineered with custom CNC aluminum, 3D printed linkages, and simulation-validated intake systems.",
    fullStory:
      "Serving as Head of Mechanics & CAD for GART FIRST Tech Challenge team, I led 40 department members across design, manufacturing, and training. Starting from Hanoi mechanical markets sourcing parts for our initial VuaMock prototype, we refined mechanical mechanisms through iterative prototyping and physics simulations. Our team clinched the FIRST Tech Challenge Vietnam National Round with an undefeated 16-match streak, winning the prestigious Design Award. At the World Championship in Houston, Texas, we became the Top Alliance in the Edison Division and fought through to the Finalist Alliance, finishing second overall globally. Recognized by the Vietnam Deputy Prime Minister for youth engineering innovation.",
    awards: [
      "FTC World Championship Edison Division Top Alliance & Finalist Alliance (2nd Global)",
      "FTC Vietnam National Champion (16-Match Undefeated Streak)",
      "National Design Award for Engineering Excellence",
      "Vietnam Deputy Prime Minister Recognition",
    ],
    specs: [
      { label: "Role", value: "Head of Mechanics & CAD (40+ members)" },
      {
        label: "Manufacturing",
        value: "CNC Milling, High-Speed 3D Printing, Laser Cutting",
      },
      {
        label: "Mechanisms",
        value: "Linear Slides, Intake Rollers, Turret Arm",
      },
      { label: "Global Stage", value: "FTC World Championship (Texas, USA)" },
    ],
    col1Image1: "/img/FTC trong nuoc/1K1V2Q6AK_5836GL.JPG",
    col1Image2: "/img/FTC quoc te/1.jpg",
    col2Image: "/img/FTC quoc te/IMG_6301.JPG",
    link: "https://facebook.com",
    externalLinkText: "View Robot CAD",
  },
  {
    id: "envirotrack",
    number: "03",
    title: "EnviroTrack IoT Air Quality Network",
    category: "Environmental IoT & CAD",
    role: "Project Lead & Hardware Designer",
    tagline:
      "Compact air quality monitoring network with 25+ live deployed hardware units across Hanoi and Nam Dinh.",
    description:
      "Real-time air pollution sensing stations with custom weather-resistant enclosures, LoRa/WiFi telemetry, and public citizen dashboard.",
    fullStory:
      "Determined to contribute to Hanoi’s pressing air pollution challenge, I led a team of 3 to create EnviroTrack: a scalable network of real-time air quality monitors paired with predictive analytics. At WICO (World Invention Creativity Olympic), judges and industry experts challenged us to move from lab prototypes to mass field deployment. We completely re-engineered the enclosure for weatherproofing, compact assembly, and cost-efficiency. Over 25 production-grade devices were fabricated and installed at high-traffic open markets, train stations, and public squares across Hanoi and Nam Dinh, empowering citizens with transparent air health data.",
    awards: [
      "WICO (World Invention Creativity Olympic) Gold Award",
      "Global Youth Science (GYS) Invention Recognition",
      "25+ Scaled Deployments in Hanoi & Nam Dinh",
    ],
    specs: [
      { label: "Sensors", value: "PM2.5, PM10, CO2, Humidity & Temp" },
      {
        label: "Enclosure",
        value: "Weather-sealed 3D Printed UV-Resistant Shell",
      },
      { label: "Connectivity", value: "Cellular / WiFi / LoRa IoT Mesh" },
      { label: "Impact", value: "Public Real-time Air Quality Map" },
    ],
    col1Image1: "/img/Wico/GYS/IMG_6940.JPG",
    col1Image2: "/img/Wico/GYS/IMG_6950.JPG",
    col2Image: "/img/Wico/Wico/IMG_6964.JPG",
    link: "#",
    externalLinkText: "Device Telemetry",
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
      "Inspired by a childhood passion visiting the VPAF Museum with my grandfather, I set out to build a fully functional, budget-conscious Airbus A320 cockpit from scratch. Utilizing CNC wood structures, dozens of custom 3D-printed avionics knobs and switch guards, and hundreds of wired tactile switches, I created an authentic flight deck. The simulator interfaces directly with modern flight dynamics software to deliver professional-grade pilot immersion. To fund ongoing robotics and hardware projects, I founded HomeA320, offering hourly simulator rentals to aspiring pilots and flight simulation enthusiasts.",
    awards: [
      "Full Functional 1:1 Scale Cockpit Fabrication",
      "Self-funded Commercial Flight Sim Rental Enterprise",
      "Planespotting & Aerospace Community Creator",
    ],
    specs: [
      { label: "Structure", value: "Laser-cut Plywood & CNC Aluminum Frame" },
      {
        label: "Avionics",
        value: "FCU, EFIS, Dual Side-Sticks, Throttle Quadrant",
      },
      {
        label: "Electronics",
        value: "Arduino Mega multiplexers, Stepper Motors, 7-Segment Displays",
      },
      { label: "Software", value: "MobiFlight, MSFS / X-Plane 12 Integration" },
    ],
    col1Image1: "/img/bu\u1ed3ng l\u00e1i/1K1MLI9RV_5836GL.jpg",
    col1Image2: "/img/bu\u1ed3ng l\u00e1i/1K1MLI9SN_5836GL.jpg",
    col2Image: "/img/bu\u1ed3ng l\u00e1i/1K1MLI9TI_5836GL.jpg",
    link: "#",
    externalLinkText: "HomeA320 Story",
  },
  {
    id: "stembridge",
    number: "05",
    title: "Stembridge & Inclusive Education",
    category: "Social Impact & Makerspace",
    role: "Founder & Lead Instructor",
    tagline:
      "Donated STEM makerspaces, experiential science fairs, and specialized curricula for 300+ students in mountainous and deaf schools.",
    description:
      "Empowering children with the joy of building through physical makerspaces, water rocket workshops, and accessible STEM education.",
    fullStory:
      "Believing that access to STEM shouldn’t be limited by geography or physical circumstance, I founded Stembridge. At Quan Son Boarding School in the remote mountains of Lang Son, we built and donated a complete STEM lab with experiment kits and conducted a hands-on STEM fair for 300 students. At the Xa Dan School for Deaf Students, we tailored interactive visual experiments, mechanical puzzles, and sensory learning tools. Giving someone access to STEM isn’t just about formulas—it is about the moment a child realizes they are capable of inventing and building something with their own hands.",
    awards: [
      "Donated Complete STEM Makerspace Lab at Lang Son",
      "Adapted Hands-on Curriculum for Xa Dan School for Deaf Students",
      "Trained 34 STEM Mentors and Organized Annual GART Camps",
    ],
    specs: [
      {
        label: "Outreach",
        value: "300+ Mountain Students & Special Needs Learners",
      },
      { label: "Facilities", value: "Permanent Donated School Makerspace Lab" },
      {
        label: "Volunteering",
        value: "Cosmosics Water Rocketry, Red River VEX Judge",
      },
      { label: "Press", value: "Featured on Education & Community News" },
    ],
    col1Image1: "/img/Stembridge/20260203_154406_1.jpg",
    col1Image2: "/img/Stembridge/File_000(1).png",
    col2Image: "/img/Stembridge/File_000(12).png",
    link: "#",
    externalLinkText: "Community Impact",
  },
];
