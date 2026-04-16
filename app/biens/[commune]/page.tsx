import type { Metadata } from 'next'
import { getBiens } from '@/lib/sanity'
import { BienCard } from '@/components/BienCard'
import { COMMUNE_LABELS } from '@/lib/types'
import type { Commune } from '@/lib/types'
import Link from 'next/link'

const COMMUNES: Commune[] = [
  'hyeres', 'carqueiranne', 'la-londe', 'bormes',
  'toulon', 'le-pradet', 'la-valette', 'le-lavandou',
  'la-crau', 'la-garde', 'sollies-pont', 'var',
]

const COMMUNE_DESCRIPTIONS: Record<Commune, string> = {
  hyeres: "Capitale de la presqu'île d'Or, Hyères allie plages, pinèdes et architecture haussmannienne.",
  carqueiranne: "Village côtier préservé entre mer et collines, prisé pour sa tranquillité et ses criques.",
  'la-londe': "La Londe-les-Maures, entre vignes et calanques, offre un cadre de vie exceptionnel.",
  bormes: "Bormes-les-Mimosas, village fleuri classé, dominé par son château médiéval.",
  toulon: "Préfecture du Var, Toulon conjugue patrimoine maritime, vie culturelle et accès privilégié à la mer.",
  'le-pradet': "Le Pradet, village balnéaire paisible entre Toulon et Carqueiranne, appréciée pour son littoral préservé.",
  'la-valette': "La Valette-du-Var, commune résidentielle prisée aux portes de Toulon, offre calme et commodités.",
  'le-lavandou': "Le Lavandou et ses douze plages, porte d'entrée des îles d'Or, séduisent par leur authenticité.",
  'la-crau': "La Crau, entre plaine et collines, propose un cadre verdoyant à proximité de Hyères.",
  'la-garde': "La Garde, commune dynamique de la rade de Toulon, alliant espaces verts et vie de quartier.",
  'sollies-pont': "Solliès-Pont, capitale de la figue, offre un environnement provençal authentique en retrait du littoral.",
  var: "Le Var, département de la Côte d'Azur, regroupe des communes d'exception entre mer et arrière-pays.",
}

const COMMUNE_SEO: Record<Commune, { title: string; description: string }> = {
  hyeres: {
    title: 'Immobilier à Hyères — Maisons et villas à vendre',
    description:
      'Découvrez nos biens à vendre à Hyères : maisons, villas, appartements. Rivage Immobilier, votre agence locale depuis 30 ans.',
  },
  carqueiranne: {
    title: 'Immobilier à Carqueiranne — Biens à vendre',
    description:
      "Maisons et villas à vendre à Carqueiranne. Rivage Immobilier, spécialiste de l'immobilier sur la Côte Varoise.",
  },
  'la-londe': {
    title: 'Immobilier à La Londe-les-Maures — Vente immobilière',
    description:
      'Biens immobiliers à vendre à La Londe-les-Maures. Rivage Immobilier, votre expert local depuis 30 ans.',
  },
  bormes: {
    title: 'Immobilier à Bormes-les-Mimosas — Biens à vendre',
    description:
      'Maisons et villas à vendre à Bormes-les-Mimosas. Rivage Immobilier, agence indépendante sur la Côte Varoise.',
  },
  toulon: {
    title: 'Immobilier à Toulon — Maisons et appartements à vendre',
    description:
      'Biens à vendre à Toulon : maisons, appartements, villas. Rivage Immobilier, votre agence sur la Côte Varoise.',
  },
  'le-pradet': {
    title: 'Immobilier au Pradet — Biens à vendre',
    description:
      'Maisons et villas à vendre au Pradet. Rivage Immobilier, spécialiste de la vente immobilière dans le Var.',
  },
  'la-valette': {
    title: 'Immobilier à La Valette-du-Var — Vente immobilière',
    description:
      'Biens immobiliers à vendre à La Valette-du-Var. Rivage Immobilier, votre partenaire local depuis 30 ans.',
  },
  'le-lavandou': {
    title: 'Immobilier au Lavandou — Maisons et villas à vendre',
    description:
      'Maisons et villas à vendre au Lavandou. Rivage Immobilier, agence indépendante sur la Côte Varoise.',
  },
  'la-crau': {
    title: 'Immobilier à La Crau — Biens à vendre',
    description:
      'Biens à vendre à La Crau. Rivage Immobilier, spécialiste de la transaction immobilière dans le Var.',
  },
  'la-garde': {
    title: 'Immobilier à La Garde — Maisons et appartements à vendre',
    description:
      'Maisons et appartements à vendre à La Garde. Rivage Immobilier, votre agence locale depuis 30 ans.',
  },
  'sollies-pont': {
    title: 'Immobilier à Solliès-Pont — Biens à vendre',
    description:
      'Biens immobiliers à vendre à Solliès-Pont. Rivage Immobilier, expert en immobilier varois depuis 30 ans.',
  },
  var: {
    title: 'Immobilier dans le Var — Biens à vendre',
    description:
      'Découvrez nos biens à vendre dans le Var. Rivage Immobilier, votre agence indépendante sur la Côte Varoise.',
  },
}

type Params = Promise<{ commune: string }>

export async function generateStaticParams() {
  return COMMUNES.map((commune) => ({ commune }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { commune } = await params
  const seo = COMMUNE_SEO[commune as Commune]
  if (!seo) return {}
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `https://rivage-immobilier.com/biens/${commune}` },
  }
}

export const revalidate = 3600

export default async function CommunePage({ params }: { params: Params }) {
  const { commune } = await params

  if (!COMMUNES.includes(commune as Commune)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: '#9A9590' }}>
          Commune non trouvée.
        </p>
      </div>
    )
  }

  const communeKey = commune as Commune
  const biens = await getBiens(commune).catch(() => [])
  const label = COMMUNE_LABELS[communeKey]
  const description = COMMUNE_DESCRIPTIONS[communeKey]

  const communeImages: Record<Commune, string> = {
    hyeres: '/hyeres.jpg',
    carqueiranne: '/carqueiranne.jpg',
    'la-londe': '/la-londe.webp',
    bormes: '/bormes.jpg',
    toulon: '/almanarre.jpg',
    'le-pradet': '/almanarre.jpg',
    'la-valette': '/almanarre.jpg',
    'le-lavandou': '/almanarre.jpg',
    'la-crau': '/almanarre.jpg',
    'la-garde': '/almanarre.jpg',
    'sollies-pont': '/almanarre.jpg',
    var: '/almanarre.jpg',
  }

  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      {/* Header avec image */}
      <div className="relative overflow-hidden" style={{ height: '40vh', minHeight: '280px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${communeImages[communeKey]})`,
            filter: 'brightness(0.45)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.4) 0%, rgba(27,58,107,0.7) 100%)' }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Immobilier
          </p>
          <h1
            className="text-5xl sm:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            {label}
          </h1>
          <p
            className="text-sm max-w-md"
            style={{ color: 'rgba(232,213,176,0.7)', fontFamily: 'var(--font-jakarta)' }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Filtres communes */}
      <div
        className="flex items-center justify-center gap-2 px-4 py-3 flex-wrap"
        style={{
          background: 'rgba(250,248,245,0.95)',
          borderBottom: '1px solid rgba(201,169,110,0.15)',
        }}
      >
        <Link
          href="/biens"
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: 'rgba(27,58,107,0.06)', color: '#9A9590', fontFamily: 'var(--font-jakarta)', border: '1px solid transparent' }}
        >
          Toutes
        </Link>
        {COMMUNES.map((c) => (
          <Link
            key={c}
            href={`/biens/${c}`}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: c === communeKey ? '#1B3A6B' : 'rgba(27,58,107,0.06)',
              color: c === communeKey ? '#C9A96E' : '#1A1A1A',
              fontFamily: 'var(--font-jakarta)',
              border: `1px solid ${c === communeKey ? 'transparent' : 'rgba(201,169,110,0.2)'}`,
            }}
          >
            {COMMUNE_LABELS[c]}
          </Link>
        ))}
      </div>

      {/* Grille */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm mb-10" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
          {biens.length} bien{biens.length > 1 ? 's' : ''} disponible{biens.length > 1 ? 's' : ''} à {label}
        </p>

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
              Aucun bien disponible à {label}
            </p>
            <p className="text-sm mb-8" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
              Nous avons peut-être le bien qu'il vous faut — appelez-nous.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+33611444187"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm"
                style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
              >
                Nathalie — 06 11 44 41 87
              </a>
              <a
                href="tel:+33611444186"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm"
                style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
              >
                Luca — 06 11 44 41 86
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Schema.org LocalBusiness pour la commune */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Rivage Immobilier',
            areaServed: label,
            url: `https://rivage-immobilier.com/biens/${commune}`,
            telephone: '+33616363487',
          }),
        }}
      />
    </div>
  )
}
