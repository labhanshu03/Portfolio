import { ArrowUpRight } from 'lucide-react';
import { achievements } from '../../data/achievements';
import Section from '../ui/Section';

const AchievementTitle = ({ title, href }) => {
  if (!href) return <h3 className="font-semibold tracking-tight">{title}</h3>;
  return (
    <h3 className="font-semibold tracking-tight">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 transition-colors hover:text-accent"
      >
        <span className="link-underline">{title}</span>
        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-muted group-hover:text-accent" />
      </a>
    </h3>
  );
};

const Achievements = () => (
  <Section id="achievements" index="06" title="Achievements" className="py-20 sm:py-24">
    <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
      {achievements.map((item, index) => (
        <li key={item.title} className="bg-bg p-6">
          <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
          <div className="mt-3">
            <AchievementTitle title={item.title} href={item.href} />
          </div>
          <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export default Achievements;
