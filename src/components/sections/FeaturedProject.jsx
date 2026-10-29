import BrowserFrame from '../ui/BrowserFrame';
import Diagram from '../ui/Diagram';
import Reveal from '../ui/Reveal';
import TagList from '../ui/TagList';
import TextLink from '../ui/TextLink';

const LINK_LABELS = { live: 'Live demo', github: 'Source', video: 'Video walkthrough' };

const ProjectLinks = ({ name, links }) => (
  <ul className="flex flex-wrap gap-x-5 gap-y-2">
    {Object.entries(links).map(([kind, href]) => (
      <li key={kind}>
        <TextLink href={href} label={`${name} — ${LINK_LABELS[kind]}`}>
          {LINK_LABELS[kind]}
        </TextLink>
      </li>
    ))}
  </ul>
);

const Metrics = ({ metrics, isLead }) => (
  <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
    {metrics.map((metric) => (
      <div key={metric.label} className="flex flex-col-reverse justify-end gap-1 bg-bg p-3 sm:p-4">
        <dt className="text-[11px] leading-tight text-muted sm:text-xs">{metric.label}</dt>
        <dd
          className={`font-mono font-medium tracking-tight text-accent ${
            isLead ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'
          }`}
        >
          {metric.value}
        </dd>
      </div>
    ))}
  </dl>
);

const FeaturedProject = ({ project, index, isLead }) => (
  <Reveal>
    <article aria-labelledby={`${project.id}-name`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Project {String(index + 1).padStart(2, '0')}</p>
          <h3
            id={`${project.id}-name`}
            className={`mt-2 font-semibold tracking-[-0.03em] ${isLead ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-5xl'}`}
          >
            {project.name}
          </h3>
          <p className="mt-2 max-w-xl text-lg text-muted">{project.tagline}</p>
        </div>
        <ProjectLinks name={project.name} links={project.links} />
      </div>

      {/* Metrics lead on mobile; on desktop they sit above the diagram in the right column. */}
      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-4">
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <Metrics metrics={project.metrics} isLead={isLead} />
        </div>

        <div className="space-y-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div>
            <h4 className="eyebrow">The problem</h4>
            <p className="mt-2 max-w-2xl">{project.problem}</p>
          </div>
          <div>
            <h4 className="eyebrow">What I built</h4>
            <ul className="mt-3 space-y-3">
              {project.built.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] gap-2 text-muted">
                  <span aria-hidden="true">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <TagList items={project.stack} label={`${project.name} tech stack`} />
        </div>

        <div className="space-y-4 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:self-start">
          {project.image && <BrowserFrame image={project.image} url={project.links.live} />}
          <Diagram title={project.name} layers={project.diagram} />
        </div>
      </div>
    </article>
  </Reveal>
);

export default FeaturedProject;
