'use client'
import { useState } from 'react'
import { SiteContent, NicheDef } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'

interface NichesProps { t: SiteContent; selectedNiche: NicheDef | null; onSelectNiche: (n: NicheDef) => void; lang: string }

function NicheCard({ n, selected, onSelect, lang }: { n: NicheDef; selected: boolean; onSelect: (n: NicheDef) => void; lang: string }) {
  const [hover, setHover] = useState(false)
  const active = hover || selected
  const verb = lang === 'es' ? 'Seleccionado' : 'Selected'
  return (
    <div
      className={`niche-card${selected ? ' is-selected' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onSelect(n)}
      style={{
        padding: '26px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: 130, position: 'relative', overflow: 'hidden',
        background: active ? 'var(--accent)' : 'var(--panel)',
        color: active ? 'var(--accent-contrast)' : 'var(--fg)',
        transition: 'background .25s ease, color .25s ease, transform .2s ease',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0.6 }}>{n.code}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path className="check-path" d="M7 12l4 4 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 36 }}>
        <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, letterSpacing: '-.01em' }}>{n.name}</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, opacity: active ? 1 : 0.5, letterSpacing: '.06em', textTransform: 'uppercase' }}>
          {selected ? `✓ ${verb}` : '→'}
        </span>
      </div>
    </div>
  )
}

export default function Niches({ t, selectedNiche, onSelectNiche, lang }: NichesProps) {
  return (
    <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={`// ${t.niches_label}`} num="SEC.04 / 06" />
        <H2 lines={t.niches_title} />
        <p className="reveal" style={{ maxWidth: 540, marginTop: 24, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)' }}>{t.niches_sub}</p>
        <div className="reveal niches-grid" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {t.niches.map((n) => (
            <NicheCard key={n.code} n={n} selected={selectedNiche?.code === n.code} onSelect={onSelectNiche} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
