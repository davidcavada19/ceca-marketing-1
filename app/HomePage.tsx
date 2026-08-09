'use client'
// ═══════════════════════════════════════════════════════════════
//   HOME PAGE — cecamarketing.com (EN)
//   Standalone — all sections inline
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
import ContactForm from '@/components/ContactForm'
import { useState, useRef } from 'react'

const t = CECA_CONTENT.en
const lang = 'en'

// ─── HERO (nuevo) ─────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" style={{ padding: 'clamp(120px,14vw,180px) clamp(20px,5vw,80px) clamp(64px,8vw,112px)', position: 'relative', overflow: 'hidden' }}>

      <div
  aria-hidden="true"
  style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.93) 70%, #ffffff 100%), url(/images/hero/blueprint-pattern.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    pointerEvents: 'none',
  }}
/>

      <div className="hero-grid" style={{
        maxWidth: 1320,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 560px) 1fr',
        gridTemplateAreas: '"heading image" "body image"',
        gap: 'clamp(32px,5vw,64px)',
        alignItems: 'center',
        position: 'relative',
      }}>

        <div className="hero-heading" style={{ gridArea: 'heading' }}>
          <p className="hero-eyebrow" style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
            Bilingual Agency · SEO · Websites · AI Automation
          </p>

          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,5.5vw,64px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0 }}>
            Contractor Marketing Agency That Helps You Get{' '}
            <span style={{ color: 'var(--accent)' }}>More Qualified Leads</span>
          </h1>
        </div>

        <div className="hero-image" style={{ gridArea: 'image', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380 }}>
          <Image
            src="/images/hero/hero-composition.webp"
            alt="CECA Marketing website and Google review results for a contractor client"
            width={1000}
            height={1000}
            priority
            style={{ width: '100%', height: 'auto', maxWidth: 2000, mixBlendMode: 'multiply' }}
          />
        </div>

        <div className="hero-body" style={{ gridArea: 'body' }}>
          <p style={{ fontFamily: 'var(--body)', fontWeight: 900, fontSize: 'clamp(20px,2vw,19px)', color: 'var(--muted)', lineHeight: 1.3, margin: '0 0 36px', maxWidth: 480 }}>
            You do the work. We make sure the phone rings. Websites, local SEO, and lead automation built specifically for home service contractors.
          </p>

          <div className="hero-cta-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => smoothScrollTo('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'center',
                background: 'var(--accent)',
                color: '#ffffff',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 16,
                padding: '16px 28px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Book Your Growth Strategy Call
              <span aria-hidden="true">→</span>
            </button>
            <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--muted)', margin: 0 }}>
              No pressure. No contracts. Just a clear plan to get more calls.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="https://wa.me/18329082728" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              (832) 908-2728
            </a>
            <a href="mailto:info@cecamarketing.com"
              style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', textDecoration: 'none' }}>
              info@cecamarketing.com
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── WHY CECA ─────────────────────────────────────────────────

function WhyCECA() {
  const reasons = [
    {
      n: '01',
      title: <>We know <span style={{ color: 'var(--accent)' }}>the trades</span></>,
      body: "We've worked in electrical and remodeling ourselves. We know how people search for a contractor when something breaks.",
    },
    {
      n: '02',
      title: <>You'll see <span style={{ color: 'var(--accent)' }}>what's working</span></>,
      body: "Calls. Quote requests. Jobs booked. That's what we track — not clicks or views that don't pay your bills.",
    },
    {
      n: '03',
      title: <>We reach <span style={{ color: 'var(--accent)' }}>your whole market</span></>,
      body: 'English and Spanish, built from the start. You reach every homeowner near you, not just half of them.',
    },
    {
      n: '04',
      title: <>Built <span style={{ color: 'var(--accent)' }}>fast, found on Google</span></>,
      body: "We build it by hand, the right way. That's why it works when other contractor sites don't.",
    },
  ]

  return (
    <section style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderTop: 'none', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Why CECA</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px', maxWidth: 600 }}>
          You do the work. We make sure people find you.
        </h2>
        <p style={{ fontFamily: 'var(--body)', fontSize: 17, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 56px', maxWidth: 540 }}>
          No confusing reports. No wasted money on ads that don't work. Just a website and marketing that bring you real jobs.
        </p>
        <div className="reveal why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
  {reasons.map((r, i) => (
    <div key={r.n} className="why-card" style={{ padding: '40px 32px', background: 'var(--bg-card)' }}>
      <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 40, color: 'var(--line)', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 20 }}>{r.n}</div>
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em', lineHeight: 1.15 }}>{r.title}</h3>
      <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{r.body}</p>
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
    {
      n: '01',
      title: 'Your Website + Local SEO',
      desc: "A clean, fast one-page website — built and live, with local SEO set up from day one so people searching for your trade can find you.",
      includes: [
        'One-page website, built for mobile',
        'Google Business Profile set up and optimized',
        'Shows up in local Google searches and maps',
        'No setup fee — it\'s part of your plan',
      ],
    },
    {
      n: '02',
      title: 'Growing Your Rankings Over Time',
      desc: 'As your business grows, we add more to your online presence — new pages for each service you offer and each city you work in.',
      includes: [
        'A page for every service you offer',
        'A page for every city or area you serve',
        'Blog posts about what your customers are searching for',
        'Keeps you ranking higher the longer we work together',
      ],
    },
    {
      n: '03',
      title: 'Google & Facebook Ads',
      desc: "We build, run, and manage your ads on Google and Facebook — so the right people see you right when they're looking for your service.",
      includes: [
        'Ad setup and daily management on Google and Facebook',
        'We create the images and text for your ads',
        'You always know what each customer cost to get',
        'Ad spend is billed directly by Google/Facebook, separate from our fee',
      ],
    },
    {
      n: '04',
      title: 'Never Miss a Job Again',
      desc: "Miss a call while you're on a job site? We text them back automatically, so you don't lose the lead to silence.",
      includes: [
        'Instant text-back when you miss a call',
        'Automatic review requests after a job',
        'Follow-up texts for leads who haven\'t booked yet',
        'Runs 24/7, even when you\'re on a roof or under a sink',
      ],
    },
  ]

  return (
    <section id="services" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>Services</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: 0, maxWidth: 560 }}>
            Everything you need to keep the phone ringing.
          </h2>
        </div>

        <div>
          {services.map((s, i) => (
            <div key={s.n} className="service-row" style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(240px, 420px) 1fr',
              gap: 'clamp(32px,5vw,64px)',
              padding: '48px 0',
              borderTop: i === 0 ? '1px solid var(--line)' : undefined,
              borderBottom: '1px solid var(--line)',
              alignItems: 'start',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 15, color: 'var(--accent)', letterSpacing: '.05em', marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(22px,2.5vw,28px)', color: 'var(--fg)', margin: '0 0 12px', letterSpacing: '-.02em', lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {s.includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: 'var(--body)', fontSize: 15, color: 'var(--fg)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── INDUSTRIES ───────────────────────────────────────────────

function Industries() {
  const industries = [
    'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Remodeling',
    'Landscaping', 'Painting', 'Flooring', 'Pool Service',
    'Pest Control', 'Garage Doors', 'Windows',
  ]

  return (
    <section style={{ padding: 'clamp(56px,7vw,88px) 0', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
        <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px', textAlign: 'center' }}>Who We Help</p>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em', color: 'var(--fg)', margin: '0 auto', maxWidth: 680, textAlign: 'center' }}>
          If homeowners hire you to fix, build, or maintain their home — we're built for you.
        </h2>
      </div>

      <div style={{ marginTop: 48, position: 'relative' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, animationDuration: '75s' }}>
            {[...industries, ...industries].map((name, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'clamp(18px,2vw,22px)',
                color: 'var(--fg)',
                letterSpacing: '-.01em',
                padding: '14px 28px',
                margin: '0 12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--line)',
                borderRadius: 99,
                boxShadow: 'var(--shadow-card)',
              }}>
                {name}
              </span>
            ))}
          </div>
          <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, animationDuration: '75s' }} aria-hidden="true">
            {[...industries, ...industries].map((name, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'clamp(18px,2vw,22px)',
                color: 'var(--fg)',
                letterSpacing: '-.01em',
                padding: '14px 28px',
                margin: '0 12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--line)',
                borderRadius: 99,
                boxShadow: 'var(--shadow-card)',
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
/// ─── PROCESS ──────────────────────────────────────────────────

function Process() {
  const steps = [
    { n: '01', title: 'Diagnose', desc: "Free 20-min call. We audit your online presence and show you exactly where you're losing leads." },
    { n: '02', title: 'Build', desc: 'Website, automation, and campaigns go live in 5 days. No long onboarding, no endless back-and-forth.' },
    { n: '03', title: 'Grow', desc: "Monthly optimization based on real data. We cut what doesn't work and double down on what brings jobs." },
  ]

  return (
    <section id="how-it-works" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
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
    <section id="faq" style={{ padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,80px)', borderBottom: '1px solid var(--line)' }}>
  <div className="faq-grid" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
        <div>
          <p style={{ fontFamily: 'var(--body)', fontSize: 13, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.05, letterSpacing: '-.025em', color: 'var(--fg)', margin: '0 0 16px' }}>
            Quick answers.
          </h2>
          <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
            Have another question? Just ask us directly below.
          </p>
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
          <button
            type="button"
            onClick={() => smoothScrollTo('contact')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: 'var(--accent)', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, padding: '16px 28px', borderRadius: 8, border: 'none', cursor: 'pointer' }}
          >
            Start Your Project →
          </button>
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
  const [selectedNiche, setSelectedNiche] = useState(null)
  const formRef = useRef(null)

  useReveal()

  return (
    <ThemeProvider accent={accentDef} theme={themeDef} pair={pair}>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--fg)', overflowX: 'hidden' }}>
        <TopBar t={t} lang={lang} online={t.online} isRoot={true} />
        <Hero />
        <WhyCECA />
        <Services />
        <Industries />
        <Process />
        <Insights />
        <FAQPreview />
        <FinalCTA />
        <ContactForm t={t} lang={lang} selectedNiche={selectedNiche} formRef={formRef} />
        <Footer t={t} online={t.online} />
      </div>
    </ThemeProvider>
  )
}