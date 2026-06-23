import ContactPageClient from '@/components/ContactPageClient'

export const metadata = {
  title: 'Get a Free Marketing Diagnosis | Contact CECA Marketing',
  description:
    'Get a free contractor marketing diagnosis from CECA Marketing. We help HVAC, roofing, plumbing, electrical, and general contractors in Houston, TX generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/contact',
    languages: {
      en: 'https://cecamarketing.com/contact',
      es: 'https://cecamarketing.com/es/contact',
      'x-default': 'https://cecamarketing.com/contact',
    },
  },
}

export default function ContactPage() {
  return <ContactPageClient lang="en" />
}