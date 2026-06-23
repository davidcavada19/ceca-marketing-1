import PortfolioClient from '@/components/PortfolioClient'

export const metadata = {
  title: 'Portafolio — Diseño Conceptual de Sitios Web | CECA Marketing',
  description: 'Ejemplos conceptuales de cómo CECA Marketing transforma sitios web de contratistas en Houston. Mockups ilustrativos del nivel de diseño y estrategia que aplicamos.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/portfolio',
    languages: {
      en: 'https://cecamarketing.com/portfolio',
      es: 'https://cecamarketing.com/es/portfolio',
      'x-default': 'https://cecamarketing.com/portfolio',
    },
  },
}

export default function PortfolioEs() {
  return <PortfolioClient lang="es" />
}