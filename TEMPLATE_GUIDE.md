# CECA Marketing — Template Guide
> Cómo personalizar este sitio para un nuevo cliente en menos de 2 horas.

La estructura, componentes, animaciones y SEO se quedan **exactamente igual**.
Solo tocas 4 archivos y cambias el logo.

---

## Archivos a tocar (en orden)

| # | Archivo | Qué cambias |
|---|---------|-------------|
| 1 | `lib/constants.ts` | Colores y tema del cliente |
| 2 | `lib/content.ts` | Todo el copy (textos, servicios, nichos) |
| 3 | `app/layout.tsx` | Metadata SEO (título, descripción, URL) |
| 4 | `public/` | Logo del cliente |

---

## 1. `lib/constants.ts` — Paleta de colores

Agrega un tema nuevo en `THEMES` y un acento nuevo en `ACCENTS`:

```ts
export const THEMES: Record<string, ThemeDef> = {
  light: { ... },
  dark:  { ... },

  // NUEVO CLIENTE — copia y renombra:
  acme: {
    bg:     '#0A0F1E',
    fg:     '#F9FAFB',
    muted:  '#9CA3AF',
    line:   '#1E2A45',
    panel:  '#0F1629',
    subtle: '#1A2240',
    invBg:  '#F9FAFB',
    invFg:  '#0A0F1E',
  },
}

export const ACCENTS: Record<string, AccentDef> = {
  orange: { ... },
  acme_blue: { name: 'Acme Blue', color: '#2563EB', contrast: '#ffffff' },
}

export const TWEAK_DEFAULTS: Tweaks = {
  accent: 'acme_blue',
  type:   'inter',
  theme:  'acme',
  lang:   'en',
}
```

### Paleta de referencia CECA (dark)
| Variable | Hex | Uso |
|----------|-----|-----|
| `bg` | `#0A0F1E` | Fondo base |
| `fg` | `#F9FAFB` | Texto principal |
| `muted` | `#9CA3AF` | Texto secundario |
| `line` | `#1E2A45` | Bordes |
| `panel` | `#0F1629` | Cards |
| `subtle` | `#1A2240` | Hover |
| `accent` | `#F97316` | Naranja primario |

---

## 2. `lib/content.ts` — Copy del cliente

```ts
badge:          'Tu nicho · Ciudad, TX'
h1_lines:       ['Línea 1', 'Línea 2']
h1_stress_word: 'palabra destacada'
subtitle:       'Descripción corta'
cta1:           'Texto botón primario'
cta2:           'Texto botón secundario'
ticker:         ['HVAC', 'PLOMERÍA', 'ELECTRICIDAD', ...]
footer_tagline: 'Tagline del footer'
```

---

## 3. `app/layout.tsx` — SEO metadata

```ts
name:            'Nombre del cliente'
url:             'https://sudominio.com'
telephone:       '+1...'
email:           'info@sudominio.com'
addressLocality: 'Ciudad'
metadataBase:    new URL('https://sudominio.com')
```

---

## 4. `public/` — Logo

| Archivo | Uso | Tamaño |
|---------|-----|--------|
| `ceca_logo.png` | Nav y footer | 200×60px, fondo transparente |
| `og-image.jpg` | Redes sociales | 1200×630px |
| `favicon.ico` | Browser | 32×32px |

---

## Checklist por cliente