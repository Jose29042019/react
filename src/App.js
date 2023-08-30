import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Banner from './Componentes/Banner/Banner';
import Header2 from './Componentes/Header2/Header2';
import Banner2 from './Componentes/Banner2/Banner2';
import Bienvenidos from './Componentes/Bienvenidos/Bienvenidos';
import Tienda from './Componentes/Tienda/Tienda';
import SeccionPost from './Componentes/Post/Post';
import FundamentoCuidado from './Componentes/FundamentoCuidado/FundamentoCuidado';
import Testimonios from './Componentes/Testimonios/Testimonios';
import PreguntasFrecuentes from './Componentes/PreguntasFrecuentes/PreguntasFrecuentes';
import Contactanos from './Componentes/Contactanos/Contactanos';
import Calificanos from './Componentes/Calificanos/Calificanos';
import Footer from './Componentes/Footer/Footer';
import ContenedorTienda from './Componentes/ContenedorTienda/ContenedorTienda';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>          
          <Route  path="carrito.html" element = {<PaginaSecundaria/>}></Route >
        </Routes>
      </BrowserRouter>
  );
}

function HomePage() {
  return (
    <React.StrictMode>
      <Header />
      <Banner />
      <Bienvenidos />
      <Tienda />
      <SeccionPost />
      <FundamentoCuidado />
      <Testimonios />
      <PreguntasFrecuentes />
      <Contactanos />
      <Calificanos />
      <Footer/>
    </React.StrictMode>
  );
}

function PaginaSecundaria() {
  return (
    <React.StrictMode>
      <Header2 />
      <ContenedorTienda/>
    </React.StrictMode>
  );
}

export default App;
