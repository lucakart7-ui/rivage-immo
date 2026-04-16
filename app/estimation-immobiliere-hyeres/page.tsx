import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Estimation Immobilière Hyères — Gratuite & Sans Engagement',
  description:
    'Obtenez une estimation gratuite de votre bien immobilier à Hyères, Carqueiranne, La Londe ou Bormes. Réponse sous 24h. Rivage Immobilier.',
  alternates: { canonical: 'https://rivage-immobilier.com/estimation-immobiliere-hyeres' },
  keywords: [
    'estimation immobilière Hyères',
    'estimation gratuite immobilier Côte Varoise',
    'évaluation bien immobilier Hyères',
    'prix immobilier Hyères',
  ],
}

const arguments_ = [
  {
    titre: '30 ans de marché',
    texte: "Nous connaissons chaque quartier, chaque rue, chaque valeur. Pas d'estimation algorithmique — du terrain.",
  },
  {
    titre: 'Gratuit & sans engagement',
    texte: "Aucune obligation de mandat. L'estimation est un service, pas un argumentaire de vente.",
  },
  {
    titre: 'Réponse sous 24h',
    texte: 'Vous contactez, on répond. Toujours.',
  },
]

export default function EstimationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
        <Image
          src="/hyeres-2.jpg"
          alt="Estimation immobilière Hyères"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.5) 0%, rgba(27,58,107,0.75) 100%)' }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-24 pb-16" style={{ minHeight: '55vh' }}>
          <p
            className="text-xs uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full border inline-block"
            style={{ color: '#C9A96E', borderColor: 'rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.08)', fontFamily: 'var(--font-jakarta)' }}
          >
            Gratuite · Sans engagement
          </p>
          <h1
            className="text-5xl sm:text-6xl text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            Estimation immobilière<br />à Hyères
          </h1>
          <p
            className="text-sm max-w-sm"
            style={{ color: 'rgba(232,213,176,0.7)', fontFamily: 'var(--font-jakarta)' }}
          >
            30 ans d'ancrage · Hyères · Carqueiranne · La Londe · Bormes
          </p>
        </div>
      </section>

      {/* Arguments + Formulaire */}
      <section className="px-6 py-20 sm:py-28" style={{ background: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Arguments */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Pourquoi nous ?
            </p>
            <h2
              className="text-4xl mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              Une estimation juste.<br />Un expert local.
            </h2>

            <div className="space-y-8">
              {arguments_.map((arg, i) => (
                <div key={i} className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                    style={{ background: 'rgba(201,169,110,0.12)', color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p
                      className="text-lg mb-1"
                      style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
                    >
                      {arg.titre}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                      {arg.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-12 p-6 rounded-2xl"
              style={{ background: '#1B3A6B', border: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
              >
                Préférez l'appel ?
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs" style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}>Nathalie</p>
                  <a
                    href="tel:+33611444187"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
                  >
                    06 11 44 41 87
                  </a>
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}>Luca</p>
                  <a
                    href="tel:+33611444186"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
                  >
                    06 11 44 41 86
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: '#1B3A6B',
              border: '1px solid rgba(201,169,110,0.15)',
            }}
          >
            <p
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
            >
              Demande d'estimation
            </p>
            <p
              className="text-2xl mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
            >
              Combien vaut votre bien ?
            </p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      {/* Zones couvertes */}
      <section className="px-6 py-16" style={{ background: '#1B3A6B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-8"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Zones d'intervention
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Hyères', 'Carqueiranne', 'La Londe-les-Maures', 'Bormes-les-Mimosas'].map((c) => (
              <div
                key={c}
                className="py-4 px-3 rounded-xl"
                style={{ border: '1px solid rgba(201,169,110,0.2)', color: '#E8D5B0', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '1.1rem' }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
