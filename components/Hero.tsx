'use client'
import React from 'react'
import Image from 'next/image'
import { smoothScrollTo } from '@/lib/utils'

/* ============================================================
   CECA Hero — v2 (cinematic, minimal)
   - ONE responsive layout (replaces the old desktop/mobile
     duplicate blocks)
   - Full-bleed photo + navy gradient overlay + slow Ken Burns
   - Structure: eyebrow → H1 (keyword) → one line → single CTA
     + microcopy → contact row
   - Deleted from old hero: gradient blobs, InteractiveTicker,
     service chips, secondary CTA, count-up hooks
   Requires the CSS added to globals.css (see globals-additions)
   ============================================================ */

export type HeroText = {
  eyebrow: string
  h1_line1: string
  h1_line2: string // rendered in orange
  subtitle: string
  cta: string
  cta_note: string
}

interface HeroProps {
  t: HeroText
  lang: string
}

export default function Hero({ t, lang }: HeroProps) {
  return (
    <section id="top" className="heroV2">
      {/* ---- background ---- */}
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

      {/* ---- content ---- */}
      <div className="heroV2-inner">
        <p className="heroV2-eyebrow">{t.eyebrow}</p>

        <h1 className="heroV2-h1">
          {t.h1_line1}
          <br />
          <span className="heroV2-h1Accent">{t.h1_line2}</span>
        </h1>

        <p className="heroV2-sub">{t.subtitle}</p>

        <div className="heroV2-ctaWrap">
          <button
            type="button"
            className="heroV2-cta"
            onClick={() => smoothScrollTo('contact')}
          >
            {t.cta}
            <span aria-hidden="true" className="heroV2-ctaArrow">→</span>
          </button>
          <p className="heroV2-ctaNote">{t.cta_note}</p>
        </div>

        <div className="heroV2-contacts">
          <a
            href="https://wa.me/18329082728"
            target="_blank"
            rel="noopener noreferrer"
            className="heroV2-contact"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.882l6.19-1.453A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.384l-.36-.214-3.733.876.936-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
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