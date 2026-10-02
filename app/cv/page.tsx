"use client"

import { useRef } from "react"

/* ── Inline contact icons (FontAwesome-style, as in the LaTeX template) ── */
const PhoneIcon = () => (
  <svg className="cv-icon ic-phone" viewBox="0 0 512 512" aria-hidden="true">
    <path d="M497.4 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6.6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0-14-27.6z" />
  </svg>
)
const MailIcon = () => (
  <svg className="cv-icon ic-mail" viewBox="0 0 512 512" aria-hidden="true">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg className="cv-icon ic-linkedin" viewBox="0 0 448 512" aria-hidden="true">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
)
const GitHubIcon = () => (
  <svg className="cv-icon ic-github" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const LiveIcon = () => (
  <svg className="cv-icon ic-live" viewBox="0 0 496 512" aria-hidden="true">
    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
  </svg>
)
const YouTubeIcon = () => (
  <svg className="cv-icon ic-youtube" viewBox="0 0 24 17" aria-hidden="true">
    <rect width="24" height="17" rx="4" fill="#FF0000" />
    <path d="M9.6 4.6v7.8l6.8-3.9z" fill="#ffffff" />
  </svg>
)

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Print-specific styles - A4, one page, no browser chrome */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/bitmaks/cm-web-fonts@latest/font/Serif/cmun-serif.css');

        /* Small-caps cut of CMU Serif (lowercase codepoints draw as small capitals),
           so the name renders like LaTeX's \\scshape but still extracts as plain text for ATS parsers. */
        @font-face {
          font-family: 'CMU Serif SC';
          src: url('/fonts/cmun-serif-sc.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

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
          body { background: #111111 !important; }
        }

        /* ── Responsive CV Wrapper ── */
        .cv-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px 48px;
          overflow-x: hidden;
        }

        /* ── CV Page: fixed A4, scales to fit viewport ── */
        .cv-page {
          width: 794px;
          height: 1123px;
          overflow: hidden;
          font-family: 'Computer Modern Serif', 'CMU Serif', 'Latin Modern Roman', 'Times New Roman', serif;
          background: #ffffff;
          color: #000000;
          padding: 34px 50px 20px;
          box-sizing: border-box;
          border-radius: 8px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
          transform-origin: top center;
          font-size: 13px;
          line-height: 1.32;
          font-variant-ligatures: none; /* keep "fi"/"fl" as plain letters for ATS parsers */
        }
        .cv-page h1, .cv-page h2 { font-family: inherit; }
        .cv-page a { color: inherit; text-decoration: none; }
        .cv-page b { font-weight: 700; }
        .cv-page .link { color: #1f3fd1; }

        .cv-icon {
          width: 0.95em;
          height: 0.95em;
          fill: currentColor;
          display: inline-block;
          vertical-align: -0.12em;
          margin-right: 4px;
        }
        .ic-phone { fill: #16a34a; }
        .ic-mail { fill: #EA4335; }
        .ic-linkedin { fill: #0A66C2; }
        .ic-github { fill: #181717; }
        .ic-live { fill: #0284c7; }
        .ic-youtube { width: 1.2em; }

        /* ── Header ── */
        .cv-header {
          text-align: center;
          margin-bottom: 4px;
        }
        .cv-page .cv-name {
          font-family: 'CMU Serif SC', 'Computer Modern Serif', serif;
          font-size: 40px;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.05;
          margin: 0 0 3px;
        }
        .cv-contact-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          font-size: 12.4px;
        }
        .cv-contact-bar .item { margin: 0 8px; }
        .cv-contact-bar a.link { text-decoration: underline; text-underline-offset: 2px; }

        /* ── Section ── */
        .cv-section {
          margin-bottom: 6px;
        }
        .cv-section-title {
          font-size: 17px;
          font-weight: 700;
          border-bottom: 0.8px solid #000;
          padding-bottom: 1px;
          margin: 0 0 5px;
        }

        /* ── Two-column rows (left / right aligned) ── */
        .row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .row-italic { font-style: italic; }
        .entry { margin-bottom: 6px; }
        .entry:last-child { margin-bottom: 0; }
        .entry-title { font-size: 14px; font-weight: 700; }
        .entry-date { white-space: nowrap; }
        .entry-date.bold { font-weight: 700; }

        /* ── Project heading icons ── */
        .proj-links { display: inline-flex; gap: 6px; vertical-align: -0.05em; }
        .proj-links .cv-icon { width: 1.05em; height: 1.05em; margin: 0; }
        .proj-links .ic-youtube { width: 1.3em; }

        /* ── Bullets ── */
        .bullets {
          margin: 2px 0 0;
          padding-left: 36px;
          list-style: disc outside;
        }
        .bullets li {
          margin-bottom: 1px;
        }
        .bullets.spaced li { margin-bottom: 5px; }

        /* ── Skills table ── */
        .skills-table {
          margin-left: 16px;
          border-collapse: collapse;
        }
        .skills-table td {
          padding: 0;
          vertical-align: top;
        }
        .skills-table td:first-child {
          font-weight: 700;
          white-space: nowrap;
          padding-right: 10px;
        }

        /* ── Action bar ── */
        .print-bar {
          text-align: center;
          padding: 16px 0 20px;
          width: 100%;
          max-width: 794px;
          font-family: 'Inter', system-ui, sans-serif;
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
              <span className="item"><PhoneIcon />+91 8904660785</span>{' '}
              <a className="item link" href="mailto:abhishiv208@gmail.com"><MailIcon />abhishiv208@gmail.com</a>{' '}
              <a className="item link" href="https://www.linkedin.com/in/abhishek-m-s-5441ab322" target="_blank" rel="noopener noreferrer"><LinkedInIcon />Abhishek M S</a>{' '}
              <a className="item link" href="https://github.com/abhishiv17" target="_blank" rel="noopener noreferrer"><GitHubIcon />abhishiv17</a>
            </div>
          </div>

          {/* ──── EDUCATION ──── */}
          <div className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            <div className="entry">
              <div className="row">
                <span className="entry-title">Dr. Ambedkar Institute of Technology, Bengaluru</span>
                <span className="entry-date">2024 – 2028</span>
              </div>
              <div className="row row-italic">
                <span>Bachelor of Engineering in Computer Science and Engineering</span>
                <span>CGPA: <b>9.0/10</b></span>
              </div>
            </div>
          </div>

          {/* ──── PROJECTS ──── */}
          <div className="cv-section">
            <h2 className="cv-section-title">Projects</h2>

            {/* CampusEvac */}
            <div className="entry">
              <div className="row">
                <span>
                  <span className="entry-title">CampusEvac – Fire Evacuation Training Simulator</span>{' | '}
                  <span className="proj-links">
                    <a href="https://github.com/AfreenInnovates/campus" target="_blank" rel="noopener noreferrer" title="GitHub"><GitHubIcon /></a>
                    <a href="https://main.d3skpx6qxc85hh.amplifyapp.com/" target="_blank" rel="noopener noreferrer" title="Live"><LiveIcon /></a>
                    <a href="https://youtu.be/FhgTfCz0ou8" target="_blank" rel="noopener noreferrer" title="Demo video"><YouTubeIcon /></a>
                  </span>
                </span>
                <span className="entry-date bold">Best UI – WeMakeDevs × AWS</span>
              </div>
              <div className="row-italic">Next.js, TypeScript, React Three Fiber, Zustand, AWS (AppSync, DynamoDB, Polly, SES, CDK, Amplify)</div>
              <ul className="bullets">
                <li>Won <b>Best UI</b> at the <b>WeMakeDevs × AWS Hackathon</b> for a two-player, browser-based fire-drill simulator: an evacuee navigates a smoke-filled building in <b>first-person 3D</b> while a warden guides them from an overhead view.</li>
                <li>Designed a <b>dual-channel real-time architecture</b> on <b>AWS AppSync Events</b>: an ephemeral <b>10 Hz</b> position stream plus a persisted game channel logged to <b>Amazon DynamoDB</b> for audit trails and <b>replay verification</b>.</li>
                <li><b>Automated</b> post-drill <b>performance reports</b> emailed via <b>Amazon SES</b> and live warden narration with <b>Amazon Polly</b>; provisioned infrastructure as code with <b>AWS CDK</b> and <b>deployed</b> on <b>Amplify</b>.</li>
              </ul>
            </div>

            {/* SkillSwap */}
            <div className="entry">
              <div className="row">
                <span>
                  <span className="entry-title">SkillSwap – Peer-to-Peer Skill Exchange Platform</span>{' | '}
                  <span className="proj-links">
                    <a href="https://github.com/abhishiv17/SkillSwapP" target="_blank" rel="noopener noreferrer" title="GitHub"><GitHubIcon /></a>
                    <a href="https://skill-swap-p.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live"><LiveIcon /></a>
                  </span>
                </span>
                <span className="entry-date bold">2025</span>
              </div>
              <div className="row-italic">Next.js, TypeScript, PostgreSQL, Supabase, SQL, REST APIs, WebSockets, Vector Search</div>
              <ul className="bullets">
                <li>Architected the full-stack platform from scratch as <b>lead engineer</b>, designing the <b>relational database schema</b> and <b>SQL</b> queries in <b>PostgreSQL</b> and owning all major technical decisions.</li>
                <li>Designed <b>REST APIs</b> for skill matching powered by <b>vector-based semantic search</b>, pairing learners and mentors by meaning rather than exact keyword overlap.</li>
                <li>Built a secure <b>credit escrow system</b> for session payments and real-time scheduling with live <b>WebSocket</b> notifications, delivering features end-to-end.</li>
              </ul>
            </div>

            {/* Control-Grid */}
            <div className="entry">
              <div className="row">
                <span>
                  <span className="entry-title">Control-Grid – Real-Time Industrial Monitoring Dashboard</span>{' | '}
                  <span className="proj-links">
                    <a href="https://github.com/abhishiv17/Control-Grid" target="_blank" rel="noopener noreferrer" title="GitHub"><GitHubIcon /></a>
                    <a href="https://code-ninjas-hackzion.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live"><LiveIcon /></a>
                  </span>
                </span>
                <span className="entry-date bold">2025</span>
              </div>
              <div className="row-italic">TypeScript, React, WebSockets, SASS</div>
              <ul className="bullets">
                <li>Developed a mission-critical <b>industrial telemetry dashboard</b> within a <b>hackathon sprint</b>, shipping a polished, demo-ready product on deadline.</li>
                <li>Implemented low-latency <b>WebSocket streaming pipelines</b> feeding high-density, responsive grid layouts; <b>debugged and troubleshot</b> connection drops to add resilient <b>error recovery</b>.</li>
                <li>Wrote <b>unit tests</b> and coordinated <b>integration testing</b> and architecture decisions across the team under tight time constraints.</li>
              </ul>
            </div>

            {/* Freshies */}
            <div className="entry">
              <div className="row">
                <span>
                  <span className="entry-title">Freshies Ice Creams – Artisanal Brand Web Platform</span>{' | '}
                  <span className="proj-links">
                    <a href="https://freshies-flax.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live"><LiveIcon /></a>
                  </span>
                </span>
              </div>
              <div className="row-italic">Next.js, React, TypeScript, GSAP, Tailwind CSS</div>
              <ul className="bullets">
                <li>Designed, built, and <b>deployed</b> a responsive <b>production web application</b> for an artisanal real-fruit ice cream brand in Karnataka.</li>
                <li>Built interactive product showcases, ingredient-transparency breakdowns, and a dynamic <b>store locator</b>, with custom <b>GSAP</b> scroll animations that preserve fast page loads and <b>accessibility</b>.</li>
              </ul>
            </div>
          </div>

          {/* ──── SKILLS ──── */}
          <div className="cv-section">
            <h2 className="cv-section-title">Skills</h2>
            <table className="skills-table">
              <tbody>
                <tr>
                  <td>Programming Languages</td>
                  <td><b>Adept at:</b> JavaScript, Java, C, SQL; <b>Familiar with:</b> Python</td>
                </tr>
                <tr>
                  <td>Web &amp; Frameworks</td>
                  <td>React, Next.js, Node.js, Express, REST APIs, WebSockets, Tailwind CSS</td>
                </tr>
                <tr>
                  <td>Databases &amp; Cloud</td>
                  <td>PostgreSQL, MongoDB, Supabase, AWS (DynamoDB, AppSync, SES, CDK, Amplify)</td>
                </tr>
                <tr>
                  <td>Tools</td>
                  <td>Git/GitHub (version control), Docker, Postman, CI/CD</td>
                </tr>
                <tr>
                  <td>Relevant Courses</td>
                  <td>Data Structures &amp; Algorithms, Object Oriented Programming (Java), Database Management Systems, Operating Systems</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ──── ACHIEVEMENTS ──── */}
          <div className="cv-section">
            <h2 className="cv-section-title">Achievements &amp; Extracurricular</h2>
            <ul className="bullets spaced">
              <li><b>WeMakeDevs × AWS Hackathon:</b> Won the <b>Best UI</b> award for <a className="link" href="https://youtu.be/FhgTfCz0ou8" target="_blank" rel="noopener noreferrer">CampusEvac</a>, a real-time multiplayer fire-evacuation training simulator.</li>
              <li><b>Technical Lead, GeeksforGeeks Campus Body (Jan 2026 – Jul 2026):</b> Guided technical direction for the chapter and organized coding workshops for students at Dr. AIT.</li>
              <li><b>ASTRAVA Hackathon:</b> Served as an organizer, managing technical infrastructure and support for <b>100+ participating teams</b>.</li>
              <li><b>Certifications:</b> Full-Stack Web Development – Apna College (Oct 2025); AWS Educate – Introduction to Generative AI (Sep 2025).</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
