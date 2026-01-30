import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <section id="sobre" className="secao sobre" style={{
      background: '#0a0a0f',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar">👨‍💻 <span style={{ color: '#00f3ff' }}>Sobre</span> a DevTech</h2>
          <p className="section-subtitle revelar atraso-1">
            Conheça nossa história, missão e valores
          </p>
        </div>

        <div className="revelar atraso-1" style={{
          maxWidth: '800px',
          margin: '0 auto 60px',
          background: 'rgba(16, 16, 26, 0.8)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(0, 243, 255, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#b0b0d0', lineHeight: '1.8', marginBottom: '25px' }}>
            A <strong style={{ color: '#00f3ff' }}>DevTech</strong> nasceu da paixão por tecnologia e design. Combinamos 
            criatividade com as melhores práticas de desenvolvimento para entregar soluções 
            digitais que realmente fazem a diferença para nossos clientes.
          </p>
          <p style={{ color: '#b0b0d0', lineHeight: '1.8' }}>
            Nossa missão é simplificar o digital para empresas de todos os tamanhos, 
            oferecendo sites rápidos, modernos e otimizados para resultados concretos.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '25px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {[
            { 
              icon: '🎯', 
              title: 'Missão', 
              desc: 'Entregar excelência em cada projeto, superando expectativas',
              color: '#00f3ff'
            },
            { 
              icon: '💡', 
              title: 'Visão', 
              desc: 'Ser referência em desenvolvimento web no Brasil até 2025',
              color: '#b300ff'
            },
            { 
              icon: '✨', 
              title: 'Valores', 
              desc: 'Qualidade, Inovação, Transparência e Parceria',
              color: '#00ff88'
            }
          ].map((item, idx) => (
            <div key={idx} className={`revelar atraso-${idx + 2}`} style={{
              background: 'rgba(16, 16, 26, 0.8)',
              padding: '30px 25px',
              borderRadius: '15px',
              border: `1px solid ${item.color}20`,
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '20px'
              }}>
                {item.icon}
              </div>
              <h3 style={{ 
                color: item.color, 
                marginBottom: '15px',
                fontSize: '1.3rem'
              }}>
                {item.title}
              </h3>
              <p style={{ 
                color: '#b0b0d0',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Sobre;