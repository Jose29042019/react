import React from 'react';
import './Bienvenidos.css';

function Bienvenidos() {
  return (
    <section className="bienvenidos">
      <div className="texto-bienvenidos">
        <h2 className="texto-1">¡Bienvenidos a Plantas de Hogar! CREANDO ESPACIOS LLENOS DE VIDA Y ARMONÍA</h2>
        <h2 className="texto-2">Donde la Belleza Natural se Convierte en Tu Refugio Cotidiano</h2>
        <p className="parrafo-1">Somos más que una tienda de plantas. Nos destacamos como una empresa apasionada por llevar la magia de la naturaleza a tu hogar. Con un enfoque en la calidad y el diseño, creamos ambientes que respiran frescura y energía, adaptados a tus gustos y necesidades. Descubre cómo nuestras plantas pueden transformar tu espacio en un rincón lleno de serenidad y vitalidad.</p>
      </div>

      <div className="btn-bienvenidos">
        <a href="#post">Descubrir más</a>
      </div>
    </section>
  );
}

export default Bienvenidos;
