'use client'
import { useState, useRef, useCallback } from 'react'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS, type Lang, type ThemeKey, type AccentKey, type TypeKey } from '@/lib/constants'
import { CECA_CONTENT, type NicheDef, type ServiceDef } from '@/lib/content'
import { useReveal } from '@/lib/hooks'
import { smoothScrollTo } from '@/lib/utils'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import Services, { ServiceDrawer } from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Niches from '@/components/Niches'
import FreeWebsite from '@/components/FreeWebsite'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>(
  (typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('lang') ?? TWEAK_DEFAULTS.lang
    : TWEAK_DEFAULTS.lang) as Lang
)
  const [theme]  = useState<ThemeKey>(TWEAK_DEFAULTS.theme)
  const [accent] = useState<AccentKey>(TWEAK_DEFAULTS.accent)
  const [type]   = useState<TypeKey>(TWEAK_DEFAULTS.type)

  const accentDef = ACCENTS[accent]
  const pair      = TYPE_PAIRINGS[type]
  const themeDef  = THEMES[theme]
  const t         = CECA_CONTENT[lang] || CECA_CONTENT.en

  useReveal()

  const [drawerService, setDrawerService] = useState<ServiceDef | null>(null)
  const [selectedNiche, setSelectedNiche] = useState<NicheDef | null>(null)
  const formRef = useRef<HTMLElement>(null)

  const handleSelectNiche = useCallback((n: NicheDef) => {
    setSelectedNiche(n)
    setTimeout(() => smoothScrollTo(formRef.current), 80)
  }, [])

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', paddingTop: 0, overflowX: 'hidden', maxWidth: '100vw' }}>
        <TopBar t={t} lang={lang} setLang={(l) => setLang(l as Lang)} online={t.online} />
        <Hero t={t} accent={accentDef.color} lang={lang} />
        <Services t={t} accent={accentDef.color} lang={lang} onOpen={setDrawerService} />
        <HowItWorks t={t} lang={lang} />
        <Niches t={t} selectedNiche={selectedNiche} onSelectNiche={handleSelectNiche} lang={lang} />
        <FreeWebsite t={t} lang={lang} />
        <ContactForm t={t} lang={lang} selectedNiche={selectedNiche} formRef={formRef} />
        <Footer t={t} online={t.online} />
        <ServiceDrawer service={drawerService} lang={lang} onClose={() => setDrawerService(null)} />
      </div>
    </ThemeProvider>
  )
}