import FAQPageClient from '@/components/FAQPageClient'

export const metadata = {
  title: 'Preguntas Frecuentes sobre Marketing para Contratistas | CECA Marketing',
  description:
    'Respuestas a las preguntas más comunes sobre marketing para contratistas, SEO, generación de leads y automatización de marketing para HVAC, roofing, plomería y electricidad.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/faq',
    languages: {
      en: 'https://cecamarketing.com/faq',
      es: 'https://cecamarketing.com/es/faq',
      'x-default': 'https://cecamarketing.com/faq',
    },
  },
}

export default function FAQPageEs() {
  return <FAQPageClient lang="es" />
}