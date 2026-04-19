import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Database, Layout, Server, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, TECH_SKILLS } from './constants';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="grow grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-border-dim gap-px pt-24 md:pt-28 lg:pt-0">
        {/* Left Column: Fixed/Sticky Hero */}
        <div className="bg-bg-main lg:sticky lg:top-0 lg:h-screen flex items-center justify-center overflow-hidden">
          <section 
            id="home" 
            className="relative w-full min-h-[82vh] lg:min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 scroll-mt-28 lg:scroll-mt-24"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 0)', backgroundSize: '30px 30px' }} 
            />
            
            <div className="max-w-3xl text-left z-10 w-full">
              <div className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-6">01 Home</div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-6"
              >
                &lt; MERN_STACK_SPECIALIST /&gt;
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.9] border-l-4 border-primary pl-4 sm:pl-6">
                  I Build <span className="text-white">Full-Stack</span> Systems That <span className="italic">Actually</span> Work.
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-text-secondary text-sm md:text-base font-medium mb-10 leading-relaxed max-w-lg"
              >
                Focused on high-performance architecture, clean code, and solving complex problems through modular engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-primary text-secondary font-black uppercase tracking-widest text-[10px] hover:bg-accent-hover transition-all"
                >
                  View Projects
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 border border-border-dim text-white font-black uppercase tracking-widest text-[10px] hover:border-primary hover:text-primary transition-all"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Right Column: Scrollable Sidebar Content */}
        <div className="flex flex-col bg-border-dim gap-px">
          {/* About Box */}
          <section id="about" className="p-8 md:p-16 lg:p-20 bg-bg-main relative scroll-mt-28 lg:scroll-mt-24">
            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-8">02 About</h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight">Mindset</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I don't just write code; I design systems. My focus is on scalability, performance, and building digital tools that bridge the gap between technical complexity and intuitive user experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-bg-alt border border-border-dim">
                  <div className="text-primary font-bold uppercase text-[9px] tracking-widest mb-2 flex items-center gap-2">
                    <Layout size={12} /> Frontend
                  </div>
                  <p className="text-[11px] text-text-secondary leading-normal">
                    Precise, reactive interfaces built with React & Next.js.
                  </p>
                </div>
                <div className="p-6 bg-bg-alt border border-border-dim">
                  <div className="text-primary font-bold uppercase text-[9px] tracking-widest mb-2 flex items-center gap-2">
                    <Server size={12} /> Backend
                  </div>
                  <p className="text-[11px] text-text-secondary leading-normal">
                    Secure, scalable APIs powered by Node.js & Express.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Box */}
          <section id="projects" className="p-8 md:p-16 lg:p-20 bg-bg-alt relative scroll-mt-28 lg:scroll-mt-24">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">03 Work</h2>
              <span className="text-[9px] font-medium text-text-secondary uppercase tracking-[0.2em]">Selected Cases</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Skill Ticker moved into Work section container */}
            <div className="mt-16 pt-10 border-t border-border-dim overflow-hidden relative">
              <div className="flex animate-infinite-scroll gap-10 whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity">
                {[...TECH_SKILLS, ...TECH_SKILLS].map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-lg font-black text-white uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Box */}
          <section id="contact" className="p-8 md:p-16 lg:p-20 bg-bg-main relative scroll-mt-28 lg:scroll-mt-24">
            <h2 className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-12">04 Lab</h2>
            
            <div className="grid gap-12">
              <div>
                <h4 className="text-lg font-bold uppercase mb-2">Got an idea?</h4>
                <p className="text-sm text-text-secondary mb-10">Let's build it together.</p>

                <div className="flex flex-wrap gap-10">
                  <a href="https://github.com" className="text-[10px] font-black text-text-secondary hover:text-primary transition-colors tracking-widest uppercase">Github</a>
                  <a href="https://linkedin.com" className="text-[10px] font-black text-text-secondary hover:text-primary transition-colors tracking-widest uppercase">Linkedin</a>
                  <a href="mailto:contact@example.com" className="text-[10px] font-black text-text-secondary hover:text-primary transition-colors tracking-widest uppercase">Email</a>
                </div>
              </div>

              <div className="bg-bg-alt p-8 border border-border-dim">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="NAME"
                      className="w-full bg-bg-main border border-border-dim px-6 py-4 outline-none focus:border-primary transition-colors text-[10px] font-bold uppercase tracking-widest"
                    />
                    <input 
                      type="email" 
                      placeholder="EMAIL"
                      className="w-full bg-bg-main border border-border-dim px-6 py-4 outline-none focus:border-primary transition-colors text-[10px] font-bold uppercase tracking-widest"
                    />
                  </div>
                  <textarea 
                    rows={4}
                    placeholder="MESSAGE"
                    className="w-full bg-bg-main border border-border-dim px-6 py-4 outline-none focus:border-primary transition-colors text-[10px] font-bold uppercase tracking-widest resize-none"
                  ></textarea>
                  <button className="w-full py-5 bg-primary text-secondary font-black uppercase tracking-widest text-[10px] hover:bg-accent-hover transition-colors">
                    Send Signal
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer inside sidebar flow */}
          <footer className="p-8 md:p-10 border-t border-border-dim text-center bg-bg-main">
            <p className="text-[8px] font-black uppercase tracking-[0.28em] md:tracking-[0.5em] text-text-secondary opacity-50">
              &copy; {new Date().getFullYear()} DEV_CORE // SYSTEMS ARCHITECT
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
