import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Seu negócio <span className="text-highlight">merece um site profissional</span>
            </motion.h1>
            
            <p className="hero-subtitle">
              Criamos sites acessíveis e funcionais para <strong>restaurantes, pequenos negócios e profissionais</strong>. 
              Do básico ao avançado, sem complicações.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Pronto em Semanas</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Otimizado para celular</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Suporte incluso</span>
              </div>
              <div className="feature">
                <FaCheckCircle className="feature-icon" />
                <span>Sites <strong>100% personalizados</strong></span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <motion.a
                href="https://wa.me/5579998107310?text=Olá! Quero um orçamento para meu site"
                className="btn btn-primary btn-whatsapp pulsante"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> Falar no WhatsApp
              </motion.a>
              
              <motion.a
                href="#planos"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Planos
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            className="hero-visual flutuante"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="demo-site">
              <div className="demo-header">
                <div className="demo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="demo-url">
                  seurestaurante.com/loja.com <br />
                  Demostração
                </div>
              </div>
              <div className="demo-content">
                <div className="demo-restaurant">
                  <div className="demo-restaurant-header">
                    <h4>🍽️ SeuNegocio.com</h4>
                    <span className="demo-badge">Aberto</span>
                  </div>
                  <div className="demo-menu">
                    <div className="menu-item">
                      <span>XXXXXXX</span>
                      <span>R$XXXXX</span>
                    </div>
                    <div className="menu-item">
                      <span>XXXXXXX</span>
                      <span>R$XXXXXX</span>
                    </div>
                  </div>
                  <button className="demo-whatsapp-btn">
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;