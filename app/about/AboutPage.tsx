'use client'
// ═══════════════════════════════════════════════════════════════
//   ABOUT PAGE — cecamarketing.com/about (EN)
//   Standalone — all content inline
// ═══════════════════════════════════════════════════════════════

import Link from 'next/link'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { useReveal } from '@/lib/hooks'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

const t = CECA_CONTENT.en
const lang = 'en'

export default function AboutPage() {
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  useReveal()

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={t.online} />

        {/* ── PAGE HERO ── */}
        <section style={{ padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 16px' }}>
              About CECA
            </p>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', margin: '0 0 24px', maxWidth: 700 }}>
              We come from<br />
              <span style={{ color: 'var(--accent)' }}>the trades.</span>
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,19px)', color: 'var(--muted)', maxWidth: 560, lineHeight: 1.6, margin: 0 }}>
              CECA Marketing was built by someone who worked in electrical and remodeling — not another marketer who discovered contractors are a market.
            </p>
          </div>
        </section>

        {/* ── STORY ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
                Our Story
              </p>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 24px' }}>
                Built from the field up.
              </h2>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 20px' }}>
                Before CECA, I worked in electrical and remodeling. I saw firsthand how hard contractors work — and how little most marketing agencies understand about the trades. They talk about "digital strategy" but don't know the difference between a service call and a project bid.
              </p>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 20px' }}>
                CECA was built to fix that. Every service we offer — SEO, websites, automation, lead generation — is designed around one thing: getting your phone to ring with qualified leads.
              </p>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                We're bilingual from day one. Not translated — built. Because Houston's contractor market speaks both English and Spanish, and your competitors are probably only reaching half of it.
              </p>
            </div>
            <div>
              {/* Values */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { n: '01', title: 'Leads over vanity metrics', body: 'We don\'t report impressions or clicks. We report calls, estimate requests, and booked jobs.' },
                  { n: '02', title: 'Honest about timelines', body: 'SEO takes 60–90 days. We\'ll tell you that upfront — and show you the data every month.' },
                  { n: '03', title: 'No long-term contracts', body: 'We earn your business every month. If we\'re not delivering, you shouldn\'t be paying.' },
                  { n: '04', title: 'Built for the trades', body: 'We understand the busy season, the slow season, the margins, and how contractors actually get customers.' },
                ].map((v, i) => (
                  <div key={i} style={{ padding: '24px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 13, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>{v.n}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', marginBottom: 6 }}>{v.title}</div>
                        <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{v.body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY BILINGUAL ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
              Bilingual by Design
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 24px', maxWidth: 560 }}>
              English and Spanish — not translated, built.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 40 }}>
              {[
                { title: 'Both languages from day one', body: 'Your website, ads, and content are built in both languages — not run through a translator after the fact.' },
                { title: 'Reach the full market', body: 'Houston\'s home service market is heavily bilingual. Most agencies only reach half of your potential customers.' },
                { title: 'Spanish-speaking homeowners convert', body: 'When a Spanish-speaking homeowner finds a contractor who communicates in their language, they call. We make sure they find you.' },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--fg)', margin: '0 0 10px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--accent)', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.025em' }}>
              Ready to work with an agency that gets it?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 18, color: 'rgba(255,255,255,0.88)', margin: '0 0 40px', lineHeight: 1.6 }}>
              Start with a free diagnosis — no pressure, no contracts.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: 'var(--accent)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, padding: '16px 28px', borderRadius: 8, textDecoration: 'none' }}>
                Get My Free Diagnosis →
              </Link>
              <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#ffffff', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, padding: '16px 28px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                See Our Services
              </Link>
            </div>
          </div>
        </section>

        <Footer t={t} online={t.online} />
      </div>
    </ThemeProvider>
  )
}