import ContactPageClient from '@/components/ContactPageClient'

export const metadata = {
  title: 'Obtén un Diagnóstico de Marketing Gratis | Contacto CECA Marketing',
  description:
    'Obtén un diagnóstico de marketing gratis de CECA Marketing. Ayudamos a HVAC, roofing, plomería, electricidad y contratistas generales en Houston, TX a generar más leads y cerrar más trabajos.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/contact',
    languages: {
      en: 'https://cecamarketing.com/contact',
      es: 'https://cecamarketing.com/es/contact',
      'x-default': 'https://cecamarketing.com/contact',
    },
  },
}

export default function ContactPageEs() {
  return <ContactPageClient lang="es" />
}