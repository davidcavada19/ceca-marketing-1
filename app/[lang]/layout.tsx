import type { Metadata } from 'next'
import RecaptchaProvider from '@/components/RecaptchaProvider'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === 'es'

  return {
    metadataBase: new URL('https://cecamarketing.com'),
    title: isEs
      ? 'Agencia de Marketing Digital Houston TX | CECA Marketing'
      : 'Digital Marketing Agency Houston TX | CECA Marketing',
    description: isEs
      ? 'Agencia de marketing digital en Houston Texas. Anuncios pagados, SEO local, automatizaciones y sitios web gratis para negocios locales. Enfocados en resultados.'
      : 'Houston digital marketing agency specializing in paid ads, local SEO, automations, and websites for local service businesses. Free website included.',
    keywords: isEs
      ? [
          'agencia de marketing digital Houston',
          'agencia marketing digital Houston TX',
          'agencia marketing digital en español Houston',
          'SEO local Houston',
          'publicidad en Google Houston',
          'anuncios pagados Houston',
          'marketing para negocios locales Houston Texas',
          'diseño web Houston Texas',
          'automatización de marketing Houston',
          'marketing HVAC Houston',
          'marketing plomeros Houston',
          'marketing dentistas Houston',
          'generación de leads Houston',
          'Google Business Houston',
          'agencia marketing español Houston Texas',
        ]
      : [
          'digital marketing agency Houston',
          'digital marketing Houston TX',
          'local SEO Houston',
          'Google Ads Houston',
          'paid ads Houston',
          'marketing agency Houston Texas',
          'HVAC marketing Houston',
          'plumber marketing Houston',
          'dental marketing Houston',
          'roofing marketing Houston',
          'Houston small business marketing',
          'lead generation Houston',
          'website design Houston TX',
          'marketing automation Houston',
        ],
    openGraph: {
      type: 'website',
      locale: isEs ? 'es_US' : 'en_US',
      url: isEs ? 'https://cecamarketing.com/es' : 'https://cecamarketing.com/en',
      siteName: 'CECA Marketing',
      title: isEs
        ? 'Agencia de Marketing Digital Houston TX | CECA Marketing'
        : 'Digital Marketing Agency Houston TX | CECA Marketing',
      description: isEs
        ? 'Anuncios pagados, SEO local, automatizaciones y sitios web gratis para negocios locales en Houston.'
        : 'Paid ads, local SEO, automations, and free websites for Houston local businesses.',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CECA Marketing Houston' }],
    },
    alternates: {
      canonical: 'https://cecamarketing.com',
      languages: {
        'en-US': 'https://cecamarketing.com/en',
        'es-US': 'https://cecamarketing.com/es',
        'x-default': 'https://cecamarketing.com',
      },
    },
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <RecaptchaProvider>
      {children}
    </RecaptchaProvider>
  )
}