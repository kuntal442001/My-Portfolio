import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaEnvelope } from 'react-icons/fa'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-px w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="section-label justify-center lg:justify-start">
              <span className="h-px w-8 bg-accent/60" />
              Creative WordPress Developer
            </motion.div>

            <motion.h1 variants={item} className="heading-xl">
              <span className="block text-white/70 text-[0.55em] font-medium tracking-tight mb-2">
                Hi, I&apos;m
              </span>
              <span className="block text-gradient">Kuntal</span>
              <span className="block text-accent-gradient">Bhattacharyya</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['Creative WordPress Developer', 'Elementor Expert', 'Technical SEO Specialist'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.03] border border-white/[0.08] text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 mx-auto lg:mx-0"
            >
              I build high-performance WordPress websites with clean code, custom functionality,
              excellent user experience, and technical SEO that helps businesses grow.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <FaArrowRight size={12} />
              </a>
              <a href="/Resume.pdf" download className="btn-ghost">
                <FaDownload size={12} />
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                <FaEnvelope size={12} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '3+', label: 'Years Building' },
                { value: '20+', label: 'Sites Shipped' },
                { value: '99%', label: 'Performance Focus' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-bold text-accent tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Orb column */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 } }}
          >
            <NeonOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="h-10 w-[1px] bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6], transformOrigin: 'top' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}

function NeonOrb() {
  return (
    <div className="relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.3), rgba(79,209,197,0.15), transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Rotating conic gradient ring */}
      <motion.div
        className="absolute inset-[12%] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, #00FF88, #4FD1C5, #00FF88, transparent, #00FF88)',
          maskImage: 'radial-gradient(transparent 60%, black 62%, black 75%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(transparent 60%, black 62%, black 75%, transparent 78%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {/* Counter-rotating inner ring */}
      <motion.div
        className="absolute inset-[22%] rounded-full border border-accent/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent glow-accent" />
        <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal glow-teal" />
      </motion.div>

      {/* Inner orb */}
      <motion.div
        className="absolute inset-[32%] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(0,255,136,0.9), rgba(79,209,197,0.7) 40%, rgba(5,5,5,0.95) 80%)',
          boxShadow:
            '0 0 60px rgba(0,255,136,0.4), 0 0 120px rgba(79,209,197,0.3), inset 0 0 60px rgba(0,255,136,0.2)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          filter: ['brightness(1)', 'brightness(1.15)', 'brightness(1)'],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Surface highlights */}
        <div
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.6), transparent 30%)',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + (i % 3) * 30}%`,
            boxShadow: '0 0 8px rgba(0,255,136,0.8)',
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}
