'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { SiteContent } from '@/lib/content'

interface TopBarProps {
  t: SiteContent
  lang: string
  online: string
  isRoot?: boolean
}

export default function TopBar({ t, lang, isRoot: isRootProp }: TopBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isRoot = isRootProp ?? (!pathname.startsWith('/en') && !pathname.startsWith('/es'))
  const base = isRoot ? '' : `/${lang}`

  const portfolioLabel = lang === 'en' ? 'Portfolio' : 'Portafolio'

  const navLinks = [
    { label: t.nav_home, href: isRoot ? '/' : `/${lang}` },
    { label: t.nav_about, href: `${base}/about` },
    { label: t.nav_services, href: `${base}/services` },
    { label: portfolioLabel, href: `${base}/portfolio` },
    { label: t.nav_blog, href: `${base}/blog` },
    { label: t.nav_faq, href: `${base}/faq` },
    { label: t.nav_contact, href: `${base}/contact` },
  ]

  const switchLang = (L: string) => {
    if (L === 'en') {
      const newPath = pathname.replace(/^\/es/, '') || '/'
      router.push(newPath)
    } else {
      const newPath = `/es${pathname === '/' ? '' : pathname}`
      router.push(newPath)
    }
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1280,
            margin: '0 auto',
            padding: '14px 28px',
            gap: 16,
          }}
        >
          {/* Logo */}
          <a
            href={isRoot ? '/' : `/${lang}`}
            style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}
          >
            <Image src="/logo-ceca.png" alt="CECA Marketing" width={40} height={40} style={{ borderRadius: 8 }} />
            <span
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 900,
                fontSize: 19,
                color: '#e06c28',
                lineHeight: 1.05,
              }}
            >
              CECA<span style={{ color: 'var(--accent)' }}>.</span>
              <br />
              Marketing
            </span>
          </a>

          {/* Center — nav links (desktop only) */}
          <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: 18.5,
                    fontWeight: isActive ? 700 : 900,
                    color: isActive ? 'var(--accent)' : '#0a0f1e',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    paddingBottom: 2,
                    transition: 'color .15s',
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Right — lang + CTA / hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            {/* Lang switcher */}
            <div
              style={{
                display: 'flex',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                overflow: 'hidden',
                fontFamily: 'var(--body)',
                fontSize: 13,
              }}
            >
              {(['en', 'es'] as const).map((L) => (
                <button
                  key={L}
                  onClick={() => switchLang(L)}
                  style={{
                    background: lang === L ? 'var(--accent)' : 'transparent',
                    color: lang === L ? '#ffffff' : '#0a0f1e',
                    padding: '6px 10px',
                    border: 0,
                    cursor: 'pointer',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {L}
                </button>
              ))}
            </div>

            {/* CTA — desktop only */}
            <button
              className="nav-cta-desktop"
              onClick={() => router.push(`${base}/contact`)}
              style={{
                background: 'var(--accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 8,
                padding: '11px 20px',
                fontFamily: 'var(--display)',
                fontWeight: 400,
                fontSize: 16,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background .15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
            >
              {t.nav_cta}
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                padding: '8px 9px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span style={{ display: 'block', width: 18, height: 2, background: menuOpen ? 'var(--accent)' : '#0a0f1e', transition: 'transform .2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: 18, height: 2, background: '#0a0f1e', opacity: menuOpen ? 0 : 1, transition: 'opacity .15s' }} />
              <span style={{ display: 'block', width: 18, height: 2, background: menuOpen ? 'var(--accent)' : '#0a0f1e', transition: 'transform .2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 69,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 59,
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 24px',
            overflowY: 'auto',
          }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--body)',
                  fontSize: 16,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--accent)' : '#0a0f1e',
                  padding: '16px 0',
                  borderBottom: '1px solid #e5e7eb',
                }}
              >
                {link.label}
              </a>
            )
          })}
          <div style={{ marginTop: 24 }}>
            <button
              onClick={() => {
                setMenuOpen(false)
                router.push(`${base}/contact`)
              }}
              style={{
                width: '100%',
                background: 'var(--accent)',
                color: '#ffffff',
                border: 'none',
                borderRadius: 8,
                padding: '15px',
                fontFamily: 'var(--display)',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              {t.nav_cta}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-center { display: flex !important; }
        .nav-cta-desktop { display: inline-flex !important; }
        .nav-hamburger { display: none !important; }
        @media (max-width: 900px) {
          .nav-center { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}