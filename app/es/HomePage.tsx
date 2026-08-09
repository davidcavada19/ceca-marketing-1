'use client'
// ═══════════════════════════════════════════════════════════════
//   HOME PAGE — cecamarketing.com/es (ES)
//   Standalone — todas las secciones inline
//   Para cambiar texto: edita directamente aquí
//   Para cambiar colores/fuentes: edita lib/constants.ts
// ═══════════════════════════════════════════════════════════════

import Image from 'next/image'
import Link from 'next/link'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import { useReveal } from '@/lib/hooks'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import FAQAccordion from './FAQAccordion'

const t = CECA_CONTENT.es
const lang = 'es'

// ─── HERO ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" style={{ padding: 'clamp(120px,14vw,180px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', position: 'relative', overflow: 'hidden' }}>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.93), rgba(255,255,255,0.93)), url(/images/hero/blueprint-pattern.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          pointerEvents: 'none',
        }}
      />

      <div className="hero-grid" style={{
        maxWidth: 1320,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 560px) 1fr',
        gridTemplateAreas: '"heading image" "body image"',
        gap: 'clamp(32px,5vw,64px)',
        alignItems: 'center',
        position: 'relative',
      }}>

        <div className="hero-heading" style={{ gridArea: 'heading' }}>
          <p className="hero-eyebrow" style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
            Agencia Bilingüe · SEO · Sitios Web · Automatización
          </p>

          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,5.5vw,64px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0 }}>
            Agencia de Marketing para Contratistas Que Te Ayuda a Conseguir{' '}
            <span style={{ color: 'var(--accent)' }}>Más Clientes Calificados</span>
          </h1>
        </div>

        <div className="hero-image" style={{ gridArea: 'image', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380 }}>
          <Image
            src="/images/hero/hero-composition.webp"
            alt="Sitio web de CECA Marketing y reseñas de Google para un cliente contratista"
            width={1000}
            height={1000}
            priority
            style={{ width: '100%', height: 'auto', maxWidth: 620, mixBlendMode: 'multiply' }}
          />
        </div>

        <div className="hero-body" style={{ gridArea: 'body' }}>
          <p style={{ fontFamily: 'var(--body)', fontWeight: 900, fontSize: 'clamp(20px,2vw,19px)', color: 'var(--muted)', lineHeight: 1.3, margin: '0 0 36px', maxWidth: 480 }}>
            Tú haces el trabajo. Nosotros hacemos que suene el teléfono. Sitios web, SEO local y automatización de leads hechos específicamente para contratistas de servicios del hogar.
          </p>

          <div className="hero-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => smoothScrollTo('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'center',
                background: 'var(--accent)',
                color: '#ffffff',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 28px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Agenda Tu Llamada de Estrategia
              <span aria-hidden="true">→</span>
            </button>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', margin: 0 }}>
              Sin presión. Sin contratos. Solo un plan claro para conseguir más llamadas.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              (832) 908-2728
            </a>
            <a href="mailto:info@cecamarketing.com"
              style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
              info@cecamarketing.com
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── POR QUÉ CECA ─────────────────────────────────────────────

function WhyCECA() {
  const reasons = [
    {
      n: '01',
      title: <>Conocemos <span style={{ color: 'var(--accent)' }}>el oficio</span></>,
      body: 'Hemos trabajado en electricidad y remodelación nosotros mismos. Sabemos cómo la gente busca un contratista cuando algo se descompone.',
    },
    {
      n: '02',
      title: <>Verás <span style={{ color: 'var(--accent)' }}>qué está funcionando</span></>,
      body: 'Llamadas. Solicitudes de cotización. Trabajos cerrados. Eso es lo que medimos — no clics o vistas que no pagan tus cuentas.',
    },
    {
      n: '03',
      title: <>Llegamos a <span style={{ color: 'var(--accent)' }}>todo tu mercado</span></>,
      body: 'Inglés y español, desde el inicio. Llegas a todos los dueños de casa cerca de ti, no solo a la mitad.',
    },
    {
      n: '04',
      title: <>Rápido <span style={{ color: 'var(--accent)' }}>y visible en Google</span></>,
      body: 'Lo construimos a mano, de la forma correcta. Por eso funciona cuando otros sitios de contratistas no.',
    },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Por Qué CECA</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px', maxWidth: 600 }}>
          Tú haces el trabajo. Nosotros hacemos que te encuentren.
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 56px', maxWidth: 540 }}>
          Sin reportes confusos. Sin gastar dinero en anuncios que no funcionan. Solo un sitio web y marketing que te traen trabajos reales.
        </p>
        <div className="reveal why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {reasons.map((r) => (
            <div key={r.n} className="why-card" style={{ padding: '40px 32px', background: 'var(--bg-card)' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 40, color: 'var(--line)', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 20 }}>{r.n}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em', lineHeight: 1.15 }}>{r.title}</h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── RESULTADOS ───────────────────────────────────────────────

function Results() {
  const stats = [
    { num: '97+', label: 'Puntuación PageSpeed en cada sitio que construimos' },
    { num: '5 días', label: 'Tiempo promedio de firma a sitio en vivo' },
    { num: '80%', label: 'De las búsquedas locales llaman en 24 horas' },
    { num: '$0', label: 'Costo del sitio web con cualquier plan mensual' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Resultados</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 560 }}>
          Qué puedes esperar al trabajar con CECA.
        </h2>
        <div className="reveal stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '40px 32px', background: 'var(--bg-card)', borderRight: i < 3 ? '1px solid var(--line)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,4vw,52px)', color: 'var(--accent)', letterSpacing: '-.02em', lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICIOS ────────────────────────────────────────────────

function Services() {
  const services = [
    {
      n: '01',
      title: 'Tu Sitio Web + SEO Local',
      desc: 'Un sitio de una página, rápido y limpio — construido y en línea, con SEO local configurado desde el día uno para que la gente que busca tu oficio te encuentre.',
      includes: [
        'Sitio de una página, optimizado para celular',
        'Perfil de Google Business configurado y optimizado',
        'Apareces en búsquedas locales de Google y en el mapa',
        'Sin costo de instalación — va incluido en tu plan',
      ],
    },
    {
      n: '02',
      title: 'Creciendo Tus Posiciones con el Tiempo',
      desc: 'Conforme tu negocio crece, agregamos más a tu presencia en línea — nuevas páginas para cada servicio que ofreces y cada ciudad donde trabajas.',
      includes: [
        'Una página por cada servicio que ofreces',
        'Una página por cada ciudad o zona que atiendes',
        'Artículos de blog sobre lo que tus clientes están buscando',
        'Te mantiene subiendo en Google mientras más tiempo trabajamos juntos',
      ],
    },
    {
      n: '03',
      title: 'Anuncios en Google y Facebook',
      desc: 'Creamos, publicamos y administramos tus anuncios en Google y Facebook — para que la persona correcta te vea justo cuando está buscando tu servicio.',
      includes: [
        'Configuración y manejo diario de anuncios en Google y Facebook',
        'Creamos las imágenes y textos de tus anuncios',
        'Siempre sabes cuánto te costó conseguir cada cliente',
        'El gasto en anuncios lo cobra Google/Facebook directo, aparte de nuestra tarifa',
      ],
    },
    {
      n: '04',
      title: 'Nunca Pierdas un Trabajo',
      desc: '¿Se te pasó una llamada mientras estabas en un trabajo? Le respondemos por texto automáticamente, para que no pierdas el cliente por no contestar.',
      includes: [
        'Respuesta automática por texto cuando se te pasa una llamada',
        'Solicitud automática de reseñas después de un trabajo',
        'Textos de seguimiento para clientes que aún no han agendado',
        'Funciona 24/7, aunque estés en un techo o debajo de un fregadero',
      ],
    },
  ]

  return (
    <section id="services" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Servicios</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0, maxWidth: 560 }}>
            Todo lo que necesitas para que el teléfono no pare de sonar.
          </h2>
        </div>

        <div>
          {services.map((s, i) => (
            <div key={s.n} className="service-row" style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(240px, 420px) 1fr',
              gap: 'clamp(32px,5vw,64px)',
              padding: '48px 0',
              borderTop: i === 0 ? '1px solid var(--line)' : undefined,
              borderBottom: '1px solid var(--line)',
              alignItems: 'start',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 15, color: 'var(--accent)', letterSpacing: '.05em', marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(22px,2.5vw,28px)', color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em', lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {s.includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/// ─── INDUSTRIAS ───────────────────────────────────────────────

function Industries() {
  const industries = [
    { name: 'HVAC', icon: '❄️' },
    { name: 'Plomería', icon: '🔧' },
    { name: 'Electricidad', icon: '⚡' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Remodelación', icon: '🔨' },
    { name: 'Jardinería', icon: '🌿' },
    { name: 'Pintura', icon: '🎨' },
    { name: 'Pisos', icon: '🟫' },
    { name: 'Albercas', icon: '🏊' },
    { name: 'Control de Plagas', icon: '🐛' },
    { name: 'Puertas de Garage', icon: '🚗' },
    { name: 'Ventanas', icon: '☀️' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>A Quién Ayudamos</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0, maxWidth: 480 }}>
            Hecho para contratistas de servicios del hogar.
          </h2>
          <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: 0, maxWidth: 360, lineHeight: 1.6 }}>
            Si los dueños de casa te contratan para reparar, construir o mantener su hogar — somos tu agencia.
          </p>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {industries.map((ind) => (
            <Link key={ind.name} href="/es/services" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '28px 20px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{ind.icon}</div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)' }}>{ind.name}</div>
              </div>
            </Link>
          ))}
          <Link href="/es/contact" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '28px 20px', background: 'var(--accent)', border: '1px solid var(--accent)', borderRadius: 12, textAlign: 'center', color: '#ffffff' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>+</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16 }}>Tu Oficio</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── TRABAJO DESTACADO ─────────────────────────────────────────

function FeaturedWork() {
  const projects = [
    { name: 'Houston Cool Air', tag: 'HVAC · Houston, TX', result: 'Sitio viejo → Sitio rápido, optimizado para SEO + automatización' },
    { name: 'Fast Flow Plumbing', tag: 'Plomería · Houston, TX', result: 'Sin sitio web → Sitio de emergencia 24/7 + texto por llamada perdida' },
    { name: 'Texas Top Roofing', tag: 'Roofing · Houston, TX', result: 'Sitio desactualizado → Landing page de reclamos + Google Ads' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
              Nuestro Trabajo
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 12px' }}>
              Sitios que reconstruimos para contratistas.
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--muted)', margin: 0, lineHeight: 1.6, maxWidth: 540 }}>
              Viejos, lentos o inexistentes — tomamos sitios web de contratistas y los convertimos en máquinas de generación de leads.
            </p>
          </div>
          <Link href="/es/portfolio" style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
            Ver todo el trabajo →
          </Link>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <Link key={i} href="/es/portfolio" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>{p.tag}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 26, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: '0 0 24px', lineHeight: 1.6 }}>{p.result}</p>
                <span style={{ fontFamily: 'var(--body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>Ver la transformación →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESO ──────────────────────────────────────────────────

function Process() {
  const steps = [
    { n: '01', title: 'Diagnóstico', desc: 'Llamada gratis de 20 min. Auditamos tu presencia en línea y te mostramos exactamente dónde estás perdiendo leads.' },
    { n: '02', title: 'Construir', desc: 'Sitio web, automatización y campañas en vivo en 5 días. Sin procesos largos, sin idas y venidas interminables.' },
    { n: '03', title: 'Crecer', desc: 'Optimización mensual basada en datos reales. Cortamos lo que no funciona y apostamos doble a lo que trae trabajos.' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Cómo Trabajamos</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 480 }}>
          De auditoría gratis a sistema en vivo — rápido.
        </h2>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '40px 36px', background: 'var(--bg-card)', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 52, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 20 }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIOS ──────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    { quote: 'Antes de CECA, gastaba dinero en anuncios sin saber si funcionaban. Ahora sé exactamente cuánto cuesta cada lead y mi teléfono sí suena.', name: 'Mike R.', biz: 'Contratista HVAC · Houston, TX' },
    { quote: 'Construyeron mi sitio en menos de una semana y ya rankea mejor que el sitio de mi competidor que lleva años en línea.', name: 'Carlos G.', biz: 'Contratista de Roofing · Katy, TX' },
    { quote: 'El texto automático por llamadas perdidas solo pagó el plan completo en el primer mes. Dejé de perder trabajos al buzón de voz.', name: 'James T.', biz: 'Plomero · Sugar Land, TX' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Testimonios</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 480 }}>
          Lo que dicen los contratistas.
        </h2>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map((item, i) => (
            <div key={i} style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ color: 'var(--accent)', fontSize: 20, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--fg)', lineHeight: 1.65, margin: '0 0 24px', fontStyle: 'italic' }}>"{item.quote}"</p>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)' }}>{item.name}</div>
              <div style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{item.biz}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', marginTop: 24, fontStyle: 'italic' }}>
          * Reemplaza con reseñas reales de clientes cuando estén disponibles.
        </p>
      </div>
    </section>
  )
}

// ─── ÚLTIMOS ARTÍCULOS ────────────────────────────────────────

function Insights() {
  const posts = [
    { tag: 'SEO', title: 'Marketing Digital para Contratistas: La Guía Completa', desc: 'Todo lo que un contratista necesita saber para ser encontrado en línea y cerrar más trabajos.', href: '/es/blog/digital-marketing-for-contractors', date: '2026' },
    { tag: 'Próximamente', title: 'Cómo Conseguir Más Reseñas en Google como Contratista', desc: 'Las reseñas son el factor #1 en rankings locales. Este es el sistema exacto que usamos.', href: '/es/blog', date: 'Próximamente' },
    { tag: 'Próximamente', title: 'Por Qué Tu Sitio Web No Genera Leads', desc: 'La mayoría de los sitios de contratistas fallan en conversión antes de que el visitante lea el título.', href: '/es/blog', date: 'Próximamente' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Últimos Artículos</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0 }}>
              Recursos para contratistas.
            </h2>
          </div>
          <Link href="/es/blog" style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Ver todos los artículos →
          </Link>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {posts.map((p, i) => (
            <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.tag}</span>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, color: 'var(--muted)' }}>{p.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 20, color: 'var(--fg)', margin: '0 0 12px', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.6 }}>{p.desc}</p>
                <span style={{ fontFamily: 'var(--body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>Leer más →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ PREVIEW ──────────────────────────────────────────────

function FAQPreview() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
        <div>
          <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Preguntas Frecuentes</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px' }}>
            Respuestas rápidas.
          </h2>
          <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
            ¿Más preguntas? Tenemos respuestas para todo.
          </p>
          <Link href="/es/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
            Ver todas las preguntas →
          </Link>
        </div>
        <div className="reveal">
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}

// ─── CTA FINAL ────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--accent)', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.025em' }}>
          ¿Listo para conseguir más leads y cerrar más trabajos?
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 18, color: 'rgba(255,255,255,0.88)', margin: '0 0 40px', lineHeight: 1.6 }}>
          Empieza con un diagnóstico gratis — sin presión, sin contratos. Te mostramos exactamente qué está frenando tu negocio.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: 'var(--accent)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, padding: '16px 28px', borderRadius: 8, textDecoration: 'none' }}>
            Comenzar Mi Proyecto →
          </Link>
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#ffffff', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, padding: '16px 28px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── EXPORT ───────────────────────────────────────────────────

export default function HomePageEs() {
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  useReveal()

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={t.online} isRoot={true} />
        <Hero />
        <WhyCECA />
        <Services />
        <Industries />
        <Process />
        <Testimonials />
        <Insights />
        <FAQPreview />
        <FinalCTA />
        <Footer t={t} online={t.online} />
      </div>
    </ThemeProvider>
  )
}