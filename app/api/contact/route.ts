import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const TO_EMAIL = process.env.CONTACT_EMAIL || 'luca.benattar@gmail.com'

const PROFIL_LABELS: Record<string, string> = {
  acheteur: 'Acheteur — recherche un bien',
  vendeur: 'Vendeur — souhaite vendre',
  estimation: "Demande d'estimation",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prenom, telephone, profil, message } = body

    if (!prenom || !telephone) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    // Sanitization basique
    const safe = (s: string) =>
      String(s).replace(/[<>]/g, '').slice(0, 500)

    const emailHtml = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
        <h1 style="color: #1B3A6B; font-size: 24px; margin-bottom: 24px;">
          Nouveau contact — Rivage Immobilier
        </h1>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #9A9590; font-size: 13px; width: 120px;">Prénom</td>
            <td style="padding: 8px 0; color: #1A1A1A; font-size: 15px; font-weight: 600;">${safe(prenom)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9A9590; font-size: 13px;">Téléphone</td>
            <td style="padding: 8px 0;">
              <a href="tel:${safe(telephone)}" style="color: #C9A96E; font-size: 18px; font-weight: 700; text-decoration: none;">
                ${safe(telephone)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #9A9590; font-size: 13px;">Profil</td>
            <td style="padding: 8px 0; color: #1A1A1A; font-size: 14px;">${PROFIL_LABELS[profil] || safe(profil)}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 8px 0; color: #9A9590; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #1A1A1A; font-size: 14px; line-height: 1.6;">${safe(message)}</td>
          </tr>
          ` : ''}
        </table>
        <div style="margin-top: 32px; padding: 16px; background: #FAF8F5; border-radius: 12px; border: 1px solid #E8E6E1;">
          <p style="margin: 0; color: #9A9590; font-size: 12px;">
            Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    `

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured — email not sent')
      return NextResponse.json({ success: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Rivage Immobilier <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `[Rivage] ${safe(prenom)} — ${PROFIL_LABELS[profil] || profil}`,
      html: emailHtml,
      replyTo: undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
