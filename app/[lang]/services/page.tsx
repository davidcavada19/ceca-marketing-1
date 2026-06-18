'use client'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const params = useParams()
  const router = useRouter()
  const lang = (params?.lang as string) || 'en'

  useEffect(() => {
    if (lang !== 'en' && lang !== 'es') router.push('/en/services')
  }, [lang, router])

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  const services = isEn ? [
    {
      n: '01',
      metric: 'FREE WITH YOUR PLAN',
      title: 'Website Design for Contractors & Service Businesses.',
      intro: 'Your website is your #1 sales tool — and most contractor websites are losing customers before they even read a word. We build fast, custom websites designed to convert visitors into paying customers. Whether you are a general contractor, HVAC company, plumber, roofer, or any home service business — your website should be your best salesperson, working 24/7 even when you are on the job. No templates. No page builders. Real code, built from scratch for your business.',
      why: 'A professional website design for contractors builds trust before the first phone call. Customers Google you before they call you — make sure what they find converts.',
      note: '* Free with any monthly marketing plan. Restrictions apply. One-page site, 5 sections.',
      deliverables: [
        { title: 'Strategy Session', desc: 'We learn your business, your market, and your ideal customer before writing a single line of code.' },
        { title: 'Custom One-Page Site (5 sections)', desc: 'Home, Services, About, Reviews, Contact. Everything a customer needs to say yes.' },
        { title: 'Mobile Optimized', desc: 'Over 70% of your customers will find you on their phone. Your site works perfectly on every device.' },
        { title: 'Speed & Core Web Vitals', desc: 'A slow website loses customers and ranks lower on Google. We build fast — always.' },
        { title: 'On-Page SEO Foundation', desc: 'Your site is built to be found. Keywords, meta tags, schema markup — all included from day one.' },
        { title: 'Contact Form + WhatsApp Integration', desc: 'Make it easy for customers to reach you however they prefer — form, phone, or WhatsApp.' },
        { title: 'Google Analytics Setup', desc: 'Know exactly how many people visit your site, where they come from, and what they do.' },
      ],
    },
    {
      n: '02',
      metric: 'SAVES 12h/WK',
      title: 'Marketing Automation Services That Work While You Sleep.',
      intro: 'Most service businesses lose leads not because they do not get them — but because they do not follow up fast enough. Marketing automation services fix that. We build automated systems that follow up with every lead instantly, send missed-call texts, request reviews from happy customers, and route leads to the right person — all running 24/7 without you lifting a finger. Small business marketing automation that actually saves you time and wins you more jobs.',
      why: 'The average lead goes cold in under 5 minutes. Automated follow-up means you never lose a job to slow response again — even at 2am.',
      note: '* Setup fee applies. Monthly maintenance included in plan.',
      deliverables: [
        { title: 'CRM Audit & Setup', desc: 'We audit your current process and set up a CRM system that fits how your business actually works.' },
        { title: 'Custom Automation Map', desc: 'We map out every touchpoint — lead in, follow-up, booking, review request — before building anything.' },
        { title: '5 Core Workflows Built', desc: 'Missed-call text, lead follow-up sequence, booking confirmation, review request, and re-engagement flow.' },
        { title: 'SMS & Email Automation', desc: 'Automated SMS marketing and email sequences that go out instantly when a lead comes in.' },
        { title: 'Review Automation', desc: 'Automatically ask happy customers for reviews on Google — the #1 driver of local SEO rankings.' },
        { title: 'Team Walkthrough', desc: 'We train your team on how to use the system so nothing falls through the cracks.' },
        { title: '30-Day Check-In', desc: 'We review the automations after 30 days and optimize based on real data.' },
      ],
    },
    {
      n: '03',
      metric: 'AVG 4.2× ROAS',
      title: 'Google Ads Management & Meta Ads for Service Businesses.',
      intro: 'Paid ads are the fastest way to get new customers — but only when managed correctly. Our Google Ads management and Meta Ads campaigns are built around one number: your cost per lead. Not impressions, not clicks, not reach — leads. We handle Google Ads management from strategy to weekly optimization, plus Meta Ads (Facebook and Instagram) for service businesses that want to stay top of mind in their market. Every campaign is built from scratch for your business, your market, and your budget.',
      why: 'Google Ads management for service businesses requires a different approach than e-commerce. We specialize in local service businesses — so we know exactly what converts in your market.',
      note: '* Minimum ad spend required. Management fee separate from ad spend.',
      deliverables: [
        { title: 'Discovery Call (20 min)', desc: 'We learn your goals, your market, your budget, and what a good lead looks like for your business.' },
        { title: 'Audience & Competitor Research', desc: 'We analyze who your best customers are and what your competitors are doing — then we do it better.' },
        { title: 'Campaign Architecture + Copy', desc: 'We build the full campaign structure — ad groups, keywords, ad copy, landing pages — from scratch.' },
        { title: 'Google Ads Management', desc: 'Weekly bid optimization, negative keyword management, A/B testing, and budget allocation.' },
        { title: 'Meta Ads Management', desc: 'Facebook and Instagram ads targeting your ideal customer by location, behavior, and interest.' },
        { title: 'Retargeting Campaigns', desc: 'We follow up with people who visited your site but did not convert — turning browsers into buyers.' },
        { title: 'Plain-English Monthly Report', desc: 'No jargon. You get a clear report showing leads generated, cost per lead, ad spend, and ROAS.' },
      ],
    },
    {
      n: '04',
      metric: 'TOP-3 GMB',
      title: 'Local SEO Services That Get You Found on Google.',
      intro: 'When someone searches for your service in your city, are you showing up? Local SEO services make sure you do — in Google Maps, organic results, and voice search. We specialize in local SEO for contractors, local SEO for dentists, HVAC local SEO, plumbers SEO, and all home service businesses. Local SEO is a long-term investment that compounds over time — the longer you do it, the harder it becomes for competitors to outrank you.',
      why: 'Over 80% of local searches result in a purchase or call within 24 hours. Local SEO services put your business in front of customers who are ready to buy right now.',
      note: '* Local SEO results typically take 60–90 days to show meaningful movement.',
      deliverables: [
        { title: 'Full Local SEO Audit', desc: 'We audit your current local search presence — Google Business Profile, citations, on-page SEO, and competitor gap analysis.' },
        { title: 'Google Business Profile Optimization', desc: 'We fully optimize your GMB listing — categories, photos, posts, Q&A, and service areas — to rank in the local map pack.' },
        { title: 'Online Directory Citations', desc: 'We build and clean up your business listings across 50+ directories — Yelp, BBB, Angi, and more.' },
        { title: 'On-Page Local SEO', desc: 'We optimize your website pages for local keywords — city pages, service pages, and schema markup.' },
        { title: 'Review Strategy', desc: 'We build a system to consistently generate 5-star reviews — the #1 ranking factor in local search.' },
        { title: 'Content Calendar', desc: 'Monthly blog posts and Google Business posts targeting local keywords to build authority over time.' },
        { title: 'Monthly Ranking Report', desc: 'You see exactly where you rank for your target keywords every month — and the trend over time.' },
      ],
    },
  ] : [
    {
      n: '01',
      metric: 'GRATIS CON TU PLAN',
      title: 'Diseño Web para Contratistas y Negocios de Servicio.',
      intro: 'Tu sitio web es tu herramienta de ventas #1 — y la mayoría de sitios web de contratistas están perdiendo clientes antes de que lean una sola palabra. Construimos sitios web rápidos y personalizados diseñados para convertir visitantes en clientes. Ya seas contratista general, empresa de HVAC, plomero, roofer o cualquier negocio de servicios del hogar — tu sitio web debe ser tu mejor vendedor, trabajando 24/7 incluso cuando estás en el trabajo. Sin plantillas. Sin constructores de páginas. Código real, construido desde cero para tu negocio.',
      why: 'Un diseño web profesional para contratistas genera confianza antes de la primera llamada. Los clientes te buscan en Google antes de llamarte — asegúrate de que lo que encuentren los convenza.',
      note: '* Gratis con cualquier plan mensual de marketing. Aplican restricciones. Sitio de una página, 5 secciones.',
      deliverables: [
        { title: 'Sesión de Estrategia', desc: 'Aprendemos tu negocio, tu mercado y tu cliente ideal antes de escribir una sola línea de código.' },
        { title: 'Sitio Personalizado de Una Página (5 secciones)', desc: 'Inicio, Servicios, Nosotros, Reseñas, Contacto. Todo lo que un cliente necesita para decir sí.' },
        { title: 'Optimizado para Móvil', desc: 'Más del 70% de tus clientes te encontrarán en su teléfono. Tu sitio funciona perfectamente en cada dispositivo.' },
        { title: 'Velocidad y Core Web Vitals', desc: 'Un sitio lento pierde clientes y rankea más bajo en Google. Construimos rápido — siempre.' },
        { title: 'Base de SEO On-Page', desc: 'Tu sitio está construido para ser encontrado. Keywords, meta tags, schema markup — todo incluido desde el día uno.' },
        { title: 'Formulario de Contacto + Integración WhatsApp', desc: 'Facilita que los clientes te contacten como prefieran — formulario, teléfono o WhatsApp.' },
        { title: 'Configuración de Google Analytics', desc: 'Sabe exactamente cuántas personas visitan tu sitio, de dónde vienen y qué hacen.' },
      ],
    },
    {
      n: '02',
      metric: 'AHORRA 12h/SEM',
      title: 'Automatización de Marketing que Trabaja Mientras Duermes.',
      intro: 'La mayoría de negocios de servicio pierden leads no porque no los reciben — sino porque no hacen seguimiento lo suficientemente rápido. Los servicios de automatización de marketing arreglan eso. Construimos sistemas automáticos que hacen seguimiento a cada lead al instante, envían textos por llamada perdida, solicitan reseñas a clientes satisfechos y enrutan leads a la persona correcta — todo funcionando 24/7 sin que tú muevas un dedo.',
      why: 'El lead promedio se enfría en menos de 5 minutos. El seguimiento automatizado significa que nunca pierdes un trabajo por respuesta lenta — ni a las 2am.',
      note: '* Se aplica tarifa de configuración. Mantenimiento mensual incluido en el plan.',
      deliverables: [
        { title: 'Auditoría y Configuración de CRM', desc: 'Auditamos tu proceso actual y configuramos un CRM que se adapta a cómo funciona realmente tu negocio.' },
        { title: 'Mapa de Automatización Personalizado', desc: 'Mapeamos cada punto de contacto — lead entrante, seguimiento, reserva, solicitud de reseña — antes de construir nada.' },
        { title: '5 Flujos Principales Construidos', desc: 'Texto por llamada perdida, secuencia de seguimiento de leads, confirmación de reserva, solicitud de reseña y flujo de reenganche.' },
        { title: 'Automatización SMS y Email', desc: 'Secuencias automáticas de SMS y email que salen al instante cuando entra un lead.' },
        { title: 'Automatización de Reseñas', desc: 'Solicita automáticamente reseñas a clientes satisfechos en Google — el principal factor de rankings de SEO local.' },
        { title: 'Capacitación del Equipo', desc: 'Entrenamos a tu equipo en cómo usar el sistema para que nada se pierda.' },
        { title: 'Revisión a los 30 Días', desc: 'Revisamos las automatizaciones después de 30 días y optimizamos basándonos en datos reales.' },
      ],
    },
    {
      n: '03',
      metric: 'PROMEDIO 4.2× ROAS',
      title: 'Manejo de Google Ads y Meta Ads para Negocios de Servicio.',
      intro: 'Los anuncios pagados son la forma más rápida de conseguir nuevos clientes — pero solo cuando se manejan correctamente. Nuestro manejo de Google Ads y campañas de Meta Ads están construidos alrededor de un número: tu costo por lead. No impresiones, no clics, no alcance — leads. Manejamos Google Ads desde la estrategia hasta la optimización semanal, más Meta Ads (Facebook e Instagram) para negocios de servicio que quieren mantenerse en la mente de su mercado.',
      why: 'El manejo de Google Ads para negocios de servicio requiere un enfoque diferente al e-commerce. Nos especializamos en negocios de servicio local — así que sabemos exactamente qué convierte en tu mercado.',
      note: '* Se requiere gasto mínimo en anuncios. Tarifa de manejo separada del gasto en anuncios.',
      deliverables: [
        { title: 'Llamada de Discovery (20 min)', desc: 'Aprendemos tus objetivos, tu mercado, tu presupuesto y cómo se ve un buen lead para tu negocio.' },
        { title: 'Investigación de Audiencia y Competencia', desc: 'Analizamos quiénes son tus mejores clientes y qué están haciendo tus competidores — luego lo hacemos mejor.' },
        { title: 'Arquitectura de Campaña + Copy', desc: 'Construimos toda la estructura de campaña — grupos de anuncios, keywords, copy de anuncios, páginas de destino — desde cero.' },
        { title: 'Manejo de Google Ads', desc: 'Optimización semanal de pujas, manejo de keywords negativas, pruebas A/B y asignación de presupuesto.' },
        { title: 'Manejo de Meta Ads', desc: 'Anuncios en Facebook e Instagram dirigidos a tu cliente ideal por ubicación, comportamiento e interés.' },
        { title: 'Campañas de Retargeting', desc: 'Hacemos seguimiento a personas que visitaron tu sitio pero no convirtieron — convirtiendo visitantes en compradores.' },
        { title: 'Reporte Mensual en Lenguaje Claro', desc: 'Sin jerga. Recibes un reporte claro mostrando leads generados, costo por lead, gasto en anuncios y ROAS.' },
      ],
    },
    {
      n: '04',
      metric: 'TOP-3 GMB',
      title: 'Servicios de SEO Local que te Ponen en el Mapa de Google.',
      intro: 'Cuando alguien busca tu servicio en tu ciudad, ¿estás apareciendo? Los servicios de SEO local se aseguran de que sí — en Google Maps, resultados orgánicos y búsqueda por voz. Nos especializamos en SEO local para contratistas, SEO local para dentistas, SEO local para HVAC, SEO para plomeros y todos los negocios de servicios del hogar. El SEO local es una inversión a largo plazo que se multiplica con el tiempo.',
      why: 'Más del 80% de las búsquedas locales resultan en una compra o llamada en menos de 24 horas. Los servicios de SEO local ponen tu negocio frente a clientes que están listos para comprar ahora mismo.',
      note: '* Los resultados de SEO local típicamente tardan 60–90 días en mostrar movimiento significativo.',
      deliverables: [
        { title: 'Auditoría Completa de SEO Local', desc: 'Auditamos tu presencia en búsqueda local — Google Business Profile, citas, SEO on-page y análisis de brechas con competidores.' },
        { title: 'Optimización de Google Business Profile', desc: 'Optimizamos completamente tu listing de GMB — categorías, fotos, posts, preguntas y áreas de servicio — para rankear en el mapa local.' },
        { title: 'Citas en Directorios Online', desc: 'Construimos y limpiamos tus listings en 50+ directorios — Yelp, BBB, Angi y más.' },
        { title: 'SEO On-Page Local', desc: 'Optimizamos las páginas de tu sitio web para keywords locales — páginas de ciudad, páginas de servicio y schema markup.' },
        { title: 'Estrategia de Reseñas', desc: 'Construimos un sistema para generar consistentemente reseñas de 5 estrellas — el principal factor de ranking en búsqueda local.' },
        { title: 'Calendario de Contenido', desc: 'Posts mensuales en blog y Google Business dirigidos a keywords locales para construir autoridad con el tiempo.' },
        { title: 'Reporte Mensual de Posiciones', desc: 'Ves exactamente dónde rankeas para tus keywords objetivo cada mes — y la tendencia con el tiempo.' },
      ],
    },
  ]

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'What We Do' : 'Lo Que Hacemos'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn
                ? <>Full-Service Digital Marketing<br /><span style={{ color: 'var(--accent)' }}>Agency for Local Businesses.</span></>
                : <>Agencia de Marketing Digital<br /><span style={{ color: 'var(--accent)' }}>Completo para Negocios Locales.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 640, lineHeight: 1.6 }}>
              {isEn
                ? 'Every service is built around one goal: more revenue for your business. Use them individually or stack them for compounding growth.'
                : 'Cada servicio está construido alrededor de un objetivo: más ingresos para tu negocio. Úsalos individualmente o combínalos para un crecimiento multiplicado.'}
            </p>
          </section>

          {/* Services */}
          {services.map((s, idx) => (
            <section key={s.n} style={{ borderTop: '1px solid var(--line)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', background: idx % 2 === 1 ? 'var(--panel)' : 'var(--bg)' }}>
              <div style={{ maxWidth: 1320, margin: '0 auto' }}>

                {/* Service header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</div>
                </div>

                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 24, maxWidth: 800 }}>
                   {s.title}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 60, alignItems: 'start' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 24 }}>
                      {s.intro}
                    </p>

                    {/* CTA intermedio */}
                    <a href={`/${lang}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: 2 }}>
                      {isEn ? 'Get a Free Audit →' : 'Auditoría Gratis →'}
                    </a>

                    <div style={{ marginTop: 32, padding: 24, border: '1px solid var(--line)', background: 'var(--bg)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
                        {isEn ? 'Why it matters' : 'Por qué importa'}
                      </div>
                      <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--fg)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                        "{s.why}"
                      </p>
                    </div>

                    {s.note && (
                      <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em', marginTop: 16 }}>
                        {s.note}
                      </p>
                    )}
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
                      {isEn ? 'What\'s included' : 'Qué incluye'}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {s.deliverables.map((d, i) => (
                        <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <span style={{ color: 'var(--accent)', fontSize: 8, marginTop: 6, flexShrink: 0 }}>◆</span>
                            <div>
                              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14, color: 'var(--fg)', marginBottom: 4 }}>{d.title}</div>
                              <div style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{d.desc}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* CTA Final */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              {isEn ? 'Not Sure Which Service You Need?' : '¿No Sabes Qué Servicio Necesitas?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn
                ? "Let's talk and find the right fit for your business. No pressure, no contracts."
                : 'Hablemos y encontremos el plan perfecto para tu negocio. Sin presión, sin contratos.'}
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