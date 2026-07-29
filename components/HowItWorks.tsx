'use client'
import { useState, useEffect, useRef } from 'react'
import { SiteContent } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'

interface HowItWorksProps { t: SiteContent; lang: string }

export default function HowItWorks({ t, lang }: HowItWorksProps) {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % t.steps.length)
    }, 3000)
    return () => clearInterval(id)
  }, [t.steps.length])

  return (
    <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={t.how_label} />
        <H2 lines={t.how_title} />
        <p className="reveal" style={{ maxWidth: 540, marginTop: 24, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)' }}>{t.how_sub}</p>

        <div
          className="reveal steps-grid"
          style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
          onMouseLeave={() => { setHovered(null); pausedRef.current = false }}
        >
          {t.steps.map((s, i) => {
            const isHighlighted = hovered === i || (active === i && hovered === null)
            return (
              <div
                key={i}
                onMouseEnter={() => { setHovered(i); pausedRef.current = true }}
                style={{
                  padding: 28,
                  borderRadius: 12,
                  border: '1px solid var(--line)',
                  boxShadow: 'var(--shadow-card)',
                  background: isHighlighted ? 'var(--accent)' : 'var(--bg-card)',
                  color: isHighlighted ? '#ffffff' : 'var(--fg)',
                  transition: 'background .35s ease, color .35s ease, transform .35s ease',
                  transform: isHighlighted ? 'translateY(-4px)' : 'none',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                  <span style={{
                    fontFamily: 'var(--display)', fontWeight: 900,
                    fontSize: 44, lineHeight: 1, letterSpacing: '-.03em',
                    color: isHighlighted ? '#ffffff' : 'var(--accent)',
                  }}>
                    {s.n}
                  </span>
                  <span style={{
                    fontFamily: 'var(--body)', fontSize: 12, fontWeight: 600,
                    opacity: 0.75,
                  }}>
                    {s.t}
                  </span>
                </div>
                <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, lineHeight: 1.1, letterSpacing: '-.02em' }}>
                  {s.title}
                </h3>
                <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.88 }}>
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}