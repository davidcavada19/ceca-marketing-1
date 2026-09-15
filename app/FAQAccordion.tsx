'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How much does digital marketing for contractors cost?',
    a: "It depends on what your business actually needs — some contractors just need a website and local SEO, others need ads or review automation too. We don't sell fixed packages. On your strategy call, we'll diagnose what's holding your business back and give you a clear, custom quote.",
  },
  {
    q: 'How long does SEO take for contractors?',
    a: 'Most contractors start seeing meaningful movement in local rankings within 60–90 days. Paid ads generate leads immediately while SEO builds in the background.',
  },
  {
    q: 'Do I need a new website to work with CECA?',
    a: "Not necessarily. If your current site is solid, we can focus on SEO, ads, or automation instead. If it's slow, outdated, or not built for mobile, we'll usually recommend rebuilding it first — that's where most leads get lost.",
  },
  {
    q: 'Can you help me get more Google reviews?',
    a: "Yes. We set up automatic review requests after every completed job, follow up with customers who don't respond, and make it easy for happy customers to leave a review — all without you having to chase anyone manually.",
  },
  {
    q: 'Do you manage Google and Facebook Ads?',
    a: "Yes. We build the campaigns, write the ad copy, design the creative, and manage them daily. You'll always know what each lead costs and where it came from. Ad spend is billed directly by Google/Facebook, separate from our fee.",
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. We work month-to-month because we believe in earning your business every single month. Cancel anytime.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--fg)', lineHeight: 1.3 }}>
              {f.q}
            </span>
            <span style={{
              color: 'var(--accent)',
              fontSize: 20,
              flexShrink: 0,
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform .2s',
              display: 'inline-block',
            }}>
              +
            </span>
          </button>
          {open === i && (
            <p style={{ fontFamily: 'var(--body)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}