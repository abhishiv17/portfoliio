"use client"

import { useRef } from "react"

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Print-specific styles — A4, one page, no browser chrome */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&family=Georgia&display=swap');

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .cv-page {
            box-shadow: none !important;
            margin: 0 !important;
            border-radius: 0 !important;
            transform: none !important;
          }
          .cv-wrapper {
            padding: 0 !important;
            background: none !important;
            min-height: auto !important;
          }
          .no-print { display: none !important; }
        }

        @media screen {
          body { background: #0f172a !important; }
        }

        /* ── Responsive CV Wrapper ── */
        .cv-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px 48px;
          font-family: 'Times New Roman', Georgia, 'Noto Serif', serif;
        }

        /* ── CV Page: fixed A4, scales to fit viewport ── */
        .cv-page {
          width: 794px;
          height: 1123px;
          overflow: hidden;
          font-family: 'Times New Roman', Georgia, 'Noto Serif', serif;
          background: #ffffff;
          color: #000000;
          padding: 32px 44px 28px;
          box-sizing: border-box;
          border-radius: 8px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
          transform-origin: top center;
        }

        /* ── Header ── */
        .cv-header {
          text-align: center;
          margin-bottom: 4px;
        }
        .cv-name {
          font-size: 26px;
          font-weight: 700;
          color: #000000;
          letter-spacing: 0.01em;
          line-height: 1.15;
          margin: 0;
        }
        .cv-contact-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
          font-size: 10.5px;
          color: #333;
          margin-top: 4px;
        }
        .cv-contact-bar a {
          color: #1a0dab;
          text-decoration: underline;
        }
        .cv-contact-bar a:hover {
          color: #0000cc;
        }
        .cv-contact-bar .sep {
          margin: 0 5px;
          color: #666;
        }

        /* ── Section ── */
        .cv-section {
          margin-bottom: 6px;
        }
        .cv-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #000;
          text-transform: uppercase;
          border-bottom: 1.5px solid #000;
          padding-bottom: 2px;
          margin-bottom: 5px;
          letter-spacing: 0.04em;
        }

        /* ── Education ── */
        .edu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .edu-institution {
          font-size: 11px;
          font-weight: 700;
          color: #000;
        }
        .edu-location {
          font-size: 11px;
          font-weight: 700;
          color: #000;
        }
        .edu-degree {
          font-size: 10.5px;
          font-style: italic;
          color: #000;
        }
        .edu-year {
          font-size: 10.5px;
          font-style: italic;
          color: #000;
        }

        /* ── Skills ── */
        .skill-row {
          font-size: 10.5px;
          color: #000;
          margin-bottom: 2px;
          line-height: 1.5;
        }
        .skill-row strong {
          font-weight: 700;
        }

        /* ── Projects ── */
        .proj-entry {
          margin-bottom: 6px;
        }
        .proj-title-line {
          font-size: 11px;
          font-weight: 700;
          color: #000;
          margin-bottom: 1px;
        }
        .proj-title-line a {
          color: #1a0dab;
          text-decoration: underline;
          font-weight: 700;
          font-size: 10.5px;
        }
        .proj-title-line a:hover {
          color: #0000cc;
        }
        .proj-subtitle {
          font-size: 10px;
          font-style: italic;
          color: #333;
          margin-bottom: 2px;
        }
        .proj-bullets {
          margin: 0;
          padding-left: 20px;
        }
        .proj-bullets li {
          font-size: 10px;
          color: #000;
          line-height: 1.5;
          margin-bottom: 1px;
        }
        .proj-bullets li strong {
          font-weight: 700;
        }

        /* ── Achievements ── */
        .achieve-entry {
          margin-bottom: 5px;
        }
        .achieve-title-line {
          font-size: 11px;
          font-weight: 700;
          color: #000;
          margin-bottom: 1px;
        }
        .achieve-title-line a {
          color: #1a0dab;
          text-decoration: underline;
          font-weight: 700;
          font-size: 10.5px;
        }
        .achieve-subtitle {
          font-size: 10px;
          font-style: italic;
          color: #333;
          margin-bottom: 2px;
        }
        .achieve-bullets {
          margin: 0;
          padding-left: 20px;
        }
        .achieve-bullets li {
          font-size: 10px;
          color: #000;
          line-height: 1.5;
          margin-bottom: 1px;
        }

        /* ── Experience ── */
        .exp-entry {
          margin-bottom: 5px;
        }
        .exp-title-line {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .exp-title-name {
          font-size: 11px;
          font-weight: 700;
          color: #000;
        }
        .exp-title-date {
          font-size: 10.5px;
          font-style: italic;
          color: #000;
        }
        .exp-org {
          font-size: 10.5px;
          font-style: italic;
          color: #333;
          margin-bottom: 2px;
        }
        .exp-bullets {
          margin: 0;
          padding-left: 20px;
        }
        .exp-bullets li {
          font-size: 10px;
          color: #000;
          line-height: 1.5;
          margin-bottom: 1px;
        }

        /* ── Action bar ── */
        .print-bar {
          text-align: center;
          padding: 16px 0 20px;
          width: 100%;
          max-width: 794px;
        }
        .action-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .print-btn {
          background: #1e293b;
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Inter', system-ui, sans-serif;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .print-btn:hover {
          background: #334155;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Inter', system-ui, sans-serif;
          transition: color 0.2s;
          padding: 10px 16px;
          border-radius: 10px;
        }
        .back-link:hover {
          color: #e2e8f0;
          background: rgba(255,255,255,0.05);
        }

        /* ── Responsive scaling ── */
        .cv-wrapper {
          overflow-x: hidden;
        }

        @media screen and (max-width: 830px) {
          .cv-page {
            --scale: calc((100vw - 32px) / 794);
            transform: scale(var(--scale));
            transform-origin: top center;
            margin-bottom: calc(-1123px * (1 - var(--scale)));
          }
        }
        @media screen and (max-width: 500px) {
          .cv-page {
            --scale: calc((100vw - 16px) / 794);
            transform: scale(var(--scale));
            transform-origin: top center;
            margin-bottom: calc(-1123px * (1 - var(--scale)));
          }
          .print-btn {
            padding: 10px 16px;
            font-size: 12px;
          }
          .cv-wrapper {
            padding: 16px 8px 32px;
          }
        }
      `}</style>

      <div className="cv-wrapper">
        {/* Top action bar */}
        <div className="print-bar no-print">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <a href="/" className="back-link">
              ← Back to Portfolio
            </a>
            <div className="action-row">
              <button className="print-btn" onClick={() => window.print()}>
                🖨️ Print PDF
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════ CV PAGE ═══════════════ */}
        <div className="cv-page" ref={cvRef}>

          {/* ──── HEADER ──── */}
          <div className="cv-header">
            <h1 className="cv-name">Abhishek M Shivanagoudar</h1>
            <div className="cv-contact-bar">
              <span>Bangalore, Karnataka</span>
              <span className="sep">|</span>
              <span>Contact No: 8904660785</span>
              <span className="sep">|</span>
              <a href="https://www.linkedin.com/in/abhishek-m-s-5441ab322" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="sep">|</span>
              <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer">Github</a>
              <span className="sep">|</span>
              <a href="mailto:abhishiv208@gmail.com">abhishiv208@gmail.com</a>
            </div>
          </div>

          {/* ──── EDUCATION ──── */}
          <div className="cv-section">
            <div className="cv-section-title">EDUCATION</div>
            <div className="edu-row">
              <span className="edu-institution">Dr. Ambedkar Institute of Technology</span>
              <span className="edu-location">Bangalore, Karnataka</span>
            </div>
            <div className="edu-row">
              <span className="edu-degree">BE in Computer Science and Engineering (Current CGPA: 9.0)</span>
              <span className="edu-year">2024–2028</span>
            </div>
          </div>

          {/* ──── SKILL SET ──── */}
          <div className="cv-section">
            <div className="cv-section-title">SKILL SET</div>
            <div className="skill-row">
              <strong>Web Development (Frontend):</strong> Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion, Shadcn UI
            </div>
            <div className="skill-row">
              <strong>Web Development (Backend):</strong> Node.js, Express
            </div>
            <div className="skill-row">
              <strong>Languages:</strong> Python, TypeScript, JavaScript, C++, C
            </div>
            <div className="skill-row">
              <strong>Databases:</strong> PostgreSQL, Supabase, MongoDB
            </div>
            <div className="skill-row">
              <strong>Tools &amp; DevOps:</strong> Git, GitHub, Docker, Postman, CI/CD
            </div>
          </div>

          {/* ──── PROJECTS ──── */}
          <div className="cv-section">
            <div className="cv-section-title">PROJECTS</div>

            {/* SkillSwap */}
            <div className="proj-entry">
              <div className="proj-title-line">
                SkillSwap – Peer-to-Peer Skill Exchange Platform | <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://code-carnage.vercel.app/" target="_blank" rel="noopener noreferrer">MVP Link</a>
              </div>
              <ul className="proj-bullets">
                <li>Architected the entire full-stack infrastructure from scratch, leading all major <strong>technical decisions</strong> and database schema design.</li>
                <li>Engineered <strong>AI-powered skill matching</strong> using vector-based semantic search and built a secure credit escrow system.</li>
                <li>Implemented real-time session scheduling with live <strong>WebSocket notifications</strong> and managed end-to-end feature delivery.</li>
                <li><strong>Tech Stack:</strong> Next.js, TypeScript, Supabase, PostgreSQL, Tailwind CSS, AI/ML</li>
              </ul>
            </div>

            {/* Control-Grid */}
            <div className="proj-entry">
              <div className="proj-title-line">
                Control-Grid – Real-Time Industrial Monitoring Dashboard | <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://code-ninjas-hackzion.vercel.app/" target="_blank" rel="noopener noreferrer">MVP Link</a>
              </div>
              <ul className="proj-bullets">
                <li>Developed the entire real-time monitoring dashboard under tight <strong>hackathon deadlines</strong>, delivering a polished product on time.</li>
                <li>Implemented live <strong>WebSocket data streaming</strong> pipelines and engineered responsive grid-based layouts for mission-critical oversight.</li>
                <li>Coordinated with teammates on architecture decisions and integration testing under time constraints.</li>
                <li><strong>Tech Stack:</strong> TypeScript, React, WebSocket, SASS</li>
              </ul>
            </div>

            {/* TripNest */}
            <div className="proj-entry">
              <div className="proj-title-line">
                TripNest – Hospitality &amp; Travel Platform | <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <ul className="proj-bullets">
                <li>Independently owned the <strong>full development lifecycle</strong> of a hospitality and travel management platform.</li>
                <li>Engineered <strong>RESTful APIs</strong> with Express, implemented secure user authentication, and built a responsive booking flow with Redux.</li>
                <li>Optimized <strong>MongoDB queries</strong> for high-availability performance and scalable data access patterns.</li>
                <li><strong>Tech Stack:</strong> JavaScript, Node.js, Express, MongoDB, Redux</li>
              </ul>
            </div>

            {/* Simon-Says */}
            <div className="proj-entry">
              <div className="proj-title-line">
                Simon-Says – Classic Memory Game | <a href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <ul className="proj-bullets">
                <li>Solely designed and developed a modernized memory game, crafting high-fidelity <strong>CSS animations</strong> from scratch.</li>
                <li>Implemented low-latency <strong>DOM event handling</strong> for smooth interactions and ensured a fully responsive layout across all viewports.</li>
                <li><strong>Tech Stack:</strong> JavaScript, HTML5, CSS3, DOM API</li>
              </ul>
            </div>


          </div>

          {/* ──── KEY ACHIEVEMENTS ──── */}
          <div className="cv-section">
            <div className="cv-section-title">KEY ACHIEVEMENTS</div>

            <div className="achieve-entry">
              <div className="achieve-title-line">
                Technical Lead — GeeksforGeeks Campus Club | <a href="https://www.linkedin.com/in/abhishek-m-s-5441ab322" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="achieve-subtitle">Dr. Ambedkar Institute of Technology, Bengaluru — Present</div>
              <ul className="achieve-bullets">
                <li>Leading technical initiatives, organizing coding workshops, mentoring peers in DSA and competitive programming.</li>
                <li>Driving open-source contributions across the campus community.</li>
              </ul>
            </div>

            <div className="achieve-entry">
              <div className="achieve-title-line">
                Full-Stack Web Development Certification | Apna College
              </div>
              <div className="achieve-subtitle">Comprehensive certification — Oct 2025</div>
              <ul className="achieve-bullets">
                <li>Covered JavaScript, React, Node.js, Express, MongoDB, HTML5, and CSS3 with hands-on project-based learning.</li>
              </ul>
            </div>

            <div className="achieve-entry">
              <div className="achieve-title-line">
                AWS Educate — Introduction to Generative AI | <a href="https://www.linkedin.com/in/abhishek-m-s-5441ab322" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="achieve-subtitle">Amazon Web Services (AWS) — Sep 2025</div>
              <ul className="achieve-bullets">
                <li>Training badge covering generative AI concepts, foundation models, and practical use cases for AI/ML on the AWS Cloud platform.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
