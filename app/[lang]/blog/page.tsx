'use client'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

const PLACEHOLDER_POSTS = [
  { slug: 'how-to-get-more-leads', category: 'Lead Gen', title: 'How to Get More Leads Without Spending More on Ads', date: 'Jun 2026', read: '5 min' },
  { slug: 'local-seo-guide', category: 'SEO', title: 'The Local SEO Guide for Service Businesses in 2026', date: 'May 2026', read: '7 min' },
  { slug: 'google-ads-mistakes', category: 'Google Ads', title: '5 Google Ads Mistakes That Are Wasting Your Budget', date: 'May 2026', read: '4 min' },
  { slug: 'meta-ads-contractors', category: 'Meta Ads', title: 'Why Meta Ads Work for Contractors (And How to Do It Right)', date: 'Apr 2026', read: '6 min' },
  { slug: 'website-speed-matters', category: 'Web', title: 'Why Your Website Speed Is Killing Your Conversion Rate', date: 'Apr 2026', read: '3 min' },
  { slug: 'crm-automation', category: 'Automations', title: 'How CRM Automation Saves 12 Hours Per Week for Service Businesses', date: 'Mar 2026', read: '5 min' },
]

export default function BlogPage() {
  const params = useParams()
  const router = useRouter()
  const lang = (params?.lang as string) || 'en'

  useEffect(() => {
    if (lang !== 'en' && lang !== 'es') router.push('/en/blog')
  }, [lang, router])

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'Blog' : 'Blog'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn ? <>Marketing tips that<br /><span style={{ color: 'var(--accent)' }}>actually work.</span></> : <>Tips de marketing que<br /><span style={{ color: 'var(--accent)' }}>realmente funcionan.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              {isEn
                ? 'Practical guides, strategies, and insights for service businesses that want to grow.'
                : 'Guías prácticas, estrategias e insights para negocios de servicio que quieren crecer.'}
            </p>
          </section>

          {/* Posts grid */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 1320, margin: '0 auto' }}>
            {/* Featured post */}
            <div style={{ border: '1px solid var(--line)', padding: 'clamp(28px,4vw,48px)', marginBottom: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 32, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                  ◆ {isEn ? 'Featured' : 'Destacado'} · {PLACEHOLDER_POSTS[0].category}
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3.5vw,40px)', letterSpacing: '-.03em', color: 'var(--fg)', lineHeight: 1.05, marginBottom: 16 }}>
                  {PLACEHOLDER_POSTS[0].title}
                </h2>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginBottom: 20 }}>
                  {PLACEHOLDER_POSTS[0].date} · {PLACEHOLDER_POSTS[0].read} {isEn ? 'read' : 'de lectura'}
                </div>
                <a href="#" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                  {isEn ? 'Read article →' : 'Leer artículo →'}
                </a>
              </div>
              <div style={{ background: 'var(--panel)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
                  {isEn ? 'FEATURED IMAGE' : 'IMAGEN DESTACADA'}
                </span>
              </div>
            </div>

            {/* Posts grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', border: '1px solid var(--line)', borderTop: 'none' }}>
              {PLACEHOLDER_POSTS.slice(1).map((post) => (
                <div key={post.slug} style={{ padding: 28, borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', lineHeight: 1.2, marginBottom: 12 }}>
                    {post.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: 16 }}>
                    {post.date} · {post.read} {isEn ? 'read' : 'de lectura'}
                  </div>
                  <a href="#" style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                    {isEn ? 'Read →' : 'Leer →'}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <div style={{ maxWidth: 520, margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                {isEn ? 'Newsletter' : 'Newsletter'}
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 12 }}>
                {isEn ? 'Weekly tips for service businesses.' : 'Tips semanales para negocios de servicio.'}
              </h2>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', marginBottom: 24 }}>
                {isEn ? 'No spam. Just one useful tip every week.' : 'Sin spam. Solo un tip útil cada semana.'}
              </p>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                <input type="email" placeholder={isEn ? 'your@email.com' : 'tu@email.com'}
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, padding: '12px 16px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--fg)', outline: 'none', minWidth: 220 }} />
                <button style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '12px 20px', background: 'var(--accent)', color: 'var(--accent-contrast)', border: 'none', cursor: 'pointer' }}>
                  {isEn ? 'Subscribe →' : 'Suscribirse →'}
                </button>
              </div>
            </div>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}