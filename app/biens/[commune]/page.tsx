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

type CommuneEditorial = {
  titre: string
  paragraphes: string[]
  stats: { label: string; valeur: string }[]
  source: string
}

const COMMUNE_EDITORIAL: Partial<Record<Commune, CommuneEditorial>> = {
  hyeres: {
    titre: "Le marché immobilier à Hyères en 2025",
    paragraphes: [
      "Hyères est la commune la plus étendue du littoral varois — et l'une des plus hétérogènes. Entre le centre-ville médiéval, les quartiers balnéaires de La Capte et de Giens, les hauteurs de Costebelle et les bords de mer des Salins, les écarts de prix peuvent atteindre 50 % à surface égale. C'est cette connaissance micro-locale, acquise sur 30 ans, qui distingue une estimation terrain d'une valeur algorithmique.",
      "En 2025, les transactions DVF font ressortir un prix moyen d'environ 3 879 €/m² pour les appartements et de 4 701 à 5 284 €/m² pour les maisons. Les biens avec vue mer directe ou accès plage — notamment à La Capte, à l'Almanarre ou sur la presqu'île de Giens — dépassent régulièrement 7 000 €/m², portés par une demande soutenue en résidence secondaire, notamment britannique et nordique depuis la liaison aéroportuaire Toulon-Hyères–Londres.",
      "Le délai de vente moyen à Hyères se situe entre 3 et 6 mois pour un bien correctement estimé. Les biens surévalués dès la mise en marché peinent à trouver preneur et finissent par se négocier en dessous de leur valeur réelle — d'où l'importance d'un positionnement juste dès le départ. L'agence Rivage Immobilier est implantée au 2311 Boulevard Front de Mer, au cœur du bassin de vie de Hyères.",
    ],
    stats: [
      { label: "Prix moyen appartement", valeur: "3 879 €/m²" },
      { label: "Prix moyen maison", valeur: "4 701–5 284 €/m²" },
      { label: "Vue mer / presqu'île", valeur: "> 7 000 €/m²" },
      { label: "Délai de vente moyen", valeur: "3 à 6 mois" },
    ],
    source: "Sources : Base DVF (etalab.gouv.fr), Observatoire PAP.fr — moyennes 2025.",
  },
  carqueiranne: {
    titre: "Le marché immobilier à Carqueiranne en 2025",
    paragraphes: [
      "Carqueiranne est un village côtier compact, coincé entre la mer et les collines, qui ne s'étend plus — et c'est précisément ce qui soutient ses prix. L'offre de biens à vendre est structurellement limitée : très peu de programmes neufs, un tissu pavillonnaire dense, et une commune qui attire à la fois des résidents principaux (proximité de Toulon, 20 minutes) et des acquéreurs de résidences secondaires séduits par les criques des Bonnettes et de la Favière.",
      "Les prix à Carqueiranne sont généralement supérieurs à la moyenne de Hyères sur le segment villa avec jardin ou vue mer. Les biens avec accès direct aux criques ou avec vue dégagée sur la rade de Toulon s'échangent dans une fourchette haute, parfois comparables aux biens de prestige borméens. La faiblesse du renouvellement du parc immobilier renforce la pression sur les rares biens qui arrivent sur le marché.",
      "Notre recommandation aux vendeurs : sur une commune aussi tendue, l'estimation ne doit pas s'appuyer sur les biens actuellement en vente — souvent en attente d'acquéreur — mais sur les transactions réelles récentes de la base DVF. Rivage Immobilier analyse ces données pour chaque mandat, sans marge d'optimisme commercial.",
    ],
    stats: [
      { label: "Marché", valeur: "Tendu, offre limitée" },
      { label: "Profil dominant", valeur: "Villa avec jardin / vue mer" },
      { label: "Délai de vente", valeur: "Rapide si bien estimé" },
      { label: "Clientèle", valeur: "Résidents principaux + secondaires" },
    ],
    source: "Sources : Données DVF Carqueiranne 2024–2025 ; observation terrain Rivage Immobilier.",
  },
  'la-londe': {
    titre: "Le marché immobilier à La Londe-les-Maures en 2025",
    paragraphes: [
      "La Londe-les-Maures occupe une position intermédiaire dans l'échelle des prix de la Côte Varoise : plus abordable que Bormes-les-Mimosas ou Carqueiranne, mais avec un cadre de vie que beaucoup considèrent aussi exceptionnel. La commune s'étire entre le massif des Maures, les vignes de l'AOC Côtes de Provence et un littoral découpé en calanques et plages de sable (Miramar, L'Argentière) que même les automobilistes de la RN98 ne voient pas depuis la route.",
      "Le marché londesien attire principalement deux catégories d'acquéreurs : des acheteurs de résidence principale issus du bassin toulonnais cherchant à s'éloigner de la ville sans sacrifier l'accès à la mer, et des acheteurs de résidence secondaire — souvent français — séduits par le rapport qualité-prix face à Bormes ou Saint-Tropez. L'offre en maisons avec jardin reste la plus recherchée, notamment dans les quartiers proches du port de La Londe ou avec vue sur les calanques.",
      "La forte saisonnalité du marché londesien joue un rôle important dans le calendrier de vente : les mises en marché au printemps bénéficient d'une demande de visiteurs estivaux plus active. Rivage Immobilier accompagne les vendeurs londesiens dans la définition du bon timing autant que du bon prix.",
    ],
    stats: [
      { label: "Positionnement", valeur: "Intermédiaire Côte Varoise" },
      { label: "Atout principal", valeur: "Vignoble + plages de calanque" },
      { label: "Clientèle", valeur: "Résidents principaux & secondaires FR" },
      { label: "Timing optimal", valeur: "Printemps (mars–mai)" },
    ],
    source: "Sources : Données DVF La Londe-les-Maures 2024–2025 ; Observatoire PAP.fr.",
  },
  bormes: {
    titre: "Le marché immobilier à Bormes-les-Mimosas en 2025",
    paragraphes: [
      "Bormes-les-Mimosas figure parmi les communes immobilières les plus cotées du Var, et l'une des plus hétérogènes : le village perché médiéval, classé parmi les plus beaux villages de France, coexiste avec une façade maritime comprenant la plage de Cabasson — domaine privé très sélect — et les criques du cap Bénat. Ce double positionnement, village d'exception et littoral haut de gamme, explique des prix qui peuvent dépasser 8 000 €/m² sur les villas avec vue directe.",
      "La clientèle borméenne est en partie internationale — Britanniques, Belges, Suisses, Scandinaves — attirée par la discrétion du lieu, l'accès au Domaine de Brégançon (résidence officielle du Président de la République) et une offre de domaines viticoles en arrière-pays. Rivage Immobilier assure un accompagnement bilingue français-anglais pour cette clientèle, depuis la recherche jusqu'à la signature notariale.",
      "Sur le plan technique, Bormes est une commune concernée par la Loi Littoral et par le PPRIF (risque incendie de forêt du massif des Maures). Tout projet de construction ou d'extension doit être vérifié au PLU avant formulation d'une offre. Rivage Immobilier accompagne les acquéreurs dans ces vérifications préalables.",
    ],
    stats: [
      { label: "Fourchette de prix", valeur: "5 000–8 000 €/m²" },
      { label: "Segment dominant", valeur: "Villas haut de gamme" },
      { label: "Clientèle", valeur: "Internationale (FR, UK, BE, CH)" },
      { label: "Point de vigilance", valeur: "Loi Littoral + PPRIF" },
    ],
    source: "Sources : Données DVF Bormes-les-Mimosas 2024–2025 ; observation terrain Rivage Immobilier.",
  },
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
    alternates: { canonical: `https://www.rivage-immobilier.com/biens/${commune}` },
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

      {/* Contenu éditorial marché local (4 communes principales) */}
      {COMMUNE_EDITORIAL[communeKey] && (() => {
        const ed = COMMUNE_EDITORIAL[communeKey]!
        return (
          <section style={{ background: 'white', borderTop: '1px solid rgba(201,169,110,0.12)' }}>
            <div className="max-w-4xl mx-auto px-6 py-20">
              {/* En-tête */}
              <div className="mb-10">
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-3"
                  style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
                >
                  Marché immobilier
                </p>
                <h2
                  className="text-3xl sm:text-4xl"
                  style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300, color: '#1A1A1A' }}
                >
                  {ed.titre}
                </h2>
              </div>

              {/* Corps + stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Paragraphes */}
                <div className="lg:col-span-2 space-y-5">
                  {ed.paragraphes.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm leading-[1.9]"
                      style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}
                    >
                      {p}
                    </p>
                  ))}
                  <p
                    className="text-xs mt-2"
                    style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}
                  >
                    {ed.source}
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {ed.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl"
                      style={{ background: '#FAF8F5', border: '1px solid rgba(201,169,110,0.15)' }}
                    >
                      <p
                        className="text-base mb-1"
                        style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                      >
                        {s.valeur}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}

                  {/* CTA estimation */}
                  <Link
                    href="/estimation-immobiliere-hyeres"
                    className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: '#1B3A6B', color: '#C9A96E', fontFamily: 'var(--font-jakarta)', display: 'flex' }}
                  >
                    Estimer mon bien à {label}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {/* Schema.org LocalBusiness pour la commune */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Rivage Immobilier',
            areaServed: label,
            url: `https://www.rivage-immobilier.com/biens/${commune}`,
            telephone: '+33616363487',
          }),
        }}
      />
    </div>
  )
}
