import { motion } from 'framer-motion'
import { FaCode, FaServer, FaWordpress, FaSearchengin, FaTools } from 'react-icons/fa'
import { skillCategories } from '../data/content'

const ICONS = {
  FaCode,
  FaServer,
  FaWordpress,
  FaSearchengin,
  FaTools,
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-py">
      <div className="container-px w-full max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-accent/60" />
            Skills
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="heading-lg">
            The toolkit that <span className="text-accent-gradient">ships the work</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[cat.icon] || FaCode
            return (
              <motion.div
                key={cat.id}
                className="card-premium p-6 md:p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                    <Icon size={16} />
                  </span>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                      Category
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                      {cat.label}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
