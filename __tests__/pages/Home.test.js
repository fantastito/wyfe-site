import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders the Navbar component', () => {
    render(<Home />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the logo with correct attributes', () => {
    render(<Home />);

    const logo = screen.getByAltText('Wyfe Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the background image renders', () => {
    render(<Home />);
    
    const backgroundImage = screen.getByAltText('Background Image');
    expect(backgroundImage).toBeInTheDocument();
  });

  it('renders the footer ok', () => {
    render(<Home />);

    expect(screen.getByText(/© Wyfe 2024/i)).toBeInTheDocument();
  })
});
