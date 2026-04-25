'use client'

import { useState } from 'react'

export function EstimationForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    prenom: '',
    telephone: '',
    email: '',
    adresse: '',
    typeBien: 'maison',
    surface: '',
    message: '',
  })

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(201,169,110,0.25)',
    color: '#E8D5B0',
    borderRadius: '0.75rem',
    padding: '12px 16px',
    width: '100%',
    fontFamily: 'var(--font-jakarta)',
    fontSize: '0.875rem',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '6px',
    color: 'rgba(232,213,176,0.5)',
    fontFamily: 'var(--font-jakarta)',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom,
          telephone: form.telephone,
          email: form.email,
          profil: 'estimation',
          message: [
            form.adresse ? `Adresse : ${form.adresse}` : '',
            `Type : ${form.typeBien}`,
            form.surface ? `Surface : ${form.surface} m²` : '',
            form.message ? `Message : ${form.message}` : '',
          ]
            .filter(Boolean)
            .join('\n'),
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(201,169,110,0.15)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A96E">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <p
          className="text-2xl mb-2"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: 'white' }}
        >
          Demande reçue.
        </p>
        <p className="text-sm" style={{ color: 'rgba(232,213,176,0.6)', fontFamily: 'var(--font-jakarta)' }}>
          Nous vous contactons sous 24h pour planifier la visite.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Adresse du bien */}
      <div>
        <label style={labelStyle}>Adresse du bien</label>
        <input
          type="text"
          placeholder="ex. 12 rue des Mimosas, Hyères"
          value={form.adresse}
          onChange={(e) => setForm({ ...form, adresse: e.target.value })}
          style={inputStyle}
        />
      </div>

      {/* Type + Surface */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Type de bien</label>
          <select
            value={form.typeBien}
            onChange={(e) => setForm({ ...form, typeBien: e.target.value })}
            style={inputStyle}
          >
            <option value="maison">Maison / Villa</option>
            <option value="appartement">Appartement</option>
            <option value="terrain">Terrain</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Surface (m²)</label>
          <input
            type="number"
            min="1"
            placeholder="ex. 120"
            value={form.surface}
            onChange={(e) => setForm({ ...form, surface: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Prénom + Téléphone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Prénom *</label>
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
          <label style={labelStyle}>Téléphone *</label>
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

      {/* Email */}
      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="votre@email.fr"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
      </div>

      {/* Message optionnel */}
      <div>
        <label style={labelStyle}>Précisions (optionnel)</label>
        <textarea
          rows={2}
          placeholder="Vue mer, piscine, état général, délai souhaité…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 rounded-full font-semibold text-sm transition-all hover:scale-[0.99] disabled:opacity-60"
        style={{ background: '#C9A96E', color: '#1B3A6B', fontFamily: 'var(--font-jakarta)' }}
      >
        {status === 'sending' ? 'Envoi…' : 'Demander mon estimation gratuite'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm" style={{ color: '#ef4444', fontFamily: 'var(--font-jakarta)' }}>
          Erreur d&apos;envoi — appelez directement{' '}
          <a href="tel:+33611444187" className="underline">Nathalie au 06 11 44 41 87</a>
        </p>
      )}

      <p
        className="text-center text-xs"
        style={{ color: 'rgba(232,213,176,0.35)', fontFamily: 'var(--font-jakarta)' }}
      >
        Gratuite · Sans engagement · Réponse sous 24h
      </p>
    </form>
  )
}
