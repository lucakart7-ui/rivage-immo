import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: '#C9A96E',
      color: '#1B3A6B',
    },
    secondary: {
      background: 'transparent',
      color: '#C9A96E',
      border: '1px solid rgba(201,169,110,0.4)',
    },
    ghost: {
      background: 'transparent',
      color: '#1A1A1A',
      border: '1px solid rgba(26,26,26,0.2)',
    },
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[0.98] ${className}`}
      style={{ fontFamily: 'var(--font-jakarta)', ...styles[variant] }}
    >
      {children}
      <span
        className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
        style={{
          background: variant === 'primary' ? 'rgba(27,58,107,0.15)' : 'rgba(201,169,110,0.15)',
        }}
      >
        →
      </span>
    </Link>
  )
}
