'use client'
import { useState, useRef, useCallback, CSSProperties } from 'react'

const STATUS_COPY = {
  en: { sending: 'Sending…', success: "We'll be in touch soon!" },
  es: { sending: 'Enviando…', success: 'Te contactamos pronto!' },
}

interface CtaButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  variant?: 'primary' | 'secondary'
  lang?: string
  status?: 'idle' | 'loading' | 'success' | 'blocked'
  type?: 'button' | 'submit'
  style?: CSSProperties
  fullWidth?: boolean
  forceAccent?: boolean
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="spin" style={{ display: 'inline-block' }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.25" />
      <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" style={{ display: 'inline-block' }}>
      <path d="M5 12 l5 5 L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function CtaButton({
  children, onClick, variant = 'primary', lang = 'en',
  status = 'idle', type = 'button', style = {}, fullWidth = false, forceAccent = false,
}: CtaButtonProps) {
  const [hover, setHover] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const rippleId = useRef(0)

  const isPrimary = variant === 'primary'
  const idleBg = forceAccent ? 'var(--accent)' : (isPrimary ? 'var(--fg)' : 'transparent')
  const idleFg = forceAccent ? 'var(--accent-contrast)' : (isPrimary ? 'var(--bg)' : 'var(--fg)')

  let bg = idleBg, fg = idleFg, border = '1px solid var(--fg)'
  if (hover && status === 'idle') { bg = 'var(--accent)'; fg = 'var(--accent-contrast)'; border = '1px solid var(--accent)' }
  if (status === 'success') { bg = '#28a36a'; fg = '#fff'; border = '1px solid #28a36a' }
  if (status === 'loading') { bg = 'var(--accent)'; fg = 'var(--accent-contrast)'; border = '1px solid var(--accent)' }
  if (status === 'blocked') { bg = '#e23b3b'; fg = '#fff'; border = '1px solid #e23b3b' }

  const transform = hover && status === 'idle' ? 'scale(1.04)' : 'scale(1)'
  const copy = STATUS_COPY[lang as keyof typeof STATUS_COPY] || STATUS_COPY.en
  const label = status === 'loading' ? copy.sending : status === 'success' ? copy.success : children

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (status !== 'idle') return
    const rect = e.currentTarget.getBoundingClientRect()
    const id = rippleId.current++
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRipples((r) => [...r, { id, x, y }])
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700)
    onClick?.(e)
  }, [onClick, status])

  return (
    <button
      type={type}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.97)' }}
      onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = transform }}
      className="cta"
      style={{
        position: 'relative', overflow: 'hidden',
        background: bg, color: fg, border, transform,
        transition: 'background .25s ease, color .25s ease, transform .15s cubic-bezier(.5,1.6,.4,1), border-color .25s ease',
        padding: '16px 22px', fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700,
        letterSpacing: '.08em', textTransform: 'uppercase', cursor: status === 'idle' ? 'pointer' : 'default',
        display: 'inline-flex', alignItems: 'center',
        justifyContent: fullWidth ? 'space-between' : 'center', gap: 12,
        width: fullWidth ? '100%' : 'auto',
        ...style,
      }}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: 'absolute', left: r.x, top: r.y, width: 18, height: 18,
            borderRadius: 99, background: 'rgba(242,100,25,.6)',
            transform: 'translate(-50%,-50%) scale(0)', pointerEvents: 'none',
            animation: 'ripple .7s ease-out forwards',
          }}
        />
      ))}
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <span>{label}</span>
        {status === 'idle' && <span className="cta-arrow">→</span>}
        {status === 'loading' && <Spinner />}
        {status === 'success' && <CheckIcon />}
      </span>
    </button>
  )
}
