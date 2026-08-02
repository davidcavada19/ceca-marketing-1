import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const outfit = Outfit({ subsets: ['latin'], weight: ['700','800','900'], variable: '--font-outfit', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700', '800', '900'], variable: '--font-dm-sans', display: 'swap' })

const fontVars = [outfit.variable, dmSans.variable].join(' ')

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://cecamarketing.com/#organization',
  name: 'CECA Marketing',
  url: 'https://cecamarketing.com',
  logo: 'https://cecamarketing.com/ceca_logo.png',
  image: 'https://cecamarketing.com/og-image.jpg',
  description: 'Contractor marketing agency specializing in SEO, websites, marketing automation, and lead generation for HVAC, roofing, plumbing, electrical, and general contractors.',
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
    name: 'Contractor Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contractor SEO',
          description: 'Local SEO for contractors — rank higher on Google and generate more leads for HVAC, roofing, plumbing, electrical, and remodeling businesses.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contractor Web Design',
          description: 'Custom websites for contractors built to generate calls and estimate requests. Free with any monthly marketing plan.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation for Contractors',
          description: 'Missed-call text back, automated follow-up, review requests, and CRM setup for contractors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Generation for Contractors',
          description: 'Google Ads and Meta Ads campaigns built for contractors — every lead tracked, every dollar accountable.',
        },
      },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cecamarketing.com'),
  title: {
    default: 'Digital Marketing for Contractors | CECA Marketing',
    template: '%s | CECA Marketing',
  },
  description:
    'CECA Marketing helps contractors generate more leads and book more jobs with SEO, websites, automation, and lead generation systems. Serving HVAC, roofing, plumbing, electrical, and general contractors.',
  keywords: [
    'contractor marketing',
    'contractor marketing agency',
    'digital marketing for contractors',
    'marketing for contractors',
    'contractor SEO',
    'contractor web design',
    'marketing automation for contractors',
    'lead generation for contractors',
    'local SEO for contractors',
    'HVAC marketing',
    'roofing marketing',
    'plumber marketing',
    'electrician marketing',
    'contractor marketing Houston',
    'contractor marketing agency Houston TX',
    'agencia de marketing para contratistas',
    'marketing para contratistas Houston',
  ],
  authors: [{ name: 'CECA Marketing', url: 'https://cecamarketing.com' }],
  creator: 'CECA Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_US',
    url: 'https://cecamarketing.com',
    siteName: 'CECA Marketing',
    title: 'Contractor Marketing Agency | SEO, Websites & Automation | CECA Marketing',
    description:
      'CECA Marketing helps contractors generate more leads and book more jobs with SEO, websites, automation, and lead generation systems.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CECA Marketing — Contractor Marketing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Marketing Agency | SEO, Websites & Automation | CECA Marketing',
    description:
      'CECA Marketing helps contractors generate more leads and book more jobs with SEO, websites, automation, and lead generation systems.',
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