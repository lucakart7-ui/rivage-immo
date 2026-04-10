export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: '#1B3A6B',
        borderTop: '1px solid rgba(201,169,110,0.2)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="tel:+33616363487"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all active:scale-95"
          style={{
            background: '#C9A96E',
            color: '#1B3A6B',
            fontFamily: 'var(--font-jakarta)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Appeler
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all active:scale-95 border"
          style={{
            borderColor: 'rgba(201,169,110,0.4)',
            color: '#E8D5B0',
            fontFamily: 'var(--font-jakarta)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Écrire
        </a>
      </div>
    </div>
  )
}
