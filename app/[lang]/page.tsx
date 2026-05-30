import { redirect } from 'next/navigation'
import ClientPage from '@/components/ClientPage'

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (lang !== 'en' && lang !== 'es') redirect('/en')

  return <ClientPage lang={lang as 'en' | 'es'} />
}