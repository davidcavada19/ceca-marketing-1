import ClientPage from '@/components/ClientPage'

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const safeLang = (lang === 'en' || lang === 'es') ? lang : 'en'
  return <ClientPage lang={safeLang as 'en' | 'es'} />
}