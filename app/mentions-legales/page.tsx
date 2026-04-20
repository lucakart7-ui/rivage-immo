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

        {/* ── Activité professionnelle réglementée (Loi Hoguet) ── */}
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Activité professionnelle réglementée</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Rivage Immobilier exerce une activité de transaction immobilière soumise à la loi n° 70-9
            du 2 janvier 1970 dite loi Hoguet et au décret n° 72-678 du 20 juillet 1972.
          </p>
          <table className="text-sm mt-4 w-full border-collapse" style={{ color: '#9A9590' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                <td className="py-2 pr-4 font-medium" style={{ color: '#4A4845', whiteSpace: 'nowrap' }}>Carte professionnelle T</td>
                <td className="py-2">N° [NUMÉRO CARTE T] — délivrée par la CCI du Var</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                <td className="py-2 pr-4 font-medium" style={{ color: '#4A4845', whiteSpace: 'nowrap' }}>RSAC</td>
                <td className="py-2">N° [NUMÉRO RSAC] — Tribunal de commerce de Toulon</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                <td className="py-2 pr-4 font-medium" style={{ color: '#4A4845', whiteSpace: 'nowrap' }}>Garantie financière</td>
                <td className="py-2">[NOM ORGANISME GARANT, ex. GALIAN ou CEGC] — montant : [X] €</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium" style={{ color: '#4A4845', whiteSpace: 'nowrap' }}>Assurance RCP</td>
                <td className="py-2">[NOM ASSUREUR] — N° de police : [NUMÉRO]</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mt-3" style={{ color: '#C9A96E' }}>
            ⚠️ Luca : merci de compléter les champs entre crochets avec vos vrais numéros.
          </p>
        </section>

        {/* ── Éditeur du site ── */}
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Éditeur du site</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Rivage Immobilier<br />
            2311 Boulevard Front de Mer, 83400 Hyères (Var)<br />
            <br />
            Nathalie Mazeau — <a href="tel:+33611444187" style={{ color: '#C9A96E' }}>06 11 44 41 87</a><br />
            Luca Benattar — <a href="tel:+33616363487" style={{ color: '#C9A96E' }}>06 16 36 34 87</a>
          </p>
        </section>

        {/* ── Hébergement ── */}
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Hébergement</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA
          </p>
        </section>

        {/* ── Propriété intellectuelle ── */}
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            L&apos;ensemble du contenu de ce site (textes, images, visuels) est la propriété exclusive de Rivage Immobilier. Toute reproduction est interdite sans autorisation écrite préalable.
          </p>
        </section>

        {/* ── Données personnelles ── */}
        <section>
          <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>Données personnelles</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#9A9590' }}>
            Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression en contactant l&apos;agence par email ou courrier à l&apos;adresse ci-dessus.
          </p>
        </section>
      </div>
    </div>
  )
}
