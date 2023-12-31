//Jose Julian Naranjo Algarin

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Componentes/Header/Header';
import Banner from './Componentes/Banner/Banner';
import Bienvenidos from './Componentes/Bienvenidos/Bienvenidos';
import Tienda from './Componentes/Tienda/Tienda';
import SeccionPost from './Componentes/Post/Post';
import FundamentoCuidado from './Componentes/FundamentoCuidado/FundamentoCuidado';
import Testimonios from './Componentes/Testimonios/Testimonios';
import PreguntasFrecuentes from './Componentes/PreguntasFrecuentes/PreguntasFrecuentes';
import Contactanos from './Componentes/Contactanos/Contactanos';
import Calificanos from './Componentes/Calificanos/Calificanos';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
