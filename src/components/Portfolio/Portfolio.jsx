import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projetos = [
    { 
      nome: 'Ivella', 
      tipo: 'E-commerce de Cosméticos', 
      cor: '#ff6b9d',
      desc: 'Loja online completa com catálogo de produtos e checkout integrado'
    },
    { 
      nome: 'Studio Kaline', 
      tipo: 'Site Institucional', 
      cor: '#9d4edd',
      desc: 'Website para estúdio de design com portfolio interativo'
    },
    { 
      nome: 'The Flowerist', 
      tipo: 'Landing Page', 
      cor: '#4dff91',
      desc: 'Página de conversão para floricultura com agendamento online'
    }
  ];

  return (
    <section id="portfolio" className="secao portfolio" style={{
      background: '#0a0a0f',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar">🎨 <span style={{ color: '#b300ff' }}>Portfolio</span> de Projetos</h2>
          <p className="section-subtitle revelar atraso-1">
            Confira alguns dos nossos trabalhos mais recentes
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {projetos.map((proj, idx) => (
            <div key={idx} className={`revelar atraso-${idx + 1}`} style={{
              background: 'rgba(16, 16, 26, 0.8)',
              padding: '30px',
              borderRadius: '15px',
              border: `1px solid ${proj.cor}20`,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: `linear-gradient(90deg, ${proj.cor}, ${proj.cor}80)`
              }}></div>
              
              <div style={{
                width: '70px',
                height: '70px',
                background: `linear-gradient(135deg, ${proj.cor}, #ffffff)`,
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#0a0a0f'
              }}>
                {proj.nome.charAt(0)}
              </div>
              
              <h3 style={{ 
                color: proj.cor, 
                marginBottom: '10px',
                fontSize: '1.4rem'
              }}>
                {proj.nome}
              </h3>
              
              <p style={{ 
                color: '#b0b0d0',
                fontWeight: '500',
                marginBottom: '15px'
              }}>
                {proj.tipo}
              </p>
              
              <p style={{ 
                color: '#8a8aaa',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;