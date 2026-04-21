import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '⚛️',
    iconBg: 'bg-[#60a5fa]',
    title: 'Frontend (React)',
    desc: 'Building dynamic and responsive user interfaces using React, focusing on clean components and smooth user experience.',
    rotate: '-rotate-1',
    delay: '0s',
  },
  {
    icon: '🧠',
    iconBg: 'bg-[#fef08a]',
    title: 'Data Structures',
    desc: 'Strong understanding of DSA for writing optimized and efficient code, improving problem-solving and logic building.',
    rotate: 'rotate-1',
    delay: '0.1s',
  },
  {
    icon: '🗄️',
    iconBg: 'bg-[#fb923c]',
    title: 'Database (MongoDB)',
    desc: 'Designing and managing NoSQL databases, handling schemas, queries, and data efficiently using MongoDB.',
    rotate: '-rotate-2',
    delay: '0.2s',
  },
  {
    icon: '🌐',
    iconBg: 'bg-[#ef4444]',
    title: 'Backend (Node & Express)',
    desc: 'Developing REST APIs, handling authentication, and building scalable server-side logic using Node.js and Express.',
    rotate: 'rotate-2',
    delay: '0.3s',
  },
  {
    icon: '🔗',
    iconBg: 'bg-[#fef08a]',
    title: 'API Integration',
    desc: 'Connecting frontend with backend services, handling API calls, and managing data flow efficiently.',
    rotate: '-rotate-1',
    delay: '0.4s',
  },
  {
    icon: '💻',
    iconBg: 'bg-[#60a5fa]',
    title: 'Version Control (GitHub)',
    desc: 'Managing code with Git and GitHub, maintaining clean repositories, and following proper version control practices.',
    rotate: 'rotate-1',
    delay: '0.5s',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto" ref={sectionRef}>
      {/* Section heading */}
      <div className="text-center mb-16">
        <div className="reveal inline-block bg-accent-orange/20 border-2 border-ink wobbly px-5 py-1.5 font-patrick text-base mb-4">
          🛠 What I Do
        </div>
        <h2 className="reveal font-kalam font-bold text-5xl md:text-6xl text-ink leading-tight" style={{ transitionDelay: '0.1s' }}>
          My Superpowers
        </h2>
        <p className="reveal font-patrick text-xl text-ink/60 mt-3 max-w-xl mx-auto" style={{ transitionDelay: '0.2s' }}>
          A toolkit built for making things people actually want to use — and can&apos;t stop staring at.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <div
            key={feat.title}
            id={`feature-card-${i + 1}`}
            className={`reveal card-hover bg-surface border-ink border-[3px] wobbly shadow-hard p-8 ${feat.rotate} flex flex-col gap-4`}
            style={{ transitionDelay: feat.delay }}
          >
            {/* Icon circle */}
            <div
              className={`w-14 h-14 ${feat.iconBg} border-ink border-[3px] rounded-full shadow-hard-sm flex items-center justify-center text-2xl flex-shrink-0`}
            >
              {feat.icon}
            </div>

            {/* Thumbtack */}
            <div
              className="thumbtack"
              style={{ top: '-7px', right: '20px' }}
              aria-hidden="true"
            />

            <h3 className="font-kalam font-bold text-2xl text-ink">{feat.title}</h3>
            <p className="font-patrick text-lg text-ink/70 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
