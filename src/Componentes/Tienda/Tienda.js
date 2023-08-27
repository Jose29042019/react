import React from 'react';
import './Tienda.css';


function Tienda() {
  return (
    <section id="tienda">
      <div className="titulo-tienda">
        <h2>Nuestro Catálogo</h2>
      </div>
      <article className="articulo_tienda">
        <div className="producto-flex">
          <div className="planta">
            <img src="/img/Calathea.png" alt="Calathea" />
            <h2>Calathea</h2>
            <div className="descripcion">
              <h3>Plantas con hojas llamativas y patrones únicos que vienen en diferentes variedades y colores.</h3>
            </div>
          </div>

          <div className="planta">
            <img src="img/Pothos.png" alt="Pothos" />
            <h2>Pothos</h2>
            <div className="descripcion">
              <h3>Una planta colgante de rápido crecimiento con hojas en forma de corazón y patrones variegados en tonos de verde y blanco.</h3>
            </div>
          </div>

          <div className="planta">
            <img src="img/Ficus Elástica.png" alt="Ficus Elástica" />
            <h2>Ficus Elástica</h2>
            <div className="descripcion">
              <h3>También conocida como "Gomero", es una planta de hojas grandes y brillantes que puede añadir un toque de elegancia a cualquier espacio.</h3>
            </div>
          </div>
        </div>
        <div className="btn-tienda">
          <a href="carrito.html">Tienda</a>
        </div>
      </article>
    </section>
  );
}

export default Tienda;
