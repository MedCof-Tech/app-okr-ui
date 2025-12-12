import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">📋</span>
          <span className="badge-text">Reunião Geral - Anúncios Diretoria</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">OKRs</span>
          <span className="title-accent">Tecnologia</span>
          <span className="title-year">2025 → 2026</span>
        </h1>
        
        <p className="hero-subtitle">
          Objetivos e Resultados-Chave definidos na reunião do Triumvirato para 
          guiar a expansão sustentável da área de tecnologia da Medcof
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3x</span>
            <span className="stat-label">Capacidade de Entrega</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projetos Concluídos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">60</span>
            <span className="stat-label">Colaboradores</span>
          </div>
        </div>
        
        <div className="hero-cta">
          <a href="#okrs" className="cta-primary">
            Ver OKRs 2026
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
          <a href="#highlights" className="cta-secondary">
            Conquistas 2025
          </a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Role para explorar</span>
      </div>
    </section>
  )
}

export default Hero

