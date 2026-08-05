import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let rafId
    const start = performance.now()
    const duration = 2400 // ~2.4s

    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      // Ease-out
      const eased = 1 - Math.pow(1 - pct / 100, 2)
      setProgress(Math.round(eased * 100))

      if (pct < 100) {
        rafId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setDone(true)
          setTimeout(() => onComplete?.(), 700)
        }, 300)
      }
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Aurora glow behind logo */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
              style={{
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0,255,136,0.25), rgba(79,209,197,0.12), transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* KB Monogram */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <defs>
                  <linearGradient id="kbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00FF88" />
                    <stop offset="100%" stopColor="#4FD1C5" />
                  </linearGradient>
                </defs>
                <motion.rect
                  x="6"
                  y="6"
                  width="108"
                  height="108"
                  rx="24"
                  stroke="url(#kbGrad)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, transition: { duration: 1.6, ease: 'easeInOut' } }}
                />
                <motion.text
                  x="60"
                  y="80"
                  textAnchor="middle"
                  fontFamily="Space Grotesk, sans-serif"
                  fontSize="56"
                  fontWeight="700"
                  fill="url(#kbGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.4 } }}
                >
                  KB
                </motion.text>
              </svg>
              <div
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(0,255,136,0.3), transparent 60%)',
                }}
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
            >
              <div className="font-display text-sm tracking-[0.3em] text-white/80 uppercase">
                Kuntal Bhattacharyya
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-accent/70 uppercase">
                WordPress Engineer · SEO Specialist
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-10 w-[280px]">
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full shimmer-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                <span>Loading</span>
                <span className="text-accent tabular-nums">{progress.toString().padStart(3, '0')}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
