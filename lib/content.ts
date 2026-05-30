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
  // Stats
  stat1_label: string
  stat2_label: string
  stat3_label: string
  stat4_label: string
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
}

const SERVICES_EN: ServiceDef[] = [
  {
    n: '01', title: 'Websites', metric: 'FREE WITH YOUR PLAN',
    desc: 'Fast, conversion-optimised sites that rank and convert — included free with any marketing plan.',
    tags: ['Design', 'Dev', 'Speed', 'More Clients'],
    deliverables: ['Strategy session', 'Custom single-page site (5 sections)', 'Mobile optimized', 'Speed optimisation', 'Analytics & Search Console'],
  },
  {
    n: '02', title: 'Automations', metric: 'SAVES 12h/WK',
    desc: 'Follow-up sequences, missed-call texts, review requests — running 24/7 without lifting a finger.',
    tags: ['CRM setup', 'SMS/Email flows', 'Review automation', 'Lead routing'],
    deliverables: ['CRM audit & setup', 'Custom automation map', '5 core workflows built', 'Team walkthrough', '30-day check-in'],
  },
  {
    n: '03', title: 'Paid Ads', metric: 'AVG 4.2× ROAS',
    desc: 'Google, Meta & YouTube campaigns built around your cost-per-lead target, not vanity metrics.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    deliverables: ['Discovery call (20 min)', 'Audience & competitor research', 'Campaign architecture + copy', 'Weekly optimisation', 'Plain-english monthly report'],
  },
  {
    n: '04', title: 'Local SEO', metric: 'TOP-3 GMB',
    desc: 'Rank for the searches that matter in your city — maps, organic, and voice.',
    tags: ['Google Business', 'On-page SEO', 'Directories', 'Review strategy'],
    deliverables: ['Full local audit', 'GMB optimisation', 'Online directories', 'Content calendar', 'Monthly ranking report'],
  },
]

const SERVICES_ES: ServiceDef[] = [
  {
    n: '01', title: 'Sitios Web', metric: 'GRATIS CON TU PLAN',
    desc: 'Sitios rápidos y optimizados para conversión que posicionan y convierten — incluido gratis con cualquier plan.',
    tags: ['Diseño', 'Desarrollo', 'Velocidad', 'Más Clientes'],
    deliverables: ['Sesión de estrategia', 'Sitio de una página con 5 secciones', 'Optimizado para celular', 'Optimización de velocidad', 'Analytics & Search Console'],
  },
  {
    n: '02', title: 'Automatizaciones', metric: 'AHORRA 12h/SEM',
    desc: 'Seguimientos, textos por llamada perdida, solicitudes de reseñas — funcionando 24/7 sin mover un dedo.',
    tags: ['CRM', 'Flujos SMS/Email', 'Automatización de reseñas', 'Enrutamiento de leads'],
    deliverables: ['Auditoría y configuración de CRM', 'Mapa de automatización personalizado', '5 flujos principales construidos', 'Capacitación del equipo', 'Revisión a los 30 días'],
  },
  {
    n: '03', title: 'Anuncios Pagados', metric: 'PROMEDIO 4.2× ROAS',
    desc: 'Campañas en Google, Meta y YouTube construidas alrededor de tu costo por lead, no métricas de vanidad.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    deliverables: ['Llamada de discovery (20 min)', 'Investigación de audiencia y competencia', 'Arquitectura de campaña + copy', 'Optimización semanal', 'Reporte mensual en lenguaje claro'],
  },
  {
    n: '04', title: 'SEO Local', metric: 'TOP-3 GMB',
    desc: 'Posiciónate en las búsquedas que importan en tu ciudad — mapas, orgánico y voz.',
    tags: ['Google Business', 'SEO On-page', 'Directorios', 'Estrategia de reseñas'],
    deliverables: ['Auditoría local completa', 'Optimización GMB', 'Directorios online', 'Calendario de contenido', 'Reporte mensual de posiciones'],
  },
  
  
]

const STEPS_EN: StepDef[] = [
  { n: '01', title: 'Audit', desc: 'We analyse your current digital footprint, competitors, and quick-win opportunities.', t: '~20 min' },
  { n: '02', title: 'Build', desc: 'Ads, automations, and your site go live — fast. Most clients are running within 5 days.', t: '~5 days' },
  { n: '03', title: 'Launch', desc: 'Campaigns switch on. We monitor daily to catch anything early.', t: 'Day 1' },
  { n: '04', title: 'Optimise', desc: 'Monthly data reviews to cut what\'s losing and double what\'s winning.', t: 'Monthly' },
]

const STEPS_ES: StepDef[] = [
  { n: '01', title: 'Auditoría', desc: 'Analizamos tu presencia digital, competidores y oportunidades de victoria rápida.', t: '~20 min' },
  { n: '02', title: 'Construir', desc: 'Anuncios, automatizaciones y tu sitio en vivo — rápido. La mayoría en 5 días.', t: '~5 días' },
  { n: '03', title: 'Lanzar', desc: 'Las campañas se activan. Monitoreamos diariamente para detectar todo a tiempo.', t: 'Día 1' },
  { n: '04', title: 'Optimizar', desc: 'Revisiones mensuales de datos para cortar lo que pierde y duplicar lo que gana.', t: 'Mensual' },
]

const NICHES: NicheDef[] = [
  { code: 'hvac',      name: 'HVAC' },
  { code: 'plumbing',  name: 'Plumbing' },
  { code: 'dental',    name: 'Dental' },
  { code: 'roofing',   name: 'Roofing' },
  { code: 'legal',     name: 'Legal' },
  { code: 'realty',    name: 'Real Estate' },
  { code: 'med-spa',   name: 'Med Spa' },
  { code: 'auto',      name: 'Auto' },
  { code: 'pest',      name: 'Pest Control' },
  { code: 'electric',  name: 'Electrical' },
  { code: 'chiro',     name: 'Chiropractic' },
  { code: 'other',     name: 'Other' },
]

const FREE_ITEMS_EN = [
  'Custom one-page website',
  'Mobile optimized',
  'Speed & Core Web Vitals',
  'On-page SEO foundation',
  'Contact / booking form',
  'Google Analytics setup',
]
const FREE_ITEMS_ES = [
  'Sitio web personalizado de una página',
  'Optimizado para celular',
  'Velocidad y Core Web Vitals',
  'Base de SEO on-page',
  'Formulario de contacto / reserva',
  'Configuración de Google Analytics',
]

export const CECA_CONTENT: Record<string, SiteContent> = {
  en: {
    nav_cta: 'Get a free audit',
    online: 'ONLINE',
    badge: 'Houston-based · Revenue-focused',
    h1_lines: ['We grow', 'Houston', 'businesses.'],
    h1_stress_word: 'Houston',
    subtitle: 'Paid ads, local SEO, automations, and websites that actually convert — for local businesses that are done playing small.',
    cta1: 'Get a free audit',
    cta2: 'See our work',
    ticker: ['Paid Ads', 'Local SEO', 'Automations', 'Web Design', 'CRM Setup', 'Review Growth', 'Google Ads', 'Meta Ads', 'Lead Gen'],
    stat1_label: 'Client launch time',
    stat2_label: 'Setup cost',
    stat3_label: 'US-based team',
    stat4_label: 'Active campaigns',
    services_label: 'What we do',
    services_title: ['Digital Marketing Services', 'in Houston, TX.'],
    services_sub: 'Every service is designed to work alone or stack together for compounding results.',
    services: SERVICES_EN,
    how_label: 'How it works',
    how_title: ['How Our Houston Marketing', 'Agency Works.'],
    how_sub: 'From first call to live campaigns — faster than you think.',
    steps: STEPS_EN,
    niches_label: 'Who we serve',
    niches_title: ['Houston Local Service', 'Businesses', 'We Work With.'],
    niches_sub: 'We know your industry. Select your niche to get a pre-filled discovery call.',
    niches: NICHES,
    free_label: 'Free website',
    free_title: ['Free Website Design', 'for Houston Businesses.'],
    free_sub: 'Every client gets a fast, custom, conversion-optimised website — included free with any marketing plan. No templates. No drag-and-drop. Real code, real speed.',
    free_cta: 'Claim your free site',
    free_note: '* Free with any monthly marketing plan. No contracts.',
    free_box_title: 'deploy log',
    free_items: FREE_ITEMS_EN,
    form_label: 'Contact',
    form_title: ['Get a Free Marketing', 'Audit in Houston.'],
    form_name: 'Full name',
    form_name_ph: 'Jane Smith',
    form_phone: 'Phone',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Business name',
    form_biz_ph: 'Smith HVAC LLC',
    form_type: 'Business type',
    form_type_ph: 'Select your niche',
    form_challenge: 'Biggest challenge',
    form_challenge_ph: 'Tell us what\'s not working…',
    form_cta: 'Send — we respond in <24h',
    form_note: 'No spam. No pressure. Just a conversation.',
    footer_tagline: 'Revenue-focused digital marketing.',
    footer_rights: 'All rights reserved.',
  },
  es: {
    nav_cta: 'Auditoría gratis',
    online: 'EN LÍNEA',
    badge: 'Houston · Enfocados en resultados',
    h1_lines: ['Hacemos crecer', 'negocios en', 'Houston.'],
    h1_stress_word: 'Houston',
    subtitle: 'Anuncios pagados, SEO local, automatizaciones y sitios web que convierten — para negocios locales que ya no quieren jugar pequeño.',
    cta1: 'Auditoría gratis',
    cta2: 'Ver nuestro trabajo',
    ticker: ['Anuncios Pagados', 'SEO Local', 'Automatizaciones', 'Diseño Web', 'CRM', 'Reseñas', 'Google Ads', 'Meta Ads', 'Generación de Leads'],
    stat1_label: 'Tiempo de lanzamiento',
    stat2_label: 'Costo de inicio',
    stat3_label: 'Equipo en EE.UU.',
    stat4_label: 'Campañas activas',
    services_label: 'Lo que hacemos',
    services_title: ['Servicios de Marketing Digital', 'en Houston, TX.'],
    services_sub: 'Cada servicio está diseñado para funcionar solo o combinarse para resultados multiplicados.',
    services: SERVICES_ES,
    how_label: 'Cómo funciona',
    how_title: ['Cómo trabaja nuestra', 'agencia en Houston.'],
    how_sub: 'Desde la primera llamada hasta campañas en vivo — más rápido de lo que piensas.',
    steps: STEPS_ES,
    niches_label: 'A quién servimos',
    niches_title: ['Negocios de servicio', 'local en Houston', 'que atendemos.'],
    niches_sub: 'Conocemos tu industria. Selecciona tu nicho para una llamada de discovery pre-completada.',
    niches: NICHES,
    free_label: 'Sitio web gratis',
    free_title: ['Diseño Web Gratis', 'para negocios en Houston.'],
    free_sub: 'Cada cliente recibe un sitio web rápido, personalizado y optimizado para conversión — incluido gratis con cualquier plan de marketing.',
    free_cta: 'Reclamar sitio gratis',
    free_note: '* Gratis con cualquier plan mensual de marketing. Sin contratos.',
    free_box_title: 'log de deploy',
    free_items: FREE_ITEMS_ES,
    form_label: 'Contacto',
    form_title: ['Auditoría de Marketing', 'Gratis en Houston.'],
    form_name: 'Nombre completo',
    form_name_ph: 'Juan Pérez',
    form_phone: 'Teléfono',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Nombre del negocio',
    form_biz_ph: 'Pérez HVAC LLC',
    form_type: 'Tipo de negocio',
    form_type_ph: 'Selecciona tu nicho',
    form_challenge: 'Mayor desafío',
    form_challenge_ph: 'Cuéntanos qué no está funcionando…',
    form_cta: 'Enviar — respondemos en <24h',
    form_note: 'Sin spam. Sin presión. Solo una conversación.',
    footer_tagline: 'Marketing digital enfocado en ingresos.',
    footer_rights: 'Todos los derechos reservados.',
  },
}
