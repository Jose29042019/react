import React from 'react';
import { render } from '@testing-library/react';
import Testimonios from './Testimonios';

test('renders testimonios component', () => {
  const { getByAltText, queryByText } = render(<Testimonios />);
  
  expect(getByAltText('Persona 1')).toBeInTheDocument();
  expect(getByAltText('Persona 2')).toBeInTheDocument();
  expect(getByAltText('Persona 3')).toBeInTheDocument();
  
  const expectedText1 = "¡Me encantan las plantas que compré aquí! Son de alta calidad y realmente han transformado mi hogar.";
  const expectedTextElement1 = queryByText(expectedText1, { normalizeWhitespace: true });
  expect(expectedTextElement1).toBeInTheDocument();
  
  const expectedText2 = "La variedad de plantas que ofrecen es increíble. Siempre encuentro algo nuevo para agregar a mi colección.";
  const expectedTextElement2 = queryByText(expectedText2, { normalizeWhitespace: true });
  expect(expectedTextElement2).toBeInTheDocument();
  
  const expectedText3 = "El servicio al cliente es excelente. Respondieron todas mis preguntas y me ayudaron a elegir las plantas adecuadas.";
  const expectedTextElement3 = queryByText(expectedText3, { normalizeWhitespace: true });
  expect(expectedTextElement3).toBeInTheDocument();
  
  expect(queryByText('Cliente 1')).toBeInTheDocument();
  expect(queryByText('Cliente 2')).toBeInTheDocument();
  expect(queryByText('Cliente 3')).toBeInTheDocument();
});
