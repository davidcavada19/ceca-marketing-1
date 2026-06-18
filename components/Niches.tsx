'use client'
import { SiteContent } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'

interface NichesProps { t: SiteContent; lang: string }

const GROUPS_EN = [
  {
    emoji: '🔧',
    title: 'Home Services',
    items: ['HVAC', 'Plumbers', 'Electricians', 'Roofers'],
  },
  {
    emoji: '🏥',
    title: 'Medical & Aesthetic',
    items: ['Dentists', 'Med Spas', 'Plastic Surgeons'],
  },
  {
    emoji: '🏗️',
    title: 'Construction & Contractors',
    items: ['Remodelers', 'Flooring', 'Painters'],
  },
]

const GROUPS_ES = [
  {
    emoji: '🔧',
    title: 'Servicios del Hogar',
    items: ['HVAC', 'Plomeros', 'Electricistas', 'Roofing'],
  },
  {
    emoji: '🏥',
    title: 'Médico y Estético',
    items: ['Dentistas', 'Med Spas', 'Cirugía Plástica'],
  },
  {
    emoji: '🏗️',
    title: 'Construcción y Contratistas',
    items: ['Remodelación', 'Pisos', 'Pintura'],
  },
]

export default function Niches({ t, lang }: NichesProps) {
  const groups = lang === 'es' ? GROUPS_ES : GROUPS_EN
  const tagline = lang === 'es'
    ? 'Si tu negocio vende un servicio y necesitas más clientes — somos tu agencia.'
    : 'If your business sells a service and needs more customers — we\'re built for you.'

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