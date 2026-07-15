import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import heroImage from './me.png'
import './freelance.css'

const whatsappNumber = '254759473388'
const whatsappMessage = encodeURIComponent(
  "Hi Abdirahman, I'd like to discuss a freelance project with you.",
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description:
      'Professional, responsive websites that communicate your value and turn visitors into enquiries.',
  },
  {
    number: '02',
    title: 'Custom Web Applications',
    description:
      'Practical systems designed around your workflows, users, and day-to-day business operations.',
  },
  {
    number: '03',
    title: 'Admin Dashboards',
    description:
      'Clear dashboards for managing content, customers, inventory, reports, and business activity.',
  },
  {
    number: '04',
    title: 'APIs & Databases',
    description:
      'Secure Python APIs and reliable database architecture for complete full-stack products.',
  },
  {
    number: '05',
    title: 'Website Redesigns',
    description:
      'Modern redesigns that improve usability, mobile responsiveness, performance, and credibility.',
  },
  {
    number: '06',
    title: 'Technical Support',
    description:
      'Ongoing maintenance, troubleshooting, deployment support, and thoughtful product improvements.',
  },
]

const process = [
  {
    step: 'Discover',
    detail: 'We clarify your goals, users, requirements, timeline, and the problem the project must solve.',
  },
  {
    step: 'Plan',
    detail: 'I shape the pages, user flows, technical approach, and milestones before development begins.',
  },
  {
    step: 'Build',
    detail: 'The product is developed responsively with regular progress updates and opportunities for feedback.',
  },
  {
    step: 'Launch',
    detail: 'I test, deploy, hand over the project, and provide the support needed for a confident launch.',
  },
]

function FreelancePage() {
  useEffect(() => {
    document.title = 'Freelance Full-Stack Developer | Abdirahman Mohamed'
  }, [])

  return (
    <div className="freelance-page">
      <header className="freelance-header">
        <a href="/" className="site-brand" aria-label="Return to Abdirahman Mohamed portfolio">
          <span className="site-brand__mark">AM</span>
          <span className="site-brand__name">Abdirahman Mohamed</span>
        </a>
        <nav aria-label="Freelance page navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="/#projects">Portfolio</a>
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="header-cta">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="freelance-hero">
          <img
            src={heroImage}
            alt="Abdirahman Mohamed in a modern office"
            width="1672"
            height="941"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="freelance-hero__overlay" aria-hidden="true" />
          <div className="freelance-hero__content">
            <p className="hero-kicker">
              <span className="status-dot" aria-hidden="true" />
              Freelance full-stack development
            </p>
            <h1 className="font-display">
              Websites and systems built to <span>move your business forward.</span>
            </h1>
            <p className="freelance-hero__lead">
              I help businesses turn ideas and manual processes into polished,
              reliable digital products—from the first screen to deployment.
            </p>
            <div className="freelance-hero__actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="freelance-button freelance-button--primary">
                Discuss your project <span aria-hidden="true">↗</span>
              </a>
              <a href="#services" className="freelance-button freelance-button--secondary">
                Explore services <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="freelance-hero__proof" aria-label="Freelance service strengths">
              <span>Responsive by default</span>
              <span>Full-stack delivery</span>
              <span>Clear communication</span>
            </div>
          </div>
        </section>

        <section id="services" className="freelance-section freelance-services">
          <div className="freelance-section__heading">
            <div>
              <p className="section-eyebrow">What I build</p>
              <h2 className="font-display">Freelance services</h2>
            </div>
            <p>
              Focused digital services for businesses that need thoughtful design,
              dependable development, and a product that works across devices.
            </p>
          </div>
          <div className="freelance-services__grid">
            {services.map((service) => (
              <Motion.article key={service.title} whileHover={{ y: -6 }} className="freelance-service-card">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="freelance-section freelance-process">
          <div className="freelance-section__heading">
            <div>
              <p className="section-eyebrow">How we work</p>
              <h2 className="font-display">A clear path from idea to launch</h2>
            </div>
            <p>
              Every engagement follows a transparent process so you always know
              what is being built, why it matters, and what comes next.
            </p>
          </div>
          <div className="freelance-process__grid">
            {process.map((item, index) => (
              <article key={item.step} className="freelance-process-card">
                <span>0{index + 1}</span>
                <h3>{item.step}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="freelance-section freelance-value">
          <div className="freelance-value__content">
            <p className="section-eyebrow">What you can expect</p>
            <h2 className="font-display">Practical development with business value at the centre.</h2>
          </div>
          <div className="freelance-value__list">
            <div><span>✓</span><p>Responsive experiences designed for real users</p></div>
            <div><span>✓</span><p>Clean, maintainable code and reliable integrations</p></div>
            <div><span>✓</span><p>Regular communication and clear project milestones</p></div>
            <div><span>✓</span><p>Deployment, handover, and continued technical support</p></div>
          </div>
        </section>

        <section className="freelance-cta">
          <p className="section-eyebrow">Have a project in mind?</p>
          <h2 className="font-display">Let’s turn it into something useful.</h2>
          <p>Tell me what you want to build, the problem you need to solve, and where you are in the process.</p>
          <div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="freelance-button freelance-button--primary">
              Message on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:m.abdirahmanmohamed.adan@gmail.com" className="freelance-button freelance-button--secondary">
              Send an email <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="freelance-footer">
        <p>© {new Date().getFullYear()} Abdirahman Mohamed · Nairobi, Kenya</p>
        <a href="/">Return to portfolio <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  )
}

export default FreelancePage
