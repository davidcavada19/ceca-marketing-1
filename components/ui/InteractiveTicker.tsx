'use client'
import { useState } from 'react'

interface InteractiveTickerProps { items: string[] }

export default function InteractiveTicker({ items }: InteractiveTickerProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const paused = hovered !== null
  const row = items.concat(items)
  return (
    <div style={{ overflow: 'hidden', width: '100%', maxWidth: '100vw', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '12px 0', background: 'var(--bg)' }}>
      <div className={`marquee-track${paused ? ' paused' : ''}`} style={{ display: 'inline-flex', whiteSpace: 'nowrap', width: 'max-content' }}>
        {row.map((it, i) => {
          const isHover = hovered === i
          return (
            <span key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 18, paddingInline: 20, cursor: 'default', transition: 'color .2s ease', color: isHover ? 'var(--accent)' : 'var(--fg)' }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: isHover ? 'var(--accent)' : 'var(--fg)', opacity: isHover ? 1 : 0.55, transition: 'all .2s ease', transform: isHover ? 'scale(1.6)' : 'scale(1)' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: isHover ? 700 : 500 }}>{it}</span>
              <span style={{ opacity: 0.35, fontFamily: 'var(--mono)', fontSize: 12 }}>◆</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}