import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, PhoneCall } from 'lucide-react';

const MotionSection = motion.section;

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/labhanshu03',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/labhanshu/',
    icon: Linkedin,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/labhanshu/',
    icon: Code2,
  },
];

const ContactSection = () => {
  return (
    <MotionSection
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-8 shadow-glow sm:p-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
            Contact
          </p>
          <h3 className="mt-3 font-display text-3xl text-white">
            Let’s build something remarkable
          </h3>
          <p className="mt-2 max-w-xl text-slate-200">
            Whether it’s a real-time collaboration suite, a blazing-fast SaaS
            dashboard, or an intelligent assistant, I’m ready to help shape it
            from prototype to production.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-white">
          <a
            href="mailto:labhgupta444@gmail.com"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/20 px-6 py-4 transition hover:border-white/60"
          >
            <Mail className="h-5 w-5 text-brand-highlight" />
            labhgupta444@gmail.com
          </a>
          <a
            href="tel:6261402252"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/20 px-6 py-4 transition hover:border-white/60"
          >
            <PhoneCall className="h-5 w-5 text-brand-highlight" />
            6261402252
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40"
            >
              <span className="rounded-xl bg-white/5 p-2 text-white transition group-hover:bg-white/20">
                <IconComponent className="h-5 w-5" />
              </span>
              {link.label}
            </a>
          );
        })}
      </div>
    </MotionSection>
  );
};

export default ContactSection;

