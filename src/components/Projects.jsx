import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative section-py">
      <div className="container-px w-full max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="section-label justify-center">
            <span className="h-px w-8 bg-accent/60" />
            Featured Projects
            <span className="h-px w-8 bg-accent/60" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-lg">
            Real work. <span className="text-accent-gradient">Real outcomes.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl mx-auto text-white/60">
            A selection of projects spanning production WordPress sites, custom web apps, and
            experiments — each one engineered with the same standard of care.
          </motion.p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      className="card-premium group text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        {/* Hover glow border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.15)' }}
        />

        {/* Tech badge */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-ink/70 backdrop-blur-md text-white/80 border border-white/10">
              {t}
            </span>
          ))}
        </div>

        {/* Live badge */}
        {project.liveUrl && (
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 backdrop-blur-md text-accent text-[10px] font-mono uppercase tracking-wider border border-accent/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Live
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-white/50">{project.tagline}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-all duration-300">
            <FaArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/60 line-clamp-3">{project.overview}</p>

        <div className="mt-5 flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-white/40">
          <span>View case study</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </motion.button>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-strong"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
      >
        {/* Hero image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-ink/60 backdrop-blur-md border border-white/10 text-white hover:bg-ink/80 transition-colors"
            aria-label="Close"
          >
            <FaTimes size={14} />
          </button>
          <div className="absolute bottom-4 left-6">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.tagline}</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Section helper */}
          {[
            { label: 'Overview', body: <p className="text-white/75 leading-relaxed">{project.overview}</p> },
            { label: 'Problem', body: <p className="text-white/75 leading-relaxed">{project.problem}</p> },
            { label: 'Solution', body: <p className="text-white/75 leading-relaxed">{project.solution}</p> },
            {
              label: 'Technologies Used',
              body: (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="pill text-xs">{t}</span>
                  ))}
                </div>
              ),
            },
            {
              label: 'Challenges',
              body: (
                <ul className="space-y-2">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-2.5 text-white/70 text-sm leading-relaxed">
                      <FaExclamationTriangle size={12} className="mt-1 text-teal shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              label: 'Results',
              body: (
                <ul className="space-y-2">
                  {project.results.map((r) => (
                    <li key={r} className="flex gap-2.5 text-white/70 text-sm leading-relaxed">
                      <FaCheckCircle size={12} className="mt-1 text-accent shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
          ].map((section) => (
            <div key={section.label}>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent/80 mb-2">
                {section.label}
              </div>
              {section.body}
            </div>
          ))}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaExternalLinkAlt size={11} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FaGithub size={12} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
