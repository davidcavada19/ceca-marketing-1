'use client'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const params = useParams()
  const router = useRouter()
  const lang = (params?.lang as string) || 'en'

  useEffect(() => {
    if (lang !== 'en' && lang !== 'es') router.push('/en/about')
  }, [lang, router])

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'About Us' : 'Nosotros'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn
                ? <>A Results-Driven Marketing<br /><span style={{ color: 'var(--accent)' }}>Agency Built for Growth.</span></>
                : <>Una Agencia de Marketing<br /><span style={{ color: 'var(--accent)' }}>Enfocada en Resultados Reales.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              {isEn
                ? 'We built CECA because too many great service businesses were losing to competitors with worse work but better marketing.'
                : 'Construimos CECA porque demasiados negocios excelentes perdían ante competidores con peor trabajo pero mejor marketing.'}
            </p>
          </section>

          {/* Mission */}
          <section style={{ background: 'var(--fg)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  {isEn ? 'Our Mission' : 'Nuestra Misión'}
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--bg)', marginBottom: 20 }}>
                  {isEn ? 'Revenue first. Everything else follows.' : 'Ingresos primero. Todo lo demás viene después.'}
                </h2>
              </div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--bg)', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>
                {isEn
                  ? 'Our mission is simple: generate real revenue for service businesses through marketing that actually works. No vanity metrics, no fluff reports, no long-term contracts that lock you in. Just results you can see in your bank account.'
                  : 'Nuestra misión es simple: generar ingresos reales para negocios de servicio a través de marketing que realmente funciona. Sin métricas de vanidad, sin reportes relleno, sin contratos largos que te encierran. Solo resultados que puedes ver en tu cuenta bancaria.'}
              </p>
            </div>
          </section>

          {/* Values */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 32 }}>
                {isEn ? 'What we stand for' : 'En lo que creemos'}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
                {(isEn ? [
                  { label: 'Transparency', desc: 'You always know what we are doing and why. Clear reporting, honest communication — no surprises.' },
                  { label: 'Results First', desc: 'Every decision is tied to your bottom line. If it does not move the needle, we do not do it.' },
                  { label: 'Speed', desc: 'Most clients are live within 5 days. We move fast without cutting corners.' },
                  { label: 'Partnership', desc: 'We treat your business like our own. Your growth is our growth — period.' },
                ] : [
                  { label: 'Transparencia', desc: 'Siempre sabes qué hacemos y por qué. Reportes claros, comunicación honesta — sin sorpresas.' },
                  { label: 'Resultados Primero', desc: 'Cada decisión está ligada a tus ingresos. Si no mueve la aguja, no lo hacemos.' },
                  { label: 'Velocidad', desc: 'La mayoría de clientes están en vivo en 5 días. Rápidos sin saltarnos pasos.' },
                  { label: 'Sociedad', desc: 'Tratamos tu negocio como si fuera el nuestro. Tu crecimiento es nuestro crecimiento — punto.' },
                ]).map((v) => (
                  <div key={v.label}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{v.label}</div>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA #1 */}
          <section style={{ padding: '40px clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--fg)', margin: 0 }}>
                {isEn ? 'Sounds like what your business needs?' : '¿Suena como lo que tu negocio necesita?'}
              </p>
              <a href={`/${lang}/contact`} style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                {isEn ? 'Get a Free Audit →' : 'Auditoría Gratis →'}
              </a>
            </div>
          </section>

          {/* Why CECA */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'Why CECA' : 'Por qué CECA'}
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 48 }}>
              {isEn ? 'What Makes Us Different.' : 'Lo que Nos Hace Diferentes.'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 1, border: '1px solid var(--line)' }}>
              {(isEn ? [
                { n: '01', title: 'No templates. Ever.', desc: 'Every website, ad, and strategy is built from scratch for your business. We never copy-paste.' },
                { n: '02', title: 'No long-term contracts.', desc: 'We work month-to-month because we believe in earning your business every single month.' },
                { n: '03', title: 'Plain-English reporting.', desc: 'No jargon, no vanity metrics. You get a clear monthly report showing exactly what your money did.' },
                { n: '04', title: 'Response in under 24h.', desc: 'You have a direct line to your account manager. No ticket systems, no call centers.' },
                { n: '05', title: 'Live within 5 days.', desc: 'Most clients go from first call to live campaigns in under a week. Speed is part of the service.' },
                { n: '06', title: 'Revenue-focused only.', desc: 'We only track what matters — leads, cost per lead, and revenue. Nothing else.' },
              ] : [
                { n: '01', title: 'Sin plantillas. Nunca.', desc: 'Cada sitio web, anuncio y estrategia se construye desde cero para tu negocio. Nunca copiamos y pegamos.' },
                { n: '02', title: 'Sin contratos largos.', desc: 'Trabajamos mes a mes porque creemos en ganarnos tu negocio cada mes.' },
                { n: '03', title: 'Reportes en lenguaje claro.', desc: 'Sin jerga, sin métricas de vanidad. Recibes un reporte mensual claro que muestra exactamente qué hizo tu dinero.' },
                { n: '04', title: 'Respuesta en menos de 24h.', desc: 'Tienes línea directa con tu account manager. Sin sistemas de tickets, sin call centers.' },
                { n: '05', title: 'En vivo en 5 días.', desc: 'La mayoría de clientes van de la primera llamada a campañas en vivo en menos de una semana.' },
                { n: '06', title: 'Solo enfocados en ingresos.', desc: 'Solo rastreamos lo que importa — leads, costo por lead e ingresos. Nada más.' },
              ]).map((d) => (
                <div key={d.n} style={{ padding: '32px 28px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em', marginBottom: 12 }}>{d.n}</div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story + Stats */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto', borderTop: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  {isEn ? 'Our Story' : 'Nuestra Historia'}
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 20 }}>
                  {isEn ? 'Why We Started CECA.' : 'Por Qué Fundamos CECA.'}
                </h2>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  {isEn
                    ? 'We saw too many great service businesses and contractors losing to competitors with worse work but better marketing. That gap is what CECA was built to close.'
                    : 'Vimos demasiados negocios de servicio y contratistas perder ante competidores con peor trabajo pero mejor marketing. Esa brecha es lo que CECA fue construida para cerrar.'}
                </p>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {isEn
                    ? 'We combine technical marketing expertise with a genuine understanding of how service businesses operate — so our strategies actually fit the way you work.'
                    : 'Combinamos experiencia técnica en marketing con un entendimiento genuino de cómo operan los negocios de servicio — para que nuestras estrategias encajen con tu forma de trabajar.'}
                </p>
              </div>
              <div style={{ border: '1px solid var(--line)', padding: 40, fontFamily: 'var(--mono)', fontSize: 13 }}>
                {[
                  { n: '50+', label: isEn ? 'Deployments' : 'Deployments' },
                  { n: '4.2×', label: isEn ? 'Average ROAS' : 'ROAS promedio' },
                  { n: '5d', label: isEn ? 'Avg. client launch' : 'Lanzamiento promedio' },
                  { n: '100%', label: isEn ? 'Satisfaction guarantee' : 'Garantía de satisfacción' },
                ].map((s) => (
                  <div key={s.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
                    <span style={{ color: 'var(--muted)', letterSpacing: '.06em', fontSize: 11, textTransform: 'uppercase' }}>{s.label}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 20 }}>{s.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA #2 */}
          <section style={{ padding: '40px clamp(20px,5vw,80px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--fg)', margin: 0 }}>
                {isEn ? 'Ready to see results like these for your business?' : '¿Listo para ver resultados como estos en tu negocio?'}
              </p>
              <a href={`/${lang}/contact`} style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                {isEn ? 'Talk to Us →' : 'Hablemos →'}
              </a>
            </div>
          </section>

          {/* Commitment */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'Our Commitment' : 'Nuestro Compromiso'}
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 32 }}>
              {isEn ? 'Our Guarantee to You.' : 'Nuestra Garantía Para Ti.'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 32 }}>
              {(isEn ? [
                { title: '100% Satisfaction Guarantee', desc: 'If you are not happy with the quality of our work in the first 30 days, we will make it right or refund you. No questions asked.' },
                { title: 'No Hidden Fees', desc: 'What you see is what you pay. We are transparent about every dollar — no surprise charges, no hidden costs.' },
                { title: 'Your Assets, Always', desc: 'Everything we build for you is yours. Website, ad accounts, content — if you ever leave, you keep everything.' },
              ] : [
                { title: 'Garantía de Satisfacción 100%', desc: 'Si no estás satisfecho con la calidad de nuestro trabajo en los primeros 30 días, lo corregimos o te devolvemos el dinero. Sin preguntas.' },
                { title: 'Sin Cargos Ocultos', desc: 'Lo que ves es lo que pagas. Somos transparentes con cada dólar — sin cobros sorpresa, sin costos ocultos.' },
                { title: 'Tus Activos, Siempre', desc: 'Todo lo que construimos para ti es tuyo. Sitio web, cuentas de anuncios, contenido — si alguna vez te vas, te llevas todo.' },
              ]).map((c) => (
                <div key={c.title} style={{ padding: 28, border: '1px solid var(--line)' }}>
                  <div style={{ color: 'var(--accent)', fontSize: 20, marginBottom: 12 }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              {isEn ? 'Ready to Grow Your Service Business?' : '¿Listo para Hacer Crecer Tu Negocio?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn
                ? "Let's build a results-driven marketing strategy for your business."
                : 'Construyamos una estrategia de marketing enfocada en resultados para tu negocio.'}
            </p>
            <a href={`/${lang}/contact`} style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              {isEn ? 'Get a Free Audit →' : 'Auditoría Gratis →'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}