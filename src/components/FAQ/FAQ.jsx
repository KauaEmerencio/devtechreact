import React, { useState } from 'react';
import './Faq.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      pergunta: 'Quanto tempo leva para desenvolver um site?', 
      resposta: 'O tempo varia conforme a complexidade: Sites institucionais (1-2 semanas), Landing Pages (3-5 dias), E-commerces (3-4 semanas). Sempre mantemos você informado sobre cada etapa.' 
    },
    { 
      pergunta: 'Vocês oferecem suporte após a entrega?', 
      resposta: 'Sim! Todos os planos incluem suporte gratuito por 30 dias após a entrega. Para o plano Personalizado, oferecemos suporte 24/7 por 90 dias.' 
    },
    { 
      pergunta: 'Posso alterar o conteúdo do site depois?', 
      resposta: 'Sim! Todos os sites incluem um painel administrativo (CMS) onde você pode atualizar textos, imagens e produtos facilmente, sem precisar de conhecimento técnico.' 
    },
    { 
      pergunta: 'Os sites são responsivos (mobile)?', 
      resposta: 'Sim! Todos os sites são desenvolvidos com design responsivo, funcionando perfeitamente em celulares, tablets e desktops. Isso é essencial para SEO e experiência do usuário.' 
    },
    { 
      pergunta: 'Incluem domínio e hospedagem?', 
      resposta: 'Não incluímos domínio, mas auxiliamos na compra. A hospedagem está incluída no primeiro ano para os planos Delivery e Personalizado.' 
    },
    { 
      pergunta: 'Posso migrar meu site atual?', 
      resposta: 'Sim! Fazemos migração de sites de qualquer plataforma. Mantemos todo o conteúdo e melhoramos a performance e design.' 
    }
  ];

  return (
    <section id="faq" className="secao faq" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #090913 100%)',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="section-header">
          <h2 className="revelar">❓ <span style={{ color: '#b300ff' }}>FAQ</span> - Perguntas Frequentes</h2>
          <p className="section-subtitle revelar atraso-1">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '50px auto 0' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`revelar atraso-${idx + 1}`} style={{
              background: 'rgba(16, 16, 26, 0.8)',
              marginBottom: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(0, 243, 255, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1rem'
                }}
              >
                <span style={{ fontWeight: '600' }}>{faq.pergunta}</span>
                <span style={{ 
                  color: '#00f3ff', 
                  fontSize: '1.5rem',
                  minWidth: '30px',
                  textAlign: 'center'
                }}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div style={{
                  padding: '0 20px 20px 20px',
                  color: '#b0b0d0',
                  borderTop: '1px solid rgba(0, 243, 255, 0.1)',
                  lineHeight: '1.6'
                }}>
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;