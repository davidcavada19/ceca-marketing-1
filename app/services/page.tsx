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
    metric: 'FREE WITH YOUR PLAN',
    title: 'Contractor Websites That Convert',
    hook: 'A site built to turn visitors into calls — not just look good.',
    intro: 'Most contractor websites lose customers before they read a word. Ours are built fast, custom, and specifically for contractors — every section designed to move a visitor from "found you" to "calling you."',
    stat: 'Customers Google you before they call. Make sure what they find converts.',
    note: '* Free with any monthly plan. One-page site, 5 sections. Restrictions apply.',
    image: '/images/services/service-02-websites.webp',
    imageAlt: 'Contractor website design — fast, mobile-optimized, built to convert',
    deliverables: [
      { title: 'Strategy Session', desc: 'We learn your business, market, and ideal customer before writing a single line of code.' },
      { title: 'Custom Site (5 sections)', desc: 'Home, Services, About, Reviews, Contact — everything a customer needs to say yes.' },
      { title: 'Mobile Optimized', desc: 'Over 70% of your customers will find you on their phone. Works perfectly on every device.' },
      { title: 'Speed & Core Web Vitals', desc: 'A slow website loses customers and ranks lower. We build fast — always.' },
      { title: 'On-Page SEO Foundation', desc: 'Keywords, meta tags, schema markup — included from day one.' },
      { title: 'Contact Form + WhatsApp', desc: 'Form, phone, or WhatsApp — easy to reach you however customers prefer.' },
      { title: 'Google Analytics Setup', desc: 'Know how many people visit, where they come from, and what they do.' },
    ],
  },
  {
    n: '02',
    metric: 'RANK HIGHER · GET MORE LEADS',
    title: 'Local SEO for Contractors',
    hook: 'Show up first when homeowners search — without paying for every click.',
    intro: 'We build location pages, optimize your Google Business Profile, and implement on-page SEO so your business ranks higher in local search and generates more calls. Local SEO compounds over time: the longer you do it, the harder it becomes for competitors to outrank you.',
    stat: '80% of local searches result in a call or purchase within 24 hours.',
    note: '* Results typically take 60–90 days to show meaningful movement.',
    image: '/images/services/service-01-seo.webp',
    imageAlt: 'Local SEO for contractors — Google Maps top ranking',
    deliverables: [
      { title: 'Full Local SEO Audit', desc: 'Google Business Profile, citations, on-page SEO, and competitor gap analysis.' },
      { title: 'Google Business Profile Optimization', desc: 'Categories, photos, posts, Q&A, and service areas — optimized to rank in the map pack.' },
      { title: 'Location & Service Pages', desc: 'Pages targeting your specific trade and service areas so you rank for the searches that matter.' },
      { title: 'On-Page Local SEO', desc: 'City pages, service pages, and schema markup — built to rank.' },
      { title: 'Online Directory Citations', desc: 'Your listings cleaned up across 50+ directories — Yelp, BBB, Angi, and more.' },
      { title: 'Review Strategy', desc: 'A system to consistently generate 5-star reviews — the #1 local ranking factor.' },
      { title: 'Monthly Ranking Report', desc: 'Exactly where you rank for your target keywords, every month.' },
    ],
  },
  {
    n: '03',
    metric: 'NEVER MISS A LEAD',
    title: 'Marketing Automation for Contractors',
    hook: 'Follow up with every lead instantly — even when you\'re on the job.',
    intro: 'Most contractors lose leads not because they don\'t get them — but because they don\'t follow up fast enough. We build automated systems that respond to every lead instantly, send missed-call texts, and request reviews from happy customers. All running 24/7.',
    stat: 'Contractors who respond within 5 minutes are 9× more likely to close than those who wait 30.',
    note: '* Setup fee applies. Monthly maintenance included in plan.',
    image: '/images/services/service-03-automation.webp',
    imageAlt: 'Marketing automation for contractors — automated follow-up and lead response',
    deliverables: [
      { title: 'CRM Audit & Setup', desc: 'A CRM that fits how your business actually works.' },
      { title: 'Missed-Call Text Back', desc: 'Every missed call gets a text — no more leads lost to voicemail.' },
      { title: '5 Core Automation Workflows', desc: 'Lead follow-up, booking confirmation, review request, re-engagement, appointment reminder.' },
      { title: 'SMS & Email Automation', desc: 'Instant sequences that go out the moment a lead comes in.' },
      { title: 'Review Automation', desc: 'Automatically ask happy customers for Google reviews.' },
      { title: 'Team Walkthrough', desc: 'We train your team so nothing falls through the cracks.' },
      { title: '30-Day Check-In', desc: 'We review and optimize after 30 days based on real data.' },
    ],
  },
  {
    n: '04',
    metric: 'MORE CALLS · MORE JOBS',
    title: 'Lead Generation for Contractors',
    hook: 'Qualified leads, tracked to the dollar — not just clicks and impressions.',
    intro: 'Paid ads are the fastest way to get new contractor leads — but only when managed correctly. We combine Google Ads, Meta Ads, and conversion optimization around one number: your cost per lead.',
    stat: 'Google Ads delivers leads with purchase intent — people searching for your service right now.',
    note: '* Minimum ad spend required. Management fee separate from ad spend.',
    image: '/images/services/service-04-leadgen.webp',
    imageAlt: 'Lead generation for contractors — Google Ads and Meta Ads that convert',
    deliverables: [
      { title: 'Discovery Call (20 min)', desc: 'Your goals, market, budget, and what a good lead looks like.' },
      { title: 'Audience & Competitor Research', desc: 'Who your best customers are and what competitors are doing — then we do it better.' },
      { title: 'Campaign Architecture + Copy', desc: 'Ad groups, keywords, ad copy, landing pages — built from scratch.' },
      { title: 'Google Ads Management', desc: 'Weekly bid optimization, negative keywords, A/B testing, budget allocation.' },
      { title: 'Meta Ads Management', desc: 'Facebook and Instagram ads targeting homeowners in your service area.' },
      { title: 'Conversion Optimization', desc: 'Landing pages optimized to turn ad clicks into calls and estimate requests.' },
      { title: 'Plain-English Monthly Report', desc: 'Leads generated, cost per lead, ad spend, and ROAS — no jargon.' },
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

         {/* ── PAGE HERO ── */}
<section style={{ padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
  <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
    <div>
      <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 16px' }}>
        What We Do
      </p>
      <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', margin: '0 0 24px', maxWidth: 600 }}>
        Marketing Services<br />
        <span style={{ color: 'var(--accent)' }}>Built for Contractors.</span>
      </h1>
      <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,19px)', color: 'var(--muted)', maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
        Every service is built around one goal: more leads, more booked jobs, more revenue — no generic playbooks, no wasted ad spend.
      </p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src="/images/services/services-hero.webp"
        alt="Contractor marketing services — SEO, websites, automation, lead generation"
        width={600}
        height={400}
        style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 8px 24px rgba(10,15,30,0.12))' }}
      />
    </div>
  </div>
</section>

          {/* ── SERVICE SECTIONS ── */}
          {services.map((s, idx) => {
            const imageRight = idx % 2 === 0
            return (
              <section
                key={s.n}
                style={{
                  padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)',
                  borderBottom: '1px solid var(--line)',
                  background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-alt)',
                }}
              >
                <div style={{ maxWidth: 1320, margin: '0 auto' }}>

                  {/* ── Top row: number + metric ── */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em' }}>0{s.n}</span>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</span>
                  </div>

                  {/* ── Split: text + image card ── */}
                  <div className={`svc-split ${imageRight ? 'img-right' : 'img-left'}`}>

                    {/* Text column */}
                    <div className="svc-text">
                      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 12px' }}>
                        {s.title}
                      </h2>
                      <p style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'clamp(18px,2vw,22px)', color: 'var(--accent)', margin: '0 0 24px', lineHeight: 1.3 }}>
                        {s.hook}
                      </p>
                      <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
                        {s.intro}
                      </p>
                      <div style={{ padding: '16px 20px', borderLeft: '3px solid var(--accent)', background: 'rgba(249,115,22,0.06)', borderRadius: '0 8px 8px 0', marginBottom: 28 }}>
                        <p style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', margin: 0, lineHeight: 1.5 }}>
                          {s.stat}
                        </p>
                      </div>
                      {s.note && (
                        <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                          {s.note}
                        </p>
                      )}
                    </div>

                    {/* Image card */}
                    <div className="svc-img-card">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        width={720}
                        height={540}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>

                  </div>

                  {/* ── Deliverables ── */}
                  <div style={{ marginTop: 56 }}>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 24px' }}>
                      What's included
                    </p>
                    <div className="svc-deliverables">
                      {s.deliverables.map((d, i) => (
                        <div key={i} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                          <div>
                            <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginBottom: 3 }}>{d.title}</div>
                            <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>{d.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>
            )
          })}

          {/* ── CTA ── */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '-.03em' }}>
              Ready to Get More Leads and Book More Jobs?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'rgba(255,255,255,0.88)', margin: '0 0 32px', lineHeight: 1.6 }}>
              Start with a free diagnosis — we show you exactly what's holding your business back.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#ffffff', color: 'var(--accent)',
                fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
                padding: '16px 28px', borderRadius: 8, textDecoration: 'none',
                transition: 'transform .15s ease',
              }}
            >
              Get My Free Diagnosis →
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>

      <style>{`
        /* ── Split layout ── */
        .svc-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: center;
        }
        .svc-split.img-right { }
        .svc-split.img-left .svc-text { order: 2; }
        .svc-split.img-left .svc-img-card { order: 1; }

        /* ── Image card ── */
        .svc-img-card {
  background: transparent;
  border: none;
  border-radius: 0;
  overflow: visible;
  box-shadow: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

        /* ── Deliverables grid ── */
        .svc-deliverables {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 48px;
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .svc-split {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .svc-split.img-left .svc-text { order: 1; }
          .svc-split.img-left .svc-img-card { order: 2; }
          .svc-deliverables {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .svc-img-card {
            padding: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          a { transition: none; }
        }
      `}</style>
    </ThemeProvider>
  )
}