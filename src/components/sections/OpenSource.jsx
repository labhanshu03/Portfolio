import { openSource } from '../../data/projects';
import Rich from '../ui/Rich';
import Section from '../ui/Section';
import TagList from '../ui/TagList';
import TextLink from '../ui/TextLink';

const OpenSource = () => (
  <Section id="open-source" index="03" title="Open source" className="py-20 sm:py-24">
    <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-2xl font-semibold tracking-tight">{openSource.project}</h3>
        <ul className="flex gap-5">
          <li>
            <TextLink href={openSource.links.live} label={`${openSource.project} — Live`}>
              Live
            </TextLink>
          </li>
          <li>
            <TextLink href={openSource.links.github} label={`${openSource.project} — Source`}>
              Source
            </TextLink>
          </li>
        </ul>
      </div>
      <p className="mt-3 max-w-2xl text-muted">{openSource.description}</p>
      <p className="mt-5 border-l-2 border-accent pl-4 text-lg leading-snug">
        <Rich text={openSource.contribution} />
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TagList items={openSource.stack} label="Helixque tech stack" />
        <p className="text-sm text-muted">{openSource.note}</p>
      </div>
    </article>
  </Section>
);

export default OpenSource;
