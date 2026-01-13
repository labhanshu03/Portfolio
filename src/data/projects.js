export const projects = [
  {
    id: 'echoroom',
    title: 'EchoRoom',
    shortDescription: 'Horizontally Scaled Real-Time Messaging System',
    longDescription:
      'A production-ready real-time group chat platform designed for horizontal scalability. Built with Socket.IO and Redis Pub/Sub to synchronize messages across multiple servers, supporting 1,000+ concurrent users with low-latency delivery. Dockerized services ensure consistent deployments, while efficient state management keeps conversations perfectly in sync.',
    url: 'https://echo-room-frontend1.onrender.com/auth',
    highlights: [
      'Socket.IO + Redis Pub/Sub',
      '1,000+ concurrent users',
      'Horizontal scaling',
      'Low-latency messaging',
      'Dockerized services'
    ],
  },
  {
    id: 'onecart',
    title: 'OneCart',
    shortDescription: 'Voice-Enabled E-Commerce Platform with Async Order Processing',
    longDescription:
      'A full-scale MERN e-commerce platform featuring voice-enabled shopping and asynchronous order workflows. Deployed on AWS EC2 with NGINX as a reverse proxy, the system uses RabbitMQ for background email processing and Razorpay for secure payments. Optimized React flows reduced navigation time while ensuring a reliable, production-grade checkout experience.',
    url: 'https://www.youtube.com/watch?v=xCxhdaigVmI',
    highlights: [
      'AWS EC2 + NGINX',
      'RabbitMQ async workflows',
      'Razorpay payment integration',
      'Voice-based shopping',
      'Production-grade MERN stack'
    ],
  },
  {
    id: 'jarvis',
    title: 'Jarvis',
    shortDescription: 'AI-Powered Task Automation Web App',
    longDescription:
      'Personalized virtual assistant built with the Gemini API that responds to voice prompts, launches websites, and surfaces contextual answers in milliseconds with clean MERN integrations.',
    url: 'https://virtualassistant-jqph.onrender.com/signin',
    highlights: [
      'Gemini API integration',
      'Voice-driven automation',
      'Sub-300ms responses',
      'Optimized API routing',
      'AI-powered task execution'
    ],
  },
];
