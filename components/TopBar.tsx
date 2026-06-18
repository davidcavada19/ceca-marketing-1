'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { SiteContent } from '@/lib/content'
import CtaButton from './ui/CtaButton'

interface TopBarProps {
  t: SiteContent
  lang: string
  online: string
  isRoot?: boolean
}

export default function TopBar({ t, lang, online, isRoot: isRootProp }: TopBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
const isRoot = isRootProp ?? (!pathname.startsWith('/en') && !pathname.startsWith('/es'))
  const base = isRoot ? '' : `/${lang}`

  const navLinks = [
    { label: t.nav_home, href: isRoot ? '/' : `/${lang}` },
    { label: t.nav_about, href: `${base}/about` },
    { label: t.nav_services, href: `${base}/services` },
    { label: t.nav_blog, href: `${base}/blog` },
    { label: t.nav_faq, href: `${base}/faq` },
    { label: t.nav_contact, href: `${base}/contact` },
  ]

  const switchLang = (L: string) => {
    if (L === 'en') {
      // Si estamos en /es/about → va a /about
      // Si estamos en /es → va a /
      const newPath = pathname.replace(/^\/es/, '') || '/'
      router.push(newPath)
    } else {
      // Si estamos en /about → va a /es/about
      // Si estamos en / → va a /es
      const newPath = `/es${pathname === '/' ? '' : pathname}`
      router.push(newPath)
    }
  }

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid var(--line)' }}>

          {/* Logo */}
          <a href={isRoot ? '/' : `/${lang}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 16, letterSpacing: '-.01em', color: 'var(--fg)', flexShrink: 0, textDecoration: 'none' }}>
            <Image src="/ceca_logo_icon.png" alt="CECA" width={36} height={36} style={{ borderRadius: 8 }} />
            <span style={{ lineHeight: 1.1 }}>CECA<span style={{ color: 'var(--accent)' }}>.</span><br />Marketing</span>
          </a>

          {/* Centro — Nav links (solo desktop) */}
          <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <a key={link.href} href={link.href} style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  color: isActive ? 'var(--accent)' : 'var(--fg)',
                  opacity: isActive ? 1 : 0.7,
                  fontWeight: isActive ? 700 : 400,
                  borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                  paddingBottom: 2, transition: 'opacity .15s, color .15s',
                }}>
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Derecha — Desktop: Lang + CTA / Mobile: Lang + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {/* Lang switcher — siempre visible */}
            <div style={{ display: 'flex', border: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, padding: 2 }}>
              {(['en', 'es'] as const).map((L) => (
                <button key={L} onClick={() => switchLang(L)}
                  style={{ background: lang === L ? 'var(--accent)' : 'transparent', color: lang === L ? 'var(--accent-contrast)' : 'var(--fg)', padding: '5px 8px', border: 0, cursor: 'pointer', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}
                >{L}</button>
              ))}
            </div>

            {/* CTA — solo desktop */}
            <div className="nav-cta-desktop">
              <CtaButton lang={lang} onClick={() => router.push(`${base}/contact`)} style={{ padding: '9px 12px', fontSize: 10 }}>
                {t.nav_cta}
              </CtaButton>
            </div>

            {/* Hamburger — solo mobile */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'transparent', border: '1px solid var(--line)', padding: '7px 9px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4 }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: 18, height: 1.5, background: menuOpen ? 'var(--accent)' : 'var(--fg)', transition: 'transform .2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--fg)', opacity: menuOpen ? 0 : 1, transition: 'opacity .15s' }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: menuOpen ? 'var(--accent)' : 'var(--fg)', transition: 'transform .2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 61, left: 0, right: 0, bottom: 0,
          zIndex: 59, background: 'var(--bg)', borderTop: '1px solid var(--line)',
          display: 'flex', flexDirection: 'column', padding: '24px 20px', gap: 0,
        }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <a key={link.href} href={link.href} style={{
                fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '.08em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: isActive ? 'var(--accent)' : 'var(--fg)',
                fontWeight: isActive ? 700 : 400,
                padding: '18px 0',
                borderBottom: '1px solid var(--line)',
                opacity: isActive ? 1 : 0.8,
              }}>
                {link.label}
              </a>
            )
          })}
          <div style={{ marginTop: 28 }}>
            <CtaButton lang={lang} onClick={() => { setMenuOpen(false); router.push(`${base}/contact`) }} style={{ width: '100%', padding: '14px', fontSize: 12, textAlign: 'center' }}>
              {t.nav_cta}
            </CtaButton>
          </div>
        </div>
      )}

      <style>{`
        .nav-center { display: flex !important; }
        .nav-cta-desktop { display: block !important; }
        .nav-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .nav-center { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}