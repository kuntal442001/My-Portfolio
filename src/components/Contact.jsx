import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowRight,
  FaWhatsapp,
  FaTimes,
} from 'react-icons/fa'

const WHATSAPP_NUMBER = '919007216627' // country code + number, no + or spaces

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: 'kuntal442001@gmail.com',
    href: 'mailto:kuntal442001@gmail.com',
    icon: FaEnvelope,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 9007216627',
    href: 'tel:+91 9007216627',
    icon: FaPhone,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/kuntal-bhattacharyya',
    href: 'https://www.linkedin.com/in/kuntal-b-668b73222/',
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

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ phone: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const buildWhatsAppText = () => {
    const lines = [
      'Hi Kuntal, I would like to get in touch.',
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppText()}`

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-md rounded-2xl glass-strong p-6 md:p-8"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          <FaTimes size={13} />
        </button>

        <div className="section-label">
          <span className="h-px w-6 bg-accent/60" />
          Get In Touch
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
          Tell me about your project
        </h3>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-phone" className="text-[10px] font-mono uppercase tracking-wider text-white/40">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className="mt-1.5 w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white/90 placeholder-white/30 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="text-[10px] font-mono uppercase tracking-wider text-white/40">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white/90 placeholder-white/30 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="text-[10px] font-mono uppercase tracking-wider text-white/40">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="how can i help you"
              className="mt-1.5 w-full resize-none rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white/90 placeholder-white/30 outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-colors"
            />
          </div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 w-full justify-center"
        >
          <FaWhatsapp size={14} />
          Continue on WhatsApp
          <FaArrowRight size={11} />
        </a>

        <p className="mt-3 text-center text-[11px] text-white/35">
          Opens WhatsApp with your details pre-filled &mdash; nothing is sent until you hit send there.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                <FaEnvelope size={12} />
                Start a Conversation
                <FaArrowRight size={11} />
              </button>
              <a href="/Resume.pdf" download className="btn-ghost">
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

      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}