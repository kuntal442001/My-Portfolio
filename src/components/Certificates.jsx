import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub, FaExternalLinkAlt, FaCertificate, FaSync, FaFilePdf, FaImage,
} from 'react-icons/fa'
import { certificatesRepoUrl, fallbackCertificates } from '../data/content'

const GITHUB_USER = 'kuntal442001'
const GITHUB_REPO = 'Cirtificates'
const GITHUB_API = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/`

const CERT_EXTENSIONS = /\.(png|jpe?g|gif|webp|svg|pdf)$/i

function isImage(name) {
  return /\.(png|jpe?g|gif|webp|svg)$/i.test(name)
}

function isPdf(name) {
  return /\.pdf$/i.test(name)
}

function deriveName(filename) {
  let name = filename.replace(/\.[^/.]+$/, '')

  // Handle the CESE(IOT) pattern
  name = name.replace(/CESE\s*\(?IOT\)?/i, 'CESE (Internet of Things)')

  // Strip the long student ID pattern
  name = name.replace(/_?KuntalBhattacharyya_\d+/i, '')
  name = name.replace(/_?Kuntal\s*Bhattacharyya/i, '')

  // Handle cisce.org patterns (Indian school board certificates)
  name = name.replace(/^cisce\.org-/, 'CISCE ')
  name = name.replace(/HSCER-(\d+)/i, 'Higher Secondary ($1)')
  name = name.replace(/SSCER-(\d+)/i, 'Secondary ($1)')

  // Strip "(2)", "(3)" duplicates
  name = name.replace(/\s*\(\d+\)\s*/g, ' ')

  // Strip WhatsApp image timestamps
  name = name.replace(/^WhatsApp Image \d{4}-\d{2}-\d{2} at \d+\.\d+\.\d+ (AM|PM)/i, 'Certificate')

  // Replace separators with spaces
  name = name.replace(/[_-]+/g, ' ')

  // Title-case
  name = name.replace(/\b\w/g, (c) => c.toUpperCase())
  name = name.replace(/\bPdf\b/gi, '')
  name = name.replace(/\s+/g, ' ').trim()

  return name || 'Certificate'
}

function guessOrganization(name) {
  const lower = name.toLowerCase()
  if (lower.includes('cese') || lower.includes('internet of things')) return 'IIT / CESE'
  if (lower.includes('cisce')) return 'CISCE Board'
  if (lower.includes('android')) return 'Android Training'
  if (lower.includes('wordpress')) return 'WordPress Training'
  if (lower.includes('web dev')) return 'Web Development'
  if (lower.includes('data analytics')) return 'Data Analytics'
  return 'Issued Certificate'
}

function guessSkills(name) {
  const lower = name.toLowerCase()
  const skills = []
  if (lower.includes('wordpress')) skills.push('WordPress')
  if (lower.includes('seo')) skills.push('SEO')
  if (lower.includes('elementor')) skills.push('Elementor')
  if (lower.includes('plugin')) skills.push('Plugins')
  if (lower.includes('javascript') || lower.includes('js')) skills.push('JavaScript')
  if (lower.includes('react')) skills.push('React')
  if (lower.includes('php')) skills.push('PHP')
  if (lower.includes('android')) skills.push('Android')
  if (lower.includes('internet of things') || lower.includes('iot')) skills.push('IoT')
  if (lower.includes('data analytics')) skills.push('Analytics')
  if (lower.includes('web dev')) skills.push('Web Development')
  if (lower.includes('higher secondary')) skills.push('Class XII')
  if (lower.includes('secondary')) skills.push('Class X')
  if (skills.length === 0) skills.push('Professional Development')
  return skills.slice(0, 3)
}

// Dedupe near-identical certificate files (e.g. "Foo (2).pdf" vs "Foo (3).pdf")
function dedupeByName(items) {
  const seen = new Map()
  items.forEach((item) => {
    const key = deriveName(item.name).toLowerCase()
    if (!seen.has(key)) {
      seen.set(key, item)
    }
  })
  return Array.from(seen.values())
}

export default function Certificates() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [usingFallback, setUsingFallback] = useState(false)

  async function fetchCertificates() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(GITHUB_API, {
        headers: { Accept: 'application/vnd.github+json' },
      })
      if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
      const items = await res.json()

      if (!Array.isArray(items)) throw new Error('Unexpected GitHub API response')

      // Filter for certificate-like files (PDFs and images)
      const certFiles = items.filter(
        (item) => item.type === 'file' && CERT_EXTENSIONS.test(item.name)
      )

      // Also check subdirectories
      const subdirs = items.filter((item) => item.type === 'dir')
      for (const dir of subdirs.slice(0, 8)) {
        try {
          const subRes = await fetch(dir.url, { headers: { Accept: 'application/vnd.github+json' } })
          if (subRes.ok) {
            const subItems = await subRes.json()
            subItems.forEach((item) => {
              if (item.type === 'file' && CERT_EXTENSIONS.test(item.name)) certFiles.push(item)
            })
          }
        } catch {
          // ignore subdirectory errors
        }
      }

      if (certFiles.length === 0) throw new Error('No certificate files found in repository')

      // Dedupe near-identical files
      const unique = dedupeByName(certFiles)

      const parsed = unique.map((file) => {
        const name = deriveName(file.name)
        return {
          id: file.sha || file.name,
          name,
          organization: guessOrganization(name),
          skills: guessSkills(name),
          fileName: file.name,
          imageUrl: isImage(file.name) ? file.download_url : null,
          pdfUrl: isPdf(file.name) ? file.download_url : null,
          url: file.html_url || certificatesRepoUrl,
          type: isPdf(file.name) ? 'pdf' : 'image',
        }
      })

      // Sort: images first, then PDFs alphabetically
      parsed.sort((a, b) => {
        if (a.type === 'image' && b.type === 'pdf') return -1
        if (a.type === 'pdf' && b.type === 'image') return 1
        return a.name.localeCompare(b.name)
      })

      setCerts(parsed)
      setUsingFallback(false)
    } catch (err) {
      console.warn('Falling back to demo certificates:', err.message)
      setCerts(fallbackCertificates.map((c) => ({ ...c, type: 'image' })))
      setUsingFallback(true)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCertificates()
  }, [])

  return (
    <section id="certificates" className="relative section-py">
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
            Certificates
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="heading-lg">
            Always <span className="text-accent-gradient">leveling up</span>.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            Auto-fetched from{' '}
            <a
              href={certificatesRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              <FaGithub size={11} /> github.com/kuntal442001/Cirtificates
            </a>
            . Add a new PDF or image to the repository and it appears here automatically.
          </p>
        </motion.div>

        {loading ? (
          <CertificateSkeleton />
        ) : (
          <>
            {usingFallback && (
              <div className="mb-8 mx-auto max-w-2xl rounded-xl glass p-4 text-center text-sm text-white/60">
                <p>
                  Showing a curated preview. Couldn&apos;t reach the live GitHub repo right now —
                  try the refresh button below.
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, i) => (
                <CertificateCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={fetchCertificates}
                className="btn-ghost cursor-pointer"
              >
                <FaSync size={11} className={loading ? 'animate-spin' : ''} />
                Refresh from GitHub
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function CertificateCard({ cert, index }) {
  return (
    <motion.div
      className="card-premium group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Preview */}
      <div className="relative h-44 overflow-hidden rounded-t-2xl bg-ink-700">
        {cert.type === 'image' && cert.imageUrl ? (
          <img
            src={cert.imageUrl}
            alt={cert.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
              if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'flex'
            }}
          />
        ) : null}

        {/* PDF / fallback placeholder */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ display: cert.type === 'image' && cert.imageUrl ? 'none' : 'flex' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-teal/10" />
          <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] border border-white/10 text-accent">
            {cert.type === 'pdf' ? <FaFilePdf size={22} /> : <FaImage size={22} />}
          </div>
          <div className="relative text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
            {cert.type === 'pdf' ? 'PDF Document' : 'Certificate'}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.15)' }}
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur-md text-accent text-[10px] font-mono uppercase tracking-wider border border-accent/30">
          <FaCertificate size={10} />
          Verified
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
          {cert.organization}
        </div>
        <h3 className="mt-1 font-display text-base font-semibold text-white tracking-tight leading-snug">
          {cert.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] border border-white/[0.08] text-white/60"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-accent hover:gap-2.5 transition-all"
        >
          View Certificate
          <FaExternalLinkAlt size={9} />
        </a>
      </div>
    </motion.div>
  )
}

function CertificateSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card-premium p-5 animate-pulse">
          <div className="h-44 rounded-xl bg-white/5" />
          <div className="mt-4 h-3 w-1/3 bg-white/5 rounded" />
          <div className="mt-2 h-4 w-2/3 bg-white/5 rounded" />
          <div className="mt-3 flex gap-1.5">
            <div className="h-4 w-12 bg-white/5 rounded" />
            <div className="h-4 w-12 bg-white/5 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
