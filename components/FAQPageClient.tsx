'use client'
import { useState } from 'react'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

const FAQS_EN = [
  {
    category: 'Contractor Marketing',
    items: [
      { q: 'What is contractor marketing?', a: 'Contractor marketing is the process of promoting your contracting business online to generate more leads and book more jobs. It includes a combination of SEO, paid ads (Google and Meta), website design, and marketing automation — all working together to put your business in front of homeowners who are actively searching for your services.' },
      { q: 'Why is marketing important for contractors?', a: 'Most homeowners search Google before calling a contractor. If your business does not show up — or your website does not build trust quickly — you lose the job before you ever get a chance to bid. Good contractor marketing makes sure you are visible, credible, and easy to contact at every step.' },
      { q: 'How do contractors get more leads?', a: 'The most effective ways for contractors to generate leads are: (1) Local SEO — ranking in Google Maps and organic search for your trade and service area. (2) Google Ads — showing up at the top of search results for high-intent keywords. (3) Meta Ads — reaching homeowners in your area on Facebook and Instagram. (4) Marketing automation — following up instantly with every lead so you never lose a job to slow response.' },
      { q: 'How much does contractor marketing cost?', a: 'Our plans start at $497/month and include a free contractor website. Pricing depends on the services you need — SEO, paid ads, automation, or a combination. Every plan is month-to-month with no long-term contracts.' },
    ],
  },
  {
    category: 'Contractor SEO',
    items: [
      { q: 'What is contractor SEO?', a: 'Contractor SEO is the process of optimizing your website and Google Business Profile so your contracting business ranks higher in local search results. When a homeowner searches "HVAC contractor near me" or "roofing company Houston," SEO determines whether your business shows up — and whether they call you.' },
      { q: 'How long does SEO take for contractors?', a: 'Most contractors start seeing meaningful movement in local rankings within 60–90 days. Paid ads generate leads immediately. SEO is a long-term investment — the longer you do it, the harder it becomes for competitors to outrank you.' },
      { q: 'Is local SEO worth it for contractors?', a: 'Yes. Over 80% of local searches result in a call or purchase within 24 hours. A contractor who ranks in the top 3 of Google Maps captures the majority of leads in their market without paying for every click. The ROI of local SEO compounds over time.' },
      { q: 'How many location pages should a contractor website have?', a: 'At minimum, one page per primary service area city. If you serve Houston, The Woodlands, Katy, and Sugar Land — you should have a dedicated page for each. Each page targets local keywords specific to that city and service, which dramatically improves your chances of ranking in those markets.' },
    ],
  },
  {
    category: 'Contractor Websites',
    items: [
      { q: 'What makes a contractor website effective?', a: 'An effective contractor website loads fast, looks professional on mobile, clearly communicates what you do and where you serve, and makes it easy for a visitor to call or request an estimate. Most contractor websites fail on at least two of these — which means losing leads before you ever know they visited.' },
      { q: 'Is the website really free?', a: 'Yes. Every client gets a custom-built contractor website included free with any monthly marketing plan. No templates, no page builders — real code, real speed, built specifically for your trade.' },
      { q: 'Can I keep the website if I cancel?', a: 'Yes. The website is yours. If you ever cancel your plan, we transfer everything to you — code, domain, and hosting.' },
    ],
  },
  {
    category: 'Marketing Automation',
    items: [
      { q: 'Do contractors need marketing automation?', a: 'Yes — especially if you are missing calls or slow to follow up. The average lead goes cold in under 5 minutes. Marketing automation sends an instant text to every missed call, follows up with every lead automatically, and requests reviews from happy customers — all without you lifting a finger.' },
      { q: 'What is missed-call text back?', a: 'Missed-call text back automatically sends a text message to anyone who calls your business and does not get through. It keeps the conversation alive and dramatically reduces the number of leads lost to voicemail. It is one of the highest-ROI automations we set up for contractors.' },
    ],
  },
  {
    category: 'Pricing & Process',
    items: [
      { q: 'Are there long-term contracts?', a: 'No. We work month-to-month because we believe in earning your business every single month. You can cancel anytime.' },
      { q: 'How fast will I see results?', a: 'Most contractors see their first leads within 7–14 days of launch through paid ads. SEO typically takes 60–90 days to show meaningful ranking movement. Marketing automation starts working the moment it goes live.' },
      { q: 'How does the onboarding work?', a: 'We start with a free 20-minute diagnosis call to understand your business, market, and goals. Then we build your strategy and go live — most contractors are generating leads within 5 business days.' },
    ],
  },
]

const FAQS_ES = [
  {
    category: 'Marketing para Contratistas',
    items: [
      { q: '¿Qué es el marketing para contratistas?', a: 'El marketing para contratistas es el proceso de promover tu negocio online para generar más leads y cerrar más trabajos. Incluye una combinación de SEO, anuncios pagados (Google y Meta), diseño web y automatización de marketing — todo trabajando junto para poner tu negocio frente a propietarios que están buscando activamente tus servicios.' },
      { q: '¿Por qué es importante el marketing para contratistas?', a: 'La mayoría de los propietarios buscan en Google antes de llamar a un contratista. Si tu negocio no aparece — o tu sitio web no genera confianza rápidamente — pierdes el trabajo antes de tener la oportunidad de cotizar. El buen marketing para contratistas asegura que seas visible, creíble y fácil de contactar.' },
      { q: '¿Cómo consiguen más leads los contratistas?', a: 'Las formas más efectivas son: (1) SEO Local — rankear en Google Maps y búsqueda orgánica para tu oficio y área de servicio. (2) Google Ads — aparecer en la parte superior de los resultados para keywords de alta intención. (3) Meta Ads — llegar a propietarios en tu área en Facebook e Instagram. (4) Automatización — hacer seguimiento instantáneo a cada lead.' },
      { q: '¿Cuánto cuesta el marketing para contratistas?', a: 'Nuestros planes comienzan en $497/mes e incluyen un sitio web gratis para contratistas. El precio depende de los servicios que necesites — SEO, anuncios pagados, automatización o una combinación. Cada plan es mes a mes sin contratos largos.' },
    ],
  },
  {
    category: 'SEO para Contratistas',
    items: [
      { q: '¿Qué es el SEO para contratistas?', a: 'El SEO para contratistas es el proceso de optimizar tu sitio web y Google Business Profile para que tu negocio rankee más alto en búsquedas locales. Cuando un propietario busca "contratista HVAC cerca de mí" o "empresa de roofing Houston," el SEO determina si tu negocio aparece — y si te llaman.' },
      { q: '¿Cuánto tiempo tarda el SEO para contratistas?', a: 'La mayoría de contratistas comienzan a ver movimiento significativo en rankings locales en 60–90 días. Los anuncios pagados generan leads de inmediato. El SEO es una inversión a largo plazo — entre más tiempo lo haces, más difícil se vuelve para los competidores superarte.' },
      { q: '¿Vale la pena el SEO local para contratistas?', a: 'Sí. Más del 80% de las búsquedas locales resultan en una llamada o compra en menos de 24 horas. Un contratista que rankea en el top 3 de Google Maps captura la mayoría de leads en su mercado sin pagar por cada clic.' },
      { q: '¿Cuántas páginas de ubicación debe tener un sitio de contratista?', a: 'Como mínimo, una página por cada ciudad principal de servicio. Si sirves Houston, The Woodlands, Katy y Sugar Land — deberías tener una página dedicada para cada una. Cada página apunta a keywords locales específicas de esa ciudad y servicio.' },
    ],
  },
  {
    category: 'Páginas Web para Contratistas',
    items: [
      { q: '¿Qué hace efectivo un sitio web de contratista?', a: 'Un sitio web efectivo para contratistas carga rápido, se ve profesional en móvil, comunica claramente qué haces y dónde sirves, y facilita que un visitante llame o solicite una cotización. La mayoría de sitios de contratistas fallan en al menos dos de estos — lo que significa perder leads antes de saber que visitaron.' },
      { q: '¿El sitio web realmente es gratis?', a: 'Sí. Cada cliente recibe un sitio web construido a medida para contratistas incluido gratis con cualquier plan mensual. Sin plantillas, sin constructores de páginas — código real, velocidad real.' },
      { q: '¿Puedo quedarme con el sitio si cancelo?', a: 'Sí. El sitio es tuyo. Si cancelas tu plan, te transferimos todo — código, dominio y hosting.' },
    ],
  },
  {
    category: 'Automatización de Marketing',
    items: [
      { q: '¿Los contratistas necesitan automatización de marketing?', a: 'Sí — especialmente si pierdes llamadas o tardas en hacer seguimiento. El lead promedio se enfría en menos de 5 minutos. La automatización envía un texto instantáneo a cada llamada perdida, hace seguimiento automático a cada lead y solicita reseñas a clientes satisfechos — todo sin que tú hagas nada.' },
      { q: '¿Qué es el texto automático por llamada perdida?', a: 'El texto automático por llamada perdida envía un mensaje de texto a cualquier persona que llame a tu negocio y no logre comunicarse. Mantiene la conversación viva y reduce dramáticamente el número de leads perdidos al buzón de voz.' },
    ],
  },
  {
    category: 'Precios y Proceso',
    items: [
      { q: '¿Hay contratos a largo plazo?', a: 'No. Trabajamos mes a mes porque creemos en ganar tu negocio cada mes. Puedes cancelar en cualquier momento.' },
      { q: '¿Qué tan rápido veré resultados?', a: 'La mayoría de contratistas ven sus primeros leads en 7–14 días después del lanzamiento con anuncios pagados. El SEO típicamente tarda 60–90 días en mostrar movimiento de ranking. La automatización de marketing empieza a funcionar en el momento en que se activa.' },
      { q: '¿Cómo funciona el onboarding?', a: 'Comenzamos con un diagnóstico gratuito de 20 minutos para entender tu negocio, mercado y objetivos. Luego construimos tu estrategia y salimos en vivo — la mayoría de contratistas están generando leads en 5 días hábiles.' },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', lineHeight: 1.3 }}>{q}</span>
        <span style={{ color: 'var(--accent)', fontSize: 20, fontWeight: 300, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
      </button>
      {open && (
        <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, paddingBottom: 18, margin: 0 }}>{a}</p>
      )}
    </div>
  )
}

export default function FAQPageClient({ lang }: { lang: 'en' | 'es' }) {
  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]
  const faqs = isEn ? FAQS_EN : FAQS_ES
  const contactPath = isEn ? '/contact' : '/es/contact'

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? '// Contractor Marketing FAQ' : '// Preguntas Frecuentes'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn
                ? <>Questions About<br /><span style={{ color: 'var(--accent)' }}>Contractor Marketing.</span></>
                : <>Preguntas Sobre<br /><span style={{ color: 'var(--accent)' }}>Marketing para Contratistas.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              {isEn
                ? 'Everything you need to know about contractor SEO, websites, automation, and lead generation.'
                : 'Todo lo que necesitas saber sobre SEO para contratistas, páginas web, automatización y generación de leads.'}
            </p>
          </section>

          {/* FAQ Accordion */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 900, margin: '0 auto' }}>
            {faqs.map((group) => (
              <div key={group.category} style={{ marginBottom: 48 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--accent)' }}>
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
              {isEn ? 'Ready to Get More Leads and Book More Jobs?' : '¿Listo para Conseguir Más Leads y Cerrar Más Trabajos?'}
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              {isEn
                ? 'Get a free contractor marketing diagnosis — no pressure, no contracts.'
                : 'Obtén un diagnóstico de marketing gratis — sin presión, sin contratos.'}
            </p>
            <a href={contactPath} style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              {isEn ? 'Get My Free Diagnosis →' : 'Obtener Mi Diagnóstico Gratis →'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}