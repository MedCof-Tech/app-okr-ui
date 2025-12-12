import './Highlights.css'

const highlights = [
  {
    icon: '🚀',
    title: 'Intranet',
    description: 'Lançamento da plataforma interna de comunicação'
  },
  {
    icon: '🔐',
    title: 'Hermes SSO',
    description: 'Sistema de autenticação única modernizado'
  },
  {
    icon: '👨‍🏫',
    title: 'Mentoria Singular',
    description: 'Projeto de mentoria personalizada para alunos'
  },
  {
    icon: '📊',
    title: 'Dashboard Parceiros',
    description: 'Painel de controle para parceiros estratégicos'
  },
  {
    icon: '🤖',
    title: 'Cofbot Prime',
    description: 'Assistente inteligente potencializado'
  },
  {
    icon: '📦',
    title: 'Cofice',
    description: 'Sistema de logística otimizado'
  },
  {
    icon: '👥',
    title: 'Comunidade',
    description: 'Criação de comunidade de alunos'
  },
  {
    icon: '🏗️',
    title: 'Infraestrutura',
    description: 'Internalização completa da infraestrutura'
  }
]

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      <div className="container">
        <div className="highlights-header">
          <span className="section-tag">Conquistas 2024-2025</span>
          <h2 className="section-title">
            De <span className="highlight-number">6</span> para{' '}
            <span className="highlight-number">20+</span> Projetos
          </h2>
          <p className="section-subtitle">
            Um salto exponencial em entregas que transformou a capacidade 
            tecnológica da Medcof
          </p>
        </div>
        
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="highlight-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="highlights-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="summary-content">
              <span className="summary-number">38 → 60</span>
              <span className="summary-label">Colaboradores</span>
            </div>
          </div>
          
          <div className="summary-card accent">
            <div className="summary-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <div className="summary-content">
              <span className="summary-number">+50%</span>
              <span className="summary-label">Crescimento do Time</span>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className="summary-content">
              <span className="summary-number">3x</span>
              <span className="summary-label">Capacidade de Entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights

