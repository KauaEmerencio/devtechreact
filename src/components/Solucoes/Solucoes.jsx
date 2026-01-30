import React from 'react';
import './Solucoes.css';

// Imagens temporárias - depois coloque as imagens reais
const solucoesData = [
  {
    id: 1,
    titulo: 'Site Institucional',
    descricao: 'Sua empresa com presença digital profissional',
    icone: '🏢',
    cor: '#00f3ff',
    caracteristicas: [
      'Design responsivo',
      'SEO otimizado',
      'Painel administrativo',
      'Integração com redes sociais'
    ]
  },
  {
    id: 2,
    titulo: 'Landing Page',
    descricao: 'Converta visitantes em clientes',
    icone: '🚀',
    cor: '#b300ff',
    caracteristicas: [
      'Design de alta conversão',
      'Formulários inteligentes',
      'A/B Testing',
      'Integração com CRM'
    ]
  },
  {
    id: 3,
    titulo: 'Landing Page',
    descricao: 'Converta visitantes em clientes',
    icone: '🚀',
    cor: '#b300ff',
    caracteristicas: [
      'Design de alta conversão',
      'Formulários inteligentes',
      'A/B Testing',
      'Integração com CRM'
    ]
  },
  {
    id: 3,
    titulo: 'Portfolio Digital',
    descricao: 'Mostre seu trabalho ao mundo',
    icone: '🎨',
    cor: '#00ff88',
    caracteristicas: [
      'Galeria interativa',
      'Filtros por categoria',
      'Depoimentos',
      'Blog integrado'
    ]
  }
];

function Solucoes() {
  return (
    <section id="soluções" className="secao solucoes" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #090913 100%)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar" style={{
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #00f3ff, #b300ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            💡 Nossas Soluções
          </h2>
          <p className="section-subtitle revelar atraso-1" style={{
            fontSize: '1.2rem',
            color: '#a0a0c0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Desenvolvemos soluções digitais completas que impulsionam seu negócio
          </p>
        </div>

        <div className="solucoes-grid">
          {solucoesData.map((solucao, index) => (
            <div 
              key={solucao.id}
              className={`solucao-card revelar atraso-${index + 1}`}
              style={{
                '--cor-destaque': solucao.cor
              }}
            >
              <div className="solucao-icone" style={{
                background: `linear-gradient(135deg, ${solucao.cor}20, ${solucao.cor}10)`,
                border: `2px solid ${solucao.cor}30`
              }}>
                <span style={{ 
                  fontSize: '3rem',
                  color: solucao.cor
                }}>
                  {solucao.icone}
                </span>
              </div>
              
              <h3 style={{ 
                color: solucao.cor,
                fontSize: '1.8rem',
                margin: '25px 0 15px',
                fontWeight: '700'
              }}>
                {solucao.titulo}
              </h3>
              
              <p className="solucao-descricao" style={{
                color: '#b0b0d0',
                fontSize: '1.1rem',
                marginBottom: '25px',
                lineHeight: '1.5'
              }}>
                {solucao.descricao}
              </p>
              
              <ul className="solucao-lista">
                {solucao.caracteristicas.map((item, idx) => (
                  <li key={idx} style={{
                    color: '#8a8aaa',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{
                      color: solucao.cor,
                      marginRight: '10px',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="solucao-botao" style={{
                background: `linear-gradient(135deg, ${solucao.cor}, ${solucao.cor}80)`,
                marginTop: '25px'
              }}>
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solucoes;