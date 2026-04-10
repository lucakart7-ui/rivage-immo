'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LogoRivage } from '@/components/LogoRivage'

const links = [
  { href: '/biens', label: 'Nos biens' },
  { href: '/agence', label: "L'agence" },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-4 left-4 right-4 z-50 max-w-5xl mx-auto"
        style={{ left: '1rem', right: '1rem', transform: 'none' }}
        style={{ transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)' }}
      >
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-full border"
          style={{
            background: scrolled
              ? 'rgba(27,58,107,0.92)'
              : 'rgba(27,58,107,0.75)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(201,169,110,0.25)',
            transition: 'background 0.4s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <LogoRivage size="sm" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'rgba(232,213,176,0.8)', fontFamily: 'var(--font-jakarta)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,213,176,0.8)')}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/estimation-immobiliere-hyeres"
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all"
              style={{
                background: '#C9A96E',
                color: '#1B3A6B',
                fontFamily: 'var(--font-jakarta)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E8D5B0'
                e.currentTarget.style.transform = 'scale(0.98)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A96E'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Estimation gratuite
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#C9A96E',
                transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#C9A96E',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: '#C9A96E',
                transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: '#1B3A6B' }}
        >
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <LogoRivage size="md" />
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium"
              style={{ color: '#E8D5B0', fontFamily: 'var(--font-cormorant)' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/estimation-immobiliere-hyeres"
            onClick={() => setOpen(false)}
            className="mt-4 text-base font-semibold px-8 py-3 rounded-full"
            style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
          >
            Estimation gratuite
          </Link>
        </div>
      )}
    </>
  )
}
