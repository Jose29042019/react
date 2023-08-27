import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Bienvenidos from './Bienvenidos';

describe('Bienvenidos Component', () => {
  it('should contain the expected text and links', () => {
    const { getByText, getByRole } = render(<Bienvenidos />);

    const titleElement = getByText('¡Bienvenidos a Plantas de Hogar! CREANDO ESPACIOS LLENOS DE VIDA Y ARMONÍA');
    const subtitleElement = getByText('Donde la Belleza Natural se Convierte en Tu Refugio Cotidiano');
    const paragraphElement = getByText(/Somos más que una tienda de plantas. Nos destacamos como una empresa apasionada por llevar la magia de la naturaleza a tu hogar\./);
    const linkElement = getByRole('link', { name: /descubrir más/i });


    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
