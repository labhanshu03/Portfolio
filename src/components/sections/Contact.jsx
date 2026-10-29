import { useEffect, useState } from 'react';
import { Check, Copy, Phone } from 'lucide-react';
import { profile, socials } from '../../data/profile';
import Reveal from '../ui/Reveal';
import SocialIcon from '../ui/SocialIcon';

const COPY_RESET_MS = 2000;
const COPY_LABELS = { idle: 'Copy email', copied: 'Copied', failed: 'Press Ctrl+C' };

const CopyEmailButton = () => {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'idle') return undefined;
    const timer = setTimeout(() => setStatus('idle'), COPY_RESET_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  };

  const Icon = status === 'copied' ? Check : Copy;
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3.5 text-sm font-medium transition-colors hover:border-ink/30"
    >
      <Icon aria-hidden="true" className={`h-4 w-4 ${status === 'copied' ? 'text-ok' : ''}`} />
      <span aria-live="polite">{COPY_LABELS[status]}</span>
    </button>
  );
};

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
    <Reveal className="page">
      <p className="eyebrow">07 — Contact</p>
      <h2
        id="contact-title"
        className="mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em]"
      >
        Hiring for full-stack, backend or platform work? Let&rsquo;s talk.
      </h2>
      <p className="mt-6 max-w-xl text-muted">
        Open to SDE-1, full-stack and backend roles. Email is the fastest way to reach me.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-xl font-medium tracking-tight text-accent sm:text-3xl"
        >
          <span className="link-underline">{profile.email}</span>
        </a>
        <CopyEmailButton />
      </div>

      <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-5">
        <a href={profile.phoneHref} className="group flex items-center gap-3 lg:col-span-1">
          <Phone aria-hidden="true" className="h-4 w-4 text-muted" />
          <span className="text-sm font-medium group-hover:text-accent">{profile.phone}</span>
        </a>
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <SocialIcon label={social.label} className="h-4 w-4 text-muted group-hover:text-accent" />
            <span className="text-sm">
              <span className="font-medium group-hover:text-accent">{social.label}</span>
              <span className="ml-2 font-mono text-xs text-muted">{social.handle}</span>
            </span>
          </a>
        ))}
      </div>
    </Reveal>
  </section>
);

export default Contact;
