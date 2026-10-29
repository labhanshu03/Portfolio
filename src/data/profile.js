/**
 * @typedef {{ label: string, href: string, handle: string }} Social
 * @typedef {{ value: string, label: string }} Stat
 */

/** @type {Social[]} */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/labhanshu03', handle: 'labhanshu03' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/labhanshu/', handle: 'in/labhanshu' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/labhanshu/', handle: 'u/labhanshu' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/labhanshu1', handle: 'labhanshu1' },
];

export const profile = {
  name: 'Labhanshu Gupta',
  role: 'Software Engineer',
  location: 'Bengaluru, India',
  availability: 'Open to SDE-1, Full-Stack & Backend roles',
  tagline: 'Full-stack engineer — I build fast React frontends, distributed backends, real-time systems and AI-powered products.',
  summary:
    'Computer Science graduate from IIIT Bhopal (2026). Most recently an SDE Intern at Refold AI, shipping enterprise integrations and hardening job infrastructure for a workflow-automation platform serving 60M+ API calls a month.',
  email: 'labhgupta444@gmail.com',
  phone: '+91 62614 02252',
  phoneHref: 'tel:+916261402252',
  resumeUrl: '/Labhanshu_Gupta_Resume.pdf',
  /** @type {Stat[]} */
  stats: [
    { value: '2', label: 'SDE internships' },
    { value: '800+', label: 'DSA problems solved' },
    { value: '3★', label: 'CodeChef · 1644' },
    { value: '98.01', label: 'JEE Main percentile' },
  ],
};

export const education = {
  school: 'Indian Institute of Information Technology, Bhopal',
  degree: 'B.Tech, Computer Science and Engineering',
  period: 'Nov 2022 — May 2026',
  grade: 'CGPA 7.78 / 10',
  note: 'JEE Main 2022 — 98.01 percentile (AIR 17,979), top 2% of 1,000,000+ candidates.',
  // TODO: add relevant coursework, e.g. ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks']
  coursework: [],
};
