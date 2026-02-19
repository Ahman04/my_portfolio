import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/shiny-button-1'
import profileImage from './profile.jpg'
import apartmentImage from './apartment.webp'
import digitalLibraryImage from './digitallibrary.webp'
import autospareImage from './autospare.jpeg'
import myDukaImage from './Warehouse inventory management overview.png'
import synergyCircleImage from './Pasted image.png'
import bootcampPdf from './abdirahman-mohamed_certificate.pdf'
import diplomaPdf from './Strathmore DBIT.pdf'
import myCertificateImage from './mycerficate.webp'

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

const cvFileName =
  'Abdirahman_Mohamed_ IT Technical Support & Junior Software Developer_CV.docx'
const cvFilePath = `/${encodeURIComponent(cvFileName)}`
const cvOpenPath = cvFilePath
const contactFormAction = 'https://formspree.io/f/mwvqzldv'
const isContactFormConfigured = !contactFormAction.includes('your-form-id')
const whatsappNumber = '254700000000'
const whatsappMessage = encodeURIComponent(
  "Hi Abdirahman, I'd like to talk about a project.",
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const projects = [
  {
    title: 'The Synergy Circle - Event & Community Platform',
    role: 'Mobile-first web app (frontend)',
    description:
      'Built a mobile-first platform for communities to publish events, manage registrations, and grow engagement, including event discovery filters, detailed event pages, registration flow, shareable links, event-level SEO metadata, and a protected admin dashboard for event CRUD, featured events, attendance, and analytics.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Custom CSS system',
      'FastAPI architecture planned',
      'PostgreSQL architecture planned',
    ],
    github: 'https://github.com/Ahman04/synergy-circle-hub.git',
    demo: '',
    demoNote: 'Demo/repository available on request.',
    image: synergyCircleImage,
  },
  {
    title: 'MyDuka - Inventory and Reporting System',
    role: 'Team project (full-stack)',
    description:
      'Role-based inventory management web application built to replace manual stock tracking and improve procurement/payment visibility across merchant, admin, and clerk workflows.',
    tech: [
      'React',
      'Tailwind CSS',
      'FastAPI',
      'SQLAlchemy',
      'Alembic',
      'JWT Authentication',
      'SQLite (development)',
      'PostgreSQL-ready',
    ],
    github: 'https://github.com/Ahman04/MYDUKA.git',
    demo: 'https://myduka-virid.vercel.app/',
    demoNote: 'Team project — live demo and repository available.',
    image: myDukaImage,
  },
  {
    title: 'Apartment Management System',
    role: 'Solo project (end-to-end)',
    description:
      'Client-based full-stack web application built to replace manual Excel tracking with a digital system for managing rental properties and tenants.',
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/Ahman04/apartment-management-system',
    videoDemo: '/apartmentmanagement.webm',
    demo: '',
    demoNote: 'Client project — demo available on request.',
    image: apartmentImage,
  },
  {
    title: 'Digital Library Management System',
    role: 'Solo project (full stack)',
    description:
      'Role-based web application for managing books, categories, and borrowing workflows.',
    tech: ['React', 'Tailwind CSS', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/Ahman04/Digital-Library-Management-System',
    demo: 'https://digital-library-management-system-two.vercel.app/',
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
  { label: 'IT Technical Support', icon: '🛠️' },
  { label: 'Hardware & Software Setup', icon: '💻' },
  { label: 'System Administration Basics', icon: '⚙️' },
  { label: 'End-User Support', icon: '🤝' },
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
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-blob-cyan blur-[140px]" />
        <div className="absolute top-40 left-0 h-[28rem] w-[28rem] rounded-full bg-blob-indigo blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-blob-emerald blur-[180px]" />
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
    <section className="section-hero min-h-screen flex items-center px-6 py-24 relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <Motion.div {...fadeUp} className="space-y-8">
          <div>
            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight font-display"
            >
              Hi, I’m <span className="name-emphasis">Abdirahman</span> 👋
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 mt-4"
            >
              IT Technical Support &amp; Junior Software Developer
            </Motion.p>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-2xl">
            I build practical full-stack web applications and provide
            entry-level IT technical support, including network
            troubleshooting, system setup, and end-user assistance. I enjoy
            solving real problems and improving through hands-on projects and
            feedback.
          </p>

          <div className="flex flex-wrap gap-4">
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href="#projects">View Projects</GlowButton>
            </Motion.div>
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href="https://github.com/Ahman04" target="_blank" rel="noopener noreferrer">
                GitHub
              </GlowButton>
            </Motion.div>
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Let&apos;s Talk
              </GlowButton>
            </Motion.div>
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href={cvOpenPath} target="_blank" rel="noopener noreferrer">
                Open CV
              </GlowButton>
            </Motion.div>
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href={cvFilePath} download={cvFileName}>
                Download CV
              </GlowButton>
            </Motion.div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <Motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[28px] border border-cyan-400/40 bg-white/5 backdrop-blur" />
            <img
              src={profileImage}
              alt="Portrait of Abdirahman"
              className="h-80 w-80 md:h-96 md:w-96 rounded-[24px] object-cover object-top border border-white/30 shadow-2xl shadow-cyan-500/25 brightness-105 contrast-105 saturate-110"
              loading="eager"
            />
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="section-about py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <Motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.45 }}
              className="text-3xl md:text-4xl font-semibold font-display section-title"
            >
              About Me
            </Motion.h2>
            <p className="text-slate-300 leading-relaxed">
              Motivated junior professional with a Diploma in Business
              Information Technology from Strathmore University, completed
              Software Engineering Bootcamp training from Moringa School, and
              Artificial Intelligence Launchpad certification. Eager to
              contribute as an IT Technical Support partner while leveraging
              software development capabilities to support organizational
              technology needs and digital solutions. Committed to continuous
              learning and professional growth in a collaborative team
              environment.
            </p>

          </div>

          <div className="interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/20">
            <h3 className="text-lg font-semibold mb-4">Values & Focus</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Curious learner who grows through feedback</li>
              <li>• Clean, readable code and thoughtful UI</li>
              <li>• Practical solutions that help real users</li>
              <li>• User-focused IT support and reliable issue resolution</li>
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
      </Motion.div>
    </section>
  )
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section id="projects" className="section-projects py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.45 }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Projects
          </Motion.h2>
          <p className="text-slate-300">
            Selected work focused on practical, real-world impact.
          </p>
        </div>

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  )
}

function ProjectCard({
  title,
  role,
  description,
  tech,
  github,
  videoDemo,
  demo,
  demoNote,
  image,
}) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ rotateX: 2, rotateY: -2, y: -6 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-44">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              View on GitHub →
            </a>
          ) : (
            <span className="text-slate-300">Repository available on request.</span>
          )}
          {videoDemo ? (
            <a
              href={videoDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Watch Video Demo →
            </a>
          ) : demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-slate-300">{demoNote || 'Demo unavailable.'}</span>
          )}
        </div>
      </div>
    </Motion.div>
  )
}

/* ================= SKILLS ================= */

function Skills() {
  return (
    <section className="section-skills py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.45 }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Skills
          </Motion.h2>
          <p className="text-slate-300">
            A focused toolkit for building modern web applications.
          </p>
        </div>

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <SkillIcon key={skill.label} {...skill} />
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  )
}

function SkillIcon({ label, icon }) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-5 text-center shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>
      <p className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
        {label}
      </p>
    </Motion.div>
  )
}

/* ================= CERTIFICATES ================= */

function Certificates() {
  return (
    <section className="section-certificates py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.45 }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Certificates
          </Motion.h2>
          <p className="text-slate-300">
            Proof of learning and continuous growth.
          </p>
        </div>

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  )
}

function CertificateCard({ title, org, year, image, pdf }) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <img
        src={image}
        alt={`${title} certificate`}
        className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="p-6 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-slate-300">{org}</p>
        <p className="text-sm text-slate-300">{year}</p>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          View Certificate →
        </a>
      </div>
    </Motion.div>
  )
}

/* ================= EDUCATION ================= */

function Education() {
  return (
    <section className="section-education py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.45 }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Education
          </Motion.h2>
          <p className="text-slate-300">
            A solid foundation in software development and technology.
          </p>
        </div>

        <div className="space-y-6">
          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="interactive-card border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-semibold">
              Software Engineering Bootcamp — Moringa School
            </h3>
            <p className="text-slate-300">Completed 2026</p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.03 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="interactive-card border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-semibold">
              Artificial Intelligence (Part Time) — Moringa School
            </h3>
            <p className="text-slate-300">
              Completed December 18, 2025 (course ran Dec 1–18, 2025)
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="interactive-card border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="font-semibold">
              Diploma in Business Information Technology — Strathmore University
            </h3>
            <p className="text-slate-300">Completed December 2024</p>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  )
}

/* ================= CONTACT ================= */

function Contact() {
  const [submitStatus, setSubmitStatus] = useState('idle')

  async function handleContactSubmit(event) {
    event.preventDefault()
    setSubmitStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(contactFormAction, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (response.ok) {
        form.reset()
        setSubmitStatus('success')
        return
      }

      setSubmitStatus('error')
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section className="section-contact py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.45 }}
          className="text-3xl md:text-4xl font-semibold mb-3 font-display section-title"
        >
          Let’s Connect
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.06 }}
          viewport={{ once: true, amount: 0.45 }}
          className="text-slate-300 mb-10"
        >
          Send a quick message below or use the direct links.
        </Motion.p>

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <Motion.form
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            action={contactFormAction}
            method="POST"
            onSubmit={handleContactSubmit}
            whileHover={{ y: -4, scale: 1.005 }}
            className="interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
            </div>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-400">
                {isContactFormConfigured
                  ? 'Messages are sent securely via Formspree.'
                  : 'Set your Formspree form ID in App.jsx to enable submissions.'}
              </p>
              <GlowButton
                type="submit"
                className={!isContactFormConfigured || submitStatus === 'sending' ? 'opacity-50' : ''}
                disabled={!isContactFormConfigured || submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </GlowButton>
            </div>
            {submitStatus === 'success' ? (
              <p className="mt-3 text-sm text-emerald-300">Thanks! Your message has been sent.</p>
            ) : null}
            {submitStatus === 'error' ? (
              <p className="mt-3 text-sm text-rose-300">
                Sorry, something went wrong. Please try again.
              </p>
            ) : null}
          </Motion.form>
        </Motion.div>

        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6, scale: 1.01 }}
            href="mailto:m.abdirahmanmohamed.adan@gmail.com"
            className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              ✉️
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-sm text-slate-300">
              m.abdirahmanmohamed.adan@gmail.com
            </p>
          </Motion.a>

          <Motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6, scale: 1.01 }}
            href="https://www.linkedin.com/in/abdirahman-mohamed-9b4a5a396/"
            target="_blank"
            rel="noopener noreferrer"
            className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              in
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-slate-300">
              Connect with me professionally
            </p>
          </Motion.a>

          <Motion.a
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6, scale: 1.01 }}
            href="https://github.com/Ahman04"
            target="_blank"
            rel="noopener noreferrer"
            className="group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-left shadow-lg shadow-black/20 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
              ⌁
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-slate-300">Browse my code and projects</p>
          </Motion.a>
        </Motion.div>
      </Motion.div>
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
