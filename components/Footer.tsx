'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SiteContent } from '@/lib/content'

interface FooterProps { t: SiteContent; online: string }

export default function Footer({ t, online }: FooterProps) {
  const pathname = usePathname()
  const isEs = pathname.startsWith('/es')
  const base = isEs ? '/es' : ''

  const navLinks = [
    { label: t.nav_home, href: isEs ? '/es' : '/' },
    { label: t.nav_about, href: `${base}/about` },
    { label: t.nav_services, href: `${base}/services` },
    { label: t.nav_blog, href: `${base}/blog` },
    { label: t.nav_faq, href: `${base}/faq` },
    { label: t.nav_contact, href: `${base}/contact` },
  ]

  return (
    <footer style={{ padding: '60px 28px 28px', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', justifyItems: 'start', alignItems: 'start', gap: 60, paddingBottom: 40, borderBottom: '1px solid var(--line)' }}>

          {/* Col 1 — Logo + tagline + nav */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Image src="/ceca_logo_icon.png" alt="CECA Marketing" width={44} height={44} style={{ borderRadius: 10 }} />
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 28, lineHeight: 0.9, letterSpacing: '-.04em', color: 'var(--fg)' }}>
                CECA<span style={{ color: 'var(--accent)' }}>.</span>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: 24, lineHeight: 1.6 }}>
              // {t.footer_tagline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
            {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg)', textDecoration: 'none', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700 }}>
           {link.label}
            </a>
         ))}
        </div>
          </div>

          {/* Col 2 — Contact */}
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
            <div style={{ color: 'var(--fg)', marginBottom: 16, letterSpacing: '.08em', fontSize: 11, textTransform: 'uppercase' }}>Contact</div>
            <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)', marginBottom: 10, textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              (832) 908-2728
            </a>
            <a href="mailto:info@cecamarketing.com"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)', marginBottom: 10, textDecoration: 'none' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@cecamarketing.com
            </a>
            <div style={{ marginTop: 4 }}>Houston, TX · UTC-5 / CST</div>
          </div>

          {/* Col 3 — Follow + Status */}
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
            <div style={{ color: 'var(--fg)', marginBottom: 16, letterSpacing: '.08em', fontSize: 11, textTransform: 'uppercase' }}>Follow</div>
            <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)', marginBottom: 10, textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad-f)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="ig-grad-f" x1="0%" y1="100%" x2="100%" y2="0%">
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
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)', marginBottom: 20, textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              CECAMarketing
            </a>
            <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
              <div style={{ color: 'var(--fg)', marginBottom: 6, letterSpacing: '.08em', fontSize: 11, textTransform: 'uppercase' }}>Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ color: 'var(--accent)' }}>◉</span> {online}
              </div>
              <div>NODE 01–04 ONLINE</div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>
          <div>© 2026 CECA Marketing. {t.footer_rights}</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href={`${base}/privacy-policy`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href={`${base}/contact`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>

      </div>
    </footer>
  )
}