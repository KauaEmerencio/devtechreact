import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clientes from './components/Clientes/Clientes';
import Solucoes from './components/Solucoes/Solucoes';
import Portfolio from './components/Portfolio/Portfolio';
import Planos from './components/Planos/Planos';
import Sobre from './components/Sobre/Sobre';
import FAQ from './components/FAQ/FAQ';
import Contato from './components/Contato/Contato';
import './style.css';

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <Hero />
      <Clientes />
      <Solucoes />
      <Portfolio />
      <Planos />
      <Sobre />
      <FAQ />
      <Contato />
      
      {/* Footer */}
      <footer style={{
        background: '#07070f',
        padding: '40px 0',
        borderTop: '1px solid rgba(0, 243, 255, 0.05)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00f3ff, #b300ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '10px',
              display: 'inline-block'
            }}>
              DevTech
            </span>
            <p style={{ 
              color: '#a0a0c0', 
              fontSize: '0.9rem',
              marginTop: '10px'
            }}>
              Transformando ideias em realidade digital
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            {['Início', 'Soluções', 'Portfolio', 'Planos', 'Sobre', 'FAQ', 'Contato'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#8a8aaa',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#00f3ff'}
                onMouseOut={(e) => e.target.style.color = '#8a8aaa'}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            paddingTop: '20px',
            color: '#666688',
            fontSize: '0.85rem'
          }}>
            <p style={{ marginBottom: '5px' }}>
              © {new Date().getFullYear()} DevTech. Todos os direitos reservados.
            </p>
            <p>
              React Version 1.0 • Desenvolvido com ❤️ por Kauã Emerencio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;