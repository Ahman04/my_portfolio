import { useEffect, useId, useState } from 'react'

function SiteHeader({
  navigation,
  brandHref,
  brandLabel,
  ctaHref,
  ctaLabel,
  ctaTarget,
  className = '',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isMenuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className={`site-header ${className}`.trim()}>
      <a href={brandHref} className="site-brand" aria-label={brandLabel}>
        <span className="site-brand__mark">AM</span>
        <span className="site-brand__name">Abdirahman Mohamed</span>
      </a>

      <nav
        id={menuId}
        className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <a
          href={ctaHref}
          target={ctaTarget}
          rel={ctaTarget === '_blank' ? 'noopener noreferrer' : undefined}
          className="header-cta"
        >
          {ctaLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
