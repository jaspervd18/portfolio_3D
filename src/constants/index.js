import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  sql,
  csharp,
  java,
  git,
  figma,
  b2b,
  stardew,
  klauwaerts,
  infosupport,
  hogent,
  github,
  linkedin,
  facebook,
  instagram,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Enterprise Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Applied Computer Sciences",
    company_name: "HOGENT",
    icon: hogent,
    iconBg: "#FFF",
    date: "Feb 2020 - Present",
    points: [
      "Very solid and broad knowledge of various IT subjects.",
      "Building practical exercises since day one.",
      "Specialization in Mobile & Enterprise Development.",
    ],
  },
  {
    title: "React Web Developer",
    company_name: "Info Support",
    icon: infosupport,
    iconBg: "#FFF",
    date: "Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "B2B Platform",
    description:
      "Web-based platform that allows users to order products and manage orders, providing a convenient and efficient solution for B2B needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: b2b,
    live_demo_link: "https://delaware.oliviergilquin.be/",
    source_code_link:
      "https://github.com/HoGentProjectenII/2023-frontend-gent07",
  },
  {
    name: "Stardew Hub",
    description:
      "A twitter-like social media platform for Stardew Valley players, allowing them to share their progress, tips, and tricks with other players.",
    tags: [
      {
        name: "t3stack",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: stardew,
    live_demo_link: "https://social-media-app-eta-tawny.vercel.app/",
    source_code_link: "https://github.com/jaspervd18/social_media_app",
  },
  {
    name: "Sports club Manage Tool",
    description:
      "A tool that allows sports clubs to manage their member and lessons. It provides a calendar for the members to see when their lessons are.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: klauwaerts,
    live_demo_link: "https://frontend-klauwaerts.onrender.com/",
    source_code_link: "https://github.com/jaspervd18/frontend-klauwaerts",
  },
];

const contacts = [
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "LinkedIn",
    icon: linkedin,
  },
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
