import { motion } from 'framer-motion'
import {
  FaCode, FaBolt, FaSearchengin, FaWordpress, FaComments, FaLayerGroup, FaStar,
} from 'react-icons/fa'
import { whyChooseMe } from '../data/content'

const ICONS = {
  FaCode,
  FaBolt,
  FaSearchengin,
  FaWordpress,
  FaComments,
  FaLayerGroup,
}

export default function WhyChooseMe() {
  return (
    <section className="relative section-py">
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
            Why Choose Me
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="heading-lg">
            Built different. <span className="text-accent-gradient">Built to last.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseMe.map((item, i) => {
            const Icon = ICONS[item.icon] || FaStar
            return (
              <motion.div
                key={item.id}
                className="card-premium p-7 group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Index */}
                <div className="absolute top-5 right-5 font-mono text-[10px] text-white/20">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-accent/10 border border-accent/20 mb-5">
                  <Icon size={18} className="text-accent" />
                  <div className="absolute inset-0 rounded-xl bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-3 right-3 h-px w-12 bg-gradient-to-l from-accent to-transparent" />
                  <div className="absolute bottom-3 right-3 h-12 w-px bg-gradient-to-t from-accent to-transparent" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
