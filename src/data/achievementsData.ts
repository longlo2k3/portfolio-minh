export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  category: 'International' | 'National' | 'Corporate' | 'Academic';
  issuer: string;
  year: string;
  badge: string;
  description: string;
  image: string;
  imageCaption: string;
  status: 'verified' | 'awaiting';
  certScanStatus: 'verified_photo' | 'awaiting_scan';
  proofNote: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'ftc-worlds-finalist',
    number: '01',
    title: 'FTC World Championship Edison Top Alliance & Finalist Alliance',
    category: 'International',
    issuer: 'FIRST (For Inspiration and Recognition of Science and Technology)',
    year: '2024',
    badge: '2nd Overall Globally',
    description:
      'Edison Division Champions and Finalist Alliance at the FIRST Tech Challenge World Championship in Houston, Texas, competing against 200+ elite global teams.',
    image: '/img/FTC quoc te/1.jpg',
    imageCaption: 'Victory on the World Stage at the George R. Brown Convention Center, Houston, Texas',
    status: 'verified',
    certScanStatus: 'verified_photo',
    proofNote: 'Official FIRST Global Trophy & Stage Ceremony Verified',
  },
  {
    id: 'deputy-pm-recognition',
    number: '02',
    title: 'Vietnam Deputy Prime Minister Official Distinction',
    category: 'National',
    issuer: 'Government of Vietnam - Office of the Deputy Prime Minister',
    year: '2024',
    badge: 'National Honor',
    description:
      'Official congratulatory recognition and audience with the Vietnam Deputy Prime Minister for pioneering youth engineering innovation and global robotics achievements.',
    image: '/img/FTC quoc te/_T3A1875.jpg',
    imageCaption: 'National Delegation & Deputy Prime Minister Recognition Honor',
    status: 'verified',
    certScanStatus: 'awaiting_scan',
    proofNote: 'Official Delegation Ceremony Photo (High-res document scan awaiting owner upload)',
  },
  {
    id: 'ftc-national-champion',
    number: '03',
    title: 'FTC Vietnam National Champion & Design Award',
    category: 'National',
    issuer: 'FIRST Tech Challenge Vietnam & National Organizing Committee',
    year: '2024',
    badge: '16-0 Undefeated Streak',
    description:
      'Swept the entire national tournament with an undefeated 16-0 record and earned the prestigious National Design Award for superior CAD and mechanical kinematics.',
    image: '/img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG',
    imageCaption: 'Trophy & Design Award Presentation at the Vietnam National Finals',
    status: 'verified',
    certScanStatus: 'verified_photo',
    proofNote: 'National Trophy, Medals & Design Award Winner',
  },
  {
    id: 'wico-gold-medal',
    number: '04',
    title: 'WICO Korea Gold Medal & Global Youth Science Award',
    category: 'International',
    issuer: 'Korea University Invention Association & WICO Committee',
    year: '2024',
    badge: 'Gold Medalist',
    description:
      'Gold Award at the World Invention Creativity Olympic (WICO) in Seoul, Korea for the EnviroTrack scalable IoT air pollution monitoring network.',
    image: '/img/Wico/GYS/IMG_6940.JPG',
    imageCaption: 'WICO Gold Medal & Global Youth Science Award Presentation Ceremony',
    status: 'verified',
    certScanStatus: 'verified_photo',
    proofNote: 'Gold Medal & GYS Certificate of Excellence',
  },
  {
    id: 'samsung-sst-sw-cert',
    number: '05',
    title: 'Samsung S/W Global Certificate & SST Fellowship',
    category: 'Corporate',
    issuer: 'Samsung Vietnam R&D Center (SRV)',
    year: '2024 - 2025',
    badge: 'Top 10 High School Fellows',
    description:
      'Selected as 1 of 10 outstanding high school fellows nationwide. Passed the Samsung S/W Global Certificate Test at Advanced Level (Java & Data Structures/Algorithms).',
    image: '/img/Ảnh thực tập/Tri Nam/1JSJ401LT_5836GL.JPG',
    imageCaption: 'Samsung Science & Technology Fellowship & Advanced R&D Presentation',
    status: 'verified',
    certScanStatus: 'awaiting_scan',
    proofNote: 'Advanced S/W Global Certificate & Capstone Artifact 3D Reconstruction',
  },
  {
    id: 'conrad-global-finalist',
    number: '06',
    title: 'Conrad Challenge Global Finalist (Top 25 Worldwide)',
    category: 'International',
    issuer: 'The Conrad Foundation & NASA Johnson Space Center',
    year: '2024',
    badge: 'Top 25 out of 1,000+ Teams',
    description:
      'Engineered the Ideon autonomous underwater drone (AUV) for deep marine microplastic mapping. Pitched directly at NASA Johnson Space Center, Houston, Texas.',
    image: '/img/Conrad/IMG_6991.JPG',
    imageCaption: 'Ideon AUV Hardware & Autonomous Microplastic Sensing Prototype',
    status: 'verified',
    certScanStatus: 'awaiting_scan',
    proofNote: 'NASA Johnson Space Center Finalist Delegation',
  },
  {
    id: 'gtsd-ieee-conference',
    number: '07',
    title: 'GTSD International Conference Research Presentation',
    category: 'Academic',
    issuer: 'GTSD International Conference & Assoc. Prof. Vo Thanh Ha Lab',
    year: '2024',
    badge: 'Peer-Reviewed Conference Paper',
    description:
      'Authored and presented research on NDO-MPC control methods for hybrid battery-supercapacitor vehicular power distribution systems.',
    image: '/img/Hoithao_HCM/IMG_5638.JPG',
    imageCaption: 'Oral Research Presentation at the GTSD International Conference',
    status: 'verified',
    certScanStatus: 'verified_photo',
    proofNote: 'Published in Conference Proceedings & Certificate of Presentation',
  },
];
