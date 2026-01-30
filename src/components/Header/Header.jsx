import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuAberto(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    document.body.style.overflow = !menuAberto ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setMenuAberto(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { nome: 'Início', href: '#inicio' },
    { nome: 'Soluções', href: '#soluções' },
    { nome: 'Portfolio', href: '#portfolio' },
    { nome: 'Planos', href: '#planos' },
    { nome: 'Sobre', href: '#sobre' },
    { nome: 'FAQ', href: '#faq' },
    { nome: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            {/* Logo */}
            <a href="#inicio" className="logo">
              <img 
                src="/assets/LOGO.png" 
                alt="DevTech Logo" 
                className="logo-img"
              />
              <span className="logo-text">DevTech</span>
            </a>

            {/* Menu Desktop */}
            <ul className="nav-links">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.nome}</a>
                </li>
              ))}
            </ul>

            {/* Botão Orçamento */}
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-comment-dollar"></i>
              Orçamento
            </button>

            {/* Botão Hamburguer (Mobile) */}
            <button 
              className={`menu-toggle ${menuAberto ? 'ativo' : ''}`}
              onClick={toggleMenu}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay do Menu Mobile */}
      <div 
        className={`overlay-menu ${menuAberto ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${menuAberto ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <a href="#inicio" className="logo" onClick={closeMenu}>
            <img 
              src="/assets/LOGO.png" 
              alt="DevTech Logo" 
              className="logo-img"
              style={{ width: '35px', height: '35px' }}
            />
            <span className="logo-text">DevTech</span>
          </a>
          
          <button className="close-menu" onClick={closeMenu} aria-label="Fechar menu">
            ×
          </button>
        </div>

        <ul className="mobile-nav-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                onClick={closeMenu}
              >
                {item.nome}
              </a>
            </li>
          ))}
        </ul>
        
        <div style={{ marginTop: '40px', padding: '0 20px' }}>
          <button className="btn btn-primary" onClick={closeMenu} style={{ width: '100%' }}>
            <i className="fas fa-comment-dollar"></i>
            Solicitar Orçamento
          </button>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '30px',
          right: '30px',
          textAlign: 'center',
          color: 'var(--gray)',
          fontSize: '0.9rem'
        }}>
          <p>DevTech © {new Date().getFullYear()}</p>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Transformando ideias em realidade digital</p>
        </div>
      </div>
    </>
  );
}

export default Header;