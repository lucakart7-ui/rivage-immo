import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
}

export default function MentionsLegales() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <div className="pt-36 pb-8 px-6" style={{ background: '#1B3A6B' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl text-white"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            Mentions légales
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10" style={{ fontFamily: 'var(--font-jakarta)', color: '#1A1A1A' }}>
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Éditeur du site</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Rivage Immobilier<br />
            Hyères, Var (83400)<br />
            Téléphone : <a href="tel:+33616363487" style={{ color: '#C9A96E' }}>06 16 36 34 87</a><br />
            Email : <a href="mailto:luca.benattar@gmail.com" style={{ color: '#C9A96E' }}>luca.benattar@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Hébergement</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            L'ensemble du contenu de ce site (textes, images, visuels) est la propriété exclusive de Rivage Immobilier. Toute reproduction est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Données personnelles</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression.
          </p>
        </section>
      </div>
    </div>
  )
}
