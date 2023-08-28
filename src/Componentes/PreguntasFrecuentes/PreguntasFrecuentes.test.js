// Importar las dependencias de prueba
import { render, screen } from '@testing-library/react';
import FAQ from './PreguntasFrecuentes'; // Importar el componente de preguntas frecuentes

test('renders FAQ component', () => {
  // Renderizar el componente
  render(<FAQ />);

  // Verificar la existencia de preguntas frecuentes
  const question1 = screen.getByText("¿Cómo puedo hacer una compra en el catálogo?");
  expect(question1).toBeInTheDocument();

  const question2 = screen.getByText("¿Qué métodos de pago aceptan?");
  expect(question2).toBeInTheDocument();

  const question3 = screen.getByText("¿Cuánto tiempo tarda en llegar mi pedido?");
  expect(question3).toBeInTheDocument();

  const question4 = screen.getByText("¿Cómo puedo contactar al servicio al cliente?");
  expect(question4).toBeInTheDocument();
});
