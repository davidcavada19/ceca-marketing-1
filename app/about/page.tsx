// app/about/page.tsx  ← root redirect (same pattern as services)
export const metadata = {
  title: 'About CECA Marketing | Contractor Marketing Agency Houston TX',
  description:
    'CECA Marketing is a contractor marketing agency based in Houston, TX. We help HVAC, roofing, plumbing, electrical, and general contractors generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/about',
    languages: {
      en: 'https://cecamarketing.com/about',
      es: 'https://cecamarketing.com/es/about',
    },
  },
}

export { default } from '@/app/[lang]/about/page'