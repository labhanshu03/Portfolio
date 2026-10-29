import { ArrowDown, Download } from 'lucide-react';
import { profile, socials } from '../../data/profile';
import SocialIcon from '../ui/SocialIcon';

const AvailabilityBadge = () => (
  <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
    <span aria-hidden="true" className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
      <span className="relative h-2 w-2 rounded-full bg-ok" />
    </span>
    {profile.availability}
  </p>
);

const Hero = () => (
  <section
    id="top"
    aria-labelledby="hero-title"
    className="page pb-16 pt-[calc(var(--nav-height)+3rem)] sm:pb-24 sm:pt-[calc(var(--nav-height)+6rem)]"
  >
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <p className="eyebrow">
        {profile.role} — {profile.location}
      </p>
      <AvailabilityBadge />
    </div>

    <h1
      id="hero-title"
      className="mt-8 text-[clamp(3rem,11vw,8.25rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
    >
      Labhanshu
      <br />
      Gupta<span className="text-accent">.</span>
    </h1>

    <div className="mt-10 grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="text-xl font-medium leading-snug tracking-tight sm:text-2xl md:text-[1.75rem]">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-xl text-muted">{profile.summary}</p>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end lg:justify-end">
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            View work
            <ArrowDown
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-surface px-5 text-sm font-medium transition-colors hover:border-ink/30"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Download résumé
          </a>
        </div>
        <ul className="flex gap-1" aria-label="Profiles">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-ink"
              >
                <SocialIcon label={social.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 md:grid-cols-4">
      {profile.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse justify-end gap-1 bg-bg p-5 sm:p-6">
          <dt className="eyebrow">{stat.label}</dt>
          <dd className="font-mono text-3xl font-medium tracking-tight sm:text-4xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
