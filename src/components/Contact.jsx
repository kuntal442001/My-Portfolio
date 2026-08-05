import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa'

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: 'kuntal.bhattacharyya@example.com',
    href: 'mailto:kuntal.bhattacharyya@example.com',
    icon: FaEnvelope,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9900000000',
    href: 'tel:+919900000000',
    icon: FaPhone,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/kuntal-bhattacharyya',
    href: 'https://www.linkedin.com/in/kuntal-bhattacharyya',
    icon: FaLinkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@kuntal442001',
    href: 'https://github.com/kuntal442001',
    icon: FaGithub,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative section-py">
      <div className="container-px w-full max-w-5xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-14 lg:p-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,255,136,0.15), transparent 70%), radial-gradient(ellipse 40% 40% at 100% 100%, rgba(79,209,197,0.1), transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <div className="section-label justify-center">
              <span className="h-px w-8 bg-accent/60" />
              Contact
              <span className="h-px w-8 bg-accent/60" />
            </div>

            <h2 className="heading-lg">
              Let&apos;s Build Something <span className="text-accent-gradient">Great Together</span>.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-white/60">
              Have a WordPress project that needs a real developer — not just a page builder? Let&apos;s talk.
              I reply to every serious inquiry within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="mailto:kuntal.bhattacharyya@example.com" className="btn-primary">
                <FaEnvelope size={12} />
                Start a Conversation
                <FaArrowRight size={11} />
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                <FaDownload size={12} />
                Download Resume
              </a>
            </div>

            {/* Channels grid */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {channels.map((c, i) => (
                <motion.a
                  key={c.id}
                  href={c.href}
                  target={c.id === 'email' || c.id === 'phone' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl glass hover:bg-white/[0.06] hover:border-accent/40 transition-all duration-300 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                      <c.icon size={13} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        {c.label}
                      </div>
                      <div className="text-xs font-medium text-white/80 truncate">{c.value}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
