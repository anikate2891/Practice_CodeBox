import { NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pulse Mart',
    description: 'A robust e-commerce platform built with MERN stack, featuring real-time inventory and Stripe integration.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    id: '2',
    title: 'SysCore Monitoring',
    description: 'High-performance system dashboard for server monitoring with real-time analytics and alerts.',
    techStack: ['React', 'D3.js', 'Socket.io', 'Express', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    imageUrl: 'https://picsum.photos/seed/monitor/800/600',
  },
  {
    id: '3',
    title: 'DevSync Collaborative Editor',
    description: 'A real-time code editor with collaborative features, supporting multiple languages and terminal emulation.',
    techStack: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    imageUrl: 'https://picsum.photos/seed/code/800/600',
  },
];

export const TECH_SKILLS = [
  'MongoDB', 'Express.js', 'React', 'Node.js',
  'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux',
  'PostgreSQL', 'Redis', 'Docker', 'AWS'
];
