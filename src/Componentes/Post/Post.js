import React from 'react';
import './Post.css';

function SeccionPost() {
  return (
    <section id="post">
      <div className="descripcion_post">
        <h2>Descubre nuestra historia</h2>
        <p>Sumérgete en el mundo mágico de las plantas de hogar, donde la belleza natural y la tranquilidad se
          fusionan en un abrazo verde. Descubre cómo estas compañeras de hojas y raíces pueden revitalizar tu
          espacio, purificar el aire y añadir un toque de serenidad a cada rincón. Desde las suculentas que
          brillan con resistencia hasta los helechos que danzan en la brisa interior, exploraremos juntos el
          arte de cuidar y disfrutar de la naturaleza en la comodidad de tu hogar</p>
      </div>

      <div className="img-post">
        <img src="img/post.png" alt="post" />
      </div>
    </section>
  );
}

export default SeccionPost;
