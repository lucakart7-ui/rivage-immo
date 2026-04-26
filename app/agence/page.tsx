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

      {/* Équipe */}
      <section className="px-6 py-20 sm:py-28" style={{ background: '#FAF8F5' }}>
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
