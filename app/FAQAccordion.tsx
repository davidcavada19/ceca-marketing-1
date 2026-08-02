'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is the website really free?',
    a: 'Yes. Every client gets a custom-built contractor website included free with any monthly marketing plan. No templates, no page builders — real code, real speed.',
  },
  {
    q: 'How long does SEO take for contractors?',
    a: 'Most contractors start seeing meaningful movement in local rankings within 60–90 days. Paid ads generate leads immediately.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. We work month-to-month because we believe in earning your business every single month. Cancel anytime.',
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