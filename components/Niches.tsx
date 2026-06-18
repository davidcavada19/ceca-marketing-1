'use client'
import { SiteContent } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'

interface NichesProps { t: SiteContent; lang: string }

const GROUPS_EN = [
  {
    emoji: '🔧',
    title: 'Mechanical Trades',
    items: ['HVAC', 'Plumbers', 'Electricians'],
  },
  {
    emoji: '🏗️',
    title: 'Construction & Exterior',
    items: ['Roofers', 'General Contractors', 'Remodelers'],
  },
  {
    emoji: '🎨',
    title: 'Specialty Trades',
    items: ['Painters', 'Flooring', 'Landscapers'],
  },
]

const GROUPS_ES = [
  {
    emoji: '🔧',
    title: 'Oficios Mecánicos',
    items: ['HVAC', 'Plomeros', 'Electricistas'],
  },
  {
    emoji: '🏗️',
    title: 'Construcción y Exterior',
    items: ['Roofing', 'Contratista General', 'Remodelación'],
  },
  {
    emoji: '🎨',
    title: 'Oficios Especializados',
    items: ['Pintura', 'Pisos', 'Jardinería'],
  },
]

export default function Niches({ t, lang }: NichesProps) {
  const groups = lang === 'es' ? GROUPS_ES : GROUPS_EN
  const tagline = lang === 'es'
    ? 'Si eres contratista y necesitas más leads y más trabajos cerrados — somos tu agencia.'
    : "If you're a contractor who needs more leads and more booked jobs — we're built for you."

  return (
    <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto' }}>
        <SectionLabel label={`// ${t.niches_label}`} num="SEC.03 / 05" />
        <H2 lines={t.niches_title} />

        <div className="reveal" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, border: '1px solid var(--line)' }}>
          {groups.map((g) => (
            <div key={g.title} style={{ padding: '40px 36px', borderRight: '1px solid var(--line)', background: 'var(--panel)' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{g.emoji}</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 16 }}>
                {g.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {g.items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 8 }}>◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal" style={{ marginTop: 32, fontSize: 16, color: 'var(--muted)', fontFamily: 'var(--body)', lineHeight: 1.6 }}>
          {tagline}
        </p>
      </div>
    </section>
  )
}