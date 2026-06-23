import PortfolioClient from '@/components/PortfolioClient'

export const metadata = {
  title: 'Portfolio — Conceptual Website Design | CECA Marketing',
  description: 'Conceptual examples of how CECA Marketing transforms contractor websites in Houston. Illustrative mockups of the design and strategy level we apply.',
  alternates: {
    canonical: 'https://cecamarketing.com/portfolio',
    languages: {
      en: 'https://cecamarketing.com/portfolio',
      es: 'https://cecamarketing.com/es/portfolio',
      'x-default': 'https://cecamarketing.com/portfolio',
    },
  },
}

export default function Portfolio() {
  return <PortfolioClient lang="en" />
}