'use client'
import React from 'react'
import { SiteContent } from '@/lib/content'
import { useLiveTicker, useCountUp } from '@/lib/hooks'
import { smoothScrollTo } from '@/lib/utils'
import CtaButton from './ui/CtaButton'
import InteractiveTicker from './ui/InteractiveTicker'

interface HeroProps { t: SiteContent; accent: string; lang: string }

const SERVICE_CHIPS_EN = ['Local SEO', 'Google Ads', 'Websites', 'Automation', 'Online Reputation']
const SERVICE_CHIPS_ES = ['SEO Local', 'Google Ads', 'Sitios Web', 'Automatización', 'Reputación Online']
export default function Hero({ t, accent, lang }: HeroProps) {
  const stressIdx = t.h1_lines.findIndex((l) => l.includes(t.h1_stress_word))

  return (
    <section id="top" style={{ position: 'relative', paddingTop: 0, paddingBottom: 0, borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>

      {/* Gradient blobs background */}
      <div style={{
  position: 'absolute', top: '-25%', left: '-10%',
  width: 1300, height: 1300, borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 65%)',
  filter: 'blur(100px)',
}} />
<div style={{
  position: 'absolute', bottom: '-20%', right: '-5%',
  width: 900, height: 900, borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)',
  filter: 'blur(80px)',
}} />

      <InteractiveTicker items={t.ticker} />

      {/* Desktop layout */}
      <div className="hero-desktop" style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '80px 28px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 99, padding: '6px 16px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--accent)' }} />
          <span>{t.badge}</span>
        </div>

        {/* Headline */}
        <h1 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-.035em', color: 'var(--fg)' }}>
          {t.h1_lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i === stressIdx
                ? line.split(t.h1_stress_word).map((part, j, arr) => (
                  <React.Fragment key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span style={{ background: 'linear-gradient(90deg, #F97316, #EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic', paddingRight: '0.3em' }}>
                        {t.h1_stress_word}
                      </span>
                    )}
                  </React.Fragment>
                ))
                : line}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p style={{ marginTop: 32, marginBottom: 0, fontSize: 20, lineHeight: 1.6, maxWidth: 560, color: 'var(--muted)' }}>{t.subtitle}</p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40, justifyContent: 'center' }}>
          <CtaButton lang={lang} forceAccent onClick={() => smoothScrollTo('contact')} style={{ padding: '18px 32px', fontSize: 14 }}>{t.cta1}</CtaButton>
          <CtaButton lang={lang} variant="secondary" onClick={() => smoothScrollTo('services')} style={{ padding: '18px 32px', fontSize: 14 }}>{t.cta2}</CtaButton>
        </div>

        {/* Service chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32, justifyContent: 'center' }}>
          {(lang === 'es' ? SERVICE_CHIPS_ES : SERVICE_CHIPS_EN).map((chip) => (
            <span key={chip} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 99, padding: '7px 16px', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
              {chip}
            </span>
          ))}
        </div>

        {/* Contact links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)', justifyContent: 'center' }}>
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: 'var(--muted)', textDecoration: 'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
            (832) 908-2728
          </a>
          <a href="mailto:info@cecamarketing.com" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, color: 'var(--muted)', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            info@cecamarketing.com
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="hero-mobile" style={{ position: 'relative', zIndex: 1, display: 'none', padding: '16px 20px 40px', overflowX: 'hidden', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 99, padding: '5px 14px', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 24 }}>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--accent)' }} />
          <span>{t.badge}</span>
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(27px, 8vw, 50px)', lineHeight: .98, letterSpacing: '-.01em', color: 'var(--fg)' }}>
          {t.h1_lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {i === stressIdx
                ? line.split(t.h1_stress_word).map((part, j, arr) => (
                  <React.Fragment key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span style={{ background: 'linear-gradient(90deg, #F97316, #EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic', paddingRight: '0.2em' }}>
                        {t.h1_stress_word}
                      </span>
                    )}
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24, justifyContent: 'center' }}>
          {(lang === 'es' ? SERVICE_CHIPS_ES : SERVICE_CHIPS_EN).map((chip) => (
            <span key={chip} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 99, padding: '6px 14px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}