import type { Metadata } from 'next'
import Image from 'next/image'
import { getEquipe } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { CTAButton } from '@/components/CTAButton'

export const metadata: Metadata = {
  title: "L'Agence — Rivage Immobilier",
  description:
    "Rivage Immobilier, agence immobilière indépendante sur la Côte Varoise depuis 30 ans. Hyères, Carqueiranne, La Londe, Bormes. Équipe bilingue FR/EN.",
  alternates: { canonical: 'https://www.rivage-immobilier.com/agence' },
}

export const revalidate = 3600

const valeurs = [
  {
    titre: 'Proximité',
    texte: 'Privilégier une relation de confiance et de proximité avec nos clients.',
  },
  {
    titre: 'Précision',
    texte: 'Fournir des estimations rigoureuses fondées sur une connaissance approfondie du marché de la Côte Varoise.',
  },
  {
    titre: 'Personnalisation',
    texte: 'Un accompagnement dédié et sur mesure, adapté aux besoins spécifiques de chaque projet immobilier.',
  },
]

const chiffres = [
  { valeur: '30+', label: "Années d'expérience" },
  { valeur: '12', label: 'Communes couvertes' },
  { valeur: 'FR / EN', label: 'Accompagnement bilingue' },
  { valeur: '24h', label: 'Délai de réponse' },
]

const zones = [
  {
    nom: 'Hyères',
    texte: "Cœur historique de notre activité. De La Capte aux Salins, de Costebelle à Giens — une connaissance micro-locale acquise sur 30 ans.",
  },
  {
    nom: 'Carqueiranne',
    texte: "Marché tendu, offre rare. Nous suivons les biens des criches des Bonnettes à la presqu'île, avec une lecture fine des transactions DVF.",
  },
  {
    nom: 'La Londe-les-Maures',
    texte: "Entre vignobles AOC et plages de calanques. Un positionnement intermédiaire que nous accompagnons pour les résidences principales et secondaires.",
  },
  {
    nom: 'Bormes-les-Mimosas',
    texte: "Village classé, façade maritime d'exception. Une clientèle internationale (FR, UK, BE, CH) que nous accompagnons en français et en anglais.",
  },
]

const agenceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://www.rivage-immobilier.com/agence#agency',
  name: 'Rivage Immobilier',
  legalName: 'Rivage Immobilier SARL',
  description:
    "Agence immobilière indépendante spécialisée dans l'immobilier résidentiel sur la Côte Varoise. Hyères, Carqueiranne, La Londe-les-Maures, Bormes-les-Mimosas. 30 ans d'expérience, accompagnement bilingue français-anglais.",
  url: 'https://www.rivage-immobilier.com/agence',
  telephone: '+33616363487',
  email: 'luca.benattar@gmail.com',
  foundingDate: '1995',
  knowsLanguage: ['fr', 'en'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2311 Boulevard Front de Mer',
    addressLocality: 'Hyères',
    addressRegion: 'Var',
    postalCode: '83400',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.1207,
    longitude: 6.1281,
  },
  areaServed: [
    { '@type': 'City', name: 'Hyères' },
    { '@type': 'City', name: 'Carqueiranne' },
    { '@type': 'City', name: 'La Londe-les-Maures' },
    { '@type': 'City', name: 'Bormes-les-Mimosas' },
    { '@type': 'City', name: 'Toulon' },
    { '@type': 'City', name: 'Le Lavandou' },
  ],
  employee: [
    {
      '@type': 'Person',
      name: 'Nathalie Mazeau',
      jobTitle: 'Gérante',
      telephone: '+33611444187',
    },
    {
      '@type': 'Person',
      name: 'Sylvain Benattar',
      jobTitle: 'Fondateur',
    },
    {
      '@type': 'Person',
      name: 'Luca Benattar',
      jobTitle: 'Collaborateur',
      telephone: '+33616363487',
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.rivage-immobilier.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: "L'Agence",
      item: 'https://www.rivage-immobilier.com/agence',
    },
  ],
}

export default async function AgencePage() {
  const equipe = await getEquipe().catch(() => [])

  const membresFallback = [
    {
      nom: 'Nathalie Mazeau',
      role: 'Gérante',
      bio: "Nathalie dirige Rivage Immobilier avec plus de 30 ans d'expérience dans l'immobilier résidentiel sur la Côte Varoise. Sa connaissance approfondie du marché local, sa rigueur et son sens du contact en font un interlocuteur de confiance pour chaque projet de vente ou d'acquisition.",
      initiale: 'N',
    },
    {
      nom: 'Sylvain Benattar',
      role: 'Fondateur',
      bio: "Sylvain est le fondateur de Rivage Immobilier. Fort de plus de 30 ans d'expérience dans l'immobilier et la promotion immobilière, il a bâti l'agence sur des valeurs de sérieux, de transparence et d'ancrage local. Sa vision long terme guide le développement de la structure.",
      initiale: 'S',
    },
    {
      nom: 'Luca Benattar',
      role: 'Collaborateur',
      bio: "Diplômé de l'EDHEC et fort d'une expérience de 4 ans au sein d'un fonds d'investissement immobilier à Paris (LaSalle Investment Management), Luca apporte à Rivage Immobilier une approche analytique et structurée des projets. Spécialisé dans l'analyse de valeur, l'urbanisme et le montage d'opérations complexes, il accompagne les clients sur les projets à fort potentiel.",
      initiale: 'L',
    },
  ]

  const membres = equipe.length > 0 ? equipe : membresFallback

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agenceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
        <Image
          src="/vitrine.png"
          alt="Côte Varoise"
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
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
          style={{ minHeight: '55vh' }}
        >
          <p
            className="text-xs uppercase tracking-[0.25em] mb-5"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Plus de 30 ans d'expérience
          </p>
          <h1
            className="text-5xl sm:text-6xl text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            L'agence
          </h1>
          <p
            className="text-sm max-w-sm"
            style={{ color: 'rgba(232,213,176,0.7)', fontFamily: 'var(--font-jakarta)' }}
          >
            Agence familiale indépendante · Côte Varoise
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 py-20 sm:py-28 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
          >
            Ce qui nous distingue
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {valeurs.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(201,169,110,0.04)',
                border: '1px solid rgba(201,169,110,0.12)',
              }}
            >
              <span
                className="block text-4xl font-light mb-4"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
              >
                {i + 1}
              </span>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
              >
                {v.titre}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                {v.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Notre histoire */}
      <section className="px-6 py-20 sm:py-28" style={{ background: '#FAF8F5' }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4 text-center"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Notre histoire
          </p>
          <h2
            className="text-4xl sm:text-5xl text-center mb-12"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
          >
            Trente ans à lire la Côte Varoise
          </h2>
          <div className="space-y-5">
            <p
              className="text-base leading-[1.9]"
              style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}
            >
              Rivage Immobilier a été fondée à Hyères en 1995 par Sylvain Benattar, après plus de quinze ans passés dans la promotion immobilière sur la Côte d'Azur. L'idée fondatrice : ouvrir une agence à taille humaine, indépendante de tout réseau, capable d'accompagner chaque vendeur et chaque acquéreur sur la durée — sans la pression commerciale des structures franchisées.
            </p>
            <p
              className="text-base leading-[1.9]"
              style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}
            >
              Trente ans plus tard, l'agence est dirigée par Nathalie Mazeau et reste fidèle à cet ADN : un portefeuille volontairement restreint, une présence physique au 2311 Boulevard Front de Mer à Hyères, et une lecture fine du marché local construite mandat après mandat. Notre conviction : sur un territoire aussi contrasté que la Côte Varoise, où les écarts de prix peuvent atteindre 50 % à surface égale entre deux quartiers d'une même commune, une estimation juste suppose une connaissance terrain qu'aucun algorithme ne peut remplacer.
            </p>
            <p
              className="text-base leading-[1.9]"
              style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}
            >
              Depuis 2024, Luca Benattar a rejoint l'équipe après quatre ans chez LaSalle Investment Management à Paris. Sa formation EDHEC et son expérience en analyse de valeur viennent compléter notre approche, notamment sur les projets complexes : montages, divisions, biens à fort potentiel, accompagnement de clientèle internationale. L'agence est entièrement bilingue français-anglais.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="px-6 py-16" style={{ background: 'white', borderTop: '1px solid rgba(201,169,110,0.12)', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {chiffres.map((c) => (
            <div key={c.label}>
              <p
                className="text-4xl sm:text-5xl mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
              >
                {c.valeur}
              </p>
              <p
                className="text-xs uppercase tracking-wider"
                style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.12em' }}
              >
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="px-6 py-20 sm:py-28" style={{ background: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Notre territoire
            </p>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              Quatre communes,<br />une expertise commune
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {zones.map((z) => (
              <div
                key={z.nom}
                className="p-7 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(201,169,110,0.15)' }}
              >
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                >
                  {z.nom}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}
                >
                  {z.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="px-6 py-20 sm:py-28" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              L'équipe
            </p>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              Trois interlocuteurs,<br />une seule maison
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {membres.map((m: any) => {
              const photoUrl = m.photo
                ? urlFor(m.photo).width(200).height(200).url()
                : null

              return (
                <div
                  key={m.nom || m._id}
                  className="flex flex-col sm:flex-row items-start gap-8 p-8 rounded-2xl"
                  style={{ background: 'white', border: '1px solid rgba(201,169,110,0.12)' }}
                >
                  {/* Photo */}
                  <div
                    className="w-24 h-24 rounded-full shrink-0 overflow-hidden flex items-center justify-center"
                    style={{
                      background: photoUrl ? 'transparent' : 'rgba(201,169,110,0.08)',
                      border: '2px solid rgba(201,169,110,0.2)',
                    }}
                  >
                    {photoUrl ? (
                      <Image
                        src={photoUrl}
                        alt={m.nom}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span
                        className="text-2xl"
                        style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
                      >
                        {m.initiale || m.nom.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Texte */}
                  <div className="flex-1">
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.12em' }}
                    >
                      {m.role}
                    </p>
                    <p
                      className="text-2xl mb-4"
                      style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
                    >
                      {m.nom}
                    </p>
                    {(m.bio_fr || m.bio) && (
                      <div className="flex flex-col gap-2" style={{ maxWidth: '60ch' }}>
                        {(m.bio_fr || m.bio)
                          .split(/(?<=\.)\s+/)
                          .filter(Boolean)
                          .map((phrase: string, i: number) => (
                            <p
                              key={i}
                              className="text-sm leading-relaxed"
                              style={{ color: '#6B6966', fontFamily: 'var(--font-jakarta)' }}
                            >
                              {phrase}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center" style={{ background: '#1B3A6B' }}>
        <h2
          className="text-4xl mb-4 text-white"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
        >
          Discutons de votre projet.
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(232,213,176,0.6)', fontFamily: 'var(--font-jakarta)' }}>
          Réponse sous 24h · Sans engagement
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          <CTAButton href="/contact" variant="secondary">
            Nous écrire
          </CTAButton>
        </div>
      </section>
    </>
  )
}
