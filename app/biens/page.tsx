import type { Metadata } from 'next'
import { getBiens } from '@/lib/sanity'
import { BienCard } from '@/components/BienCard'
import { COMMUNE_LABELS } from '@/lib/types'
import type { Commune } from '@/lib/types'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Biens à vendre — Côte Varoise',
  description:
    'Maisons, villas et appartements à vendre à Hyères, Carqueiranne, La Londe-les-Maures et Bormes-les-Mimosas. Rivage Immobilier.',
}

export const revalidate = 3600

const communes: { value: Commune | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'hyeres', label: 'Hyères' },
  { value: 'carqueiranne', label: 'Carqueiranne' },
  { value: 'la-londe', label: 'La Londe' },
  { value: 'bormes', label: 'Bormes' },
  { value: 'toulon', label: 'Toulon' },
  { value: 'le-pradet', label: 'Le Pradet' },
  { value: 'la-valette', label: 'La Valette' },
  { value: 'le-lavandou', label: 'Le Lavandou' },
  { value: 'la-crau', label: 'La Crau' },
  { value: 'la-garde', label: 'La Garde' },
  { value: 'sollies-pont', label: 'Solliès-Pont' },
  { value: 'var', label: 'Var' },
]

export default async function BiensPage() {
  const biens = await getBiens().catch(() => [])

  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="pt-36 pb-16 px-6 text-center"
        style={{ background: '#1B3A6B' }}
      >
        <p
          className="text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
        >
          Portefeuille
        </p>
        <h1
          className="text-5xl sm:text-6xl text-white mb-4"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
        >
          Nos biens
        </h1>
        <p
          className="text-sm"
          style={{ color: 'rgba(232,213,176,0.6)', fontFamily: 'var(--font-jakarta)' }}
        >
          {biens.length} bien{biens.length > 1 ? 's' : ''} disponible{biens.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Filtres par commune */}
      <div
        className="sticky top-20 z-30 flex items-center justify-center gap-2 px-4 py-3 flex-wrap"
        style={{
          background: 'rgba(250,248,245,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,169,110,0.15)',
        }}
      >
        {communes.map((c) => (
          <Link
            key={c.value}
            href={c.value === 'all' ? '/biens' : `/biens/${c.value}`}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: 'rgba(27,58,107,0.06)',
              color: '#1A1A1A',
              fontFamily: 'var(--font-jakarta)',
              border: '1px solid rgba(201,169,110,0.2)',
            }}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Grille */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {biens.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {biens.map((bien: any) => (
              <BienCard key={bien._id} bien={bien} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p
              className="text-2xl mb-3"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              Aucun bien disponible actuellement
            </p>
            <p className="text-sm mb-8" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
              Contactez-nous — nous avons peut-être le bien qu'il vous faut.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+33611444187"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm"
                style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
              >
                Nathalie Mazeau — 06 11 44 41 87
              </a>
              <a
                href="tel:+33616363487"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm"
                style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
              >
                Luca Benattar — 06 16 36 34 87
              </a>
            </div>
          </div>
        )}
      </div>

      {/* CTA bas de page */}
      <div
        className="px-6 py-16 text-center"
        style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}
      >
        <p className="text-sm mb-4" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
          Vous ne trouvez pas ?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm border"
          style={{
            borderColor: 'rgba(26,26,26,0.2)',
            color: '#1A1A1A',
            fontFamily: 'var(--font-jakarta)',
          }}
        >
          Déposez votre recherche →
        </a>
      </div>
    </div>
  )
}
