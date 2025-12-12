import './Timeline.css'

const timelineEvents = [
  {
    date: '2024',
    title: 'Fundação Tecnológica',
    description: 'Início com 38 colaboradores e 6 projetos principais. Lançamento da intranet, Hermes SSO e Cofbot.',
    icon: '🌱',
    achievements: ['Intranet', 'Hermes SSO', 'Dashboard Parceiros']
  },
  {
    date: 'Jan-Out 2025',
    title: 'Aceleração e Crescimento',
    description: 'Triplicamos a capacidade de entrega com 50% de crescimento no time. Mais de 20 projetos concluídos.',
    icon: '🚀',
    achievements: ['60 Colaboradores', '20+ Projetos', 'Cofbot Prime']
  },
  {
    date: 'Nov 2025',
    title: 'The Last Dance',
    description: 'Oficina intensiva de 15-21 de novembro na sede de São Paulo. Foco total nas provas de residência médica.',
    icon: '💃',
    achievements: ['Oficina SP', 'Integração Teams', 'Focus R1']
  },
  {
    date: '2026',
    title: 'Expansão Sustentável',
    description: 'Visão de futuro com equipe de dados, cibersegurança, IA expandida e cobertura completa do ciclo do aluno.',
    icon: '🎯',
    achievements: ['Data Team', 'Cybersecurity', 'Full AI']
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="timeline-header">
          <span className="section-tag">Jornada</span>
          <h2 className="section-title">
            Nossa <span className="highlight-text">Evolução</span>
          </h2>
          <p className="section-subtitle">
            Do início promissor ao futuro ambicioso
          </p>
        </div>
        
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{event.icon}</div>
                <span className="timeline-date">{event.date}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                <div className="timeline-achievements">
                  {event.achievements.map((achievement, aIndex) => (
                    <span key={aIndex} className="achievement-tag">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
        
        <div className="timeline-cta">
          <div className="cta-card">
            <div className="cta-icon">🏆</div>
            <div className="cta-content">
              <h3>Prêmio Cruzeiro</h3>
              <p>4 noites de Santos a Búzios e Angra dos Reis para participantes da oficina</p>
              <span className="cta-date">10-14 de Novembro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

