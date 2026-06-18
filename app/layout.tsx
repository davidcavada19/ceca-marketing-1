import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], variable: '--font-inter-tight', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-jetbrains', display: 'swap' })

const fontVars = [interTight.variable, jetbrainsMono.variable].join(' ')

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://cecamarketing.com/#organization',
  name: 'CECA Marketing',
  url: 'https://cecamarketing.com',
  logo: 'https://cecamarketing.com/ceca_logo.png',
  image: 'https://cecamarketing.com/og-image.jpg',
  description: 'Digital marketing agency for local service businesses specializing in Google Ads management, local SEO services, marketing automation, and website design for contractors.',
  telephone: '+18329082728',
  email: 'info@cecamarketing.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: [
    { '@type': 'City', name: 'Houston', sameAs: 'https://en.wikipedia.org/wiki/Houston' },
    { '@type': 'State', name: 'Texas', sameAs: 'https://en.wikipedia.org/wiki/Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
  sameAs: [
    'https://www.instagram.com/ceca_marketing',
    'https://www.facebook.com/CECAMarketing',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services for Local Businesses',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design for Contractors', description: 'Custom website design for contractors and service businesses. Free with any monthly marketing plan.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management', description: 'Google Ads management for local service businesses built around cost-per-lead targets.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Management', description: 'Facebook and Instagram ads management for contractors and service businesses.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Services', description: 'Local SEO services for contractors, HVAC companies, plumbers, roofers, and service businesses.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Automation Services', description: 'Small business marketing automation including CRM setup, SMS flows, and review automation.' } },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cecamarketing.com'),
  title: {
    default: 'CECA Marketing | Digital Marketing Agency Houston TX',
    template: '%s',
  },
  description: 'Houston digital marketing agency specializing in paid ads, local SEO, automations, and websites for local service businesses. Free website included.',
  keywords: [
    'digital marketing agency Houston', 'digital marketing Houston TX', 'local SEO Houston',
    'Google Ads Houston', 'paid ads Houston', 'marketing agency Houston Texas',
    'HVAC marketing Houston', 'plumber marketing Houston', 'dental marketing Houston',
    'roofing marketing Houston', 'Houston small business marketing', 'lead generation Houston',
    'website design Houston TX', 'marketing automation Houston',
    'agencia de marketing digital Houston', 'agencia marketing digital Houston TX',
    'SEO local Houston', 'publicidad en Google Houston',
    'marketing para negocios locales Houston', 'diseño web Houston Texas',
  ],
  authors: [{ name: 'CECA Marketing', url: 'https://cecamarketing.com' }],
  creator: 'CECA Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_US',
    url: 'https://cecamarketing.com',
    siteName: 'CECA Marketing',
    title: 'CECA Marketing | Digital Marketing Agency Houston TX',
    description: 'Paid ads, local SEO, automations, and free websites for Houston local businesses.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CECA Marketing Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CECA Marketing | Digital Marketing Agency Houston TX',
    description: 'Paid ads, local SEO, automations, and free websites for Houston local businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
 alternates: {
    canonical: 'https://cecamarketing.com',
    languages: {
      'en': 'https://cecamarketing.com',
      'es': 'https://cecamarketing.com/es',
      'x-default': 'https://cecamarketing.com',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}