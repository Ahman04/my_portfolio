import { motion } from 'framer-motion'
import profileImage from './profile.jpg'
import apartmentImage from './apartment.png'
import digitalLibraryImage from './digitallibrary.png'
import autospareImage from './autospare.jpeg'
import bootcampImage from './bootcamp.jpg'
import diplomaImage from './diploma.jpg'
import bootcampPdf from './abdirahman-mohamed_certificate.pdf'
import diplomaPdf from './Strathmore DBIT.pdf'
import myCertificateImage from './mycerficate.png'

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
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/Ahman04/apartment-management-system',
    demo: '#',
    image: apartmentImage,
  },
  {
    title: 'Digital Library Management System',
    role: 'Solo project (full stack)',
    description:
      'Role-based web application for managing books, categories, and borrowing workflows.',
    tech: ['React', 'Tailwind CSS', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/Ahman04/Digital-Library-Management-System',
    demo: '#',
    image: digitalLibraryImage,
  },
  {
    title: 'AutoSpare Hub',
    role: 'Solo project (frontend)',
    description:
      'Single-page web application simulating an online spare parts store.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Ahman04/Autospare-hub',
    demo: 'https://autospare-hub-indol.vercel.app/',
    image: autospareImage,
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
    image: myCertificateImage,
    pdf: bootcampPdf,
  },
  {
    title: 'Diploma in Business Information Technology',
    org: 'Strathmore University',
    year: '2024',
    image: myCertificateImage,
    pdf: diplomaPdf,
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
      <About />
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
              className="h-72 w-72 md:h-80 md:w-80 rounded-[24px] object-cover object-top border border-white/30 shadow-2xl shadow-cyan-500/25 brightness-105 contrast-105 saturate-110"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="py-24 px-6">
      <motion.div {...fadeUp} className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold font-display">
              About Me
            </h2>
            <p className="text-slate-300 leading-relaxed">
              I’m a junior software developer who enjoys building practical,
              user-focused web applications. I like learning by doing — turning
              ideas into working features, refining UI details, and improving
              performance as I go.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I’m most comfortable with Python, React, and PostgreSQL, and I’m
              always expanding my skills through projects and feedback. I value
              clear communication, curiosity, and steady growth.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Right now, I’m learning more about clean architecture, testing
              practices, and how to ship products that feel smooth and reliable.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/20">
            <h3 className="text-lg font-semibold mb-4">Values & Focus</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Curious learner who grows through feedback</li>
              <li>• Clean, readable code and thoughtful UI</li>
              <li>• Practical solutions that help real users</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'React', 'PostgreSQL', 'APIs', 'Testing'].map((tag) => (
                <span
                  key={tag}
                  className="chip-sheen rounded-full px-3 py-1 text-xs font-medium text-slate-200 bg-white/10 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
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

function ProjectCard({ title, role, description, tech, github, demo, image }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ rotateX: 2, rotateY: -2, y: -6 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-44">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        <div className="absolute left-5 bottom-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs text-slate-300">{role}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="chip-sheen rounded-full px-3 py-1 text-xs font-medium text-slate-200 bg-white/10 border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
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

function CertificateCard({ title, org, year, image, pdf }) {
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
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          View Certificate →
        </a>
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
      <motion.div {...fadeUp} className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 font-display">
          Let’s Connect
        </h2>
        <p className="text-slate-300 mb-10">
          Prefer quick contact? Pick a card below and I’ll respond fast.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            href="mailto:m.abdirahmanmohmaed.adan@gmail.com"
            className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              ✉️
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-sm text-slate-300">
              m.abdirahmanmohmaed.adan@gmail.com
            </p>
          </motion.a>

          <motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            href="https://www.linkedin.com/in/abdirahman-mohamed-9b4a5a396/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              in
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-slate-300">
              Connect with me professionally
            </p>
          </motion.a>

          <motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            href="https://github.com/Ahman04"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              ⌁
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-slate-300">Browse my code and projects</p>
          </motion.a>
        </motion.div>
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
