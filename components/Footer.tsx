import Link from 'next/link'
import { LogoRivage } from '@/components/LogoRivage'

export function Footer() {
  return (
    <footer style={{ background: '#1B3A6B', color: '#E8D5B0' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <LogoRivage size="lg" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,213,176,0.65)' }}>
              Votre expert immobilier sur la Côte Varoise depuis 30 ans.
            </p>
            <a
              href="https://maps.google.com/?q=2311+Bd+Front+de+Mer+83400+Hyères"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm transition-colors hover:text-[#C9A96E]"
              style={{ color: 'rgba(232,213,176,0.65)' }}
            >
              2311 Bd Front de Mer<br />83400 Hyères
            </a>
            <div className="space-y-3">
              <div>
                <p className="text-xs" style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}>Nathalie Mazeau</p>
                <a
                  href="tel:+33611444187"
                  className="block text-base font-semibold transition-colors"
                  style={{ color: '#C9A96E', fontFamily: 'var(--font-cormorant)' }}
                >
                  06 11 44 41 87
                </a>
                <a
                  href="mailto:mazeau.nathalie16@gmail.com"
                  className="block text-xs transition-colors hover:text-[#C9A96E]"
                  style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}
                >
                  mazeau.nathalie16@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}>Luca Benattar</p>
                <a
                  href="tel:+33616363487"
                  className="block text-base font-semibold transition-colors"
                  style={{ color: '#C9A96E', fontFamily: 'var(--font-cormorant)' }}
                >
                  06 16 36 34 87
                </a>
                <a
                  href="mailto:luca.benattar@gmail.com"
                  className="block text-xs transition-colors hover:text-[#C9A96E]"
                  style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}
                >
                  luca.benattar@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Zones */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#C9A96E' }}>
              Nos communes
            </p>
            <div className="space-y-2">
              {[
                { label: 'Hyères', href: '/biens/hyeres' },
                { label: 'Carqueiranne', href: '/biens/carqueiranne' },
                { label: 'La Londe-les-Maures', href: '/biens/la-londe' },
                { label: 'Bormes-les-Mimosas', href: '/biens/bormes' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="footer-link block text-sm"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#C9A96E' }}>
              Navigation
            </p>
            <div className="space-y-2">
              {[
                { label: 'Nos biens', href: '/biens' },
                { label: "L'agence", href: '/agence' },
                { label: 'Estimation gratuite', href: '/estimation-immobiliere-hyeres' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link block text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(201,169,110,0.15)', color: 'rgba(232,213,176,0.4)' }}
        >
          <p>© {new Date().getFullYear()} Rivage Immobilier. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/honoraires" className="hover:text-[#C9A96E] transition-colors">
              Nos honoraires
            </Link>
            <Link href="/mentions-legales" className="hover:text-[#C9A96E] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-[#C9A96E] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
