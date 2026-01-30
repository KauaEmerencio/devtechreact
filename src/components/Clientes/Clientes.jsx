import React from 'react';
import { FaLaptopCode, FaStore, FaUserTie, FaCheck } from 'react-icons/fa';
import './Clientes.css';

function Clientes() {
  return (
    <section id="clientes" className="secao bg-light revelar">
      <div className="container">
        <div className="section-header">
          <h2>Especialistas em:</h2>
          <p className="section-subtitle">Criamos a presença digital ideal para cada tipo de negócio</p>
        </div>
        
        <div className="clients-grid">
          {/* Card 1: Software para Negócios Modernos */}
          <div className="client-card revelar">
            <div className="client-icon">
              <FaLaptopCode />
            </div>
            <h3>Software para Negócios Modernos</h3>
            <p>Soluções digitais com agendamento, vendas e presença online em um só sistema.</p>
            <ul className="client-features">
              <li><FaCheck /> Plataforma digital moderna e intuitiva</li>
              <li><FaCheck /> Agendamentos e pedidos em poucos cliques</li>
              <li><FaCheck /> Canais de contato rápidos e integrados</li>
              <li><FaCheck /> Presença digital que gera autoridade</li>
              <li><FaCheck /> Mais alcance, mais clientes</li>
              <li><FaCheck /> Automação para vender todos os dias</li>
            </ul>
          </div>
          
          {/* Card 2: Pequenos Negócios (DESTAQUE) */}
          <div className="client-card highlight revelar atraso-1">
            <div className="client-icon">
              <FaStore />
            </div>
            <h3>Pequenos Negócios</h3>
            <p>Site institucional completo com catálogo de produtos, localização e contato direto.</p>
            <ul className="client-features">
              <li><FaCheck /> Presença online profissional que gera confiança</li>
              <li><FaCheck /> Apresentação clara de produtos ou serviços</li>
              <li><FaCheck /> Contato rápido para fechar vendas</li>
              <li><FaCheck /> Localização fácil para clientes encontrarem você</li>
              <li><FaCheck /> Mais visibilidade para o seu negócio</li>
              <li><FaCheck /> Redes sociais integradas</li>
            </ul>
          </div>
          
          {/* Card 3: Landing Page */}
          <div className="client-card highlight revelar atraso-1">
            <div className="client-icon">
              <FaStore />
            </div>
            <h3>Landing Page</h3>
            <p>Página estratégica desenvolvida para apresentar um produto, serviço ou negócio, com foco em conversão de visitantes em clientes.</p>
            <ul className="client-features">
              <li><FaCheck /> Design profissional e responsivo</li>
              <li><FaCheck /> Conversão de visitantes em clientes</li>
              <li><FaCheck /> Comunicação rápida e direta com o público</li>
              <li><FaCheck /> Presença digital profissional</li>
              <li><FaCheck /> Página leve, rápida e eficiente</li>
            </ul>
          </div>
          
          {/* Card 4: Profissionais */}
          <div className="client-card revelar atraso-2">
            <div className="client-icon">
              <FaUserTie />
            </div>
            <h3>Profissionais</h3>
            <p>Portfólio online que mostra seu trabalho e atrai novos clientes para seu serviço.</p>
            <ul className="client-features">
              <li><FaCheck /> Apresentação dos serviços</li>
              <li><FaCheck /> Confiança para novos clientes</li>
              <li><FaCheck /> Contato rápido e sem burocracia</li>
              <li><FaCheck /> Clareza total sobre seus serviços e diferenciais</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clientes;