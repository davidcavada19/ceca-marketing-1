import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Servicios de Marketing para Contratistas | CECA Marketing',
  description:
    'Servicios de marketing para contratistas — sitios web, SEO local, anuncios en Google y Facebook, automatización de reseñas y automatización de leads. Todo lo que un negocio de servicios del hogar necesita para generar más leads y cerrar más trabajos.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/services',
    languages: {
      en: 'https://cecamarketing.com/services',
      es: 'https://cecamarketing.com/es/services',
      'x-default': 'https://cecamarketing.com/services',
    },
  },
}

const icons = {
  website: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <line x1="6" y1="17" x2="42" y2="17" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="11" cy="13.5" r="1.4" fill="currentColor" />
      <circle cx="16" cy="13.5" r="1.4" fill="currentColor" />
      <path d="M14 27l5-6 4 4 6-8 5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 34V22M18 34V16M28 34V24M38 34V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 14l8-5 8 4 14-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 4h6v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" />
    </svg>
  ),
  reviews: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6l5.9 12 13.1 1.9-9.5 9.2 2.2 13-11.7-6.3-11.7 6.3 2.2-13-9.5-9.2L18.1 18 24 6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 20v6M17 26h14a3 3 0 013 3v9a3 3 0 01-3 3H17a3 3 0 01-3-3v-9a3 3 0 013-3z" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="34" r="1.6" fill="currentColor" />
      <circle cx="28" cy="34" r="1.6" fill="currentColor" />
    </svg>
  ),
}

const services = [
  {
    n: '01',
    metric: 'QUE TE ENCUENTREN EN GOOGLE',
    title: 'Tu Sitio Web + SEO Local',
    hook: 'Un sitio hecho para convertir visitas en llamadas, con SEO local desde el primer día.',
    intro: 'La mayoría de los sitios web de contratistas pierden clientes antes de que lean una sola palabra. Construimos sitios rápidos, limpios y optimizados para celular, con las bases de SEO local configuradas desde el inicio, para que cuando alguien busque tu oficio, te encuentre a ti, y cuando llegue a tu sitio, te llame.',
    stat: 'Los clientes te buscan en Google antes de llamarte. Asegúrate de que lo que encuentren los convenza.',
    icon: icons.website,
    deliverables: [
      { title: 'Sitio Web Rápido y Optimizado para Celular', desc: 'Hecho para cómo tus clientes realmente buscan, desde el teléfono, buscando una respuesta rápida.' },
      { title: 'Configuración de Google Business Profile', desc: 'Categorías, fotos, zonas de servicio y optimización para que aparezcas en búsquedas locales y en el mapa.' },
      { title: 'Bases de SEO Local', desc: 'SEO en tu sitio, schema markup y configuración técnica desde el primer día.' },
      { title: 'Hecho para Convertir', desc: 'Cada sección está pensada para que un visitante pase de encontrarte a llamarte.' },
    ],
  },
  {
    n: '02',
    metric: 'SUBE TUS POSICIONES CON EL TIEMPO',
    title: 'Sube Tus Posiciones con el Tiempo',
    hook: 'El SEO local se acumula — mientras más tiempo trabajamos en él, más difícil es que te superen.',
    intro: 'Conforme tu negocio crece, seguimos ampliando tu presencia en línea con contenido hecho alrededor de los servicios que ofreces y las zonas donde trabajas. Cada página nueva es otra oportunidad de aparecer en una búsqueda que tu próximo cliente ya está haciendo.',
    stat: 'El 80% de las búsquedas locales terminan en una llamada o compra en menos de 24 horas.',
    note: 'Los resultados normalmente tardan entre 60 y 90 días en mostrar movimiento importante.',
    icon: icons.growth,
    deliverables: [
      { title: 'Una Página por Cada Servicio', desc: 'Páginas dedicadas para que aparezcas por el trabajo específico que haces, no solo por el nombre de tu negocio.' },
      { title: 'Páginas de Ubicación', desc: 'Páginas para cada ciudad o zona que atiendes, para que aparezcas en toda tu área de servicio.' },
      { title: 'Contenido Basado en Búsquedas Reales', desc: 'Artículos y páginas hechos alrededor de lo que tus clientes realmente escriben en Google.' },
      { title: 'Mejoras de SEO Constantes', desc: 'Optimización continua mientras tu negocio y tu presencia en línea crecen juntos.' },
    ],
  },
  {
    n: '03',
    metric: 'GENERA DEMANDA CUANDO LA NECESITES',
    title: 'Anuncios en Google y Facebook',
    hook: 'Captura a la gente que ya está buscando ahora mismo, y llega a otros antes de que empiecen a buscar.',
    intro: 'Google y Meta no hacen el mismo trabajo. Google Ads te pone frente a dueños de casa que ya están buscando activamente tu servicio. Facebook e Instagram generan demanda, llegando a personas que van a necesitar un contratista antes de que empiecen a buscar uno. Manejamos ambos, hechos para convertir, con seguimiento hasta el último dólar.',
    stat: 'Google Ads entrega leads con intención de compra — gente buscando tu servicio justo en este momento.',
    note: 'Se requiere gasto mínimo en anuncios. La tarifa de manejo es aparte del gasto en anuncios.',
    icon: icons.ads,
    deliverables: [
      { title: 'Google Ads para Búsquedas con Intención de Compra', desc: 'Campañas dirigidas al momento exacto en que alguien necesita tu servicio.' },
      { title: 'Campañas en Facebook e Instagram', desc: 'Creatividad y segmentación hechas para generar demanda con dueños de casa en tu zona de servicio.' },
      { title: 'Páginas de Destino Hechas para Convertir', desc: 'Anuncios y páginas de destino diseñados para convertir clics en llamadas y solicitudes de cotización.' },
      { title: 'Seguimiento Completo de Costo por Lead', desc: 'Sabes exactamente cuánto te cuesta cada cliente y de dónde viene, cada mes.' },
    ],
  },
  {
    n: '04',
    metric: 'GENERA CONFIANZA AUTOMÁTICAMENTE',
    title: 'Consigue Más Reseñas de 5 Estrellas, Automáticamente',
    hook: 'Convierte cada trabajo terminado en una reseña de Google, sin perseguir a nadie.',
    intro: 'Las reseñas son una de las señales más fuertes para el ranking local, y también una de las más fáciles de perder por falta de consistencia. Configuramos solicitudes automáticas de reseñas después de cada trabajo terminado, damos seguimiento a los clientes que no responden, y facilitamos al máximo que los clientes satisfechos dejen una reseña, todo funcionando en automático.',
    stat: 'Las reseñas son uno de los factores más importantes que los dueños de casa usan para elegir entre contratistas.',
    note: 'Se aplica tarifa de configuración. El mantenimiento mensual va incluido en el plan.',
    icon: icons.reviews,
    deliverables: [
      { title: 'Solicitud Automática de Reseñas', desc: 'Se envía después de cada trabajo terminado, sin necesidad de seguimiento manual.' },
      { title: 'Recordatorios de Seguimiento', desc: 'Avisos automáticos cuando un cliente todavía no ha respondido.' },
      { title: 'Enlace Directo a Tu Página de Reseñas de Google', desc: 'Facilita al máximo que un cliente satisfecho deje una reseña.' },
      { title: 'Seguimiento de Reseñas', desc: 'Ves cada solicitud enviada y cada respuesta, en un solo lugar.' },
    ],
  },
  {
    n: '05',
    metric: 'NUNCA PIERDAS UN CLIENTE',
    title: 'Nunca Pierdas un Trabajo',
    hook: '¿Se te pasó una llamada en un trabajo? Respondemos y damos seguimiento para que ese cliente no desaparezca.',
    intro: 'La mayoría de los contratistas no pierden clientes porque no los consiguen, los pierden porque nadie da seguimiento lo suficientemente rápido. Construimos sistemas automáticos que responden por texto al instante cuando se te pasa una llamada, dan seguimiento a los clientes que aún no han agendado, y siguen trabajando incluso cuando estás en un techo o debajo de un fregadero.',
    stat: 'Los contratistas que responden en los primeros 5 minutos tienen muchas más probabilidades de cerrar el trabajo que los que esperan 30.',
    icon: icons.automation,
    deliverables: [
      { title: 'Texto Automático al Instante por Llamada Perdida', desc: 'Cada llamada perdida recibe un texto de inmediato, para que ningún cliente se pierda por no contestar.' },
      { title: 'Seguimiento Automático de Leads', desc: 'Secuencias que siguen trabajando un lead hasta que responda o agende.' },
      { title: 'Seguimiento para Clientes que Aún No Han Agendado', desc: 'Ningún cliente se te escapa solo porque no contestó el primer mensaje.' },
      { title: 'Recordatorios de Citas', desc: 'Recordatorios automáticos que reducen las citas perdidas y mantienen tu agenda llena.' },
      { title: 'Funciona 24/7', desc: 'Trabajando desde el momento en que entra una llamada, incluso cuando tú estás en el trabajo.' },
    ],
  },
]

export default function ServicesPageEs() {
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

          <section style={{ padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: '-20%',
              right: '-8%',
              width: 480,
              height: 480,
              backgroundColor: 'transparent',
              backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.10), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 16px' }}>
                Lo Que Hacemos
              </p>
              <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1.02, letterSpacing: '-.03em', color: 'var(--fg)', margin: '0 0 24px' }}>
                Servicios de Marketing<br />
                <span style={{ color: 'var(--accent)' }}>Hechos para Contratistas.</span>
              </h1>
              <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,19px)', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
                Cada contratista es distinto. Estas son las piezas con las que trabajamos: sitio web, SEO, anuncios, reseñas y automatización de leads. En tu llamada de estrategia, te recomendamos la combinación que le queda mejor a tu negocio.
              </p>
            </div>
          </section>

          {services.map((s, idx) => {
            const iconRight = idx % 2 === 0
            return (
              <section
                key={s.n}
                style={{
                  padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)',
                  borderBottom: '1px solid var(--line)',
                  background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-alt)',
                }}
              >
                <div style={{ maxWidth: 1320, margin: '0 auto' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em' }}>{s.n}</span>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</span>
                  </div>

                  <div className={'svc-split ' + (iconRight ? 'img-right' : 'img-left')}>

                    <div className="svc-text">
                      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 12px' }}>
                        {s.title}
                      </h2>
                      <p style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'clamp(18px,2vw,22px)', color: 'var(--accent)', margin: '0 0 24px', lineHeight: 1.3 }}>
                        {s.hook}
                      </p>
                      <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
                        {s.intro}
                      </p>
                      <div style={{ padding: '16px 20px', borderLeft: '3px solid var(--accent)', backgroundColor: 'rgba(249,115,22,0.06)', borderRadius: '0 8px 8px 0', marginBottom: 28 }}>
                        <p style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', margin: 0, lineHeight: 1.5 }}>
                          {s.stat}
                        </p>
                      </div>
                      {s.note && (
                        <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                          {s.note}
                        </p>
                      )}
                    </div>

                    <div className="svc-visual">
                      <div className="svc-visual-inner">
                        <span aria-hidden="true" className="svc-ghost-number">{s.n}</span>
                        <div className="svc-icon">{s.icon}</div>
                      </div>
                    </div>

                  </div>

                  <div style={{ marginTop: 56 }}>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 24px' }}>
                      Qué incluye
                    </p>
                    <div className="svc-deliverables">
                      {s.deliverables.map((d, i) => (
                        <div key={i} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{'\u2713'}</span>
                          <div>
                            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginBottom: 3, marginTop: 0 }}>{d.title}</h3>
                            <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{d.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>
            )
          })}

          <section style={{ backgroundColor: 'var(--accent)', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '-.03em' }}>
              ¿No Sabes Qué Necesitas?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'rgba(255,255,255,0.88)', margin: '0 0 32px', lineHeight: 1.6 }}>
              Para eso es la llamada de estrategia. Vemos qué está frenando tu negocio y te recomendamos la combinación correcta, sin paquetes prearmados.
            </p>
            <a
              href="/es#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#ffffff',
                color: 'var(--accent)',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 28px',
                borderRadius: 8,
                textDecoration: 'none',
                transitionProperty: 'transform',
                transitionDuration: '.15s',
                transitionTimingFunction: 'ease',
              }}
            >
              {'Agenda Tu Llamada de Estrategia \u2192'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>

      <style>
        {[
          '.svc-split { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(40px, 5vw, 80px); align-items: center; }',
          '.svc-split.img-left .svc-text { order: 2; }',
          '.svc-split.img-left .svc-visual { order: 1; }',
          '.svc-visual { display: flex; align-items: center; justify-content: center; }',
          '.svc-visual-inner { position: relative; width: 100%; max-width: 380px; aspect-ratio: 1 / 1; border-radius: 24px; background: var(--bg-card); border: 1px solid var(--line); box-shadow: var(--shadow-card); display: flex; align-items: center; justify-content: center; overflow: hidden; }',
          '.svc-ghost-number { position: absolute; font-family: var(--display); font-weight: 900; font-size: clamp(140px, 18vw, 220px); line-height: 1; color: var(--accent); opacity: 0.14; letter-spacing: -.04em; user-select: none; }',
          '.svc-icon { position: relative; width: clamp(110px, 12vw, 150px); height: clamp(110px, 12vw, 150px); color: var(--accent); z-index: 1; }',
          '.svc-icon svg { width: 100%; height: 100%; }',
          '.svc-icon svg [stroke]:not([stroke="none"]) { stroke-width: 3; }',
          '.svc-deliverables { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 48px; }',
          '@media (max-width: 900px) { .svc-split { grid-template-columns: 1fr !important; gap: 32px !important; } .svc-split.img-left .svc-text { order: 1; } .svc-split.img-left .svc-visual { order: 2; } .svc-deliverables { grid-template-columns: 1fr !important; } .svc-visual-inner { max-width: 280px; } }',
        ].join(' ')}
      </style>
    </ThemeProvider>
  )
}