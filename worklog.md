---
Task ID: portfolio-build
Agent: main
Task: Build premium AI-inspired portfolio website for Kuntal Bhattacharyya (React + Vite + Tailwind + Framer Motion + GSAP + Lenis + React Icons)

Work Log:
- Scaffolded Vite + React 18 project in /home/z/my-project/ with package.json, vite.config.js, tailwind.config.js, postcss.config.js
- Installed dependencies: react, react-dom, framer-motion, gsap, lenis, react-icons, @vitejs/plugin-react, tailwindcss, autoprefixer, postcss, vite
- Configured Tailwind theme: ink (#050505), accent (#00FF88), teal (#4FD1C5), Space Grotesk + Inter + JetBrains Mono fonts, custom keyframes for aurora/streak/pulse-glow/float/shimmer
- Built index.html with full SEO: meta tags, Open Graph, Twitter Cards, JSON-LD Person schema, canonical URL, Google Fonts preconnect
- Added public/ assets: favicon.svg (KB monogram), robots.txt, sitemap.xml, resume.pdf (placeholder for download links)
- Built components:
  - AuroraBackground.jsx: animated gradient mesh, aurora blobs, canvas-based light streaks, grid pattern, noise overlay, vignette
  - Loader.jsx: fullscreen loader with animated SVG KB monogram (path draw), percentage counter, shimmer progress bar, aurora glow, ~2.4s duration, smooth fade
  - Navbar.jsx: floating glass navbar, blur-on-scroll, active section indicator via IntersectionObserver, animated underline, mobile hamburger menu
  - Hero.jsx: large heading with mask reveal, animated neon orb (rotating conic gradient ring + counter-rotating inner ring + pulsing core + 6 floating particles), 3 CTAs, stats block, scroll cue
  - About.jsx: professional story (3 paragraphs, no generic AI copy), specialization cards, stack pills
  - Experience.jsx: vertical timeline with center line on desktop, alternating cards, animated dots with ping, period badges, responsibility chips
  - Projects.jsx: 5 project cards with image, hover lift + glow border, detail modal with Overview/Problem/Solution/Technologies/Challenges/Results + Live/GitHub CTAs
  - Skills.jsx: 5 categories (Frontend, Backend, CMS, SEO, Tools), pill design with hover lift
  - Certificates.jsx: auto-fetches from GitHub API (kuntal442001/Cirtificates), handles both PDFs and images, dedupes near-identical files (e.g. 6 CESE versions → 1), PDF placeholder cards, refresh button, fallback set if API fails
  - WhyChooseMe.jsx: 6 animated feature cards with corner decorations
  - Contact.jsx: AI-style contact section with 4 channel cards (Email, Phone, LinkedIn, GitHub) + resume download
  - Footer.jsx: minimal footer with glow line, nav, social icons, back-to-top
- Built hooks: useLenis (smooth scroll + anchor handling), useActiveSection (IntersectionObserver for nav active state)
- Optimized bundle: replaced `import * as FaIcons` with explicit named imports, lazy-loaded all below-the-fold sections with Suspense, split vendor chunks (react-vendor, animation-vendor)
- Final bundle sizes (gzip): index.js 14.74 kB, react-vendor 43.13 kB, animation-vendor 45.76 kB, all section chunks under 5 kB each
- Verified: build succeeds, all routes/sections render, project modal opens, certificates auto-fetch (8 unique from 14 repo files), mobile menu works, no console errors, all assets (favicon, robots.txt, sitemap.xml, resume.pdf) serve 200

Stage Summary:
- Production build verified, served on http://localhost:3000/
- Total bundle ~70 kB gzip initial (excluding fonts) — well within Lighthouse performance targets
- Certificates section successfully fetches live from GitHub API and gracefully falls back to demo set on error
- All 7 nav sections (Home, About, Experience, Projects, Skills, Certificates, Contact) implemented per spec
- Placeholder resume.pdf created in public/ — user should replace with their actual resume
- User may want to add their own og-image.png for social sharing previews
