'use client'
// ═══════════════════════════════════════════════════════════════
//   ABOUT PAGE — cecamarketing.com/es/about (ES)
//   Standalone — todo el contenido inline
// ═══════════════════════════════════════════════════════════════

import Link from 'next/link'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { useReveal } from '@/lib/hooks'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

const t = CECA_CONTENT.es
const lang = 'es'

export default function AboutPageEs() {
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  useReveal()

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={t.online} />

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 16px' }}>
              Sobre CECA
            </p>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', margin: '0 0 24px', maxWidth: 700 }}>
              Venimos de<br />
              <span style={{ color: 'var(--accent)' }}>los oficios.</span>
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,19px)', color: 'var(--muted)', maxWidth: 560, lineHeight: 1.6, margin: 0 }}>
              CECA Marketing fue construida por alguien que trabajó en electricidad y remodelación — no por otro marketer que descubrió que los contratistas son un mercado.
            </p>
          </div>
        </section>

        {/* ── HISTORIA ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
                Nuestra Historia
              </p>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 24px' }}>
                Construida desde el campo.
              </h2>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 20px' }}>
                Antes de CECA, trabajé en electricidad y remodelación. Vi de cerca lo duro que trabajan los contratistas — y lo poco que la mayoría de las agencias de marketing entienden sobre los oficios. Hablan de "estrategia digital" pero no saben la diferencia entre una llamada de servicio y una propuesta de proyecto.
              </p>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 20px' }}>
                CECA fue construida para cambiar eso. Cada servicio que ofrecemos — SEO, sitios web, automatización, generación de leads — está diseñado alrededor de una cosa: hacer que tu teléfono suene con leads calificados.
              </p>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Somos bilingües desde el primer día. No traducidos — construidos. Porque el mercado de contratistas en Houston habla inglés y español, y tus competidores probablemente solo están llegando a la mitad.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { n: '01', title: 'Leads sobre métricas vacías', body: 'No reportamos impresiones ni clics. Reportamos llamadas, solicitudes de cotización y trabajos cerrados.' },
                  { n: '02', title: 'Honestos sobre los tiempos', body: 'El SEO tarda 60–90 días. Te lo decimos desde el principio — y te mostramos los datos cada mes.' },
                  { n: '03', title: 'Sin contratos a largo plazo', body: 'Nos ganamos tu negocio cada mes. Si no estamos entregando resultados, no deberías estar pagando.' },
                  { n: '04', title: 'Construido para los oficios', body: 'Entendemos la temporada alta, la temporada baja, los márgenes y cómo los contratistas realmente consiguen clientes.' },
                ].map((v, i) => (
                  <div key={i} style={{ padding: '24px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 13, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>{v.n}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', marginBottom: 6 }}>{v.title}</div>
                        <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{v.body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BILINGÜE ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
              Bilingüe por Diseño
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 24px', maxWidth: 560 }}>
              Inglés y español — no traducido, construido.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 40 }}>
              {[
                { title: 'Ambos idiomas desde el primer día', body: 'Tu sitio web, anuncios y contenido están construidos en ambos idiomas — no pasados por un traductor después.' },
                { title: 'Llega a todo el mercado', body: 'El mercado de servicios del hogar en Houston es ampliamente bilingüe. La mayoría de las agencias solo llegan a la mitad de tus clientes potenciales.' },
                { title: 'Los dueños de casa hispanohablantes convierten', body: 'Cuando un dueño de casa hispanohablante encuentra un contratista que se comunica en su idioma, llama. Nos aseguramos de que te encuentren.' },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--fg)', margin: '0 0 10px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--accent)', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.025em' }}>
              ¿Listo para trabajar con una agencia que te entiende?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 18, color: 'rgba(255,255,255,0.88)', margin: '0 0 40px', lineHeight: 1.6 }}>
              Empieza con un diagnóstico gratis — sin presión, sin contratos.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/es/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: 'var(--accent)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, padding: '16px 28px', borderRadius: 8, textDecoration: 'none' }}>
                Obtener Mi Diagnóstico Gratis →
              </Link>
              <Link href="/es/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#ffffff', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, padding: '16px 28px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                Ver Nuestros Servicios
              </Link>
            </div>
          </div>
        </section>

        <Footer t={t} online={t.online} />
      </div>
    </ThemeProvider>
  )
}