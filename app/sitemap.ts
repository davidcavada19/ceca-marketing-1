import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cecamarketing.com'
  const lastModified = new Date()

  const pages = ['', '/about', '/services', '/blog', '/faq', '/contact']

  const enPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const esPages = pages.map((page) => ({
    url: `${baseUrl}/es${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 0.9 : 0.7,
  }))

  return [...enPages, ...esPages]
}