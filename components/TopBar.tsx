'use client'
import { useState, useEffect } from 'react'
import { SiteContent } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import CtaButton from './ui/CtaButton'

interface TopBarProps {
  t: SiteContent
  lang: string
  setLang: (l: string) => void
  online: string
}

export default function TopBar({ t, lang, setLang, online }: TopBarProps) {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hh = String((now.getUTCHours() + 19) % 24).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      setClock(`${hh}:${mm}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
      <nav style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '14px 20px', borderTop: '1px solid var(--line)' }}>

        {/* LEFT — Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 18, letterSpacing: '-.01em', color: 'var(--fg)' }}>
          <span style={{ width: 22, height: 22, background: 'var(--accent)', display: 'inline-block', clipPath: 'polygon(0 0,100% 0,100% 70%,70% 100%,0 100%)' }} />
          <span>CECA<span style={{ color: 'var(--accent)' }}>.</span> Marketing</span>
        </a>

        {/* CENTER — Contacto + Redes */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg)', letterSpacing: '.06em', textTransform: 'uppercase', opacity: 0.75 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            (832) 908-2728
          </a>
          <span style={{ width: 1, height: 14, background: 'var(--line)' }} />
          <a href="mailto:info@cecamarketing.com" title="info@cecamarketing.com"
  style={{ display: 'flex', alignItems: 'center', opacity: 0.75 }}>
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
</a>
          <span style={{ width: 1, height: 14, background: 'var(--line)' }} />
          <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#ig-nav)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="ig-nav" x1="0%" y1="100%" x2="100%" y2="0%">
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
          <a href="https://www.facebook.com/CECAMarketing" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        {/* RIGHT — Lang + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-end' }}>
          <a href="/portfolio" className="nav-portfolio" style={{ display: 'none' }}>Portfolio</a>
          <div style={{ display: 'flex', border: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, padding: 2 }}>
            {['en', 'es'].map((L) => (
              <button key={L} onClick={() => setLang(L)}
                style={{ background: lang === L ? 'var(--accent)' : 'transparent', color: lang === L ? 'var(--accent-contrast)' : 'var(--fg)', padding: '5px 10px', border: 0, cursor: 'pointer', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}
              >{L}</button>
            ))}
          </div>
          <CtaButton lang={lang} onClick={() => smoothScrollTo('contact')} style={{ padding: '10px 16px', fontSize: 11 }}>
            {t.nav_cta}
          </CtaButton>
        </div>

      </nav>
    </div>
  )
}