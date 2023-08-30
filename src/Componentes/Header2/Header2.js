import React from 'react';

function Header() {
  return (
    <header>
      <div className="container nav">
        <a href="/index.html" className="logo">Plantas de hogar</a>
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

export default Header;
