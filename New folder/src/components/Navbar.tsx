import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(`#${section}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-secondary/80 backdrop-blur-md border-b border-border-dim' : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-base sm:text-xl font-black tracking-tighter flex items-center gap-0 group uppercase"
        >
          <span>DEV_CORE</span>
          <span className="text-primary group-hover:text-white transition-colors">.</span>
          <span className="hidden sm:inline text-sm opacity-50 group-hover:opacity-100 transition-opacity ml-1">ENGINEER</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveTab(link.href)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative hover:text-primary ${
                activeTab === link.href ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              <span className="mr-1 opacity-50">0{index + 1}</span>
              {link.label}
              {activeTab === link.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 border border-primary text-primary font-bold uppercase text-[10px] tracking-widest hover:bg-primary hover:text-secondary transition-all flex items-center gap-2">
            Download CV
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-black uppercase tracking-widest transition-colors ${
                  activeTab === link.href ? 'text-primary' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full py-4 bg-primary text-secondary font-black uppercase tracking-widest mt-4">
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
