// app/blog/page.tsx
export const metadata = {
  title: 'Contractor Marketing Blog | Tips, Guides & Strategies | CECA Marketing',
  description:
    'Practical contractor marketing guides, SEO tips, and lead generation strategies for HVAC, roofing, plumbing, electrical, and general contractors.',
  alternates: {
    canonical: 'https://cecamarketing.com/blog',
    languages: {
      en: 'https://cecamarketing.com/blog',
      es: 'https://cecamarketing.com/es/blog',
    },
  },
}

export { default } from '@/app/[lang]/blog/page'