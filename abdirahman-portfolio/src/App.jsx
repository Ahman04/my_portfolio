import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/shiny-button-1'
import SiteHeader from '@/components/SiteHeader'
import {
  contactFormAction,
  cvFileName,
  cvFilePath,
  cvOpenPath,
  isContactFormConfigured,
  portfolioNavigation,
  portfolioWhatsAppUrl,
  whatsappDisplay,
} from '@/config/site'
import profileImage from './me.webp'
import profileImageSmall from './me-1280.webp'
import apartmentImage from './apartment.webp'
import digitalLibraryImage from './digitallibrary.webp'
import autospareImage from './autospare.jpeg'
import myDukaImage from './Warehouse inventory management overview.webp'
import synergyCircleImage from './Pasted image.webp'
import globeVistaImage from './hero section.webp'
import gdaImage from './About.webp'
import pyramidBuildersImage from './Pyramid Builders.webp'
import caravanCafeImage from './caravan cafe.webp'
import salbaGroupImage from './salba-office-about.webp'
import bootcampPdf from './abdirahman-mohamed_certificate.pdf'
import diplomaPdf from './Strathmore DBIT.pdf'
import myCertificateImage from './mycerficate.webp'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
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
    title: 'Salba Group Real Estate Website',
    role: 'Client project · Full-Stack Developer & UI/UX Designer',
    description:
      'Responsive real estate platform that replaced manual property sharing with searchable listings, viewing bookings, inquiries, WhatsApp contact, and secure admin workflows for properties, media, and lead tracking.',
    tech: [
      'Next.js 16',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase Database',
      'Supabase Storage',
      'Supabase Auth',
      'Zod',
      'React Hook Form',
      'Nginx',
      'Ubuntu VPS',
      'GitHub',
      'Let’s Encrypt SSL',
      'SEO & Sitemap',
      'Google Search Integration',
    ],
    github: 'https://github.com/Ahman04/salba-real-estate-website',
    demo: 'https://salbagroup.com',
    demoNote: 'Live client project.',
    status: 'Live',
    image: salbaGroupImage,
  },
  {
    title: 'Go Digital Africa Website',
    role: 'Solo project (frontend implementation)',
    description:
      'Corporate marketing website built for a digital transformation and marketing agency, with multilingual support, animated product and service showcases, lead capture flows, and a polished responsive user experience.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'Google Translate Integration',
    ],
    github: 'https://github.com/Ahman04/GDA.git',
    demo: 'https://gda-iota.vercel.app/#',
    demoNote: 'Live demo and repository available.',
    image: gdaImage,
  },
  {
    title: 'Apartment Management System',
    role: 'Solo project (end-to-end)',
    description:
      'Client-based full-stack web application built to replace manual Excel tracking with a digital system for managing rental properties and tenants.',
    tech: [
      'React',
      'Tailwind CSS',
      'FastAPI',
      'PostgreSQL',
      'DigitalOcean Deployment',
      'Namecheap Domain',
    ],
    github: 'https://github.com/Ahman04/apartment-management-system',
    videoDemo: '/apartmentmanagement.webm',
    demo: '',
    demoNote: 'Client project — demo available on request.',
    image: apartmentImage,
  },
  {
    title: 'Pyramid Builders - Premium Real Estate Website',
    role: 'Solo project (frontend)',
    description:
      'Luxury real estate website for a Nairobi developer, featuring cinematic project showcases, animated galleries, enquiry flows, and a polished investor-facing experience.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'Swiper.js',
      'Property Gallery & Project Pages',
      'Admin Dashboard UI',
    ],
    github: 'https://github.com/Ahman04/pyramid-vision.git',
    demo: 'https://pyramid-builders.vercel.app/',
    demoNote: 'Live demo and repository available.',
    image: pyramidBuildersImage,
  },
  {
    title: 'Caravan Cafe Restaurant Website',
    role: 'Solo project (frontend)',
    description:
      'Restaurant website with a polished hospitality brand experience, animated menu and gallery sections, reservation flows, and a responsive interface for desktop and mobile.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'React Router',
    ],
    github: 'https://github.com/Ahman04/caravan-cafe-showcase.git',
    demo: 'https://caravan-cafe-254.vercel.app/',
    demoNote: 'Live demo and repository available.',
    image: caravanCafeImage,
  },
  {
    title: 'GLOBEVISTA Adventure Ltd Website',
    role: 'Frontend Developer - Marketing/Corporate Website (frontend-only)',
    description:
      'Premium multi-page corporate travel and team-building website built for a Nairobi-based company to present services, approach, testimonials, gallery, and contact details with a polished black-gold brand system.',
    tech: [
      'React (Vite + TypeScript)',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
      'shadcn/ui (customized primitives)',
      'Radix UI',
      'Sonner Toast',
      'Lucide Icons',
      'Responsive Design',
      'Vercel Deployment',
    ],
    github: 'https://github.com/Ahman04/globevista-website.git',
    demo: 'https://globevista-website.vercel.app/',
    demoNote: 'Live demo available.',
    image: globeVistaImage,
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
    demo: 'https://synergy-circle-hub.vercel.app/',
    demoNote: 'Live demo and repository available.',
    image: synergyCircleImage,
  },
]

const skills = [
  { label: 'React', icon: '⚛️' },
  { label: 'AI', icon: '🤖' },
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
    title: 'Artificial Intelligence',
    org: 'Moringa School',
    year: '1st December 2025 – 18th December 2025',
    image: myCertificateImage,
    pdf: bootcampPdf,
  },
  {
    title: 'Software Engineering Bootcamp',
    org: 'Moringa School',
    year: 'Completed',
    image: myCertificateImage,
    note: 'Completed - certificate not received yet.',
  },
  {
    title: 'Diploma in Business Information Technology',
    org: 'Strathmore University',
    year: '2024',
    image: myCertificateImage,
    pdf: diplomaPdf,
  },
]

const experiences = [
  {
    role: 'IT Manager',
    company: 'Alta Wings Aviation',
    location: 'Nairobi, Kenya',
    period: 'June 2026 — Present',
    description:
      'Manage the company’s IT systems, digital platforms, aviation software, and technical support operations.',
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    location: 'Nairobi, Kenya',
    description:
      'Design and develop responsive websites and business systems for real clients.',
  },
  {
    role: 'Software Development Projects',
    company: 'Independent Projects',
    description:
      'Developed practical web applications that solve business and user problems.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-blob-cyan blur-[140px]" />
        <div className="absolute top-40 left-0 h-[28rem] w-[28rem] rounded-full bg-blob-indigo blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-blob-emerald blur-[180px]" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <SiteHeader
      navigation={portfolioNavigation}
      brandHref="#home"
      brandLabel="Abdirahman Mohamed — home"
      ctaHref={cvOpenPath}
      ctaLabel="View CV"
      ctaTarget="_blank"
    />
  )
}

/* ================= EXPERIENCE ================= */

function Experience() {
  return (
    <section id="experience" className="section-experience py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="section-eyebrow">02 · Experience</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Professional Experience
          </Motion.h2>
          <p className="text-slate-300">
            Technical leadership, client work, and practical software development.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="experience-card"
            >
              <div className="experience-card__heading">
                <span className="experience-card__number">0{index + 1}</span>
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
              <div className="experience-card__details">
                {(experience.period || experience.location) ? (
                  <p className="experience-card__meta">
                    {experience.period}
                    {experience.period && experience.location ? <span aria-hidden="true"> · </span> : null}
                    {experience.location}
                  </p>
                ) : null}
                <p>{experience.description}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </section>
  )
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section id="home" className="section-hero min-h-screen flex items-center px-6 py-28 relative">
      <img
        src={profileImage}
        srcSet={`${profileImageSmall} 1280w, ${profileImage} 1672w`}
        sizes="100vw"
        alt="Abdirahman Mohamed in a modern office"
        width="1672"
        height="941"
        className="hero-background-image"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero-background-overlay" aria-hidden="true" />
      <div className="hero-side-note" aria-hidden="true">
        <span>Portfolio</span>
        <span className="hero-side-note__line" />
        <span>2026</span>
      </div>
      <div className="hero-content max-w-[84rem] mx-auto w-full">
        <div className="w-full max-w-3xl space-y-8">
          <div>
            <p className="hero-kicker">
              <span className="status-dot" aria-hidden="true" />
              Software Engineer · Nairobi, Kenya
            </p>
            <h1 className="hero-title text-4xl md:text-6xl font-semibold tracking-tight font-display">
              Building practical <span className="name-emphasis">digital products</span> that make a difference.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mt-5">
              Hi, I’m Abdirahman — a full-stack developer turning business needs
              into useful, reliable digital products.
            </p>
          </div>

          <p className="hero-summary text-slate-300 leading-relaxed max-w-2xl">
            From polished React interfaces to secure Python APIs and PostgreSQL
            systems, I build complete web experiences designed around real users.
          </p>

          <div className="hero-focus" aria-label="Core development focus">
            <div>
              <span>01</span>
              <p>Frontend experiences</p>
            </div>
            <div>
              <span>02</span>
              <p>Backend systems</p>
            </div>
            <div>
              <span>03</span>
              <p>Business solutions</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton href="#projects">View Projects</GlowButton>
            </Motion.div>
            <Motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <GlowButton variant="secondary" href={portfolioWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                Let&apos;s Talk
              </GlowButton>
            </Motion.div>
          </div>
          <div className="hero-links" aria-label="Additional profile links">
            <a href="https://github.com/Ahman04" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={cvFilePath} download={cvFileName}>Download CV ↓</a>
            <a href="/freelance">Freelance Services ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section id="about" className="section-about py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
          <p className="section-eyebrow">01 · About</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            About Me
            </Motion.h2>
            <p className="text-slate-300 leading-relaxed">
              I’m Abdirahman Mohamed, a passionate Software Engineer with a
              strong focus on building practical, user-centered web
              applications. I specialize in developing full-stack solutions
              that solve real-world problems using modern technologies.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My experience includes working with React, Tailwind CSS, FastAPI,
              SQLAlchemy, PostgreSQL, and JWT authentication to build scalable,
              secure systems. I enjoy turning complex requirements into clean,
              intuitive interfaces backed by reliable APIs.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Beyond coding, I’m deeply interested in AI-driven solutions,
              automation, and continuous learning. I’m currently growing my
              skills through hands-on projects and real client work, with the
              goal of contributing to impactful products and innovative teams.
            </p>

          </div>

          <div className="interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/20">
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
      </Motion.div>
    </section>
  )
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section id="projects" className="section-projects py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-[84rem] mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="section-eyebrow">03 · Selected work</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold font-display section-title"
          >
            Projects
          </Motion.h2>
          <p className="text-slate-300">
            Selected work focused on practical, real-world impact.
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
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
  status,
  image,
}) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="project-card group interactive-card border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-44">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black transition-transform duration-500 ease-out group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        {status ? <span className="project-status">{status}</span> : null}
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
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
    <section id="skills" className="section-skills py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="section-eyebrow">04 · Capabilities</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
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
          animate="show"
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
    <section id="certificates" className="section-certificates py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="section-eyebrow">05 · Credentials</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
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
          animate="show"
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

function CertificateCard({ title, org, year, image, pdf, note }) {
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
        {pdf ? (
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            View Certificate →
          </a>
        ) : (
          <p className="text-sm text-slate-300">{note || 'Certificate pending.'}</p>
        )}
      </div>
    </Motion.div>
  )
}

/* ================= EDUCATION ================= */

function Education() {
  return (
    <section id="education" className="section-education py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="section-eyebrow">06 · Education</p>
          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.03 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
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
    <section id="contact" className="section-contact py-24 px-6">
      <Motion.div {...fadeUp} className="max-w-6xl mx-auto">
        <p className="section-eyebrow">07 · Contact</p>
        <Motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-semibold mb-3 font-display section-title"
        >
          Let’s Connect
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.06 }}
          className="text-slate-300 mb-10"
        >
          Send a quick message below or use the direct links.
        </Motion.p>

        <Motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
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
                aria-label="Your name"
                className="rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                aria-label="Your email"
                className="rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
            </div>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project..."
              aria-label="Your message"
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
          animate="show"
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
    <footer className="site-footer border-t border-white/10">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <a href="#home" className="site-brand" aria-label="Abdirahman Mohamed — back to home">
            <span className="site-brand__mark">AM</span>
            <span className="site-brand__name">Abdirahman Mohamed</span>
          </a>
          <h2 className="font-display">Let’s build something useful together.</h2>
          <p>
            I’m always interested in thoughtful projects, collaborative teams,
            and opportunities to create practical digital products.
          </p>
        </div>

        <div className="site-footer__column">
          <h3>Navigate</h3>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="site-footer__column">
          <h3>Connect</h3>
          <a href="https://github.com/Ahman04" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/abdirahman-mohamed-9b4a5a396/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={portfolioWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp · {whatsappDisplay} ↗
          </a>
          <a href="mailto:m.abdirahmanmohamed.adan@gmail.com">Email ↗</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Abdirahman Mohamed. Built with care in Nairobi.</p>
        <a href="#home" className="back-to-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default App
