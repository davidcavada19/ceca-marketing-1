import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

interface PageParams {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateStaticParams() {
  const enSlugs = getAllPostSlugs('en').map((slug) => ({ lang: 'en', slug }))
  const esSlugs = getAllPostSlugs('es').map((slug) => ({ lang: 'es', slug }))
  return [...enSlugs, ...esSlugs]
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const safeLang = lang === 'es' ? 'es' : 'en'

  try {
    const post = await getPostBySlug(safeLang, slug)
    const baseUrl = 'https://cecamarketing.com'
    const url = safeLang === 'en' ? `${baseUrl}/blog/${slug}` : `${baseUrl}/es/blog/${slug}`

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: url,
        languages: {
          en: `${baseUrl}/blog/${slug}`,
          es: `${baseUrl}/es/blog/${slug}`,
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
  const { lang, slug } = await params
  const safeLang = (lang === 'en' || lang === 'es') ? lang : 'en'

  let post
  try {
    post = await getPostBySlug(safeLang as 'en' | 'es', slug)
  } catch {
    notFound()
  }

  const t = CECA_CONTENT[safeLang] || CECA_CONTENT.en
  const online = safeLang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = safeLang === 'en'
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
        <TopBar t={t} lang={safeLang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Article header */}
          <section style={{ padding: 'clamp(60px,10vw,100px) clamp(20px,5vw,80px) clamp(40px,6vw,60px)', maxWidth: 760, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
              {post.category}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1.05, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 20 }}>
              {post.title}
            </h1>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '.04em' }}>
              {post.date} · {post.readTime} {isEn ? 'read' : 'de lectura'}
            </div>
          </section>

          {/* Article body */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 760, margin: '0 auto' }}>
            <div
              className="blog-content"
              style={{
                fontFamily: 'var(--body)',
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--fg)',
              }}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </section>

          {/* CTA */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3.5vw,42px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              {isEn ? 'Ready to Get More Leads and Book More Jobs?' : '¿Listo para Conseguir Más Leads y Cerrar Más Trabajos?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn
                ? 'Get a free contractor marketing diagnosis — no pressure, no contracts.'
                : 'Obtén un diagnóstico de marketing gratis — sin presión, sin contratos.'}
            </p>
            <a href={`/${safeLang}/contact`} style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              {isEn ? 'Get My Free Diagnosis →' : 'Obtener Mi Diagnóstico Gratis →'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}