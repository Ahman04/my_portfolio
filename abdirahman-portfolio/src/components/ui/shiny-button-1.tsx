import { MouseEventHandler, ReactNode } from 'react'

type GlowButtonProps = {
  children?: ReactNode
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const GlowButton = ({
  children = 'Explore',
  href,
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  onClick,
}: GlowButtonProps) => {
  const wrapperClass = `portfolio-button portfolio-button--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="portfolio-button__arrow">
        ↗
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={wrapperClass}
        aria-disabled={disabled}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass} disabled={disabled}>
      {content}
    </button>
  )
}

export { GlowButton }
