'use client'
import { SiteContent } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'

interface NichesProps { t: SiteContent; lang: string }

/* Simple line icons in brand orange — replaces the emojis */
function WrenchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
function HardHatIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
      <path d="M10 10V5a2 2 0 0 1 4 0v5" />
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    </svg>
  )
}
function RollerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="16" height="6" rx="2" />
      <path d="M18 5h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-8a2 2 0 0 0-2 2v1" />
      <rect x="9" y="15" width="4" height="7" rx="1" />
    </svg>
  )
}

const GROUPS_EN = [
  { Icon: WrenchIcon, title: 'Mechanical Trades', items: ['HVAC', 'Plumbers', 'Electricians'] },
  { Icon: HardHatIcon, title: 'Construction & Exterior', items: ['Roofers', 'General Contractors', 'Remodelers'] },
  { Icon: RollerIcon, title: 'Specialty Trades', items: ['Painters', 'Flooring', 'Landscapers'] },
]

const GROUPS_ES = [
  { Icon: WrenchIcon, title: 'Oficios Mecánicos', items: ['HVAC', 'Plomeros', 'Electricistas'] },
  { Icon: HardHatIcon, title: 'Construcción y Exterior', items: ['Roofing', 'Contratista General', 'Remodelación'] },
  { Icon: RollerIcon, title: 'Oficios Especializados', items: ['Pintura', 'Pisos', 'Jardinería'] },
]

export default function Niches({ t, lang }: NichesProps) {
  const groups = lang === 'es' ? GROUPS_ES : GROUPS_EN
  const tagline = lang === 'es'
    ? 'Si eres contratista y necesitas más leads y más trabajos cerrados — somos tu agencia.'
    : "From general contractor digital marketing to specialty trades — if you're a contractor who needs more leads and more booked jobs, we're built for you."

  return (
    <section style={{ padding: '112px 28px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={t.niches_label} />
        <H2 lines={t.niches_title} />

        <div className="reveal" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {groups.map(({ Icon, title, items }) => (
            <div
              key={title}
              style={{
                padding: '36px 32px',
                background: 'var(--bg-card)',
                border: '1px solid var(--line)',
                borderRadius: 12,
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ marginBottom: 16 }}><Icon /></div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 14 }}>
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal" style={{ marginTop: 32, fontSize: 16, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 640 }}>
          {tagline}
        </p>
      </div>
    </section>
  )
}