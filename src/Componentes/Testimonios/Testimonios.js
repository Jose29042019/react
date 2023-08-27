import React from 'react';

function Testimonios() {
  return (
    <section className="testimonios">
      <div className="titulo-testimonios">
        <h2>Testimonios de nuestros clientes</h2>
      </div>
      <div className="lista-testimonios">
        <div className="testimonio">
          <img src="img/persona1.jpg" alt="Persona 1" />
          <p>"¡Me encantan las plantas que compré aquí! Son de alta calidad y realmente han transformado mi hogar."</p>
          <h3>Cliente 1</h3>
        </div>
        <div className="testimonio">
          <img src="img/persona2.jpg" alt="Persona 2" />
          <p>"La variedad de plantas que ofrecen es increíble. Siempre encuentro algo nuevo para agregar a mi colección."</p>
          <h3>Cliente 2</h3>
        </div>
        <div className="testimonio">
          <img src="img/persona3.jpg" alt="Persona 3" />
          <p>"El servicio al cliente es excelente. Respondieron todas mis preguntas y me ayudaron a elegir las plantas adecuadas."</p>
          <h3>Cliente 3</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
