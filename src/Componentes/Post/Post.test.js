import { render, screen } from '@testing-library/react';
import SeccionPost from './Post';

describe('SeccionPost Component', () => {
  it('should contain the expected paragraph', () => {
    const expectedText = /Sumérgete en el mundo mágico de las plantas de hogar/i;
    render(<SeccionPost />);
    const paragraphElement = screen.getByText(expectedText);
    expect(paragraphElement).toBeInTheDocument();
  });
});
