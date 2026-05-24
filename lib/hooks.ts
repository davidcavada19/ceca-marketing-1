'use client'
import { useState, useEffect, useRef, useMemo } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0, rootMargin: '0px 0px -5% 0px' }
    )
    els.forEach((el) => io.observe(el))
    const t = setTimeout(() => els.forEach((el) => el.classList.add('in')), 1200)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
}

export function useLiveTicker(initial: number, step: [number, number] = [1, 3], every = 1100) {
  const [n, setN] = useState(initial)
  useEffect(() => {
    const id = setInterval(
      () => setN((v) => v + Math.floor(step[0] + Math.random() * (step[1] - step[0] + 1))),
      every
    )
    return () => clearInterval(id)
  }, [])
  return n
}

export function useCountUp(target: number, duration = 1400): [number, React.RefObject<HTMLDivElement | null>] {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(Math.floor(eased * target))
              if (p < 1) requestAnimationFrame(step)
              else setVal(target)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])
  return [val, ref]
}

export function useClock() {
  const [t, setT] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const hh = String((t.getUTCHours() + 19) % 24).padStart(2, '0')
  const mm = String(t.getMinutes()).padStart(2, '0')
  const ss = String(t.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

export function useSparklinePoints(seed: number) {
  return useMemo(() => {
    const out: number[] = []
    let v = 24 + seed * 7
    for (let i = 0; i < 28; i++) {
      v += Math.sin(i / 2 + seed) * 6 + (Math.random() * 8 - 3)
      v = Math.max(8, Math.min(58, v))
      out.push(v)
    }
    return out
  }, [seed])
}
