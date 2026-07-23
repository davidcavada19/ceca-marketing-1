import ClientPage from '@/components/ClientPage'

export const metadata = {
 title: 'Agencia de Marketing Digital para Contratistas | CECA Marketing',
description:
      'CECA Marketing es una agencia de marketing digital bilingüe para contratistas. Ayudamos a negocios de servicios del hogar a generar más leads y cerrar más trabajos.',
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