'use client'

import { useState } from 'react'

interface FAQItemProps {
  id: string
  question: string
  children: React.ReactNode
}

export function FAQItem({ id, question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div id={id} style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <h3
          className="text-xl sm:text-2xl leading-snug"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#1B3A6B',
          }}
        >
          {question}
        </h3>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg mt-0.5 transition-transform duration-300"
          style={{
            background: 'rgba(201,169,110,0.12)',
            color: '#C9A96E',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          display: open ? 'block' : 'none',
          paddingBottom: '1.5rem',
        }}
      >
        {children}
      </div>
    </div>
  )
}
