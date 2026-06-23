import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About CECA Marketing | Contractor Marketing Agency Houston TX',
  description:
    'CECA Marketing is a contractor marketing agency based in Houston, TX. We help HVAC, roofing, plumbing, electrical, and general contractors generate more leads and book more jobs.',
  alternates: {
    canonical: 'https://cecamarketing.com/about',
    languages: {
      en: 'https://cecamarketing.com/about',
      es: 'https://cecamarketing.com/es/about',
      'x-default': 'https://cecamarketing.com/about',
    },
  },
}

export default function AboutPage() {
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
              // About Us
            </div>
            <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 0.95, letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 24 }}>
              A Contractor Marketing Agency<br /><span style={{ color: 'var(--accent)' }}>Built for the Trades.</span>
            </h1>
            <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(16px,2vw,20px)', color: 'var(--muted)', maxWidth: 600, lineHeight: 1.6 }}>
              We built CECA because too many great contractors were losing jobs to competitors with worse work but better marketing.
            </p>
          </section>

          {/* Mission */}
          <section style={{ background: 'var(--fg)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  // Our Mission
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--bg)', marginBottom: 20 }}>
                  More leads. More jobs. More revenue.
                </h2>
              </div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--bg)', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>
                Our mission is simple: help contractors generate more leads and book more jobs through marketing that actually works. No vanity metrics, no fluff reports, no long-term contracts. Just results you can see in your calendar and your bank account.
              </p>
            </div>
          </section>

          {/* Values */}
          <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 32 }}>
                // What We Stand For
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
                {[
                  { label: 'Transparency', desc: 'You always know what we are doing and why. Clear reporting, honest communication — no surprises.' },
                  { label: 'Results First', desc: 'Every decision is tied to your bottom line. More leads, more booked jobs — nothing else matters.' },
                  { label: 'Speed', desc: 'Most contractors are live within 5 days. We move fast without cutting corners.' },
                  { label: 'Partnership', desc: 'We treat your contracting business like our own. Your growth is our growth — period.' },
                ].map((v) => (
                  <div key={v.label}>
                    <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--accent)', marginBottom: 8 }}>{v.label}</div>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA #1 */}
          <section style={{ padding: '40px clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--fg)', margin: 0 }}>
                Sounds like what your contracting business needs?
              </p>
              <a href="/contact" style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                Get My Free Diagnosis →
              </a>
            </div>
          </section>

          {/* Why CECA */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Why CECA
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 48 }}>
              What Makes Us Different.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 1, border: '1px solid var(--line)' }}>
              {[
                { n: '01', title: 'Built exclusively for contractors.', desc: 'We do not serve everyone. We specialize in HVAC, roofing, plumbing, electrical, and general contractors — so we know your market.' },
                { n: '02', title: 'No long-term contracts.', desc: 'We work month-to-month because we believe in earning your business every single month.' },
                { n: '03', title: 'Plain-English reporting.', desc: 'No jargon, no vanity metrics. You get a clear monthly report showing leads generated and cost per lead.' },
                { n: '04', title: 'Response in under 24h.', desc: 'You have a direct line to your account manager. No ticket systems, no call centers.' },
                { n: '05', title: 'Live within 5 days.', desc: 'Most contractors go from first call to live campaigns in under a week. Speed is part of the service.' },
                { n: '06', title: 'Revenue-focused only.', desc: 'We only track what matters — leads, cost per lead, and booked jobs. Nothing else.' },
              ].map((d) => (
                <div key={d.n} style={{ padding: '32px 28px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.08em', marginBottom: 12 }}>{d.n}</div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story + Stats */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto', borderTop: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
                  // Our Story
                </div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 20 }}>
                  Why We Started CECA.
                </h2>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  We saw too many great contractors losing jobs to competitors with worse work but better marketing. A better HVAC tech losing to a worse one because their website was outdated. A roofer with 5-star work losing to a competitor with better Google rankings.
                </p>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                  That gap is what CECA was built to close. We combine technical marketing expertise with a genuine understanding of how contractors operate — so our strategies actually fit the way you work.
                </p>
              </div>
              <div style={{ border: '1px solid var(--line)', padding: 40, fontFamily: 'var(--mono)', fontSize: 13 }}>
                {[
                  { n: '5 days', label: 'Avg. contractor launch' },
                  { n: '4.2×', label: 'Average ROAS' },
                  { n: '100%', label: 'Satisfaction guarantee' },
                  { n: '$0', label: 'Setup fee for website' },
                ].map((s, i, arr) => (
                  <div key={s.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none' }}>
                    <span style={{ color: 'var(--muted)', letterSpacing: '.06em', fontSize: 11, textTransform: 'uppercase' }}>{s.label}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 20 }}>{s.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commitment */}
          <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)', maxWidth: 1320, margin: '0 auto', borderTop: '1px solid var(--line)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              // Our Commitment
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: 32 }}>
              Our Guarantee to You.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 32 }}>
              {[
                { title: '100% Satisfaction Guarantee', desc: 'If you are not happy with the quality of our work in the first 30 days, we will make it right or refund you. No questions asked.' },
                { title: 'No Hidden Fees', desc: 'What you see is what you pay. We are transparent about every dollar — no surprise charges, no hidden costs.' },
                { title: 'Your Assets, Always', desc: 'Everything we build for you is yours. Website, ad accounts, content — if you ever leave, you keep everything.' },
              ].map((c) => (
                <div key={c.title} style={{ padding: 28, border: '1px solid var(--line)' }}>
                  <div style={{ color: 'var(--accent)', fontSize: 20, marginBottom: 12 }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 18, letterSpacing: '-.02em', color: 'var(--fg)', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section style={{ background: 'var(--accent)', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', color: 'var(--accent-contrast)', marginBottom: 16, letterSpacing: '-.03em' }}>
              Ready to Get More Leads and Book More Jobs?
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--accent-contrast)', opacity: 0.85, marginBottom: 28 }}>
              Get a free marketing diagnosis and find out exactly what is holding your contracting business back.
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