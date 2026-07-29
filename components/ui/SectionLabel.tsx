'use client'
import React from 'react'

/* ============================================================
   SectionLabel v2 — clean eyebrow (no "//", no "SEC.XX / 06")
   Keeps the SAME API as before ({ label, num }) so every
   section that already uses it keeps compiling — `num` is
   simply ignored now, and any legacy "// " prefix in the
   label is stripped automatically.
   Optional `color` prop for dark/orange backgrounds
   (e.g. <SectionLabel label={t.free_label} color="#fff" />).
   ============================================================ */

interface SectionLabelProps {
  label: string
  num?: string          // legacy — ignored
  color?: string        // default: brand orange
  align?: 'left' | 'center'
}

export function SectionLabel({ label, color = 'var(--accent)', align = 'left' }: SectionLabelProps) {
  const clean = label.replace(/^\/\/\s*/, '').trim()
  return (
    <p
      className="reveal"
      style={{
        margin: '0 0 12px',
        fontFamily: 'var(--body)',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color,
        textAlign: align,
      }}
    >
      {clean}
    </p>
  )
}

/* H2 — unchanged behaviour, kept here because sections import
   it from this file. Renders each line as a block. */
export function H2({ lines, color }: { lines: string[]; color?: string }) {
  return (
    <h2
      className="reveal"
      style={{
        margin: 0,
        fontFamily: 'var(--display)',
        fontWeight: 800,
        fontSize: 'clamp(34px, 4.6vw, 56px)',
        lineHeight: 1.05,
        letterSpacing: '-.025em',
        color: color || 'var(--fg)',
      }}
    >
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block' }}>{line}</span>
      ))}
    </h2>
  )
}

export default SectionLabel