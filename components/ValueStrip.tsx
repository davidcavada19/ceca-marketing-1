'use client'
import { SiteContent } from '@/lib/content'

interface ValueStripProps { t: SiteContent }

export default function ValueStrip({ t }: ValueStripProps) {
  const items = [
    { tag: t.value_tag1, title: t.value_title1, body: t.value_body1 },
    { tag: t.value_tag2, title: t.value_title2, body: t.value_body2 },
    { tag: t.value_tag3, title: t.value_title3, body: t.value_body3 },
  ]

  return (
    <section style={{ padding: '80px 28px', borderBottom: '1px solid var(--line)' }}>
      <div className="value-strip-grid" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, border: '1px solid var(--line)' }}>
        {items.map((item, i) => (
          <div key={i} className="reveal" style={{ padding: '36px 32px', background: 'var(--panel)', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              {item.tag}
            </div>
            <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--fg)' }}>
              {item.title}
            </h3>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}