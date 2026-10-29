import { experience } from '../../data/experience';
import Rich from '../ui/Rich';
import Section from '../ui/Section';
import TagList from '../ui/TagList';

const RoleEntry = ({ role, isCurrentTop }) => (
  <li className="relative border-l border-line pb-14 pl-6 last:pb-0 sm:pl-8">
    <span
      aria-hidden="true"
      className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ring-4 ring-bg ${
        isCurrentTop ? 'bg-accent' : 'bg-muted'
      }`}
    />
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <h3 className="text-xl font-semibold tracking-tight">
        {role.company}
        <span className="font-normal text-muted"> · {role.role}</span>
      </h3>
      <p className="shrink-0 font-mono text-xs text-muted">
        {role.period} · {role.location}
      </p>
    </div>
    <p className="mt-3 max-w-2xl text-sm text-muted">{role.context}</p>
    <ul className="mt-5 space-y-3">
      {role.points.map((point) => (
        <li key={point} className="grid grid-cols-[1rem_1fr] gap-2">
          <span aria-hidden="true" className="text-muted">
            –
          </span>
          <span>
            <Rich text={point} />
          </span>
        </li>
      ))}
    </ul>
    <TagList items={role.stack} label={`${role.company} tech stack`} className="mt-6" />
  </li>
);

const Experience = () => (
  <Section id="experience" index="01" title="Experience" className="py-20 sm:py-28">
    <ol>
      {experience.map((role, index) => (
        <RoleEntry key={role.company} role={role} isCurrentTop={index === 0} />
      ))}
    </ol>
  </Section>
);

export default Experience;
