import React from 'react';
import { render } from '@testing-library/react';
import Tienda from './Tienda';

describe('Tienda Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Tienda />);
    const tiendaElement = container.querySelector('#tienda');
    expect(tiendaElement).toBeInTheDocument();
  });

  it('should contain the catalog title', () => {
    const { getByText } = render(<Tienda />);
    const titleElement = getByText('Nuestro Catálogo');
    expect(titleElement).toBeInTheDocument();
  });

  it('should contain product information', () => {
    const { container } = render(<Tienda />);
    const productElements = container.querySelectorAll('.planta');
    expect(productElements.length).toBeGreaterThan(0);
  });

  it('should have a link to the store', () => {
    const { getByRole } = render(<Tienda />);
    const linkElement = getByRole('link', { name: 'Tienda' });
    expect(linkElement).toHaveAttribute('href', 'carrito.html');
  });
});
