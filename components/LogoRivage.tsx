interface LogoRivageProps {
  size?: 'sm' | 'md' | 'lg'
  /** Override the RIVAGE word color (default: white) */
  mainColor?: string
  /** Override the REAL ESTATE line color (default: gold) */
  subColor?: string
}

export function LogoRivage({
  size = 'md',
  mainColor = 'white',
  subColor = '#C9A96E',
}: LogoRivageProps) {
  const sizes = {
    sm: { main: '0.875rem', sub: '0.45rem', spacing: '0.3em', subSpacing: '0.35em', gap: '0.18rem' },
    md: { main: '1.1rem',   sub: '0.5rem',  spacing: '0.3em', subSpacing: '0.35em', gap: '0.22rem' },
    lg: { main: '1.6rem',   sub: '0.65rem', spacing: '0.28em', subSpacing: '0.32em', gap: '0.3rem' },
  }
  const s = sizes[size]

  return (
    <div
      className="flex flex-col"
      style={{ lineHeight: 1, gap: s.gap }}
    >
      <span
        style={{
          fontFamily: 'var(--font-jakarta)',
          fontSize: s.main,
          fontWeight: 700,
          letterSpacing: s.spacing,
          color: mainColor,
          textTransform: 'uppercase',
        }}
      >
        RIVAGE
      </span>
      <span
        style={{
          fontFamily: 'var(--font-jakarta)',
          fontSize: s.sub,
          fontWeight: 400,
          letterSpacing: s.subSpacing,
          color: subColor,
          textTransform: 'uppercase',
        }}
      >
        IMMOBILIER
      </span>
    </div>
  )
}
