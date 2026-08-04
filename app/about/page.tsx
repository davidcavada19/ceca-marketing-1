import type { Metadata } from 'next'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: 'About CECA Marketing | Contractor Marketing Agency Houston',
  description:
    'CECA Marketing is a bilingual digital marketing agency founded by someone with real field experience in the trades. We help contractors generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/about',
    languages: {
      en: 'https://cecamarketing.com/about',
      es: 'https://cecamarketing.com/es/about',
      'x-default': 'https://cecamarketing.com/about',
    },
  },
}

export default AboutPage