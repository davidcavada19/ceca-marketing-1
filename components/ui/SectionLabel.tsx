interface SectionLabelProps { label: string; num: string }
export function SectionLabel({ label, num }: SectionLabelProps) {
  return (
    <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--line)', marginBottom: 32, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
      <span><span style={{ color: 'var(--accent)', marginRight: 8 }}>●</span>{label}</span>
      <span>{num}</span>
    </div>
  )
}

interface H2Props { lines: string[] }
export function H2({ lines }: H2Props) {
  return (
    <h2 className="reveal" style={{ margin: 0, fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 0.96, letterSpacing: '-.03em', color: 'var(--fg)' }}>
      {lines.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
    </h2>
  )
}
