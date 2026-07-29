'use client'
import { useState, useEffect, RefObject, CSSProperties, cloneElement, useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { SiteContent, NicheDef } from '@/lib/content'
import { SectionLabel, H2 } from './ui/SectionLabel'
import CtaButton from './ui/CtaButton'

interface ContactFormProps { t: SiteContent; lang: string; selectedNiche: NicheDef | null; formRef: RefObject<HTMLElement | null> }

type FieldState = '' | 'valid' | 'invalid'

function Row({ children }: { children: React.ReactNode }) {
  return <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>{children}</div>
}

function Field({ label, children, state }: { label: string; children: React.ReactElement<{ className?: string; style?: CSSProperties }>; state: FieldState }) {
  const borderColor = state === 'valid' ? '#28a36a' : state === 'invalid' ? '#e23b3b' : 'var(--line)'
  const inputStyle: CSSProperties = {
    width: '100%', background: '#ffffff',
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    padding: '12px 14px', fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', outline: 'none', resize: 'none',
    boxSizing: 'border-box',
    transition: 'border-color .25s ease, box-shadow .25s ease',
  }
  const cls = ['field-input', children.props.className, state].filter(Boolean).join(' ')
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--body)', fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>
        <span>{label}</span>
        {state === 'valid'   && <span style={{ color: '#28a36a' }}>✓</span>}
        {state === 'invalid' && <span style={{ color: '#e23b3b' }}>!</span>}
      </label>
      {cloneElement(children, { className: cls, style: { ...inputStyle, ...(children.props.style || {}) } })}
    </div>
  )
}

export default function ContactForm({ t, lang, selectedNiche, formRef }: ContactFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [values, setValues] = useState({ name: '', email: '', phone: '', biz: '', type: '', challenge: '' })
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'blocked'>('idle')
  const [honeypot, setHoneypot] = useState('')
  const [formReady, setFormReady] = useState(false)
  const [loadTime] = useState(() => Date.now())

  useEffect(() => {
    const id = setTimeout(() => setFormReady(true), 2000)
    return () => clearTimeout(id)
  }, [])

  const valid = {
    name:      values.name.trim().length >= 2,
    email:     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
    phone:     /^[+\d][\d\s()\-]{6,}$/.test(values.phone),
    biz:       values.biz.trim().length >= 2,
    type:      !!values.type,
    challenge: values.challenge.trim().length >= 5,
  }
  const allValid = Object.values(valid).every(Boolean)

  useEffect(() => {
    if (selectedNiche && values.type !== selectedNiche.code) {
      setValues((v) => ({ ...v, type: selectedNiche.code }))
      setTouched((t) => ({ ...t, type: true }))
    }
  }, [selectedNiche])

  const submit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, biz: true, type: true, challenge: true })

    if (honeypot) return
    if (!formReady || Date.now() - loadTime < 2000) return
    if (!allValid || status !== 'idle') return

    setStatus('loading')

    try {
      let token = ''
      if (executeRecaptcha) {
        try { token = await executeRecaptcha('contact_form') } catch {}
      }

      if (token) {
        try {
          await fetch('/api/verify-recaptcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          })
        } catch {}
      }

      const contactRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (contactRes.ok) {
        setStatus('success')
        setTimeout(() => {
          setStatus('idle')
          setValues({ name: '', email: '', phone: '', biz: '', type: '', challenge: '' })
          setTouched({})
        }, 4200)
      } else {
        setStatus('blocked')
        setTimeout(() => setStatus('idle'), 3000)
      }

    } catch {
      setStatus('blocked')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }, [executeRecaptcha, honeypot, formReady, loadTime, allValid, status, values])

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }))
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }))
  const fieldState = (k: string): FieldState => {
    if (!touched[k]) return ''
    return valid[k as keyof typeof valid] ? 'valid' : 'invalid'
  }

  const cardEyebrow = lang === 'es' ? 'Diagnóstico gratis' : 'Free diagnosis'

  return (
    <section id="contact" ref={formRef} style={{ padding: '112px 28px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionLabel label={t.form_label} />
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <div>
            <H2 lines={t.form_title} />
            <div style={{ marginTop: 36 }}>
              {[
                lang === 'es' ? 'Respondemos en menos de 24 horas' : 'We respond in less than 24 hours',
                lang === 'es' ? 'Sin spam, sin presión' : 'No spam, no pressure',
                lang === 'es' ? 'Solo una conversación honesta' : 'Just an honest conversation',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: 16, color: 'var(--fg)', fontWeight: 500 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form className="reveal contact-card" onSubmit={submit} style={{
            border: '1px solid var(--line)',
            borderRadius: 12,
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 32,
          }}>

            {/* Card header */}
            <div style={{ marginBottom: 26 }}>
              <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                {cardEyebrow}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 21, color: 'var(--fg)', lineHeight: 1.3 }}>
                {lang === 'es'
                  ? 'Cuéntanos de tu negocio y te decimos qué está frenando tus leads.'
                  : "Tell us about your business and we'll show you what's holding your leads back."}
              </div>
            </div>

            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
              <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="nope" readOnly />
            </div>
            <Row>
              <Field label={t.form_name} state={fieldState('name')}>
                <input value={values.name} onChange={update('name')} onBlur={blur('name')} placeholder={t.form_name_ph} type="text" autoComplete="name" />
              </Field>
              <Field label={t.form_phone} state={fieldState('phone')}>
                <input value={values.phone} onChange={update('phone')} onBlur={blur('phone')} placeholder={t.form_phone_ph} type="tel" autoComplete="tel" />
              </Field>
            </Row>
            <Field label={lang === 'es' ? 'Correo electrónico' : 'Email'} state={fieldState('email')}>
              <input value={values.email} onChange={update('email')} onBlur={blur('email')} placeholder={lang === 'es' ? 'tu@email.com' : 'you@email.com'} type="email" autoComplete="email" />
            </Field>
            <Field label={t.form_biz} state={fieldState('biz')}>
              <input value={values.biz} onChange={update('biz')} onBlur={blur('biz')} placeholder={t.form_biz_ph} type="text" autoComplete="organization" />
            </Field>
            <Field label={t.form_type} state={fieldState('type')}>
              <select value={values.type} onChange={update('type')} onBlur={blur('type')}>
                <option value="" disabled>{t.form_type_ph}</option>
                {t.niches.map((n) => <option key={n.code} value={n.code}>{n.name}</option>)}
              </select>
            </Field>
            <Field label={t.form_challenge} state={fieldState('challenge')}>
              <textarea value={values.challenge} onChange={update('challenge')} onBlur={blur('challenge')} placeholder={t.form_challenge_ph} rows={4} />
            </Field>
            {status === 'blocked' && (
              <p style={{ color: '#e23b3b', fontFamily: 'var(--body)', fontSize: 13, marginBottom: 8, textAlign: 'center' }}>
                {lang === 'es' ? 'Verificación fallida. Intenta de nuevo.' : 'Verification failed. Please try again.'}
              </p>
            )}
            <div style={{ marginTop: 8 }}>
              <CtaButton
                lang={lang} type="submit" fullWidth status={status} forceAccent onClick={() => {}}
                style={{ fontFamily: 'var(--display)', textTransform: 'none', letterSpacing: 0, fontSize: 16, borderRadius: 8, justifyContent: 'center' }}
              >
                {t.form_cta.replace(/→/g, '').trim()}
              </CtaButton>
            </div>
            <p style={{ marginTop: 14, fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.5 }}>{t.form_note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}