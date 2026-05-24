import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono, Geist, Geist_Mono, Space_Grotesk, Instrument_Serif } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], variable: '--font-inter-tight', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-jetbrains', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space-grotesk', display: 'swap' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal','italic'], variable: '--font-instrument', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://cecamarketing.com'),
  title: {
    default: 'CECA Marketing — Digital Marketing Agency Houston TX',
    template: '%s | CECA Marketing Houston',
  },
  description: 'Houston digital marketing agency specializing in paid ads, local SEO, automations, and websites for local service businesses. Free website included. Revenue-focused results.',
  keywords: [
    'digital marketing agency Houston', 'digital marketing Houston TX', 'local SEO Houston',
    'Google Ads Houston', 'paid ads Houston', 'marketing agency Houston Texas',
    'HVAC marketing Houston', 'plumber marketing Houston', 'dental marketing Houston',
    'roofing marketing Houston', 'Houston small business marketing', 'lead generation Houston',
    'website design Houston TX', 'marketing automation Houston',
    'agencia de marketing digital Houston', 'agencia marketing digital Houston TX',
    'agencia marketing digital en español Houston', 'SEO local Houston',
    'publicidad en Google Houston', 'marketing para negocios locales Houston',
    'diseño web Houston Texas', 'generación de leads Houston',
  ],
  authors: [{ name: 'CECA Marketing', url: 'https://cecamarketing.com' }],
  creator: 'CECA Marketing',
  openGraph: {
    type: 'website', locale: 'en_US', alternateLocale: 'es_US',
    url: 'https://cecamarketing.com', siteName: 'CECA Marketing',
    title: 'CECA Marketing — Digital Marketing Agency Houston TX',
    description: 'Paid ads, local SEO, automations, and free websites for Houston local businesses.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CECA Marketing Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CECA Marketing — Digital Marketing Agency Houston TX',
    description: 'Paid ads, local SEO, automations, and free websites for Houston local businesses.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: {
    canonical: 'https://cecamarketing.com',
    languages: { 'en-US': 'https://cecamarketing.com', 'es-US': 'https://cecamarketing.com/?lang=es' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[interTight.variable, jetbrainsMono.variable, geist.variable, geistMono.variable, spaceGrotesk.variable, instrumentSerif.variable].join(' ')}>
      <body>{children}</body>
    </html>
  )
}