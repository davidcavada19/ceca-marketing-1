// ─── CECA brand — single source of truth ─────────────────────
export const NAVY   = '#0a0f1e'
export const ORANGE = '#f97316'
export const WHITE  = '#ffffff'
export const INK    = '#0a0f1e'
// legacy alias (some files may still import CREAM)
export const CREAM  = '#ffffff'

export interface AccentDef { name: string; color: string; contrast: string }
export const ACCENTS: Record<string, AccentDef> = {
  orange: { name: 'Orange', color: '#f97316', contrast: '#ffffff' },
}

export interface TypePairing { name: string; display: string; mono: string }
export const TYPE_PAIRINGS: Record<string, TypePairing> = {
  inter: { name: 'Outfit / DM Sans', display: 'var(--font-outfit), system-ui, sans-serif', mono: 'var(--font-dm-sans), system-ui, sans-serif' },
}

export interface ThemeDef {
  bg: string; fg: string; muted: string; line: string
  panel: string; subtle: string; invBg: string; invFg: string
}
// One theme only — light. 'dark' kept as an alias to the same
// palette so nothing that references it breaks.
const LIGHT: ThemeDef = {
  bg: '#ffffff', fg: '#0a0f1e', muted: '#4b5563', line: '#e5e7eb',
  panel: '#ffffff', subtle: '#f3f4f6', invBg: '#0a0f1e', invFg: '#ffffff',
}
export const THEMES: Record<string, ThemeDef> = {
  light: LIGHT,
  dark: LIGHT,
}

export type Lang = 'en' | 'es'
export type ThemeKey = 'light' | 'dark'
export type AccentKey = 'orange'
export type TypeKey = 'inter'

export interface Tweaks {
  accent: AccentKey
  type:   TypeKey
  theme:  ThemeKey
  lang:   Lang
}

export const TWEAK_DEFAULTS: Tweaks = {
  accent: 'orange',
  type:   'inter',
  theme:  'light',
  lang:   'en',
}