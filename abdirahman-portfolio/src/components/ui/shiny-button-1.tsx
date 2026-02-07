import { MouseEventHandler, ReactNode, useId } from 'react'

type GlowButtonProps = {
  children?: ReactNode
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const GlowButton = ({
  children = 'Register',
  href,
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
}: GlowButtonProps) => {
  const id = useId().replace(/:/g, '')
  const filters = {
    unopaq: `unopaq-${id}`,
    unopaq2: `unopaq2-${id}`,
    unopaq3: `unopaq3-${id}`,
  }

  const wrapperClass = `relative group ${className}`.trim()

  const core = (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq2}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq3}>
          <feColorMatrix values="1 0 0 0.2 0 0 1 0 0.2 0 0 0 1 0.2 0 0 0 0 2 0" />
        </filter>
      </svg>

      <div className="relative">
        <div
          className="absolute inset-0 -z-20 opacity-50 overflow-hidden transition-opacity duration-300 group-hover:opacity-75 group-active:opacity-100"
          style={{ filter: `blur(2em) url(#${filters.unopaq})` }}
        >
          <div
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{
              background:
                'linear-gradient(90deg, var(--color-accent-cyan) 28%, #0000 50%, var(--color-accent-emerald) 72%)',
            }}
          />
        </div>

        <div
          className="absolute inset-[-0.125em] -z-20 opacity-50 overflow-hidden transition-opacity duration-300 group-hover:opacity-75 group-active:opacity-100"
          style={{
            filter: `blur(0.25em) url(#${filters.unopaq2})`,
            borderRadius: '0.75em',
          }}
        >
          <div
            className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
            style={{
              background:
                'linear-gradient(90deg, var(--color-accent-cyan-hover) 20%, #0000 45% 55%, var(--color-accent-emerald) 80%)',
            }}
          />
        </div>

        <div
          className="p-0.5 rounded-[inherit]"
          style={{
            background: 'color-mix(in oklab, var(--color-border-strong) 65%, #000)',
            clipPath:
              'path("M 90 0 C 121 0 126 5 126 33 C 126 61 121 66 90 66 L 33 66 C 5 66 0 61 0 33 C 0 5 5 0 33 0 Z")',
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-[-2px] -z-10 opacity-50 overflow-hidden transition-opacity duration-300 group-hover:opacity-75 group-active:opacity-100"
              style={{
                filter: `blur(2px) url(#${filters.unopaq3})`,
                borderRadius: 'inherit',
              }}
            >
              <div
                className="absolute inset-[-150%] group-hover:animate-[speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,woah_4s_infinite]"
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-accent-emerald) 30%, #0000 45% 55%, var(--color-accent-cyan-hover) 70%)',
                }}
              />
            </div>

            <div
              className="flex flex-col items-center justify-center w-[120px] h-[60px] overflow-hidden text-sm font-semibold"
              style={{
                clipPath:
                  'path("M 90 0 C 115 0 120 5 120 30 C 120 55 115 60 90 60 L 30 60 C 5 60 0 55 0 30 C 0 5 5 0 30 0 Z")',
                borderRadius: '0.875em',
                background: 'color-mix(in oklab, var(--color-surface) 88%, #08060a)',
                color: 'var(--color-text)',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
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
        {core}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass} disabled={disabled}>
      {core}
    </button>
  )
}

export { GlowButton }
