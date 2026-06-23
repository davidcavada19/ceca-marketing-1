import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cecamarketing.com'
  const lastModified = new Date()

  const pages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
  ]

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

  const enBlogSlugs = getAllPostSlugs('en').map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const esBlogSlugs = getAllPostSlugs('es').map((slug) => ({
    url: `${baseUrl}/es/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...enPages, ...esPages, ...enBlogSlugs, ...esBlogSlugs]
}