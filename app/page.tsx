import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedBiens, getEquipe } from '@/lib/sanity'
import { BienCard } from '@/components/BienCard'
import { CTAButton } from '@/components/CTAButton'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Agence Immobilière Hyères | Rivage Immobilier',
  description:
    "Votre expert en immobilier résidentiel à Hyères, Carqueiranne, La Londe et Bormes depuis 30 ans. Estimation gratuite, réponse sous 24h.",
  alternates: { canonical: 'https://www.rivage-immobilier.com' },
}

export const revalidate = 3600

export default async function Home() {
  const [biens, equipe] = await Promise.all([
    getFeaturedBiens().catch(() => []),
    getEquipe().catch(() => []),
  ])

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100svh' }}>
        <Image
          src="/port-hyeres-hd.jpg"
          alt="Port de Hyères — Côte Varoise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: 'brightness(0.72)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.25) 0%, rgba(27,58,107,0.6) 100%)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="inline-block text-xs uppercase tracking-[0.25em] mb-6 px-4 py-1.5 rounded-full border"
            style={{
              color: '#C9A96E',
              borderColor: 'rgba(201,169,110,0.4)',
              background: 'rgba(201,169,110,0.08)',
              fontFamily: 'var(--font-jakarta)',
            }}
          >
            Côte Varoise · 30 ans d'expertise
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            Votre bien idéal<br />sur la Côte Varoise
          </h1>

          <p
            className="text-base sm:text-lg mb-10 max-w-md mx-auto"
            style={{ color: 'rgba(232,213,176,0.85)', fontFamily: 'var(--font-jakarta)' }}
          >
            Hyères · Carqueiranne · La Londe · Bormes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/estimation-immobiliere-hyeres" variant="primary">
              Estimation gratuite
            </CTAButton>
            <CTAButton href="/biens" variant="secondary">
              Voir nos biens
            </CTAButton>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(201,169,110,0.7)">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </section>

      {/* ─── CHIFFRES ─────────────────────────────────────────── */}
      <section style={{ background: '#1B3A6B' }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { value: '30 années', label: "d'expérience" },
              { value: '100%', label: 'accompagnement personnalisé' },
              { value: 'Toulon–Lavandou', label: 'notre territoire' },
            ].map((s) => (
              <div key={s.value}>
                <p
                  className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A96E', fontStyle: 'italic' }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: 'rgba(232,213,176,0.55)', fontFamily: 'var(--font-jakarta)' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIENS À VENDRE ───────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Sélection
            </p>
            <h2
              className="text-4xl sm:text-5xl"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
            >
              À vendre
            </h2>
          </div>
          <Link
            href="/biens"
            className="hidden sm:flex items-center gap-2 text-sm font-medium"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Tous les biens →
          </Link>
        </div>

        {biens.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {biens.map((bien: any) => (
              <BienCard key={bien._id} bien={bien} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}>
              Biens disponibles bientôt
            </p>
            <p className="text-sm mb-8" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
              Contactez-nous pour connaître nos biens en portefeuille
            </p>
            <CTAButton href="/contact" variant="primary">
              Nous contacter
            </CTAButton>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm mb-4" style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <CTAButton href="/contact" variant="ghost">
            Déposez votre recherche
          </CTAButton>
        </div>
      </section>

      {/* ─── TERRITOIRE ───────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <Image
          src="/bormes.jpg"
          alt="Bormes-les-Mimosas"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(27,58,107,0.85) 0%, rgba(27,58,107,0.2) 100%)' }}
        />
        <div className="relative z-10 h-full flex items-center px-8 sm:px-16 py-24">
          <div className="max-w-md">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
            >
              Notre territoire
            </p>
            <h2
              className="text-4xl sm:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
            >
              Chaque pierre,<br />chaque vue,<br />chaque commune.
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: 'rgba(232,213,176,0.75)', fontFamily: 'var(--font-jakarta)', lineHeight: '1.7' }}
            >
              30 ans d'ancrage sur la Côte Varoise. Chaque quartier, chaque valeur, chaque opportunité.
            </p>
            <CTAButton href="/agence" variant="secondary">
              L'agence
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─── ÉQUIPE ────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            L'équipe
          </p>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#1A1A1A' }}
          >
            Qui sommes-nous
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {[
            { nom: 'Nathalie Mazeau', role: 'Gérante', photoSrc: '/team/nathalie.jpeg' },
            { nom: 'Sylvain Benattar', role: 'Fondateur', photoSrc: '/team/sylvain.png' },
            { nom: 'Luca Benattar', role: 'Collaborateur', photoSrc: '/team/luca.jpg' },
          ].map((m) => (
            <TeamCard key={m.nom} nom={m.nom} role={m.role} photoSrc={m.photoSrc} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="/agence" variant="ghost">
            Discutons de votre projet
          </CTAButton>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32" style={{ background: '#1B3A6B' }}>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: '#C9A96E', fontFamily: 'var(--font-jakarta)' }}
          >
            Votre projet
          </p>
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white', fontWeight: 300 }}
          >
            Parlons-en.
          </h2>
          <p
            className="text-sm"
            style={{ color: 'rgba(232,213,176,0.6)', fontFamily: 'var(--font-jakarta)' }}
          >
            Réponse sous 24h · Sans engagement
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <ContactForm dark />
        </div>
      </section>
    </>
  )
}

function TeamCard({
  nom,
  role,
  photo,
  photoSrc,
}: {
  nom: string
  role: string
  photo?: any
  photoSrc?: string
}) {
  const hasImage = photoSrc || photo
  return (
    <div className="text-center">
      <div
        className="w-32 h-32 rounded-full mx-auto mb-5 overflow-hidden flex items-center justify-center"
        style={{
          background: hasImage ? 'transparent' : 'rgba(201,169,110,0.08)',
          border: hasImage ? 'none' : '1px solid rgba(201,169,110,0.2)',
        }}
      >
        {photoSrc && (
          <Image
            src={photoSrc}
            alt={nom}
            width={128}
            height={128}
            className="w-full h-full object-cover object-top"
          />
        )}
      </div>
      <p
        className="text-xl mb-1"
        style={{ fontFamily: 'var(--font-cormorant)', color: '#1A1A1A', fontStyle: 'italic' }}
      >
        {nom}
      </p>
      <p
        className="text-xs uppercase tracking-wider"
        style={{ color: '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.12em' }}
      >
        {role}
      </p>
    </div>
  )
}
