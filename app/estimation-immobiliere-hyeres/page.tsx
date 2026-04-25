import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EstimationForm } from '@/components/EstimationForm'

export const metadata: Metadata = {
  title: 'Estimation immobilière Hyères — Gratuite · 48h',
  description:
    'Estimation gratuite de votre maison, villa ou appartement à Hyères, Carqueiranne, La Londe ou Bormes. Avis de valeur écrit sous 48h. Rivage Immobilier — 30 ans d\'expertise.',
  alternates: { canonical: 'https://www.rivage-immobilier.com/estimation-immobiliere-hyeres' },
  keywords: [
    'estimation immobilière Hyères',
    'estimation gratuite immobilier Côte Varoise',
    'évaluation bien immobilier Hyères',
    'prix immobilier Hyères',
    'estimation maison Hyères',
    'estimer appartement Carqueiranne',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Estimation immobilière gratuite — Côte Varoise',
      description:
        'Estimation gratuite de maisons, villas et appartements à Hyères, Carqueiranne, La Londe-les-Maures et Bormes-les-Mimosas. Avis de valeur écrit remis sous 48h après visite, sans engagement.',
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Rivage Immobilier',
        url: 'https://www.rivage-immobilier.com',
        telephone: '+33616363487',
      },
      areaServed: [
        { '@type': 'City', name: 'Hyères' },
        { '@type': 'City', name: 'Carqueiranne' },
        { '@type': 'City', name: 'La Londe-les-Maures' },
        { '@type': 'City', name: 'Bormes-les-Mimosas' },
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Estimation gratuite et sans engagement',
      },
      url: 'https://www.rivage-immobilier.com/estimation-immobiliere-hyeres',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment se déroule une estimation immobilière à Hyères ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Rivage Immobilier réalise l'estimation en trois étapes : une visite physique du bien (non remplaçable par une estimation en ligne), une analyse comparée des transactions récentes sur la base DVF et des biens en concurrence actuelle, puis la remise d'un avis de valeur écrit sous 48 à 72h. L'estimation est gratuite et sans engagement de mandat.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le prix moyen au m² à Hyères en 2025 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "En 2025, le prix moyen à Hyères est d'environ 3 879 €/m² pour un appartement et 4 701 à 5 284 €/m² pour une maison (sources DVF et PAP). Les biens avec vue mer directe dépassent fréquemment 7 000 €/m² dans des secteurs comme La Capte, Giens ou L'Almanarre.",
          },
        },
        {
          '@type': 'Question',
          name: "L'estimation est-elle vraiment gratuite ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, l'estimation est entièrement gratuite et sans obligation de confier le mandat à Rivage Immobilier. Vous recevez un avis de valeur écrit et argumenté, sans aucun engagement de votre part.",
          },
        },
      ],
    },
  ],
}

const etapes = [
  {
    num: '01',
    titre: 'Vous nous contactez',
    texte: 'Via le formulaire ou par téléphone. Nous planifions une visite dans les 48h.',
  },
  {
    num: '02',
    titre: 'Visite du bien',
    texte: 'Un expert Rivage se déplace. Nous analysons état, volumes, exposition, extérieurs.',
  },
  {
    num: '03',
    titre: 'Avis de valeur écrit',
    texte: "Vous recevez un document argumenté avec fourchette de prix et sources DVF. Sans engagement.",
  },
]

const preuves = [
  { chiffre: '30', unite: 'ans', label: "d'ancrage sur la Côte Varoise" },
  { chiffre: '48h', unite: '', label: 'pour recevoir votre avis de valeur' },
  { chiffre: '4', unite: '', label: 'communes maîtrisées au détail' },
  { chiffre: '0', unite: '€', label: "coût de l'estimation" },
]

export default function EstimationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <Image
          src="/hyeres-2.jpg"
          alt="Vue de Hyères — estimation immobilière Côte Varoise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'brightness(0.4)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.45) 0%, rgba(27,58,107,0.8) 100%)' }}
        />
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20"
          style={{ minHeight: '60vh' }}
        >
          <p
            className="text-xs uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full border inline-block"
            style={{
              color: '#C9A96E',
              borderColor: 'rgba(201,169,110,0.4)',
              background: 'rgba(201,169,110,0.08)',
              fontFamily: 'var(--font-jakarta)',
            }}
          >
            Gratuite · Sans engagement · Sous 48h
          </p>
          <h1
            className="text-5xl sm:text-6xl text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            Combien vaut votre bien<br />sur la Côte Varoise ?
          </h1>
          <p
            className="text-sm max-w-md"
            style={{ color: 'rgba(232,213,176,0.7)', fontFamily: 'var(--font-jakarta)', lineHeight: 1.8 }}
          >
            Estimation locale par un expert terrain — pas un algorithme.<br />
            Hyères · Carqueiranne · La Londe · Bormes
          </p>
        </div>
      </section>

      {/* ── Formulaire + Méthode ── */}
      <section className="px-6 py-20 sm:py-28" style={{ background: '#FAF8F5' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Colonne gauche — méthode */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Notre méthode
            </p>
            <h2
              className="text-4xl mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              Une estimation juste.<br />Un expert local.
            </h2>

            <div className="space-y-8 mb-12">
              {etapes.map((e) => (
                <div key={e.num} className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                    style={{ background: 'rgba(201,169,110,0.1)', color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {e.num}
                  </div>
                  <div>
                    <p
                      className="text-lg mb-1"
                      style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
                    >
                      {e.titre}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                      {e.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chiffres clés */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {preuves.map((p) => (
                <div
                  key={p.label}
                  className="p-5 rounded-2xl"
                  style={{ background: 'white', border: '1px solid rgba(201,169,110,0.15)' }}
                >
                  <p
                    className="text-3xl mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                  >
                    {p.chiffre}
                    <span className="text-xl">{p.unite}</span>
                  </p>
                  <p className="text-xs leading-snug" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                    {p.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Appel direct */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: '#1B3A6B', border: '1px solid rgba(201,169,110,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-4"
                style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
              >
                Préférez l'appel ?
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(232,213,176,0.45)', fontFamily: 'var(--font-jakarta)' }}>
                    Nathalie Mazeau
                  </p>
                  <a
                    href="tel:+33611444187"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
                  >
                    06 11 44 41 87
                  </a>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(232,213,176,0.45)', fontFamily: 'var(--font-jakarta)' }}>
                    Luca Benattar
                  </p>
                  <a
                    href="tel:+33616363487"
                    className="text-2xl block"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
                  >
                    06 16 36 34 87
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div
            className="p-8 rounded-2xl sticky top-24"
            style={{ background: '#1B3A6B', border: '1px solid rgba(201,169,110,0.15)' }}
          >
            <p
              className="text-xs uppercase tracking-wider mb-1"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.15em' }}
            >
              Estimation gratuite
            </p>
            <p
              className="text-2xl mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
            >
              Votre avis de valeur sous 48h
            </p>
            <EstimationForm />
          </div>
        </div>
      </section>

      {/* ── Pourquoi une estimation locale ── */}
      <section className="px-6 py-20" style={{ background: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4 text-center"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Expertise terrain
          </p>
          <h2
            className="text-4xl sm:text-5xl text-center mb-12"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
          >
            Pourquoi l'estimation en ligne<br />ne suffit pas
          </h2>

          <div className="space-y-6 text-sm leading-relaxed" style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}>
            <p>
              Les outils d'estimation automatique (Meilleurs Agents, DVF seul, estimateurs bancaires) calculent
              une valeur médiane à partir des transactions passées. Ils ne voient pas la vue mer depuis le salon,
              la sente privée qui dessert la propriété, le vis-à-vis immédiat, l'état de la toiture ou le jardin
              en restanque. Sur un marché aussi différencié que la Côte Varoise, ces écarts peuvent représenter
              15 à 30 % du prix final.
            </p>
            <p>
              Chez Rivage Immobilier, l'estimation croise trois sources : les transactions récentes comparables
              issues de la base DVF (Demandes de Valeurs Foncières), les biens actuellement en vente sur le secteur
              et notre connaissance terrain acquise sur 30 ans d'activité — chaque quartier, chaque micro-marché.
              À Hyères, cela signifie que nous distinguons La Capte de L'Almanarre, Costebelle de Giens, le
              bord de mer de l'arrière-plage.
            </p>
            <p>
              Le résultat est un avis de valeur <strong style={{ color: '#1B3A6B' }}>écrit, argumenté et sourcé</strong>,
              remis sous 48 à 72h après la visite. Il inclut une fourchette de prix (non un chiffre unique),
              une analyse des biens concurrents actifs et des recommandations sur le positionnement optimal
              pour un délai de vente cible.
            </p>
          </div>

          {/* Données marché */}
          <div
            className="mt-12 p-8 rounded-2xl"
            style={{ background: '#FAF8F5', border: '1px solid rgba(201,169,110,0.15)' }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] mb-6"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Repères marché Côte Varoise — 2025
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { lieu: 'Hyères', appart: '3 879 €/m²', maison: '4 701–5 284 €/m²' },
                { lieu: 'Carqueiranne', appart: 'Marché tendu', maison: 'Premium vue mer' },
                { lieu: 'Bormes-les-Mimosas', appart: 'Haut de gamme', maison: '5 000–8 000 €/m²' },
              ].map((d) => (
                <div key={d.lieu}>
                  <p
                    className="text-base mb-2"
                    style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B', fontWeight: 500 }}
                  >
                    {d.lieu}
                  </p>
                  <p className="text-xs mb-1" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                    Appartement : {d.appart}
                  </p>
                  <p className="text-xs" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
                    Maison : {d.maison}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-6" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', fontStyle: 'italic' }}>
              Sources : Base DVF (etalab.gouv.fr), Observatoire PAP.fr — moyennes 2025. Valeurs indicatives,
              les prix réels varient fortement selon la vue, l'état et la localisation précise.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ rapide ── */}
      <section className="px-6 py-20" style={{ background: '#FAF8F5' }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4 text-center"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Questions fréquentes
          </p>
          <h2
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
          >
            Ce que vous demandez
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "L'estimation est-elle vraiment gratuite et sans engagement ?",
                r: "Oui. Rivage Immobilier ne conditionne pas l'estimation à la signature d'un mandat. Vous recevez un avis de valeur complet et pouvez ensuite décider librement de la suite — vendre seul, passer par nous ou différer le projet.",
              },
              {
                q: "Combien de temps faut-il pour obtenir l'estimation ?",
                r: "Après votre demande, nous planifions la visite dans les 48h. L'avis de valeur vous est remis par écrit dans les 48 à 72h suivant la visite — soit généralement sous une semaine au total.",
              },
              {
                q: 'Pouvez-vous estimer un bien à Bormes ou La Londe, pas seulement Hyères ?',
                r: "Oui. Rivage Immobilier intervient sur l'ensemble de la Côte Varoise : Hyères, Carqueiranne, La Londe-les-Maures, Bormes-les-Mimosas, Toulon et Le Lavandou. Notre connaissance s'étend à chaque commune de notre zone d'activité.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(201,169,110,0.15)' }}
              >
                <p
                  className="text-lg mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1B3A6B' }}
                >
                  {faq.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4845', fontFamily: 'var(--font-jakarta)' }}>
                  {faq.r}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href="/faq"
              className="text-sm underline"
              style={{ color: '#1B3A6B', textDecorationColor: 'rgba(201,169,110,0.5)', fontFamily: 'var(--font-jakarta)' }}
            >
              20 autres réponses dans notre FAQ complète →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Zones couvertes ── */}
      <section className="px-6 py-16" style={{ background: '#1B3A6B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-8"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Zones d'intervention
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Hyères', href: '/biens/hyeres' },
              { label: 'Carqueiranne', href: '/biens/carqueiranne' },
              { label: 'La Londe-les-Maures', href: '/biens/la-londe' },
              { label: 'Bormes-les-Mimosas', href: '/biens/bormes' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="py-4 px-3 rounded-xl transition-all hover:opacity-80"
                style={{
                  border: '1px solid rgba(201,169,110,0.2)',
                  color: '#E8D5B0',
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  display: 'block',
                }}
              >
                {c.label}
              </Link>
            ))}
          </div>
          <a
            href="#estimation-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm"
            style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('.sticky')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Demander mon estimation gratuite
          </a>
        </div>
      </section>
    </>
  )
}
