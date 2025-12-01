import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
          Featured Projects
        </p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Scalable experiences built for fast teams
        </h2>
        <p className="max-w-2xl text-base text-slate-300">
          A sample of products across commerce, real-time collaboration, and AI
          automation. Each project ships with resilient infrastructure, strong
          DX, and maintainable MERN foundations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

