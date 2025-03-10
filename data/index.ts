export const navItems = [
  { name: 'About', link: '#about' },

  { name: 'Experience', link: '#experience' },
  { name: 'Process', link: '#process' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      'Currently building a Decentralised Organisation on the Sui Blockchain',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity. Added several features such as flight tracking, journey planning, and more.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev',
    desc: 'Developed mobile app for both iOS & Android platforms using React Native. Integrated several features such as push notifications, privacy controls and travel planning.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Developed scanning app for a client, that allowed users to be scanned in for festivals and events. Integrated several features such as QR code scanning and ticket validation .',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Crypto Developer',
    desc: 'Developed and maintained crypto project for a team. The app worked on the Sui blockchain and allowed users to trade their assets freely.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    alt: 'github logo',
    img: '/git.svg',
    link: 'https://github.com/afam-io',
  },
  {
    id: 2,
    alt: 'twitter logo',
    img: '/twit.svg',
    link: 'https://x.com/afamokoh',
  },
  {
    id: 3,
    alt: 'linkedIn logo',
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/afam-okoh/',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Environmental App',
    des: ' An App for eco-minded individuals who are looking for inspiration as to how they can lessen their environmental impact in an approachable and accessible way.',
    img: '/redeem.png',
    iconLists: ['/tail.svg'],
    link: 'https://final-project-front-end-boolean-pirates.vercel.app/',
  },
  // { id, title, des, img, iconLists, link },
  // { id, title, des, img, iconLists, link },
  // { id, title, des, img, iconLists, link },
];
