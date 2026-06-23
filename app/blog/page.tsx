import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { getAllPostsMeta } from '@/lib/blog'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Marketing Tips for Contractors | CECA Marketing Blog',
  description:
    'Practical SEO guides, lead generation strategies, and marketing tips for HVAC, roofing, plumbing, electrical, and general contractors.',
  alternates: {
    canonical: 'https://cecamarketing.com/blog',
    languages: {
      en: 'https://cecamarketing.com/blog',
      es: 'https://cecamarketing.com/es/blog',
      'x-default': 'https://cecamarketing.com/blog',
    },
  },
}

const COMING_SOON_EN = [
  { category: 'Contractor SEO', title: 'Contractor SEO: How to Rank Higher and Generate More Leads' },
  { category: 'Local SEO', title: 'Local SEO for Contractors: The Complete Guide' },
  { category: 'Automation', title: 'Marketing Automation for Contractors: Never Miss Another Lead' },
  { category: 'Business', title: "Contractor Markup vs Profit Margin: What's the Difference?" },
  { category: 'Lead Gen', title: 'How Contractors Generate Leads Without Buying Leads' },
]

export default function BlogPage() {
  const lang = 'en'
  const t = CECA_CONTENT.en
  const online = 'ONLINE'
  const isEn = true
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  const posts = getAllPostsMeta('en')
  const featured = posts[0]
  const restPublished = posts.slice(1)
  const comingSoon = COMING_SOON_EN

  const blogHref = (slug: string) => `/blog/${slug}`

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Contractor Marketing Blog
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              Contractor Marketing<br /><span style={{ color: 'var(--accent)' }}>Guides That Actually Work.</span>
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              Practical SEO guides, lead generation strategies, and marketing tips for HVAC, roofing, plumbing, electrical, and general contractors.
            </p>
          </section>

          {/* Posts grid */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 1320, margin: '0 auto' }}>

            {featured && (
              <div style={{ border: '1px solid var(--line)', padding: 'clamp(28px,4vw,48px)', marginBottom: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 32, alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                    ◆ Featured · {featured.category}
                  </div>
                  <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3.5vw,40px)', letterSpacing: '-.03em', color: 'var(--fg)', lineHeight: 1.05, marginBottom: 16 }}>
                    {featured.title}
                  </h2>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginBottom: 20 }}>
                    {new Date(featured.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} · {featured.readTime} read
                  </div>
                  <a href={blogHref(featured.slug)} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                    Read article →
                  </a>
                </div>
                <div style={{ background: 'var(--panel)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
                    FEATURED IMAGE
                  </span>
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', border: '1px solid var(--line)', borderTop: 'none' }}>
              {restPublished.map((post) => (
                <div key={post.slug} style={{ padding: 28, borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', lineHeight: 1.2, marginBottom: 12 }}>
                    {post.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em', marginBottom: 16 }}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} · {post.readTime} read
                  </div>
                  <a href={blogHref(post.slug)} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700 }}>
                    Read →
                  </a>
                </div>
              ))}

              {comingSoon.map((post) => (
                <div key={post.title} style={{ padding: 28, borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', opacity: 0.55 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', lineHeight: 1.2, marginBottom: 12 }}>
                    {post.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                    Coming soon
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <div style={{ maxWidth: 520, margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                // Newsletter
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 12 }}>
                Weekly tips for contractors.
              </h2>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', marginBottom: 24 }}>
                No spam. Just one useful contractor marketing tip every week.
              </p>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                <input type="email" placeholder="your@email.com"
                  style={{ fontFamily: 'var(--mono)', fontSize: 12, padding: '12px 16px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--fg)', outline: 'none', minWidth: 220 }} />
                <button style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '12px 20px', background: 'var(--accent)', color: 'var(--accent-contrast)', border: 'none', cursor: 'pointer' }}>
                  Subscribe →
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