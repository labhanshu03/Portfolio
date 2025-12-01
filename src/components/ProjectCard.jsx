import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const MotionArticle = motion.article;
const MotionButton = motion.button;

const ProjectCard = ({ project, variant = 'compact', index = 0 }) => {
  const openProject = () =>
    window.open(project.url, '_blank', 'noopener,noreferrer');

  const baseClasses =
    'relative flex flex-col justify-between rounded-3xl border border-white/10 bg-card-glass p-6 text-left shadow-card transition-colors hover:border-white/30';
  const spacing = variant === 'expanded' ? 'gap-6 md:p-10' : 'gap-4';

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`${baseClasses} ${spacing} cursor-pointer`}
      onClick={openProject}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Featured
            </p>
            <h3 className="mt-1 font-display text-2xl text-white">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-white/20 p-2 text-white/80">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <p
          className={`text-slate-200 ${
            variant === 'expanded' ? 'text-lg' : 'text-base'
          }`}
        >
          {variant === 'expanded'
            ? project.longDescription
            : project.shortDescription}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <MotionButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={(event) => {
          event.stopPropagation();
          openProject();
        }}
        className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
      >
        Live Demo
      </MotionButton>
    </MotionArticle>
  );
};

export default ProjectCard;

