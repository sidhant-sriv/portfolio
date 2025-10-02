import { useEffect, useState } from 'react'
import '../styles/retro.css'
import projectsData from '../data/projectsData'
import skillsData from '../data/skillsData'

const RetroPortfolio = () => {
  const [active, setActive] = useState('about')
  const [theme, setTheme] = useState('dark')

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
        <p className="subtitle">Software Engineer & Competitive Programmer</p>
        <div className="intro-text">
          <p>Welcome to my digital portfolio! I'm a passionate software engineer currently pursuing my B.Tech in Computer Science Engineering at Vellore Institute of Technology (VIT). With a strong foundation in competitive programming, software development, and AI/ML technologies, I bring a unique blend of technical expertise and problem-solving skills to every project.</p>
          <p>My journey in technology has been marked by consistent excellence - from ranking in the top 2% of over 12,000 students in competitive programming to leading technical initiatives at Google Developer Student Club. I have hands-on experience working with modern technologies including React, Node.js, Python, and various cloud platforms, gained through internships at innovative companies like Clearfeed.ai and Loopedin.ai.</p>
          <p>I'm passionate about building scalable applications, optimizing development workflows, and contributing to open-source projects. My goal is to leverage technology to solve real-world problems and create meaningful impact in the software development community.</p>
        </div>
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
          <div className="card-title">About Sidhant Srivastava</div>
          <div className="card-content">
            <p>I am a passionate software engineer and competitive programmer currently pursuing my B.Tech in Computer Science Engineering at Vellore Institute of Technology (VIT). My journey in technology began with a deep fascination for problem-solving and algorithmic thinking, which led me to excel in competitive programming and secure a position among the top 2% of over 12,000 students across all VIT campuses.</p>
            <p>My expertise spans across multiple domains including software development, artificial intelligence, machine learning, and full-stack development. I have hands-on experience working with modern technologies like React, Node.js, Python, and various cloud platforms. Through my internships at Clearfeed.ai and Loopedin.ai, I have gained valuable industry experience in building scalable applications and improving development workflows.</p>
            <p>As an active member of the Google Developer Student Club at VIT, I lead the Inner Core Tech Team where I mentor 50+ members and organize hackathons that attract 200+ participants. This leadership role has helped me develop strong communication skills and the ability to guide teams toward successful project completion.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Education</div>
          <div className="card-subtitle">Vellore Institute of Technology (VIT) • 2022 - 2026</div>
          <div className="card-content">B.Tech in Computer Science Engineering with focus on software development, algorithms, and artificial intelligence.</div>
        </div>
        <div className="card">
          <div className="card-title">Achievements</div>
          <div className="card-subtitle">Top Coder @ VIT University 2025</div>
          <div className="card-content">Ranked in the top 2% of over 12,000 students in competitive programming across all VIT campuses, demonstrating exceptional problem-solving skills and algorithmic thinking.</div>
        </div>
        <div className="card">
          <div className="card-title">Leadership</div>
          <div className="card-subtitle">Google Developer Student Club, VIT • 2023 - Present</div>
          <div className="card-content">Inner Core Tech Team — Led ML/backend projects for 50+ members; organized 3 hackathons with 200+ participants, fostering innovation and technical excellence in the developer community.</div>
        </div>
      </div>

      <div id="experience" className={`content-section ${active === 'experience' ? 'active' : ''}`}>
        <div className="card">
          <div className="card-title">Professional Experience</div>
          <div className="card-content">
            <p>My professional journey showcases a strong foundation in software development, with hands-on experience in both startup and enterprise environments. I have worked on cutting-edge technologies including AI/ML platforms, workflow automation, and modern web applications.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Clearfeed.ai</div>
          <div className="card-subtitle">SDE Intern • May 2025 - July 2025</div>
          <div className="card-content">
            <p>During my internship at Clearfeed.ai, I contributed to significant product improvements and infrastructure optimization. My key achievements include:</p>
            <ul>
              <li>Engineered Slack Connect integration and revamped pricing page, resulting in a 15% increase in user engagement and conversion rates</li>
              <li>Overhauled the entire CI/CD pipeline, cutting build times by 60% and boosting deployment frequency by 80%, enabling faster feature delivery</li>
              <li>Collaborated with cross-functional teams to implement new features and improve system reliability</li>
              <li>Participated in code reviews and mentored junior developers on best practices</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Loopedin.ai</div>
          <div className="card-subtitle">Part-Time Backend Developer • July 2024 - April 2025</div>
          <div className="card-content">
            <p>At Loopedin.ai, I worked on building an innovative agentic AI workflow platform designed to handle complex multi-step tasks efficiently. My contributions include:</p>
            <ul>
              <li>Improved the core agentic AI workflow platform architecture for handling complex multi-step tasks and decision trees</li>
              <li>Built robust Gmail and JIRA integrations using REST APIs and webhooks, reducing manual data entry by 90%</li>
              <li>Implemented automated workflow triggers and conditional logic for seamless task execution</li>
              <li>Optimized database queries and API response times to improve platform performance</li>
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

