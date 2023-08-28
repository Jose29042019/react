import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contactanos from './Contactanos';

test('displays alert after submitting form', () => {
  render(<Contactanos />);

  
  const nameInput = screen.getByPlaceholderText('Ingresa tu nombre');
  const emailInput = screen.getByPlaceholderText('Ingresa tu correo');
  const messageInput = screen.getByPlaceholderText('Ingresa tu mensaje');
  const enviarButton = screen.getByText('Enviar mensaje');

  
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });

  
  const originalAlert = window.alert;
  window.alert = jest.fn();

  
  fireEvent.click(enviarButton);

  
  expect(window.alert).toHaveBeenCalledWith("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");

  
  window.alert = originalAlert;
});
