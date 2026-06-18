'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

const FAQS_EN = [
  {
    category: 'Website',
    items: [
      { q: 'Is the website really free?', a: 'Yes. Every client gets a custom-built website included free with any monthly marketing plan. No templates, no page builders — real code, real speed.' },
      { q: 'What does the free website include?', a: 'A custom one-page site with 5 sections, mobile optimized, speed optimized, on-page SEO foundation, contact form, and Google Analytics setup.' },
      { q: 'Can I keep the website if I cancel?', a: 'Yes. The website is yours. If you cancel your plan, we transfer everything to you — code, domain, hosting.' },
    ]
  },
  {
    category: 'Pricing',
    items: [
      { q: 'How much do your services cost?', a: 'Plans start at $497/month. Every plan includes the free website. Pricing depends on the services you need and the size of your market.' },
      { q: 'Are there any contracts?', a: 'No long-term contracts. We work month-to-month because we believe in earning your business every month.' },
      { q: 'Do you charge setup fees?', a: 'A one-time setup fee applies for domain, hosting, and onboarding. We will always be transparent about what you are paying for.' },
    ]
  },
  {
    category: 'Results',
    items: [
      { q: 'How fast will I see results?', a: 'Most clients see their first leads within 7–14 days of launch. SEO takes longer — typically 60–90 days to see meaningful movement.' },
      { q: 'Do you guarantee results?', a: 'We offer a 100% satisfaction guarantee. If you are not happy with the quality of our work in the first 30 days, we will make it right or refund you.' },
      { q: 'What industries do you work with?', a: 'We specialize in local service businesses — HVAC, plumbing, roofing, electrical, landscaping, remodeling, and more.' },
    ]
  },
  {
    category: 'Process',
    items: [
      { q: 'How does the onboarding work?', a: 'We start with a 20-minute discovery call, then build your strategy. Most clients are live within 5 business days.' },
      { q: 'Will I have a dedicated point of contact?', a: 'Yes. You will have a direct line to your account manager — no ticket systems, no call centers.' },
      { q: 'How do you report on performance?', a: 'You get a plain-English monthly report covering leads, cost per lead, ad spend, and key wins. No jargon, no vanity metrics.' },
    ]
  },
]

const FAQS_ES = [
  {
    category: 'Sitio Web',
    items: [
      { q: '¿El sitio web realmente es gratis?', a: 'Sí. Cada cliente recibe un sitio web construido a medida incluido gratis con cualquier plan mensual de marketing. Sin plantillas, sin constructores de páginas — código real, velocidad real.' },
      { q: '¿Qué incluye el sitio web gratis?', a: 'Un sitio personalizado de una página con 5 secciones, optimizado para móvil, optimizado en velocidad, base de SEO on-page, formulario de contacto y configuración de Google Analytics.' },
      { q: '¿Puedo quedarme con el sitio si cancelo?', a: 'Sí. El sitio es tuyo. Si cancelas tu plan, te transferimos todo — código, dominio, hosting.' },
    ]
  },
  {
    category: 'Precios',
    items: [
      { q: '¿Cuánto cuestan sus servicios?', a: 'Los planes comienzan en $497/mes. Cada plan incluye el sitio web gratis. El precio depende de los servicios que necesites y el tamaño de tu mercado.' },
      { q: '¿Hay contratos?', a: 'Sin contratos a largo plazo. Trabajamos mes a mes porque creemos en ganar tu negocio cada mes.' },
      { q: '¿Cobran cargos de configuración?', a: 'Se aplica una tarifa única de configuración para dominio, hosting y onboarding. Siempre seremos transparentes sobre lo que pagas.' },
    ]
  },
  {
    category: 'Resultados',
    items: [
      { q: '¿Qué tan rápido veré resultados?', a: 'La mayoría de clientes ven sus primeros leads en 7–14 días después del lanzamiento. El SEO tarda más — típicamente 60–90 días para ver movimiento significativo.' },
      { q: '¿Garantizan resultados?', a: 'Ofrecemos garantía de satisfacción del 100%. Si no estás satisfecho con la calidad de nuestro trabajo en los primeros 30 días, lo corregimos o te devolvemos el dinero.' },
      { q: '¿Con qué industrias trabajan?', a: 'Nos especializamos en negocios de servicio local — HVAC, plomería, techos, eléctrico, jardinería, remodelación y más.' },
    ]
  },
  {
    category: 'Proceso',
    items: [
      { q: '¿Cómo funciona el onboarding?', a: 'Comenzamos con una llamada de discovery de 20 minutos, luego construimos tu estrategia. La mayoría de clientes están en vivo en 5 días hábiles.' },
      { q: '¿Tendré un punto de contacto dedicado?', a: 'Sí. Tendrás línea directa con tu account manager — sin sistemas de tickets, sin call centers.' },
      { q: '¿Cómo reportan el rendimiento?', a: 'Recibes un reporte mensual en lenguaje claro con leads, costo por lead, gasto en anuncios y victorias clave. Sin jerga, sin métricas de vanidad.' },
    ]
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
        <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', lineHeight: 1.3 }}>{q}</span>
        <span style={{ color: 'var(--accent)', fontSize: 20, fontWeight: 300, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, paddingBottom: 18, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  const params = useParams()
  const router = useRouter()
  const lang = (params?.lang as string) || 'en'

  useEffect(() => {
    if (lang !== 'en' && lang !== 'es') router.push('/en/faq')
  }, [lang, router])

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]
  const faqs = isEn ? FAQS_EN : FAQS_ES

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'FAQ' : 'Preguntas frecuentes'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn ? <>Got questions?<br /><span style={{ color: 'var(--accent)' }}>We have answers.</span></> : <>¿Tienes preguntas?<br /><span style={{ color: 'var(--accent)' }}>Tenemos respuestas.</span></>}
            </h1>
          </section>

          {/* FAQ Accordion */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 900, margin: '0 auto' }}>
            {faqs.map((group) => (
              <div key={group.category} style={{ marginBottom: 48 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--accent)' }}>
                  {group.category}
                </div>
                {group.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            ))}
          </section>

          {/* CTA */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              {isEn ? 'Still have questions?' : '¿Aún tienes preguntas?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn ? "Talk to us directly — no scripts, no pressure." : 'Habla con nosotros directamente — sin guiones, sin presión.'}
            </p>
            <a href={`/${lang}/contact`} style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              {isEn ? 'Contact us →' : 'Contáctanos →'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}