import FAQPageClient from '@/components/FAQPageClient'

export const metadata = {
  title: 'Contractor Marketing FAQ | CECA Marketing',
  description:
    'Answers to the most common questions about contractor marketing, contractor SEO, lead generation, and marketing automation for HVAC, roofing, plumbing, and electrical contractors.',
  alternates: {
    canonical: 'https://cecamarketing.com/faq',
    languages: {
      en: 'https://cecamarketing.com/faq',
      es: 'https://cecamarketing.com/es/faq',
      'x-default': 'https://cecamarketing.com/faq',
    },
  },
}

export default function FAQPage() {
  return <FAQPageClient lang="en" />
}