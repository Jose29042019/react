// Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);
  
  const footerText = screen.getByText('© 2023 Jose Julian Naranjo');
  expect(footerText).toBeInTheDocument();
});
