export interface NicheDef { code: string; name: string }
export interface ServiceDef {
  n: string
  title: string
  desc: string
  metric: string
  tags: string[]
  deliverables?: string[]
}
export interface StepDef { n: string; title: string; desc: string; t: string }

export interface SiteContent {
  // Nav
  nav_cta: string
  online: string
  badge: string
  // Hero
  h1_lines: string[]
  h1_stress_word: string
  subtitle: string
  cta1: string
  cta2: string
  ticker: string[]
  // Stats (kept for backwards compat)
  stat1_label: string
  stat2_label: string
  stat3_label: string
  stat4_label: string
  // Value strip
  value_tag1: string
  value_title1: string
  value_body1: string
  value_tag2: string
  value_title2: string
  value_body2: string
  value_tag3: string
  value_title3: string
  value_body3: string
  // Services
  services_label: string
  services_title: string[]
  services_sub: string
  services: ServiceDef[]
  // How it works
  how_label: string
  how_title: string[]
  how_sub: string
  steps: StepDef[]
  // Niches
  niches_label: string
  niches_title: string[]
  niches_sub: string
  niches: NicheDef[]
  // Free website
  free_label: string
  free_title: string[]
  free_sub: string
  free_cta: string
  free_note: string
  free_box_title: string
  free_items: string[]
  // Form
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
  // Footer
  footer_tagline: string
  footer_rights: string
  nav_home: string
  nav_about: string
  nav_services: string
  nav_blog: string
  nav_faq: string
  nav_contact: string
}

// ─── SERVICES ────────────────────────────────────────────────────────────────

const SERVICES_EN: ServiceDef[] = [
  {
    n: '01',
    title: 'Contractor SEO',
    metric: 'RANK HIGHER · GET MORE LEADS',
    desc: 'Rank on Google when contractors in your area search for your services. Local SEO that drives real calls and estimate requests.',
    tags: ['Local SEO', 'Google Business', 'Location Pages', 'On-Page SEO'],
    deliverables: [
      'Full local SEO audit',
      'Google Business Profile optimization',
      'Location & service pages',
      'On-page SEO implementation',
      'Monthly ranking report',
    ],
  },
  {
    n: '02',
    title: 'Contractor Websites',
    metric: 'FREE WITH YOUR PLAN',
    desc: 'Fast, conversion-optimized websites built specifically for contractors — designed to turn visitors into calls and estimate requests.',
    tags: ['Web Design', 'Mobile Optimized', 'Fast Load', 'Lead Focused'],
    deliverables: [
      'Custom contractor website',
      'Mobile optimized',
      'Speed & Core Web Vitals',
      'Contact & booking form',
      'Google Analytics setup',
    ],
  },
  {
    n: '03',
    title: 'Marketing Automation',
    metric: 'NEVER MISS A LEAD',
    desc: 'Instant lead response, missed-call texts, automated follow-ups, and review requests — running 24/7 so you never lose a job to slow response.',
    tags: ['CRM Setup', 'Missed Call Text Back', 'Follow-Up Sequences', 'Review Automation'],
    deliverables: [
      'CRM audit & setup',
      'Missed call text-back',
      '5 core automation workflows',
      'Review request sequences',
      '30-day check-in',
    ],
  },
  {
    n: '04',
    title: 'Lead Generation',
    metric: 'MORE CALLS · MORE JOBS',
    desc: 'Google Ads, Meta Ads, and SEO systems built to generate qualified leads for contractors — every dollar tracked, every lead counted.',
    tags: ['Google Ads', 'Meta Ads', 'Lead Tracking', 'Conversion Optimization'],
    deliverables: [
      'Discovery call (20 min)',
      'Audience & competitor research',
      'Campaign architecture + copy',
      'Weekly optimization',
      'Plain-english monthly report',
    ],
  },
]

const SERVICES_ES: ServiceDef[] = [
  {
    n: '01',
    title: 'SEO para Contratistas',
    metric: 'POSICIONA MEJOR · MÁS LEADS',
    desc: 'Posiciónate en Google cuando contratistas en tu área busquen tus servicios. SEO local que genera llamadas y solicitudes de cotización reales.',
    tags: ['SEO Local', 'Google Business', 'Páginas de Ubicación', 'SEO On-Page'],
    deliverables: [
      'Auditoría SEO local completa',
      'Optimización de Google Business Profile',
      'Páginas de ubicación y servicio',
      'Implementación SEO on-page',
      'Reporte mensual de posiciones',
    ],
  },
  {
    n: '02',
    title: 'Páginas Web para Contratistas',
    metric: 'GRATIS CON TU PLAN',
    desc: 'Sitios web rápidos y optimizados para conversión, diseñados específicamente para contratistas — para convertir visitas en llamadas y cotizaciones.',
    tags: ['Diseño Web', 'Optimizado para Móvil', 'Carga Rápida', 'Enfocado en Leads'],
    deliverables: [
      'Sitio web personalizado para contratistas',
      'Optimizado para móvil',
      'Velocidad y Core Web Vitals',
      'Formulario de contacto y reserva',
      'Configuración de Google Analytics',
    ],
  },
  {
    n: '03',
    title: 'Automatización de Marketing',
    metric: 'NUNCA PIERDAS UN LEAD',
    desc: 'Respuesta inmediata a leads, textos por llamada perdida, seguimientos automáticos y solicitudes de reseñas — corriendo 24/7.',
    tags: ['CRM', 'Texto por Llamada Perdida', 'Secuencias de Seguimiento', 'Automatización de Reseñas'],
    deliverables: [
      'Auditoría y configuración de CRM',
      'Texto automático por llamada perdida',
      '5 flujos de automatización principales',
      'Secuencias de solicitud de reseñas',
      'Revisión a los 30 días',
    ],
  },
  {
    n: '04',
    title: 'Generación de Leads',
    metric: 'MÁS LLAMADAS · MÁS TRABAJOS',
    desc: 'Google Ads, Meta Ads y sistemas SEO construidos para generar leads calificados para contratistas — cada peso rastreado, cada lead contado.',
    tags: ['Google Ads', 'Meta Ads', 'Rastreo de Leads', 'Optimización de Conversión'],
    deliverables: [
      'Llamada de discovery (20 min)',
      'Investigación de audiencia y competencia',
      'Arquitectura de campaña + copy',
      'Optimización semanal',
      'Reporte mensual en lenguaje claro',
    ],
  },
]

// ─── STEPS ───────────────────────────────────────────────────────────────────

const STEPS_EN: StepDef[] = [
  {
    n: '01',
    title: 'Diagnosis',
    desc: 'We audit your online presence, competitors, and identify exactly where you\'re losing leads right now.',
    t: '~20 min',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'We build a custom marketing plan around your trade, your market, and your growth targets.',
    t: '~2 days',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Your website, automations, and campaigns go live. Most contractors are running within 5 days.',
    t: '~5 days',
  },
  {
    n: '04',
    title: 'Grow',
    desc: 'Monthly reviews to cut what\'s not working and double down on what\'s bringing in jobs.',
    t: 'Monthly',
  },
]

const STEPS_ES: StepDef[] = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Auditamos tu presencia online, competidores e identificamos exactamente dónde estás perdiendo leads ahora mismo.',
    t: '~20 min',
  },
  {
    n: '02',
    title: 'Estrategia',
    desc: 'Construimos un plan de marketing personalizado alrededor de tu oficio, tu mercado y tus metas de crecimiento.',
    t: '~2 días',
  },
  {
    n: '03',
    title: 'Construir',
    desc: 'Tu sitio web, automatizaciones y campañas se activan. La mayoría de contratistas están corriendo en 5 días.',
    t: '~5 días',
  },
  {
    n: '04',
    title: 'Crecer',
    desc: 'Revisiones mensuales para cortar lo que no funciona y duplicar lo que está trayendo trabajos.',
    t: 'Mensual',
  },
]

// ─── NICHES ──────────────────────────────────────────────────────────────────

const NICHES_EN: NicheDef[] = [
  { code: 'hvac',             name: 'HVAC' },
  { code: 'plumbing',         name: 'Plumbers' },
  { code: 'electrical',       name: 'Electricians' },
  { code: 'roofing',          name: 'Roofers' },
  { code: 'remodeling',       name: 'Remodelers' },
  { code: 'painting',         name: 'Painters' },
  { code: 'flooring',         name: 'Flooring' },
  { code: 'landscaping',      name: 'Landscapers' },
  { code: 'general',          name: 'General Contractors' },
  { code: 'other',            name: 'Other Trades' },
]

const NICHES_ES: NicheDef[] = [
  { code: 'hvac',             name: 'HVAC' },
  { code: 'plomeria',         name: 'Plomeros' },
  { code: 'electricistas',    name: 'Electricistas' },
  { code: 'roofing',          name: 'Roofing' },
  { code: 'remodelacion',     name: 'Remodelación' },
  { code: 'pintura',          name: 'Pintura' },
  { code: 'pisos',            name: 'Pisos' },
  { code: 'jardineria',       name: 'Jardinería' },
  { code: 'contratista',      name: 'Contratista General' },
  { code: 'otro',             name: 'Otro Oficio' },
]

// ─── FREE WEBSITE ITEMS ──────────────────────────────────────────────────────

const FREE_ITEMS_EN = [
  'Custom contractor website',
  'Mobile optimized',
  'Speed & Core Web Vitals',
  'On-page SEO foundation',
  'Contact / booking form',
  'Google Analytics setup',
]

const FREE_ITEMS_ES = [
  'Sitio web personalizado para contratistas',
  'Optimizado para celular',
  'Velocidad y Core Web Vitals',
  'Base de SEO on-page',
  'Formulario de contacto / reserva',
  'Configuración de Google Analytics',
]

// ─── MAIN CONTENT EXPORT ─────────────────────────────────────────────────────

export const CECA_CONTENT: Record<string, SiteContent> = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav_cta: 'Get My Free Diagnosis',
    online: 'ONLINE',
    badge: 'Digital Marketing Agency for Contractors',

h1_lines: ['Digital Marketing for Contractors', 'That Actually Brings', 'In Jobs.'],
h1_stress_word: 'Brings',
subtitle: 'You do the work. We make sure the phone rings. CECA Marketing is a bilingual digital marketing agency built specifically for contractors — no generic playbooks, no wasted ad spend.',
cta1: 'Get a Free Marketing Audit',
cta2: 'See How It Works',
   ticker: [
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Remodeling',
  'Painting',
  'Flooring',
  'Landscaping',
  'General Contracting',
  'Concrete',
  'Fencing',
  'Pressure Washing',
],

    // ── Stats ────────────────────────────────────────────────────────────────
    stat1_label: 'Average contractor launch',
    stat2_label: 'Satisfaction guarantee',
    stat3_label: 'Average ROAS',
    stat4_label: 'Contractors grown',

    // ── Value Strip ──────────────────────────────────────────────────────────
    value_tag1: 'CONTRACTOR SEO',
    value_title1: 'Rank when customers search',
    value_body1:
      'We build location pages, optimize your Google Business Profile, and implement on-page SEO so contractors in your area find you first.',

    value_tag2: 'LEAD GENERATION',
    value_title2: 'More calls, more estimate requests',
    value_body2:
      'Google Ads and Meta campaigns built specifically for contractors — every dollar tracked, every lead counted, every campaign optimized around your cost-per-job.',

    value_tag3: 'MARKETING AUTOMATION',
    value_title3: 'Never lose a job to slow response',
    value_body3:
      'Missed-call texts, instant lead follow-up, review requests, and appointment reminders — automated so you close more jobs without extra work.',

    // ── Services ─────────────────────────────────────────────────────────────
    services_label: 'Marketing Services for Contractors',
services_title: ['Marketing Services Built', 'for Contractors.'],
services_sub: 'Whatever stage your business is at, we have a service built to move it forward — no generic playbooks, no wasted ad spend.',
    services: SERVICES_EN,

    // ── How It Works ─────────────────────────────────────────────────────────
   how_label: 'How it works',
how_title: ['From Free Audit', 'to Live System — Fast.'],
how_sub: 'No pressure, no jargon — just a straight conversation about what\'s working, what isn\'t, and what to do next.',
steps: STEPS_EN,

    // ── Niches ───────────────────────────────────────────────────────────────
    niches_label: 'Who We Help',
    niches_title: ['Contractors We Help', 'Grow Their Business.'],
    niches_sub:
      'If you\'re a contractor who needs more leads and more booked jobs — we\'re built for you.',
    niches: NICHES_EN,

    // ── Free Website ─────────────────────────────────────────────────────────
    free_label: 'Free Website',
    free_title: ['Every Contractor', 'Gets a Free Custom Website.'],
    free_sub:
      'Fast, conversion-optimized, and built to rank — included free with any marketing plan. No templates. No drag-and-drop. Real code, real speed, built for contractors.',
    free_cta: 'Claim Your Free Contractor Website →',
    free_note:
      '* Free one-page website (5 sections + contact form + social & WhatsApp integration) included with any monthly marketing plan. Restrictions apply. No contracts.',
    free_box_title: 'deploy log',
    free_items: FREE_ITEMS_EN,

    // ── Form ─────────────────────────────────────────────────────────────────
    form_label: 'Free Diagnosis',
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
    form_challenge_ph: 'Tell us what\'s not working — leads, response time, website...',
    form_cta: 'Get Your Free Marketing Audit →',
    form_note: 'No pressure, no jargon — just a straight conversation about what\'s working, what isn\'t, and what to do next.',

    // ── Footer ───────────────────────────────────────────────────────────────
    footer_tagline: 'A bilingual contractor marketing agency. No generic playbooks. No wasted ad spend.',
    footer_rights: 'All rights reserved.',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
  },

  // ── SPANISH ────────────────────────────────────────────────────────────────
  es: {
    nav_cta: 'Diagnóstico Gratis',
    online: 'EN LÍNEA',
    badge: 'Agencia de Marketing Digital para Contratistas · Houston, TX',

    h1_lines: ['Marketing para Contratistas', 'Que Te Consigue Más', 'Clientes y Más Trabajo.'],
    h1_stress_word: 'Más',
    subtitle:
  'CECA es una agencia de marketing digital para contratistas. Ayudamos a contratistas generales, roofers, HVAC, plomería, electricidad y empresas de remodelación a generar más leads, responder más rápido y cerrar más trabajos — con páginas web, SEO, automatización y sistemas de generación de leads.',
    cta1: 'Diagnóstico Gratis',
    cta2: 'Ver Cómo Funciona',
    ticker: [
      'Marketing para Contratistas',
      'SEO para Contratistas',
      'Páginas Web para Contratistas',
      'Automatización de Marketing',
      'Generación de Leads',
      'Google Ads para Contratistas',
      'Meta Ads para Contratistas',
      'SEO Local',
      'Marketing para HVAC',
      'Marketing para Roofing',
      'Marketing para Plomeros',
      'Marketing para Electricistas',
    ],

    stat1_label: 'Lanzamiento promedio',
    stat2_label: 'Garantía de satisfacción',
    stat3_label: 'ROAS promedio',
    stat4_label: 'Contratistas crecidos',

    value_tag1: 'SEO PARA CONTRATISTAS',
    value_title1: 'Posiciónate cuando busquen tus servicios',
    value_body1:
      'Creamos páginas de ubicación, optimizamos tu Google Business Profile e implementamos SEO on-page para que los contratistas en tu área te encuentren primero.',

    value_tag2: 'GENERACIÓN DE LEADS',
    value_title2: 'Más llamadas, más cotizaciones',
    value_body2:
      'Campañas de Google Ads y Meta construidas específicamente para contratistas — cada peso rastreado, cada lead contado, cada campaña optimizada alrededor de tu costo por trabajo.',

    value_tag3: 'AUTOMATIZACIÓN',
    value_title3: 'Nunca pierdas un trabajo por responder tarde',
    value_body3:
      'Textos por llamada perdida, seguimiento inmediato de leads, solicitudes de reseñas y recordatorios de citas — automatizados para que cierres más trabajos sin esfuerzo extra.',

    services_label: 'Lo que hacemos',
    services_title: ['Sistemas de Marketing', 'para Contratistas.'],
    services_sub:
      'Cada servicio está construido alrededor de un objetivo: más leads, más trabajos cerrados y más ingresos para tu negocio.',
    services: SERVICES_ES,

    how_label: 'Cómo funciona',
    how_title: ['Del Diagnóstico Gratis', 'al Sistema en Vivo — Rápido.'],
    how_sub: 'La mayoría de contratistas está generando leads en 5 días.',
    steps: STEPS_ES,

    niches_label: 'A Quién Ayudamos',
    niches_title: ['Contratistas a los que Ayudamos', 'a Crecer Su Negocio.'],
    niches_sub:
      'Si eres contratista y necesitas más leads y más trabajos cerrados — somos tu agencia.',
    niches: NICHES_ES,

    free_label: 'Sitio Web Gratis',
    free_title: ['Cada Contratista Recibe', 'un Sitio Web Gratis.'],
    free_sub:
      'Rápido, optimizado para conversión y construido para posicionar — incluido gratis con cualquier plan de marketing. Sin plantillas. Código real, velocidad real, hecho para contratistas.',
    free_cta: 'Reclamar Mi Sitio Web Gratis →',
    free_note:
      '* Sitio web de una página gratis (5 secciones + formulario de contacto + integración con redes sociales y WhatsApp) incluido con cualquier plan mensual. Aplican restricciones. Sin contratos.',
    free_box_title: 'log de deploy',
    free_items: FREE_ITEMS_ES,

    form_label: 'Diagnóstico Gratis',
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
    form_cta: 'Obtener Mi Diagnóstico Gratis →',
    form_note: 'Sin contratos. Sin presión. Solo una respuesta directa sobre qué está frenando tu negocio.',

    footer_tagline: 'Agencia de marketing para contratistas, construida para el oficio.',
    footer_rights: 'Todos los derechos reservados.',
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Contacto',
  },
}