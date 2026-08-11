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
    tagline: 'Production Wordpress website built for a real business.',
    url: 'https://www.palini.in/',
    liveUrl: 'https://www.palini.in/',
    github: null,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A live, business-critical Wordpress deployment for Palini — built with Elementor, custom post types, and ACF for fully editable content blocks. Optimized for Core Web Vitals and search visibility.',
    problem:
      'The client needed a fast, SEO-friendly Wordpress site that non-technical team members could update themselves — without sacrificing performance, branding control, or technical SEO structure.',
    solution:
      'Architected a custom Wordpress theme layer with Elementor templates, ACF flexible content blocks, and a tailored CPT for the client\u2019s services. Implemented schema markup, image lazy-loading, and a clean permalink structure.',
    technologies: ['Wordpress', 'Elementor', 'ACF', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
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
    tagline: 'Laundry Business Wordpress site with conversion-first UX.',
    url: 'https://spincare.in/',
    liveUrl: 'https://spicare.in/',
    github: null,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
    overview:
      'A live Wordpress build for SpinCare — a healthcare brand that needed an authoritative, fast, and trustworthy web presence with strong on-page SEO and clear conversion paths.',
    problem:
      'Healthcare audiences demand trust signals, fast load times, and accessible content. The client also needed structured service pages and schema for local search visibility.',
    solution:
      'Built a custom Wordpress architecture with Elementor Pro templates, ACF-driven service pages, breadcrumbs, FAQ schema, and a performance-first asset pipeline. Optimized images, deferred non-critical JS, and cleaned up render-blocking resources.',
    technologies: ['Wordpress', 'Elementor Pro', 'ACF', 'On-Page SEO', 'Schema', 'Performance Optimization'],
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
    id: 'flask-auth-app',

    name: 'Flask Authentication System',

    tagline: 'Secure user authentication system built with Flask.',

    url: 'https://github.com/kuntal442001/Flask-Auth-App',

    liveUrl: null,

    github: 'https://github.com/kuntal442001/Flask-Auth-App',

    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',

    overview:
    'A full-stack authentication web application built with Flask, providing user registration, secure login, protected dashboard access, password management, and session-based authentication.',

    problem:
    'Authentication systems require careful handling of user credentials, sessions, validation, and repeated login attempts. The goal was to build a simple but structured authentication flow with proper database integration and basic security protections.',

    solution:
    'Built a Flask-based authentication system using Flask-SQLAlchemy and Flask-Login, with SQLite for persistent user data. Implemented registration and login validation, securely hashed passwords, protected routes, persistent login sessions, password changes, logout functionality, database health checks, and request rate limiting.',

    technologies: [
    'Python',
    'Flask',
    'Flask-SQLAlchemy',
    'Flask-Login',
    'Flask-Limiter',
    'SQLite',
    'Jinja2',
    'HTML',
    'CSS'
    ],

    challenges: [
    'Implementing secure password hashing and verification instead of storing plain-text passwords.',
    'Managing authenticated sessions and protecting dashboard and password-management routes.',
    'Adding validation for usernames, emails, passwords, and duplicate accounts.',
    'Handling repeated login and registration attempts with request rate limiting.',
    'Keeping authentication, database operations, validation, and error handling organized within the Flask application.'
    ],

    results: [
    'Complete registration and login workflow with persistent user accounts.',
    'Protected dashboard accessible only to authenticated users.',
    'Secure password storage using Werkzeug password hashing.',
    'Password change and logout functionality.',
    'Rate limiting to help prevent excessive authentication requests.',
    'SQLite-backed user management with SQLAlchemy.'
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
    technologies: ['python'],
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
    technologies: ['Python', 'Web Speech API'],
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
