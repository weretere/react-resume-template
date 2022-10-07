import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  //FlagIcon,
  MapIcon,
  //OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import digitalAvatar from '../images/portfolio/digital-avatar.jpg';
import dissertationImage from '../images/portfolio/dissertation.png';
import WiPImage from '../images/portfolio/WiP.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/headshot.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rick Paris',
  description: "Keep up to date with all of Rick's projects",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Rick Paris`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello, I'm a <strong className="text-stone-100">Computer Vision Engineer and Researcher</strong>. 
        I do research in machine learning, extended reality, and human computer vision to help understand the future
        of data visualization.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of pursuing my research I like to unwind with Weightlifting, socialize with kickball, and build a smarter home.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I primarily work in data science with an emphasis on virtual and augmented reality. I have spent my
   career as a researcher working to better understand how people use AR/VR and how they wish they could use it.
   I don't consider myself a programmer, but someone who has those tools at his disposal. I am proficient at python, 
   C#, C\/C++, and others. Most of my specific work lies in Camera Calibration, 3D Computer Geometry, and Human\/Computer Interaction.
   `,
  aboutItems: [
    {label: 'Location', text: 'Nashville, TN', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Interests', text: 'Weightlifting, kickball, home automation', Icon: SparklesIcon},
    {label: 'Study', text: 'Vanderbilt University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Tensorflow',
        level: 10,
      },
      {
        name: 'PyTorch',
        level: 10,
      },
      {
        name: 'SciKit Learn',
        level: 6,
      },
    ],
  },
  {
    name: 'Computer Vision',
    skills: [
      {
        name: 'Human Recognition',
        level: 10,
      },
      {
        name: 'Structure From Motion',
        level: 8,
      },
      {
        name: 'OpenCV',
        level: 8,
      }
    ]
  },
  {
    name: 'Extended Reality',
    skills: [
      {
        name: 'Camera Calibration',
        level: 10,
      },
      {
        name: 'Computational Modeling',
        level: 8,
      },
      {
        name: 'Human Computer Interaction',
        level: 8,
      }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'Cloud Services (AWS/GCP/Azure)',
        level: 7,
      },
      {
        name: 'Jenkins',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Unity',
        level: 6,
      },
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'THREE.JS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Flask',
        level: 5,
      },
      {
        name: 'SQL',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pandemic',
    description: 'Tower Defense game to raise AIDS awareness',
    url: 'None',
    image: porfolioImage1,
    link: "",
  },
  {
    title: 'Camera Calibration',
    description: 'Give a short description of your project here.',
    url: 'None',
    image: porfolioImage2,
    link: "_blank",
  },
  {
    title: 'Doctoral Dissertation',
    description: 'Evaluation of Locomotion Techniques in Room and Standing Scale Tracked Spaces',
    url: 'https://ir.vanderbilt.edu/handle/1803/10106',
    image: dissertationImage,
    link: "_blank",
  },
  {
    title: 'Digital Avatar Creation',
    description: 'Extracted shape, texture, and action from single camera video to create digital avatars.',
    url: 'None',
    image: digitalAvatar,
    link: "_blank",
  },
  {
    title: 'Walking in Place',
    description: 'Using neural nets to understand human locomotion from head motion',
    url: 'https://wip.rickparis.dev',
    image: WiPImage,
    link: "",
  },
  {
    title: 'Human Based Calibration',
    description: 'Creating camera calibration from 3D joint features',
    url: 'threedkeypoints',
    image: porfolioImage3,
    link: "_blank"
  },
  /*{
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2019',
    location: 'Vanderbilt University',
    title: 'Ph.D. in Computer Science',
    content: <p>Dissertation Title: Selecting an Appropriate Locomotion Modality using Room Size and Individual Differences in Navigation Ability</p>,
  },
  {
    date: 'July 2013',
    location: 'University of Louisville',
    title: 'Master\'s of Computer Engineering',
    content: <p>Main Focus: Computer Graphics Architecture<br></br>
    Thesis Title: Modified half-edge data structure and its applications to 3D mesh generation for complex tube networks</p>,
  },
  {
    date: 'May 2013',
    location: 'University of Louisville',
    title: 'B.S. Electrical Engineering',
    content: <p>Main focus: Robotic Design, Microcomputer Design, Control Systems<br></br>
    Senior Project 1: Prius Battery Management System<br></br>
    Senior Project 2: Hot plate temperature control system</p>,
  },
  {
    date: 'May 2012',
    location: 'University of Louisville',
    title: 'B.S. Computer Science',
    content: <p>Main focus: Computer Graphics, Computer Architecture, Game Design<br></br>
    Senior Project: <em>Pandemic</em> an educational tower defense game</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2020',
    location: 'Verizon',
    title: 'Senior Computer Vision Engineer',
    content: (
      <p>
        Improved upon human based segmentation techniques<br></br>
        Integrated SMPL and SMPLX body models for avatar creation<br></br>
        Managed and integrated many COTS machine learning models<br></br>
        Feature based camera calibration and synthesis from uncalibrated cameras<br></br>
        Created and maintained backend server for inference human model creation<br></br>
        Created CI/CD workflows using Luigi, Jenkins, and Docker
      </p>
    ),
  },
  {
    date: 'November 2019 - November 2020',
    location: 'Major League Baseball',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        Created advanced machine learning models to assist in computer vision<br></br>
        Developed python APIs for integrating and rangling data from internal and external sources<br></br>
        Developed advanced data visualizations to explore the accuracy and stability of computer vision models for segmentation and registration<br></br>
        Developed API for quickly building deep learning models within our database and storage frameworks
      </p>
    ),
  },
  {
    date: 'October 2017 - October 2019',
    location: 'VUMC',
    title: 'Computer Vision Engineer',
    content: (
      <p>
        Integrated computer vision and machine learning to understand pose estimation and human activity recognition and classification<br></br>
        Implemented sensor fusion of biometric and visual data using recurrence and temporal fusion
      </p>
    ),
  },
  {
    date: 'May 2015 - October 2017',
    location: 'Graduate Research Engineer',
    title: 'Vanderbilt University',
    content: (
      <p>
        Designed and conducted user studies as part of an effort to understand perception action capabilities and spatial cognition in VR and AR<br></br>
        Used statistical testing and data analysis techniques for hypothesis testing<br></br>
        Worked with 3D avatar creation and mixed reality integration
      </p>
    ),
  },
  {
    date: 'January 2010 - August 2011',
    location: 'Cummins Fuel Systems',
    title: 'Data Scientist, Controls, and Processing Engineer',
    content: (
      <p>
        Automated data processing pipelines and created data storage solutions<br></br>
        Developed data visualization techniques to streamline analysis<br></br>
        Designed and implemented device drivers for data collection in testing rigs
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'parisra.vandy@gmail.com',
      href: 'mailto:parisra.vandy@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'weretere',
      href: 'https://github.com/weretere',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/weretere'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  //{label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
