export interface VolunteerItem {
  id: string;
  number: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageCaption: string;
  videoUrl?: string;
  specs: { label: string; value: string }[];
  status: 'verified' | 'awaiting';
}

export const volunteerData: VolunteerItem[] = [
  {
    id: 'cosmosics-project',
    number: '01',
    title: 'Cosmosics Science & Rocketry Outreach',
    role: 'Lead Workshop Facilitator & Experimenter',
    organization: 'Cosmosics Project',
    period: '2023 - Present',
    tagline: 'Bringing thrilling water rocketry and 3D holography physics to mountainous school communities in Lang Son.',
    description:
      'At Cosmosics, I led hands-on science activities designed to demystify physics for young learners. We conducted interactive water rocket launches, calculating nozzle pressures and launch trajectories, alongside dazzling optical holography demonstrations for students in remote regions of Lang Son. For many children, this was their very first time witnessing science leap from textbook formulas into live physical action.',
    highlights: [
      'Engineered and launched multi-stage pressurized water rockets with dynamic recovery parachutes.',
      'Demonstrated physical optics and beam-splitter laser holography for remote mountainous students.',
      'Fostered genuine excitement for STEM exploration and creative invention across youth cohorts.',
    ],
    image: '/img/Stembridge/20260203_154406_1.jpg',
    imageCaption: 'Water Rocketry Demonstration & Interactive Physics Workshop at Lang Son',
    videoUrl: '/img/Stembridge/1JGQQGLDQ_4E16M3.MP4',
    specs: [
      { label: 'Location', value: 'Lang Son Mountainous Schools' },
      { label: 'Key Activities', value: 'Water Rocket Launches & Holography' },
      { label: 'Participant Scale', value: '200+ Students Engaged' },
    ],
    status: 'verified',
  },
  {
    id: 'red-river-vex',
    number: '02',
    title: 'Red River Delta VEX V5 Robotics Championship',
    role: 'Official Field Resetter & Technical Volunteer',
    organization: 'VEX Robotics Tournament Committee',
    period: '2024',
    tagline: 'Ensuring millisecond match turnaround and competition field integrity for dozens of competing rookie teams.',
    description:
      'Serving as an official field resetter at the Red River Delta VEX V5 tournament, I worked directly on the competition perimeter. My responsibilities included inspecting game elements, recalibrating field tiles, verifying autonomous start positions, and assisting student teams with troubleshooting sensor alignments between intense qualification matches.',
    highlights: [
      'Maintained tournament tempo across 40+ high-intensity VEX V5 qualification and playoff matches.',
      'Aided rookie teams with quick field-side diagnostic checks on motors and sensor wires.',
      'Supported referee crews with scoring precision and match data verification.',
    ],
    image: '/img/FTC Thanh Hoa/IMG_6820.JPG',
    imageCaption: 'Field Resetter Technical Operations & Match Integrity at VEX Tournament',
    specs: [
      { label: 'Platform', value: 'VEX Robotics Competition (V5 Arena)' },
      { label: 'Duty', value: 'Field Resetter, Match Scorer & Tech Support' },
      { label: 'Teams Supported', value: '30+ Competing High School Alliances' },
    ],
    status: 'verified',
  },
];
