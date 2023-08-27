import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  it('should render the title', () => {
    const { getByText } = render(<Banner />);
    const titleElement = getByText('Eleva tu Espacio');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the description', () => {
    const { getByText } = render(<Banner />);
    const descriptionElement = getByText(/Encuentra la manera perfecta de transformar tu hogar/);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should have a background image', () => {
    const { container } = render(<Banner />);
    const bannerElement = container.querySelector('#banner');
    expect(bannerElement).toHaveStyle('background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/banner1.png")');
  });  
});
