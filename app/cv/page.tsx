"use client"

import { useRef } from "react"

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Print-specific styles — A4, one page, no browser chrome */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── CV Page: fixed A4, scales to fit viewport ── */

        .cv-page {
          width: 794px; /* A4 at 96dpi */
          height: 1123px; /* A4 at 96dpi */
          overflow: hidden;
          font-family: 'Inter', system-ui, sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          padding: 0;
          box-sizing: border-box;
          border-radius: 8px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
          transform-origin: top center;
        }

        /* ── Layout Grid ── */
        .cv-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          height: 1123px;
        }

        /* ── Left Sidebar ── */
        .cv-sidebar {
          background: #0f172a;
          color: #e2e8f0;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cv-sidebar .name {
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 2px;
        }
        .cv-sidebar .title-role {
          font-size: 9px;
          font-weight: 600;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 4px;
        }

        .cv-sidebar .section-title {
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #60a5fa;
          margin-bottom: 6px;
          padding-bottom: 4px;
          border-bottom: 1px solid #1e293b;
        }

        .cv-sidebar .contact-item {
          font-size: 8.5px;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
          word-break: break-all;
        }
        .cv-sidebar .contact-item .icon {
          flex-shrink: 0;
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
          border-radius: 3px;
          font-size: 7px;
        }

        .cv-sidebar .skill-category {
          margin-bottom: 8px;
        }
        .cv-sidebar .skill-category-title {
          font-size: 8px;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 4px;
        }
        .cv-sidebar .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
        }
        .cv-sidebar .skill-tag {
          font-size: 7.5px;
          font-weight: 600;
          background: #1e293b;
          color: #e2e8f0;
          padding: 2px 6px;
          border-radius: 3px;
          white-space: nowrap;
        }

        .cv-sidebar .edu-title {
          font-size: 9px;
          font-weight: 700;
          color: #f1f5f9;
        }
        .cv-sidebar .edu-detail {
          font-size: 8px;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* ── Right Main Content ── */
        .cv-main {
          padding: 28px 28px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cv-main .main-header {
          border-bottom: 2px solid #0f172a;
          padding-bottom: 10px;
          margin-bottom: 2px;
        }
        .cv-main .main-name {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0f172a;
          line-height: 1;
        }
        .cv-main .main-title {
          font-size: 11px;
          font-weight: 600;
          color: #3b82f6;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }
        .cv-main .main-summary {
          font-size: 9px;
          color: #475569;
          line-height: 1.55;
          margin-top: 6px;
          max-width: 480px;
        }

        .cv-main .section {
          margin-bottom: 2px;
        }
        .cv-main .section-heading {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #0f172a;
          padding-bottom: 4px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cv-main .section-heading .accent-bar {
          width: 3px;
          height: 12px;
          background: #3b82f6;
          border-radius: 2px;
        }

        /* Experience entries */
        .exp-entry {
          margin-bottom: 8px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }
        .exp-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #0f172a;
        }
        .exp-date {
          font-size: 8px;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 1px 6px;
          border-radius: 3px;
          white-space: nowrap;
        }
        .exp-role {
          font-size: 8.5px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 2px;
        }
        .exp-desc {
          font-size: 8.5px;
          color: #475569;
          line-height: 1.5;
        }

        /* Project entries */
        .proj-entry {
          margin-bottom: 6px;
        }
        .proj-header {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 1px;
        }
        .proj-name {
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
        }
        .proj-role-tag {
          font-size: 7px;
          font-weight: 700;
          color: #3b82f6;
          background: #eff6ff;
          padding: 1px 5px;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .proj-desc {
          font-size: 8.5px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 3px;
        }
        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
        }
        .proj-tech span {
          font-size: 7px;
          font-weight: 600;
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 1px 5px;
          border-radius: 2px;
        }

        /* Achievements */
        .achievement-item {
          font-size: 8.5px;
          color: #475569;
          line-height: 1.5;
          padding-left: 12px;
          position: relative;
          margin-bottom: 4px;
        }
        .achievement-item::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-weight: 700;
        }

        /* Action bar */
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
          font-family: 'Inter', sans-serif;
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
          font-family: 'Inter', sans-serif;
          transition: color 0.2s;
          padding: 10px 16px;
          border-radius: 10px;
        }
        .back-link:hover {
          color: #e2e8f0;
          background: rgba(255,255,255,0.05);
        }

        /* ── Responsive scaling ── */
        @media screen and (max-width: 830px) {
          .cv-page {
            transform: scale(calc((100vw - 32px) / 794));
            margin-bottom: calc((1123px * (calc((100vw - 32px) / 794)) - 1123px));
          }
        }
        @media screen and (max-width: 500px) {
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
        <div className="cv-grid">
          {/* ──── LEFT SIDEBAR ──── */}
          <div className="cv-sidebar">
            {/* Contact */}
            <div>
              <div className="section-title">Contact</div>
              <div className="contact-item">
                <span className="icon">✉</span>
                abhishiv208@gmail.com
              </div>
              <div className="contact-item">
                <span className="icon">🔗</span>
                linkedin.com/in/abhishek-m-shivanagoudar
              </div>
              <div className="contact-item">
                <span className="icon">⌨</span>
                github.com/abhishiv17
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                Bangalore, Karnataka, India
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="section-title">Technical Skills</div>

              <div className="skill-category">
                <div className="skill-category-title">Languages</div>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">C</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-title">Frontend</div>
                <div className="skill-tags">
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">Framer Motion</span>
                  <span className="skill-tag">Shadcn UI</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-title">Backend & Databases</div>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Supabase</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-title">DevOps & Tools</div>
                <div className="skill-tags">
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Git/GitHub</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">CI/CD</span>
                </div>
              </div>
            </div>


            {/* Education */}
            <div>
              <div className="section-title">Education</div>
              <div className="edu-title">B.E. in Computer Science</div>
              <div className="edu-detail">
                Dr. Ambedkar Institute of Technology, Bengaluru
              </div>
              <div className="edu-detail">2024 – 2028</div>
              <div className="edu-detail" style={{ marginTop: 3, color: '#e2e8f0', fontWeight: 600 }}>CGPA: 9.0 (after 3rd Semester)</div>
            </div>

            {/* Hobbies */}
            <div>
              <div className="section-title">Hobbies</div>
              <div className="edu-detail" style={{ marginBottom: 4 }}>▸ Music</div>
              <div className="edu-detail" style={{ marginBottom: 4 }}>▸ Open-Source Contributing</div>
              <div className="edu-detail" style={{ marginBottom: 4 }}>▸ gym</div>
              <div className="edu-detail" style={{ marginBottom: 4 }}>▸ Gaming</div>
              <div className="edu-detail">▸ Anime</div>
            </div>

          </div>

          {/* ──── RIGHT MAIN ──── */}
          <div className="cv-main">
            {/* Header */}
            <div className="main-header">
              <div className="main-name">Abhishek M Shivanagoudar</div>
              <div className="main-title">Full-Stack Software Developer </div>
              <div className="main-summary">
                Full-stack developer passionate about building scalable web applications, solving complex problems, and writing clean, maintainable code.
              </div>
            </div>

            {/* Professional Experience */}
            <div className="section">
              <div className="section-heading">
                <span className="accent-bar"></span>
                Experience & Certification
              </div>

              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-title">Technical Lead — GeeksforGeeks Campus Club</span>
                  <span className="exp-date">Present</span>
                </div>
                <div className="exp-role">Dr. Ambedkar Institute of Technology, Bengaluru</div>
                <div className="exp-desc">
                  Leading technical initiatives, organizing coding workshops, mentoring peers in DSA and
                  competitive programming, and driving open-source contributions across the campus community.
                </div>
              </div>

              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-title">Full-Stack Web Development Course</span>
                  <span className="exp-date">Oct 2025</span>
                </div>
                <div className="exp-role">Apna College</div>
                <div className="exp-desc">
                  Comprehensive full-stack certification covering JavaScript, React, Node.js, Express,
                  MongoDB, HTML5, and CSS3 with hands-on project-based learning.
                </div>
              </div>

              <div className="exp-entry">
                <div className="exp-header">
                  <span className="exp-title">AWS Educate Introduction to Generative AI</span>
                  <span className="exp-date">Sep 2025</span>
                </div>
                <div className="exp-role">Amazon Web Services (AWS)</div>
                <div className="exp-desc">
                  Training badge covering generative AI concepts, foundation models, and practical
                  use cases for AI/ML on the AWS Cloud platform.
                </div>
              </div>

            </div>

            {/* Projects */}
            <div className="section">
              <div className="section-heading">
                <span className="accent-bar"></span>
                Key Projects
              </div>

              <div className="proj-entry">
                <div className="proj-header">
                  <span className="proj-name">SkillSwap</span>
                  <span className="proj-role-tag">Lead Architect</span>
                </div>
                <div className="proj-desc">
                  Designed and built a peer-to-peer skill exchange marketplace from the ground up.
                  Architected the full-stack infrastructure including AI-powered skill matching with vector-based
                  semantic search, a secure credit escrow system for fair exchanges, and real-time session
                  scheduling with live notifications. Led all architectural decisions, database schema design,
                  and end-to-end feature implementation.
                </div>
                <div className="proj-tech">
                  <span>Next.js</span><span>TypeScript</span><span>Supabase</span><span>PostgreSQL</span><span>Tailwind CSS</span><span>AI/ML</span>
                </div>
              </div>

              <div className="proj-entry">
                <div className="proj-header">
                  <span className="proj-name">Cerebyte</span>
                  <span className="proj-role-tag">Lead Architect</span>
                </div>
                <div className="proj-desc">
                  Led the design and development of an AI-integrated ed-tech platform for mastering DSA.
                  Built a sandboxed code execution engine with Docker, implemented interactive data structure
                  visualizations, and integrated an AI-driven mentor for personalized student feedback.
                  Managed the full project lifecycle from system design to deployment.
                </div>
                <div className="proj-tech">
                  <span>TypeScript</span><span>Next.js</span><span>PostgreSQL</span><span>Docker</span><span>Tailwind CSS</span>
                </div>
              </div>

              <div className="proj-entry">
                <div className="proj-header">
                  <span className="proj-name">TripNest</span>
                  <span className="proj-role-tag">Full-Stack Developer</span>
                </div>
                <div className="proj-desc">
                  Independently developed a full-scale hospitality and travel management platform. Engineered
                  RESTful APIs with Express, implemented user authentication, built a responsive booking flow
                  with Redux state management, and optimized MongoDB queries for high-availability performance.
                </div>
                <div className="proj-tech">
                  <span>JavaScript</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Redux</span>
                </div>
              </div>

              <div className="proj-entry">
                <div className="proj-header">
                  <span className="proj-name">Control-Grid</span>
                  <span className="proj-role-tag">Hackathon</span>
                </div>
                <div className="proj-desc">
                  Built during a competitive hackathon — developed a real-time industrial monitoring dashboard.
                  Implemented live WebSocket data streaming, designed responsive grid-based layouts for
                  mission-critical system oversight, and collaborated under tight deadlines.
                </div>
                <div className="proj-tech">
                  <span>TypeScript</span><span>React</span><span>WebSocket</span><span>SASS</span>
                </div>
              </div>

              <div className="proj-entry">
                <div className="proj-header">
                  <span className="proj-name">Simon-Says</span>
                  <span className="proj-role-tag">Frontend</span>
                </div>
                <div className="proj-desc">
                  Designed and built a modernized take on the classic memory game as a frontend-focused project.
                  Implemented high-fidelity CSS animations, low-latency DOM event handling, and a fully
                  responsive layout ensuring smooth gameplay across all device viewports.
                </div>
                <div className="proj-tech">
                  <span>JavaScript</span><span>HTML5</span><span>CSS3</span><span>DOM API</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
