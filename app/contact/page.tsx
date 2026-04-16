import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Rivage Immobilier Hyères',
  description:
    'Contactez Rivage Immobilier à Hyères. Vente, achat, estimation — nous répondons sous 24h.',
  alternates: { canonical: 'https://rivage-immobilier.com/contact' },
}

export default function ContactPage() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      {/* Header */}
      <div className="pt-36 pb-12 px-6 text-center" style={{ background: '#1B3A6B' }}>
        <p
          className="text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
        >
          On est là
        </p>
        <h1
          className="text-5xl sm:text-6xl text-white"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
        >
          Contact
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Infos */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.2em] mb-8"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Rivage Immobilier
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                Contacts
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>Nathalie Mazeau</p>
                  <a
                    href="tel:+33611444187"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                  >
                    06 11 44 41 87
                  </a>
                  <a
                    href="mailto:mazeau.nathalie16@gmail.com"
                    className="text-sm"
                    style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}
                  >
                    mazeau.nathalie16@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>Luca Benattar</p>
                  <a
                    href="tel:+33611444186"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                  >
                    06 11 44 41 86
                  </a>
                  <a
                    href="mailto:luca.benattar@gmail.com"
                    className="text-sm"
                    style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}
                  >
                    luca.benattar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                Zone d'intervention
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#1A1A1A', fontFamily: 'var(--font-jakarta)' }}>
                Hyères · Carqueiranne<br />La Londe-les-Maures · Bormes-les-Mimosas
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                Disponibilité
              </p>
              <p className="text-sm" style={{ color: '#1A1A1A', fontFamily: 'var(--font-jakarta)' }}>
                Réponse sous 24h · 7j/7
              </p>
            </div>
          </div>

          <div
            className="mt-10 p-5 rounded-2xl"
            style={{
              background: 'rgba(201,169,110,0.06)',
              border: '1px solid rgba(201,169,110,0.15)',
            }}
          >
            <p
              className="text-lg mb-1"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              "Chaque projet mérite une attention particulière."
            </p>
            <p className="text-xs" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
              — Nathalie Mazeau, Gérante
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div
          className="p-8 rounded-2xl"
          style={{ background: '#1B3A6B', border: '1px solid rgba(201,169,110,0.15)' }}
        >
          <p
            className="text-xs uppercase tracking-wider mb-1"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
          >
            Message
          </p>
          <p
            className="text-2xl mb-8"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
          >
            Écrivez-nous
          </p>
          <ContactForm dark />
        </div>
      </div>
    </div>
  )
}
