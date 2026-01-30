import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    console.log('Hook de animação iniciado!');
    const elementos = document.querySelectorAll('.revelar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
          console.log('Elemento apareceu:', entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    elementos.forEach(el => observer.observe(el));

    return () => {
      elementos.forEach(el => observer.unobserve(el));
      console.log('Hook de animação limpo!');
    };
  }, []);
}