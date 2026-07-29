'use client'
import { useEffect } from 'react'
import { SiteContent, ServiceDef } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import { H2 } from './ui/SectionLabel'
import CtaButton from './ui/CtaButton'

interface ServicesProps { t: SiteContent; accent: string; lang: string; onOpen: (s: ServiceDef) => void }

/* Eyebrow — replaces SectionLabel (no "//", no SEC.XX counter) */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: '0 0 12px',
      fontFamily: 'var(--body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
    }}>
      {children}
    </p>
  )
}

function ServiceCard({ s, onOpen, lang }: { s: ServiceDef; onOpen: (s: ServiceDef) => void; lang: string }) {
  const moreLabel = lang === 'es' ? 'Ver más' : 'Learn more'
  return (
    <div className="service-card flip-card" onClick={() => onOpen(s)} style={{ height: 320, position: 'relative', minHeight: 320 }}>
      <div className="flip-inner" style={{ width: '100%', height: '100%' }}>

        {/* Front */}
        <div className="flip-face" style={{
          position: 'absolute', inset: 0, padding: 32,
          background: 'var(--bg-card)',
          border: '1px solid var(--line)',
          borderRadius: 12,
          boxShadow: 'var(--shadow-card)',
          display: 'flex', flexDirection: 'column',
        }}>
          <span style={{
            fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700,
            color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            {s.metric}
          </span>
          <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, letterSpacing: '-.02em', color: 'var(--fg)' }}>{s.title}</h3>
          <p style={{ marginTop: 14, marginBottom: 28, fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 380 }}>{s.desc}</p>
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: 18 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: 'var(--body)', fontSize: 12, fontWeight: 500,
                  color: 'var(--muted)',
                  background: 'var(--subtle)',
                  borderRadius: 99,
                  padding: '5px 12px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontSize: 18, flexShrink: 0, marginLeft: 12 }}>→</span>
          </div>
        </div>

        {/* Back (hover / tap) */}
        <div className="flip-face flip-face--back" style={{
          padding: 32,
          background: 'var(--accent)',
          color: '#ffffff',
          borderRadius: 12,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0.9, marginBottom: 18 }}>{s.metric}</div>
            <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, letterSpacing: '-.02em' }}>{s.title}</h3>
            <div style={{ fontSize: 15, lineHeight: 1.8, marginTop: 16 }}>
              {s.tags.map((tag) => <div key={tag}>✓ {tag}</div>)}
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--display)', fontSize: 15, fontWeight: 600 }}>
            <span>{moreLabel}</span><span aria-hidden="true">→</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export function ServiceDrawer({ service, lang, onClose }: { service: ServiceDef | null; lang: string; onClose: () => void }) {
  useEffect(() => {
    if (!service) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [service, onClose])

  if (!service) return null

  const headings = (lang === 'es'
    ? { eyebrow: 'Detalle de servicio', title: 'Qué recibes', cta: 'Empezar', close: 'Cerrar' }
    : { eyebrow: 'Service detail', title: 'What you get', cta: 'Get started', close: 'Close' })

  const deliverables = service.deliverables || []

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,15,30,.45)', display: 'flex', justifyContent: 'flex-end', animation: 'overlayIn .25s ease forwards' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(560px, 100%)', background: 'var(--bg)', color: 'var(--fg)', height: '100%', overflowY: 'auto', animation: 'drawerIn .35s cubic-bezier(.4,0,.1,1) forwards', borderLeft: '1px solid var(--line)' }}>
        <div style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <span style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{headings.eyebrow}</span>
          <button onClick={onClose} aria-label={headings.close} style={{ background: 'transparent', border: 0, color: 'var(--fg)', cursor: 'pointer', fontSize: 16 }}>✕</button>
        </div>
        <div style={{ padding: 32 }}>
          <span style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{service.metric}</span>
          <h2 style={{ margin: '6px 0 0', fontFamily: 'var(--display)', fontWeight: 900, fontSize: 46, lineHeight: 1, letterSpacing: '-.03em' }}>{service.title}</h2>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: 'var(--muted)' }}>{service.desc}</p>

          {deliverables.length > 0 && (
            <div style={{ marginTop: 30, paddingTop: 22, borderTop: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 14 }}>{headings.title}</div>
              {deliverables.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < deliverables.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  <span style={{ fontSize: 15 }}>{d}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: 36 }}>
            <CtaButton lang={lang} fullWidth forceAccent onClick={() => { onClose(); setTimeout(() => smoothScrollTo('contact'), 200) }}>
              {headings.cta}
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services({ t, onOpen, lang }: ServicesProps) {
  return (
    <section id="services" style={{ padding: '112px 28px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <Eyebrow>{t.services_label}</Eyebrow>
        <H2 lines={t.services_title} />
        <p className="reveal" style={{ maxWidth: 540, marginTop: 24, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)' }}>{t.services_sub}</p>
        <div className="services-grid" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {t.services.map((s) => (
            <div key={s.n} className="reveal">
              <ServiceCard s={s} onOpen={onOpen} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}