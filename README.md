# CECA Marketing — Next.js 15 + TypeScript

Landing page completa migrada desde React standalone a Next.js 15 con TypeScript.

## Setup en VS Code

### 1. Instalar dependencias
```bash
npm install
```

### 2. Correr en desarrollo
```bash
npm run dev
```
Abre **http://localhost:3000** en tu navegador.

### 3. Build de producción
```bash
npm run build
npm run start
```

---

## Estructura del proyecto

```
ceca-marketing/
├── app/
│   ├── layout.tsx          ← Fuentes (next/font) + metadata SEO
│   ├── page.tsx            ← App principal (estado global: lang, theme, accent)
│   └── globals.css         ← Animaciones CSS, variables, reset
├── components/
│   ├── TopBar.tsx          ← Barra de navegación fija
│   ├── Hero.tsx            ← Hero + live data panel + stats
│   ├── Services.tsx        ← Cards con flip + ServiceDrawer
│   ├── HowItWorks.tsx      ← 4 pasos con hover auto-progress
│   ├── Niches.tsx          ← Grid de nichos clickeables
│   ├── FreeWebsite.tsx     ← Sección naranja del sitio gratis
│   ├── ContactForm.tsx     ← Formulario con validación en vivo
│   ├── Footer.tsx          ← Footer con reloj en vivo
│   ├── ThemeProvider.tsx   ← Aplica CSS variables según tema
│   └── ui/
│       ├── CtaButton.tsx   ← Botón con ripple effect
│       ├── Sparkline.tsx   ← Mini gráficas SVG
│       ├── InteractiveTicker.tsx
│       └── SectionLabel.tsx
├── lib/
│   ├── constants.ts        ← Paleta, temas, tipografías
│   ├── content.ts          ← Todo el copy EN/ES
│   ├── hooks.ts            ← useReveal, useClock, useCountUp, etc.
│   └── utils.ts            ← fmt(), smoothScrollTo()
└── public/                 ← Para agregar imágenes/favicon
```

---

## Para subir a cecamarketing.com

### Opción A — Vercel (recomendado, gratis)
1. Push el proyecto a GitHub
2. Ve a vercel.com → "Add New Project" → conecta tu repo
3. En "Domains" agrega `cecamarketing.com`
4. Vercel te da las DNS records para apuntar en tu registrador

### Opción B — cPanel / Hosting tradicional
```bash
npm run build
# Sube el contenido de la carpeta .next/ + package.json al servidor
# Requiere Node.js en el servidor
npm run start
```

### Opción C — Export estático
Agrega a `next.config.ts`:
```ts
const nextConfig = { output: 'export' }
```
Luego:
```bash
npm run build
# Sube la carpeta /out/ a tu hosting como archivos estáticos
```

---

## Personalizar contenido

- **Copy/textos:** edita `lib/content.ts`
- **Colores:** edita `lib/constants.ts` → `ACCENTS` y `THEMES`
- **Formulario real:** en `components/ContactForm.tsx`, reemplaza el `setTimeout` del submit con tu API (ej. EmailJS, Resend, Formspree)
- **Analytics:** agrega tu Google Analytics ID en `app/layout.tsx`
