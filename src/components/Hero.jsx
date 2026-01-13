import { motion } from 'framer-motion';

const MotionParagraph = motion.p;
const MotionHeading = motion.h1;
const MotionAnchor = motion.a;
const MotionDiv = motion.div;

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero-glow p-8 shadow-glow sm:p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-40" />

      <div className="relative grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <MotionParagraph
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm uppercase tracking-[0.4em] text-slate-300"
          >
            Full Stack Engineer
          </MotionParagraph>

          <MotionHeading
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Labhanshu Gupta
          </MotionHeading>

          <MotionParagraph
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg text-slate-200 sm:text-xl"
          >
            Full Stack Developer | MERN | Scalable Systems | Real-time Apps
          </MotionParagraph>

          <MotionParagraph
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-base text-slate-300"
          >
           I build cloud-native, production-grade MERN platforms with a focus on real-time systems, horizontal scalability, and performance engineering.
           Leveraging Docker, Redis, RabbitMQ, and AWS, I deliver sub-300ms APIs that scale to 1,000+ concurrent users, integrating payment pipelines and AI-powered services end-to-end.
          </MotionParagraph>

          <div className="flex flex-wrap gap-4 pt-4">
            <MotionAnchor
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-white"
            >
              View Featured Work
            </MotionAnchor>
            <MotionAnchor
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Let’s Collaborate
            </MotionAnchor>
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative rounded-3xl bg-card-glass p-8 shadow-card"
        >
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                Strengths
              </p>
              <ul className="mt-3 space-y-2 text-slate-100">
               <li> • Event-driven MERN systems with async workflows </li>
               <li> • Real-time collaboration using Socket.IO & Redis Pub/Sub </li>
               <li> • • Scalable React applications with centralized state </li>
               <li> • High-throughput Node.js APIs optimized for low latency </li>
               <li> • MongoDB systems optimized with indexing and caching </li>

              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                Currently building
              </p>
              <p className="mt-3 text-slate-100">
                Voice-first commerce, Socket.IO collaboration, and Gemini-powered
                assistants crafted end-to-end with the MERN stack.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;

