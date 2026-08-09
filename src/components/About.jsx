import { motion } from 'framer-motion'
import { FaWordpress, FaCode, FaSearchengin, FaShopify } from 'react-icons/fa'

const specializations = [
  { icon: FaWordpress, label: 'WordPress Development' },
  { icon: FaCode, label: 'Custom Plugins & CPT' },
  { icon: FaSearchengin, label: 'Technical SEO' },
  { icon: FaShopify, label: 'Shopify & WooCommerce' },
]

const stack = [
  'WordPress', 'Elementor', 'Custom WordPress Solutions', 'Custom Plugins',
  'Custom Post Types (CPT)', 'Advanced Custom Fields (ACF)', 'WooCommerce', 'Shopify',
  'Technical SEO', 'On-Page SEO', 'Performance Optimization', 'Responsive Design',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" className="relative section-py">
      <div className="container-px w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - heading */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">
              <span className="h-px w-8 bg-accent/60" />
              About Me
            </div>
            <h2 className="heading-lg">
              I build Websites that <span className="text-accent-gradient">feel custom</span> — not templated.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {specializations.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl glass p-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                    <s.icon size={14} />
                  </span>
                  <span className="text-[13px] font-medium text-white/80">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - story */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-white/75">
              I&apos;m a Website developer who writes code, not just configures page builders. Every
              project I take on starts with a question: <span className="text-white">what does this site need to do for the business?</span> Then I
              architect it from the ground up — custom post types, ACF blocks, plugin logic, and a frontend
              that loads fast and ranks well.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-white/60">
              My day-to-day work spans custom Website builds, Elementor design systems, WooCommerce and
              Shopify storefronts, and the technical SEO layer that ties it all together — schema markup,
              Core Web Vitals, clean permalinks, and on-page optimization. I treat SEO as part of the
              architecture, not a checklist item bolted on at the end.
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-white/60">
              What sets me apart is that I&apos;m comfortable in the code. When a page builder hits its
              limit, I write the shortcode, the custom plugin, or the ACF block that gets the project
              unblocked. That means clients get a true CMS — flexible, editable, and scalable — instead of
              a fragile template that breaks the moment they try to extend it.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-3">
                Specializations
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
