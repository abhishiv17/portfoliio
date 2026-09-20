export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link?: string;
  github?: string;
  highlight: string;
}

export interface CapabilityItem {
  name: string;
  detail: string;
}

export interface CapabilityCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: CapabilityItem[];
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Blind-Run',
    category: 'ASYMMETRIC MULTIPLAYER GAME',
    description:
      'Engineered a real-time asymmetric multiplayer heist game using React Three Fiber and Rapier physics. Architected authoritative state synchronization via Colyseus to handle complex role-based visibility and mechanics across devices.',
    stack: ['React Three Fiber', 'Rapier', 'Colyseus', 'TypeScript', 'React'],
    role: 'Game Developer & Systems Engineer',
    year: '2025',
    link: 'https://blindrun.vercel.app/',
    github: 'https://github.com/abhishiv17/Blind-Run',
    highlight: 'Real-Time 3D Multiplayer & Physics',
  },
  {
    number: '02',
    title: 'SkillSwap',
    category: 'PEER-TO-PEER PLATFORM',
    description:
      'Architected the full-stack infrastructure from scratch, designing the relational database schema and leading technical decisions. Engineered AI-powered skill matching using vector-based semantic search, built a credit escrow system, and implemented live WebSocket session notifications.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'AI/ML'],
    role: 'Lead Architect & Engineer',
    year: '2025',
    link: 'https://skill-swap-p.vercel.app/',
    github: 'https://github.com/abhishiv17/SkillSwapP',
    highlight: 'Vector Semantic Matching & Escrow Architecture',
  },
  {
    number: '03',
    title: 'Control-Grid',
    category: 'REAL-TIME MONITORING',
    description:
      'Developed a mission-critical real-time industrial monitoring dashboard under tight hackathon deadlines. Implemented low-latency WebSocket streaming pipelines, responsive high-density telemetry grids, and resilient error recovery.',
    stack: ['TypeScript', 'React', 'WebSocket', 'SASS'],
    role: 'Systems & Frontend Engineer',
    year: '2025',
    link: 'https://code-ninjas-hackzion.vercel.app/',
    github: 'https://github.com/abhishiv17/Control-Grid',
    highlight: 'Hackathon Sprint · Live Telemetry Streaming',
  },
  {
    number: '04',
    title: 'TripNest',
    category: 'HOSPITALITY PLATFORM',
    description:
      'Independently owned the full development lifecycle of a travel management platform - engineered RESTful APIs with Express, implemented JWT authentication, built a responsive booking flow with Redux, and optimized MongoDB aggregation pipelines.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    role: 'Full-Stack Developer',
    year: '2025',
    github: 'https://github.com/abhishiv17/TripNest',
    highlight: 'Full Lifecycle Ownership · High-Availability APIs',
  },
];

export const SYSTEMS_CAPABILITIES: CapabilityCategory[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'FRONTEND',
    tagline: 'Type-safe, motion-choreographed interfaces',
    description:
      'Engineering performant, responsive web applications with deep attention to Web Vitals, accessible semantic markup, and fluid 60fps micro-interactions.',
    skills: [
      { name: 'Architecture', detail: 'Next.js 16 (App Router), React 19, TypeScript' },
      { name: 'Styling & Tokens', detail: 'Tailwind CSS, Vanilla CSS Design Systems, Radix UI' },
      { name: 'State Management', detail: 'Server Components, Redux Toolkit, Context API, SWR' },
      { name: 'Core Standards', detail: 'WCAG 2.1 AA Accessibility, Responsive Grid, SEO' },
    ],
    technologies: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'BACKEND',
    tagline: 'Reliable APIs and structured data models',
    description:
      'Designing structured relational databases, clean RESTful contracts, and robust server architectures with automated validation and error boundaries.',
    skills: [
      { name: 'API Engineering', detail: 'Node.js, Express, Next.js Server Actions, REST APIs' },
      { name: 'Databases', detail: 'PostgreSQL, Supabase, MongoDB, Schema Migration' },
      { name: 'Authentication', detail: 'JWT Tokens, OAuth 2.0, Row-Level Security (RLS)' },
      { name: 'Performance', detail: 'Indexing, Query Optimization, Connection Pooling' },
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    id: 'ai-systems',
    number: '03',
    title: 'AI / SYSTEMS',
    tagline: 'Vector search, sandboxing & algorithms',
    description:
      'Integrating machine learning primitives and algorithmic precision into production software, from vector search to sandboxed code execution.',
    skills: [
      { name: 'Algorithms', detail: 'Data Structures & Algorithms, Problem Deconstruction' },
      { name: 'AI Integration', detail: 'Vector Embeddings, Semantic Search, LLM Tooling' },
      { name: 'Real-Time', detail: 'WebSockets, Event Emitters, Bidirectional Streaming' },
      { name: 'Execution', detail: 'Docker Sandboxing, Containerized Code Execution' },
    ],
    technologies: ['Java', 'Vector Search', 'WebSockets', 'Docker', 'Python'],
  },
  {
    id: 'cloud-infra',
    number: '04',
    title: 'CLOUD / INFRA',
    tagline: 'CI/CD, containerization & deployment pipelines',
    description:
      'Automating deployment pipelines, containerizing application runtimes, and monitoring performance across production cloud providers.',
    skills: [
      { name: 'Containers', detail: 'Docker, Multi-stage Builds, Container Isolation' },
      { name: 'Pipelines', detail: 'GitHub Actions, Automated Testing, Preview Deployments' },
      { name: 'Cloud Services', detail: 'AWS Educate (Generative AI), Vercel Platform' },
      { name: 'Version Control', detail: 'Git Workflows, Semantic Commits, Code Reviews' },
    ],
    technologies: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Git'],
  },
  {
    id: 'interaction',
    number: '05',
    title: 'INTERACTION',
    tagline: 'Cinematic scroll physics & spatial transitions',
    description:
      'Crafting editorial visual experiences where motion communicates hierarchy, guides attention, and makes software feel alive and tactile.',
    skills: [
      { name: 'Timeline Choreography', detail: 'GSAP ScrollTrigger, Custom Easing Curves' },
      { name: 'Spring Physics', detail: 'Motion / Framer Motion, Gesture Tracking, FLIP' },
      { name: 'Visual Masks', detail: 'SVG Masking, Clip-path reveals, Cursor Spotlights' },
      { name: 'Typography Motion', detail: 'Kinetic Type, Velocity Tickers, Split-Text' },
    ],
    technologies: ['GSAP', 'Motion', 'SVG ClipPath', 'Spring Physics', 'Custom Cursors'],
  },
];

export const PROFILE = {
  name: 'ABHISHEK MS',
  title: 'CS Student · Software Engineer',
  institution: 'Dr. Ambedkar Institute of Technology',
  location: 'Bangalore, India',
  period: '2024-2028',
  cgpa: '9.0 / 10',
  email: 'abhishiv208@gmail.com',
  github: 'https://github.com/abhishiv17',
  linkedin: 'https://www.linkedin.com/in/abhishiv17/',
  twitter: 'https://x.com/abhishiv17',
  resume: '/cv',
  internshipStatus: {
    badge: 'OPEN FOR SUMMER / FALL 2026',
    role: 'SOFTWARE ENGINEERING INTERNSHIPS',
    location: 'BANGALORE / REMOTE',
    cta: "LET'S TALK ↗",
  },
};
