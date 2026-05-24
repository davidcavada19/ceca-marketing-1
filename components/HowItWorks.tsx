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

  const microDesc: Record<string, string[]> = {
    en: ['Just listening, no pitch.', 'Most builds wrap in <5 days.', 'Campaigns + automations switch on.', 'Data-led tuning every 30 days.'],
    es: ['Solo escuchamos, sin venta.', 'La mayoria se entrega en <5 dias.', 'Campanas y automatizaciones encendidas.', 'Ajustes mes a mes guiados por datos.'],
  }
  const micro = microDesc[lang] || microDesc.en

  return (
    <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={`// ${t.how_label}`} num="SEC.03 / 06" />
        <H2 lines={t.how_title} />
        <p className="reveal" style={{ maxWidth: 540, marginTop: 24, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)' }}>{t.how_sub}</p>

        <div
          className="reveal steps-grid"
          style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', background: 'var(--panel)' }}
          onMouseLeave={() => { setHovered(null); pausedRef.current = false }}
        >
          {t.steps.map((s, i) => {
            const isHover = hovered === i
            const isActive = active === i && hovered === null
            const isHighlighted = isHover || isActive
            return (
              <div
                key={i}
                onMouseEnter={() => { setHovered(i); pausedRef.current = true }}
                style={{
                  padding: 28, borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                  background: isHighlighted ? (isHover ? 'var(--fg)' : 'var(--accent)') : 'transparent',
                  color: isHighlighted ? (isHover ? 'var(--bg)' : 'var(--accent-contrast)') : 'var(--fg)',
                  transition: 'background .35s ease, color .35s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: isHighlighted ? 'currentColor' : 'var(--accent)' }}>STEP.{s.n}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, opacity: 0.65, letterSpacing: '.06em' }}>{s.t}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ display: 'inline-block', width: 14, height: 14, background: isHighlighted ? 'currentColor' : 'var(--accent)', transition: 'transform .35s cubic-bezier(.4,0,.1,1.1), background .25s ease', transform: isHighlighted ? 'scale(1.3)' : 'scale(1)' }} />
                  {i < 3 && <span style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.5 }} />}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: isHighlighted ? 80 : 56, lineHeight: 0.9, letterSpacing: '-.04em', transition: 'font-size .35s cubic-bezier(.4,0,.1,1.1)' }}>{s.n}</span>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 26, lineHeight: 1, letterSpacing: '-.02em' }}>{s.title}</span>
                </div>
                <p style={{ marginTop: 14, marginBottom: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.85 }}>{s.desc}</p>
                <div style={{
                  marginTop: 14, paddingTop: 14, borderTop: '1px dashed currentColor',
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase',
                  opacity: isHover ? 1 : 0, maxHeight: isHover ? 80 : 0, overflow: 'hidden',
                  transition: 'opacity .35s ease, max-height .45s ease, padding-top .35s ease, margin-top .35s ease',
                }}>
                  {micro[i]}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
