'use client'
import Image from 'next/image'
import { SiteContent } from '@/lib/content'

interface FooterProps { t: SiteContent; online: string }

export default function Footer({ t, online }: FooterProps) {
  return (
    <footer style={{ padding: '60px 28px 28px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Image src="/ceca_logo_icon.png" alt="CECA Marketing" width={56} height={56} style={{ borderRadius: 12 }} />
          <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px, 6vw, 50px)', lineHeight: 0.85, letterSpacing: '-.045em', color: 'var(--fg)' }}>
            CECA<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
        </div>
        <div className="footer-grid" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 32, paddingTop: 24, borderTop: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
          <div>
            <div style={{ color: 'var(--fg)', marginBottom: 8 }}>// {t.footer_tagline}</div>
            <div>© 2026 CECA Marketing. {t.footer_rights}</div>
<div className="footer-social-mobile">
  <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#ig-footer-m)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="ig-footer-m" x1="0%" y1="100%" x2="100%" y2="0%">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>
</div>
          </div>
          <div>
            <div style={{ color: 'var(--fg)', marginBottom: 8 }}>CONTACT</div>
            <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', marginBottom: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              (832) 908-2728
            </a>
            <a href="mailto:info@cecamarketing.com"
              style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@cecamarketing.com
            </a>
          </div>
          <div>
            <div style={{ color: 'var(--fg)', marginBottom: 8 }}>LOCATION</div>
            <div>Houston, TX</div>
            <div>UTC-5 / CST</div>
          </div>
          <div>
            <div style={{ color: 'var(--fg)', marginBottom: 8 }}>FOLLOW</div>
            <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', marginBottom: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#e6683c"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#bc1888" stroke="none"/>
              </svg>
              @ceca_marketing
            </a>
            <a href="https://www.facebook.com/CECAMarketing" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              CECAMarketing
            </a>
          </div>
          <div className="footer-status">
            <div style={{ color: 'var(--fg)', marginBottom: 8 }}>STATUS</div>
            <div><span style={{ color: 'var(--accent)' }}>●</span> {online}</div>
            <div>NODE 01–04 ONLINE</div>
          </div>
        </div>
      </div>
    </footer>
  )
}