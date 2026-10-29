/**
 * @typedef {{ live?: string, github?: string, video?: string }} ProjectLinks
 * A diagram is one or more flows. A layer shows either a row of `nodes`, or `branches`:
 * services the layer above connects to directly and in parallel. `edge` labels the link
 * from the layer above.
 * @typedef {{ name: string, note: string }} DiagramBranch
 * @typedef {{ label: string, edge?: string, nodes?: string[], branches?: DiagramBranch[] }} DiagramLayer
 * @typedef {{ title: string, layers: DiagramLayer[], note?: string }} DiagramFlow
 * @typedef {{
 *   id: string,
 *   name: string,
 *   tagline: string,
 *   problem: string,
 *   built: string[],
 *   metrics: { value: string, label: string }[],
 *   stack: string[],
 *   links: ProjectLinks,
 *   diagram: DiagramFlow[],
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
      'Messages are grouped into conversation chunks and indexed asynchronously — a BullMQ worker hands closed chunks to a Python/FastAPI RAG service that embeds them locally (MiniLM) into MongoDB Atlas.',
      'RAG assistant answers questions about conversation history using Atlas Vector Search and a local Ollama LLM, with per-conversation access checks via internal JWTs.',
      'Prometheus + Grafana dashboards to measure latency and connection load.',
    ],
    metrics: [
      { value: '1,000+', label: 'concurrent users' },
      { value: '<100ms', label: 'P95 latency' },
      { value: '4+', label: 'distributed nodes' },
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'Socket.IO', 'Redis Pub/Sub', 'BullMQ', 'MongoDB Atlas', 'Python', 'FastAPI', 'Ollama', 'NGINX', 'Docker', 'Grafana'],
    links: {
      live: 'https://echo-room-frontend1.onrender.com/auth',
      github: 'https://github.com/labhanshu03/Echo-room',
    },
    diagram: [
      {
        title: 'Real-time messaging',
        layers: [
          { label: 'Clients · React + Zustand', nodes: ['Client', 'Client', 'Client'] },
          { label: 'Load balancer', edge: 'WebSocket', nodes: ['NGINX'] },
          { label: 'Socket.IO + Express nodes', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4'] },
          {
            label: 'On each message, a node',
            branches: [
              { name: 'MongoDB', note: 'saves message, appends to chunk' },
              { name: 'Redis Pub/Sub', note: 'fans out to every node' },
              { name: 'BullMQ', note: 'schedules chunk job' },
            ],
          },
        ],
        note: 'Every node subscribes to Redis and pushes the message to the sockets it holds.',
      },
      {
        title: 'RAG indexing & search',
        layers: [
          { label: 'Queue · on Redis', nodes: ['BullMQ'] },
          { label: 'Worker', edge: 'chunk closes', nodes: ['Chunk worker'] },
          { label: 'AI service', edge: 'POST /process-chunk', nodes: ['RAG · FastAPI'] },
          {
            label: 'RAG service uses',
            branches: [
              { name: 'MiniLM', note: 'local embeddings' },
              { name: 'Atlas', note: 'vectors + topics' },
              { name: 'Ollama', note: 'local LLM' },
            ],
          },
        ],
        note: 'A chunk closes after 15 messages or 10 idle minutes. Questions go node → RAG /query (internal JWT) → vector search → Ollama.',
      },
    ],
  },
  {
    id: 'onecart',
    name: 'OneCart',
    tagline: 'Event-driven e-commerce with async pipelines and secure payments',
    problem:
      'Doing slow side-effects like order emails inside the checkout request makes checkout slower under load, and leaves failures with nowhere to go.',
    built: [
      'RabbitMQ pipeline for order-confirmation emails: a direct exchange routes order.created events to a dedicated email worker, with a dead-letter queue catching failed sends — all off the checkout path.',
      'Razorpay integration covering order creation, server-side payment verification and failure states.',
      'React storefront and admin panel, plus hands-free voice shopping via the Web Speech API.',
      'Deployed on AWS EC2 with Docker Compose, NGINX routing the storefront, admin panel and API.',
    ],
    metrics: [
      { value: '35%', label: 'faster checkout under load' },
      { value: '1,000+', label: 'payments handled' },
      { value: 'EC2', label: 'Dockerised on AWS' },
    ],
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'RabbitMQ', 'Razorpay', 'Cloudinary', 'Docker Compose', 'NGINX', 'AWS EC2'],
    links: {
      live: 'https://one-cart-frontendtwo.onrender.com/',
      github: 'https://github.com/labhanshu03/One_Cart',
      video: 'https://www.youtube.com/watch?v=xCxhdaigVmI',
    },
    diagram: [
      {
        title: 'Request routing · AWS EC2',
        layers: [
          { label: 'Browser', nodes: ['Shopper / Admin'] },
          { label: 'Reverse proxy', edge: 'HTTP', nodes: ['NGINX'] },
          {
            label: 'Routes by path',
            branches: [
              { name: 'Storefront', note: '/' },
              { name: 'Admin panel', note: '/admin' },
              { name: 'Express API', note: '/api' },
            ],
          },
        ],
      },
      {
        title: 'Checkout & async email',
        layers: [
          { label: 'Backend', nodes: ['Express API'] },
          {
            label: 'API connects to',
            branches: [
              { name: 'MongoDB', note: 'users, products, orders' },
              { name: 'Razorpay', note: 'create & verify payment' },
              { name: 'RabbitMQ', note: 'publishes order.created' },
            ],
          },
        ],
      },
      {
        title: 'Email pipeline',
        layers: [
          { label: 'Direct exchange', nodes: ['order.direct'] },
          { label: 'Queue', edge: 'order.created', nodes: ['email.queue'] },
          {
            label: 'Each message is',
            branches: [
              { name: 'Email worker', note: 'sent via SMTP, then acked' },
              { name: 'email.dlq', note: 'on failure, via email.dlx' },
            ],
          },
        ],
      },
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
      'Voice-driven assistant built on the Gemini API — answers questions, searches Google and YouTube, opens websites and fetches the weather from spoken commands.',
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
