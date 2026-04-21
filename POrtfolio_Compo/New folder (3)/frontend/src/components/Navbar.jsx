import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Work', href: '#projects', color: 'wavy-link' },
  { label: 'Features', href: '#features', color: 'wavy-link-yellow' },
  { label: 'About', href: '#about', color: 'wavy-link-blue' },
  { label: 'Contact', href: '#contact', color: 'wavy-link-red' },
];

// Sun icon for light mode
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon icon for dark mode
function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-surface border-ink wobbly shadow-hard px-6 py-3">
        {/* Logo */}
        <a href="#" className="nav-logo text-ink no-underline" id="nav-logo">
          <span className="text-accent-orange">{`{`}</span>
          anikate.dev
          <span className="text-accent-orange">{`}`}</span>
        </a>  

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-patrick text-lg font-semibold text-ink no-underline ${link.color}`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle button */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
            className="theme-toggle w-10 h-10 bg-surface border-ink border-[3px] wobbly shadow-hard-sm btn-press flex items-center justify-center text-ink"
          >
            <span className="transition-all duration-300">
              {dark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          <a
            href="#contact"
            id="nav-cta"
            className="font-kalam font-bold text-sm bg-ink text-paper px-5 py-2 wobbly border-ink shadow-hard-sm btn-press hover:shadow-hard transition-shadow duration-150"
          >
            Hire Me ✏️
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="theme-toggle-mobile"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="theme-toggle w-9 h-9 bg-surface border-ink border-[3px] wobbly shadow-hard-sm flex items-center justify-center text-ink"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            id="nav-hamburger"
            className="flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-surface border-ink wobbly shadow-hard px-6 py-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-patrick text-xl font-semibold text-ink no-underline ${link.color}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block font-kalam font-bold text-center bg-ink text-paper py-2 wobbly border-ink shadow-hard-sm"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me ✏️
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
