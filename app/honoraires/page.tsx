import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Honoraires — Rivage Immobilier',
  description: 'Grille tarifaire des honoraires de transaction de Rivage Immobilier sur la Côte Varoise. Honoraires à charge vendeur, TVA 20%.',
  alternates: { canonical: 'https://www.rivage-immobilier.com/honoraires' },
}

const tranches = [
  { de: '0 €', a: '50 000 €', taux: '9 %' },
  { de: '50 000 €', a: '79 999 €', taux: '8 %' },
  { de: '80 000 €', a: '149 999 €', taux: '7 %' },
  { de: '150 000 €', a: '300 000 €', taux: '6 %' },
  { de: '301 000 €', a: '1 000 000 €', taux: '5 %' },
  { de: '1 000 000 €', a: 'et au-delà', taux: '4 %' },
]

export default function HonorairesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-36 pb-20 text-center"
        style={{ background: '#1B3A6B' }}
      >
        <p
          className="text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
        >
          Transparence & clarté
        </p>
        <h1
          className="text-5xl sm:text-6xl text-white"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
        >
          Nos honoraires
        </h1>
      </section>

      {/* Contenu */}
      <section className="px-6 py-20 sm:py-28 max-w-3xl mx-auto">

        {/* Intro */}
        <p
          className="text-center text-sm mb-12"
          style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', lineHeight: 1.8 }}
        >
          Honoraires de transaction maximums en vigueur au 01/01/2026.
        </p>

        {/* Tableau des tranches */}
        <div
          className="rounded-2xl overflow-hidden mb-12"
          style={{ border: '1px solid rgba(201,169,110,0.2)' }}
        >
          {/* En-tête */}
          <div
            className="grid grid-cols-3 px-6 py-3 text-xs uppercase tracking-wider"
            style={{
              background: '#1B3A6B',
              color: '#C9A96E',
              fontFamily: 'var(--font-jakarta)',
              letterSpacing: '0.12em',
            }}
          >
            <span>De</span>
            <span>À</span>
            <span className="text-right">Taux</span>
          </div>

          {/* Lignes */}
          {tranches.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 items-center"
              style={{
                background: i % 2 === 0 ? '#FAF8F5' : 'white',
                borderTop: '1px solid rgba(201,169,110,0.1)',
              }}
            >
              <span
                className="text-sm"
                style={{ color: '#1A1A1A', fontFamily: 'var(--font-jakarta)' }}
              >
                {t.de}
              </span>
              <span
                className="text-sm"
                style={{ color: '#1A1A1A', fontFamily: 'var(--font-jakarta)' }}
              >
                {t.a}
              </span>
              <span
                className="text-right text-xl"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#1B3A6B', fontStyle: 'italic', fontWeight: 600 }}
              >
                {t.taux}
              </span>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div
          className="rounded-2xl p-8 space-y-4"
          style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.15)' }}
        >
          {[
            'Les honoraires sont à la charge du vendeur.',
            'Avis de valeur : 290 € TTC.',
            'Mandat de recherche : honoraires de 4 % à 8 %.',
            'TVA applicable : 20 %.',
          ].map((note, i) => (
            <div key={i} className="flex items-start gap-3">
              <span style={{ color: '#C9A96E', marginTop: 2 }}>—</span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B6966', fontFamily: 'var(--font-jakarta)' }}
              >
                {note}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-[0.99]"
            style={{ background: '#1B3A6B', color: '#E8D5B0', fontFamily: 'var(--font-jakarta)' }}
          >
            Une question ? Contactez-nous
          </Link>
        </div>
      </section>
    </>
  )
}
