'use client'

import { useState } from 'react'

interface ContactFormProps {
  dark?: boolean
  biensTitle?: string
}

export function ContactForm({ dark = false, biensTitle }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    prenom: '',
    telephone: '',
    email: '',
    profil: 'acheteur',
    message: biensTitle ? `Je suis intéressé(e) par : ${biensTitle}` : '',
  })

  const textColor = dark ? 'rgba(232,213,176,0.8)' : '#1A1A1A'
  const inputStyle: React.CSSProperties = {
    background: dark ? 'rgba(255,255,255,0.07)' : 'white',
    border: `1px solid ${dark ? 'rgba(201,169,110,0.25)' : 'rgba(26,26,26,0.15)'}`,
    color: dark ? '#E8D5B0' : '#1A1A1A',
    borderRadius: '0.75rem',
    padding: '12px 16px',
    width: '100%',
    fontFamily: 'var(--font-jakarta)',
    fontSize: '0.875rem',
    outline: 'none',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(201,169,110,0.15)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A96E">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <p
          className="text-xl mb-2"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: dark ? 'white' : '#1A1A1A' }}
        >
          Message envoyé.
        </p>
        <p className="text-sm" style={{ color: dark ? 'rgba(232,213,176,0.6)' : '#9A9590', fontFamily: 'var(--font-jakarta)' }}>
          Nous vous répondrons sous 24h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: dark ? 'rgba(232,213,176,0.5)' : '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}>
            Prénom
          </label>
          <input
            type="text"
            required
            placeholder="Votre prénom"
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: dark ? 'rgba(232,213,176,0.5)' : '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}>
            Téléphone
          </label>
          <input
            type="tel"
            required
            placeholder="06 __ __ __ __"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: dark ? 'rgba(232,213,176,0.5)' : '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}>
          Email
        </label>
        <input
          type="email"
          placeholder="votre@email.fr"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: dark ? 'rgba(232,213,176,0.5)' : '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}>
          Je suis…
        </label>
        <select
          value={form.profil}
          onChange={(e) => setForm({ ...form, profil: e.target.value })}
          style={inputStyle}
        >
          <option value="acheteur">Acheteur — je recherche un bien</option>
          <option value="vendeur">Vendeur — je souhaite vendre</option>
          <option value="estimation">Je veux estimer mon bien</option>
        </select>
      </div>

      {biensTitle && (
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: dark ? 'rgba(232,213,176,0.5)' : '#9A9590', fontFamily: 'var(--font-jakarta)', letterSpacing: '0.1em' }}>
            Message (optionnel)
          </label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: 'none' }}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 rounded-full font-semibold text-sm transition-all hover:scale-[0.99] disabled:opacity-60"
        style={{
          background: '#C9A96E',
          color: '#1B3A6B',
          fontFamily: 'var(--font-jakarta)',
        }}
      >
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm" style={{ color: '#ef4444', fontFamily: 'var(--font-jakarta)' }}>
          Une erreur est survenue. Appelez-nous au{' '}
          <a href="tel:+33616363487" className="underline">06 16 36 34 87</a>
        </p>
      )}

      <p
        className="text-center text-xs"
        style={{ color: dark ? 'rgba(232,213,176,0.35)' : '#9A9590', fontFamily: 'var(--font-jakarta)' }}
      >
        Réponse sous 24h · Sans engagement
      </p>
    </form>
  )
}
