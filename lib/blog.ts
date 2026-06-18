import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export interface BlogPostMeta {
  slug: string
  lang: 'en' | 'es'
  title: string
  description: string
  category: string
  date: string
  readTime: string
  keyword: string
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPostSlugs(lang: 'en' | 'es'): string[] {
  const dir = path.join(BLOG_DIR, lang)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getAllPostsMeta(lang: 'en' | 'es'): BlogPostMeta[] {
  const slugs = getAllPostSlugs(lang)
  const posts = slugs.map((slug) => {
    const fullPath = findFile(lang, slug)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      lang,
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      date: data.date || '',
      readTime: data.readTime || '5 min',
      keyword: data.keyword || '',
    } as BlogPostMeta
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function findFile(lang: 'en' | 'es', slug: string): string {
  const mdxPath = path.join(BLOG_DIR, lang, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, lang, `${slug}.md`)
  if (fs.existsSync(mdxPath)) return mdxPath
  if (fs.existsSync(mdPath)) return mdPath
  throw new Error(`Post not found: ${lang}/${slug}`)
}

export async function getPostBySlug(lang: 'en' | 'es', slug: string): Promise<BlogPost> {
  const fullPath = findFile(lang, slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    lang,
    title: data.title || '',
    description: data.description || '',
    category: data.category || '',
    date: data.date || '',
    readTime: data.readTime || '5 min',
    keyword: data.keyword || '',
    contentHtml,
  }
}