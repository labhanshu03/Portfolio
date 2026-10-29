import { skills } from '../../data/skills';
import Section from '../ui/Section';
import TagList from '../ui/TagList';

const Skills = () => (
  <Section id="skills" index="04" title="Skills" className="py-20 sm:py-24">
    <dl className="border-t border-line">
      {skills.map((skill) => (
        <div key={skill.group} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
          <dt className="pt-0.5 text-sm font-medium">{skill.group}</dt>
          <dd>
            <TagList items={skill.items} label={skill.group} />
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
