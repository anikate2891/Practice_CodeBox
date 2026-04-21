import { useEffect, useRef } from 'react';

const skills = ['React', 'Next.js', 'TypeScript', 'Figma', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
  <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={sectionRef}>
    <hr className="divider-dashed mb-20" />

    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Avatar side */}
      <div className="flex-1 flex justify-center">
        <div className="reveal relative" style={{ transitionDelay: '0s' }}>
          <div
            className="tape"
            style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }}
          />
          <div className="thumbtack" style={{ top: '-8px', right: '24px' }} />

          <div className="bg-surface border-ink border-[3px] wobbly shadow-hard p-8 max-w-xs w-72 rotate-2 card-hover">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 border-ink border-[3px] rounded-full flex items-center justify-center text-6xl mb-6 shadow-hard-sm">
              🧑‍💻
            </div>

            <div className="font-kalam font-bold text-2xl text-center text-ink mb-1">
              Anikate Kanoo
            </div>
            <div className="font-patrick text-base text-center text-ink/60 mb-5">
              MERN Stack Developer
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { num: 'Fresher', label: 'Experience' },
                { num: '10+', label: 'Projects' },
                { num: 'MERN', label: 'Stack' },
                { num: '∞', label: 'Learning' },
              ].map((stat) => (
                <div key={stat.label} className="bg-paper border-ink border-2 wobbly-2 p-2 text-center">
                  <div className="font-kalam font-bold text-xl text-ink">{stat.num}</div>
                  <div className="font-patrick text-xs text-ink/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="animate-float absolute -bottom-6 -right-8 bg-accent-orange border-ink border-[3px] wobbly-3 shadow-hard px-4 py-2"
            style={{ animationDelay: '1s' }}
          >
            <span className="font-kalam font-bold text-ink text-sm">
              Available for hire! 🎉
            </span>
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <div className="reveal inline-block bg-accent-blue/30 border-2 border-ink wobbly px-4 py-1.5 font-patrick text-base w-fit">
          👤 About Me
        </div>

        <h2 className="reveal font-kalam font-bold text-5xl md:text-6xl text-ink leading-tight">
          The developer<br />behind the code.
        </h2>

        <p className="reveal font-patrick text-xl text-ink/70 leading-relaxed">
          I'm a MERN stack developer focused on building scalable, real-world web applications. I work across the full stack — from designing responsive UIs to developing robust backend systems and APIs.
        </p>

        <p className="reveal font-patrick text-xl text-ink/70 leading-relaxed">
          I aim to create products that solve real problems with clean architecture and practical usability. I enjoy turning ideas into functional applications and continuously improving performance, structure, and user experience.
        </p>

        {/* Skills */}
        <div className="reveal flex flex-wrap gap-2 mt-2">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className={`font-patrick text-sm font-semibold border-ink border-2 px-3 py-1 shadow-hard-sm card-hover cursor-default
                ${i % 4 === 0 ? 'bg-accent-yellow wobbly' : ''}
                ${i % 4 === 1 ? 'bg-accent-blue/40 wobbly-2' : ''}
                ${i % 4 === 2 ? 'bg-accent-orange/40 wobbly-3' : ''}
                ${i % 4 === 3 ? 'bg-surface wobbly' : ''}
              `}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Download CV */}
        <a
          href="https://drive.google.com/uc?export=download&id=1u65yXH4U7ortPWydF6H0mlIRl8rk0eUH"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal inline-flex items-center gap-2 font-kalam font-bold text-lg bg-paper text-ink border-ink border-[3px] px-6 py-3 wobbly shadow-hard btn-press w-fit hover:-translate-y-0.5 transition-all duration-150"
        >
          📄 Download CV
        </a>
      </div>
    </div>
  </section>
);
}
