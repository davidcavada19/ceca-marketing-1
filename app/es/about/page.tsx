import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sobre CECA Marketing | Agencia de Marketing para Contratistas en Houston TX',
  description:
    'CECA Marketing es una agencia de marketing para contratistas en Houston, TX. Ayudamos a HVAC, roofing, plomería, electricidad y contratistas generales a generar más leads y cerrar más trabajos.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/about',
    languages: {
      en: 'https://cecamarketing.com/about',
      es: 'https://cecamarketing.com/es/about',
      'x-default': 'https://cecamarketing.com/about',
    },
  },
}

export default function AboutPageEs() {
  const lang = 'es'
  const t = CECA_CONTENT.es
  const online = 'EN LÍNEA'
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
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Nosotros
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              Una Agencia de Marketing<br /><span style={{ color: 'var(--accent)' }}>para Contratistas.</span>
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              Construimos CECA porque demasiados contratistas excelentes perdían trabajos ante competidores con peor trabajo pero mejor marketing.
            </p>
          </section>

          {/* Mission */}
          <section style={{ background: 'var(--fg)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  // Nuestra Misión
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--bg)', marginBottom: 20 }}>
                  Más leads. Más trabajos. Más ingresos.
                </h2>
              </div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--bg)', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>
                Nuestra misión es simple: ayudar a contratistas a generar más leads y cerrar más trabajos a través de marketing que realmente funciona. Sin métricas de vanidad, sin reportes relleno, sin contratos largos. Solo resultados que puedes ver en tu agenda y tu cuenta bancaria.
              </p>
            </div>
          </section>

          {/* Values */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 32 }}>
                // En Lo Que Creemos
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
                {[
                  { label: 'Transparencia', desc: 'Siempre sabes qué hacemos y por qué. Reportes claros, comunicación honesta — sin sorpresas.' },
                  { label: 'Resultados Primero', desc: 'Cada decisión está ligada a tus ingresos. Más leads, más trabajos cerrados — nada más importa.' },
                  { label: 'Velocidad', desc: 'La mayoría de contratistas están en vivo en 5 días. Rápidos sin saltarnos pasos.' },
                  { label: 'Sociedad', desc: 'Tratamos tu negocio como si fuera el nuestro. Tu crecimiento es nuestro crecimiento — punto.' },
                ].map((v) => (
                  <div key={v.label}>
                    <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--accent)', marginBottom: 8 }}>{v.label}</div>
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
                ¿Suena como lo que tu negocio de contratista necesita?
              </p>
              <a href="/es/contact" style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                Diagnóstico Gratis →
              </a>
            </div>
          </section>

          {/* Why CECA */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Por Qué CECA
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 48 }}>
              Lo que Nos Hace Diferentes.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 1, border: '1px solid var(--line)' }}>
              {[
                { n: '01', title: 'Construida exclusivamente para contratistas.', desc: 'No servimos a todos. Nos especializamos en HVAC, roofing, plomería, electricidad y contratistas generales.' },
                { n: '02', title: 'Sin contratos largos.', desc: 'Trabajamos mes a mes porque creemos en ganarnos tu negocio cada mes.' },
                { n: '03', title: 'Reportes en lenguaje claro.', desc: 'Sin jerga, sin métricas de vanidad. Un reporte mensual claro mostrando leads generados y costo por lead.' },
                { n: '04', title: 'Respuesta en menos de 24h.', desc: 'Tienes línea directa con tu account manager. Sin sistemas de tickets, sin call centers.' },
                { n: '05', title: 'En vivo en 5 días.', desc: 'La mayoría de contratistas van de la primera llamada a campañas en vivo en menos de una semana.' },
                { n: '06', title: 'Solo enfocados en ingresos.', desc: 'Solo rastreamos lo que importa — leads, costo por lead y trabajos cerrados. Nada más.' },
              ].map((d) => (
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
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  // Nuestra Historia
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 20 }}>
                  Por Qué Fundamos CECA.
                </h2>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  Vimos demasiados contratistas excelentes perder trabajos ante competidores con peor trabajo pero mejor marketing. Un técnico de HVAC mejor perdiendo ante uno peor porque su sitio estaba desactualizado. Un roofer con trabajo de 5 estrellas perdiendo ante un competidor con mejor posicionamiento en Google.
                </p>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                  Esa brecha es lo que CECA fue construida para cerrar. Combinamos experiencia técnica en marketing con un entendimiento genuino de cómo operan los contratistas — para que nuestras estrategias encajen con tu forma de trabajar.
                </p>
              </div>
              <div style={{ border: '1px solid var(--line)', padding: 40, fontFamily: 'var(--mono)', fontSize: 13 }}>
                {[
                  { n: '5 días', label: 'Lanzamiento promedio' },
                  { n: '4.2×', label: 'ROAS promedio' },
                  { n: '100%', label: 'Garantía de satisfacción' },
                  { n: '$0', label: 'Tarifa de configuración web' },
                ].map((s, i, arr) => (
                  <div key={s.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none' }}>
                    <span style={{ color: 'var(--muted)', letterSpacing: '.06em', fontSize: 11, textTransform: 'uppercase' }}>{s.label}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 20 }}>{s.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commitment */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto', borderTop: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Nuestro Compromiso
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 32 }}>
              Nuestra Garantía Para Ti.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 32 }}>
              {[
                { title: 'Garantía de Satisfacción 100%', desc: 'Si no estás satisfecho con la calidad de nuestro trabajo en los primeros 30 días, lo corregimos o te devolvemos el dinero. Sin preguntas.' },
                { title: 'Sin Cargos Ocultos', desc: 'Lo que ves es lo que pagas. Somos transparentes con cada dólar — sin cobros sorpresa, sin costos ocultos.' },
                { title: 'Tus Activos, Siempre', desc: 'Todo lo que construimos para ti es tuyo. Sitio web, cuentas de anuncios, contenido — si alguna vez te vas, te llevas todo.' },
              ].map((c) => (
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
              ¿Listo para Conseguir Más Leads y Cerrar Más Trabajos?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              Obtén un diagnóstico de marketing gratis y descubre exactamente qué está frenando tu negocio.
            </p>
            <a href="/es/contact" style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              Obtener Mi Diagnóstico Gratis →
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}