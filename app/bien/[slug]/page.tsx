import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBienBySlug, getBiensSlugs, urlFor } from '@/lib/sanity'
import { COMMUNE_LABELS, type Commune } from '@/lib/types'

// Helper to safely index COMMUNE_LABELS with a Sanity-returned string
function communeLabel(commune: unknown): string {
  return COMMUNE_LABELS[commune as Commune] ?? String(commune)
}
import { ContactForm } from '@/components/ContactForm'
import { CTAButton } from '@/components/CTAButton'
import { PhotoGallery } from '@/components/PhotoGallery'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const slugs = await getBiensSlugs().catch(() => [])
  return slugs.map((s: any) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const bien = await getBienBySlug(slug).catch(() => null)
  if (!bien) return {}

  const title = bien.meta_title || `${bien.title} — ${communeLabel(bien.commune)}`
  const description =
    bien.meta_description ||
    `${bien.type.charAt(0).toUpperCase() + bien.type.slice(1)} à vendre à ${communeLabel(bien.commune)}. ${bien.surface} m², ${bien.prix.toLocaleString('fr-FR')} €. Rivage Immobilier.`

  const photoUrl =
    bien.photos?.[0] ? urlFor(bien.photos[0]).width(1200).height(630).url() : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: photoUrl ? [{ url: photoUrl }] : [],
    },
    alternates: { canonical: `https://rivage-immobilier.com/bien/${slug}` },
  }
}

export const revalidate = 3600

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

export default async function BienPage({ params }: { params: Params }) {
  const { slug } = await params
  const bien = await getBienBySlug(slug).catch(() => null)

  if (!bien) notFound()

  const photos = (bien.photos || []).map((p: any) => ({
    url: urlFor(p).width(1600).auto('format').url(),
    alt: p.alt || bien.title,
  }))
  const mainPhoto = photos[0]?.url || null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: bien.title,
    description: bien.description_fr || '',
    url: `https://rivage-immobilier.com/bien/${slug}`,
    image: mainPhoto || '',
    price: bien.prix,
    priceCurrency: 'EUR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: communeLabel(bien.commune),
      addressCountry: 'FR',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Galerie interactive */}
      <div className="relative">
        <PhotoGallery photos={photos} title={bien.title} />
        {/* Breadcrumb par-dessus */}
        <div className="absolute top-24 left-6 sm:left-10 z-10">
          <Link
            href="/biens"
            className="text-sm flex items-center gap-2"
            style={{ color: 'rgba(232,213,176,0.8)', fontFamily: 'var(--font-jakarta)' }}
          >
            ← Nos biens
          </Link>
        </div>
      </div>

      {/* Contenu */}
      <div
        className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12"
        style={{ background: '#FAF8F5' }}
      >
        {/* Colonne principale */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span
                className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(27,58,107,0.06)',
                  color: '#9A9590',
                  fontFamily: 'var(--font-jakarta)',
                  letterSpacing: '0.12em',
                }}
              >
                {communeLabel(bien.commune)}
              </span>
              <span
                className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(201,169,110,0.1)',
                  color: '#C9A96E',
                  fontFamily: 'var(--font-jakarta)',
                  letterSpacing: '0.12em',
                }}
              >
                {TYPE_LABELS[bien.type] || bien.type}
              </span>
              {bien.exclusivite && (
                <span
                  className="text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: 'rgba(201,169,110,0.15)',
                    color: '#C9A96E',
                    fontFamily: 'var(--font-jakarta)',
                    letterSpacing: '0.12em',
                    border: '1px solid rgba(201,169,110,0.4)',
                  }}
                >
                  Exclusivité
                </span>
              )}
              {bien.status !== 'disponible' && (
                <span
                  className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    background: bien.status === 'vendu' ? 'rgba(220,38,38,0.1)' : 'rgba(234,179,8,0.1)',
                    color: bien.status === 'vendu' ? '#dc2626' : '#ca8a04',
                    fontFamily: 'var(--font-jakarta)',
                  }}
                >
                  {bien.status}
                </span>
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A', fontWeight: 300 }}
            >
              {bien.title}
            </h1>

            <p
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#1B3A6B' }}
            >
              {formatPrix(bien.prix)}
            </p>
          </div>

          {/* Caractéristiques */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 rounded-2xl"
            style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.15)' }}
          >
            {[
              { label: 'Surface', value: `${bien.surface} m²` },
              { label: 'Pièces', value: bien.pieces || '—' },
              { label: 'Chambres', value: bien.chambres || '—' },
              { label: 'Commune', value: communeLabel(bien.commune) },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <p
                  className="text-2xl font-light mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#1B3A6B', fontStyle: 'italic' }}
                >
                  {c.value}
                </p>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description FR */}
          {bien.description_fr && (
            <div className="mb-8">
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
              >
                Description
              </h2>
              <p
                className="leading-relaxed whitespace-pre-line"
                style={{ color: '#1A1A1A', fontFamily: 'var(--font-jakarta)', fontSize: '0.9375rem', lineHeight: '1.75' }}
              >
                {bien.description_fr}
              </p>
            </div>
          )}

          {/* Description EN */}
          {bien.description_en && (
            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(27,58,107,0.04)', border: '1px solid rgba(27,58,107,0.08)' }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}
              >
                English
              </p>
              <p className="text-sm leading-relaxed italic" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                {bien.description_en}
              </p>
            </div>
          )}
        </div>

        {/* Colonne contact */}
        <div className="lg:col-span-1">
          <div
            className="sticky top-28 p-6 rounded-2xl"
            style={{ background: '#1B3A6B', border: '1px solid rgba(201,169,110,0.15)' }}
          >
            <p
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
            >
              Ce bien vous intéresse ?
            </p>
            <p
              className="text-xl mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
            >
              Contactez-nous
            </p>

            <ContactForm dark biensTitle={bien.title} />

            <div
              className="mt-6 pt-6 text-center"
              style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p className="text-xs mb-3" style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}>
                Ou appelez directement
              </p>
              <div className="space-y-2">
                <div>
                  <a
                    href="tel:+33611444187"
                    className="block text-base font-medium"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
                  >
                    Nathalie — 06 11 44 41 87
                  </a>
                  <a
                    href="mailto:mazeau.nathalie16@gmail.com"
                    className="block text-xs"
                    style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}
                  >
                    mazeau.nathalie16@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+33616363487"
                    className="block text-base font-medium"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
                  >
                    Luca — 06 16 36 34 87
                  </a>
                  <a
                    href="mailto:luca.benattar@gmail.com"
                    className="block text-xs"
                    style={{ color: 'rgba(232,213,176,0.5)', fontFamily: 'var(--font-jakarta)' }}
                  >
                    luca.benattar@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA retour */}
      <div
        className="px-6 py-12 text-center"
        style={{ background: '#FAF8F5', borderTop: '1px solid rgba(201,169,110,0.15)' }}
      >
        <CTAButton href="/biens" variant="ghost">
          ← Voir tous les biens
        </CTAButton>
      </div>
    </>
  )
}
