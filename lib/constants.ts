export const NAVY  = '#0f1f3d'
export const ORANGE = '#f26419'
export const CREAM = '#f8f5ee'
export const INK   = '#0a1428'

export interface AccentDef { name: string; color: string; contrast: string }
export const ACCENTS: Record<string, AccentDef> = {
  orange: { name: 'Orange',    color: '#f26419', contrast: '#ffffff' },
  navy:   { name: 'Deep navy', color: '#0f1f3d', contrast: '#f8f5ee' },
  amber:  { name: 'Amber',     color: '#e89d22', contrast: '#0f1f3d' },
  teal:   { name: 'Teal',      color: '#0d8a8a', contrast: '#ffffff' },
}

export interface TypePairing { name: string; display: string; mono: string }
export const TYPE_PAIRINGS: Record<string, TypePairing> = {
  inter: { name: 'Inter Tight / JetBrains', display: 'var(--font-inter-tight), system-ui, sans-serif', mono: 'var(--font-jetbrains), ui-monospace, monospace' },
}

export interface ThemeDef {
  bg: string; fg: string; muted: string; line: string
  panel: string; subtle: string; invBg: string; invFg: string
}
export const THEMES: Record<string, ThemeDef> = {
  light: { bg: '#f8f5ee', fg: '#0f1f3d', muted: '#586075', line: '#dcd7c8', panel: '#efeada', subtle: '#e4dfd1', invBg: '#0f1f3d', invFg: '#f8f5ee' },
  dark:  { bg: '#0f1f3d', fg: '#f8f5ee', muted: '#9aa4bd', line: '#1a2a4a', panel: '#152848', subtle: '#1e3157', invBg: '#f8f5ee', invFg: '#0f1f3d' },
}

export type Lang = 'en' | 'es'
export type ThemeKey = 'light' | 'dark'
export type AccentKey = 'orange' | 'navy' | 'amber' | 'teal'
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