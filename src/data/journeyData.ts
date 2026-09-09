export interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: 'robotics' | 'research' | 'education' | 'personal';
  description: string;
  fullStory?: string;
  highlights: string[];
  image?: string;
  imageCaption?: string;
  links?: {
    label: string;
    url: string;
    status: 'live' | 'awaiting';
    type?: 'paper' | 'profile' | 'video' | 'social';
  }[];
}

export const journeyMilestones: MilestoneItem[] = [
  {
    id: 'samsung-sst',
    year: '2024 - 2025',
    title: 'Samsung Science & Technology (SST) Fellowship',
    subtitle: 'Samsung Vietnam R&D Center (SRV)',
    category: 'research',
    description:
      'Selected as 1 of only 10 outstanding high school students nationwide for the Samsung Science and Technology membership. Mentored in advanced algorithms, semiconductor materials, and cutting-edge 3D reconstruction.',
    fullStory:
      'I was fortunate to be selected as one of 10 outstanding high school students to be awarded the Samsung Science and Technology membership by Samsung Vietnam R&D Center. Here, I received rigorous mentorship through the Science and Technology Lab, Samsung Innovation Campus coursework, capstone projects, and specialized Korean-language training. At Samsung R&D Vietnam, I strengthened my foundation in Java and DSA, earning an Advanced Level in Samsung’s S/W Global Certificate Test. Through Samsung Innovation Campus, I explored the fabrication processes of semiconductor materials. For my capstone project, I collaborated with fellow members to engineer an innovative 3D digital reconstruction tool for preserving cultural heritage artifacts using Gaussian Splatting.',
    highlights: [
      'Top 10 High School Fellows selected nationwide for Samsung SST Membership',
      'Advanced Level in Samsung S/W Global Certificate Test (Java & Algorithms)',
      'Completed semiconductor material fabrication coursework at Samsung Innovation Campus',
      'Engineered a 3D cultural artifact reconstruction pipeline using Gaussian Splatting',
      'Trained in technical Korean language for multinational R&D collaboration',
    ],
    image: '/img/Ảnh thực tập/Tri Nam/1JSJ401LT_5836GL.JPG',
    imageCaption: 'Samsung R&D Vietnam High School Fellow Presentation & Algorithms Lab',
  },
  {
    id: 'ins-internship',
    year: 'Summer 2024',
    title: 'Power Grid Dynamics Engineering Intern',
    subtitle: 'INS Engineering Solutions',
    category: 'research',
    description:
      'Three-month intensive engineering internship analyzing dynamic power grid phenomena, lightning strikes, and outages for national transmission operators.',
    fullStory:
      'Engaging in electrical engineering and actively participating in the field is a way for me to pursue my passion, extending far beyond the realm of theoretical classroom work. During my three-month summer internship at INS Engineering—which provides analytics, stability studies, and feedback on power systems for grid operators—I was trained in power grid dynamics. I learned how to process customer RFIs, translate technical specifications, and develop dynamic mathematical models to analyze and simulate abnormalities under extreme events like lightning strikes, sudden power outages, and grid disconnections. Beyond studying power system physics through online lecture notes, I wrote calculation macros, organized RFI datasets, and utilized ETAP and PSS/E to develop models. More importantly, I learned how professional firms organize multi-disciplinary teams to execute mission-critical infrastructure studies. Special shoutout to my supervisor Martin Dao for his invaluable guidance, and to my fellow Son, who always kept me energized with fresh juice every evening!',
    highlights: [
      'Processed customer RFIs and formulated dynamic transmission grid models in ETAP and PSS/E',
      'Simulated grid transient stability under lightning strikes, sudden trip outages, and phase disconnection',
      'Authored automated Excel/Python calculation macros to accelerate engineering parameter extraction',
      'Mentored under supervisor Martin Dao with daily evening juice breaks with fellow Son!',
    ],
    image: '/img/Ảnh thực tập/Tri Nam/1JSJ40211_5836GL.JPG',
    imageCaption: 'Power System Modeling & Transient Stability Analysis at INS Engineering',
  },
  {
    id: 'gtsd-research',
    year: '2024',
    title: 'NDO-MPC Control Theory Research for Power Distribution',
    subtitle: 'Assoc. Prof. Vo Thanh Ha Lab & GTSD Conference',
    category: 'research',
    description:
      'Conducted advanced research on Nonlinear Disturbance Observer-based Model Predictive Control (NDO-MPC) for hybrid battery-supercapacitor vehicle power systems.',
    fullStory:
      'As I explored the engineering fields I am determined to pursue, I became fascinated by control theory for power systems—especially because it combines pure mathematics with dynamic simulation and physical modeling. Before this research, I had only briefly encountered PID control while programming autonomous path planning for FIRST Tech Challenge competitive robots. Under the academic guidance of Associate Professor Vo Thanh Ha, I researched NDO-MPC control methods for power distribution systems combining high-density batteries and fast-discharge supercapacitors for electric vehicles. I formulated the state-space system models, developed the rigorous mathematical framework behind the disturbance observer, and validated its transient suppression through extensive MATLAB/Simulink simulations. I was honored when my research paper was accepted at the GTSD International Conference, where I delivered an oral presentation to international researchers and received valuable feedback from distinguished professors.',
    highlights: [
      'Engineered state-space mathematical framework for NDO-MPC hybrid vehicular power distribution',
      'Validated transient disturbance rejection benchmarks in MATLAB and Simulink simulations',
      'Paper peer-reviewed, accepted, and orally presented at the GTSD International Conference',
      'Integrated control theory insights from robot path-planning into macro energy systems',
    ],
    image: '/img/Hoithao_HCM/IMG_5638.JPG',
    imageCaption: 'Presenting NDO-MPC Research at the GTSD International Conference',
    links: [
      {
        label: 'GTSD Paper Abstract & Overview',
        url: 'TBD_OWNER_GTSD_PDF',
        status: 'awaiting',
        type: 'paper',
      },
    ],
  },
  {
    id: 'ftc-worlds-story',
    year: '2024',
    title: 'GART FIRST Tech Challenge & Global Top Alliance',
    subtitle: 'Houston, Texas World Championship',
    category: 'robotics',
    description:
      'Head of Mechanics & CAD leading 40 engineers through Mock GART, 16-match undefeated National Championship, to Edison Top Alliance & 2nd globally in Texas.',
    fullStory:
      'From searching scrap piles in Hanoi mechanical markets for our rookie VuaMock robot to standing on the Edison Division Championship stage in Houston, Texas, robotics has been my ultimate crucible. We refined mechanical linkages, designed high-speed compliant intake rollers, and validated stress kinematics to dominate both national and international arenas.',
    highlights: [
      'FTC World Championship Edison Division Champions & Finalist Alliance (2nd Global)',
      '16-Match Undefeated Streak at FTC Vietnam National Championship & Design Award',
      'Official Distinction & Recognition from the Vietnam Deputy Prime Minister',
      'Mentored Team Bluebook to subsequent Mock GART championship victory',
    ],
    image: '/img/FTC quoc te/1.jpg',
    imageCaption: 'Top Alliance Celebration on the FTC World Championship Stage in Houston, Texas',
  },
  {
    id: 'stembridge-impact',
    year: '2023 - Present',
    title: 'Stembridge: 3 Pillars of Inclusive STEM Outreach',
    subtitle: 'Founder & Lead Instructor',
    category: 'education',
    description:
      'Donated complete school makerspaces, led hands-on science fairs for 300 mountainous students, and tailored sensory STEM curricula for deaf children.',
    fullStory:
      'Realizing how fortunate I was to have tools, mentors, and resources to build things, I founded Stembridge to bring that same joy of discovery to underserved children. Our mission operates across three core pillars: (1) Experiential STEM Fairs, (2) Donating permanent Makerspace labs & experiment kits to remote schools like Quan Son Boarding School (serving 300 mountainous students), and (3) Specialized tactile workshops for children with disabilities at Xa Dan School for Deaf Students. Giving someone access to STEM isn’t just about teaching formulas—it is about giving a child the unforgettable moment of realizing they can invent and build something with their own hands.',
    highlights: [
      'Pillar 1: Organized hands-on experiential STEM Fairs with interactive physics challenges',
      'Pillar 2: Built & donated a permanent STEM Makerspace Lab for 300 boarding students at Quan Son',
      'Pillar 3: Adapted visual and sensory robotics experiments for Xa Dan School for Deaf Students',
      'Trained 34 specialized instructors and hosted annual GART youth camps',
    ],
    image: '/img/Stembridge/Trường Xã Đàn/IMG_7172.JPG',
    imageCaption: 'Specialized Tactile & Interactive STEM Workshop at Xa Dan School for Deaf Students',
    links: [
      {
        label: 'Stembridge Fanpage',
        url: 'TBD_OWNER_STEMBRIDGE_FB',
        status: 'awaiting',
        type: 'social',
      },
      {
        label: 'Education Press Coverage',
        url: 'TBD_OWNER_STEMBRIDGE_PRESS',
        status: 'awaiting',
        type: 'profile',
      },
    ],
  },
  {
    id: 'music-aviation',
    year: 'Passions',
    title: 'Vintage American Rock Guitar & HomeA320 Cockpit',
    subtitle: 'The Creative & Maker Soul',
    category: 'personal',
    description:
      'Playing 60s-90s vintage rock on an electric guitar near Van Mieu Coffee, planespotting, and building a 1:1 DIY Airbus A320 cockpit rental business.',
    fullStory:
      'When I am not designing robots or simulating power grids, you will find me deep inside my two personal sanctuaries: aviation and vintage rock. Inspired by childhood visits to the VPAF Museum with my grandfather, I collect 1:400 scale aircraft models and built a full 1:1 scale Airbus A320 cockpit simulator out of wood plates, 3D printed avionics, and custom electronics multiplexers. To self-fund my hardware projects, I founded HomeA320, renting simulator hours to aspiring pilots and sim enthusiasts. On the music side, I am a devoted fan of American rock from the 60s, 70s, 80s, and early 90s—especially anti-war anthems and songs celebrating counterculture and individualism. On my 14th birthday, as a high school entrance gift, my parents gave me an old electric guitar. I practiced tirelessly and have occasionally performed near Van Mieu Coffee on relaxed summer weekends. My anthem tracks are "More Than a Feeling" and "It\'s My Life". Fun fact: Tom Scholz, the founder and songwriter of the band Boston behind "More Than a Feeling", was a fellow MIT electrical engineer who engineered his own guitars, power soaks, and iconic amplifiers!',
    highlights: [
      'Founded HomeA320: Commercial DIY Airbus A320 cockpit simulator rental service',
      'Childhood aerospace passion nurtured at VPAF Museum; avid 1:400 plane collector & spotter',
      'Vintage rock guitarist (14th birthday old electric guitar; Van Mieu Coffee summer sessions)',
      'Inspired by Tom Scholz: MIT electrical engineer, inventor, and rocker behind the band Boston',
    ],
    image: '/img/buồng lái/1K1MLI9TI_5836GL.jpg',
    imageCaption: 'HomeA320 Custom 1:1 Cockpit Flight Simulator Deck & Avionics Panels',
    links: [
      {
        label: 'HomeA320 Facebook Community',
        url: 'TBD_OWNER_HOMEA320_FB',
        status: 'awaiting',
        type: 'social',
      },
    ],
  },
];
