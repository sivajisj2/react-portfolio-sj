import { useMemo, useState } from 'react'

const profile = {
  name: 'Sivaji Gadidala',
  email: 'sivajigsivajig703@gmail.com',
  github: 'https://github.com/sivajisj2',
  linkedin: 'https://www.linkedin.com/in/sivaji-gadidala-b712ba221',
  location: 'Bengaluru, India',
  scheduler: 'https://sivaji-scheduler.lissomeazure.chatgpt.site',
}

const projects = [
  {
    id: 'inferenceforge', number: '01', name: 'InferenceForge', category: 'AI Infrastructure',
    summary: 'A Rust inference gateway that routes streamed chat across workers with bounded admission, failover, and an operator console.',
    stack: ['Rust', 'Axum', 'Tokio', 'SSE', 'Prometheus', 'Docker'],
    proof: '60 requests · 19.65 completions/s',
    href: 'https://github.com/sivajisj2/InferenceForge',
    visual: 'inference',
  },
  {
    id: 'nexusstream', number: '02', name: 'NexusStream', category: 'Rust Systems',
    summary: 'Durable event ingestion with transactional batches, UUID deduplication, restart-safe workers, replay, and an operator dashboard.',
    stack: ['Rust', 'Axum', 'SQLx', 'PostgreSQL', 'OpenAPI', 'Prometheus'],
    proof: 'Three-crate workspace · at-least-once delivery',
    href: 'https://github.com/sivajisj2/nexusstream',
    visual: 'stream',
  },
  {
    id: 'flashroute', number: '03', name: 'FlashRoute', category: 'Blockchain',
    summary: 'A local-chain DeFi execution sandbox for quote review, flash-loan simulation, guarded execution, and receipt tracking.',
    stack: ['Solidity', 'Foundry', 'Rust', 'Axum', 'React', 'PostgreSQL'],
    proof: 'Local EVM · simulation before execution',
    href: 'https://github.com/sivajisj2/flashroute',
    visual: 'flash',
  },
  {
    id: 'routerpulse', number: '04', name: 'RouterPulse', category: 'Solana',
    summary: 'A Solana cross-cluster messaging prototype with Anchor PDAs, domain-separated message IDs, expiry checks, and replay protection.',
    stack: ['Rust', 'Anchor', 'Solana', 'PostgreSQL', 'React'],
    proof: 'Two local validators · permissioned relayer model',
    href: 'https://github.com/sivajisj2/routerpulse',
    visual: 'router',
  },
  {
    id: 'payments', number: '05', name: 'Invoice & Payment Service', category: 'Rust Systems',
    summary: 'A payment API built around idempotency, row locking, safe state transitions, reconciliation, and signed webhook retries.',
    stack: ['Rust', 'Axum', 'PostgreSQL', 'Docker', 'HMAC', 'OpenAPI'],
    proof: 'Concurrent payment paths · retry-safe webhooks',
    href: 'https://github.com/sivajisj2/dodo-invoice-service',
    visual: 'payments',
  },
  {
    id: 'tripsync', number: '06', name: 'TripSync AI', category: 'Full Stack',
    summary: 'A collaborative trip planner with Rust-backed live voting, authenticated sharing, place discovery, and saved itinerary drafts.',
    stack: ['Rust', 'Next.js', 'WebSockets', 'SQLite', 'SerpApi'],
    proof: 'Live collaboration · persistent shared plans',
    href: 'https://github.com/sivajisj2/tripsync-ai',
    visual: 'travel',
  },
]

const skillGroups = [
  { title: 'Systems & backend', items: ['Rust', 'Tokio', 'Axum', 'SQLx', 'PostgreSQL', 'Redis', 'REST', 'WebSockets'] },
  { title: 'Blockchain', items: ['Solana', 'Anchor', 'EVM', 'Solidity', 'Foundry', 'PDAs', 'CPI', 'On-chain events'] },
  { title: 'AI infrastructure', items: ['Inference routing', 'SSE streaming', 'Admission control', 'Failover', 'Prometheus', 'Grafana'] },
  { title: 'Product engineering', items: ['TypeScript', 'React', 'Next.js', 'Docker', 'Kubernetes', 'CI/CD', 'OpenTelemetry'] },
]

const experience = [
  {
    role: 'Full-Stack Developer, Rust backend focus',
    company: 'Simreka Softwares Pvt. Ltd.',
    period: 'Aug 2024 - Present',
    location: 'Bengaluru, India',
    points: [
      'Build Rust services with Axum, Tokio, SQLx, and PostgreSQL for asynchronous APIs and research workflows.',
      'Deliver TypeScript and Next.js product interfaces that connect multiple backend services.',
      'Work across validation, transaction consistency, integration tests, observability, and Docker-based delivery.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Octaverse LLP',
    period: 'Nov 2023 - Apr 2024',
    location: 'India',
    points: [
      'Built responsive React interfaces and reusable UI components with JavaScript, Redux, and Tailwind CSS.',
      'Integrated wallet and smart-contract data into web workflows, including transaction states.',
    ],
  },
]

async function deliverForm(form, subject) {
  const data = new FormData(form)
  if (data.get('_honey')) return true
  data.set('_subject', subject)
  const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: data,
  })
  if (!response.ok) throw new Error('Message could not be sent. Please email me directly.')
  const result = await response.json()
  if (result.success === 'false' || result.success === false) throw new Error(result.message || 'Message could not be sent.')
  return true
}

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'arrow') return <svg {...common}><path d="M7 17 17 7M7 7h10v10" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  if (name === 'calendar') return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></svg>
  if (name === 'github') return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.7 1.4a13 13 0 0 0-6.7 0C5.8 1.2 4.6 1.6 4.6 1.6a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.1 9c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></svg>
  if (name === 'linkedin') return <svg {...common}><path d="M4 9v11M4 4h.01M9 20v-7a4 4 0 0 1 8 0v7M9 10v10" /><rect x="2" y="2" width="20" height="20" rx="4" /></svg>
  return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
}

function ProjectVisual({ type }) {
  const nodes = type === 'inference' ? ['REQUEST', 'GATEWAY', 'WORKER'] : type === 'stream' ? ['INGEST', 'QUEUE', 'STORE'] : type === 'flash' ? ['QUOTE', 'SIMULATE', 'EXECUTE'] : type === 'router' ? ['SOURCE', 'MESSAGE', 'RECEIPT'] : type === 'payments' ? ['REQUEST', 'LEDGER', 'WEBHOOK'] : ['DISCOVER', 'VOTE', 'ITINERARY']
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="visual-top"><span>FIELD NOTES / {type.toUpperCase()}</span><span className="visual-live"><i /> SYSTEM MAP</span></div>
      <div className="visual-grid" />
      <div className="visual-flow">
        {nodes.map((node, index) => <div className="visual-node" key={node}><span className="visual-node-index">0{index + 1}</span><b>{node}</b><i className={index === 1 ? 'node-dot node-dot--bright' : 'node-dot'} /></div>)}
      </div>
      <div className="visual-orbit visual-orbit--one" /><div className="visual-orbit visual-orbit--two" />
      <span className="visual-caption">SIVAJI / ENGINEERING SYSTEMS</span>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-card-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}>
        <ProjectVisual type={project.visual} />
        <span className="project-open"><Icon name="arrow" /></span>
      </a>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
        <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h3>
        <p>{project.summary}</p>
        <div className="project-proof"><span className="proof-mark">+</span>{project.proof}</div>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setSending(true)
    setStatus('')
    try {
      await deliverForm(form, 'New portfolio enquiry for Sivaji')
      form.reset()
      setStatus('Your message is on its way. Thanks for reaching out.')
    } catch (error) {
      setStatus(error.message || 'Message could not be sent. Please email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New portfolio enquiry for Sivaji" />
      <input type="hidden" name="_template" value="table" />
      <label className="honeypot" aria-hidden="true">Leave this blank<input name="_honey" tabIndex="-1" autoComplete="off" /></label>
      <div className="form-row">
        <label>Your name<input name="name" placeholder="How should I address you?" autoComplete="name" required maxLength="100" /></label>
        <label>Email address<input type="email" name="email" placeholder="you@company.com" autoComplete="email" required maxLength="254" /></label>
      </div>
      <label>What would you like to discuss?
        <select name="topic" defaultValue="Role opportunity">
          <option>Role opportunity</option><option>Rust backend engineering</option><option>AI infrastructure</option><option>Blockchain / Solana</option><option>Other</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows="5" placeholder="A few details about the role, team, or problem..." required minLength="10" maxLength="4000" /></label>
      <div className="form-bottom"><button className="button button--primary" type="submit" disabled={sending}>{sending ? 'Sending message...' : 'Send enquiry'} <Icon name="arrow" /></button><span>Replies usually arrive within one working day.</span></div>
      <p className={`form-status ${status.startsWith('Your') ? 'form-status--success' : ''}`} aria-live="polite">{status}</p>
    </form>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const filters = ['All work', 'Rust Systems', 'AI Infrastructure', 'Blockchain', 'Solana', 'Full Stack']
  const visibleProjects = useMemo(() => activeFilter === 'All work' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sivaji Gadidala home"><span className="brand-mark">SG<span>.</span></span><span className="brand-caption">ENGINEER / BUILDER</span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Close' : 'Menu'}</span><b>{menuOpen ? '×' : '+'}</b></button>
        <nav id="primary-nav" className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Primary navigation">
          {[['Work', '#work'], ['About', '#about'], ['Experience', '#experience']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Icon name="arrow" size={14} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> BENGALURU, INDIA</p>
            <h1>I build the systems<br />behind <em>ambitious</em> products.</h1>
            <p className="hero-lead">Rust backend engineer working across AI infrastructure, blockchain, and full-stack products. I care about the hard parts: clear service boundaries, safe state changes, and software teams can operate.</p>
            <div className="hero-actions"><a className="button button--primary" href="#work">Explore selected work <Icon name="arrow" /></a><a className="button button--text" href="#contact">Start a conversation</a><a className="resume-link" href={`${import.meta.env.BASE_URL}Sivaji-Gadidala-Resume.pdf`} target="_blank" rel="noreferrer">View résumé <Icon name="arrow" size={13} /></a></div>
            <div className="hero-footnote"><span>OPEN TO RUST / AI INFRA / WEB3 ROLES</span><span>2+ YEARS SHIPPING SOFTWARE</span></div>
          </div>
          <div className="hero-art" aria-label="Engineering disciplines connected in a system map">
            <div className="hero-art-label"><span>BUILDING AT THE INTERSECTION</span><span>13°00' N / 77°34' E</span></div>
            <div className="art-core"><div className="core-ring core-ring--outer" /><div className="core-ring core-ring--inner" /><div className="core-center"><span>SG</span><i /></div><span className="core-label">SYSTEMS<br />THINKING</span></div>
            <div className="art-node art-node--rust"><span className="node-symbol">R</span><b>RUST</b><small>BACKEND SYSTEMS</small></div>
            <div className="art-node art-node--ai"><span className="node-symbol">✳</span><b>AI INFRA</b><small>INFERENCE ROUTING</small></div>
            <div className="art-node art-node--chain"><span className="node-symbol">⌘</span><b>WEB3</b><small>SOLANA / EVM</small></div>
            <div className="art-lines" aria-hidden="true"><i /><i /><i /></div>
            <div className="hero-art-bottom"><span>DESIGN / BUILD / OPERATE</span><span className="art-coordinate">01 — 06</span></div>
          </div>
        </section>

        <section className="signal-bar" aria-label="Core technologies"><div className="signal-track"><span>RUST</span><i /> <span>ASYNC SYSTEMS</span><i /> <span>AI INFRASTRUCTURE</span><i /> <span>SOLANA</span><i /> <span>POSTGRESQL</span><i /> <span>PRODUCT ENGINEERING</span><i /></div></section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 2025 — 2026</p><h2>Built to be <em>inspected.</em></h2></div><p className="section-intro">A working set of systems projects. Each repository includes implementation notes, operating assumptions, and a path to run it locally.</p></div>
          <div className="filter-row" aria-label="Filter projects">{filters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? 'filter-chip filter-chip--active' : 'filter-chip'} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}</div>
          <div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
          <a className="all-projects-link" href={profile.github} target="_blank" rel="noreferrer">Browse all repositories <Icon name="arrow" /></a>
        </section>

        <section className="about-section" id="about"><div className="section-wrap about-grid"><div className="about-lead"><p className="eyebrow"><span className="eyebrow-line" /> HOW I THINK</p><h2>Reliable by design.<br /><em>Useful by default.</em></h2><p>I move comfortably between service code, contracts, data models, and product UI. The goal is not complexity. It is software that behaves predictably when the network fails, a request is repeated, or a system needs to restart.</p><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my engineering notes <Icon name="arrow" /></a></div><div className="skills-board"><div className="skills-board-top"><span>CAPABILITY MAP</span><span>04 DOMAINS</span></div>{skillGroups.map((group, index) => <div className="skill-row" key={group.title}><span className="skill-index">0{index + 1}</span><div><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div></div>)}</div></div></section>

        <section className="experience-section section-wrap" id="experience"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE / 2023 — NOW</p><h2>Work that ships <em>forward.</em></h2></div><p className="section-intro">A grounded mix of product engineering, frontend craft, and backend ownership.</p></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker"><span>0{index + 1}</span><i /></div><div className="timeline-main"><div className="timeline-title"><div><h3>{item.role}</h3><p>{item.company} <span>/</span> {item.location}</p></div><time>{item.period}</time></div><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div><div className="education-line"><span>EDUCATION</span><p>B.Tech, Electronics and Communication Engineering</p><span>2019 — 2023</span></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-intro"><p className="eyebrow"><span className="eyebrow-line" /> CONTACT / THE NEXT BUILD</p><h2>Have a hard problem?<br /><em>Let’s talk.</em></h2><p>Hiring for backend, AI infrastructure, or blockchain engineering? Send a note with the role or system you’re building. I’ll get back to you directly.</p><div className="contact-shortcuts"><a href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn profile <Icon name="arrow" size={14} /></a></div><div className="booking-card"><div className="booking-icon"><Icon name="calendar" size={19} /></div><div><b>Prefer a quick intro?</b><p>Choose an available time for a 20-minute conversation.</p></div><a href={profile.scheduler} target="_blank" rel="noreferrer" aria-label="Book a meeting">Schedule <Icon name="arrow" size={14} /></a></div></div><div className="contact-panel"><div className="panel-heading"><span>PROJECT / ROLE ENQUIRY</span><span>FORM 01</span></div><ContactForm /><p className="privacy-note">Your details are used only to respond to this enquiry.</p></div></div></section>

        <section className="booking-section section-wrap" id="booking"><div><p className="eyebrow"><span className="eyebrow-line" /> SCHEDULING</p><h2>Put a conversation<br />on the <em>calendar.</em></h2><p>My booking page shows live availability and confirms the slot you choose.</p></div><div className="scheduler-panel"><div className="scheduler-panel-head"><span><Icon name="calendar" /> SIVAJI SCHEDULER</span><span className="scheduler-status"><i /> LIVE AVAILABILITY</span></div><div className="scheduler-panel-body"><div className="scheduler-calendar-art"><span>20</span><small>MIN INTRO</small></div><div><h3>Choose a time that works.</h3><p>See available slots, book a 20-minute introduction, and get the meeting details through my scheduling app.</p><a href={profile.scheduler} target="_blank" rel="noreferrer" className="button button--primary">Open booking calendar <Icon name="arrow" /></a></div></div><div className="scheduler-panel-foot"><span>TIME ZONE / YOUR LOCAL SETTINGS</span><a href={profile.scheduler} target="_blank" rel="noreferrer">sivaji-scheduler <Icon name="arrow" size={13} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">SG<span>.</span></span><span className="brand-caption">ENGINEER / BUILDER</span></a><p>Building dependable software,<br />one thoughtful system at a time.</p><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SIVAJI GADIDALA</span><span>{profile.location.toUpperCase()}</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </div>
  )
}

export default App
