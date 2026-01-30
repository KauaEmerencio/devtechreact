import React from 'react';
import './Planos.css';

function Planos() {
  const planos = [
    { 
      nome: 'Essencial', 
      preco: 'R$ 999', 
      cor: '#00f3ff', 
      features: [
        '1 Página Web',
        'Design Responsivo',
        'SEO Básico',
        'Entrega em 7 dias',
        'Suporte por 15 dias'
      ]
    },
    { 
      nome: 'Delivery', 
      preco: 'R$ 1.999', 
      cor: '#b300ff', 
      features: [
        'Até 5 Páginas',
        'Blog Integrado',
        'SEO Avançado',
        'Formulário de Contato',
        'Google Analytics',
        'Suporte por 30 dias'
      ],
      popular: true
    },
    { 
      nome: 'Personalizado', 
      preco: 'Sob Consulta', 
      cor: '#00ff88', 
      features: [
        'Páginas Ilimitadas',
        'E-commerce Completo',
        'Sistema Personalizado',
        'Integração com APIs',
        'Otimização Performance',
        'Suporte 24/7'
      ]
    }
  ];

  return (
    <section id="planos" className="secao planos" style={{
      background: 'linear-gradient(180deg, #090913 0%, #0a0a0f 100%)',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar">💰 <span style={{ color: '#00ff88' }}>Planos</span> que Cabem no Seu Bolso</h2>
          <p className="section-subtitle revelar atraso-1">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {planos.map((plano, idx) => (
            <div key={idx} className={`revelar atraso-${idx + 1}`} style={{
              background: 'rgba(16, 16, 26, 0.9)',
              padding: '40px 30px',
              borderRadius: '15px',
              border: `2px solid ${plano.cor}40`,
              textAlign: 'center',
              position: 'relative',
              transform: plano.popular ? 'scale(1.05)' : 'scale(1)',
              zIndex: plano.popular ? '2' : '1'
            }}>
              {plano.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #b300ff, #ff00cc)',
                  color: 'white',
                  padding: '8px 25px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  MAIS POPULAR
                </div>
              )}
              
              <h3 style={{ 
                color: plano.cor, 
                marginBottom: '15px',
                fontSize: '1.6rem'
              }}>
                {plano.nome}
              </h3>
              
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#fff', 
                marginBottom: '20px' 
              }}>
                {plano.preco}
                {plano.preco !== 'Sob Consulta' && (
                  <span style={{ fontSize: '1rem', color: '#8a8aaa' }}>/ à vista</span>
                )}
              </div>
              
              <ul style={{ 
                textAlign: 'left', 
                color: '#b0b0d0', 
                marginBottom: '30px', 
                paddingLeft: '20px',
                listStyle: 'none'
              }}>
                {plano.features.map((feat, i) => (
                  <li key={i} style={{ 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: plano.cor, 
                      marginRight: '10px',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button style={{
                background: `linear-gradient(135deg, ${plano.cor}, ${plano.cor}80)`,
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1rem',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                {plano.preco === 'Sob Consulta' ? 'Fazer Orçamento' : 'Escolher Plano'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planos;