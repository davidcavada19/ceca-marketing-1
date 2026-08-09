export interface NicheDef { code: string; name: string }

export interface SiteContent {
  // Nav (usado por TopBar)
  nav_cta: string
  online: string
  nav_home: string
  nav_services: string
  nav_faq: string
  nav_contact: string

  // Form (usado por ContactForm)
  form_label: string
  form_title: string[]
  form_name: string
  form_name_ph: string
  form_phone: string
  form_phone_ph: string
  form_biz: string
  form_biz_ph: string
  form_type: string
  form_type_ph: string
  form_challenge: string
  form_challenge_ph: string
  form_cta: string
  form_note: string
  niches: NicheDef[]

  // Footer (mantenido por seguridad — confirmar con Footer.tsx)
  footer_tagline: string
  footer_rights: string
}

// ─── NICHES (usado en el <select> del formulario) ────────────────────────────

const NICHES_EN: NicheDef[] = [
  { code: 'hvac',        name: 'HVAC' },
  { code: 'plumbing',    name: 'Plumbers' },
  { code: 'electrical',  name: 'Electricians' },
  { code: 'roofing',     name: 'Roofers' },
  { code: 'remodeling',  name: 'Remodelers' },
  { code: 'painting',    name: 'Painters' },
  { code: 'flooring',    name: 'Flooring' },
  { code: 'landscaping', name: 'Landscapers' },
  { code: 'general',     name: 'General Contractors' },
  { code: 'other',       name: 'Other Trades' },
]

const NICHES_ES: NicheDef[] = [
  { code: 'hvac',          name: 'HVAC' },
  { code: 'plomeria',      name: 'Plomeros' },
  { code: 'electricistas', name: 'Electricistas' },
  { code: 'roofing',       name: 'Roofing' },
  { code: 'remodelacion',  name: 'Remodelación' },
  { code: 'pintura',       name: 'Pintura' },
  { code: 'pisos',         name: 'Pisos' },
  { code: 'jardineria',    name: 'Jardinería' },
  { code: 'contratista',   name: 'Contratista General' },
  { code: 'otro',          name: 'Otro Oficio' },
]

// ─── MAIN CONTENT EXPORT ─────────────────────────────────────────────────────

export const CECA_CONTENT: Record<string, SiteContent> = {
  en: {
    nav_cta: 'Book a Strategy Call',
    online: 'ONLINE',
    nav_home: 'Home',
    nav_services: 'Services',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',

    form_label: 'Get Started',
    form_title: ['Ready to Get More Jobs', 'on the Books?'],
    form_name: 'Full name',
    form_name_ph: 'Mike Johnson',
    form_phone: 'Phone',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Business name',
    form_biz_ph: 'Johnson HVAC LLC',
    form_type: 'Trade / Industry',
    form_type_ph: 'HVAC, Roofing, Plumbing...',
    form_challenge: 'Biggest challenge right now',
    form_challenge_ph: "Tell us what's not working — leads, response time, website...",
    form_cta: 'Book Your Growth Strategy Call →',
    form_note: "No pressure, no jargon — just a straight conversation about what's working, what isn't, and what to do next.",
    niches: NICHES_EN,

    footer_tagline: 'A bilingual contractor marketing agency. No generic playbooks. No wasted ad spend.',
    footer_rights: 'All rights reserved.',
  },

  es: {
    nav_cta: 'Agenda una Llamada',
    online: 'EN LÍNEA',
    nav_home: 'Inicio',
    nav_services: 'Servicios',
    nav_faq: 'FAQ',
    nav_contact: 'Contacto',

    form_label: 'Comenzar',
    form_title: ['¿Listo para Conseguir Más Leads', 'y Cerrar Más Trabajos?'],
    form_name: 'Nombre completo',
    form_name_ph: 'Carlos García',
    form_phone: 'Teléfono',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Nombre del negocio',
    form_biz_ph: 'García HVAC LLC',
    form_type: 'Oficio / Industria',
    form_type_ph: 'HVAC, Roofing, Plomería...',
    form_challenge: 'Mayor desafío ahora mismo',
    form_challenge_ph: 'Cuéntanos qué no está funcionando — leads, tiempo de respuesta, página web...',
    form_cta: 'Agenda Tu Llamada de Estrategia →',
    form_note: 'Sin contratos. Sin presión. Solo una respuesta directa sobre qué está frenando tu negocio.',
    niches: NICHES_ES,

    footer_tagline: 'Agencia de marketing para contratistas, construida para el oficio.',
    footer_rights: 'Todos los derechos reservados.',
  },
}