export const cvFileName = 'Abdirahman Mohamed Adan_CV.docx'
export const cvFilePath = `/${encodeURIComponent(cvFileName)}`

const cvPdfFileName = 'Abdirahman Mohamed Adan_CV.pdf'
export const cvOpenPath = `/${encodeURIComponent(cvPdfFileName)}`

export const contactFormAction = 'https://formspree.io/f/mwvqzldv'
export const isContactFormConfigured = !contactFormAction.includes('your-form-id')

export const whatsappNumber = '254759473388'
export const whatsappDisplay = '0759 473 388'

export function createWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const portfolioWhatsAppUrl = createWhatsAppUrl(
  "Hi Abdirahman, I'd like to talk about a project.",
)

export const freelanceWhatsAppUrl = createWhatsAppUrl(
  "Hi Abdirahman, I'd like to discuss a freelance project with you.",
)

export const portfolioNavigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Freelance', href: '/freelance' },
  { label: 'Contact', href: '#contact' },
]

export const freelanceNavigation = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '/#projects' },
]
