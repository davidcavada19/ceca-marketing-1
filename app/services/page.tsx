import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Marketing Services for Contractors | CECA Marketing',
  description:
    'Marketing services for contractors, websites, local SEO, Google & Facebook Ads, review automation, and lead automation. Everything a home service business needs to generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/services',
    languages: {
      en: 'https://cecamarketing.com/services',
      es: 'https://cecamarketing.com/es/services',
      'x-default': 'https://cecamarketing.com/services',
    },
  },
}

const icons = {
  website: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <line x1="6" y1="17" x2="42" y2="17" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="11" cy="13.5" r="1.4" fill="currentColor" />
      <circle cx="16" cy="13.5" r="1.4" fill="currentColor" />
      <path d="M14 27l5-6 4 4 6-8 5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 34V22M18 34V16M28 34V24M38 34V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 14l8-5 8 4 14-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 4h6v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 4" />
    </svg>
  ),
  reviews: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6l5.9 12 13.1 1.9-9.5 9.2 2.2 13-11.7-6.3-11.7 6.3 2.2-13-9.5-9.2L18.1 18 24 6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 20v6M17 26h14a3 3 0 013 3v9a3 3 0 01-3 3H17a3 3 0 01-3-3v-9a3 3 0 013-3z" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="34" r="1.6" fill="currentColor" />
      <circle cx="28" cy="34" r="1.6" fill="currentColor" />
    </svg>
  ),
}

const services = [
  {
    n: '01',
    metric: 'BE FOUND ON GOOGLE',
    title: 'Your Website + Local SEO',
    hook: 'A site built to turn visitors into calls, with local SEO from day one.',
    intro: 'Most contractor websites lose customers before they read a word. We build clean, fast, mobile-first sites with local SEO foundations set up from the start, so when someone searches for your trade, they find you, and when they land on your site, they call.',
    stat: 'Customers Google you before they call. Make sure what they find converts.',
    icon: icons.website,
    deliverables: [
      { title: 'Fast, Mobile-First Website', desc: 'Built for how homeowners actually search, on their phone, looking for a fast answer.' },
      { title: 'Google Business Profile Setup', desc: 'Categories, photos, service areas, and optimization so you show up in local search and maps.' },
      { title: 'Local SEO Foundations', desc: 'On-page SEO, schema markup, and technical setup built in from day one.' },
      { title: 'Built to Convert', desc: 'Every section designed to move a visitor from found you to calling you.' },
    ],
  },
  {
    n: '02',
    metric: 'RANK HIGHER OVER TIME',
    title: 'Grow Your Rankings Over Time',
    hook: 'Local SEO compounds, the longer we work on it, the harder you are to outrank.',
    intro: 'As your business grows, we keep expanding your online presence with content built around the services you offer and the areas you serve. Every new page is another chance to show up for a search your next customer is already making.',
    stat: '80% of local searches result in a call or purchase within 24 hours.',
    note: 'Results typically take 60 to 90 days to show meaningful movement.',
    icon: icons.growth,
    deliverables: [
      { title: 'A Page for Every Service', desc: 'Dedicated pages so you rank for the specific work you do, not just your business name.' },
      { title: 'Location Pages', desc: 'Pages targeting every city or area you serve, so you show up across your whole service area.' },
      { title: 'Content Based on Real Searches', desc: 'Blog posts and pages built around what your customers are actually typing into Google.' },
      { title: 'Ongoing SEO Improvements', desc: 'Continuous optimization as your business and your online presence grow together.' },
    ],
  },
  {
    n: '03',
    metric: 'DEMAND, ON DEMAND',
    title: 'Google & Facebook Ads',
    hook: 'Capture people searching right now, and reach new ones before they start looking.',
    intro: 'Google and Meta do not do the same job. Google Ads puts you in front of homeowners actively searching for your service. Facebook and Instagram create demand, reaching people who need a contractor before they have started looking for one. We run both, built for conversion, tracked to the dollar.',
    stat: 'Google Ads delivers leads with purchase intent, people searching for your service right now.',
    note: 'Minimum ad spend required. Management fee separate from ad spend.',
    icon: icons.ads,
    deliverables: [
      { title: 'Google Ads for High-Intent Searches', desc: 'Campaigns targeting the exact moment someone needs your service.' },
      { title: 'Facebook & Instagram Campaigns', desc: 'Creative and targeting built to create demand with homeowners in your service area.' },
      { title: 'Conversion-Built Landing Pages', desc: 'Ad creative and landing pages designed to turn clicks into calls and estimate requests.' },
      { title: 'Full Cost-Per-Lead Tracking', desc: 'Know exactly what each lead costs and where it came from, every month.' },
    ],
  },
  {
    n: '04',
    metric: 'BUILD TRUST AUTOMATICALLY',
    title: 'Get More 5-Star Reviews, Automatically',
    hook: 'Turn every completed job into a Google review, without chasing anyone.',
    intro: 'Reviews are one of the strongest local ranking signals, and the easiest one to lose to inconsistency. We set up automatic review requests after every completed job, follow up with customers who do not respond, and make it effortless for happy customers to leave a review, all running in the background.',
    stat: 'Reviews are one of the top factors homeowners use to choose between contractors.',
    note: 'Setup fee applies. Monthly maintenance included in plan.',
    icon: icons.reviews,
    deliverables: [
      { title: 'Automatic Review Requests', desc: 'Sent after every completed job, no manual follow-up needed.' },
      { title: 'Follow-Up Reminders', desc: 'Automatic nudges when a customer has not responded yet.' },
      { title: 'Direct Link to Your Google Review Page', desc: 'Makes it as easy as possible for happy customers to leave a review.' },
      { title: 'Review Tracking', desc: 'See every request sent and every response, in one place.' },
    ],
  },
  {
    n: '05',
    metric: 'NEVER LOSE A LEAD',
    title: 'Never Miss a Job Again',
    hook: 'Miss a call on a job site? We respond and follow up so the lead does not disappear.',
    intro: 'Most contractors do not lose leads because they do not get them, they lose them because nobody follows up fast enough. We build automated systems that text back missed calls instantly, follow up with leads who have not booked, and keep working even when you are on a roof or under a sink.',
    stat: 'Contractors who respond within 5 minutes are far more likely to close than those who wait 30.',
    icon: icons.automation,
    deliverables: [
      { title: 'Instant Missed-Call Text Back', desc: 'Every missed call gets an immediate text, no lead lost to voicemail.' },
      { title: 'Automatic Lead Follow-Up', desc: 'Sequences that keep working a lead until they respond or book.' },
      { title: 'Follow-Up for Leads That Have Not Booked', desc: 'No lead falls through the cracks just because they did not answer the first message.' },
      { title: 'Appointment Reminders', desc: 'Automatic reminders that reduce no-shows and keep your schedule full.' },
      { title: 'Runs 24/7', desc: 'Working the moment a call comes in, even when you are on the job.' },
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

          <section style={{ padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: '-20%',
              right: '-8%',
              width: 480,
              height: 480,
              backgroundColor: 'transparent',
              backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.10), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 16px' }}>
                What We Do
              </p>
              <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,6vw,72px)', lineHeight: 1.02, letterSpacing: '-.03em', color: 'var(--fg)', margin: '0 0 24px' }}>
                Marketing Services<br />
                <span style={{ color: 'var(--accent)' }}>Built for Contractors.</span>
              </h1>
              <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,19px)', color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
                Every contractor is different. Below are the pieces we build with, website, SEO, ads, reviews, and lead automation. On your strategy call, we will recommend the combination that fits your business.
              </p>
            </div>
          </section>

          {services.map((s, idx) => {
            const iconRight = idx % 2 === 0
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

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em' }}>{s.n}</span>
                    <span style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</span>
                  </div>

                  <div className={'svc-split ' + (iconRight ? 'img-right' : 'img-left')}>

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
                      <div style={{ padding: '16px 20px', borderLeft: '3px solid var(--accent)', backgroundColor: 'rgba(249,115,22,0.06)', borderRadius: '0 8px 8px 0', marginBottom: 28 }}>
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

                    <div className="svc-visual">
                      <div className="svc-visual-inner">
                        <span aria-hidden="true" className="svc-ghost-number">{s.n}</span>
                        <div className="svc-icon">{s.icon}</div>
                      </div>
                    </div>

                  </div>

                  <div style={{ marginTop: 56 }}>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 24px' }}>
                      What is included
                    </p>
                    <div className="svc-deliverables">
                      {s.deliverables.map((d, i) => (
                        <div key={i} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{'\u2713'}</span>
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

          <section style={{ backgroundColor: 'var(--accent)', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: '#ffffff', margin: '0 0 16px', letterSpacing: '-.03em' }}>
              Not Sure What You Need?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'rgba(255,255,255,0.88)', margin: '0 0 32px', lineHeight: 1.6 }}>
              That is what the strategy call is for. We will diagnose what is holding your business back and recommend the right combination, no pre-built packages.
            </p>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#ffffff',
                color: 'var(--accent)',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 28px',
                borderRadius: 8,
                textDecoration: 'none',
                transitionProperty: 'transform',
                transitionDuration: '.15s',
                transitionTimingFunction: 'ease',
              }}
            >
              {'Book Your Growth Strategy Call \u2192'}
            </a>
          </section>

        </main>
        <Footer t={t} online={online} />
      </div>

      <style>
        {[
          '.svc-split { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(40px, 5vw, 80px); align-items: center; }',
          '.svc-split.img-left .svc-text { order: 2; }',
          '.svc-split.img-left .svc-visual { order: 1; }',
          '.svc-visual { display: flex; align-items: center; justify-content: center; }',
          '.svc-visual-inner { position: relative; width: 100%; max-width: 380px; aspect-ratio: 1 / 1; border-radius: 24px; background: var(--bg-card); border: 1px solid var(--line); box-shadow: var(--shadow-card); display: flex; align-items: center; justify-content: center; overflow: hidden; }',
          '.svc-ghost-number { position: absolute; font-family: var(--display); font-weight: 900; font-size: clamp(140px, 18vw, 220px); line-height: 1; color: var(--line); opacity: 0.6; letter-spacing: -.04em; user-select: none; }',
          '.svc-icon { position: relative; width: clamp(72px, 8vw, 96px); height: clamp(72px, 8vw, 96px); color: var(--accent); z-index: 1; }',
          '.svc-icon svg { width: 100%; height: 100%; }',
          '.svc-deliverables { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 48px; }',
          '@media (max-width: 900px) { .svc-split { grid-template-columns: 1fr !important; gap: 32px !important; } .svc-split.img-left .svc-text { order: 1; } .svc-split.img-left .svc-visual { order: 2; } .svc-deliverables { grid-template-columns: 1fr !important; } .svc-visual-inner { max-width: 280px; } }',
        ].join(' ')}
      </style>
    </ThemeProvider>
  )
}