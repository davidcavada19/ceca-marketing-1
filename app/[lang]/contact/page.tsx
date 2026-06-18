'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const params = useParams()
  const router = useRouter()
  const lang = (params?.lang as string) || 'en'

  useEffect(() => {
    if (lang !== 'en' && lang !== 'es') router.push('/en/contact')
  }, [lang, router])

  const t = CECA_CONTENT[lang] || CECA_CONTENT.en
  const online = lang === 'en' ? 'ONLINE' : 'EN LÍNEA'
  const isEn = lang === 'en'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  const [form, setForm] = useState({ name: '', phone: '', biz: '', type: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.biz) return
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              {isEn ? 'Free Marketing Audit' : 'Auditoría de Marketing Gratis'}
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              {isEn
                ? <>Get More Leads for<br /><span style={{ color: 'var(--accent)' }}>Your Service Business.</span></>
                : <>Consigue Más Clientes<br /><span style={{ color: 'var(--accent)' }}>para Tu Negocio.</span></>}
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              {isEn
                ? 'Start with a free digital marketing audit. We analyze your current online presence, identify gaps, and show you exactly what it would take to generate more leads — no pressure, no contracts.'
                : 'Empieza con una auditoría de marketing digital gratuita. Analizamos tu presencia online actual, identificamos brechas y te mostramos exactamente qué se necesita para generar más clientes — sin presión, sin contratos.'}
            </p>
          </section>

          {/* Trust bar */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '20px clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
              {(isEn ? [
                '✓ Free audit — no credit card',
                '✓ Response in under 24h',
                '✓ No long-term contracts',
                '✓ 100% satisfaction guarantee',
              ] : [
                '✓ Auditoría gratis — sin tarjeta',
                '✓ Respuesta en menos de 24h',
                '✓ Sin contratos largos',
                '✓ Garantía de satisfacción 100%',
              ]).map((item) => (
                <span key={item} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>{item}</span>
              ))}
            </div>
          </section>

          {/* Form + Info */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 80, alignItems: 'start' }}>

              {/* Form */}
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
                  {isEn ? 'Start here — it\'s free' : 'Empieza aquí — es gratis'}
                </div>

                {status === 'success' ? (
                  <div style={{ border: '1px solid var(--accent)', padding: 48, textAlign: 'center' }}>
                    <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                    <h3 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 28, color: 'var(--fg)', marginBottom: 12, letterSpacing: '-.02em' }}>
                      {isEn ? 'Message sent!' : '¡Mensaje enviado!'}
                    </h3>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 8 }}>
                      {isEn
                        ? 'We will review your information and get back to you within 24 hours — usually much faster.'
                        : 'Revisaremos tu información y te responderemos en menos de 24 horas — generalmente mucho antes.'}
                    </p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em' }}>
                      {isEn ? 'Check your phone for a confirmation text.' : 'Revisa tu teléfono para un texto de confirmación.'}
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {[
                      { key: 'name', label: t.form_name, placeholder: t.form_name_ph, type: 'text' },
                      { key: 'phone', label: t.form_phone, placeholder: t.form_phone_ph, type: 'tel' },
                      { key: 'biz', label: t.form_biz, placeholder: t.form_biz_ph, type: 'text' },
                    ].map((f) => (
                      <div key={f.key}>
                        <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          style={{ width: '100%', fontFamily: 'var(--body)', fontSize: 15, padding: '14px 16px', border: '1px solid var(--line)', background: 'transparent', color: 'var(--fg)', outline: 'none', boxSizing: 'border-box', transition: 'border-color .15s' }}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{t.form_type}</label>
                      <select
                        value={form.type}
                        onChange={e => setForm({ ...form, type: e.target.value })}
                        style={{ width: '100%', fontFamily: 'var(--body)', fontSize: 15, padding: '14px 16px', border: '1px solid var(--line)', background: 'var(--bg)', color: form.type ? 'var(--fg)' : 'var(--muted)', outline: 'none', boxSizing: 'border-box' }}
                      >
                        <option value="">{t.form_type_ph}</option>
                        {t.niches.map(n => <option key={n.code} value={n.code}>{n.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{t.form_challenge}</label>
                      <textarea
                        placeholder={t.form_challenge_ph}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        style={{ width: '100%', fontFamily: 'var(--body)', fontSize: 15, padding: '14px 16px', border: '1px solid var(--line)', background: 'transparent', color: 'var(--fg)', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                      style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '18px', background: 'var(--accent)', color: 'var(--accent-contrast)', border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1, transition: 'opacity .15s' }}
                    >
                      {status === 'sending'
                        ? (isEn ? 'Sending…' : 'Enviando…')
                        : (isEn ? 'Get My Free Audit →' : 'Obtener Auditoría Gratis →')}
                    </button>

                    <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textAlign: 'center', margin: 0, letterSpacing: '.04em' }}>
                      {t.form_note}
                    </p>
                  </div>
                )}
              </div>

              {/* Info sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

                {/* What happens next */}
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
                    {isEn ? 'What happens next' : 'Qué pasa después'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {(isEn ? [
                      { n: '01', title: 'We review your info', desc: 'We look at your current online presence — website, Google Business Profile, and competitors.' },
                      { n: '02', title: 'Free audit delivered', desc: 'You get a clear breakdown of what is working, what is not, and what the opportunity looks like.' },
                      { n: '03', title: 'Strategy call (20 min)', desc: 'We walk you through the audit and show you exactly what it would take to generate more leads.' },
                      { n: '04', title: 'You decide', desc: 'No pressure. You decide if CECA is the right fit for your business — we never push.' },
                    ] : [
                      { n: '01', title: 'Revisamos tu información', desc: 'Analizamos tu presencia online actual — sitio web, Google Business Profile y competidores.' },
                      { n: '02', title: 'Auditoría entregada', desc: 'Recibes un desglose claro de qué está funcionando, qué no y cuál es la oportunidad.' },
                      { n: '03', title: 'Llamada de estrategia (20 min)', desc: 'Te guiamos por la auditoría y te mostramos exactamente qué se necesita para generar más clientes.' },
                      { n: '04', title: 'Tú decides', desc: 'Sin presión. Tú decides si CECA es el fit correcto para tu negocio — nunca presionamos.' },
                    ]).map((step, i) => (
                      <div key={step.n} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>{step.n}</div>
                        <div>
                          <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginBottom: 4 }}>{step.title}</div>
                          <div style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div style={{ border: '1px solid var(--line)', padding: 28 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
                    {isEn ? 'Prefer to talk first?' : '¿Prefieres hablar primero?'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>WhatsApp</div>
                        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--fg)', letterSpacing: '-.01em' }}>(832) 908-2728</div>
                      </div>
                    </a>
                    <a href="mailto:info@cecamarketing.com" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>Email</div>
                        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', letterSpacing: '-.01em' }}>info@cecamarketing.com</div>
                      </div>
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>
                          {isEn ? 'Response time' : 'Tiempo de respuesta'}
                        </div>
                        <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--fg)' }}>
                          {isEn ? 'Under 24 hours — usually same day' : 'Menos de 24 horas — generalmente el mismo día'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 36, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
                    {isEn ? 'Follow us' : 'Síguenos'}
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <a href="https://www.instagram.com/ceca_marketing" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '.04em' }}>Instagram →</a>
                    <a href="https://www.facebook.com/CECAMarketing" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '.04em' }}>Facebook →</a>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>
    </ThemeProvider>
  )
}