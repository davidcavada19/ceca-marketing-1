import ClientPage from '@/components/ClientPage'

export const metadata = {
  title: 'CECA Marketing | Digital Marketing Agency for Contractors in Houston TX',
  description:
    'CECA Marketing helps HVAC, roofing, plumbing, electrical, and general contractors in Houston, TX generate more leads and book more jobs through SEO, websites, automation, and paid ads.',
  alternates: {
    canonical: 'https://cecamarketing.com',
    languages: {
      en: 'https://cecamarketing.com',
      es: 'https://cecamarketing.com/es',
      'x-default': 'https://cecamarketing.com',
    },
  },
}

export default function Home() {
  return <ClientPage lang="en" isRoot={true} />
}