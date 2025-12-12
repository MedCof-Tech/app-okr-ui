import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 5C25 8 22 15 22 22C22 29 25 36 30 39C35 36 38 29 38 22C38 15 35 8 30 5Z" fill="currentColor"/>
              <path d="M30 20C25 23 22 30 22 37C22 44 25 51 30 54C35 51 38 44 38 37C38 30 35 23 30 20Z" fill="currentColor" opacity="0.7"/>
              <path d="M30 12C27 14 25 19 25 25C25 31 27 36 30 38C33 36 35 31 35 25C35 19 33 14 30 12Z" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">MEDCOF</span>
            <span className="logo-sub">TECH</span>
          </div>
        </div>
        
        <nav className="nav">
          <a href="#highlights" className="nav-link">Conquistas</a>
          <a href="#okrs" className="nav-link">OKRs 2026</a>
          <a href="#timeline" className="nav-link">Timeline</a>
        </nav>

        <div className="header-cta">
          <span className="header-date">10 de Outubro, 2025</span>
        </div>
      </div>
    </header>
  )
}

export default Header

