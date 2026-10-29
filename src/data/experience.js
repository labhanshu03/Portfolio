/**
 * Wrap a phrase in **double asterisks** to render it as a highlighted metric.
 * @typedef {{
 *   company: string,
 *   role: string,
 *   period: string,
 *   location: string,
 *   context: string,
 *   points: string[],
 *   stack: string[],
 * }} Role
 */

/** @type {Role[]} */
export const experience = [
  {
    company: 'Refold AI',
    role: 'SDE Intern — Integrations',
    period: 'Feb 2026 — Aug 2026',
    location: 'Bengaluru',
    context:
      'AI-powered workflow-automation platform handling 60M+ API calls a month. Worked directly with enterprise customers on integration requirements, auth troubleshooting and connector onboarding.',
    points: [
      'Built **10+ enterprise integrations** — Snowflake, ServiceNow, HubSpot, Salesforce and more — with OAuth 2.0 / API-key auth and webhook-based triggers; authored OpenAPI specs adopted across the integration ecosystem.',
      'Cut job failure rates by **40%** in a BullMQ fault-tolerant execution system spanning 6 microservices by fixing retry logic, dead-letter queue misconfigurations and race conditions.',
      'Engineered a Claude-powered migration tool for transformation logic across 214+ integrations; migrated **100 connectors** and reduced implementation effort by **90%**.',
      'Reduced action-discovery latency by **30%** across 200+ connectors — lazy loading and pagination in the Next.js frontend, plus Redis-backed, token-aware response caching on the API — validated with Prometheus metrics.',
      'Architected MongoDB connection pooling with LRU eviction across 4 service pods, preventing connection exhaustion at **1,000 concurrent users**.',
    ],
    stack: ['TypeScript', 'Node.js', 'Next.js', 'BullMQ', 'Redis', 'MongoDB', 'OAuth 2.0', 'OpenAPI', 'Prometheus'],
  },
  {
    company: 'Crystaltech Services',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2025 — Sep 2025',
    location: 'Indore',
    context: 'Production MERN systems, shipped alongside the core engineering team in an Agile/Scrum setup.',
    points: [
      'Shipped full-stack features across core user flows, contributing to a **15% lift** in user engagement.',
      'Delivered 10 REST APIs for auth, authorization and real-time data pipelines; MongoDB query optimisation cut average latency from **250ms to 150ms**.',
      'Moved slow work onto RabbitMQ for non-blocking processing, reducing API response times by **20%**; React + Redux lazy loading cut initial page load by **25%**.',
      'Ran **40+ code reviews**, catching 60+ issues before they reached production.',
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'RabbitMQ'],
  },
];
