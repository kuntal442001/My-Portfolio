import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const sectionIds = links.map((l) => l.id)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          },
        }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-6xl flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'glass'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 pl-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-teal text-ink font-display font-bold text-sm">
              KB
              <span className="absolute inset-0 -z-10 rounded-lg bg-accent/30 blur-md" />
            </span>

            <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:inline">
              Kuntal<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-underline relative px-3 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    active === link.id
                      ? 'is-active text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Availability Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Available
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            {/* Menu */}
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              }}
              exit={{ y: -20, opacity: 0 }}
              className="relative flex h-full flex-col items-center justify-center gap-8"
            >
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1 + index * 0.05,
                    },
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`font-display text-3xl font-semibold tracking-tight transition-colors ${
                      active === link.id
                        ? 'text-accent'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}