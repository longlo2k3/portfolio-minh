export interface RoboticsStage {
  id: string;
  stageNumber: string;
  period: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  description: string;
  details: string[];
  robotImage?: string;
  eventImage: string;
  eventImageCaption: string;
  robotImageCaption?: string;
  specs: { label: string; value: string }[];
  awards?: string[];
  pressStatus?: 'verified' | 'awaiting';
  pressNote?: string;
}

export const roboticsTimelineData: RoboticsStage[] = [
  {
    id: 'mock-gart',
    stageNumber: '01',
    period: '2023 - 2024',
    title: 'Mock GART & The VuaMock Prototype',
    subtitle: 'From Hanoi Tool Markets to Team Captain',
    tagline: 'Budget prototyping, scrap sourcing, and the spark of hardware engineering.',
    role: 'Team Captain & Rookie Fabricator',
    description:
      'Starting as a member, I was drawn into robotics by the revelation that I could turn raw physical concepts into reality. In my first internal Mock GART competition, I stepped up as team captain. Under a limited budget, we scavenged Hanoi mechanical markets to compare prices, learned CNC ordering, 3D printing settings, and hand-cut wood plates to build our first VuaMock robot. Although finishing second, this foundational experience ignited my passion for engineering.',
    details: [
      'Engineered first custom VuaMock prototype on a shoestring budget using market scrap and laser-cut wood.',
      'Coordinated cross-functional divisions across CAD, assembly, and autonomous programming.',
      'Later mentored Team Bluebook in 2026 to clinch the Mock GART championship title.',
    ],
    eventImage: '/img/Gart/IMG_6980.JPG',
    eventImageCaption: 'Mock GART Internal Competition & Team Prototyping',
    robotImage: '/img/Gart/File_000.png',
    robotImageCaption: 'VuaMock Robot CAD & Early Mechanism Assembly',
    specs: [
      { label: 'Prototyping', value: 'Wood plates, 3D printing & scrap aluminum' },
      { label: 'Leadership', value: 'Team Captain & Mentor for Team Bluebook' },
      { label: 'Milestone', value: '2nd Place (VuaMock) -> Champions (Team Bluebook)' },
    ],
    awards: ['Mock GART 2024 Finalist (VuaMock)', 'Mentored 2026 Mock GART Championship Winning Team'],
  },
  {
    id: 'ftc-thanh-hoa',
    stageNumber: '02',
    period: 'Early 2024',
    title: 'FTC Thanh Hoa Scrimmage',
    subtitle: 'Iterative Engineering & Mechanism Optimization',
    tagline: 'Refining high-speed intake rollers and linear elevator slides.',
    role: 'Head of Mechanics & CAD',
    description:
      'Advancing to the FIRST Tech Challenge team as Head of Mechanics-CAD, we tested our competitive robot under harsh match conditions at the Thanh Hoa Scrimmage. I applied hard lessons from Mock GART: reducing unnecessary design iterations, simplifying linkage assemblies, and using dynamic calculation software to keep mechanisms efficient and lightweight.',
    details: [
      'Iterated dual-motor intake roller geometry for millisecond game element pickup.',
      'Stress-tested cascade linear elevator slides under high-frequency loading.',
      'Gathered telemetry and driver feedback to redesign robot chassis center of gravity.',
    ],
    eventImage: '/img/FTC Thanh Hoa/IMG_6820.JPG',
    eventImageCaption: 'Thanh Hoa Scrimmage Field Matches & Pits Testing',
    robotImage: '/img/FTC Thanh Hoa/IMG_6826.JPG',
    robotImageCaption: 'Intake and slide mechanisms undergoing field iteration',
    specs: [
      { label: 'Event', value: 'FIRST Tech Challenge Regional Scrimmage' },
      { label: 'Focus Area', value: 'Mechanism Reliability & Weight Reduction' },
      { label: 'Simulation', value: 'Kinematic & Stress FEA Calculations' },
    ],
  },
  {
    id: 'ftc-national',
    stageNumber: '03',
    period: 'National Round 2024',
    title: 'FTC Vietnam National Champions',
    subtitle: '16-Match Undefeated Streak & National Design Award',
    tagline: 'Dominating the national stage with precision CAD engineering and robust manufacturing.',
    role: 'Head of Mechanics & CAD Lead',
    description:
      'Continuous refinement paid off as our team completed an astonishing 16-match undefeated winning streak to become the FIRST Tech Challenge Vietnam National Champions. Our robot was awarded the prestigious National Design Award for outstanding industrial design, structural elegance, and efficient hardware execution.',
    details: [
      'Swept all qualification and playoff matches undefeated (16-0).',
      'Awarded the National Design Award by international FTC judges.',
      'Featured on national television (VTV) and press media as pioneers in youth engineering.',
    ],
    eventImage: '/img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG',
    eventImageCaption: 'National Championship Victory & Design Award Presentation',
    robotImage: '/img/FTC trong nuoc/1K1V2Q6AK_5836GL.JPG',
    robotImageCaption: 'Competition-Ready Robot at the Vietnam National Arena',
    specs: [
      { label: 'Match Record', value: '16 Wins - 0 Losses (Undefeated)' },
      { label: 'Honors', value: 'National Champions & Design Award' },
      { label: 'Press & TV', value: 'VTV National Television Feature' },
    ],
    awards: [
      'FIRST Tech Challenge Vietnam National Champion',
      'FTC National Design Award for Engineering Excellence',
      'Vietnam Deputy Prime Minister Official Recognition',
    ],
    pressStatus: 'verified',
    pressNote: 'Covered on National Television (VTV) and Education media outlets',
  },
  {
    id: 'ftc-worlds',
    stageNumber: '04',
    period: 'April 2024',
    title: 'FTC World Championship (Houston, Texas)',
    subtitle: 'Edison Division Top Alliance & World Finalist Alliance (2nd Global)',
    tagline: 'Representing Vietnam on the global robotics stage at the George R. Brown Convention Center.',
    role: 'Head of Mechanics & CAD',
    description:
      'Representing Vietnam in Houston, Texas, we went head-to-head with the top 200+ robotics teams in the world. Our robot dominated the Edison Division to emerge as the Top Alliance, battling all the way through to the Finalist Alliance and finishing 2nd overall globally. The achievement earned official praise and recognition from the Deputy Prime Minister of Vietnam.',
    details: [
      'Ranked #1 Alliance in the prestigious Edison Division.',
      'Advanced to the Finalist Alliance at the World Championship Finals.',
      'Received official congratulatory recognition from the Vietnam Deputy Prime Minister.',
    ],
    eventImage: '/img/FTC quoc te/1.jpg',
    eventImageCaption: 'World Championship Edison Division Victory in Houston, Texas',
    robotImage: '/img/FTC quoc te/IMG_6301.JPG',
    robotImageCaption: 'Finalist Alliance Robot on the World Stage',
    specs: [
      { label: 'Global Stage', value: 'Houston, Texas, USA (George R. Brown)' },
      { label: 'Result', value: 'Edison Division Top Alliance & 2nd Global Finalist' },
      { label: 'Recognition', value: 'Vietnam Deputy Prime Minister Distinction' },
    ],
    awards: [
      'FTC World Championship Edison Division Top Alliance',
      'World Championship Finalist Alliance (2nd Overall Globally)',
    ],
    pressStatus: 'verified',
    pressNote: 'Global livestream broadcast and Vietnam national news coverage',
  },
  {
    id: 'gart-community',
    stageNumber: '05',
    period: '2024 - 2026',
    title: 'GART Outreach, Camp & Internal Training',
    subtitle: 'Training 40 Hardware Members & 34 Mentors, VEX IQ @ US Embassy',
    tagline: 'Democratizing STEM and empowering the next generation of builders.',
    role: 'Head of Mechanics, Curriculum Designer & Camp Organizer',
    description:
      'Beyond competitive arenas, I directed the Mechanics department of 40 members, authoring end-to-end training curricula on 3D printing, CAD design, and CNC manufacturing. I mentored 34 specialization instructors and co-organized GART Camp — a summer robotics initiative teaching VEX IQ at the American Embassy community center, as well as the annual GART Expo featuring interactive robotics showcases for hundreds of Vietnamese students.',
    details: [
      'Authored comprehensive hardware training curriculum for 40 department members.',
      'Trained 34 specialized STEM instructors and mentors across Hanoi.',
      'Organized GART Summer Camp teaching VEX IQ at the American Embassy.',
      'Hosted annual GART Expo with live interactive robot showcases and community games.',
    ],
    eventImage: '/img/Gart Camp 2025/IMG_6973.JPG',
    eventImageCaption: 'GART Summer Camp & VEX IQ Training at US Embassy',
    robotImage: '/img/Gart expo 2025/IMG_6985.JPG',
    robotImageCaption: 'GART Expo Interactive Robotics Demonstration Showcase',
    specs: [
      { label: 'Department Scale', value: '40 Members & 34 Mentors Trained' },
      { label: 'Key Programs', value: 'GART Expo, Summer Camp & US Embassy VEX IQ' },
      { label: 'Impact', value: '500+ Youth Engaged in Hands-on Engineering' },
    ],
    awards: ['GART Outstanding Leadership & Mentor Award'],
  },
];
