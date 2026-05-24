export function fmt(n: number) {
  return n.toLocaleString('en-US')
}

export function smoothScrollTo(idOrEl: string | HTMLElement | null, offset = 84) {
  const el = typeof idOrEl === 'string' ? document.getElementById(idOrEl) : idOrEl
  if (!el) return
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset
  const startY = window.scrollY
  const dist = targetY - startY
  if (Math.abs(dist) < 2) return
  const duration = Math.min(900, 350 + Math.abs(dist) * 0.4)
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    window.scrollTo(0, startY + dist * eased)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
