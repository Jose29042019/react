import React from 'react';
import { render } from '@testing-library/react';
import FundamentoCuidado from './FundamentoCuidado';

describe('FundamentoCuidado', () => {
  it('renders correctly', () => {
    const { getByText } = render(<FundamentoCuidado />);
    
    expect(getByText('Fundamentos del Cuidado de Plantas')).toBeInTheDocument();
    expect(getByText('Luz:')).toBeInTheDocument();
    expect(getByText('Agua:')).toBeInTheDocument();
    expect(getByText('Sustrato:')).toBeInTheDocument();
    expect(getByText('Clima y Humedad:')).toBeInTheDocument();
    expect(getByText('Poda y Mantenimiento:')).toBeInTheDocument();
    expect(getByText('Conclusión:')).toBeInTheDocument();
  });
});
