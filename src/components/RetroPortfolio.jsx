import { useEffect, useState } from 'react'
import '../styles/retro.css'
import projectsData from '../data/projectsData'
import skillsData from '../data/skillsData'

const RetroPortfolio = () => {
  const [active, setActive] = useState('about')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    return () => document.body.removeAttribute('data-theme')
  }, [theme])

  // Sync active section with URL hash
  useEffect(() => {
    const valid = ['about','experience','projects','skills']
    const fromHash = window.location.hash?.replace('#','')
    if (fromHash && valid.includes(fromHash)) {
      setActive(fromHash)
    }
    const onHashChange = () => {
      const h = window.location.hash?.replace('#','')
      if (h && valid.includes(h)) setActive(h)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const current = window.location.hash?.replace('#','')
    if (current !== active) {
      window.history.replaceState(null, '', `#${active}`)
    }
  }, [active])

  const showSection = (id) => {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
  }
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <div className="container">
      <svg className="bulb-toggle" onClick={toggleTheme} viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <path className="bulb" d="M50 10 C30 10 15 25 15 45 C15 60 25 70 25 85 L75 85 C75 70 85 60 85 45 C85 25 70 10 50 10 Z M30 90 L70 90 L70 100 L30 100 Z M35 105 L65 105 L62 120 L38 120 Z"/>
      </svg>

      <header>
        <h1>Sidhant Srivastava</h1>
        <p className="subtitle">Software Engineer</p>
        <div className="contact-links">
          <a href="mailto:sidhant.sriv@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/sidhant-srivastava-41803620b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/sidhant-sriv" target="_blank" rel="noreferrer">GitHub</a>
          <a href="tel:+916366017002">+91 63660 17002</a>
        </div>
      </header>

      <nav className="nav-menu">
        {['about','experience','projects','skills'].map((id) => (
          <button key={id} className={`nav-btn ${active === id ? 'active' : ''}`} onClick={() => showSection(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      <div id="about" className={`content-section ${active === 'about' ? 'active' : ''}`}>
        <div className="card">
          <div className="card-title">Education</div>
          <div className="card-subtitle">Vellore Institute of Technology (VIT) • 2022 - 2026</div>
          <div className="card-content">B.Tech in Computer Science Engineering</div>
        </div>
        <div className="card">
          <div className="card-title">Achievements</div>
          <div className="card-subtitle">Top Coder @ VIT University 2025</div>
          <div className="card-content">Ranked in the top 2% of over 12,000 students in competitive programming across all VIT campuses.</div>
        </div>
        <div className="card">
          <div className="card-title">Leadership</div>
          <div className="card-subtitle">Google Developer Student Club, VIT • 2023 - Present</div>
          <div className="card-content">Inner Core Tech Team — Led ML/backend projects for 50+ members; organized 3 hackathons with 200+ participants.</div>
        </div>
      </div>

      <div id="experience" className={`content-section ${active === 'experience' ? 'active' : ''}`}>
        <div className="card">
          <div className="card-title">Clearfeed.ai</div>
          <div className="card-subtitle">SDE Intern • May 2025 - July 2025</div>
          <div className="card-content">
            <ul>
              <li>Engineered Slack Connect integration and revamped pricing page, +15% engagement</li>
              <li>Overhauled CI/CD, cutting build times and boosting deployment frequency by 80%</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Loopedin.ai</div>
          <div className="card-subtitle">Part-Time Backend Developer • July 2024 - April 2025</div>
          <div className="card-content">
            <ul>
              <li>Improved agentic AI workflow platform for complex multi-step tasks</li>
              <li>Built Gmail and JIRA integrations, reducing manual data entry by 90%</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects" className={`content-section ${active === 'projects' ? 'active' : ''}`}>
        {projectsData.map((p) => (
          <div key={p.id} className="card">
            <div className="card-title">{p.title}</div>
            {p.categories && p.categories.length > 0 && (
              <div className="card-subtitle">{p.categories.join(' • ')}</div>
            )}
            <div className="card-content">
              <ul>
                <li>{p.description}</li>
                {p.tags && p.tags.length > 0 && (
                  <li>
                    <div className="skills-grid">
                      {p.tags.slice(0,6).map((t) => (
                        <div key={t} className="skill-tag">{t}</div>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div id="skills" className={`content-section ${active === 'skills' ? 'active' : ''}`}>
        {skillsData.map((group) => (
          <div key={group.name} className="card">
            <div className="card-title">{group.name}</div>
            <div className="skills-grid">
              {group.skills.map((s) => (
                <div key={s.name} className="skill-tag" title={s.proficiency ? `${s.proficiency}%` : undefined}>{s.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RetroPortfolio

