'use client'
import { useEffect } from 'react'
import { SiteContent, ServiceDef } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import { SectionLabel, H2 } from './ui/SectionLabel'
import Sparkline from './ui/Sparkline'
import CtaButton from './ui/CtaButton'

interface ServicesProps { t: SiteContent; accent: string; lang: string; onOpen: (s: ServiceDef) => void }

function ServiceCard({ s, accent, onOpen, lang }: { s: ServiceDef; accent: string; onOpen: (s: ServiceDef) => void; lang: string }) {
  const moreLabel = lang === 'es' ? 'Ver mas' : 'Learn more'
  return (
    <div className="service-card flip-card" onClick={() => onOpen(s)} style={{ height: 320, position: 'relative', minHeight: 320 }}>
      <div className="flip-inner" style={{ width: '100%', height: '100%' }}>
        <div className="flip-face" style={{ position: 'absolute', inset: 0, padding: 32, background: 'var(--panel)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em' }}>SRV.{s.n}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.06em' }}>{s.metric}</span>
          </div>
          <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, letterSpacing: '-.02em', color: 'var(--fg)' }}>{s.title}</h3>
          <p style={{ marginTop: 14, marginBottom: 28, fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 380 }}>{s.desc}</p>
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderTop: '1px solid var(--line)', paddingTop: 18 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--fg)', border: '1px solid var(--line)', padding: '4px 8px', letterSpacing: '.06em', textTransform: 'uppercase' }}>{tag}</span>
              ))}
            </div>
            <Sparkline accent={accent} seed={parseInt(s.n) + 7} width={100} height={32} bars={parseInt(s.n) % 2 === 1} />
          </div>
        </div>
        <div className="flip-face flip-face--back" style={{ padding: 32, background: 'var(--accent)', color: 'var(--accent-contrast)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', opacity: 0.9, marginBottom: 18 }}>SRV.{s.n} · {s.metric}</div>
            <h3 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 30, lineHeight: 1.05, letterSpacing: '-.02em' }}>{s.title}</h3>
            <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.55, maxWidth: 380 }}>{s.desc}</p>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.7, marginTop: 14, opacity: 0.9 }}>
              {s.tags.map((tag) => <div key={tag}>→ {tag}</div>)}
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            <span>{moreLabel}</span><span>→</span>
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
    ? { eyebrow: 'Detalle de servicio', title: 'Que recibes', cta: 'Empezar', close: 'Cerrar' }
    : { eyebrow: 'Service detail', title: 'What you get', cta: 'Get started', close: 'Close' })

  const deliverables = service.deliverables || [
    lang === 'es' ? 'Discovery call (20 min)' : 'Discovery call (20 min)',
    lang === 'es' ? 'Estrategia hecha a medida' : 'Custom strategy',
    lang === 'es' ? 'Implementacion completa' : 'End-to-end setup',
    lang === 'es' ? 'Optimizacion mensual' : 'Monthly optimisation',
    lang === 'es' ? 'Reportes claros y simples' : 'Plain-english reporting',
  ]

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15,31,61,.55)', display: 'flex', justifyContent: 'flex-end', animation: 'overlayIn .25s ease forwards' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(560px, 100%)', background: 'var(--bg)', color: 'var(--fg)', height: '100%', overflowY: 'auto', animation: 'drawerIn .35s cubic-bezier(.4,0,.1,1) forwards', borderLeft: '1px solid var(--line)' }}>
        <div style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <span><span style={{ color: 'var(--accent)', marginRight: 8 }}>●</span>{headings.eyebrow} · SRV.{service.n}</span>
          <button onClick={onClose} aria-label="close" style={{ background: 'transparent', border: 0, color: 'var(--fg)', cursor: 'pointer', fontSize: 16 }}>✕</button>
        </div>
        <div style={{ padding: 32 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{service.metric}</span>
          <h2 style={{ margin: '6px 0 0', fontFamily: 'var(--display)', fontWeight: 900, fontSize: 46, lineHeight: 1, letterSpacing: '-.03em' }}>{service.title}</h2>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: 'var(--muted)' }}>
            {service.desc} {lang === 'es' ? 'Construido para mover la aguja, no solo verse bonito — cada decision parte de los numeros.' : 'Built to move the numbers, not just look pretty — every decision starts with the data.'}
          </p>
          <div style={{ marginTop: 30, paddingTop: 22, borderTop: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 14 }}>// {headings.title}</div>
            {deliverables.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < deliverables.length - 1 ? '1px dashed var(--line)' : 'none' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ fontSize: 15 }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30, paddingTop: 22, borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {service.tags.map((tag, i) => <div key={i}>→ {tag}</div>)}
          </div>
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

export default function Services({ t, accent, onOpen, lang }: ServicesProps) {
  return (
    <section id="services" style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={`// ${t.services_label}`} num="SEC.02 / 06" />
        <H2 lines={t.services_title} />
        <p className="reveal" style={{ maxWidth: 540, marginTop: 24, fontSize: 17, lineHeight: 1.55, color: 'var(--muted)' }}>{t.services_sub}</p>
        <div className="services-grid"
style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {t.services.map((s) => (
            <div key={s.n} className="reveal">
              <ServiceCard s={s} accent={accent} onOpen={onOpen} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
