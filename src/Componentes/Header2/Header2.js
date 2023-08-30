import React, { useEffect } from 'react';
import './Header2.css';

function Header2() {
  useEffect(() => {
    // Seleccionar elementos del DOM y definir las funciones de eventos
    const iconoCarta = document.querySelector('#icono-carrito');
    const carta = document.querySelector('.carta');
    const cerrarCarta = document.querySelector('#cerrar-carta');

    const abrirCarta = () => {
      carta.classList.add('activo');
    };

    const cerrarLaCarta = () => {
      carta.classList.remove('activo');
    };

    iconoCarta.addEventListener('click', abrirCarta);
    cerrarCarta.addEventListener('click', cerrarLaCarta);

    const ready = () => {
      // Lógica adicional cuando el DOM está listo
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }

    return () => {
      // Limpiar los eventos al desmontar el componente
      iconoCarta.removeEventListener('click', abrirCarta);
      cerrarCarta.removeEventListener('click', cerrarLaCarta);
    };
  }, []);
  
    return (
    <header>
      <div className="container nav">
        <a href="/" className="logo">Plantas de hogar</a>
        <i className="bi bi-bag-dash" id="icono-carrito"></i>
        {/* Carta */}
        <div className="carta">
          <h2 className="titulo-carta">tu lista</h2>
          {/* Contenido de la carta */}
          <div className="contenido-carta"></div>
          {/* Total */}
          <div className="total">
            <div className="total-titulo">total</div>
            <div className="total-precio">$0</div>
          </div>
          {/* Botón Comprar */}
          <button type="button" className="btn-comprar"> Comprar!</button>
          {/* Cerrar Carta */}
          <i className="bi bi-x" id="cerrar-carta"></i>
        </div>
      </div>
    </header>
  );
}

export default Header2;
