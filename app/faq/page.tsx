// app/faq/page.tsx
export const metadata = {
  title: 'Contractor Marketing FAQ | CECA Marketing',
  description:
    'Answers to the most common questions about contractor marketing, contractor SEO, lead generation, and marketing automation for HVAC, roofing, plumbing, and electrical contractors.',
  alternates: {
    canonical: 'https://cecamarketing.com/faq',
    languages: {
      en: 'https://cecamarketing.com/faq',
      es: 'https://cecamarketing.com/es/faq',
    },
  },
}

export { default } from '@/app/[lang]/faq/page'