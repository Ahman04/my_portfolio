import { motion } from 'framer-motion'
import profileImage from './profile.jpg'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 },
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const projects = [
  {
    title: 'Apartment Management System',
    role: 'Solo project (end-to-end)',
    description:
      'Client-based full-stack web application built to replace manual Excel tracking with a digital system for managing rental properties and tenants.',
    tech: 'React, Tailwind CSS, FastAPI, PostgreSQL',
    github: 'https://github.com/Ahman04/apartment-management-system',
    demo: '#',
  },
  {
    title: 'Digital Library Management System',
    role: 'Solo project (full stack)',
    description:
      'Role-based web application for managing books, categories, and borrowing workflows.',
    tech: 'React, Tailwind CSS, Flask, PostgreSQL',
    github: 'https://github.com/Ahman04/Digital-Library-Management-System',
    demo: '#',
  },
  {
    title: 'AutoSpare Hub',
    role: 'Solo project (frontend)',
    description:
      'Single-page web application simulating an online spare parts store.',
    tech: 'React, JavaScript, CSS',
    github: 'https://github.com/Ahman04/Autospare-hub',
    demo: '#',
  },
]

const skills = [
  { label: 'React', icon: '⚛️' },
  { label: 'HTML5', icon: '📄' },
  { label: 'CSS3', icon: '🎨' },
  { label: 'Tailwind', icon: '🌬️' },
  { label: 'Python', icon: '🐍' },
  { label: 'FastAPI', icon: '⚡' },
  { label: 'Flask', icon: '🧪' },
  { label: 'PostgreSQL', icon: '🗄️' },
  { label: 'SQLAlchemy', icon: '🔗' },
  { label: 'Git & GitHub', icon: '🧭' },
  { label: 'REST APIs', icon: '🛰️' },
  { label: 'JWT Auth', icon: '🔐' },
  { label: 'Responsive UI', icon: '📱' },
  { label: 'TensorFlow', icon: '🧠' },
  { label: 'PyTorch', icon: '🔥' },
  { label: 'Scikit-learn', icon: '🧩' },
]

const certificates = [
  {
    title: 'Software Engineering Bootcamp',
    org: 'Moringa School',
    year: '2024',
    image: '/certificates/moringa-bootcamp.jpg',
  },
  {
    title: 'Diploma in Business Information Technology',
    org: 'Strathmore University',
    year: '2024',
    image: '/certificates/strathmore-dbit.jpg',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute top-40 left-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-[180px]" />
      </div>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24 relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div {...fadeUp} className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight font-display">
              Hi, I’m Abdirahman 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mt-4">
              Junior Software Developer
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-2xl">
            I build practical full-stack web applications using Python, React,
            and PostgreSQL. I enjoy learning new technologies, solving real
            problems, and improving through hands-on projects and feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Ahman04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/15 text-slate-100 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="/Abdirahman_Mohamed_CV.docx"
              className="px-6 py-3 rounded-lg border border-white/15 text-slate-100 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[28px] border border-cyan-400/40 bg-white/5 backdrop-blur" />
            <img
              src={profileImage}
              alt="Portrait of Abdirahman"
              className="h-72 w-72 md:h-80 md:w-80 rounded-[24px] object-cover border border-white/20 shadow-2xl shadow-cyan-500/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold font-display">
            Projects
          </h2>
          <p className="text-slate-300">
            Selected work focused on practical, real-world impact.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function ProjectCard({ title, role, description, tech, github, demo }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-slate-300 mb-3">{role}</p>
      <p className="text-slate-300 mb-4">{description}</p>
      <p className="text-sm text-slate-300 mb-6">
        <strong className="text-slate-100">Tech:</strong> {tech}
      </p>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          View on GitHub →
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          Live Demo →
        </a>
      </div>
    </motion.div>
  )
}

/* ================= SKILLS ================= */

function Skills() {
  return (
    <section className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold font-display">
            Skills
          </h2>
          <p className="text-slate-300">
            A focused toolkit for building modern web applications.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <SkillIcon key={skill.label} {...skill} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function SkillIcon({ label, icon }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-5 text-center shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
        {icon}
      </div>
      <p className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
        {label}
      </p>
    </motion.div>
  )
}

/* ================= CERTIFICATES ================= */

function Certificates() {
  return (
    <section className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold font-display">
            Certificates
          </h2>
          <p className="text-slate-300">
            Proof of learning and continuous growth.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function CertificateCard({ title, org, year, image }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <img
        src={image}
        alt={`${title} certificate`}
        className="h-52 w-full object-cover"
      />
      <div className="p-6 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-slate-300">{org}</p>
        <p className="text-sm text-slate-300">{year}</p>
      </div>
    </motion.div>
  )
}

/* ================= EDUCATION ================= */

function Education() {
  return (
    <section className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold font-display">
            Education
          </h2>
          <p className="text-slate-300">
            A solid foundation in software development and technology.
          </p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-semibold">
              Software Engineering Bootcamp — Moringa School
            </h3>
            <p className="text-slate-300">2024 – Present</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-semibold">
              Diploma in Business Information Technology — Strathmore University
            </h3>
            <p className="text-slate-300">Completed December 2024</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-display">
          Contact
        </h2>

        <p className="text-slate-300 mb-8">
          I’m open to internships, junior roles, and learning opportunities.
          Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:m.abdirahmanmohmaed.adan@gmail.com"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 font-semibold hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/abdirahman-mohamed-9b4a5a396/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/15 text-slate-100 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-400 border-t border-white/10">
      © {new Date().getFullYear()} Abdirahman Mohamed
    </footer>
  )
}

export default App
