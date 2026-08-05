export const projects = [
  {
    id: 'spotify-clone',
    name: 'Spotify Clone',
    tagline: 'A full-featured music streaming web app inspired by Spotify.',
    url: 'https://github.com/kuntal442001/Spotify-Clone',
    liveUrl: null,
    github: 'https://github.com/kuntal442001/Spotify-Clone',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A modern music streaming interface that replicates the core Spotify experience — playlist browsing, album art, player controls, and responsive layouts — built with a focus on smooth interactions and pixel-perfect UI.',
    problem:
      'Recreating the polish of a flagship consumer app like Spotify requires tight attention to micro-interactions, audio state management, and responsive design across desktop and mobile breakpoints.',
    solution:
      'Built a component-driven architecture in React with reusable player controls, playlist views, and a global player context. Used Tailwind for pixel-perfect styling that mirrors the original product while keeping the codebase lean.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5 Audio', 'Vite'],
    challenges: [
      'Synchronizing audio playback state across multiple components without prop drilling.',
      'Handling responsive breakpoints while keeping the dense Spotify-style layout intact.',
      'Building reusable, accessible player controls (play / pause / seek / volume).',
    ],
    results: [
      'Pixel-faithful Spotify UI reproduction with smooth playback state.',
      'Fully responsive across mobile, tablet, and desktop breakpoints.',
      'Clean component architecture that is easy to extend with new features.',
    ],
  },
  {
    id: 'palini',
    name: 'Palini.in',
    tagline: 'Production WordPress website built for a real business.',
    url: 'https://www.palini.in/',
    liveUrl: 'https://www.palini.in/',
    github: null,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A live, business-critical WordPress deployment for Palini — built with Elementor, custom post types, and ACF for fully editable content blocks. Optimized for Core Web Vitals and search visibility.',
    problem:
      'The client needed a fast, SEO-friendly WordPress site that non-technical team members could update themselves — without sacrificing performance, branding control, or technical SEO structure.',
    solution:
      'Architected a custom WordPress theme layer with Elementor templates, ACF flexible content blocks, and a tailored CPT for the client\u2019s services. Implemented schema markup, image lazy-loading, and a clean permalink structure.',
    technologies: ['WordPress', 'Elementor', 'ACF', 'Custom Post Types', 'Technical SEO', 'PHP'],
    challenges: [
      'Balancing Elementor\u2019s editor flexibility with frontend performance.',
      'Building ACF blocks that content editors could reuse without breaking layout.',
      'Hitting Core Web Vitals thresholds on a shared hosting environment.',
    ],
    results: [
      'Production site live at palini.in with measurable Lighthouse performance gains.',
      'Editable content blocks empowering the client\u2019s non-technical team.',
      'Clean technical SEO foundation with schema, sitemaps, and optimized metadata.',
    ],
  },
  {
    id: 'spincare',
    name: 'SpinCare.in',
    tagline: 'Healthcare-focused WordPress site with conversion-first UX.',
    url: 'https://spincare.in/',
    liveUrl: 'https://spicare.in/',
    github: null,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A live WordPress build for SpinCare — a healthcare brand that needed an authoritative, fast, and trustworthy web presence with strong on-page SEO and clear conversion paths.',
    problem:
      'Healthcare audiences demand trust signals, fast load times, and accessible content. The client also needed structured service pages and schema for local search visibility.',
    solution:
      'Built a custom WordPress architecture with Elementor Pro templates, ACF-driven service pages, breadcrumbs, FAQ schema, and a performance-first asset pipeline. Optimized images, deferred non-critical JS, and cleaned up render-blocking resources.',
    technologies: ['WordPress', 'Elementor Pro', 'ACF', 'On-Page SEO', 'Schema', 'Performance Optimization'],
    challenges: [
      'Meeting healthcare accessibility and trust guidelines without slowing the site.',
      'Structuring service pages for both users and search engines.',
      'Reducing Elementor\u2019s default asset bloat to hit Core Web Vitals.',
    ],
    results: [
      'Live, fast-loading healthcare site at spincare.in.',
      'Improved on-page SEO with schema, breadcrumbs, and optimized metadata.',
      'Conversion-friendly layout with clear calls-to-action across all service pages.',
    ],
  },
  {
    id: 'language-translator',
    name: 'Language Translator',
    tagline: 'Real-time browser-based translation app.',
    url: 'http://github.com/kuntal442001/Language-Translator',
    liveUrl: null,
    github: 'http://github.com/kuntal442001/Language-Translator',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A lightweight web app that translates text between multiple languages in real time, with a clean minimalist interface and instant response feedback.',
    problem:
      'Existing translator UIs often feel cluttered and slow. The goal was a focused, fast, and accessible translation interface that works on any device.',
    solution:
      'Built a responsive React frontend with debounced input, language swap, and a clean state container. Integrated a public translation API and added copy-to-clipboard, clear, and history features.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Vite'],
    challenges: [
      'Debouncing API calls to avoid spamming the endpoint while typing.',
      'Designing a layout that stays calm even with long translated outputs.',
      'Handling language lists and swap interactions cleanly.',
    ],
    results: [
      'Fast, distraction-free translation experience.',
      'Responsive across mobile, tablet, and desktop.',
      'Reusable API layer that can be swapped to a different provider.',
    ],
  },
  {
    id: 'voice-assistant',
    name: 'Voice Assistant',
    tagline: 'Browser-based voice assistant powered by the Web Speech API.',
    url: 'https://github.com/kuntal442001/Voice-Assistant',
    liveUrl: null,
    github: 'https://github.com/kuntal442001/Voice-Assistant',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A web-based voice assistant that listens to spoken commands, processes them in the browser, and responds with synthesized speech — showcasing modern browser capabilities without any backend dependency.',
    problem:
      'Building a voice assistant that works reliably across browsers, with low latency and a clear visual feedback loop for the user.',
    solution:
      'Used the Web Speech API for both speech recognition and synthesis. Designed a state machine for listening, processing, and speaking states, with a clean animated UI that responds to each phase.',
    technologies: ['React', 'JavaScript', 'Web Speech API', 'Tailwind CSS', 'Vite'],
    challenges: [
      'Cross-browser inconsistencies in speech recognition.',
      'Designing state transitions that feel natural for voice interactions.',
      'Handling microphone permissions and errors gracefully.',
    ],
    results: [
      'Fully client-side voice assistant with no backend cost.',
      'Clear animated feedback for listening, processing, and speaking.',
      'Reusable speech hook that can be dropped into other projects.',
    ],
  },
]

export const featuredProjects = projects
