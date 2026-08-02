'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿El sitio web es realmente gratis?',
    a: 'Sí. Cada cliente recibe un sitio web personalizado incluido gratis con cualquier plan mensual de marketing. Sin plantillas, sin constructores de páginas — código real, velocidad real.',
  },
  {
    q: '¿Cuánto tarda el SEO para contratistas?',
    a: 'La mayoría de los contratistas comienzan a ver movimiento significativo en los rankings locales dentro de 60-90 días. Los anuncios pagados generan leads de inmediato.',
  },
  {
    q: '¿Hay contratos a largo plazo?',
    a: 'No. Trabajamos mes a mes porque creemos en ganarnos tu negocio cada mes. Cancela cuando quieras.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', lineHeight: 1.3 }}>
              {f.q}
            </span>
            <span style={{
              color: 'var(--accent)',
              fontSize: 20,
              flexShrink: 0,
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform .2s',
              display: 'inline-block',
            }}>
              +
            </span>
          </button>
          {open === i && (
            <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}