"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ChevronRight,
  User,
  Code2,
  Briefcase,
  Send,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Users,
  Database,
  Globe,
  Download,
  Award,
} from "lucide-react"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate email submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setContactForm({ name: "", email: "", message: "" })
    alert("Thank you for reaching out! I have received your message and will respond shortly.")
  }

  const sidebarSections = [
    {
      title: "Navigation",
      id: "nav",
      icon: Globe,
      items: [
        { title: "Personal Overview", id: "overview" },
        { title: "Technical Expertise", id: "skills" },
      ],
    },
    {
      title: "Portfolio",
      id: "portfolio",
      icon: Briefcase,
      items: [
        { title: "SkillSwap (Lead Architect)", id: "skillswap" },
        { title: "Control-Grid", id: "control-grid" },
        { title: "TripNest", id: "tripnest" },
        { title: "Simon-Says", id: "simon-says" },
        { title: "Cerebyte (Working Project)", id: "cerebyte" },
      ],
    },
    {
      title: "Career",
      id: "career",
      icon: Award,
      items: [
        { title: "Professional Journey", id: "experience" },
      ],
    },
    {
      title: "Communication",
      id: "comms",
      icon: Send,
      items: [
        { title: "Contact Information", id: "contact" },
      ],
    },
  ]

  const projects = [
    {
      id: "skillswap",
      title: "SkillSwap",
      role: "Lead Architect",
      description:
        "Architected the entire full-stack infrastructure from scratch, designing the database schema and leading all major technical decisions. Engineered AI-powered skill matching using vector-based semantic search, built a secure credit escrow system, and implemented real-time session scheduling with live WebSocket notifications.",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "AI/ML"],
      link: "https://github.com/abhishiv17/SkillSwap",
      mvpLink: "https://code-carnage.vercel.app/",
    },
    {
      id: "control-grid",
      title: "Control-Grid",
      role: "Hackathon Project",
      description: "Developed the entire real-time monitoring dashboard under tight hackathon deadlines. Implemented live WebSocket data streaming pipelines, engineered responsive grid-based layouts for mission-critical system oversight, and coordinated with teammates to deliver a polished product within the time constraint.",
      tech: ["TypeScript", "React", "WebSocket", "SASS"],
      link: "https://github.com/abhishiv17/Control-Grid",
      mvpLink: "https://code-ninjas-hackzion.vercel.app/",
    },
    {
      id: "tripnest",
      title: "TripNest",
      role: "Full-Stack Developer",
      description:
        "Independently owned the full development lifecycle — engineered RESTful APIs with Express, implemented secure user authentication, built a responsive booking flow with Redux state management, and optimized MongoDB queries for high-availability performance.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB", "Redux"],
      link: "https://github.com/abhishiv17/TripNest",
    },
    {
      id: "simon-says",
      title: "Simon-Says",
      role: "Frontend Specialist",
      description:
        "Solely designed and developed a modernized memory game — crafted high-fidelity CSS animations, implemented low-latency DOM event handling for smooth interactions, and ensured a fully responsive layout across all device viewports.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      link: "https://github.com/abhishiv17/Simon-Says",
    },
    {
      id: "cerebyte",
      title: "Cerebyte",
      role: "Working Project",
      description:
        "Leading the design and development of an AI-integrated ed-tech platform. Building a sandboxed code execution engine with Docker, implementing interactive data structure visualizations, and integrating an AI-driven mentor for personalized student feedback.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "https://github.com/abhishiv17/Cerebyte",
    },
  ]

  const skills = [
    { category: "Programming Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "C"] },
    { category: "Frontend Engineering", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI"] },
    { category: "Backend & Databases", items: ["Node.js", "Express", "PostgreSQL", "Supabase", "MongoDB", "Redis"] },
    { category: "DevOps & Infrastructure", items: ["Docker", "Git/GitHub", "Postman", "Linux", "CI/CD Pipelines"] },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Hero Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
                <div className="relative group/image">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover/image:opacity-20 transition duration-500"></div>
                  <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl ring-4 ring-zinc-50 dark:ring-zinc-800 flex-shrink-0 relative z-10">
                    <img
                      src="/172057431.jpg"
                      alt="Abhishek M Shivanagoudar"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold tracking-widest uppercase">
                    Available for New Projects
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    Abhishek M Shivanagoudar
                  </h1>
                  <p className="text-lg sm:text-2xl text-zinc-600 dark:text-zinc-300 font-medium tracking-tight">
                    Full-Stack Software Developer
                  </p>
                  <p className="text-sm sm:text-lg text-zinc-500 dark:text-zinc-500 max-w-2xl leading-relaxed font-normal">
                    Full-stack developer passionate about building scalable web applications, solving complex problems, and writing clean, maintainable code.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-5 pt-4">
                    <button 
                      onClick={() => setActiveSection("contact")}
                      className="px-5 sm:px-8 py-3 sm:py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:opacity-90 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                    >
                      Establish Contact
                    </button>
                    <a href="/cv" className="px-5 sm:px-8 py-3 sm:py-4 border border-zinc-200 dark:border-zinc-800 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Résumé
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Academics */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all group-hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">Education</p>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">B.E. in Computer Science</h3>
                    </div>
                  </div>
                  <div className="space-y-3 pl-0 sm:pl-16">
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-semibold">
                      Dr. Ambedkar Institute of Technology, Bengaluru
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        2024 – 2028
                      </span>
                      <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs font-bold text-blue-600 dark:text-blue-400">
                        CGPA: 9.0
                      </span>
                      <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        3rd Semester
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all group-hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">Leadership</p>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Technical Lead</h3>
                    </div>
                  </div>
                  <div className="space-y-3 pl-0 sm:pl-16">
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-semibold">
                      GeeksforGeeks Campus Club, Dr. AIT
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Organizing coding workshops, mentoring peers in DSA & competitive programming, and driving open-source contributions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "skills":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">Technical Expertise</h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">A rigorous overview of the languages, frameworks, and tools that form my core engineering capability.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400 flex items-center gap-3">
                    <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="px-5 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-700 dark:text-zinc-300 text-sm font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-default hover:shadow-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "skillswap":
      case "cerebyte":
      case "tripnest":
      case "control-grid":
      case "simon-says":
        const project = projects.find((p) => p.id === activeSection)
        if (!project) return null
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 dark:border-zinc-800 pb-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-md">
                  {project.role}
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tighter">{project.title}</h1>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
                >
                  <Github className="w-5 h-5" /> View Project Source
                </a>
                {project.mvpLink && (
                  <a 
                    href={project.mvpLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md active:scale-95"
                  >
                    <ExternalLink className="w-5 h-5" /> Live MVP
                  </a>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Detailed Overview</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xl font-light">{project.description}</p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Core Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-bold border border-zinc-100 dark:border-zinc-700/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
              <div className="space-y-8">
                <div className="aspect-[3/4] rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-12 text-center group relative overflow-hidden shadow-sm">
                   <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="z-10 space-y-6">
                     <div className="w-20 h-20 bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="w-10 h-10 text-zinc-400" />
                     </div>
                     <div className="space-y-2">
                       <h4 className="font-bold text-zinc-900 dark:text-white text-lg">Case Study Pending</h4>
                       <p className="text-xs text-zinc-500 max-w-[180px] mx-auto leading-relaxed">Further documentation and interactive technical deep-dives are currently in preparation.</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "experience":
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">Professional Journey</h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">A chronological record of my contributions to software engineering and project management.</p>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
              {[
                { 
                  title: "Technical Lead — GeeksforGeeks Campus Club", 
                  role: "Dr. Ambedkar Institute of Technology, Bengaluru", 
                  date: "Present",
                  desc: "Leading technical initiatives, organizing coding workshops, mentoring peers in DSA and competitive programming, and driving open-source contributions across the campus community."
                },
                { 
                  title: "Full-Stack Web Development Course", 
                  role: "Apna College — Certification", 
                  date: "Oct 2025",
                  desc: "Comprehensive full-stack certification covering JavaScript, React, Node.js, Express, MongoDB, HTML5, and CSS3 with hands-on project-based learning."
                },
                { 
                  title: "AWS Educate Introduction to Generative AI", 
                  role: "Amazon Web Services (AWS) — Certification", 
                  date: "Sep 2025",
                  desc: "Training badge covering generative AI concepts, foundation models, and practical use cases for AI/ML on the AWS Cloud platform."
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-16 group">
                  <div className="absolute left-0 top-1.5 w-[48px] h-[48px] bg-white dark:bg-zinc-950 border-4 border-zinc-50 dark:border-zinc-900 rounded-full flex items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 bg-zinc-900 dark:bg-white rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 p-10 rounded-3xl hover:shadow-2xl hover:bg-white dark:hover:bg-zinc-900 transition-all group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                      <h4 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">{item.title}</h4>
                      <span className="text-xs font-black text-zinc-400 bg-zinc-50 dark:bg-zinc-800 px-4 py-2 rounded-xl h-fit">{item.date}</span>
                    </div>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-widest">{item.role}</p>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="max-w-3xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Direct Consultation</h2>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">Available for professional consultations, project inquiries, or technical collaborations. Reach out via the channel that suits you best.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { icon: Mail, label: "Professional Email", val: "abhishiv208@gmail.com", href: "mailto:abhishiv208@gmail.com" },
                 { icon: Linkedin, label: "LinkedIn Network", val: "Abhishek M S", href: "https://www.linkedin.com/in/abhishek-m-s-5441ab322" },
                 { icon: Github, label: "GitHub Profile", val: "@abhishiv17", href: "https://github.com/abhishiv17" },
               ].map((item, i) => (
                 <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all text-center group">
                   <item.icon className="w-8 h-8 mx-auto mb-4 text-zinc-300 group-hover:text-blue-500 transition-all" />
                   <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{item.label}</p>
                 </a>
               ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700 rounded-[2rem] blur opacity-10"></div>
              <form onSubmit={handleContactSubmit} className="relative space-y-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-12 rounded-[2rem] shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Full Identity</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl text-base focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                      placeholder="e.g. Alexander Hamilton"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Electronic Mail</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl text-base focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Message Intent</label>
                  <textarea 
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl text-base focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                    placeholder="Briefly describe your inquiry or proposal..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-black text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing Request..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-blue-500/10 selection:text-blue-500">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-zinc-100 dark:border-zinc-900 transition-all duration-700">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
           <div className="flex items-center gap-3 sm:gap-5">
             <div className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-900 dark:bg-zinc-100 rounded-[10px] sm:rounded-[12px] flex items-center justify-center font-black text-white dark:text-zinc-900 text-lg sm:text-xl shadow-lg flex-shrink-0">
                A
             </div>
             <div className="flex flex-col min-w-0">
               <span className="font-black tracking-tight text-sm sm:text-xl leading-none truncate">ABHISHEK M SHIVANAGOUDAR</span>
               <span className="text-[8px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mt-0.5 sm:mt-1">Portfolio</span>
             </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-10 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
               <span className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  Engineering Active
               </span>
               <span className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Bangalore, Karnataka
               </span>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex max-w-[1600px] mx-auto pt-16 sm:pt-20">
        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Modern Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:sticky top-16 sm:top-20 left-0 z-40 w-72 sm:w-80 h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] bg-white dark:bg-black border-r border-zinc-100 dark:border-zinc-900 transition-all duration-500 overflow-y-auto`}
        >
          <div className="p-6 sm:p-10 space-y-8 sm:space-y-12">
            {sidebarSections.map((section) => (
              <div key={section.id} className="space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-[0.3em]">
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </div>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id)
                        setSidebarOpen(false)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`w-full text-left px-5 py-4 rounded-2xl text-sm transition-all flex items-center justify-between group ${
                        activeSection === item.id
                          ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-black shadow-2xl scale-105"
                          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <span className="tracking-tight">{item.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSection === item.id ? "translate-x-1" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-10 border-t border-zinc-50 dark:border-zinc-900">
               <div className="p-6 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-[2rem] border border-zinc-100 dark:border-zinc-800">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Current Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['TS', 'React', 'Node', 'PostgreSQL'].map(t => (
                      <span key={t} className="px-2 py-1 bg-white dark:bg-zinc-800 text-[8px] font-black rounded-md border border-zinc-100 dark:border-zinc-700">{t}</span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </aside>

        {/* Premium Content Area */}
        <main className="flex-1 p-5 sm:p-10 lg:p-20 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] overflow-x-hidden">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black p-6 sm:p-12 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Abhishek M Shivanagoudar — Engineered for Excellence
          </p>
          <div className="flex gap-6">
            <Linkedin className="w-4 h-4 text-zinc-300 hover:text-blue-500 cursor-pointer transition-colors" />
            <Github className="w-4 h-4 text-zinc-300 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-4 h-4 text-zinc-300 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  )
}
