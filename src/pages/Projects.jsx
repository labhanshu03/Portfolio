import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MotionSection = motion.section;

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="space-y-16">
      <MotionSection
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
          Portfolio
        </p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          Products engineered for scale and delight
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Deep dives into flagship builds where I mixed modern MERN stacks with
          real-time infrastructure, thoughtful UX, and measurable business
          impact.
        </p>
      </MotionSection>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="expanded"
            index={index}
          />
        ))}
      </div>

      <ContactSection />
    </div>
  );
};

export default Projects;

