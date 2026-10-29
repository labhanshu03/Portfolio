import { education } from '../../data/profile';
import Section from '../ui/Section';
import TagList from '../ui/TagList';

const Education = () => (
  <Section id="education" index="05" title="Education" className="py-20 sm:py-24">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{education.school}</h3>
      <p className="shrink-0 font-mono text-xs text-muted">{education.period}</p>
    </div>
    <p className="mt-2 text-muted">
      {education.degree} · <span className="font-medium text-ink">{education.grade}</span>
    </p>
    <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4">{education.note}</p>
    {education.coursework.length > 0 && (
      <TagList items={education.coursework} label="Relevant coursework" className="mt-6" />
    )}
  </Section>
);

export default Education;
