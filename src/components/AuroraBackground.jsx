import { useEffect, useRef } from 'react'

/**
 * Premium animated background:
 * - Neon aurora lighting (slow morphing gradient mesh)
 * - Soft radial glow
 * - Moving light streaks
 * - Slight noise texture
 * - Dark vignette
 *
 * Everything is subtle, never distracts from content.
 */
export default function AuroraBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let rafId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', handleResize)

    // Light streaks
    const streaks = Array.from({ length: 5 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.3 + Math.random() * 0.6,
      length: 200 + Math.random() * 300,
      thickness: 1 + Math.random() * 1.5,
      opacity: 0.05 + Math.random() * 0.08,
      hue: i % 2 === 0 ? '0, 255, 136' : '79, 209, 197',
    }))

    let t = 0
    function render() {
      t += 0.005
      ctx.clearRect(0, 0, width, height)

      // Streaks
      streaks.forEach((s) => {
        s.x += s.speed
        if (s.x > width + s.length) s.x = -s.length

        const grad = ctx.createLinearGradient(s.x - s.length, s.y, s.x, s.y)
        grad.addColorStop(0, `rgba(${s.hue}, 0)`)
        grad.addColorStop(0.5, `rgba(${s.hue}, ${s.opacity})`)
        grad.addColorStop(1, `rgba(${s.hue}, 0)`)

        ctx.strokeStyle = grad
        ctx.lineWidth = s.thickness
        ctx.beginPath()
        ctx.moveTo(s.x - s.length, s.y)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
      })

      rafId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink pointer-events-none" aria-hidden="true">
      {/* Base radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,255,136,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 30%, rgba(79,209,197,0.06), transparent 60%), radial-gradient(ellipse 70% 60% at 0% 80%, rgba(0,255,136,0.05), transparent 60%)',
        }}
      />

      {/* Aurora blobs */}
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: '50vw',
          height: '50vw',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.35), transparent 70%)',
        }}
      />
      <div
        className="aurora-blob animate-aurora-fast"
        style={{
          width: '40vw',
          height: '40vw',
          top: '30%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(79,209,197,0.28), transparent 70%)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="aurora-blob animate-aurora-slow"
        style={{
          width: '45vw',
          height: '45vw',
          bottom: '-15%',
          left: '20%',
          background: 'radial-gradient(circle, rgba(0,255,136,0.18), transparent 70%)',
          animationDelay: '-7s',
        }}
      />

      {/* Light streaks canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Vignette */}
      <div className="vignette" />
    </div>
  )
}
