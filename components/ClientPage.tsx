'use client'
import { useState, useRef, useCallback } from 'react'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS, type ThemeKey, type AccentKey, type TypeKey } from '@/lib/constants'
import { CECA_CONTENT, type NicheDef, type ServiceDef } from '@/lib/content'
import { useReveal } from '@/lib/hooks'
import { smoothScrollTo } from '@/lib/utils'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Niches from '@/components/Niches'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import Services from '@/components/Services'
import ValueStrip from '@/components/ValueStrip'
import { heroV2 } from '@/lib/content'

const ServiceDrawer = dynamic(() => import('@/components/Services').then(mod => mod.ServiceDrawer), {
  ssr: false,
})
const FreeWebsite = dynamic(() => import('@/components/FreeWebsite'))
const ContactForm = dynamic(() => import('@/components/ContactForm'))

export default function ClientPage({ lang, isRoot = false }: { lang: 'en' | 'es', isRoot?: boolean }) {
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
        <TopBar t={t} lang={lang} online={t.online} isRoot={isRoot} />
        <Hero t={lang === 'es' ? heroV2.es : heroV2.en} lang={lang} />
        <ValueStrip t={t} />
        <Services t={t} accent={accentDef.color} lang={lang} onOpen={setDrawerService} />
        <HowItWorks t={t} lang={lang} />
        <Niches t={t} lang={lang} />
        <FreeWebsite t={t} lang={lang} />
        <ContactForm t={t} lang={lang} selectedNiche={selectedNiche} formRef={formRef} />
        <Footer t={t} online={t.online} />
        <ServiceDrawer service={drawerService} lang={lang} onClose={() => setDrawerService(null)} />
      </div>
    </ThemeProvider>
  )
}