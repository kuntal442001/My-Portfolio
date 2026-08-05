import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AuroraBackground from './components/AuroraBackground'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useLenis } from './hooks/useLenis'

// Lazy-load below-the-fold sections for better initial load performance
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Certificates = lazy(() => import('./components/Certificates'))
const WhyChooseMe = lazy(() => import('./components/WhyChooseMe'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="h-1 w-12 rounded-full bg-accent/40 animate-pulse" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  // Disable smooth scroll during loader
  useLenis(!loading)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AuroraBackground />

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <WhyChooseMe />
          <Contact />
          <Footer />
        </Suspense>
      </motion.main>
    </>
  )
}
