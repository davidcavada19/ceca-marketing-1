'use client'
// ═══════════════════════════════════════════════════════════════
//   HOME PAGE — cecamarketing.com (EN)
//   Standalone — all sections inline
//   To change text: edit directly in this file
//   To change colors/fonts: edit lib/constants.ts
//   To change hero image: edit public/images/hero/
// ═══════════════════════════════════════════════════════════════

import Image from 'next/image'
import Link from 'next/link'
import { ACCENTS, TYPE_PAIRINGS, THEMES, TWEAK_DEFAULTS } from '@/lib/constants'
import { CECA_CONTENT } from '@/lib/content'
import { smoothScrollTo } from '@/lib/utils'
import { useReveal } from '@/lib/hooks'
import ThemeProvider from '@/components/ThemeProvider'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import FAQAccordion from './FAQAccordion'

const t = CECA_CONTENT.en
const lang = 'en'

// ─── HERO ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="heroV2">
      <div className="heroV2-media" aria-hidden="true">
        <Image
          src="/images/hero/roofer-contractor-marketing-houston.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="heroV2-img"
        />
        <div className="heroV2-overlay" />
      </div>
      <div className="heroV2-inner">
        <p className="heroV2-eyebrow">Bilingual Agency · SEO · Websites · AI Automation</p>
        <h1 className="heroV2-h1">
          Digital Marketing<br />
          <span className="heroV2-h1Accent">for Contractors.</span>
        </h1>
        <p className="heroV2-sub">You do the work. We make sure the phone rings.</p>
        <div className="heroV2-ctaWrap">
          <button
            type="button"
            className="heroV2-cta"
            onClick={() => smoothScrollTo('contact')}
          >
            Get My Free Website
            <span aria-hidden="true" className="heroV2-ctaArrow">→</span>
          </button>
          <p className="heroV2-ctaNote">Free with any monthly plan. No contracts.</p>
        </div>
        <div className="heroV2-contacts">
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer" className="heroV2-contact">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            (832) 908-2728
          </a>
          <a href="mailto:info@cecamarketing.com" className="heroV2-contact">
            info@cecamarketing.com
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── WHY CECA ─────────────────────────────────────────────────

function WhyCECA() {
  const reasons = [
    {
      icon: '🔧',
      title: 'Built by someone from the trades',
      body: 'Not another agency that discovered contractors are a market. Real field experience in electrical and remodeling — we know how your customers find you.',
    },
    {
      icon: '📍',
      title: 'Built for leads, not vanity metrics',
      body: "We don't report impressions. We report calls, estimate requests, and booked jobs. Every decision starts with: does this bring in more work?",
    },
    {
      icon: '🌐',
      title: 'Bilingual from day one',
      body: 'English and Spanish — not translated, built. Your campaigns reach every homeowner in your market, not just half of them.',
    },
    {
      icon: '⚡',
      title: 'Custom-coded, not templated',
      body: "No Wix, no WordPress, no page builders. Real code, real speed, real SEO. Sites that load fast and rank — because your competitors' don't.",
    },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Why CECA</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px', maxWidth: 600 }}>
          Why contractors choose us over every other agency.
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 56px', maxWidth: 540 }}>
          Any agency can run ads. Not every agency understands why your busy season peaks in July, or how a plumber actually gets a customer at midnight.
        </p>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {reasons.map((r, i) => (
            <div key={i} style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{r.icon}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--fg)', margin: '0 0 10px', lineHeight: 1.2 }}>{r.title}</h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── RESULTS ──────────────────────────────────────────────────

function Results() {
  const stats = [
    { num: '97+', label: 'PageSpeed score on every site we build' },
    { num: '5 days', label: 'Average time from signed to live' },
    { num: '80%', label: 'Of local searches call within 24 hours' },
    { num: '$0', label: 'Website cost with any monthly plan' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Results</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 560 }}>
          What you can expect when you work with CECA.
        </h2>
        <div className="reveal stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '40px 32px', background: 'var(--bg-card)', borderRight: i < 3 ? '1px solid var(--line)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,4vw,52px)', color: 'var(--accent)', letterSpacing: '-.02em', lineHeight: 1, marginBottom: 12 }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────

function Services() {
  const services = [
    { n: '01', title: 'Contractor SEO', desc: 'Rank on Google when homeowners search for your trade — without paying for every click.', tags: ['Local SEO', 'Google Business', 'Location Pages'], metric: 'RANK HIGHER · GET MORE LEADS' },
    { n: '02', title: 'Contractor Websites', desc: 'Fast, custom-coded sites built to turn visitors into calls and estimate requests.', tags: ['Mobile Optimized', 'Fast Load', 'Lead Focused'], metric: 'FREE WITH YOUR PLAN' },
    { n: '03', title: 'AI Automation', desc: 'Missed-call texts, instant lead follow-up, review requests — running 24/7 without you.', tags: ['Missed Call Text Back', 'CRM Setup', 'Review Automation'], metric: 'NEVER MISS A LEAD' },
    { n: '04', title: 'Lead Generation', desc: 'Google Ads and Meta Ads built around your cost per lead — not impressions.', tags: ['Google Ads', 'Meta Ads', 'Conversion Optimization'], metric: 'MORE CALLS · MORE JOBS' },
  ]

  return (
    <section id="services" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Services</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0, maxWidth: 480 }}>
              Everything a contractor needs to grow online.
            </h2>
          </div>
          <Link href="/services" style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            See all services →
          </Link>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {services.map((s) => (
            <Link key={s.n} href="/services" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>0{s.n}</span>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '.08em' }}>{s.metric}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 24, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: '0 0 24px', lineHeight: 1.6 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {s.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 500, color: 'var(--muted)', background: 'var(--subtle)', borderRadius: 99, padding: '5px 12px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── INDUSTRIES ───────────────────────────────────────────────

// ─── INDUSTRIES ───────────────────────────────────────────────

function Industries() {
  const industries = [
    { name: 'HVAC', icon: '❄️' },
    { name: 'Plumbing', icon: '🔧' },
    { name: 'Electrical', icon: '⚡' },
    { name: 'Roofing', icon: '🏠' },
    { name: 'Remodeling', icon: '🔨' },
    { name: 'Landscaping', icon: '🌿' },
    { name: 'Painting', icon: '🎨' },
    { name: 'Flooring', icon: '🏡' },
    { name: 'Pool Service', icon: '🏊' },
    { name: 'Pest Control', icon: '🐛' },
    { name: 'Garage Doors', icon: '🚗' },
    { name: 'Windows', icon: '☀️' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Who We Help</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0, maxWidth: 480 }}>
            Built for home service contractors.
          </h2>
          <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: 0, maxWidth: 360, lineHeight: 1.6 }}>
            If homeowners hire you to fix, build, or maintain their home — we're built for you.
          </p>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 16 }}>
          {industries.map((ind) => (
            <Link key={ind.name} href="/services" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '28px 20px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)', textAlign: 'center', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{ind.icon}</div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)' }}>{ind.name}</div>
              </div>
            </Link>
          ))}
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '28px 20px', background: 'var(--accent)', border: '1px solid var(--accent)', borderRadius: 12, textAlign: 'center', color: '#ffffff', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>+</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16 }}>Your Trade</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURED WORK ─────────────────────────────────────────────

function FeaturedWork() {
  const projects = [
    { name: 'Houston Cool Air', tag: 'HVAC · Houston, TX', result: 'Old static site → Fast, SEO-optimized site + automation' },
    { name: 'Fast Flow Plumbing', tag: 'Plumbing · Houston, TX', result: 'No website → 24/7 emergency site + missed-call text back' },
    { name: 'Texas Top Roofing', tag: 'Roofing · Houston, TX', result: 'Outdated site → Insurance claim landing page + Google Ads' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
          Our Work
        </p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 12px' }}>
          Sites we rebuild for contractors.
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--muted)', margin: '0 0 16px', lineHeight: 1.6, maxWidth: 540 }}>
          Old, slow, or non-existent — we take contractor websites and turn them into lead-generating machines.
        </p>
        <Link href="/portfolio" style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', display: 'inline-block', marginBottom: 48 }}>
          See all work →
        </Link>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <Link key={i} href="/portfolio" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>{p.tag}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 26, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: '0 0 24px', lineHeight: 1.6 }}>{p.result}</p>
                <span style={{ fontFamily: 'var(--body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>See the transformation →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────

function Process() {
  const steps = [
    { n: '01', title: 'Diagnose', desc: "Free 20-min call. We audit your online presence and show you exactly where you're losing leads." },
    { n: '02', title: 'Build', desc: 'Website, automation, and campaigns go live in 5 days. No long onboarding, no endless back-and-forth.' },
    { n: '03', title: 'Grow', desc: "Monthly optimization based on real data. We cut what doesn't work and double down on what brings jobs." },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>How We Work</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 480 }}>
          From free audit to live system — fast.
        </h2>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '40px 36px', background: 'var(--bg-card)', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 52, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 20 }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    { quote: "Before CECA, I was spending money on ads with no idea if they were working. Now I know exactly what each lead costs and my phone actually rings.", name: 'Mike R.', biz: 'HVAC Contractor · Houston, TX' },
    { quote: "They built my site in less than a week and it already ranks better than my competitor's site that's been up for years.", name: 'Carlos G.', biz: 'Roofing Contractor · Katy, TX' },
    { quote: "The missed-call text back alone paid for the entire plan in the first month. I stopped losing jobs to voicemail.", name: 'James T.', biz: 'Plumber · Sugar Land, TX' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Testimonials</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 56px', maxWidth: 480 }}>
          What contractors say.
        </h2>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map((item, i) => (
            <div key={i} style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ color: 'var(--accent)', fontSize: 20, marginBottom: 16 }}>★★★★★</div>
              <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--fg)', lineHeight: 1.65, margin: '0 0 24px', fontStyle: 'italic' }}>"{item.quote}"</p>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)' }}>{item.name}</div>
              <div style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{item.biz}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', marginTop: 24, fontStyle: 'italic' }}>
          * Replace with real client reviews when available.
        </p>
      </div>
    </section>
  )
}

// ─── LATEST INSIGHTS ──────────────────────────────────────────

function Insights() {
  const posts = [
    { tag: 'SEO', title: 'Digital Marketing for Contractors: The Complete Guide', desc: 'Everything a contractor needs to know about getting found online and booking more jobs.', href: '/blog/digital-marketing-for-contractors', date: '2026' },
    { tag: 'Coming soon', title: 'How to Get More Google Reviews as a Contractor', desc: "Reviews are the #1 factor in local rankings. Here's the exact system we use.", href: '/blog', date: 'Coming soon' },
    { tag: 'Coming soon', title: "Why Your Contractor Website Isn't Generating Leads", desc: "Most contractor websites fail at conversion before a visitor reads the headline.", href: '/blog', date: 'Coming soon' },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Latest Insights</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0 }}>
              Resources for contractors.
            </h2>
          </div>
          <Link href="/blog" style={{ fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            See all posts →
          </Link>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {posts.map((p, i) => (
            <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
              <div style={{ padding: '32px 28px', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, boxShadow: 'var(--shadow-card)', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.tag}</span>
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, color: 'var(--muted)' }}>{p.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 20, color: 'var(--fg)', margin: '0 0 12px', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.6 }}>{p.desc}</p>
                <span style={{ fontFamily: 'var(--body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ PREVIEW ──────────────────────────────────────────────

function FAQPreview() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
        <div>
          <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px' }}>
            Quick answers.
          </h2>
          <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
            More questions? We have answers for everything.
          </p>
          <Link href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--body)', fontSize: 15, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
            See all FAQs →
          </Link>
        </div>
        <div className="reveal">
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--accent)', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,5vw,56px)', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.025em' }}>
          Ready to get more leads and book more jobs?
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 18, color: 'rgba(255,255,255,0.88)', margin: '0 0 40px', lineHeight: 1.6 }}>
          Start with a free diagnosis — no pressure, no contracts. We show you exactly what's holding your business back.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: 'var(--accent)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, padding: '16px 28px', borderRadius: 8, textDecoration: 'none' }}>
            Start Your Project →
          </Link>
          <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#ffffff', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, padding: '16px 28px', borderRadius: 8, border: '2px solid rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE EXPORT ──────────────────────────────────────────────

export default function HomePage() {
  const accentDef = ACCENTS[TWEAK_DEFAULTS.accent]
  const pair = TYPE_PAIRINGS[TWEAK_DEFAULTS.type]
  const themeDef = THEMES[TWEAK_DEFAULTS.theme]

  useReveal()

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={t.online} isRoot={true} />
        <Hero />
        <WhyCECA />
        <Results />
        <Services />
        <Industries />
        <FeaturedWork />
        <Process />
        <Testimonials />
        <Insights />
        <FAQPreview />
        <FinalCTA />
        <Footer t={t} online={t.online} />
      </div>
    </ThemeProvider>
  )
}