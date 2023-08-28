import React, { useState } from 'react';
import './Calificanos.css';

function Calificanos() {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      alert('¡Gracias por tu calificación!');
    } else {
      alert('Por favor, selecciona una calificación antes de enviar.');
    }
  };

  return (
    <section className="calificanos">
      <div className="container">
        <h2>Califícanos</h2>
        <p>¡Nos encantaría saber tu opinión! Por favor, califica nuestros productos y servicios.</p>
        <div className="stars">
          {[5, 4, 3, 2, 1].map((value) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`star${value}`}
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
              />
              <label htmlFor={`star${value}`}>&#9733;</label>
            </React.Fragment>
          ))}
        </div>
        <textarea id="review" placeholder="Escribe tu opinión"></textarea>
        <button id="btn-enviar" type="button" onClick={handleSubmit}>
          Enviar Reseña
        </button>
      </div>
    </section>
  );
}

export default Calificanos;

