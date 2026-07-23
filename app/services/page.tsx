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
    intro: 'Your website is your #1 sales tool — and most contractor websites are losing customers before they even read a word. Our contractor website design is built fast and custom, made specifically for contractors',
    why: 'A professional contractor website builds trust before the first phone call. Customers Google you before they call — make sure what they find converts them into a lead.',
    note: '* Free with any monthly marketing plan. Restrictions apply. One-page site, 5 sections.',
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
    intro: 'Most contractors lose leads not because they do not get them — but because they do not follow up fast enough. Marketing automation for contractors fixes that. We build automated systems that follow up with every lead instantly, send missed-call texts, request reviews from happy customers, and route leads to the right person — all running 24/7 without you lifting a finger. The average lead goes cold in under 5 minutes. With automation, you respond in seconds — even when you are on a job site.',
    why: 'Speed to lead is the #1 factor in closing a job. Contractors who respond within 5 minutes are 9x more likely to close than those who wait 30 minutes.',
    note: '* Setup fee applies. Monthly maintenance included in plan.',
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
    intro: 'Paid ads are the fastest way to get new contractor leads — but only when managed correctly. Our lead generation system for contractors combines Google Ads, Meta Ads, and conversion optimization to generate a consistent flow of qualified leads for your business. Every campaign is built around one number: your cost per lead. Not impressions, not clicks, not reach — qualified leads that turn into booked jobs. Every dollar tracked, every lead counted, every campaign optimized for your trade and your market.',
    why: 'Google Ads for contractors delivers leads with purchase intent — people who are actively searching for your service right now, not just scrolling a feed.',
    note: '* Minimum ad spend required. Management fee separate from ad spend.',
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
  const isEn = true
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={online} />
        <main style={{ paddingTop: 80 }}>

          {/* Hero */}
          <section style={{ padding: 'clamp(60px,10vw,120px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // What We Do
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              Marketing Services<br /><span style={{ color: 'var(--accent)' }}>Built for Contractors.</span>
            </h1>
             <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 640, lineHeight: 1.6 }}>
               CECA is a digital marketing agency for contractors. Every service is built around one goal: more leads, more booked jobs, and more revenue for your business — no generic playbooks, no wasted ad spend.
             </p>
          </section>

          {/* Services */}
          {services.map((s, idx) => (
            <section key={s.n} style={{ borderTop: '1px solid var(--line)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', background: idx % 2 === 1 ? 'var(--panel)' : 'var(--bg)' }}>
              <div style={{ maxWidth: 1320, margin: '0 auto' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '.1em' }}>{s.metric}</div>
                </div>

                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 24, maxWidth: 800 }}>
                  {s.title}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 60, alignItems: 'start' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 24 }}>
                      {s.intro}
                    </p>

                    <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: 2 }}>
                      Get My Free Diagnosis →
                    </a>

                    <div style={{ marginTop: 32, padding: 24, border: '1px solid var(--line)', background: 'var(--bg)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
                        // Why it matters
                      </div>
                      <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--fg)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                        "{s.why}"
                      </p>
                    </div>

                    {s.note && (
                      <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em', marginTop: 16 }}>
                        {s.note}
                      </p>
                    )}
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
                      // What's included
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {s.deliverables.map((d, i) => (
                        <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <span style={{ color: 'var(--accent)', fontSize: 8, marginTop: 6, flexShrink: 0 }}>◆</span>
                            <div>
                              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14, color: 'var(--fg)', marginBottom: 4 }}>{d.title}</div>
                              <div style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{d.desc}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* CTA Final */}
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
    </ThemeProvider>
  )
}