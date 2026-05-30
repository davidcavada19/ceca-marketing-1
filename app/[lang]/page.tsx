import { redirect } from 'next/navigation'
import ClientPage from '@/components/ClientPage'
import { CECA_CONTENT } from '@/lib/content'

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (lang !== 'en' && lang !== 'es') redirect('/en')

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const isEs = lang === 'es'

  return (
    <>
      {/* SEO layer — invisible visualmente, legible por Google */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
        <h1>{t.h1_lines.join(' ')}</h1>
        <h2>{isEs ? 'Servicios de Marketing Digital en Houston TX' : 'Digital Marketing Services in Houston TX'}</h2>
        <h2>{isEs ? 'Cómo trabaja nuestra agencia de marketing en Houston' : 'How Our Houston Digital Marketing Agency Works'}</h2>
        <h2>{isEs ? 'Negocios de servicio local en Houston que atendemos' : 'Houston Local Service Businesses We Work With'}</h2>
        <h2>{isEs ? 'Diseño Web Gratis para negocios en Houston' : 'Free Website Design for Houston Businesses'}</h2>
        <h2>{isEs ? 'Auditoría de Marketing Digital Gratis en Houston' : 'Get a Free Digital Marketing Audit in Houston'}</h2>
        <p>{t.subtitle}</p>
        <p>{t.services_sub}</p>
        {t.services.map(s => (
          <div key={s.n}>
            <h3>{s.title}{isEs ? ' en Houston TX' : ' Houston TX'}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <ClientPage lang={lang as 'en' | 'es'} />
    </>
  )
}