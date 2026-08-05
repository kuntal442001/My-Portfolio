import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCircle } from 'react-icons/fa'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="relative section-py">
      <div className="container-px w-full max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-accent/60" />
            Experience
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="heading-lg">
            A track record of <span className="text-accent-gradient">shipping</span>.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] timeline-line" />

          {experience.map((job, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={job.id}
                className={`relative mb-16 last:mb-0 md:grid md:grid-cols-2 md:gap-12 ${
                  isLeft ? '' : 'md:[direction:rtl]'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                  <motion.span
                    className="block h-4 w-4 rounded-full bg-accent glow-accent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                  />
                  <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                </div>

                {/* Content card */}
                <div
                  className={`pl-12 md:pl-0 md:[direction:ltr] ${
                    isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <div className="card-premium p-6 md:p-8 group">
                    {/* Period badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                        job.current
                          ? 'bg-accent/10 text-accent border border-accent/30'
                          : 'bg-white/5 text-white/60 border border-white/10'
                      }`}
                    >
                      {job.current && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                      )}
                      {job.period}
                    </div>

                    <h3 className="mt-4 font-display text-xl md:text-2xl font-semibold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <div className={`mt-1 flex items-center gap-2 text-accent ${isLeft ? 'md:justify-end' : ''}`}>
                      <FaBriefcase size={11} />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className={`mt-1 flex items-center gap-1.5 text-xs text-white/40 ${isLeft ? 'md:justify-end' : ''}`}>
                      <FaMapMarkerAlt size={10} />
                      {job.location}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/60">{job.description}</p>

                    {/* Responsibilities */}
                    <ul className={`mt-5 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      {job.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.03] border border-white/[0.08] text-white/70"
                        >
                          <FaCircle size={4} className="text-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
