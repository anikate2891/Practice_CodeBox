import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-bg-main border border-border-dim hover:border-primary transition-all duration-300 flex flex-col h-full overflow-hidden p-6"
    >
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-text-secondary text-xs leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-0.5 bg-bg-alt text-[9px] font-bold uppercase tracking-wider text-text-secondary border border-border-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-secondary text-[10px] font-black uppercase tracking-widest hover:bg-accent-hover transition-colors"
          >
            Live Demo
            <ExternalLink size={12} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-border-dim text-white hover:border-primary hover:text-primary transition-all"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
