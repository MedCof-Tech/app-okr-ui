import './OKRSection.css'

const okrs = [
  {
    id: 1,
    objective: 'Expansão Sustentável da Área de Tecnologia',
    description: 'Crescer a equipe e as capacidades técnicas de forma estratégica e sustentável',
    icon: '🏗️',
    color: 'burgundy',
    keyResults: [
      {
        title: 'Crescimento da Cultura de Dados',
        description: 'Formar equipe dedicada de Data Analytics para decisões baseadas em dados',
        metric: 'Nova Equipe'
      },
      {
        title: 'Equipe de Cibersegurança',
        description: 'Criar equipe especializada para combater pirataria e proteger propriedade intelectual',
        metric: 'Proteção IP'
      },
      {
        title: 'Investimento em Infraestrutura',
        description: 'Investimento contínuo em infraestrutura robusta e segura',
        metric: 'Contínuo'
      }
    ]
  },
  {
    id: 2,
    objective: 'Expansão da Inteligência Artificial',
    description: 'Automatizar processos internos e potencializar a experiência do aluno com IA',
    icon: '🤖',
    color: 'gold',
    keyResults: [
      {
        title: 'Automação de Processos Internos',
        description: 'Implementar IA para otimizar workflows e reduzir tarefas repetitivas',
        metric: 'Automação'
      },
      {
        title: 'IA para Experiência do Aluno',
        description: 'Aplicar inteligência artificial para personalizar e melhorar o aprendizado',
        metric: 'Personalização'
      },
      {
        title: 'Cofbot Prime Evolution',
        description: 'Evoluir o assistente inteligente com novas capacidades',
        metric: 'Evolução'
      }
    ]
  },
  {
    id: 3,
    objective: 'Abranger Todo o Ciclo do Aluno',
    description: 'Expandir a cobertura para internato e ciclo básico, dominando toda a jornada',
    icon: '🎓',
    color: 'burgundy',
    keyResults: [
      {
        title: 'Produtos para Internato',
        description: 'Desenvolver soluções específicas para alunos do internato médico',
        metric: 'R1 Focus'
      },
      {
        title: 'Cobertura do Ciclo Básico',
        description: 'Expandir para atender estudantes desde o início da graduação',
        metric: 'Expansão'
      },
      {
        title: 'Jornada Completa',
        description: 'Criar uma experiência integrada do início ao fim da formação médica',
        metric: 'Integração'
      }
    ]
  },
  {
    id: 4,
    objective: 'Antecipar Desenvolvimento de Produtos',
    description: 'Ser proativo no desenvolvimento, antecipando necessidades dos alunos',
    icon: '⚡',
    color: 'gold',
    keyResults: [
      {
        title: 'Planejamento Antecipado',
        description: 'Estruturar roadmap de produtos com maior antecedência',
        metric: 'Roadmap'
      },
      {
        title: 'Foco em Residência Médica',
        description: 'Priorizar funcionalidades voltadas para aprovação em provas',
        metric: 'Provas'
      },
      {
        title: 'Entrega de Valor Direto',
        description: 'Garantir que cada feature entregue valor tangível ao aluno',
        metric: 'Impacto'
      }
    ]
  }
]

const OKRSection = () => {
  return (
    <section id="okrs" className="okr-section">
      <div className="container">
        <div className="okr-header">
          <span className="section-tag">Visão 2026</span>
          <h2 className="section-title">
            OKRs <span className="highlight-text">Estratégicos</span>
          </h2>
          <p className="section-subtitle">
            Objetivos e Resultados-Chave para guiar a evolução da tecnologia Medcof
          </p>
        </div>
        
        <div className="okr-grid">
          {okrs.map((okr, index) => (
            <div 
              key={okr.id} 
              className={`okr-card ${okr.color}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="okr-card-header">
                <span className="okr-icon">{okr.icon}</span>
                <span className="okr-number">O{okr.id}</span>
              </div>
              
              <h3 className="okr-objective">{okr.objective}</h3>
              <p className="okr-description">{okr.description}</p>
              
              <div className="key-results">
                <span className="kr-label">Key Results</span>
                {okr.keyResults.map((kr, krIndex) => (
                  <div key={krIndex} className="kr-item">
                    <div className="kr-header">
                      <span className="kr-badge">KR{krIndex + 1}</span>
                      <span className="kr-metric">{kr.metric}</span>
                    </div>
                    <h4 className="kr-title">{kr.title}</h4>
                    <p className="kr-description">{kr.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OKRSection

