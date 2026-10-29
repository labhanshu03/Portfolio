import { featuredProjects, moreProjects } from '../../data/projects';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import TagList from '../ui/TagList';
import TextLink from '../ui/TextLink';
import FeaturedProject from './FeaturedProject';

const MoreWork = () => (
  <Reveal className="mt-24">
    <h3 className="eyebrow">More work</h3>
    <ul className="mt-4 border-t border-line">
      {moreProjects.map((project) => (
        <li
          key={project.name}
          className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8"
        >
          <p className="text-lg font-semibold tracking-tight md:col-span-3">{project.name}</p>
          <div className="md:col-span-6">
            <p className="text-sm text-muted">{project.summary}</p>
            <TagList items={project.stack} label={`${project.name} tech stack`} className="mt-3" />
          </div>
          <ul className="flex gap-5 md:col-span-3 md:justify-end">
            {project.links.live && (
              <li>
                <TextLink href={project.links.live} label={`${project.name} — Live demo`}>
                  Live
                </TextLink>
              </li>
            )}
            <li>
              <TextLink href={project.links.github} label={`${project.name} — Source`}>
                Source
              </TextLink>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </Reveal>
);

const Projects = () => (
  <Section id="projects" index="02" title="Selected projects" layout="stacked" className="py-24 sm:py-32">
    <div className="space-y-20">
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.id} project={project} index={index} isLead={index === 0} />
      ))}
    </div>
    <MoreWork />
  </Section>
);

export default Projects;
