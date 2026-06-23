import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Privacidad | CECA Marketing',
  description: 'Política de privacidad de CECA Marketing — qué información recopilamos, cómo la usamos y las opciones que tienes.',
  alternates: {
    canonical: 'https://cecamarketing.com/es/privacy-policy',
    languages: {
      en: 'https://cecamarketing.com/privacy-policy',
      es: 'https://cecamarketing.com/es/privacy-policy',
      'x-default': 'https://cecamarketing.com/privacy-policy',
    },
  },
}

const sectionsEs = [
  { title: 'Información que Recopilamos', body: 'Cuando completas nuestro formulario de contacto, recopilamos tu nombre completo, número de teléfono, nombre del negocio, tipo de negocio y cualquier mensaje que envíes. No recopilamos información de pago a través de este sitio.' },
  { title: 'Cookies y Analítica', body: 'Usamos Google Analytics para entender cómo los visitantes usan nuestro sitio — páginas vistas, tiempo en el sitio y ubicación general (solo a nivel ciudad/región). Google Analytics usa cookies para recopilar esta información. Puedes optar por no participar en el seguimiento de Google Analytics usando el complemento de navegador de exclusión de Google Analytics.' },
  { title: 'Meta Pixel y Publicidad', body: 'Usamos el Meta Pixel (Facebook Pixel) en nuestro sitio para medir la efectividad de nuestra publicidad y mostrar anuncios relevantes a personas que han visitado nuestro sitio, cumpliendo con las políticas de publicidad de Meta. El Meta Pixel recopila información como tu dirección IP, tipo de navegador y páginas visitadas. Puedes administrar tus preferencias de anuncios directamente desde la configuración de tu cuenta de Facebook o Instagram.' },
  { title: 'Cómo Usamos Tu Información', body: 'Usamos la información que proporcionas para responder a tu consulta, preparar una auditoría de marketing y dar seguimiento sobre nuestros servicios vía teléfono, SMS, email o WhatsApp. No vendemos tu información personal a terceros.' },
  { title: 'Compartir Datos', body: 'Podemos compartir tu información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio (como nuestro CRM o herramientas de programación), estrictamente con el propósito de brindarte nuestros servicios. No compartimos tu información con terceros para sus propios fines de marketing.' },
  { title: 'Retención de Datos', body: 'Conservamos los envíos del formulario de contacto durante el tiempo necesario para responder a tu consulta y por un período razonable después con fines de registro, a menos que solicites su eliminación antes.' },
  { title: 'Tus Derechos', body: 'Puedes solicitar acceso, corrección o eliminación de tu información personal en cualquier momento contactándonos en info@cecamarketing.com o vía WhatsApp al (832) 908-2728.' },
  { title: 'Cambios a Esta Política', body: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de vigencia actualizada.' },
]

export default function PrivacyPolicyPageEs() {
  const lang = 'es'
  const t = CECA_CONTENT.es
  const online = 'EN LÍNEA'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]
  const sections = sectionsEs

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              Política de Privacidad
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,64px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              Tu Privacidad Nos Importa.
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 640, lineHeight: 1.6 }}>
              Esta página explica qué información recopilamos, cómo la usamos y las opciones que tienes.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', marginTop: 24, letterSpacing: '.04em' }}>
              Fecha de vigencia: 17 de junio de 2026
            </p>
          </section>

          {/* Sections */}
          <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)', maxWidth: 900, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {sections.map((s) => (
                <div key={s.title} style={{ padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
                  <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 12 }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--fg)', marginBottom: 16 }}>
              ¿Preguntas sobre tus datos? Contáctanos cuando quieras.
            </p>
            <a href="mailto:info@cecamarketing.com" style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
              info@cecamarketing.com →
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}