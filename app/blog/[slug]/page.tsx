import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

interface PageParams {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs('en').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const baseUrl = 'https://cecamarketing.com'

  try {
    const post = await getPostBySlug('en', slug)
    const url = `${baseUrl}/blog/${slug}`

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: url,
        languages: {
          en: `${baseUrl}/blog/${slug}`,
          es: `${baseUrl}/es/blog/${slug}`,
          'x-default': `${baseUrl}/blog/${slug}`,
        },
      },
      openGraph: {
        type: 'article',
        title: post.title,
        description: post.description,
        url,
      },
    }
  } catch {
    return { title: 'Post Not Found | CECA Marketing' }
  }
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params

  let post
  try {
    post = await getPostBySlug('en', slug)
  } catch {
    notFound()
  }

  const lang = 'en'
  const t = CECA_CONTENT.en
  const online = 'ONLINE'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'CECA Marketing' },
    publisher: {
      '@type': 'Organization',
      name: 'CECA Marketing',
      logo: { '@type': 'ImageObject', url: 'https://cecamarketing.com/ceca_logo.png' },
    },
  }

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          <section style={{ padding: 'clamp(60px,10vw,100px) clamp(20px,5vw,80px) clamp(40px,6vw,60px)', maxWidth: 760, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
              {post.category}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1.05, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 20 }}>
              {post.title}
            </h1>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
              {post.date} · {post.readTime} read
            </div>
          </section>

          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 760, margin: '0 auto' }}>
            <div
              className="blog-content"
              style={{ fontFamily: 'var(--body)', fontSize: 17, lineHeight: 1.8, color: 'var(--fg)' }}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </section>

          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3.5vw,42px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              Ready to Get More Leads and Book More Jobs?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              Get a free contractor marketing diagnosis — no pressure, no contracts.
            </p>
            <a href="/contact" style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              Get My Free Diagnosis →
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}