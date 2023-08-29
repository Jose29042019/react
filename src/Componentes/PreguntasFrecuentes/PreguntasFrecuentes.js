import React from 'react';
import './PreguntasFrecuentes.css';

function PreguntasFrecuentes() {
  const handleEnviar = () => {
    alert('¡Gracias por calificarnos! Tu opinión es muy importante para nosotros.');
    // Aquí puedes realizar acciones adicionales después de mostrar la alerta
  };

  return (
    <section>
      <div className="contenedor-preguntas">
        <h2>Preguntas frecuentes</h2>
        <div className="acordeon">
          <input type="radio" name="acordeon" id="btn-acordeon1" className="btn-acordeon" />
          <label htmlFor="btn-acordeon1">¿Cómo puedo hacer una compra en el catálogo?</label>
          <div className="contenido-acordeon">
            <p>
              1. Explora nuestra selección de productos en las diferentes categorías. <br />
              2. Haz clic en el producto que te interese para ver más detalles. <br />
              3. Selecciona las opciones (como tamaño, color, etc.) si corresponde.<br />
              4. Haz clic en el botón "Agregar al carrito".<br />
              5. Cuando hayas terminado de seleccionar productos, ve a tu carrito de compras <br />
              haciendo clic en el ícono del carrito en la esquina superior derecha.<br />
              6. Revisa los productos en tu carrito y haz clic en "Finalizar compra" para proceder <br />
              al proceso de pago.<br />
            </p>
          </div>
        </div>
        <div className="acordeon">
          <input type="radio" name="acordeon" id="btn-acordeon2" className="btn-acordeon" />
          <label htmlFor="btn-acordeon2">¿Qué métodos de pago aceptan?</label>
          <div className="contenido-acordeon">
            <p>
              Aceptamos tarjetas de crédito y débito principales, como Visa, MasterCard y <br />
              American Express. También ofrecemos la opción de pagar a través de PayPal <br />
              para mayor conveniencia y seguridad. Todos los métodos de pago están protegidos <br />
              con medidas de seguridad para asegurar tus transacciones.
            </p>
          </div>
        </div>
        <div className="acordeon">
          <input type="radio" name="acordeon" id="btn-acordeon3" className="btn-acordeon" />
          <label htmlFor="btn-acordeon3">¿Cuánto tiempo tarda en llegar mi pedido?</label>
          <div className="contenido-acordeon">
            <p>
              El tiempo estimado de envío depende de tu ubicación y el método de envío seleccionado. <br />
              Por lo general, los pedidos se procesan en 1-2 días hábiles y el tiempo de envío varía entre
              <br /> 3-7 días hábiles. Sin embargo, ten en cuenta que pueden surgir retrasos debido a
              factores <br /> externos como días festivos o condiciones climáticas.
            </p>
          </div>
        </div>
        <div className="acordeon">
          <input type="radio" name="acordeon" id="btn-acordeon4" className="btn-acordeon" />
          <label htmlFor="btn-acordeon4">¿Cómo puedo contactar al servicio al cliente?</label>
          <div className="contenido-acordeon">
            <p>
              Si tienes preguntas o necesitas ayuda, puedes contactarnos a través de nuestro formulario
              <br /> de contacto en línea, por correo electrónico o a través de nuestras redes sociales.
              <br /> Nuestro equipo estará encantado de ayudarte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;