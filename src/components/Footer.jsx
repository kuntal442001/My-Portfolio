import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa'

const socials = [
  { id: 'linkedin', href: 'https://www.linkedin.com/in/kuntal-b-668b73222/', icon: FaLinkedin, label: 'LinkedIn' },
  { id: 'github', href: 'https://github.com/kuntal442001', icon: FaGithub, label: 'GitHub' },
]

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-px w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-teal text-ink font-display font-bold">
                KB
              </span>
              <span className="font-display text-base font-semibold text-white">
                Kuntal Bhattacharyya
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Creative WordPress Developer & Technical SEO Specialist. Building fast, custom, scalable
              websites that help businesses grow.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
              Connect
            </div>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-accent hover:text-ink hover:border-accent transition-all duration-300"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
            <a
              href="mailto:kuntal.bhattacharyya@example.com"
              className="mt-4 inline-block text-sm text-white/60 hover:text-accent transition-colors"
            >
              kuntal442001@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <div className="text-xs text-white/40 flex items-center gap-1.5">
            © {new Date().getFullYear()} Kuntal Bhattacharyya. Crafted with
            <FaHeart size={10} className="text-accent" />
            and clean code.
          </div>

          <motion.a
            href="#home"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 hover:bg-accent hover:text-ink hover:border-accent transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            Back To Top
            <FaArrowUp size={10} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
