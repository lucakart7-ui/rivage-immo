import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Bien } from '@/lib/types'
import { COMMUNE_LABELS } from '@/lib/types'

function formatPrix(prix: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(prix)
}

const TYPE_LABELS: Record<string, string> = {
  maison: 'Maison',
  villa: 'Villa',
  appartement: 'Appartement',
  terrain: 'Terrain',
}

export function BienCard({ bien }: { bien: Bien }) {
  const photo = bien.photos?.[0]
  const photoUrl = photo ? urlFor(photo).width(700).height(480).auto('format').url() : null

  return (
    <Link
      href={`/bien/${bien.slug.current}`}
      className="group block"
      style={{
        background: 'rgba(201,169,110,0.06)',
        border: '1px solid rgba(201,169,110,0.15)',
        borderRadius: '2rem',
        padding: '6px',
      }}
    >
      <div
        style={{
          background: '#FAF8F5',
          borderRadius: 'calc(2rem - 6px)',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={photo?.alt || bien.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: '#E8E6E1' }}
            >
              <span style={{ color: '#9A9590', fontSize: '2rem' }}>🏡</span>
            </div>
          )}
          {/* Badge commune */}
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: 'rgba(27,58,107,0.8)',
                color: '#C9A96E',
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              {COMMUNE_LABELS[bien.commune]}
            </span>
          </div>

          {/* Badge exclusivité */}
          {bien.exclusivite && (
            <div className="absolute top-3 right-3">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                style={{
                  background: 'rgba(201,169,110,0.92)',
                  color: '#1B3A6B',
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '0.12em',
                  fontFamily: 'var(--font-jakarta)',
                }}
              >
                Exclusivité
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
          >
            {TYPE_LABELS[bien.type] || bien.type}
          </p>
          <h3
            className="text-xl mb-3 leading-snug"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A', fontStyle: 'italic' }}
          >
            {bien.title}
          </h3>

          {/* Specs */}
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-sm" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              {bien.surface} m²
            </span>
            {bien.pieces && (
              <span className="flex items-center gap-1 text-sm" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 8c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v11h2v1h18v-1h2V8zm-2 9H3V8h18v9z"/></svg>
                {bien.pieces} pièces
              </span>
            )}
          </div>

          {/* Prix + CTA */}
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-semibold"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#1B3A6B' }}
            >
              {formatPrix(bien.prix)}
            </span>
            <span
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Voir
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full transition-all"
                style={{ background: 'rgba(201,169,110,0.15)' }}
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
