import ClientPage from '@/components/ClientPage'

export const metadata = {
  title: 'CECA Marketing | Agencia de Marketing Digital para Contratistas en Houston TX',
  description:
    'CECA Marketing ayuda a contratistas de HVAC, roofing, plomería, electricidad y contratistas generales en Houston, TX a generar más leads y cerrar más trabajos a través de SEO, sitios web, automatización y anuncios pagados.',
  alternates: {
    canonical: 'https://cecamarketing.com/es',
    languages: {
      en: 'https://cecamarketing.com',
      es: 'https://cecamarketing.com/es',
      'x-default': 'https://cecamarketing.com',
    },
  },
}

export default function HomeEs() {
  return <ClientPage lang="es" isRoot={true} />
}