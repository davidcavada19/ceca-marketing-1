'use client'
import { useState, useEffect } from 'react'

interface SparklineProps {
  width?: number
  height?: number
  accent: string
  seed?: number
  bars?: boolean
}

function generatePoints(seed: number): number[] {
  const out: number[] = []
  let v = 24 + seed * 7
  for (let i = 0; i < 28; i++) {
    v += Math.sin(i / 2 + seed) * 6 + (Math.random() * 8 - 3)
    v = Math.max(8, Math.min(58, v))
    out.push(v)
  }
  return out
}

export default function Sparkline({ width = 220, height = 56, accent, seed = 1, bars = false }: SparklineProps) {
  const [points, setPoints] = useState<number[]>([])

  useEffect(() => {
    setPoints(generatePoints(seed))
  }, [seed])

  if (points.length === 0) return <svg width={width} height={height} style={{ display: 'block' }} />

  const max = 64
  const stepX = width / (points.length - 1)

  if (bars) {
    const bw = (width / points.length) * 0.66
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
        {points.map((p, i) => (
          <rect key={i} x={i * stepX + (stepX - bw) / 2} y={height - (p / max) * height}
            width={bw} height={(p / max) * height} fill={accent}
            opacity={0.35 + (i / points.length) * 0.65} />
        ))}
      </svg>
    )
  }

  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${height - (p / max) * height}`).join(' ')
  const area = d + ` L ${width} ${height} L 0 ${height} Z`

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`g${seed}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#g${seed})`} />
      <path d={d} stroke={accent} strokeWidth="1.5" fill="none" />
      <circle cx={width} cy={height - (points[points.length - 1] / max) * height} r="3" fill={accent} />
    </svg>
  )
}