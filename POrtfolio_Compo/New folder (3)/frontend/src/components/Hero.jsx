import { useEffect, useRef } from 'react';

// Pencil icon floating
function PencilIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="28" height="36" rx="3" fill="#fef08a" stroke="#1a1a1a" strokeWidth="2.5"/>
      <rect x="16" y="38" width="16" height="6" rx="2" fill="#fb923c" stroke="#1a1a1a" strokeWidth="2"/>
      <polygon points="16,38 32,38 24,46" fill="#fdfaf6" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="16" y1="14" x2="32" y2="14" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="32" y2="20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="26" x2="28" y2="26" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Code tags icon floating
function CodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="44" height="32" rx="5" fill="#60a5fa" stroke="#1a1a1a" strokeWidth="2.5"/>
      <polyline points="14,18 8,24 14,30" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="34,18 40,24 34,30" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="21" y1="16" x2="27" y2="32" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

// Star doodle
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="24,4 29,18 44,18 32,27 37,42 24,33 11,42 16,27 4,18 19,18" fill="#fb923c" stroke="#1a1a1a" strokeWidth="2"/>
    </svg>
  );
}

// Scribble SVG underline
function ScribbleUnderline({ color = '#fb923c' }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        path.style.transition = 'stroke-dashoffset 1.2s ease forwards';
        path.style.strokeDashoffset = '0';
      }
    });
    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      viewBox="0 0 400 20"
      className="w-full max-w-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M5 12 C 50 5, 100 18, 150 10 S 250 3, 300 12 S 360 18, 395 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Floating icons */}
      <div className="animate-float absolute top-24 left-8 md:left-24 opacity-90 pointer-events-none" style={{ animationDelay: '0s' }}>
        <PencilIcon className="w-14 h-14 rotate-[-20deg]" />
      </div>
      <div className="animate-float-reverse absolute top-32 right-8 md:right-28 pointer-events-none" style={{ animationDelay: '1s' }}>
        <CodeIcon className="w-16 h-16 rotate-[15deg]" />
      </div>
      <div className="animate-float-slow absolute bottom-32 left-12 md:left-36 pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <StarIcon className="w-10 h-10 rotate-[10deg]" />
      </div>
      <div className="animate-float absolute bottom-24 right-12 md:right-40 pointer-events-none" style={{ animationDelay: '2s' }}>
        <PencilIcon className="w-10 h-10 rotate-[30deg]" />
      </div>
      <div className="animate-float-reverse absolute top-1/2 right-4 md:right-16 pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <StarIcon className="w-8 h-8 rotate-[-12deg]" />
      </div>

      {/* Badge */}
      <div className="reveal inline-flex items-center gap-2 bg-accent-yellow border-ink border-2 wobbly px-4 py-1.5 mb-6 shadow-hard-sm font-patrick text-base dark:text-[#1a1a1a]">
        🚀 Open to Work
      </div>

      {/* H1 */}
      <h1 className="reveal font-kalam font-bold text-6xl md:text-8xl lg:text-9xl text-ink leading-tight mb-2 max-w-4xl" style={{ transitionDelay: '0.1s' }}>
        Full {' '}
        <span className="relative inline-block text-accent-orange">
          Stack
          <span className="absolute -bottom-3 left-0 right-0 flex justify-center" aria-hidden="true">
            <ScribbleUnderline color="#fb923c" />
          </span>
        </span>
        {' '}Developer.
      </h1>

      {/* Sub line */}
      <p className="reveal font-patrick text-2xl md:text-3xl text-ink/70 mt-10 mb-8 max-w-2xl leading-relaxed" style={{ transitionDelay: '0.2s' }}>
        Creative developer &amp; designer — I build responsive and scalable{' '}
        <span className="relative inline-block">
          <span className="relative z-10">web applications</span>
          <span
            className="absolute bottom-0 left-0 right-0 h-3 bg-accent-yellow opacity-60 -z-0 rounded"
            aria-hidden="true"
          />
        </span>
         , using MongoDB, Express, React, and Node.js.
      </p>

      {/* CTAs */}
      <div className="reveal flex flex-col sm:flex-row gap-4 mt-2 mb-20 md:mb-12" style={{ transitionDelay: '0.3s' }}>
        <a
          href="#projects"
          id="hero-cta-primary"
          className="font-kalam font-bold text-xl bg-ink text-paper px-8 py-4 wobbly border-ink border-[3px] shadow-hard btn-press hover:-translate-y-1 hover:shadow-hard transition-all duration-200 inline-block"
        >
          View My Work 🎨
        </a>
        <a
          href="#contact"
          id="hero-cta-secondary"
          className="font-kalam font-bold text-xl bg-accent-orange text-ink px-8 py-4 wobbly-2 border-ink border-[3px] shadow-hard btn-press hover:-translate-y-1 hover:shadow-hard transition-all duration-200 inline-block"
        >
          Hire Me 🚀✉️
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="font-patrick text-sm text-ink">scroll down</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ink">
          <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
