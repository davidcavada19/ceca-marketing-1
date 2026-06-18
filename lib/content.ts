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

const SERVICES_EN: ServiceDef[] = [
  {
    n: '01', title: 'Websites', metric: 'FREE WITH YOUR PLAN',
    desc: 'Fast, conversion-optimized sites that rank and convert — included free with any marketing plan.',
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
    desc: 'Rank for the searches that matter in your market — maps, organic, and voice.',
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
    desc: 'Posiciónate en las búsquedas que importan en tu mercado — mapas, orgánico y voz.',
    tags: ['Google Business', 'SEO On-page', 'Directorios', 'Estrategia de reseñas'],
    deliverables: ['Auditoría local completa', 'Optimización GMB', 'Directorios online', 'Calendario de contenido', 'Reporte mensual de posiciones'],
  },
]

const STEPS_EN: StepDef[] = [
  { n: '01', title: 'Audit', desc: 'We analyze your digital presence, competitors, and quick-win opportunities.', t: '~20 min' },
  { n: '02', title: 'Build', desc: 'Your site, ads, and automations go live — fast. Most clients are running within 5 days.', t: '~5 days' },
  { n: '03', title: 'Launch', desc: 'Campaigns switch on. We monitor daily to catch everything early.', t: 'Day 1' },
  { n: '04', title: 'Grow', desc: 'Monthly reviews to cut what loses and double what wins.', t: 'Monthly' },
]

const STEPS_ES: StepDef[] = [
  { n: '01', title: 'Auditoría', desc: 'Analizamos tu presencia digital, competidores y oportunidades de victoria rápida.', t: '~20 min' },
  { n: '02', title: 'Construir', desc: 'Tu sitio, anuncios y automatizaciones en vivo — rápido. La mayoría en 5 días.', t: '~5 días' },
  { n: '03', title: 'Lanzar', desc: 'Las campañas se activan. Monitoreamos diariamente desde el día 1.', t: 'Día 1' },
  { n: '04', title: 'Crecer', desc: 'Revisiones mensuales para cortar lo que pierde y duplicar lo que gana.', t: 'Mensual' },
]

const NICHES_EN: NicheDef[] = [
  { code: 'hvac',            name: 'HVAC' },
  { code: 'plumbing',        name: 'Plumbers' },
  { code: 'electrical',      name: 'Electricians' },
  { code: 'roofing',         name: 'Roofers' },
  { code: 'dental',          name: 'Dentists' },
  { code: 'medspa',          name: 'Med Spas' },
  { code: 'plastic-surgery', name: 'Plastic Surgeons' },
  { code: 'remodeling',      name: 'Remodelers' },
  { code: 'flooring',        name: 'Flooring' },
  { code: 'painting',        name: 'Painters' },
  { code: 'other',           name: 'Other' },
]

const NICHES_ES: NicheDef[] = [
  { code: 'hvac',            name: 'HVAC' },
  { code: 'plomeria',        name: 'Plomeros' },
  { code: 'electricistas',   name: 'Electricistas' },
  { code: 'roofing',         name: 'Roofing' },
  { code: 'dental',          name: 'Dentistas' },
  { code: 'medspa',          name: 'Med Spas' },
  { code: 'cirugia-plastica',name: 'Cirugía Plástica' },
  { code: 'remodelacion',    name: 'Remodelación' },
  { code: 'pisos',           name: 'Pisos' },
  { code: 'pintura',         name: 'Pintura' },
  { code: 'otro',            name: 'Otro' },
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
    nav_cta: 'Get a Free Audit',
    online: 'ONLINE',
    badge: 'Digital Marketing Agency · Built for Growth',
    h1_lines: ['The Digital Marketing', 'Agency Built for', 'Small Business.'],
    h1_stress_word: 'Small',
    subtitle: 'Paid ads, local SEO, automations, and websites that convert — for service businesses ready to scale.',
    cta1: 'Get a Free Audit',
    cta2: 'See Our Work',
    ticker: ['Digital Marketing', 'Local SEO', 'Paid Ads', 'Web Design', 'Marketing Automation', 'Lead Generation', 'Google Ads', 'Meta Ads', 'Contractor Marketing', 'Small Business Growth', 'SEO Services', 'Revenue Marketing'],
    stat1_label: 'Average client launch',
    stat2_label: 'Satisfaction guarantee',
    stat3_label: 'Average ROAS',
    stat4_label: 'Small businesses grown',
    value_tag1: 'FAST LAUNCH',
    value_title1: 'Live in 5 business days',
    value_body1: 'From signed agreement to a live, SEO-ready website — no waiting months, no back-and-forth.',
    value_tag2: 'PAID ADS · LOCAL SEO',
    value_title2: 'Ads that pay for themselves',
    value_body2: 'Google Ads and Meta campaigns built for service businesses — every dollar tracked, every lead counted.',
    value_tag3: 'AUTOMATIONS',
    value_title3: 'Systems that run while you work',
    value_body3: 'Follow-ups, review requests, and booking reminders — automated so you close more jobs without extra work.',
    services_label: 'What we do',
    services_title: ['Full-Service Digital Marketing', 'for Local Businesses.'],
    services_sub: 'Every service is built around one goal: more revenue for your business.',
    services: SERVICES_EN,
    how_label: 'How it works',
    how_title: ['From First Call to', 'Live Campaigns — Fast.'],
    how_sub: 'Most clients are live within 5 days.',
    steps: STEPS_EN,
    niches_label: 'Who We Serve',
    niches_title: ['We Work With Local', 'Service Businesses.'],
    niches_sub: 'If your business sells a service and needs more customers — we\'re built for you.',
    niches: NICHES_EN,
    free_label: 'Free Website',
    free_title: ['Every Client Gets a', 'Free Custom Website.'],
    free_sub: 'Fast, conversion-optimized, and built to rank — included free with any digital marketing plan. No templates. No drag-and-drop. Real code, real speed.',
    free_cta: 'Claim Your Free Website →',
    free_note: '* Free one-page website (5 sections + contact form + social & WhatsApp integration) included with any monthly marketing plan. Restrictions apply. No contracts.',
    free_box_title: 'deploy log',
    free_items: FREE_ITEMS_EN,
    form_label: 'Contact',
    form_title: ['Ready to Grow Your', 'Service Business?'],
    form_name: 'Full name',
    form_name_ph: 'Jane Smith',
    form_phone: 'Phone',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Business name',
    form_biz_ph: 'Smith HVAC LLC',
    form_type: 'Business type',
    form_type_ph: 'Select your industry',
    form_challenge: 'Biggest challenge',
    form_challenge_ph: 'Tell us what\'s not working…',
    form_cta: 'Get a Free Audit →',
    form_note: 'No contracts. No pressure. Just results.',
    footer_tagline: 'Digital marketing agency built for growth.',
    footer_rights: 'All rights reserved.',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
  },
  es: {
    nav_cta: 'Auditoría Gratis',
    online: 'EN LÍNEA',
    badge: 'Agencia de Marketing Digital · Resultados Reales',
    h1_lines: ['La Agencia de Marketing', 'Digital Que Hace', 'Crecer Tu Negocio.'],
    h1_stress_word: 'Crecer',
    subtitle: 'Anuncios pagados, SEO local, automatizaciones y sitios web que convierten — para negocios de servicio listos para crecer.',
    cta1: 'Auditoría Gratis',
    cta2: 'Ver Nuestro Trabajo',
    ticker: ['Marketing Digital', 'SEO Local', 'Anuncios Pagados', 'Diseño Web', 'Automatización', 'Generación de Leads', 'Google Ads', 'Meta Ads', 'Marketing para Contratistas', 'Crecer Mi Negocio', 'SEO para Negocios', 'Marketing de Resultados'],
    stat1_label: 'Lanzamiento promedio',
    stat2_label: 'Garantía de satisfacción',
    stat3_label: 'ROAS promedio',
    stat4_label: 'Negocios locales crecidos',
    value_tag1: 'LANZAMIENTO RÁPIDO',
    value_title1: 'En vivo en 5 días hábiles',
    value_body1: 'Desde el acuerdo firmado hasta un sitio web en vivo y listo para SEO — sin meses de espera ni idas y venidas.',
    value_tag2: 'ANUNCIOS · SEO LOCAL',
    value_title2: 'Anuncios que se pagan solos',
    value_body2: 'Campañas de Google Ads y Meta construidas para negocios de servicio — cada peso rastreado, cada lead contado.',
    value_tag3: 'AUTOMATIZACIONES',
    value_title3: 'Sistemas que trabajan mientras tú trabajas',
    value_body3: 'Seguimientos, solicitudes de reseñas y recordatorios de citas — automatizados para que cierres más trabajos sin esfuerzo extra.',
    services_label: 'Lo que hacemos',
    services_title: ['Marketing Digital Completo', 'para Negocios Locales.'],
    services_sub: 'Cada servicio está construido alrededor de un objetivo: más ingresos para tu negocio.',
    services: SERVICES_ES,
    how_label: 'Cómo funciona',
    how_title: ['De la Primera Llamada a', 'Campañas en Vivo — Rápido.'],
    how_sub: 'La mayoría de clientes están en vivo en 5 días.',
    steps: STEPS_ES,
    niches_label: 'A Quién Servimos',
    niches_title: ['Trabajamos con Negocios', 'de Servicio Local.'],
    niches_sub: 'Si tu negocio vende un servicio y necesitas más clientes — somos tu agencia.',
    niches: NICHES_ES,
    free_label: 'Sitio Web Gratis',
    free_title: ['Cada Cliente Recibe un', 'Sitio Web Gratis.'],
    free_sub: 'Rápido, optimizado para conversión y construido para posicionar — incluido gratis con cualquier plan de marketing digital. Sin plantillas. Código real, velocidad real.',
    free_cta: 'Reclamar Sitio Web Gratis →',
    free_note: '* Sitio web de una página gratis (5 secciones + formulario de contacto + integración con redes sociales y WhatsApp) incluido con cualquier plan mensual. Aplican restricciones. Sin contratos.',
    free_box_title: 'log de deploy',
    free_items: FREE_ITEMS_ES,
    form_label: 'Contacto',
    form_title: ['¿Listo para Hacer Crecer', 'Tu Negocio?'],
    form_name: 'Nombre completo',
    form_name_ph: 'Juan Pérez',
    form_phone: 'Teléfono',
    form_phone_ph: '(713) 000-0000',
    form_biz: 'Nombre del negocio',
    form_biz_ph: 'Pérez HVAC LLC',
    form_type: 'Tipo de negocio',
    form_type_ph: 'Selecciona tu industria',
    form_challenge: 'Mayor desafío',
    form_challenge_ph: 'Cuéntanos qué no está funcionando…',
    form_cta: 'Auditoría Gratis →',
    form_note: 'Sin contratos. Sin presión. Solo resultados.',
    footer_tagline: 'Agencia de marketing digital construida para crecer.',
    footer_rights: 'Todos los derechos reservados.',
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Contacto',
  },
}