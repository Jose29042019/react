import React, { useState } from 'react';
import './Contactanos.css';


function Contactanos() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier acción necesaria antes de mostrar la alerta
    setSubmitted(true);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="container-form">
      <div className="info-form">
        <h2>Contactanos</h2>
        <p>"¡Estamos aquí para escucharte! Contáctanos y permítenos ser parte de tu experiencia. Tu opinión y preguntas son importantes para nosotros."</p>
        <a href="#container-form"> <i className="bi bi-telephone-fill"></i> 315-311-1350</a>
        <a href="#container-form"> <i className="bi bi-envelope-at"></i> naranjoalgarinj@gmail.com</a>
        <a href="#container-form"> <i className="bi bi-geo-alt-fill"></i> Sahagun, Cordoba</a>
      </div>
      <form action="#" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Ingresa tu nombre</label>
        <input id="nombre" name="nombre" placeholder="Ingresa tu nombre" type="text" className='campo'/>
        <input type="email" name="email" placeholder="Ingresa tu correo" className="campo" />
        <textarea name="mensaje" placeholder="Ingresa tu mensaje"></textarea>
        <input type="submit" name="enviar" value="Enviar mensaje" className="btn-enviar" />
      </form>
    </section>
  );
}

export default Contactanos;
