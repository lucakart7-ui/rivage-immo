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
    alternates: { canonical: `https://rivage-immobilier.fr/bien/${slug}` },
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

  const photos = bien.photos || []
  const mainPhoto = photos[0] ? urlFor(photos[0]).width(1200).height(750).auto('format').url() : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: bien.title,
    description: bien.description_fr || '',
    url: `https://rivage-immobilier.fr/bien/${slug}`,
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

      {/* Photo principale */}
      <div className="relative" style={{ height: '70vh', minHeight: '400px' }}>
        {mainPhoto ? (
          <Image
            src={mainPhoto}
            alt={bien.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: '#E8E6E1' }}>
            <span style={{ fontSize: '4rem' }}>🏡</span>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.3) 0%, rgba(27,58,107,0.05) 60%, rgba(27,58,107,0) 100%)' }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 sm:left-10">
          <Link
            href="/biens"
            className="text-sm flex items-center gap-2"
            style={{ color: 'rgba(232,213,176,0.8)', fontFamily: 'var(--font-jakarta)' }}
          >
            ← Nos biens
          </Link>
        </div>
      </div>

      {/* Galerie thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-2 px-6 sm:px-10 py-4 overflow-x-auto" style={{ background: '#FAF8F5' }}>
          {photos.slice(1, 5).map((photo: any, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden"
            >
              <Image
                src={urlFor(photo).width(224).height(160).auto('format').url()}
                alt={`Photo ${i + 2}`}
                width={224}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}

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
              <a
                href="tel:+33616363487"
                className="text-xl font-medium"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
              >
                06 16 36 34 87
              </a>
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
