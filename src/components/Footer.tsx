import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 60L48 65C96 70 192 80 288 83.3C384 87 480 83 576 73.3C672 63 768 47 864 43.3C960 40 1056 50 1152 56.7C1248 63 1344 67 1392 68.3L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
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
              <p className="footer-tagline">
                Transformando a educação médica com tecnologia de ponta
              </p>
            </div>
            
            <div className="footer-info">
              <div className="info-item">
                <span className="info-label">Apresentado por</span>
                <span className="info-value">Matheus Jimenez</span>
              </div>
              <div className="info-item">
                <span className="info-label">Com participação de</span>
                <span className="info-value">Leonardo Branco • Augusto Coelho</span>
              </div>
              <div className="info-item">
                <span className="info-label">Data da Reunião</span>
                <span className="info-value">10 de Outubro de 2025</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#highlights">Conquistas</a>
              <a href="#okrs">OKRs</a>
              <a href="#timeline">Timeline</a>
            </div>
            <p className="footer-copy">
              © 2025 Grupo Medcof. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

