import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
}

export default function PolitiqueConfidentialite() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <div className="pt-36 pb-8 px-6" style={{ background: '#1B3A6B' }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl text-white"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300 }}
          >
            Politique de confidentialité
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10" style={{ fontFamily: 'var(--font-jakarta)', color: '#1A1A1A' }}>
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Données collectées</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Rivage Immobilier collecte uniquement les données que vous fournissez volontairement via le formulaire de contact : prénom, numéro de téléphone, et objet de votre demande.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Utilisation</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Ces données sont utilisées exclusivement pour vous recontacter dans le cadre de votre projet immobilier. Elles ne sont ni vendues, ni louées, ni transmises à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Vos droits (RGPD)</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:luca.benattar@gmail.com" style={{ color: '#C9A96E' }}>luca.benattar@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Cookies</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques indispensables au fonctionnement du site peuvent être déposés.
          </p>
        </section>
      </div>
    </div>
  )
}
