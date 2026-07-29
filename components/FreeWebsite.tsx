'use client'
import { SiteContent } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import { SectionLabel } from './ui/SectionLabel'

interface FreeWebsiteProps { t: SiteContent; lang: string }

export default function FreeWebsite({ t, lang }: FreeWebsiteProps) {
  const ctaText = t.free_cta.replace(/→/g, '').trim()
  const includedTitle = lang === 'es' ? 'Qué incluye' : "What's included"

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .free-title { font-size: clamp(28px, 7vw, 48px) !important; line-height: 1.05 !important; }
        }
      `}</style>
      <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)', background: 'var(--accent)', color: '#ffffff' }}>
        <div className="free-section-grid" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>

          {/* Left — pitch */}
          <div className="free-section-content" style={{ display: 'flex', flexDirection: 'column' }}>
            <SectionLabel label={t.free_label} color="rgba(255,255,255,0.9)" />
            <h2 className="free-title" style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, letterSpacing: '-.03em' }}>
              {t.free_title.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
            </h2>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, maxWidth: 480, opacity: 0.95 }}>{t.free_sub}</p>

            <div style={{ marginTop: 36 }}>
              <button
                onClick={() => smoothScrollTo('contact')}
                className="cta"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#ffffff', color: 'var(--accent)',
                  border: 'none', borderRadius: 8, cursor: 'pointer',
                  padding: '16px 26px',
                  fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
                  transition: 'transform .15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                {ctaText}
                <span className="cta-arrow" aria-hidden="true">→</span>
              </button>
            </div>

            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.5, opacity: 0.85, maxWidth: 480 }}>{t.free_note}</p>

            <div className="contact-row" style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
              <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 600, color: '#ffffff' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                (832) 908-2728
              </a>
              <a href="mailto:info@cecamarketing.com"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 600, color: '#ffffff' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                info@cecamarketing.com
              </a>
            </div>
          </div>

          {/* Right — clean checklist card (replaces the deploy log) */}
          <div className="free-code-box" style={{
            background: '#ffffff',
            color: 'var(--fg)',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(10,15,30,0.18)',
            padding: '32px 32px 28px',
          }}>
            <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>
              {includedTitle}
            </div>
            {t.free_items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '11px 0', borderBottom: i < t.free_items.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                <span style={{ flex: 1, fontSize: 15, color: 'var(--fg)' }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)' }}>
                {lang === 'es' ? 'Precio con plan mensual' : 'Price with monthly plan'}
              </span>
              <span style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 32, color: 'var(--fg)', letterSpacing: '-.02em' }}>
                $0
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}