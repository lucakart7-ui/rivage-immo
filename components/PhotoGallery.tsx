'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  url: string
  alt?: string
}

export function PhotoGallery({ photos, title }: { photos: Photo[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (photos.length === 0) {
    return (
      <div className="w-full flex items-center justify-center" style={{ height: '70vh', background: '#E8E6E1' }}>
        <span style={{ fontSize: '4rem' }}>🏡</span>
      </div>
    )
  }

  return (
    <div>
      {/* Photo principale */}
      <div className="relative" style={{ height: '70vh', minHeight: '400px' }}>
        <Image
          src={photos[activeIndex].url}
          alt={photos[activeIndex].alt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-opacity duration-300"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(27,58,107,0.3) 0%, rgba(27,58,107,0.05) 60%, rgba(27,58,107,0) 100%)' }}
        />

        {/* Compteur */}
        {photos.length > 1 && (
          <div
            className="absolute bottom-4 right-6 text-xs px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(27,58,107,0.6)',
              color: 'rgba(232,213,176,0.9)',
              fontFamily: 'var(--font-jakarta)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {activeIndex + 1} / {photos.length}
          </div>
        )}

        {/* Flèches navigation */}
        {photos.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((i) => (i - 1 + photos.length) % photos.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(27,58,107,0.6)', backdropFilter: 'blur(8px)' }}
              aria-label="Photo précédente"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(232,213,176,0.9)">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % photos.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(27,58,107,0.6)', backdropFilter: 'blur(8px)' }}
              aria-label="Photo suivante"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(232,213,176,0.9)">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-2 px-6 sm:px-10 py-4 overflow-x-auto" style={{ background: '#FAF8F5' }}>
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex-shrink-0 rounded-xl overflow-hidden transition-all"
              style={{
                width: '5rem',
                height: '4rem',
                outline: i === activeIndex ? '2px solid #C9A96E' : '2px solid transparent',
                outlineOffset: '2px',
                opacity: i === activeIndex ? 1 : 0.6,
              }}
            >
              <Image
                src={photo.url}
                alt={photo.alt || `Photo ${i + 1}`}
                width={160}
                height={120}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
