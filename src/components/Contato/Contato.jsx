import React, { useState } from 'react';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({ 
    nome: '', 
    email: '', 
    telefone: '',
    tipoProjeto: '',
    mensagem: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
    setFormData({ nome: '', email: '', telefone: '', tipoProjeto: '', mensagem: '' });
  };

  return (
    <section id="contato" className="secao contato" style={{
      background: '#0a0a0f',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar">📞 <span style={{ color: '#00ff88' }}>Contato</span></h2>
          <p className="section-subtitle revelar atraso-1">
            Entre em contato para conversarmos sobre seu projeto
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          marginTop: '50px'
        }}>
          {/* Informações de Contato */}
          <div className="revelar atraso-1">
            <h3 style={{ 
              color: '#00f3ff', 
              marginBottom: '25px',
              fontSize: '1.5rem'
            }}>
              Informações de Contato
            </h3>
            
            <div style={{ 
              background: 'rgba(16, 16, 26, 0.8)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid rgba(0, 243, 255, 0.2)'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <span style={{ color: '#00f3ff', marginRight: '10px' }}>📧</span>
                  <strong style={{ color: '#fff' }}>E-mail:</strong>
                </div>
                <p style={{ color: '#b0b0d0', marginLeft: '30px' }}>
                  contato@devtech.com
                </p>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <span style={{ color: '#00f3ff', marginRight: '10px' }}>📱</span>
                  <strong style={{ color: '#fff' }}>Telefone/WhatsApp:</strong>
                </div>
                <p style={{ color: '#b0b0d0', marginLeft: '30px' }}>
                  (11) 99999-9999
                </p>
              </div>
              
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <span style={{ color: '#00f3ff', marginRight: '10px' }}>🕒</span>
                  <strong style={{ color: '#fff' }}>Horário de Atendimento:</strong>
                </div>
                <p style={{ color: '#b0b0d0', marginLeft: '30px' }}>
                  Segunda a Sexta, 9h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="revelar atraso-2">
            <form onSubmit={handleSubmit} style={{
              background: 'rgba(16, 16, 26, 0.8)',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid rgba(0, 243, 255, 0.2)'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Seu nome completo *"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Seu melhor e-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <select
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    borderRadius: '8px',
                    color: formData.tipoProjeto ? '#fff' : '#8a8aaa',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">Tipo de projeto *</option>
                  <option value="site-institucional">Site Institucional</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <textarea 
                  name="mensagem"
                  placeholder="Conte-nos sobre seu projeto *"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                />
              </div>

              <button type="submit" style={{
                background: 'linear-gradient(135deg, #00f3ff, #00ff88)',
                color: '#0a0a0f',
                border: 'none',
                padding: '16px 40px',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;