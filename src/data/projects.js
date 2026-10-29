/**
 * @typedef {{ live?: string, github?: string, video?: string }} ProjectLinks
 * @typedef {{ label: string, nodes: string[] }} DiagramLayer
 * @typedef {{
 *   id: string,
 *   name: string,
 *   tagline: string,
 *   problem: string,
 *   built: string[],
 *   metrics: { value: string, label: string }[],
 *   stack: string[],
 *   links: ProjectLinks,
 *   diagram: DiagramLayer[],
 *   image?: { src: string, alt: string, width: number, height: number },
 * }} FeaturedProject
 * @typedef {{ name: string, summary: string, stack: string[], links: ProjectLinks }} SmallProject
 */

/** @type {FeaturedProject[]} */
export const featuredProjects = [
  {
    id: 'echoroom',
    name: 'EchoRoom',
    tagline: 'Horizontally scaled real-time messaging with a RAG assistant',
    problem:
      'Socket servers are stateful. Once chat runs on more than one node, users connected to different instances stop seeing each other — the “siloed socket” problem.',
    built: [
      'Redis Pub/Sub fan-out that synchronises real-time events across 4+ horizontally scaled Socket.IO nodes.',
      'React + Zustand client keeping 1,000+ WebSocket connections in sync, with group chats and file/image sharing.',
      'RAG assistant on a self-hosted Python/FastAPI service with local embeddings and Ollama, so users can query conversation history in plain language.',
      'Prometheus + Grafana dashboards to measure latency and connection load.',
    ],
    metrics: [
      { value: '1,000+', label: 'concurrent users' },
      { value: '<100ms', label: 'P95 latency' },
      { value: '4+', label: 'distributed nodes' },
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'Socket.IO', 'Redis Pub/Sub', 'MongoDB', 'Python', 'FastAPI', 'Docker', 'Grafana'],
    links: {
      live: 'https://echo-room-frontend1.onrender.com/auth',
      github: 'https://github.com/labhanshu03/Echo-room',
    },
    diagram: [
      { label: 'Clients · React + Zustand', nodes: ['Client', 'Client', 'Client'] },
      { label: 'Socket.IO cluster', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4'] },
      { label: 'Event bus', nodes: ['Redis Pub/Sub'] },
      { label: 'Data + AI', nodes: ['MongoDB', 'RAG · FastAPI + Ollama'] },
    ],
  },
  {
    id: 'onecart',
    name: 'OneCart',
    tagline: 'Event-driven e-commerce with async pipelines and secure payments',
    problem:
      'Doing slow side-effects like order emails inside the checkout request makes checkout slower under load, and leaves failures with nowhere to go.',
    built: [
      'RabbitMQ pipeline for order-confirmation emails with failure handling and retries, taking that work off the checkout path.',
      'Razorpay integration covering order creation, signature verification and failure states.',
      'React storefront and admin panel, plus hands-free voice shopping via the Web Speech API.',
      'Deployed on AWS EC2 behind NGINX with Docker Compose; covered with Jest tests.',
    ],
    metrics: [
      { value: '35%', label: 'faster checkout under load' },
      { value: '1,000+', label: 'payments handled' },
      { value: 'EC2', label: 'Dockerised on AWS' },
    ],
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'RabbitMQ', 'Razorpay', 'Docker Compose', 'NGINX', 'AWS EC2', 'Jest'],
    links: {
      live: 'https://one-cart-frontendtwo.onrender.com/',
      github: 'https://github.com/labhanshu03/One_Cart',
      video: 'https://www.youtube.com/watch?v=xCxhdaigVmI',
    },
    diagram: [
      { label: 'Frontends', nodes: ['Storefront', 'Admin panel'] },
      { label: 'Edge · AWS EC2', nodes: ['NGINX'] },
      { label: 'Services', nodes: ['Express API', 'Razorpay'] },
      { label: 'Async', nodes: ['RabbitMQ → Email worker'] },
    ],
  },
];

/** @type {SmallProject[]} */
export const moreProjects = [
  {
    name: 'FinBoard',
    summary:
      'Configurable finance dashboard — cards, charts and tables fed by multiple market APIs through an adapter layer that normalises responses. Layout persists across sessions.',
    stack: ['Next.js', 'Adapters', 'Charts'],
    links: {
      live: 'https://groww-finboard-gray.vercel.app/dashboard/main',
      github: 'https://github.com/labhanshu03/FinBoard',
    },
  },
  {
    name: 'ResumeAlign AI',
    summary:
      'LLM-powered tool that scores a resume against a job description, improves ATS alignment and generates interview questions from the skill gaps it finds.',
    stack: ['LLM', 'Prompting', 'Full-stack'],
    links: { github: 'https://github.com/labhanshu03/ResumeAlign-AI' },
  },
  {
    name: 'Jarvis',
    summary:
      'Voice-driven assistant built on the Gemini API — answers questions, searches Google and YouTube, opens apps and fetches the weather from spoken commands.',
    stack: ['MERN', 'Gemini API', 'Web Speech'],
    links: {
      live: 'https://virtualassistant-jqph.onrender.com/signin',
      github: 'https://github.com/labhanshu03/Jarvis',
    },
  },
];

export const openSource = {
  project: 'Helixque',
  description:
    'Real-time video chat that pairs people by their preferences — WebRTC for peer-to-peer media, Socket.IO for signalling.',
  contribution:
    'Built the emoji picker with debounced search, now used by **1,000+ daily active users**.',
  stack: ['React', 'WebRTC', 'Socket.IO'],
  links: {
    live: 'https://helixque-changes.netlify.app/',
    github: 'https://github.com/labhanshu03/Helixque',
  },
  note: 'Also a Hacktoberfest contributor.',
};
