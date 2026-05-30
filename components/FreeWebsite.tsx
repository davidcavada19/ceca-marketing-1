'use client'
import { SiteContent } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import CtaButton from './ui/CtaButton'

interface FreeWebsiteProps { t: SiteContent; lang: string }

export default function FreeWebsite({ t, lang }: FreeWebsiteProps) {
  return (
    <section style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)', background: 'var(--accent)', color: 'var(--accent-contrast)' }}>
      <div className="free-section-grid" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div className="free-section-content" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 14, borderBottom: '1px solid currentColor', marginBottom: 32, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            <span>// {t.free_label}</span>
            <span>SEC.05 / 06</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px, 6vw, 96px)', lineHeight: 0.94, letterSpacing: '-.03em' }}>
            {t.free_title.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
          </h2>
          <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, maxWidth: 480 }}>{t.free_sub}</p>
          <div style={{ marginTop: 36 }}>
            <CtaButton lang={lang} onClick={() => smoothScrollTo('contact')}
              style={{ background: 'var(--bg)', color: 'var(--fg)', border: '1px solid var(--bg)', padding: '18px 24px' }}>
              {t.free_cta}
            </CtaButton>
          </div>
          <p style={{ marginTop: 18, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', opacity: 0.8 }}>{t.free_note}</p>
          <div className="contact-row"
style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
  <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 24, color: 'var(--accent-contrast)' }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
    </svg>
    (832) 908-2728
  </a>
  <a href="mailto:info@cecamarketing.com"
    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 24, color: 'var(--accent-contrast)' }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
    info@cecamarketing.com
  </a>
</div>
        </div>

        <div className="free-code-box" style={{ border: '1px solid currentColor', background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'var(--mono)', fontSize: 13  }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            <span>~/ceca/deploy · {t.free_box_title}</span>
          </div>
          <div style={{ padding: '18px 18px 22px' }}>
            {t.free_items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '8px 0', borderBottom: i < t.free_items.length - 1 ? '1px dashed var(--line)' : 'none' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span>
                <span style={{ flex: 1 }}>{item}</span>
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>OK</span>
              </div>
            ))}
            <div style={{ marginTop: 18, color: 'var(--accent)' }}>
              $ deploy --client=local --price=$0<span className="blink">▌</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
