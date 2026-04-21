import { useEffect, useRef } from 'react';

const projects = [
  {
  id: 1,
  title: 'AI Battle Arena',
  subtitle: 'AI Web App · 2026',
  desc: 'Built an AI comparison platform where users submit a prompt and receive responses from two AI models, with a third AI acting as a judge to evaluate and rank outputs. This ensures more reliable, structured, and high-quality results instead of relying on a single AI response.',
  tags: ['React', 'Node.js', 'MongoDB', 'API Integration'],
  tagColors: ['bg-accent-blue/40', 'bg-accent-orange/40', 'bg-accent-yellow', 'bg-accent-red/30'],
  accentColor: '#60a5fa',
  rotate: '-rotate-1',
  tapeRotate: '-3deg',
  imageEmoji: '🤖',
  imageGradient: 'from-blue-100 to-indigo-100',
  link: 'https://ai-battel-arena-frontend.vercel.app/',
  align: 'left',
},
    {
    id: 2,
    title: 'AI Resume Builder',
    subtitle: 'AI Web App · 2026',
    desc: 'Built an AI-powered resume platform that generates ATS-optimized resumes from user input or LinkedIn data. It also provides role-specific interview questions and resume scoring, removing the need for paid resume tools.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI API'],
    tagColors: ['bg-accent-orange/40', 'bg-accent-blue/40', 'bg-accent-yellow', 'bg-accent-red/30'],
    accentColor: '#fb923c',
    rotate: 'rotate-1',
    tapeRotate: '2deg',
    imageEmoji: '📄',
    imageGradient: 'from-orange-100 to-yellow-50',
    link: 'https://resume-builder-frontend-plum.vercel.app/',
    align: 'right',
  },
  {
    id: 3,
    title: 'NexChat AI',
    subtitle: 'AI Chat App · 2026',
    desc: 'Developed an AI chat application that provides uninterrupted access to AI conversations without strict usage limits. Includes authentication, persistent chat history, and email verification for a complete user experience similar to modern AI chat platforms.',
    tags: ['React', 'Node.js', 'MongoDB', 'Auth'],
    tagColors: ['bg-accent-blue/40', 'bg-accent-yellow', 'bg-accent-orange/40', 'bg-accent-red/30'],
    accentColor: '#60a5fa',
    rotate: '-rotate-2',
    tapeRotate: '-1deg',
    imageEmoji: '⚡',
    imageGradient: 'from-blue-100 to-indigo-100',
    link: 'https://nex-chat-frontend-phi.vercel.app/',
    align: 'left',
  }
];

function Tape({ style }) {
  return (
    <div
      className="tape"
      style={style}
      aria-hidden="true"
    />
  );
}

function Thumbtack({ style }) {
  return (
    <div
      className="thumbtack"
      style={style}
      aria-hidden="true"
    />
  );
}

function ProjectCard({ project, index }) {
  const isRight = project.align === 'right';

  return (
    <div
      id={`project-${project.id}`}
      className={`reveal flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Polaroid image */}
      <div className="flex-1 flex justify-center">
        <div className={`relative polaroid ${project.rotate} max-w-sm w-full`}>
          {/* Tape pieces */}
          <Tape style={{ top: '-12px', left: '50%', transform: `translateX(-50%) rotate(${project.tapeRotate})` }} />
          {/* Thumbtacks */}
          <Thumbtack style={{ top: '-7px', left: '15px' }} />
          <Thumbtack style={{ top: '-7px', right: '15px' }} />

          {/* Image area */}
          <div
            className={`w-full h-56 bg-gradient-to-br ${project.imageGradient} flex items-center justify-center rounded-sm overflow-hidden`}
            style={{ border: '1px solid #e5e0d8' }}
          >
            <span className="text-8xl select-none">{project.imageEmoji}</span>
          </div>

          {/* Polaroid caption */}
          <p className="font-kalam text-center text-ink/60 text-lg mt-2 pt-1">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4 max-w-lg">
        {/* Project number badge */}
        <span
          className="font-kalam font-bold text-5xl opacity-10 leading-none select-none"
          aria-hidden="true"
        >
          0{project.id}
        </span>

        <h3 className="font-kalam font-bold text-4xl md:text-5xl text-ink -mt-6">
          {project.title}
        </h3>

        <p className="font-patrick text-lg text-ink/70 leading-relaxed">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`${project.tagColors[i]} border-ink border-2 wobbly px-3 py-0.5 font-patrick text-sm font-semibold ${['React', 'Tailwind', 'Tiptap'].includes(tag) ? 'dark:text-[#1a1a1a]' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          id={`project-cta-${project.id}`}
          className="inline-flex items-center gap-2 mt-2 font-kalam font-bold text-lg bg-ink text-paper px-6 py-3 wobbly border-ink border-[3px] shadow-hard btn-press w-fit hover:-translate-y-0.5 hover:shadow-hard transition-all duration-150"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={sectionRef}>
      {/* Heading */}
      <div className="text-center mb-20">
        <div className="reveal inline-block bg-accent-red/20 border-2 border-ink wobbly px-5 py-1.5 font-patrick text-base mb-4">
          📂 Selected Work
        </div>
        <h2 className="reveal font-kalam font-bold text-5xl md:text-6xl text-ink" style={{ transitionDelay: '0.1s' }}>
          Projects that matter
        </h2>
        <p className="reveal font-patrick text-xl text-ink/60 mt-3 max-w-xl mx-auto" style={{ transitionDelay: '0.2s' }}>
          Built with real-world problems in mind —   each project focuses on performance, scalability, and user experience.
        </p>
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} index={index} />
            {index < projects.length - 1 && (
              <hr className="divider-dashed mt-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
