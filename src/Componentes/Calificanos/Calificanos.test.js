import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calificanos from './Calificanos';

test('renderea el componente Calificanos', () => {
  render(<Calificanos />);
  
  const titulo = screen.getByText('Califícanos');
  expect(titulo).toBeInTheDocument();

  const inputsDeCalificacion = screen.getAllByRole('radio');
  expect(inputsDeCalificacion).toHaveLength(5);

  const inputDeOpinion = screen.getByPlaceholderText('Escribe tu opinión');
  expect(inputDeOpinion).toBeInTheDocument();

  const botonEnviar = screen.getByText('Enviar Reseña');
  expect(botonEnviar).toBeInTheDocument();
});

test('actualiza la calificación al hacer clic en las estrellas', () => {
  render(<Calificanos />);
  
  const estrella3 = screen.getByLabelText('3');
  fireEvent.click(estrella3);

  const estrellaSeleccionada = screen.getByLabelText('3');
  expect(estrellaSeleccionada).toBeChecked();
});

test('actualiza la opinión al escribir en el área de texto', () => {
  render(<Calificanos />);
  
  const inputDeOpinion = screen.getByPlaceholderText('Escribe tu opinión');
  fireEvent.change(inputDeOpinion, { target: { value: '¡Excelente servicio!' } });

  expect(inputDeOpinion).toHaveValue('¡Excelente servicio!');
});
