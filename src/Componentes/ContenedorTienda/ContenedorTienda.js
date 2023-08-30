import React, { useState } from 'react';
import './ContenedorTienda.css'
import aloe from '../../img/suculentas/aloe vera.jpg';
import Crassula from '../../img/suculentas/Crassula.jpg';
import Echeverias from '../../img/suculentas/Echeverias.jpg';
import Haworthias from '../../img/suculentas/Haworthias.jpg';
import Sedums from '../../img/suculentas/Sedums.jpg';
import Begonias from '../../img/flores/Begonias.jpg';
import Orquideas from '../../img/flores/Orquídeas.jpg';
import Violetas from '../../img/flores/Violetas Africanas.jpg';
import Areca from '../../img/palma de interior/Areca.jpg';
import Chamaedorea from '../../img/palma de interior/Chamaedorea.jpg';
import Kentia from '../../img/palma de interior/Kentia.jpg';
import Livistona from '../../img/palma de interior/Livistona.jpg';
import Raphis from '../../img/palma de interior/raphis.jpg';

function ContenedorTienda() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeCartItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (updatedCart) => {
    let total = 0;
    updatedCart.forEach((item) => {
      total += parseFloat(item.price) * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const addToCart = (title, price, imgSrc) => {
    const newItem = {
      title: title,
      price: price,
      imgSrc: imgSrc,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
    updateTotalPrice([...cartItems, newItem]);
  };

  const checkout = () => {
    alert('Tu orden ha sido realizada');
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <section className="contenedor tienda">
      <h2 className="contenedor-titulo">Nuestros productos</h2>
      {/* Contenido */}
        <div className="contenido-tienda">
        {/* Contenido caja 1 */}
        <div className="caja-producto">
          <img src={aloe} alt="" className="producto-img" />
          <h2 className="titulo-producto">Aloe vera</h2>
          <span className="precio">$25.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 2 */}
        <div className="caja-producto">
          <img src={Crassula} alt="" className="producto-img" />
          <h2 className="titulo-producto">Crassula</h2>
          <span className="precio">$30.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 3 */}
        <div className="caja-producto">
          <img src={Echeverias} alt="" className="producto-img" />
          <h2 className="titulo-producto">Echeverias</h2>
          <span className="precio">$35.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 4 */}
        <div className="caja-producto">
          <img src={Haworthias} alt="" className="producto-img" />
          <h2 className="titulo-producto">Haworthias</h2>
          <span className="precio">$20.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 5 */}
        <div className="caja-producto">
          <img src={Sedums} alt="" className="producto-img" />
          <h2 className="titulo-producto">Sedums</h2>
          <span className="precio">$40.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 6 */}
        <div className="caja-producto">
          <img src={Begonias} alt="" className="producto-img" />
          <h2 className="titulo-producto">Begonias</h2>
          <span className="precio">$32.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 7 */}
        <div className="caja-producto">
          <img src={Orquideas} alt="" className="producto-img" />
          <h2 className="titulo-producto">Orquideas</h2>
          <span className="precio">$31.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 8 */}
        <div className="caja-producto">
          <img src={Violetas} alt="" className="producto-img" />
          <h2 className="titulo-producto">Violetas Africanas</h2>
          <span className="precio">$48.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 9 */}
        <div className="caja-producto">
          <img src={Areca} alt="" className="producto-img" />
          <h2 className="titulo-producto">Areca</h2>
          <span className="precio">$36.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 10 */}
        <div className="caja-producto">
          <img src={Chamaedorea} alt="" className="producto-img" />
          <h2 className="titulo-producto">Chamaedorea</h2>
          <span className="precio">$22.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 11 */}
        <div className="caja-producto">
          <img src={Kentia} alt="" className="producto-img" />
          <h2 className="titulo-producto">Kentia</h2>
          <span className="precio">$28.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 12 */}
        <div className="caja-producto">
          <img src={Livistona} alt="" className="producto-img" />
          <h2 className="titulo-producto">Livistona</h2>
          <span className="precio">$33.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
        {/* Contenido caja 13 */}
        <div className="caja-producto">
          <img src={Raphis} alt="" className="producto-img" />
          <h2 className="titulo-producto">raphis</h2>
          <span className="precio">$40.000</span>
          <i className="bi bi-bag-dash agregar-carrito"></i>
        </div>
      </div>

    </section>
  );
}

export default ContenedorTienda;