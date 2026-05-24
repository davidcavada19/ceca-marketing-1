'use client'
import { useEffect } from 'react'
import { AccentDef, ThemeDef, TypePairing } from '@/lib/constants'

interface ThemeProviderProps {
  accent: AccentDef
  theme: ThemeDef
  pair: TypePairing
  children: React.ReactNode
}

export default function ThemeProvider({ accent, theme, pair, children }: ThemeProviderProps) {
  useEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--bg',             theme.bg)
    r.setProperty('--fg',             theme.fg)
    r.setProperty('--muted',          theme.muted)
    r.setProperty('--line',           theme.line)
    r.setProperty('--panel',          theme.panel)
    r.setProperty('--subtle',         theme.subtle)
    r.setProperty('--accent',         accent.color)
    r.setProperty('--accent-contrast',accent.contrast)
    r.setProperty('--display',        pair.display)
    r.setProperty('--mono',           pair.mono)
    document.body.style.background  = theme.bg
    document.body.style.color       = theme.fg
    document.body.style.fontFamily  = pair.display
  }, [accent, theme, pair])

  return <>{children}</>
}
