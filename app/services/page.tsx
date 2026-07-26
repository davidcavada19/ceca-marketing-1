import Image from 'next/image'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Marketing Services for Contractors | CECA Marketing',
  description:
    'Marketing services for contractors — SEO, contractor websites, marketing automation, and lead generation. Everything a home service business needs to generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/services',
    languages: {
      en: 'https://cecamarketing.com/services',
      es: 'https://cecamarketing.com/es/services',
      'x-default': 'https://cecamarketing.com/services',
    },
  },
}

const services = [
  {
    n: '01',
    metric: 'RANK HIGHER · GET MORE LEADS',
    title: 'Local SEO for Contractors That Gets You Found on Google.',
    intro: 'When a homeowner searches "HVAC contractor near me" or "roofing company Houston" — are you showing up? Contractor SEO makes sure you do. We build location pages, optimize your Google Business Profile, and implement on-page SEO so your business ranks higher in local search results and generates more calls and estimate requests — without paying for every click. Local SEO is a long-term investment that compounds over time: the longer you do it, the harder it becomes for competitors to outrank you.',
    why: 'Over 80% of local searches result in a call or purchase within 24 hours. Contractor SEO puts your business in front of customers who are already looking for exactly what you offer.',
    note: '* Local SEO results typically take 60–90 days to show meaningful movement.',
    image: '/images/services/service-01-seo.webp',
    imageAlt: 'Local SEO for contractors — Google Maps top ranking illustration with 5-star reviews',
    deliverables: [
      { title: 'Full Local SEO Audit', desc: 'We audit your current local search presence — Google Business Profile, citations, on-page SEO, and competitor gap analysis.' },
      { title: 'Google Business Profile Optimization', desc: 'We fully optimize your GMB listing — categories, photos, posts, Q&A, and service areas — to rank in the local map pack.' },
      { title: 'Location & Service Pages', desc: 'We build optimized pages targeting your specific trade and service areas so you rank for the searches that matter.' },
      { title: 'On-Page Local SEO', desc: 'We optimize your website pages for local keywords — city pages, service pages, and schema markup.' },
      { title: 'Online Directory Citations', desc: 'We build and clean up your business listings across 50+ directories — Yelp, BBB, Angi, and more.' },
      { title: 'Review Strategy', desc: 'We build a system to consistently generate 5-star reviews — the #1 ranking factor in local search.' },
      { title: 'Monthly Ranking Report', desc: 'You see exactly where you rank for your target keywords every month — and the trend over time.' },
    ],
  },
  {
    n: '02',
    metric: 'FREE WITH YOUR PLAN',
    title: 'Contractor Websites Built to Generate Calls and Estimate Requests.',
    intro: 'Your website is your #1 sales tool — and most contractor websites are losing customers before they even read a word. Our contractor website design is built fast and custom, made specifically for contractors.',
    why: 'A professional contractor website builds trust before the first phone call. Customers Google you before they call — make sure what they find converts them into a lead.',
    note: '* Free with any monthly marketing plan. Restrictions apply. One-page site, 5 sections.',
    image: '/images/services/service-02-websites.webp',
    imageAlt: 'Contractor website design on laptop and phone with page speed and traffic growth metrics',
    deliverables: [
      { title: 'Strategy Session', desc: 'We learn your business, your market, and your ideal customer before writing a single line of code.' },
      { title: 'Custom Contractor Website (5 sections)', desc: 'Home, Services, About, Reviews, Contact. Everything a customer needs to say yes.' },
      { title: 'Mobile Optimized', desc: 'Over 70% of your customers will find you on their phone. Your site works perfectly on every device.' },
      { title: 'Speed & Core Web Vitals', desc: 'A slow website loses customers and ranks lower on Google. We build fast — always.' },
      { title: 'On-Page SEO Foundation', desc: 'Your site is built to be found. Keywords, meta tags, schema markup — all included from day one.' },
      { title: 'Contact Form + WhatsApp Integration', desc: 'Make it easy for customers to reach you however they prefer — form, phone, or WhatsApp.' },
      { title: 'Google Analytics Setup', desc: 'Know exactly how many people visit your site, where they come from, and what they do.' },
    ],
  },
  {
    n: '03',
    metric: 'NEVER MISS A LEAD',
    title: 'Marketing Automation for Contractors That Works While You Work.',
    intro: 'Most contractors lose leads not because they do not get them — but because they do not follow up fast enough. Marketing automation for contractors fixes that. We build automated systems that follow up with every lead instantly, send missed-call texts, request reviews from happy customers, and route leads to the right person — all running 24/7 without you lifting a finger.',
    why: 'Speed to lead is the #1 factor in closing a job. Contractors who respond within 5 minutes are 9x more likely to close than those who wait 30 minutes.',
    note: '* Setup fee applies. Monthly maintenance included in plan.',
    image: '/images/services/service-03-automation.webp',
    imageAlt: 'Marketing automation for contractors — connected email, calls, calendar and chat workflow hub',
    deliverables: [
      { title: 'CRM Audit & Setup', desc: 'We audit your current process and set up a CRM system that fits how your business actually works.' },
      { title: 'Missed-Call Text Back', desc: 'Every missed call automatically gets a text — so you never lose a lead to voicemail again.' },
      { title: '5 Core Automation Workflows', desc: 'Lead follow-up sequence, booking confirmation, review request, re-engagement flow, and appointment reminder.' },
      { title: 'SMS & Email Automation', desc: 'Automated SMS and email sequences that go out instantly when a lead comes in.' },
      { title: 'Review Automation', desc: 'Automatically ask happy customers for Google reviews — the #1 driver of local SEO rankings.' },
      { title: 'Team Walkthrough', desc: 'We train your team on how to use the system so nothing falls through the cracks.' },
      { title: '30-Day Check-In', desc: 'We review the automations after 30 days and optimize based on real data.' },
    ],
  },
  {
    n: '04',
    metric: 'MORE CALLS · MORE JOBS',
    title: 'Lead Generation for Contractors — More Calls, More Estimate Requests.',
    intro: 'Paid ads are the fastest way to get new contractor leads — but only when managed correctly. Our lead generation system for contractors combines Google Ads, Meta Ads, and conversion optimization to generate a consistent flow of qualified leads for your business. Every campaign is built around one number: your cost per lead. Not impressions, not clicks, not reach — qualified leads that turn into booked jobs.',
    why: 'Google Ads for contractors delivers leads with purchase intent — people who are actively searching for your service right now, not just scrolling a feed.',
    note: '* Minimum ad spend required. Management fee separate from ad spend.',
    image: '/images/services/service-04-leadgen.webp',
    imageAlt: 'Lead generation for contractors — HVAC repair lead notification with cost per lead and booked jobs metrics',
    deliverables: [
      { title: 'Discovery Call (20 min)', desc: 'We learn your goals, your market, your budget, and what a good lead looks like for your business.' },
      { title: 'Audience & Competitor Research', desc: 'We analyze who your best customers are and what your competitors are doing — then we do it better.' },
      { title: 'Campaign Architecture + Copy', desc: 'We build the full campaign structure — ad groups, keywords, ad copy, landing pages — from scratch.' },
      { title: 'Google Ads for Contractors', desc: 'Weekly bid optimization, negative keyword management, A/B testing, and budget allocation.' },
      { title: 'Meta Ads for Contractors', desc: 'Facebook and Instagram ads targeting homeowners in your service area by location, behavior, and interest.' },
      { title: 'Conversion Optimization', desc: 'We optimize your landing pages to turn ad clicks into calls and estimate requests.' },
      { title: 'Plain-English Monthly Report', desc: 'No jargon. You get a clear report showing leads generated, cost per lead, ad spend, and ROAS.' },
    ],
  },
]

export default function ServicesPage() {
  const lang = 'en'
  const t = CECA_CONTENT.en
  const online = 'ONLINE'
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* ── HERO ──
               Desktop: image as full background + gradient.
               Mobile: background hidden; inline image shows below the paragraph. */}
          <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px,12vw,140px) clamp(20px,5vw,80px)' }}>
            <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image
                src="/images/services/services-hero.webp"
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="(max-width: 1024px) 1px, 100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, var(--bg) 30%, rgba(0,0,0,0.55) 70%, transparent 100%)',
              }} />
            </div>
            <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 14, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                // What We Do
              </div>
              <h1 className="hero-h1" style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
                Marketing Services<br /><span style={{ color: 'var(--accent)' }}>Built for Contractors.</span>
              </h1>
              <p className="hero-p" style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 580, lineHeight: 1.6 }}>
                CECA is a digital marketing agency for contractors. Every service is built around one goal: more leads, more booked jobs, and more revenue for your business — no generic playbooks, no wasted ad spend.
              </p>
              
            </div>
          </section>

          {/* ── SERVICE SECTIONS ──
               Desktop: BG image (75%, scale 1.5, anchored outer edge) + alternating gradient + 3-col grid with spacer.
               Mobile: BG hidden; inline image between H2 and text; single column. */}
          {services.map((s, idx) => {
            const imageRight = idx % 2 === 0
            return (
              <section
                key={s.n}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: 'clamp(48px,8vw,100px) clamp(20px,5vw,80px)',
                }}
              >
                {/* BG image — desktop only */}
                <div className="svc-bg" style={{
                  position: 'absolute',
                  top: 100,
                  bottom: 100,
                  left: imageRight ? '25%' : 0,
                  right: imageRight ? 0 : '25%',
                  zIndex: 0,
                }}>
                  <Image
                    src={s.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 1px, 75vw"
                    style={{
                      objectFit: 'contain',
                      objectPosition: imageRight ? 'right center' : 'left center',
                      transform: 'scale(1.5)',
                      transformOrigin: imageRight ? 'right center' : 'left center',
                    }}
                  />
                </div>

                {/* Gradient — desktop only */}
                <div className="svc-gradient" style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  background: imageRight
                    ? 'linear-gradient(90deg, var(--bg) 0%, var(--bg) 48%, rgba(6,9,18,0.85) 62%, rgba(6,9,18,0.35) 78%, transparent 95%)'
                    : 'linear-gradient(270deg, var(--bg) 0%, var(--bg) 48%, rgba(6,9,18,0.85) 62%, rgba(6,9,18,0.35) 78%, transparent 95%)',
                }} />

                {/* Content */}
                <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                    <div className="svc-number" style={{ fontFamily: 'var(--mono)', fontSize: 20, color: 'var(--muted)', letterSpacing: '.08em' }}>{s.n}</div>
                    <div className="svc-metric" style={{ fontFamily: 'var(--mono)', fontSize: 20, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</div>
                  </div>

                  <h2 className="svc-h2" style={{
                    fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,58px)',
                    lineHeight: 1, letterSpacing: '-.002em', color: 'var(--fg)',
                    marginBottom: 48, maxWidth: 860,
                    marginLeft: imageRight ? 0 : 'auto',
                  }}>
                    {s.title}
                  </h2>

                  {/* Mobile-only image — between H2 and text */}
                  <div className="svc-mobile-img">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      width={1024}
                      height={1536}
                      loading="lazy"
                      sizes="(max-width: 1024px) 80vw, 1px"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  <div
                    className="svc-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
                      gap: 'clamp(28px,3.5vw,52px)',
                      alignItems: 'start',
                    }}
                  >

                    {!imageRight && <div className="svc-spacer" aria-hidden="true" />}

                    <div>
                      <p className="svc-intro" style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 28 }}>
                        {s.intro}
                      </p>

                      <div className="svc-label" style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                        // Why it matters
                      </div>
                      <p className="svc-why" style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                        "{s.why}"
                      </p>

                      {s.note && (
                        <p className="svc-note" style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', letterSpacing: '.04em', marginTop: 24 }}>
                          {s.note}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="svc-label" style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
                        // What's included
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {s.deliverables.map((d, i) => (
                          <div key={i} style={{ padding: '12px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                              <span style={{ color: 'var(--accent)', fontSize: 8, marginTop: 6, flexShrink: 0 }}>◆</span>
                              <div>
                                <div className="svc-d-title" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', marginBottom: 4 }}>{d.title}</div>
                                <div className="svc-d-desc" style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{d.desc}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {imageRight && <div className="svc-spacer" aria-hidden="true" />}

                  </div>
                </div>
              </section>
            )
          })}

          {/* ── SINGLE CTA ── */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              Ready to Get More Leads and Book More Jobs?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              Get a free marketing diagnosis and find out exactly what's holding your business back.
            </p>
            <a href="/contact" style={{ display: 'inline-block', background: 'var(--accent-contrast)', color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              Get My Free Diagnosis →
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>

      {/* ════════════════════════════════════════════════════════
           RESPONSIVE + MOBILE TYPOGRAPHY CONTROL PANEL
           Todo lo que afecta SOLO al móvil (≤1024px) vive aquí.
           Cambia los font-size a tu gusto — no afectan desktop.
         ════════════════════════════════════════════════════════ */}
      <style>{`
        .svc-mobile-img,
        .hero-mobile-img {
          display: none;
        }

        @media (max-width: 1024px) {

          /* ── Layout móvil ── */
          .hero-bg,
          .svc-bg,
          .svc-gradient {
            display: none;
          }
          .hero-mobile-img {
            display: block;
            margin: 32px auto 0;
            max-width: 480px;
          }
          .svc-mobile-img {
            display: block;
            max-width: 300px;      /* tamaño de la imagen de servicio en móvil */
            margin: -24px auto 4px; /* margen negativo arriba compensa el aire transparente del PNG */
          }
          .svc-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .svc-grid .svc-spacer {
            display: none;
          }
          .svc-h2 {
            margin-bottom: 12px !important; /* menos aire entre H2 e imagen */
          }

          /* ── TAMAÑOS DE LETRA SOLO MÓVIL — edita aquí ── */
          .hero-h1     { font-size: 38px !important; }  /* H1 del hero */
          .hero-p      { font-size: 16px !important; }  /* párrafo del hero */
          .svc-h2      { font-size: 28px !important; }  /* H2 de cada servicio */
          .svc-number  { font-size: 14px !important; }  /* 01, 02... */
          .svc-metric  { font-size: 13px !important; }  /* RANK HIGHER · ... */
          .svc-intro   { font-size: 15px !important; }  /* párrafo intro */
          .svc-label   { font-size: 12px !important; }  /* // why it matters / what's included */
          .svc-why     { font-size: 14px !important; }  /* cita en itálica */
          .svc-note    { font-size: 12px !important; }  /* nota con asterisco */
          .svc-d-title { font-size: 15px !important; }  /* título de deliverable */
          .svc-d-desc  { font-size: 13px !important; }  /* descripción de deliverable */
        }
      `}</style>
    </ThemeProvider>
  )
}