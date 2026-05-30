'use client'
import React from 'react'
import { SiteContent } from '@/lib/content'
import { useLiveTicker, useCountUp } from '@/lib/hooks'
import { smoothScrollTo, fmt } from '@/lib/utils'
import Sparkline from './ui/Sparkline'
import CtaButton from './ui/CtaButton'
import InteractiveTicker from './ui/InteractiveTicker'

interface HeroProps { t: SiteContent; accent: string; lang: string }

function LiveRow({ label, value, accent, seed, bars, last }: { label: string; value: number; accent: string; seed: number; bars?: boolean; last?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', padding: '14px 16px', borderBottom: last ? 'none' : '1px solid var(--line)', gap: 12 }}>
      <div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, lineHeight: 1, letterSpacing: '-.02em', color: 'var(--fg)', fontVariantNumeric: 'tabular-nums' }}>{fmt(value)}</div>
      </div>
      <Sparkline accent={accent} seed={seed} bars={bars} width={120} height={36} />
    </div>
  )
}

function StatCell({ value, prefix = '', suffix = '', label, i, last, live }: { value: number; prefix?: string; suffix?: string; label: string; i: number; last?: boolean; live?: boolean }) {
  const [count, ref] = useCountUp(value)
  const liveBump = useLiveTicker(0, [0, 1], 1100)
  const display = live ? count + (liveBump * (count > 0 ? 1 : 0)) : count
  return (
    <div ref={ref} style={{ padding: '20px 0 24px', borderRight: !last ? '1px solid var(--line)' : 'none', paddingLeft: i === 0 ? 0 : 16, paddingRight: 16 }}>
      <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1, letterSpacing: '-.04em', color: 'var(--fg)', fontVariantNumeric: 'tabular-nums' }}>
        {prefix && <span style={{ color: 'var(--accent)' }}>{prefix}</span>}
        {display}{suffix && <span style={{ color: 'var(--accent)' }}>{suffix}</span>}
        {!prefix && !suffix && <span style={{ color: 'var(--accent)' }}>.</span>}
      </div>
      <div style={{ marginTop: 8, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
        {live && <span className="blink" style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--accent)', flexShrink: 0 }} />}
        <span>{label}</span>
      </div>
    </div>
  )
}

export default function Hero({ t, accent, lang }: HeroProps) {
  const leads   = useLiveTicker(12473, [1, 3], 1100)
  const calls   = useLiveTicker(3128,  [0, 1], 1800)
  const ads     = useLiveTicker(184,   [0, 1], 4500)
  const reviews = useLiveTicker(942,   [0, 1], 2600)
  const stressIdx = t.h1_lines.findIndex((l) => l.includes(t.h1_stress_word))

  return (
    <section id="top" className="scanlines" style={{ position: 'relative', paddingTop: 0, paddingBottom: 0, borderBottom: '1px solid var(--line)' }}>
      <InteractiveTicker items={t.ticker} />

      {/* Desktop layout */}
      <div className="hero-desktop" style={{ maxWidth: 1320, margin: '0 auto', padding: '56px 28px 0', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--line)', padding: '6px 12px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--accent)' }} className="blink" />
            <span>{t.badge}</span>
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(48px, 7.5vw, 124px)', lineHeight: 0.92, letterSpacing: '-.035em', color: 'var(--fg)' }}>
            {t.h1_lines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === stressIdx
                  ? line.split(t.h1_stress_word).map((part, j, arr) => (
                    <React.Fragment key={j}>
                      {part}
                      {j < arr.length - 1 && <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{t.h1_stress_word}</span>}
                    </React.Fragment>
                  ))
                  : line}
              </span>
            ))}
          </h1>
          <p style={{ marginTop: 32, marginBottom: 0, fontSize: 18, lineHeight: 1.55, maxWidth: 520, color: 'var(--muted)' }}>{t.subtitle}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
            <CtaButton lang={lang} forceAccent onClick={() => smoothScrollTo('contact')} style={{ padding: '18px 24px', fontSize: 13 }}>{t.cta1}</CtaButton>
            <CtaButton lang={lang} variant="secondary" onClick={() => smoothScrollTo('services')} style={{ padding: '18px 24px', fontSize: 13 }}>{t.cta2}</CtaButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
            <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: 'var(--muted)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              (832) 908-2728
            </a>
            <a href="mailto:info@cecamarketing.com" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: 'var(--muted)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@cecamarketing.com
            </a>
          </div>
        </div>
        <div style={{ border: '1px solid var(--line)', background: 'var(--panel)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', padding: '10px 16px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
            <span>LIVE.SIGNAL // last 30d</span>
            <span style={{ color: 'var(--accent)' }}>● REC</span>
          </div>
          <LiveRow label="leads.generated" value={leads} accent={accent} seed={2} />
          <LiveRow label="calls.booked" value={calls} accent={accent} seed={3} bars />
          <LiveRow label="ads.running" value={ads} accent={accent} seed={4} />
          <LiveRow label="reviews.collected" value={reviews} accent={accent} seed={5} bars last />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="hero-mobile" style={{ display: 'none', padding: '16px 20px 0', overflowX: 'hidden', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid var(--line)', padding: '5px 10px', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--fg)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 24 }}>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--accent)' }} className="blink" />
          <span>{t.badge}</span>
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(44px, 12vw, 72px)', lineHeight: 0.92, letterSpacing: '-.035em', color: 'var(--fg)' }}>
          {t.h1_lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i === stressIdx
                ? line.split(t.h1_stress_word).map((part, j, arr) => (
                  <React.Fragment key={j}>
                    {part}
                    {j < arr.length - 1 && <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{t.h1_stress_word}</span>}
                  </React.Fragment>
                ))
                : line}
            </span>
          ))}
        </h1>
        <p style={{ marginTop: 20, marginBottom: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--muted)' }}>{t.subtitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28, alignItems: 'center' }}>
          <CtaButton lang={lang} forceAccent onClick={() => smoothScrollTo('contact')} fullWidth style={{ padding: '16px 20px', fontSize: 13 }}>{t.cta1}</CtaButton>
          <CtaButton lang={lang} variant="secondary" onClick={() => smoothScrollTo('services')} fullWidth style={{ padding: '16px 20px', fontSize: 13 }}>{t.cta2}</CtaButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--line)', alignItems: 'center' }}>
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: 'var(--fg)', fontWeight: 600 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
            (832) 908-2728
          </a>
          <a href="mailto:info@cecamarketing.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: 'var(--fg)', fontWeight: 600 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            info@cecamarketing.com
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center' }}>
            <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-hero-m)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="ig-hero-m" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#e6683c"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#bc1888" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/CECAMarketing" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: 1320, margin: '72px auto 0', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)' }} className="stats-grid">
          <StatCell value={48}  suffix="h" label={t.stat1_label} i={0} />
          <StatCell value={0} suffix="%" label={t.stat2_label} i={1} />
          <StatCell value={100} suffix="%" label={t.stat3_label} i={2} />
          <StatCell value={127} live       label={t.stat4_label} i={3} last />
        </div>
      </div>
    </section>
  )
}