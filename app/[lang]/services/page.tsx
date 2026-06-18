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
      metric: 'RANK HIGHER · GET MORE LEADS',
      title: 'Contractor SEO That Gets You Found on Google.',
      intro: 'When a homeowner searches "HVAC contractor near me" or "roofing company Houston" — are you showing up? Contractor SEO makes sure you do. We build location pages, optimize your Google Business Profile, and implement on-page SEO so your business ranks higher in local search results and generates more calls and estimate requests — without paying for every click. Local SEO is a long-term investment that compounds over time: the longer you do it, the harder it becomes for competitors to outrank you.',
      why: 'Over 80% of local searches result in a call or purchase within 24 hours. Contractor SEO puts your business in front of customers who are already looking for exactly what you offer.',
      note: '* Local SEO results typically take 60–90 days to show meaningful movement.',
      deliverables: [
        { title: 'Full Local SEO Audit', desc: 'We audit your current local search presence — Google Business Profile, citations, on-page SEO, and competitor gap analysis.' },
        { title: 'Google Business Profile Optimization', desc: 'We fully optimize your GMB listing — categories, photos, posts, Q&A, and service areas — to rank in the local map pack.' },
        { title: 'Location & Service Pages', desc: 'We build optimized pages targeting your specific trade and service areas so you rank for the searches that matter.' },
        { title: 'On-Page Local SEO', desc: 'We optimize your website pages for local keywords — city pages, service pages, and schema markup.' },
        { title: 'Online Directory Citations', desc: 'We build and clean up your business listings across 50+ directories — Yelp, BBB, Angi, and more.' },
        { title: 'Review Strategy', desc: 'We build a system to consistently generate 5-star reviews — the #1 ranking factor in local search.' },
        { title: 'Monthly Ranking Report', desc: 'You see exactly where you rank for your target keywords every month — and the trend over time.' },
      ],
    },
    {
      n: '02',
      metric: 'FREE WITH YOUR PLAN',
      title: 'Contractor Websites Built to Generate Calls and Estimate Requests.',
      intro: 'Your website is your #1 sales tool — and most contractor websites are losing customers before they even read a word. We build fast, custom websites designed specifically for contractors. Whether you are an HVAC company, roofer, plumber, electrician, or general contractor — your website should be your best salesperson, working 24/7 even when you are on the job. No templates. No page builders. Real code, built from scratch for your business, your trade, and your market.',
      why: 'A professional contractor website builds trust before the first phone call. Customers Google you before they call — make sure what they find converts them into a lead.',
      note: '* Free with any monthly marketing plan. Restrictions apply. One-page site, 5 sections.',
      deliverables: [
        { title: 'Strategy Session', desc: 'We learn your business, your market, and your ideal customer before writing a single line of code.' },
        { title: 'Custom Contractor Website (5 sections)', desc: 'Home, Services, About, Reviews, Contact. Everything a customer needs to say yes.' },
        { title: 'Mobile Optimized', desc: 'Over 70% of your customers will find you on their phone. Your site works perfectly on every device.' },
        { title: 'Speed & Core Web Vitals', desc: 'A slow website loses customers and ranks lower on Google. We build fast — always.' },
        { title: 'On-Page SEO Foundation', desc: 'Your site is built to be found. Keywords, meta tags, schema markup — all included from day one.' },
        { title: 'Contact Form + WhatsApp Integration', desc: 'Make it easy for customers to reach you however they prefer — form, phone, or WhatsApp.' },
        { title: 'Google Analytics Setup', desc: 'Know exactly how many people visit your site, where they come from, and what they do.' },
      ],
    },
    {
      n: '03',
      metric: 'NEVER MISS A LEAD',
      title: 'Marketing Automation for Contractors That Works While You Work.',
      intro: 'Most contractors lose leads not because they do not get them — but because they do not follow up fast enough. Marketing automation for contractors fixes that. We build automated systems that follow up with every lead instantly, send missed-call texts, request reviews from happy customers, and route leads to the right person — all running 24/7 without you lifting a finger. The average lead goes cold in under 5 minutes. With automation, you respond in seconds — even when you are on a job site.',
      why: 'Speed to lead is the #1 factor in closing a job. Contractors who respond within 5 minutes are 9x more likely to close than those who wait 30 minutes.',
      note: '* Setup fee applies. Monthly maintenance included in plan.',
      deliverables: [
        { title: 'CRM Audit & Setup', desc: 'We audit your current process and set up a CRM system that fits how your business actually works.' },
        { title: 'Missed-Call Text Back', desc: 'Every missed call automatically gets a text — so you never lose a lead to voicemail again.' },
        { title: '5 Core Automation Workflows', desc: 'Lead follow-up sequence, booking confirmation, review request, re-engagement flow, and appointment reminder.' },
        { title: 'SMS & Email Automation', desc: 'Automated SMS and email sequences that go out instantly when a lead comes in.' },
        { title: 'Review Automation', desc: 'Automatically ask happy customers for Google reviews — the #1 driver of local SEO rankings.' },
        { title: 'Team Walkthrough', desc: 'We train your team on how to use the system so nothing falls through the cracks.' },
        { title: '30-Day Check-In', desc: 'We review the automations after 30 days and optimize based on real data.' },
      ],
    },
    {
      n: '04',
      metric: 'MORE CALLS · MORE JOBS',
      title: 'Lead Generation for Contractors — More Calls, More Estimate Requests.',
      intro: 'Paid ads are the fastest way to get new contractor leads — but only when managed correctly. Our lead generation system for contractors combines Google Ads, Meta Ads, and conversion optimization to generate a consistent flow of qualified leads for your business. Every campaign is built around one number: your cost per lead. Not impressions, not clicks, not reach — qualified leads that turn into booked jobs. Every dollar tracked, every lead counted, every campaign optimized for your trade and your market.',
      why: 'Google Ads for contractors delivers leads with purchase intent — people who are actively searching for your service right now, not just scrolling a feed.',
      note: '* Minimum ad spend required. Management fee separate from ad spend.',
      deliverables: [
        { title: 'Discovery Call (20 min)', desc: 'We learn your goals, your market, your budget, and what a good lead looks like for your business.' },
        { title: 'Audience & Competitor Research', desc: 'We analyze who your best customers are and what your competitors are doing — then we do it better.' },
        { title: 'Campaign Architecture + Copy', desc: 'We build the full campaign structure — ad groups, keywords, ad copy, landing pages — from scratch.' },
        { title: 'Google Ads for Contractors', desc: 'Weekly bid optimization, negative keyword management, A/B testing, and budget allocation.' },
        { title: 'Meta Ads for Contractors', desc: 'Facebook and Instagram ads targeting homeowners in your service area by location, behavior, and interest.' },
        { title: 'Conversion Optimization', desc: 'We optimize your landing pages to turn ad clicks into calls and estimate requests.' },
        { title: 'Plain-English Monthly Report', desc: 'No jargon. You get a clear report showing leads generated, cost per lead, ad spend, and ROAS.' },
      ],
    },
  ] : [
    {
      n: '01',
      metric: 'POSICIONA MEJOR · MÁS LEADS',
      title: 'SEO para Contratistas que te Pone en Google.',
      intro: 'Cuando un propietario busca "contratista HVAC cerca de mí" o "empresa de roofing Houston" — ¿estás apareciendo? El SEO para contratistas se asegura de que sí. Construimos páginas de ubicación, optimizamos tu Google Business Profile e implementamos SEO on-page para que tu negocio rankee más alto en búsquedas locales y genere más llamadas y solicitudes de cotización — sin pagar por cada clic. El SEO local es una inversión a largo plazo que se multiplica con el tiempo.',
      why: 'Más del 80% de las búsquedas locales resultan en una llamada o compra en menos de 24 horas. El SEO para contratistas pone tu negocio frente a clientes que ya están buscando exactamente lo que ofreces.',
      note: '* Los resultados de SEO local típicamente tardan 60–90 días en mostrar movimiento significativo.',
      deliverables: [
        { title: 'Auditoría Completa de SEO Local', desc: 'Auditamos tu presencia en búsqueda local — Google Business Profile, citas, SEO on-page y análisis de brechas.' },
        { title: 'Optimización de Google Business Profile', desc: 'Optimizamos completamente tu listing de GMB para rankear en el mapa local.' },
        { title: 'Páginas de Ubicación y Servicio', desc: 'Construimos páginas optimizadas para tu oficio y áreas de servicio para rankear en las búsquedas que importan.' },
        { title: 'SEO On-Page Local', desc: 'Optimizamos las páginas de tu sitio para keywords locales — páginas de ciudad, servicios y schema markup.' },
        { title: 'Citas en Directorios Online', desc: 'Construimos y limpiamos tus listings en 50+ directorios — Yelp, BBB, Angi y más.' },
        { title: 'Estrategia de Reseñas', desc: 'Construimos un sistema para generar reseñas de 5 estrellas consistentemente — el principal factor de ranking local.' },
        { title: 'Reporte Mensual de Posiciones', desc: 'Ves exactamente dónde rankeas para tus keywords objetivo cada mes.' },
      ],
    },
    {
      n: '02',
      metric: 'GRATIS CON TU PLAN',
      title: 'Páginas Web para Contratistas que Generan Llamadas y Cotizaciones.',
      intro: 'Tu sitio web es tu herramienta de ventas #1 — y la mayoría de sitios de contratistas están perdiendo clientes antes de que lean una sola palabra. Construimos sitios web rápidos y personalizados diseñados específicamente para contratistas. Ya seas empresa de HVAC, roofer, plomero, electricista o contratista general — tu sitio debe ser tu mejor vendedor, trabajando 24/7 incluso cuando estás en el trabajo. Sin plantillas. Sin constructores de páginas. Código real, construido desde cero para tu negocio.',
      why: 'Un sitio web profesional para contratistas genera confianza antes de la primera llamada. Los clientes te buscan en Google antes de llamarte — asegúrate de que lo que encuentren los convierta.',
      note: '* Gratis con cualquier plan mensual de marketing. Aplican restricciones. Sitio de una página, 5 secciones.',
      deliverables: [
        { title: 'Sesión de Estrategia', desc: 'Aprendemos tu negocio, tu mercado y tu cliente ideal antes de escribir una línea de código.' },
        { title: 'Sitio Web Personalizado (5 secciones)', desc: 'Inicio, Servicios, Nosotros, Reseñas, Contacto. Todo lo que un cliente necesita para decir sí.' },
        { title: 'Optimizado para Móvil', desc: 'Más del 70% de tus clientes te encontrarán en su teléfono. Tu sitio funciona perfecto en cada dispositivo.' },
        { title: 'Velocidad y Core Web Vitals', desc: 'Un sitio lento pierde clientes y rankea más bajo en Google. Construimos rápido — siempre.' },
        { title: 'Base de SEO On-Page', desc: 'Tu sitio está construido para ser encontrado. Keywords, meta tags, schema markup — todo incluido desde el día uno.' },
        { title: 'Formulario de Contacto + Integración WhatsApp', desc: 'Facilita que los clientes te contacten como prefieran — formulario, teléfono o WhatsApp.' },
        { title: 'Configuración de Google Analytics', desc: 'Sabe exactamente cuántas personas visitan tu sitio, de dónde vienen y qué hacen.' },
      ],
    },
    {
      n: '03',
      metric: 'NUNCA PIERDAS UN LEAD',
      title: 'Automatización de Marketing para Contratistas que Trabaja Mientras Trabajas.',
      intro: 'La mayoría de contratistas pierden leads no porque no los reciben — sino porque no hacen seguimiento lo suficientemente rápido. La automatización de marketing para contratistas arregla eso. Construimos sistemas automáticos que hacen seguimiento a cada lead al instante, envían textos por llamada perdida, solicitan reseñas y enrutan leads — todo funcionando 24/7. El lead promedio se enfría en menos de 5 minutos. Con automatización, respondes en segundos — incluso cuando estás en un trabajo.',
      why: 'La velocidad de respuesta es el factor #1 para cerrar un trabajo. Los contratistas que responden en menos de 5 minutos tienen 9 veces más probabilidad de cerrar que los que esperan 30 minutos.',
      note: '* Se aplica tarifa de configuración. Mantenimiento mensual incluido en el plan.',
      deliverables: [
        { title: 'Auditoría y Configuración de CRM', desc: 'Auditamos tu proceso actual y configuramos un CRM que se adapta a cómo funciona tu negocio.' },
        { title: 'Texto Automático por Llamada Perdida', desc: 'Cada llamada perdida recibe automáticamente un texto — para que nunca pierdas un lead al buzón.' },
        { title: '5 Flujos de Automatización Principales', desc: 'Seguimiento de leads, confirmación de reserva, solicitud de reseña, flujo de reenganche y recordatorio de cita.' },
        { title: 'Automatización SMS y Email', desc: 'Secuencias automáticas que salen al instante cuando entra un lead.' },
        { title: 'Automatización de Reseñas', desc: 'Solicita automáticamente reseñas de Google a clientes satisfechos.' },
        { title: 'Capacitación del Equipo', desc: 'Entrenamos a tu equipo en cómo usar el sistema para que nada se pierda.' },
        { title: 'Revisión a los 30 Días', desc: 'Revisamos las automatizaciones después de 30 días y optimizamos basándonos en datos reales.' },
      ],
    },
    {
      n: '04',
      metric: 'MÁS LLAMADAS · MÁS TRABAJOS',
      title: 'Generación de Leads para Contratistas — Más Llamadas, Más Cotizaciones.',
      intro: 'Los anuncios pagados son la forma más rápida de conseguir leads para contratistas — pero solo cuando se manejan correctamente. Nuestro sistema de generación de leads para contratistas combina Google Ads, Meta Ads y optimización de conversión para generar un flujo constante de leads calificados. Cada campaña está construida alrededor de un número: tu costo por lead. No impresiones, no clics — leads calificados que se convierten en trabajos cerrados.',
      why: 'Google Ads para contratistas entrega leads con intención de compra — personas que están buscando activamente tu servicio ahora mismo, no solo scrolleando un feed.',
      note: '* Se requiere gasto mínimo en anuncios. Tarifa de manejo separada del gasto en anuncios.',
      deliverables: [
        { title: 'Llamada de Discovery (20 min)', desc: 'Aprendemos tus objetivos, tu mercado, tu presupuesto y cómo se ve un buen lead para tu negocio.' },
        { title: 'Investigación de Audiencia y Competencia', desc: 'Analizamos quiénes son tus mejores clientes y qué están haciendo tus competidores.' },
        { title: 'Arquitectura de Campaña + Copy', desc: 'Construimos toda la estructura de campaña desde cero.' },
        { title: 'Google Ads para Contratistas', desc: 'Optimización semanal de pujas, keywords negativas, pruebas A/B y asignación de presupuesto.' },
        { title: 'Meta Ads para Contratistas', desc: 'Anuncios en Facebook e Instagram dirigidos a propietarios en tu área de servicio.' },
        { title: 'Optimización de Conversión', desc: 'Optimizamos tus páginas de destino para convertir clics en llamadas y solicitudes de cotización.' },
        { title: 'Reporte Mensual en Lenguaje Claro', desc: 'Sin jerga. Un reporte claro mostrando leads generados, costo por lead, gasto en anuncios y ROAS.' },
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
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? '// What We Do' : '// Lo Que Hacemos'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn
                ? <>Marketing Systems Built<br /><span style={{ color: 'var(--accent)' }}>for Contractors.</span></>
                : <>Sistemas de Marketing<br /><span style={{ color: 'var(--accent)' }}>para Contratistas.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 640, lineHeight: 1.6 }}>
              {isEn
                ? 'Every service is built around one goal: more leads, more booked jobs, and more revenue for your contracting business. Use them individually or stack them for compounding growth.'
                : 'Cada servicio está construido alrededor de un objetivo: más leads, más trabajos cerrados y más ingresos para tu negocio. Úsalos individualmente o combínalos para un crecimiento multiplicado.'}
            </p>
          </section>

          {/* Services */}
          {services.map((s, idx) => (
            <section key={s.n} style={{ borderTop: '1px solid var(--line)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', background: idx % 2 === 1 ? 'var(--panel)' : 'var(--bg)' }}>
              <div style={{ maxWidth: 1320, margin: '0 auto' }}>

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

                    <a href={`/${lang}/contact`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: 2 }}>
                      {isEn ? 'Get My Free Diagnosis →' : 'Obtener Mi Diagnóstico Gratis →'}
                    </a>

                    <div style={{ marginTop: 32, padding: 24, border: '1px solid var(--line)', background: 'var(--bg)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
                        {isEn ? '// Why it matters' : '// Por qué importa'}
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

                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
                      {isEn ? "// What's included" : '// Qué incluye'}
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
              {isEn ? 'Ready to Get More Leads and Book More Jobs?' : '¿Listo para Conseguir Más Leads y Cerrar Más Trabajos?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn
                ? "Get a free marketing diagnosis and find out exactly what's holding your business back."
                : 'Obtén un diagnóstico de marketing gratis y descubre exactamente qué está frenando tu negocio.'}
            </p>
            <a href={`/${lang}/contact`} style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              {isEn ? 'Get My Free Diagnosis →' : 'Obtener Mi Diagnóstico Gratis →'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}